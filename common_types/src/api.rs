use serde::{Deserialize, Serialize};

/// Standard API error envelope (Problem Details-inspired).
///
/// This is intentionally framework-agnostic (Axum/Actix can wrap it into responses).
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ApiErrorResponse {
    /// Custom semantic code, e.g. "403-CERT-EXPIRED".
    pub code: String,
    /// Brief, human-readable title.
    pub title: String,
    /// Specific details of the error (safe to expose).
    pub detail: String,
    /// The HTTP status code.
    pub http_status: u16,
    /// Endpoint path that failed.
    pub instance: String,
}

impl ApiErrorResponse {
    /// Construct a new actionable API error envelope.
    pub fn new(
        code: impl Into<String>,
        title: impl Into<String>,
        detail: impl Into<String>,
        http_status: u16,
        instance: impl Into<String>,
    ) -> Self {
        Self {
            code: code.into(),
            title: title.into(),
            detail: detail.into(),
            http_status,
            instance: instance.into(),
        }
    }
}

impl std::fmt::Display for ApiErrorResponse {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(
            f,
            "{} {} (code={}, instance={})",
            self.http_status, self.title, self.code, self.instance
        )
    }
}

impl std::error::Error for ApiErrorResponse {}

#[cfg(feature = "actix")]
impl actix_web::ResponseError for ApiErrorResponse {
    fn status_code(&self) -> actix_web::http::StatusCode {
        actix_web::http::StatusCode::from_u16(self.http_status)
            .unwrap_or(actix_web::http::StatusCode::INTERNAL_SERVER_ERROR)
    }

    fn error_response(&self) -> actix_web::HttpResponse {
        actix_web::HttpResponse::build(self.status_code()).json(self)
    }
}

#[cfg(feature = "axum")]
impl axum::response::IntoResponse for ApiErrorResponse {
    fn into_response(self) -> axum::response::Response {
        let status = axum::http::StatusCode::from_u16(self.http_status)
            .unwrap_or(axum::http::StatusCode::INTERNAL_SERVER_ERROR);
        (status, axum::Json(self)).into_response()
    }
}
