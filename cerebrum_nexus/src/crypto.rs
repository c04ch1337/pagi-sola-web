use anyhow::{Context as _, anyhow};

/// Verify an Ed25519 signature over `payload` using the QUEEN's public key.
///
/// Inputs are raw bytes:
/// - `payload`: bytes that were signed
/// - `signature`: 64-byte Ed25519 signature
/// - `public_key`: 32-byte Ed25519 public key
///
/// Returns:
/// - `Ok(true)` if signature is valid
/// - `Ok(false)` if signature is invalid
/// - `Err(_)` only for malformed inputs (wrong lengths / parse failures)
pub fn verify_payload(
    payload: &[u8],
    signature: &[u8],
    public_key: &[u8],
) -> Result<bool, anyhow::Error> {
    use ed25519_dalek::{Signature, Verifier as _, VerifyingKey};

    if public_key.len() != 32 {
        return Err(anyhow!(
            "invalid Ed25519 public key length: expected 32, got {}",
            public_key.len()
        ));
    }
    if signature.len() != 64 {
        return Err(anyhow!(
            "invalid Ed25519 signature length: expected 64, got {}",
            signature.len()
        ));
    }

    let vk = VerifyingKey::from_bytes(public_key.try_into().expect("length checked above"))
        .map_err(|e| anyhow!("invalid Ed25519 public key bytes: {e}"))?;
    let sig = Signature::from_bytes(signature.try_into().expect("length checked above"));
    Ok(vk.verify(payload, &sig).is_ok())
}

/// Helper: decode a base64 or base64url string into bytes.
pub fn decode_b64(s: &str) -> Result<Vec<u8>, anyhow::Error> {
    use base64::Engine as _;

    let s = s.trim();
    if s.is_empty() {
        return Err(anyhow!("empty base64 string"));
    }
    // Accept both standard and URL-safe encodings.
    base64::engine::general_purpose::STANDARD
        .decode(s)
        .or_else(|_| base64::engine::general_purpose::URL_SAFE_NO_PAD.decode(s))
        .with_context(|| "invalid base64/base64url")
}
