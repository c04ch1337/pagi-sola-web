use dashmap::DashMap;
use ed25519_dalek::Signer as _;
use serde::Serialize;
use std::net::SocketAddr;
use std::pin::Pin;
use std::sync::Arc;
use tokio::sync::mpsc;
use tokio_stream::StreamExt as _;
use tokio_stream::wrappers::ReceiverStream;
use tonic::transport::{Certificate, Identity, Server, ServerTlsConfig};
use tonic::{Request, Response, Status};
use tracing::{info, warn};

use swarm_control_proto::swarm_control::swarm_control_server::{SwarmControl, SwarmControlServer};
use swarm_control_proto::swarm_control::{Command, ControlMessage, StatusUpdate, control_message};

#[derive(Clone)]
struct ControlState {
    /// Active outbound streams keyed by agent_id.
    connections: Arc<DashMap<String, mpsc::Sender<ControlMessage>>>,
    /// Optional shared token used for access control.
    shared_token: Option<String>,
    /// QUEEN signing key (Ed25519) for commands.
    queen_signing_key: Option<ed25519_dalek::SigningKey>,
}

#[derive(Clone)]
struct ControlSvc {
    state: ControlState,
}

#[tonic::async_trait]
impl SwarmControl for ControlSvc {
    type StreamControlStream =
        Pin<Box<dyn tokio_stream::Stream<Item = Result<ControlMessage, Status>> + Send + 'static>>;

    async fn stream_control(
        &self,
        req: Request<tonic::Streaming<ControlMessage>>,
    ) -> Result<Response<Self::StreamControlStream>, Status> {
        // Optional bearer-token auth (defense-in-depth on top of mTLS).
        if let Some(expected) = &self.state.shared_token {
            let auth = req
                .metadata()
                .get("authorization")
                .and_then(|v| v.to_str().ok())
                .unwrap_or("");
            let expected_header = format!("Bearer {expected}");
            if auth != expected_header {
                return Err(Status::unauthenticated(
                    "missing/invalid authorization token",
                ));
            }
        }

        let mut inbound = req.into_inner();
        let (tx, rx) = mpsc::channel::<ControlMessage>(128);
        let connections = self.state.connections.clone();

        // Spawn the read loop (Agent -> Hub). We register the outbound sender keyed by agent_id
        // once we learn it from the first StatusUpdate.
        tokio::spawn(async move {
            let mut registered_agent_id: Option<String> = None;

            while let Ok(Some(msg)) = inbound.message().await {
                match msg.message {
                    Some(control_message::Message::StatusUpdate(StatusUpdate {
                        agent_id,
                        heartbeat_timestamp,
                        current_status_code,
                    })) => {
                        if agent_id.trim().is_empty() {
                            continue;
                        }
                        if registered_agent_id.as_deref() != Some(agent_id.as_str()) {
                            connections.insert(agent_id.clone(), tx.clone());
                            registered_agent_id = Some(agent_id.clone());
                            info!("control channel registered agent_id={agent_id}");
                        }
                        tracing::debug!(
                            "status_update agent_id={} heartbeat_timestamp={} current_status_code={}",
                            agent_id,
                            heartbeat_timestamp,
                            current_status_code
                        );
                    }
                    Some(control_message::Message::Command(_)) => {
                        // Agents should not send commands to the Hub in this Phase.
                        warn!("ignoring inbound Command from client");
                    }
                    None => {}
                }
            }

            // Best-effort cleanup.
            if let Some(agent_id) = registered_agent_id {
                connections.remove(&agent_id);
                info!("control channel disconnected agent_id={agent_id}");
            }
        });

        let out = ReceiverStream::new(rx).map(Ok);
        Ok(Response::new(Box::pin(out)))
    }
}

#[derive(Debug, Serialize)]
struct QueenTakeoverPayload {
    kind: String,
    ts_unix: i64,
    note: String,
}

fn b64_decode(s: &str) -> Result<Vec<u8>, String> {
    use base64::Engine as _;
    base64::engine::general_purpose::STANDARD
        .decode(s.trim())
        .map_err(|e| format!("invalid base64: {e}"))
}

fn load_signing_key_from_env() -> Result<ed25519_dalek::SigningKey, String> {
    let b64 = std::env::var("QUEEN_SIGNING_PRIVATE_KEY_B64")
        .map_err(|_| "missing QUEEN_SIGNING_PRIVATE_KEY_B64".to_string())?;
    let bytes = b64_decode(&b64)?;
    let seed: [u8; 32] = bytes
        .try_into()
        .map_err(|_| "QUEEN_SIGNING_PRIVATE_KEY_B64 must decode to 32 bytes".to_string())?;
    Ok(ed25519_dalek::SigningKey::from_bytes(&seed))
}

fn load_pem(path: &str) -> Result<Vec<u8>, String> {
    std::fs::read(path).map_err(|e| format!("failed to read PEM file '{path}': {e}"))
}

impl ControlState {
    async fn inject_queen_takeover(&self, agent_id: &str) -> Result<(), String> {
        let Some(sender) = self.connections.get(agent_id).map(|e| e.clone()) else {
            return Err(format!("agent_id not connected: {agent_id}"));
        };
        let Some(signing_key) = &self.queen_signing_key else {
            return Err("QUEEN signing key not configured".to_string());
        };

        let payload = QueenTakeoverPayload {
            kind: "QUEEN_TAKEOVER".to_string(),
            ts_unix: chrono::Utc::now().timestamp(),
            note: "internal takeover injected".to_string(),
        };
        let signed_payload =
            serde_json::to_vec(&payload).map_err(|e| format!("payload serialize failed: {e}"))?;
        let signature = signing_key.sign(&signed_payload);

        let cmd = Command {
            id: uuid::Uuid::new_v4().to_string(),
            signed_payload,
            signature: signature.to_bytes().to_vec(),
        };
        let msg = ControlMessage {
            message: Some(control_message::Message::Command(cmd)),
        };

        sender
            .send(msg)
            .await
            .map_err(|e| format!("failed to send takeover to agent_id={agent_id}: {e}"))?;
        Ok(())
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    dotenvy::dotenv().ok();

    tracing_subscriber::fmt()
        .with_env_filter(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| tracing_subscriber::EnvFilter::new("info")),
        )
        .init();

    let bind: SocketAddr = std::env::var("CONTROL_GRPC_BIND")
        .unwrap_or_else(|_| "127.0.0.1:5005".to_string())
        .parse()?;

    let shared_token = std::env::var("CONTROL_CHANNEL_SHARED_TOKEN").ok();

    let queen_signing_key = load_signing_key_from_env().ok();
    if queen_signing_key.is_none() {
        warn!("QUEEN_SIGNING_PRIVATE_KEY_B64 not set; command injection will be disabled");
    }

    // TLS (Hub identity + optional client auth).
    // Env:
    // - HUB_TLS_CERT_PATH
    // - HUB_TLS_KEY_PATH
    // - QUEEN_CA_CERT_PATH (client cert CA)
    let cert = load_pem(&std::env::var("HUB_TLS_CERT_PATH")?)?;
    let key = load_pem(&std::env::var("HUB_TLS_KEY_PATH")?)?;
    let client_ca = load_pem(&std::env::var("QUEEN_CA_CERT_PATH")?)?;

    let tls = ServerTlsConfig::new()
        .identity(Identity::from_pem(cert, key))
        .client_ca_root(Certificate::from_pem(client_ca));

    let state = ControlState {
        connections: Arc::new(DashMap::new()),
        shared_token,
        queen_signing_key,
    };

    // Demo internal trigger: if QUEEN_TAKEOVER_AGENT_ID is set, inject after a short delay.
    if let Ok(agent_id) = std::env::var("QUEEN_TAKEOVER_AGENT_ID") {
        let st = state.clone();
        tokio::spawn(async move {
            tokio::time::sleep(std::time::Duration::from_secs(10)).await;
            match st.inject_queen_takeover(&agent_id).await {
                Ok(_) => info!("injected QUEEN_TAKEOVER agent_id={agent_id}"),
                Err(e) => warn!("failed to inject QUEEN_TAKEOVER agent_id={agent_id}: {e}"),
            }
        });
    }

    info!("SWARM Control gRPC server listening at https://{bind}");
    Server::builder()
        .tls_config(tls)?
        .add_service(SwarmControlServer::new(ControlSvc { state }))
        .serve(bind)
        .await?;

    Ok(())
}
