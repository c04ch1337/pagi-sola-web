use common_types::api::ApiErrorResponse;

/// Attempt to parse a non-2xx Hub response body into [`ApiErrorResponse`](common_types/src/api.rs:7).
///
/// Returns `None` if:
/// - the response status is 2xx
/// - the body cannot be read
/// - the body is not a valid `ApiErrorResponse`
pub async fn try_parse_api_error_response(
    resp: reqwest::Response,
) -> Option<ApiErrorResponse> {
    if resp.status().is_success() {
        return None;
    }
    let bytes = resp.bytes().await.ok()?;
    serde_json::from_slice::<ApiErrorResponse>(&bytes).ok()
}

