use anyhow::{anyhow, Context as _};

/// Build a `reqwest::Client` configured for Mutual TLS (mTLS).
///
/// Requirements (env):
/// - `AGENT_MTLS_CERT_PATH`: path to the agent client certificate PEM
/// - `AGENT_MTLS_KEY_PATH`: path to the agent private key PEM
/// - `HUB_ROOT_CA_CERT_PEM`: the Hub/QUEEN Root CA certificate (PEM bytes or a file path)
///
/// Security properties:
/// - Client presents a certificate during TLS handshake (mTLS).
/// - Server certificate verification is pinned to the configured Root CA.
pub fn create_mtls_client() -> Result<reqwest::Client, anyhow::Error> {
    let cert_path = std::env::var("AGENT_MTLS_CERT_PATH")
        .context("missing AGENT_MTLS_CERT_PATH")?;
    let key_path = std::env::var("AGENT_MTLS_KEY_PATH")
        .context("missing AGENT_MTLS_KEY_PATH")?;
    let hub_root_ca = std::env::var("HUB_ROOT_CA_CERT_PEM")
        .context("missing HUB_ROOT_CA_CERT_PEM")?;

    let cert_pem = std::fs::read(&cert_path)
        .with_context(|| format!("failed to read agent client cert PEM at '{cert_path}'"))?;
    let key_pem = std::fs::read(&key_path)
        .with_context(|| format!("failed to read agent client key PEM at '{key_path}'"))?;

    // reqwest expects a single PEM containing cert + private key.
    let mut identity_pem = Vec::with_capacity(cert_pem.len() + 1 + key_pem.len());
    identity_pem.extend_from_slice(&cert_pem);
    if !identity_pem.ends_with(b"\n") {
        identity_pem.push(b'\n');
    }
    identity_pem.extend_from_slice(&key_pem);
    let identity = reqwest::Identity::from_pem(&identity_pem)
        .context("failed to parse agent identity (cert+key) PEM")?;

    // `HUB_ROOT_CA_CERT_PEM` can be the PEM itself or a filesystem path.
    let hub_root_ca_pem: Vec<u8> = if hub_root_ca.contains("-----BEGIN CERTIFICATE-----") {
        hub_root_ca.into_bytes()
    } else {
        std::fs::read(&hub_root_ca)
            .with_context(|| format!("failed to read HUB_ROOT_CA_CERT_PEM file at '{hub_root_ca}'"))?
    };
    let root_ca = reqwest::Certificate::from_pem(&hub_root_ca_pem)
        .context("failed to parse HUB_ROOT_CA_CERT_PEM as a PEM certificate")?;

    let client = reqwest::Client::builder()
        // Ensure we are *only* trusting what we pin.
        .tls_built_in_root_certs(false)
        .add_root_certificate(root_ca)
        .identity(identity)
        .build()
        .map_err(|e| anyhow!("failed to build mTLS reqwest client: {e}"))?;

    Ok(client)
}

