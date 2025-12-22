use actix_web::{App, HttpRequest, HttpResponse, HttpServer, middleware, web};
use common_types::api::ApiErrorResponse;
use serde::{Deserialize, Serialize};
use std::io;
use std::io::BufReader;
use std::{fs::File, sync::Arc};
use tracing::{info, warn};

use rustls::RootCertStore;
use rustls::pki_types::{CertificateDer, PrivateKeyDer};
use rustls::server::WebPkiClientVerifier;

use ed25519_dalek::Signer as _;

#[derive(Clone)]
struct AppState {
    db: Option<sled::Db>,
    signing_key: Option<ed25519_dalek::SigningKey>,
}

fn api_error_forbidden_mtls(instance: &str, detail: impl Into<String>) -> ApiErrorResponse {
    ApiErrorResponse::new(
        "403-MTLS-FAILURE",
        "mTLS authentication failed",
        detail,
        403,
        instance,
    )
}

fn api_error_db_down(instance: &str, detail: impl Into<String>) -> ApiErrorResponse {
    ApiErrorResponse::new("503-DB-DOWN", "Database unavailable", detail, 503, instance)
}

fn api_error_signing_key_down(instance: &str, detail: impl Into<String>) -> ApiErrorResponse {
    ApiErrorResponse::new(
        "503-SIGNING-KEY-DOWN",
        "Signing key unavailable",
        detail,
        503,
        instance,
    )
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct SignedConfigResponse {
    agent_id: String,
    config: serde_json::Value,
    payload_b64: String,
    signature_b64: String,
}

fn b64_encode(bytes: &[u8]) -> String {
    use base64::Engine as _;
    base64::engine::general_purpose::STANDARD.encode(bytes)
}

fn b64_decode(s: &str) -> Result<Vec<u8>, String> {
    use base64::Engine as _;
    base64::engine::general_purpose::STANDARD
        .decode(s.trim())
        .map_err(|e| format!("invalid base64: {e}"))
}

fn load_signing_key_from_env() -> Result<ed25519_dalek::SigningKey, String> {
    // 32-byte Ed25519 secret key seed (base64).
    let b64 = std::env::var("QUEEN_SIGNING_PRIVATE_KEY_B64")
        .map_err(|_| "missing QUEEN_SIGNING_PRIVATE_KEY_B64".to_string())?;
    let bytes = b64_decode(&b64)?;
    let seed: [u8; 32] = bytes
        .try_into()
        .map_err(|_| "QUEEN_SIGNING_PRIVATE_KEY_B64 must decode to 32 bytes".to_string())?;
    Ok(ed25519_dalek::SigningKey::from_bytes(&seed))
}

fn read_env_required(key: &str) -> Result<String, io::Error> {
    std::env::var(key)
        .map_err(|_| io::Error::new(io::ErrorKind::InvalidInput, format!("missing {key}")))
}

fn load_certs_from_pem(path: &str) -> Result<Vec<CertificateDer<'static>>, io::Error> {
    let f = File::open(path).map_err(|e| {
        io::Error::new(
            io::ErrorKind::InvalidInput,
            format!("failed to open cert file '{path}': {e}"),
        )
    })?;
    let mut reader = BufReader::new(f);
    let certs = rustls_pemfile::certs(&mut reader)
        .collect::<Result<Vec<_>, _>>()
        .map_err(|e| {
            io::Error::new(
                io::ErrorKind::InvalidInput,
                format!("failed to parse certs from '{path}': {e}"),
            )
        })?;
    if certs.is_empty() {
        return Err(io::Error::new(
            io::ErrorKind::InvalidInput,
            format!("no certificates found in '{path}'"),
        ));
    }
    Ok(certs)
}

fn load_private_key_from_pem(path: &str) -> Result<PrivateKeyDer<'static>, io::Error> {
    let f = File::open(path).map_err(|e| {
        io::Error::new(
            io::ErrorKind::InvalidInput,
            format!("failed to open key file '{path}': {e}"),
        )
    })?;
    let mut reader = BufReader::new(f);

    let key = rustls_pemfile::private_key(&mut reader)
        .map_err(|e| {
            io::Error::new(
                io::ErrorKind::InvalidInput,
                format!("failed to parse private key from '{path}': {e}"),
            )
        })?
        .ok_or_else(|| {
            io::Error::new(
                io::ErrorKind::InvalidInput,
                format!("no private key found in '{path}'"),
            )
        })?;
    Ok(key)
}

fn build_mtls_server_config() -> Result<rustls::ServerConfig, io::Error> {
    let tls_cert_path = read_env_required("HUB_TLS_CERT_PATH")?;
    let tls_key_path = read_env_required("HUB_TLS_KEY_PATH")?;
    let queen_ca_path = read_env_required("QUEEN_CA_CERT_PATH")?;

    let server_certs = load_certs_from_pem(&tls_cert_path)?;
    let server_key = load_private_key_from_pem(&tls_key_path)?;

    let mut roots = RootCertStore::empty();
    for ca in load_certs_from_pem(&queen_ca_path)? {
        roots.add(ca).map_err(|e| {
            io::Error::new(
                io::ErrorKind::InvalidInput,
                format!("failed to add CA cert from '{queen_ca_path}': {e}"),
            )
        })?;
    }

    let verifier = WebPkiClientVerifier::builder(Arc::new(roots))
        .build()
        .map_err(|e| {
            io::Error::new(
                io::ErrorKind::InvalidInput,
                format!("failed to build client cert verifier: {e}"),
            )
        })?;

    let cfg = rustls::ServerConfig::builder()
        .with_client_cert_verifier(verifier)
        .with_single_cert(server_certs, server_key)
        .map_err(|e| {
            io::Error::new(
                io::ErrorKind::InvalidInput,
                format!("invalid server cert/key: {e}"),
            )
        })?;
    Ok(cfg)
}

async fn get_config(
    req: HttpRequest,
    state: web::Data<AppState>,
    agent_id: web::Path<String>,
) -> Result<HttpResponse, ApiErrorResponse> {
    let agent_id = agent_id.into_inner();
    let instance = req.path().to_string();

    // 1) Parse path parameter (best-effort validation).
    if agent_id.trim().is_empty() {
        return Err(ApiErrorResponse::new(
            "400-BAD-AGENT-ID",
            "Invalid agent_id",
            "agent_id path parameter must be non-empty",
            400,
            instance,
        ));
    }

    // 2) Authenticate via mTLS (Phase 1 is assumed done).
    // NOTE: If the server is configured with mandatory client authentication, failures will not
    // reach this handler (TLS handshake will fail). This check is a defense-in-depth guard.
    if req.connection_info().scheme() != "https" {
        return Err(api_error_forbidden_mtls(
            &instance,
            "request did not arrive over HTTPS/mTLS",
        ));
    }

    // 3) Internal logic (DB, etc.).
    let Some(db) = &state.db else {
        return Err(api_error_db_down(
            &instance,
            "configuration database unavailable",
        ));
    };
    let Some(signing_key) = &state.signing_key else {
        return Err(api_error_signing_key_down(
            &instance,
            "signing key unavailable",
        ));
    };

    // Retrieve config; if missing, serve a minimal default.
    let config: serde_json::Value = match db.get(agent_id.as_bytes()) {
        Ok(Some(v)) => serde_json::from_slice(&v).unwrap_or_else(|_| serde_json::json!({})),
        Ok(None) => serde_json::json!({
            "agent_id": agent_id,
            "overrides": {},
        }),
        Err(e) => return Err(api_error_db_down(&instance, format!("db read failed: {e}"))),
    };

    // 4) Return signed configuration.
    let payload = serde_json::to_vec(&config)
        .map_err(|e| api_error_db_down(&instance, format!("config serialization failed: {e}")))?;

    let signature = signing_key.sign(&payload);
    let resp = SignedConfigResponse {
        agent_id,
        config,
        payload_b64: b64_encode(&payload),
        signature_b64: b64_encode(&signature.to_bytes()),
    };

    Ok(HttpResponse::Ok().json(resp))
}

fn load_dotenv_best_effort() {
    // Best-effort only; does not error if missing.
    let _ = dotenvy::dotenv();
}

#[actix_web::main]
async fn main() -> io::Result<()> {
    load_dotenv_best_effort();

    tracing_subscriber::fmt()
        .with_env_filter(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| tracing_subscriber::EnvFilter::new("info")),
        )
        .init();

    let bind =
        std::env::var("CONFIG_SERVICE_BIND").unwrap_or_else(|_| "127.0.0.1:5004".to_string());

    // DB is optional at runtime; if it fails to open we still start and return 503 for requests.
    let db = match std::env::var("CONFIG_DB_PATH") {
        Ok(path) => match sled::open(&path) {
            Ok(db) => Some(db),
            Err(e) => {
                warn!("CONFIG_DB_PATH open failed (path={}): {}", path, e);
                None
            }
        },
        Err(_) => None,
    };

    let signing_key = match load_signing_key_from_env() {
        Ok(k) => Some(k),
        Err(e) => {
            warn!("QUEEN signing disabled: {e}");
            None
        }
    };

    let tls_cfg = build_mtls_server_config()?;
    info!("Config Service online at https://{bind} (mTLS required)");

    let state = web::Data::new(AppState { db, signing_key });

    HttpServer::new(move || {
        App::new()
            .app_data(state.clone())
            .wrap(middleware::Logger::default())
            .service(web::resource("/api/v1/config/{agent_id}").route(web::get().to(get_config)))
    })
    .bind_rustls_0_23(bind, tls_cfg)?
    .run()
    .await
}
