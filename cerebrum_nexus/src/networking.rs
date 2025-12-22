use common_types::api::ApiErrorResponse;

use std::time::Duration;

/// Retry/backoff hint derived from an actionable API error code.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum RetryStrategy {
    /// Stop retrying (permanent failure).
    Stop,
    /// Exponential backoff recommendation.
    Exponential {
        base_delay: Duration,
        max_delay: Duration,
        /// If `Some(n)`, stop retrying once `attempt >= n`.
        max_retries: Option<u32>,
    },
}

/// Map semantic server error codes to an Agent retry strategy.
///
/// Convention:
/// - 5xx => aggressive exponential backoff (transient)
/// - 429 => longer exponential backoff (rate limiting)
/// - other 4xx => treat as permanent-ish (limited retries + very long max backoff)
/// - otherwise => stop
pub fn determine_backoff_strategy(error_code: &str) -> RetryStrategy {
    let code = error_code.trim();
    let status_prefix: Option<u16> = code
        .split('-')
        .next()
        .and_then(|s| s.parse::<u16>().ok());

    match status_prefix {
        Some(429) => RetryStrategy::Exponential {
            base_delay: Duration::from_secs(5),
            max_delay: Duration::from_secs(5 * 60),
            max_retries: None,
        },
        Some(s) if (500..600).contains(&s) => RetryStrategy::Exponential {
            base_delay: Duration::from_secs(1),
            max_delay: Duration::from_secs(30),
            max_retries: None,
        },
        Some(s) if (400..500).contains(&s) => RetryStrategy::Exponential {
            // Permanent-ish: retry a small number of times, but back off hard.
            base_delay: Duration::from_secs(60),
            max_delay: Duration::from_secs(60 * 60),
            max_retries: Some(3),
        },
        _ => RetryStrategy::Stop,
    }
}

/// Compute the next exponential backoff delay for a given `attempt` (0-based).
///
/// Returns `None` if the strategy says to stop retrying.
pub fn next_backoff_delay(strategy: RetryStrategy, attempt: u32) -> Option<Duration> {
    match strategy {
        RetryStrategy::Stop => None,
        RetryStrategy::Exponential {
            base_delay,
            max_delay,
            max_retries,
        } => {
            if let Some(max) = max_retries {
                if attempt >= max {
                    return None;
                }
            }
            // base_delay * 2^attempt, clamped to max_delay.
            let shift = attempt.min(31);
            let mult: u32 = 1u32.checked_shl(shift).unwrap_or(u32::MAX);
            let candidate = base_delay.saturating_mul(mult);
            Some(std::cmp::min(candidate, max_delay))
        }
    }
}

/// If `resp` is non-2xx, attempt to deserialize an [`ApiErrorResponse`](common_types/src/api.rs:7).
///
/// If the body is not a valid `ApiErrorResponse`, we synthesize one so the caller still gets a
/// structured, actionable error.
pub async fn api_error_from_non_success_response(
    resp: reqwest::Response,
    instance: &str,
) -> ApiErrorResponse {
    let status = resp.status();
    let bytes = resp.bytes().await.unwrap_or_default();

    match serde_json::from_slice::<ApiErrorResponse>(&bytes) {
        Ok(mut e) => {
            // Defensive fixups in case a server forgets to populate these.
            if e.http_status == 0 {
                e.http_status = status.as_u16();
            }
            if e.instance.trim().is_empty() {
                e.instance = instance.to_string();
            }
            e
        }
        Err(_) => {
            let body_snippet = String::from_utf8_lossy(&bytes)
                .chars()
                .take(600)
                .collect::<String>();
            ApiErrorResponse::new(
                format!("{}-UNPARSEABLE-ERROR", status.as_u16()),
                "Non-success HTTP response",
                format!(
                    "server returned non-2xx with an unparseable body (status={}): {}",
                    status, body_snippet
                ),
                status.as_u16(),
                instance,
            )
        }
    }
}

/// Convert a `reqwest::Response` into `Ok(resp)` on 2xx or `Err(ApiErrorResponse)` on non-2xx.
pub async fn ensure_success(
    resp: reqwest::Response,
    instance: &str,
) -> Result<reqwest::Response, ApiErrorResponse> {
    if resp.status().is_success() {
        return Ok(resp);
    }
    Err(api_error_from_non_success_response(resp, instance).await)
}

