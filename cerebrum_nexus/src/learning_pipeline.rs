// cerebrum_nexus/src/learning_pipeline.rs
// Learning Pipeline client (ORCH-side):
// - Sends anonymized telemetry to the Vital Pulse Collector (telemetrist)
// - Subscribes to Synaptic Pulse Distributor updates (WS)
// - Applies non-binary updates hot (prompts/models/config patches)

use futures_util::{SinkExt as _, StreamExt as _};
use json_patch::Patch;
use serde::{Deserialize, Serialize};
use serde_json::json;
use std::time::Duration;
use tokio::sync::Mutex;
use tracing::{info, warn};
use url::Url;

use crate::crypto::{decode_b64, verify_payload};
use crate::mtls::create_mtls_client;
use crate::networking::{api_error_from_non_success_response, determine_backoff_strategy};

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct LearningOverrides {
    #[serde(default)]
    pub default_prompt: Option<String>,
    #[serde(default)]
    pub master_prompt: Option<String>,
    #[serde(default)]
    pub default_model: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TelemetryEnvelope {
    #[serde(default)]
    pub orch_id: Option<String>,
    #[serde(default)]
    pub agent_path: Option<String>,
    #[serde(default)]
    pub ts_unix: Option<i64>,
    pub kind: String,
    #[serde(default)]
    pub level: Option<String>,
    #[serde(default)]
    pub tags: Option<Vec<String>>,
    #[serde(default)]
    pub payload: serde_json::Value,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SubscribeHello {
    pub orch_id: String,
    #[serde(default)]
    pub agent_path: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UpdateEnvelope {
    pub update_id: String,
    pub ts_unix: i64,
    #[serde(default)]
    pub target_orch: Option<String>,
    #[serde(default)]
    pub target_agent_prefix: Option<String>,
    #[serde(default)]
    pub cascade: bool,
    pub update_type: String,
    #[serde(default)]
    pub tier_required: String,

    /// Base64-encoded signature over the update payload bytes.
    ///
    /// Security contract:
    /// - For critical update types (config/patch), this MUST be present and valid.
    #[serde(default)]
    pub signature_b64: Option<String>,

    /// Optional base64-encoded payload bytes (preferred).
    ///
    /// If present, verification is performed over these exact bytes and `payload` is treated as
    /// a convenience/preview. This avoids ambiguities from JSON re-serialization.
    #[serde(default)]
    pub payload_b64: Option<String>,

    pub payload: serde_json::Value,
}

fn is_critical_update_type(update_type: &str) -> bool {
    matches!(update_type, "prompt_tweak" | "model_tweak" | "json_patch" | "yaml_graft")
}

#[derive(Debug, Clone, Default)]
pub struct LearningPipelineState {
    pub telemetrist_url: Option<String>,
    pub distributor_url: Option<String>,
    pub agent_path: String,
    pub overrides: LearningOverrides,
    pub config_json: serde_json::Value,
    pub last_update_id: Option<String>,
    pub last_update_ts: Option<i64>,
    pub last_update_type: Option<String>,
    pub last_error: Option<String>,
}

impl LearningPipelineState {
    pub fn new_from_env(agent_path: String) -> Self {
        let telemetrist_url = std::env::var("TELEMETRIST_URL").ok();
        let distributor_url = std::env::var("PULSE_DISTRIBUTOR_URL").ok();
        Self {
            telemetrist_url,
            distributor_url,
            agent_path,
            overrides: LearningOverrides::default(),
            config_json: json!({
                "overrides": {
                    "default_prompt": null,
                    "master_prompt": null,
                    "default_model": null
                }
            }),
            last_update_id: None,
            last_update_ts: None,
            last_update_type: None,
            last_error: None,
        }
    }

    pub fn apply_update(&mut self, update: &UpdateEnvelope, our_orch_id: &str) {
        // Target filtering (best-effort).
        if let Some(target) = &update.target_orch {
            if target != our_orch_id {
                return;
            }
        }
        if let Some(prefix) = &update.target_agent_prefix {
            if !self.agent_path.starts_with(prefix) {
                return;
            }
        }

        let update_type = update.update_type.as_str();
        match update_type {
            "prompt_tweak" => {
                if let Some(s) = update.payload.get("default_prompt").and_then(|v| v.as_str()) {
                    self.overrides.default_prompt = Some(s.to_string());
                    self.config_json["overrides"]["default_prompt"] = json!(s);
                }
                if let Some(s) = update.payload.get("master_prompt").and_then(|v| v.as_str()) {
                    self.overrides.master_prompt = Some(s.to_string());
                    self.config_json["overrides"]["master_prompt"] = json!(s);
                }
            }
            "model_tweak" => {
                if let Some(s) = update.payload.get("default_model").and_then(|v| v.as_str()) {
                    self.overrides.default_model = Some(s.to_string());
                    self.config_json["overrides"]["default_model"] = json!(s);
                }
            }
            "json_patch" => {
                // payload can be {"patch": [...]} or directly [...]
                let patch_val = update
                    .payload
                    .get("patch")
                    .cloned()
                    .unwrap_or_else(|| update.payload.clone());
                match serde_json::from_value::<Patch>(patch_val) {
                    Ok(patch) => {
                        if let Err(e) = json_patch::patch(&mut self.config_json, &patch) {
                            self.last_error = Some(format!("json_patch apply failed: {e}"));
                            return;
                        }
                        // Rehydrate known fields
                        self.overrides.default_prompt = self.config_json["overrides"]["default_prompt"].as_str().map(|s| s.to_string());
                        self.overrides.master_prompt = self.config_json["overrides"]["master_prompt"].as_str().map(|s| s.to_string());
                        self.overrides.default_model = self.config_json["overrides"]["default_model"].as_str().map(|s| s.to_string());
                    }
                    Err(e) => {
                        self.last_error = Some(format!("invalid json_patch: {e}"));
                        return;
                    }
                }
            }
            "yaml_graft" => {
                // TODO: graft support (merge YAML into local config). Stored as-is for now.
                self.config_json["last_yaml_graft"] = update.payload.clone();
            }
            "notice" => {
                self.config_json["last_notice"] = update.payload.clone();
            }
            other => {
                self.last_error = Some(format!("unknown update_type: {other}"));
                return;
            }
        }

        self.last_update_id = Some(update.update_id.clone());
        self.last_update_ts = Some(update.ts_unix);
        self.last_update_type = Some(update.update_type.clone());
        self.last_error = None;
    }
}

pub async fn start_telemetry_loop(
    orch_id: String,
    state: std::sync::Arc<Mutex<LearningPipelineState>>,
    master_mode: bool,
) {
    let client = match create_mtls_client() {
        Ok(c) => c,
        Err(e) => {
            warn!("telemetry loop disabled: failed to build mTLS client: {e}");
            return;
        }
    };
    let interval_secs = std::env::var("ORCH_SLAVE_SYNC_INTERVAL")
        .ok()
        .and_then(|s| s.parse::<u64>().ok())
        .unwrap_or(300);
    let mut tick = tokio::time::interval(Duration::from_secs(interval_secs));

    loop {
        tick.tick().await;
        let telemetrist_url = { state.lock().await.telemetrist_url.clone() };
        let Some(base) = telemetrist_url else { continue; };
        let endpoint = format!("{}/ingest", base.trim_end_matches('/'));

        let body = TelemetryEnvelope {
            orch_id: Some(orch_id.clone()),
            agent_path: Some("root".to_string()),
            ts_unix: None,
            kind: "orch_heartbeat".to_string(),
            level: Some("info".to_string()),
            tags: Some(vec!["learning_pipeline".to_string()]),
            payload: json!({
                "master_mode": master_mode,
                "orch_id": orch_id,
                "interval_secs": interval_secs,
                "template_version": evolution_pipeline::TEMPLATE_VERSION,
            }),
        };

        match client.post(&endpoint).json(&body).send().await {
            Ok(resp) => {
                if !resp.status().is_success() {
                    let api_err =
                        api_error_from_non_success_response(resp, "/ingest").await;
                    let strategy = determine_backoff_strategy(&api_err.code);
                    warn!(
                        "telemetry ingest failed status={} code={} strategy={:?} detail={}",
                        api_err.http_status,
                        api_err.code,
                        strategy,
                        api_err.detail
                    );
                }
            }
            Err(e) => warn!("telemetry ingest error: {e}"),
        }
    }
}

pub async fn start_update_subscription_loop(
    orch_id: String,
    state: std::sync::Arc<Mutex<LearningPipelineState>>,
) {
    // QUEEN's signing public key (Ed25519) used to verify critical updates.
    // Expected to be base64 (standard or urlsafe, padded or not).
    let queen_pubkey: Option<Vec<u8>> = std::env::var("QUEEN_SIGNING_PUBLIC_KEY_B64")
        .ok()
        .and_then(|s| decode_b64(&s).ok());

    let mut backoff = Duration::from_secs(1);
    loop {
        let distributor_url = { state.lock().await.distributor_url.clone() };
        let Some(ws_url) = distributor_url else {
            tokio::time::sleep(Duration::from_secs(10)).await;
            continue;
        };

        let _validated = match Url::parse(&ws_url) {
            Ok(u) => u,
            Err(e) => {
                warn!("invalid PULSE_DISTRIBUTOR_URL='{ws_url}': {e}");
                tokio::time::sleep(Duration::from_secs(10)).await;
                continue;
            }
        };

        info!("connecting to distributor ws={}", ws_url);
        match tokio_tungstenite::connect_async(&ws_url).await {
            Ok((mut ws, _resp)) => {
                backoff = Duration::from_secs(1);
                // Send hello
                let hello = SubscribeHello {
                    orch_id: orch_id.clone(),
                    agent_path: Some("root".to_string()),
                };
                let _ = ws
                    .send(tokio_tungstenite::tungstenite::Message::Text(
                        serde_json::to_string(&hello).unwrap_or_else(|_| "{}".to_string()),
                    ))
                    .await;

                while let Some(msg) = ws.next().await {
                    match msg {
                        Ok(tokio_tungstenite::tungstenite::Message::Text(txt)) => {
                            if let Ok(update) = serde_json::from_str::<UpdateEnvelope>(&txt) {
                                // Enforce signature verification for critical payloads.
                                if is_critical_update_type(update.update_type.as_str()) {
                                    let Some(pubkey) = queen_pubkey.as_deref() else {
                                        let mut guard = state.lock().await;
                                        guard.last_error = Some(
                                            "missing QUEEN_SIGNING_PUBLIC_KEY_B64; cannot verify critical update"
                                                .to_string(),
                                        );
                                        continue;
                                    };

                                    let sig_b64 = match update.signature_b64.as_deref() {
                                        Some(s) if !s.trim().is_empty() => s,
                                        _ => {
                                            let mut guard = state.lock().await;
                                            guard.last_error = Some(
                                                format!(
                                                    "blocked unsigned critical update (type={})",
                                                    update.update_type
                                                ),
                                            );
                                            continue;
                                        }
                                    };

                                    let signature = match decode_b64(sig_b64) {
                                        Ok(b) => b,
                                        Err(e) => {
                                            let mut guard = state.lock().await;
                                            guard.last_error = Some(format!(
                                                "invalid signature_b64 for update_id={}: {e}",
                                                update.update_id
                                            ));
                                            continue;
                                        }
                                    };

                                    // Prefer verifying over sender-provided raw payload bytes.
                                    let signed_payload: Vec<u8> = if let Some(pb64) = update.payload_b64.as_deref()
                                    {
                                        match decode_b64(pb64) {
                                            Ok(b) => b,
                                            Err(e) => {
                                                let mut guard = state.lock().await;
                                                guard.last_error = Some(format!(
                                                    "invalid payload_b64 for update_id={}: {e}",
                                                    update.update_id
                                                ));
                                                continue;
                                            }
                                        }
                                    } else {
                                        // Fallback: re-serialize payload JSON. This may not match the sender's
                                        // exact signing bytes if key ordering differs.
                                        match serde_json::to_vec(&update.payload) {
                                            Ok(b) => b,
                                            Err(e) => {
                                                let mut guard = state.lock().await;
                                                guard.last_error = Some(format!(
                                                    "failed to serialize payload for update_id={}: {e}",
                                                    update.update_id
                                                ));
                                                continue;
                                            }
                                        }
                                    };

                                    match verify_payload(&signed_payload, &signature, pubkey) {
                                        Ok(true) => {
                                            // Verified: apply.
                                        }
                                        Ok(false) => {
                                            let mut guard = state.lock().await;
                                            guard.last_error = Some(format!(
                                                "signature verification failed (update_id={}, type={})",
                                                update.update_id, update.update_type
                                            ));
                                            continue;
                                        }
                                        Err(e) => {
                                            let mut guard = state.lock().await;
                                            guard.last_error = Some(format!(
                                                "signature verification error (update_id={}, type={}): {e}",
                                                update.update_id, update.update_type
                                            ));
                                            continue;
                                        }
                                    }
                                }

                                let mut guard = state.lock().await;
                                guard.apply_update(&update, &orch_id);
                            }
                        }
                        Ok(tokio_tungstenite::tungstenite::Message::Ping(p)) => {
                            let _ = ws.send(tokio_tungstenite::tungstenite::Message::Pong(p)).await;
                        }
                        Ok(tokio_tungstenite::tungstenite::Message::Close(_)) => break,
                        Ok(_) => {}
                        Err(e) => {
                            warn!("ws error: {e}");
                            break;
                        }
                    }
                }
            }
            Err(e) => {
                warn!("ws connect failed: {e}");
            }
        }

        tokio::time::sleep(backoff).await;
        backoff = (backoff * 2).min(Duration::from_secs(60));
    }
}

