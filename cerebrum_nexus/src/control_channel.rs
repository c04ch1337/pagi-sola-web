use crate::crypto::{decode_b64, verify_payload};
use anyhow::Context as _;
use serde::Serialize;
use std::collections::VecDeque;
use swarm_control_proto::swarm_control::swarm_control_client::SwarmControlClient;
use swarm_control_proto::swarm_control::{Command, ControlMessage, StatusUpdate, control_message};
use tokio::sync::mpsc;
use tokio::sync::{Mutex, RwLock, broadcast};
use tokio_stream::wrappers::ReceiverStream;
use tonic::Request;
use tonic::metadata::{Ascii, MetadataValue};
use tonic::transport::{Certificate, Channel, ClientTlsConfig, Identity};
use tracing::{info, warn};

fn now_unix() -> i64 {
    chrono::Utc::now().timestamp()
}

#[derive(Debug, Clone, Serialize)]
pub struct CommandLogEntry {
    pub id: String,
    pub command_type: String,
    pub ts_unix: i64,
    pub snippet: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct CommandAttempt {
    pub id: String,
    pub ts_unix: i64,
}

#[derive(Debug, Clone, Serialize)]
pub struct VerificationFailure {
    pub ts_unix: i64,
    pub command_id: Option<String>,
    pub command_type: Option<String>,
    pub reason: String,
}

#[derive(Debug, Clone, Serialize, Default)]
pub struct ControlDiagnosticsSnapshot {
    pub connected: bool,
    pub last_connect_ts_unix: Option<i64>,
    pub last_disconnect_ts_unix: Option<i64>,
    pub last_heartbeat_sent_ts_unix: Option<i64>,
    pub last_heartbeat_received_ts_unix: Option<i64>,

    pub endpoint: String,
    pub domain: String,

    pub hub_root_ca_loaded: bool,
    pub hub_root_ca_sha256: Option<String>,

    pub agent_cert_not_after_ts_unix: Option<i64>,
    pub agent_cert_ttl_seconds: Option<i64>,

    /// Signature verification telemetry (Agent-side verification of signed control commands).
    pub signature_last_ok_ts_unix: Option<i64>,
    pub signature_last_fail_ts_unix: Option<i64>,
    pub signature_last_fail_error: Option<String>,

    pub verified_commands: Vec<CommandLogEntry>,
    pub verification_failures: Vec<VerificationFailure>,

    pub lpq_len: usize,
    pub srq_len: usize,
}

#[derive(Debug, Clone, Serialize)]
#[serde(tag = "type", content = "data")]
pub enum ControlUiEvent {
    Connected { ts_unix: i64 },
    Disconnected { ts_unix: i64, reason: String },
    HeartbeatSent { ts_unix: i64 },
    HeartbeatReceived { ts_unix: i64 },
    CommandAttempted { attempt: CommandAttempt },
    CommandVerified { entry: CommandLogEntry },
    CommandRejected { failure: VerificationFailure },
    QueueUpdated { lpq_len: usize, srq_len: usize },
}

fn command_type_from_payload(payload: &[u8]) -> String {
    // Best-effort: most command payloads are expected to be JSON and include a type/kind.
    // If not, fall back to a placeholder.
    if payload.is_empty() {
        return "UNKNOWN".to_string();
    }

    match serde_json::from_slice::<serde_json::Value>(payload) {
        Ok(v) => {
            for k in ["kind", "command_type", "type"] {
                if let Some(s) = v.get(k).and_then(|x| x.as_str()) {
                    if !s.trim().is_empty() {
                        return s.trim().to_string();
                    }
                }
            }
            "UNKNOWN".to_string()
        }
        Err(_) => "UNKNOWN".to_string(),
    }
}

#[derive(Debug, Default)]
struct ControlDiagnosticsInternal {
    connected: bool,
    last_connect_ts_unix: Option<i64>,
    last_disconnect_ts_unix: Option<i64>,
    last_heartbeat_sent_ts_unix: Option<i64>,
    last_heartbeat_received_ts_unix: Option<i64>,

    endpoint: String,
    domain: String,

    hub_root_ca_loaded: bool,
    hub_root_ca_sha256: Option<String>,

    agent_cert_not_after_ts_unix: Option<i64>,
    agent_cert_ttl_seconds: Option<i64>,

    signature_last_ok_ts_unix: Option<i64>,
    signature_last_fail_ts_unix: Option<i64>,
    signature_last_fail_error: Option<String>,

    verified_commands: VecDeque<CommandLogEntry>,
    verification_failures: VecDeque<VerificationFailure>,

    lpq_len: usize,
    srq_len: usize,
}

#[derive(Debug, Default)]
struct Outbox {
    lpq: VecDeque<ControlMessage>,
    srq: VecDeque<ControlMessage>,
}

/// Runtime handle allowing other parts of the Agent (including UI hosts) to observe
/// control-channel state and optionally enqueue outbound control messages.
#[derive(Clone)]
pub struct ControlRuntimeHandle {
    diag: std::sync::Arc<RwLock<ControlDiagnosticsInternal>>,
    events: broadcast::Sender<ControlUiEvent>,
    outbox: std::sync::Arc<Mutex<Outbox>>,
    active_tx: std::sync::Arc<RwLock<Option<mpsc::Sender<ControlMessage>>>>,
}

impl ControlRuntimeHandle {
    pub fn new() -> Self {
        let (events, _) = broadcast::channel(256);
        Self {
            diag: std::sync::Arc::new(RwLock::new(ControlDiagnosticsInternal::default())),
            events,
            outbox: std::sync::Arc::new(Mutex::new(Outbox::default())),
            active_tx: std::sync::Arc::new(RwLock::new(None)),
        }
    }

    pub fn subscribe(&self) -> broadcast::Receiver<ControlUiEvent> {
        self.events.subscribe()
    }

    pub async fn snapshot(&self) -> ControlDiagnosticsSnapshot {
        let d = self.diag.read().await;
        ControlDiagnosticsSnapshot {
            connected: d.connected,
            last_connect_ts_unix: d.last_connect_ts_unix,
            last_disconnect_ts_unix: d.last_disconnect_ts_unix,
            last_heartbeat_sent_ts_unix: d.last_heartbeat_sent_ts_unix,
            last_heartbeat_received_ts_unix: d.last_heartbeat_received_ts_unix,
            endpoint: d.endpoint.clone(),
            domain: d.domain.clone(),
            hub_root_ca_loaded: d.hub_root_ca_loaded,
            hub_root_ca_sha256: d.hub_root_ca_sha256.clone(),
            agent_cert_not_after_ts_unix: d.agent_cert_not_after_ts_unix,
            agent_cert_ttl_seconds: d.agent_cert_ttl_seconds,
            signature_last_ok_ts_unix: d.signature_last_ok_ts_unix,
            signature_last_fail_ts_unix: d.signature_last_fail_ts_unix,
            signature_last_fail_error: d.signature_last_fail_error.clone(),
            verified_commands: d.verified_commands.iter().cloned().collect(),
            verification_failures: d.verification_failures.iter().cloned().collect(),
            lpq_len: d.lpq_len,
            srq_len: d.srq_len,
        }
    }

    pub async fn enqueue_lpq(&self, msg: ControlMessage) {
        let mut out = self.outbox.lock().await;
        out.lpq.push_back(msg);
        let (lpq_len, srq_len) = (out.lpq.len(), out.srq.len());
        drop(out);
        self.update_queue_lengths(lpq_len, srq_len).await;
    }

    pub async fn enqueue_srq(&self, msg: ControlMessage) {
        let mut out = self.outbox.lock().await;
        out.srq.push_back(msg);
        let (lpq_len, srq_len) = (out.lpq.len(), out.srq.len());
        drop(out);
        self.update_queue_lengths(lpq_len, srq_len).await;
    }

    pub async fn flush_outbox(&self) -> usize {
        let tx_opt = self.active_tx.read().await.clone();
        let Some(tx) = tx_opt else {
            // Not connected.
            return 0;
        };

        let mut drained = 0usize;
        let mut out = self.outbox.lock().await;

        // SRQ first ("secure" / critical), then LPQ.
        while let Some(msg) = out.srq.pop_front() {
            if tx.send(msg).await.is_err() {
                break;
            }
            drained += 1;
        }
        while let Some(msg) = out.lpq.pop_front() {
            if tx.send(msg).await.is_err() {
                break;
            }
            drained += 1;
        }

        let (lpq_len, srq_len) = (out.lpq.len(), out.srq.len());
        drop(out);
        self.update_queue_lengths(lpq_len, srq_len).await;
        drained
    }

    async fn update_queue_lengths(&self, lpq_len: usize, srq_len: usize) {
        {
            let mut d = self.diag.write().await;
            d.lpq_len = lpq_len;
            d.srq_len = srq_len;
        }
        let _ = self
            .events
            .send(ControlUiEvent::QueueUpdated { lpq_len, srq_len });
    }
}

fn load_agent_cert_key_pem() -> Result<(Vec<u8>, Vec<u8>), anyhow::Error> {
    let cert_path =
        std::env::var("AGENT_MTLS_CERT_PATH").context("missing AGENT_MTLS_CERT_PATH")?;
    let key_path = std::env::var("AGENT_MTLS_KEY_PATH").context("missing AGENT_MTLS_KEY_PATH")?;
    let cert_pem = std::fs::read(&cert_path)
        .with_context(|| format!("failed to read agent client cert PEM at '{cert_path}'"))?;
    let key_pem = std::fs::read(&key_path)
        .with_context(|| format!("failed to read agent client key PEM at '{key_path}'"))?;

    Ok((cert_pem, key_pem))
}

fn parse_first_cert_der(pem_bytes: &[u8]) -> Result<Vec<u8>, anyhow::Error> {
    use x509_parser::pem::parse_x509_pem;

    let mut input = pem_bytes;
    while !input.is_empty() {
        match parse_x509_pem(input) {
            Ok((rem, pem)) => {
                input = rem;
                if pem.label.eq_ignore_ascii_case("CERTIFICATE") {
                    return Ok(pem.contents);
                }
            }
            Err(_) => break,
        }
    }
    Err(anyhow::anyhow!("no CERTIFICATE PEM block found"))
}

fn inspect_agent_cert(cert_pem: &[u8]) -> Result<(i64, i64), anyhow::Error> {
    use x509_parser::parse_x509_certificate;
    let der = parse_first_cert_der(cert_pem)?;
    let (_rem, cert) =
        parse_x509_certificate(&der).map_err(|e| anyhow::anyhow!("x509 parse failed: {e}"))?;
    let not_after = cert.validity().not_after.to_datetime();
    let not_after_ts = not_after.unix_timestamp();
    let ttl = not_after_ts.saturating_sub(now_unix());
    Ok((not_after_ts, ttl))
}

fn sha256_hex(data: &[u8]) -> String {
    use sha2::{Digest as _, Sha256};
    let digest = Sha256::digest(data);
    hex::encode(digest)
}

fn load_hub_root_ca_pem() -> Result<Vec<u8>, anyhow::Error> {
    let hub_root_ca =
        std::env::var("HUB_ROOT_CA_CERT_PEM").context("missing HUB_ROOT_CA_CERT_PEM")?;
    if hub_root_ca.contains("-----BEGIN CERTIFICATE-----") {
        Ok(hub_root_ca.into_bytes())
    } else {
        std::fs::read(&hub_root_ca)
            .with_context(|| format!("failed to read HUB_ROOT_CA_CERT_PEM file at '{hub_root_ca}'"))
    }
}

fn read_shared_token() -> Option<String> {
    std::env::var("CONTROL_CHANNEL_BEARER_TOKEN")
        .ok()
        .map(|s| s.trim().to_string())
        .filter(|s| !s.is_empty())
}

async fn connect_control_channel(
    runtime: &ControlRuntimeHandle,
) -> Result<SwarmControlClient<Channel>, anyhow::Error> {
    let endpoint = std::env::var("CONTROL_GRPC_ENDPOINT")
        .unwrap_or_else(|_| "https://127.0.0.1:5005".to_string());
    let domain = std::env::var("CONTROL_GRPC_DOMAIN").unwrap_or_else(|_| "localhost".to_string());

    {
        let mut d = runtime.diag.write().await;
        d.endpoint = endpoint.clone();
        d.domain = domain.clone();
    }

    let (cert_pem, key_pem) = load_agent_cert_key_pem()?;
    let ca_pem = load_hub_root_ca_pem()?;

    // Update certificate diagnostics (best-effort; do not fail the connection attempt if parsing fails).
    {
        let mut d = runtime.diag.write().await;
        match inspect_agent_cert(&cert_pem) {
            Ok((not_after_ts, ttl)) => {
                d.agent_cert_not_after_ts_unix = Some(not_after_ts);
                d.agent_cert_ttl_seconds = Some(ttl);
            }
            Err(e) => {
                warn!("agent cert inspect failed: {e}");
            }
        }
        match parse_first_cert_der(&ca_pem) {
            Ok(der) => {
                d.hub_root_ca_loaded = true;
                d.hub_root_ca_sha256 = Some(sha256_hex(&der));
            }
            Err(e) => {
                d.hub_root_ca_loaded = false;
                d.hub_root_ca_sha256 = None;
                warn!("hub root CA parse failed: {e}");
            }
        }
    }

    let tls = ClientTlsConfig::new()
        .domain_name(domain)
        .ca_certificate(Certificate::from_pem(ca_pem))
        .identity(Identity::from_pem(cert_pem, key_pem));

    let channel = Channel::from_shared(endpoint)
        .context("invalid CONTROL_GRPC_ENDPOINT")?
        .tls_config(tls)
        .context("failed to apply TLS config")?
        .connect()
        .await
        .context("failed to connect to control server")?;

    Ok(SwarmControlClient::new(channel))
}

fn signed_command_ok(cmd: &Command, queen_pubkey: &[u8]) -> Result<bool, anyhow::Error> {
    if cmd.signature.is_empty() {
        return Ok(false);
    }
    if cmd.signed_payload.is_empty() {
        return Ok(false);
    }
    verify_payload(&cmd.signed_payload, &cmd.signature, queen_pubkey)
}

async fn handle_command(runtime: &ControlRuntimeHandle, cmd: Command) {
    // Sentry Logic: verify + act.
    let queen_pubkey = match std::env::var("QUEEN_SIGNING_PUBLIC_KEY_B64") {
        Ok(s) => match decode_b64(&s) {
            Ok(b) => b,
            Err(e) => {
                {
                    let mut d = runtime.diag.write().await;
                    d.signature_last_fail_ts_unix = Some(now_unix());
                    d.signature_last_fail_error =
                        Some(format!("invalid QUEEN_SIGNING_PUBLIC_KEY_B64: {e}"));
                }
                warn!("invalid QUEEN_SIGNING_PUBLIC_KEY_B64: {e}");
                return;
            }
        },
        Err(_) => {
            {
                let mut d = runtime.diag.write().await;
                d.signature_last_fail_ts_unix = Some(now_unix());
                d.signature_last_fail_error =
                    Some("missing QUEEN_SIGNING_PUBLIC_KEY_B64".to_string());
            }
            warn!("missing QUEEN_SIGNING_PUBLIC_KEY_B64; refusing to process commands");
            return;
        }
    };

    // Log the attempt before verification (telemetry only; does not imply acceptance).
    let _ = runtime.events.send(ControlUiEvent::CommandAttempted {
        attempt: CommandAttempt {
            id: cmd.id.clone(),
            ts_unix: now_unix(),
        },
    });

    match signed_command_ok(&cmd, &queen_pubkey) {
        Ok(true) => {
            let ts = now_unix();
            {
                let mut d = runtime.diag.write().await;
                d.signature_last_ok_ts_unix = Some(ts);

                let snippet = String::from_utf8_lossy(&cmd.signed_payload)
                    .chars()
                    .take(180)
                    .collect::<String>();
                let command_type = command_type_from_payload(&cmd.signed_payload);
                let entry = CommandLogEntry {
                    id: cmd.id.clone(),
                    command_type,
                    ts_unix: ts,
                    snippet,
                };
                d.verified_commands.push_front(entry.clone());
                while d.verified_commands.len() > 10 {
                    d.verified_commands.pop_back();
                }

                let _ = runtime
                    .events
                    .send(ControlUiEvent::CommandVerified { entry });
            }
        }
        Ok(false) => {
            let ts = now_unix();
            let command_type = command_type_from_payload(&cmd.signed_payload);
            let failure = VerificationFailure {
                ts_unix: ts,
                command_id: Some(cmd.id.clone()),
                command_type: Some(command_type),
                reason: "invalid signature".to_string(),
            };
            {
                let mut d = runtime.diag.write().await;
                d.signature_last_fail_ts_unix = Some(ts);
                d.signature_last_fail_error = Some("invalid signature".to_string());
                d.verification_failures.push_front(failure.clone());
                while d.verification_failures.len() > 10 {
                    d.verification_failures.pop_back();
                }
            }
            let _ = runtime
                .events
                .send(ControlUiEvent::CommandRejected { failure });
            warn!("blocked unsigned/invalid command id={}", cmd.id);
            return;
        }
        Err(e) => {
            let ts = now_unix();
            let command_type = command_type_from_payload(&cmd.signed_payload);
            let failure = VerificationFailure {
                ts_unix: ts,
                command_id: Some(cmd.id.clone()),
                command_type: Some(command_type),
                reason: format!("verification error: {e}"),
            };
            {
                let mut d = runtime.diag.write().await;
                d.signature_last_fail_ts_unix = Some(ts);
                d.signature_last_fail_error = Some(format!("verification error: {e}"));
                d.verification_failures.push_front(failure.clone());
                while d.verification_failures.len() > 10 {
                    d.verification_failures.pop_back();
                }
            }
            let _ = runtime
                .events
                .send(ControlUiEvent::CommandRejected { failure });
            warn!("command verification error id={}: {e}", cmd.id);
            return;
        }
    }

    match command_type_from_payload(&cmd.signed_payload).as_str() {
        "QUEEN_TAKEOVER" => {
            warn!("QUEEN_TAKEOVER received and verified");
            // TODO: execute local takeover action (shutdown agent, switch modes, etc.).
        }
        other => {
            info!("verified command received id={} type={other}", cmd.id);
        }
    }
}

/// Long-running control channel task (Agent side).
///
/// Behavior:
/// - establishes a TLS-secured gRPC bidirectional stream to the Hub
/// - periodically sends `StatusUpdate` heartbeats
/// - verifies incoming signed `Command`s (Ed25519) and executes sentry logic
/// - reconnects with exponential backoff on loss
pub async fn grpc_control_client_task(agent_id: String) {
    // Backwards-compatible wrapper for older call sites that don't need telemetry.
    grpc_control_client_task_with_runtime(agent_id, ControlRuntimeHandle::new()).await
}

/// Overload of [`grpc_control_client_task()`](cerebrum_nexus/src/control_channel.rs:120) that also
/// wires in a runtime handle for UI/telemetry.
pub async fn grpc_control_client_task_with_runtime(
    agent_id: String,
    runtime: ControlRuntimeHandle,
) {
    let mut backoff = std::time::Duration::from_secs(1);

    loop {
        match connect_control_channel(&runtime).await {
            Ok(mut client) => {
                backoff = std::time::Duration::from_secs(1);
                info!("control channel connected");

                {
                    let ts = now_unix();
                    let mut d = runtime.diag.write().await;
                    d.connected = true;
                    d.last_connect_ts_unix = Some(ts);
                }
                let _ = runtime.events.send(ControlUiEvent::Connected {
                    ts_unix: now_unix(),
                });

                let (tx, rx) = mpsc::channel::<ControlMessage>(128);
                {
                    *runtime.active_tx.write().await = Some(tx.clone());
                }

                // Attempt to flush any queued outbound messages now that we have a sender.
                let _ = runtime.flush_outbox().await;

                let outbound = ReceiverStream::new(rx);
                let mut req = Request::new(outbound);

                if let Some(token) = read_shared_token() {
                    let v: MetadataValue<Ascii> = format!("Bearer {token}").parse().unwrap();
                    req.metadata_mut().insert("authorization", v);
                }

                // Send an initial status update.
                let _ = tx
                    .send(ControlMessage {
                        message: Some(control_message::Message::StatusUpdate(StatusUpdate {
                            agent_id: agent_id.clone(),
                            heartbeat_timestamp: now_unix(),
                            current_status_code: 1,
                        })),
                    })
                    .await;
                {
                    let ts = now_unix();
                    let mut d = runtime.diag.write().await;
                    d.last_heartbeat_sent_ts_unix = Some(ts);
                }
                let _ = runtime.events.send(ControlUiEvent::HeartbeatSent {
                    ts_unix: now_unix(),
                });

                let mut resp = match client.stream_control(req).await {
                    Ok(r) => r.into_inner(),
                    Err(e) => {
                        warn!("control channel stream setup failed: {e}");
                        continue;
                    }
                };

                // Heartbeat loop.
                let hb_tx = tx.clone();
                let hb_agent = agent_id.clone();
                let hb_runtime = runtime.clone();
                let hb_handle = tokio::spawn(async move {
                    let mut tick = tokio::time::interval(std::time::Duration::from_secs(10));
                    loop {
                        tick.tick().await;

                        // Derive a status code from local runtime state.
                        let status_code = {
                            let d = hb_runtime.diag.read().await;
                            if d.connected { 1 } else { 0 }
                        };

                        if hb_tx
                            .send(ControlMessage {
                                message: Some(control_message::Message::StatusUpdate(
                                    StatusUpdate {
                                        agent_id: hb_agent.clone(),
                                        heartbeat_timestamp: now_unix(),
                                        current_status_code: status_code,
                                    },
                                )),
                            })
                            .await
                            .is_err()
                        {
                            break;
                        }

                        let ts = now_unix();
                        {
                            let mut d = hb_runtime.diag.write().await;
                            d.last_heartbeat_sent_ts_unix = Some(ts);
                        }
                        let _ = hb_runtime
                            .events
                            .send(ControlUiEvent::HeartbeatSent { ts_unix: ts });
                    }
                });

                // Inbound loop (Hub -> Agent).
                while let Ok(Some(msg)) = resp.message().await {
                    match msg.message {
                        Some(control_message::Message::Command(cmd)) => {
                            handle_command(&runtime, cmd).await;
                        }
                        Some(control_message::Message::StatusUpdate(_)) => {
                            // Treat as heartbeat/ack from Hub.
                            let ts = now_unix();
                            {
                                let mut d = runtime.diag.write().await;
                                d.last_heartbeat_received_ts_unix = Some(ts);
                            }
                            let _ = runtime
                                .events
                                .send(ControlUiEvent::HeartbeatReceived { ts_unix: ts });
                        }
                        None => {}
                    }
                }

                hb_handle.abort();
                {
                    let ts = now_unix();
                    let mut d = runtime.diag.write().await;
                    d.connected = false;
                    d.last_disconnect_ts_unix = Some(ts);
                }
                {
                    *runtime.active_tx.write().await = None;
                }
                let _ = runtime.events.send(ControlUiEvent::Disconnected {
                    ts_unix: now_unix(),
                    reason: "stream closed".to_string(),
                });
                warn!("control channel disconnected; reconnecting");
            }
            Err(e) => {
                warn!("control channel connect failed: {e}");
                {
                    let ts = now_unix();
                    let mut d = runtime.diag.write().await;
                    d.connected = false;
                    d.last_disconnect_ts_unix = Some(ts);
                }
                let _ = runtime.events.send(ControlUiEvent::Disconnected {
                    ts_unix: now_unix(),
                    reason: format!("connect failed: {e}"),
                });
            }
        }

        tokio::time::sleep(backoff).await;
        backoff = (backoff * 2).min(std::time::Duration::from_secs(60));
    }
}
