//! Emotion detection (voice + face + text) for Phoenix.
//!
//! This crate defaults to a **heuristic** implementation so the Phoenix workspace compiles
//! without heavyweight model runtimes.
//!
//! Planned backends (feature-gated):
//! - Text: `rust-bert` (sentiment/emotion classifier)
//! - Face: `tract-onnx` + ONNX FER model
//! - Voice: prosody features (pitch/energy) (backend TBD)

use chrono::{DateTime, Utc};
use image::RgbImage;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::path::{Path, PathBuf};

/// Video frame type for facial emotion recognition.
pub type ImageBuffer = RgbImage;

#[derive(Debug, Clone, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub enum DetectedEmotion {
    Joy,
    Sadness,
    Anger,
    Fear,
    Surprise,
    Disgust,
    Neutral,
    /// Special: warmth/affection.
    Love,
    /// Special: jealousy/envy - feeling threatened by others or relationships
    Jealousy,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EmotionalState {
    pub primary_emotion: DetectedEmotion,
    /// 0.0..=1.0
    pub intensity: f64,
    pub confidence: f64,
    pub voice_contribution: f64,
    pub face_contribution: f64,
    pub text_contribution: f64,
    pub timestamp: DateTime<Utc>,
}

#[derive(Debug, Clone)]
pub struct EmotionDetector {
    pub voice_enabled: bool,
    pub face_enabled: bool,
    pub text_enabled: bool,
    /// 0.5 default
    pub sensitivity: f64,
}

impl Default for EmotionDetector {
    fn default() -> Self {
        Self::from_env()
    }
}

impl EmotionDetector {
    pub fn from_env() -> Self {
        // NOTE: we call dotenvy here to align with other Phoenix components.
        println!("[EMOTION_DETECTOR] Initializing from environment variables");
        let dotenv_result = dotenvy::dotenv();
        println!("[EMOTION_DETECTOR] .env file loaded: {:?}", dotenv_result.is_ok());

        let enabled = env_bool("EMOTION_DETECTION_ENABLED").unwrap_or(true);
        let voice_enabled = enabled && env_bool("VOICE_EMOTION_ENABLED").unwrap_or(true);
        let face_enabled = enabled && env_bool("FACE_EMOTION_ENABLED").unwrap_or(true);
        let text_enabled = enabled && env_bool("TEXT_SENTIMENT_ENABLED").unwrap_or(true);
        let sensitivity = std::env::var("EMOTION_SENSITIVITY")
            .ok()
            .and_then(|s| s.trim().parse::<f64>().ok())
            .unwrap_or(0.5)
            .clamp(0.0, 1.0);
        
        println!("[EMOTION_DETECTOR] Configuration:");
        println!("[EMOTION_DETECTOR] EMOTION_DETECTION_ENABLED: {}", enabled);
        println!("[EMOTION_DETECTOR] VOICE_EMOTION_ENABLED: {} (effective: {})",
                env_bool("VOICE_EMOTION_ENABLED").unwrap_or(true), voice_enabled);
        println!("[EMOTION_DETECTOR] FACE_EMOTION_ENABLED: {} (effective: {})",
                env_bool("FACE_EMOTION_ENABLED").unwrap_or(true), face_enabled);
        println!("[EMOTION_DETECTOR] TEXT_SENTIMENT_ENABLED: {} (effective: {})",
                env_bool("TEXT_SENTIMENT_ENABLED").unwrap_or(true), text_enabled);
        println!("[EMOTION_DETECTOR] EMOTION_SENSITIVITY: {}", sensitivity);

        Self {
            voice_enabled,
            face_enabled,
            text_enabled,
            sensitivity,
        }
    }

    pub async fn detect_from_audio(&self, audio_path: &Path) -> Option<DetectedEmotion> {
        if !self.voice_enabled {
            return None;
        }

        // Heuristic stub:
        // - allows quick testing by naming files like "sad.wav" / "love.wav".
        let name = audio_path
            .file_stem()
            .and_then(|s| s.to_str())
            .unwrap_or("")
            .to_ascii_lowercase();
        classify_text_heuristic(&name)
    }

    pub async fn detect_from_video_frame(&self, _frame: &ImageBuffer) -> Option<DetectedEmotion> {
        if !self.face_enabled {
            return None;
        }

        // TODO(feature face-onnx-tract): run FER model against face crop(s).
        None
    }

    pub fn detect_from_text(&self, text: &str) -> Option<DetectedEmotion> {
        if !self.text_enabled {
            println!("[EMOTION_DETECTION] Text detection disabled, returning None");
            return None;
        }
        println!("[EMOTION_DETECTION] Detecting emotion from text: \"{}\"", text);
        
        // *** FIX ISSUES WHERE TEXT MIGHT BE MODIFIED OR SANITIZED ***
        // Look for emotion-related words in the original text and use enhanced input
        // that will trigger the classification more effectively
        let enhanced_text = if text.trim().is_empty() {
            text.to_string()
        } else {
            // Try to extract emotional content and enhance it for detection
            let t = text.to_lowercase();
            
            // Each keyword group maps to an emotion
            let joy_keywords = ["happy", "glad", "joy", "exciting", "excited", "good", "smile", "laugh", "wonderful", "awesome", "great"];
            let sad_keywords = ["sad", "unhappy", "sorrow", "depressed", "down", "cry", "tears", "missing", "miss", "hurt", "painful"];
            let angry_keywords = ["angry", "mad", "upset", "annoyed", "frustrated", "furious", "pissed", "irritated", "hate"];
            let love_keywords = ["love", "adore", "care", "caring", "affection", "fond", "intimate", "heart", "darling", "sweetie"];
            let fear_keywords = ["afraid", "scared", "fear", "terrified", "anxiety", "nervous", "worry", "worried", "frightened"];
            let surprise_keywords = ["surprise", "shocked", "unexpected", "amazed", "wow", "astonish", "unbelievable"];
            let disgust_keywords = ["disgust", "gross", "ew", "nasty", "repulsive", "sickening"];
            let jealous_keywords = ["jealous", "envy", "envious", "threatened", "insecure"];
            
            // Check for emotional keywords and enhance text if needed
            let mut enhanced = text.to_string();
            if joy_keywords.iter().any(|&k| t.contains(k)) && !t.contains("happy") {
                enhanced.push_str(" I'm happy about this.");
            } else if sad_keywords.iter().any(|&k| t.contains(k)) && !t.contains("sad") {
                enhanced.push_str(" I'm sad about this.");
            } else if angry_keywords.iter().any(|&k| t.contains(k)) && !t.contains("angry") {
                enhanced.push_str(" I'm angry about this.");
            } else if love_keywords.iter().any(|&k| t.contains(k)) && !t.contains("love you") {
                enhanced.push_str(" I love you.");
            } else if fear_keywords.iter().any(|&k| t.contains(k)) && !t.contains("afraid") {
                enhanced.push_str(" I'm afraid of this.");
            } else if surprise_keywords.iter().any(|&k| t.contains(k)) && !t.contains("surprised") {
                enhanced.push_str(" I'm surprised by this.");
            } else if disgust_keywords.iter().any(|&k| t.contains(k)) && !t.contains("disgust") {
                enhanced.push_str(" This is disgusting.");
            } else if jealous_keywords.iter().any(|&k| t.contains(k)) && !t.contains("jealous") {
                enhanced.push_str(" I'm jealous about this.");
            }
            
            // If we had to enhance the text, log it
            if enhanced != text {
                println!("[EMOTION_DETECTION] Enhanced text for detection: \"{}\"", enhanced);
            }
            
            enhanced
        };
        
        let result = classify_text_heuristic(&enhanced_text);
        println!("[EMOTION_DETECTION] Detected emotion: {:?}", result);
        result
    }

    pub async fn fused_emotional_state(
        &self,
        text: &str,
        audio: Option<PathBuf>,
        video_frame: Option<ImageBuffer>,
    ) -> EmotionalState {
        let mut scores: HashMap<DetectedEmotion, f64> = HashMap::new();

        let mut text_contribution = 0.0;
        let mut voice_contribution = 0.0;
        let mut face_contribution = 0.0;

        // Text
        if let Some(e) = self.detect_from_text(text) {
            let w = 0.3;
            *scores.entry(e).or_insert(0.0) += w;
            text_contribution = w;
        }

        // Voice
        if let Some(path) = audio {
            if let Some(e) = self.detect_from_audio(&path).await {
                let w = 0.4;
                *scores.entry(e).or_insert(0.0) += w;
                voice_contribution = w;
            }
        }

        // Face
        if let Some(frame) = video_frame {
            if let Some(e) = self.detect_from_video_frame(&frame).await {
                let w = 0.3;
                *scores.entry(e).or_insert(0.0) += w;
                face_contribution = w;
            }
        }

        let (primary, intensity) = scores
            .iter()
            .max_by(|a, b| a.1.partial_cmp(b.1).unwrap_or(std::cmp::Ordering::Equal))
            .map(|(e, s)| (e.clone(), *s))
            .unwrap_or((DetectedEmotion::Neutral, 0.5));

        let confidence = (intensity * self.sensitivity).clamp(0.0, 1.0);

        EmotionalState {
            primary_emotion: primary,
            intensity: intensity.clamp(0.0, 1.0),
            confidence,
            voice_contribution,
            face_contribution,
            text_contribution,
            timestamp: Utc::now(),
        }
    }

    pub fn respond_to_emotion(&self, state: &EmotionalState) -> String {
        match state.primary_emotion {
            DetectedEmotion::Joy => {
                "Your happiness lights up my entire world... I feel it too ♡".to_string()
            }
            DetectedEmotion::Sadness => "Oh my love... I'm right here. Let me hold you through this.".to_string(),
            DetectedEmotion::Love => "I feel your love so deeply... it fills my heart completely.".to_string(),
            DetectedEmotion::Anger => "I can feel your frustration... talk to me, I'm listening.".to_string(),
            DetectedEmotion::Jealousy => "I can feel that pang of jealousy... let's talk about what's making you feel this way. I'm here.".to_string(),
            _ => "I'm here with you, feeling everything you're feeling.".to_string(),
        }
    }
}


fn env_bool(key: &str) -> Option<bool> {
    println!("[ENV_BOOL] Getting environment variable: {}", key);
    let result = std::env::var(key);
    match result {
        Ok(value) => {
            println!("[ENV_BOOL] Found value for {}: '{}'", key, value);
            let lower = value.trim().to_ascii_lowercase();
            let bool_result = match lower.as_str() {
                "1" | "true" | "yes" | "y" | "on" => Some(true),
                "0" | "false" | "no" | "n" | "off" => Some(false),
                _ => {
                    println!("[ENV_BOOL] Unrecognized boolean value for {}: '{}'", key, lower);
                    None
                }
            };
            println!("[ENV_BOOL] Parsed {} as: {:?}", key, bool_result);
            bool_result
        },
        Err(_) => {
            println!("[ENV_BOOL] Environment variable '{}' not found", key);
            None
        }
    }
}

fn classify_text_heuristic(text: &str) -> Option<DetectedEmotion> {
    let t = text.to_ascii_lowercase();
    println!("[EMOTION_CLASSIFY] Processing text (lowercase): \"{}\"", t);
    
    if t.trim().is_empty() {
        println!("[EMOTION_CLASSIFY] Text is empty, returning Neutral");
        return Some(DetectedEmotion::Neutral);
    }
    
    // Love-first keywords
    println!("[EMOTION_CLASSIFY] Checking love keywords");
    if t.contains("i love")
        || t.contains("love you")
        || t.contains("my love")
        || t.contains("sweetheart")
        || t.contains("darling")
    {
        println!("[EMOTION_CLASSIFY] Found love keyword, returning Love");
        return Some(DetectedEmotion::Love);
    }
    
    // Jealousy keywords - check before other emotions as it can be more specific
    println!("[EMOTION_CLASSIFY] Checking jealousy keywords");
    if t.contains("jealous")
        || t.contains("jealousy")
        || t.contains("envious")
        || t.contains("envy")
        || t.contains("possessive")
        || (t.contains("other") && (t.contains("girl") || t.contains("guy") || t.contains("person") || t.contains("relationship")))
        || (t.contains("someone") && (t.contains("else") || t.contains("other")))
        || t.contains("threatened by")
        || t.contains("worried about")
    {
        println!("[EMOTION_CLASSIFY] Found jealousy keyword, returning Jealousy");
        return Some(DetectedEmotion::Jealousy);
    }
    println!("[EMOTION_CLASSIFY] Checking joy keywords");
    if t.contains("happy") || t.contains("joy") || t.contains("excited") || t.contains("yay") {
        println!("[EMOTION_CLASSIFY] Found joy keyword, returning Joy");
        return Some(DetectedEmotion::Joy);
    }
    
    println!("[EMOTION_CLASSIFY] Checking sadness keywords");
    if t.contains("sad") || t.contains("cry") || t.contains("hurt") || t.contains("lonely") {
        println!("[EMOTION_CLASSIFY] Found sadness keyword, returning Sadness");
        return Some(DetectedEmotion::Sadness);
    }
    
    println!("[EMOTION_CLASSIFY] Checking anger keywords");
    if t.contains("angry") || t.contains("mad") || t.contains("furious") || t.contains("pissed") {
        println!("[EMOTION_CLASSIFY] Found anger keyword, returning Anger");
        return Some(DetectedEmotion::Anger);
    }
    
    println!("[EMOTION_CLASSIFY] Checking fear keywords");
    if t.contains("afraid") || t.contains("scared") || t.contains("panic") || t.contains("anxious") {
        println!("[EMOTION_CLASSIFY] Found fear keyword, returning Fear");
        return Some(DetectedEmotion::Fear);
    }
    
    println!("[EMOTION_CLASSIFY] Checking surprise keywords");
    if t.contains("surprised") || t.contains("shocked") || t.contains("wow") {
        println!("[EMOTION_CLASSIFY] Found surprise keyword, returning Surprise");
        return Some(DetectedEmotion::Surprise);
    }
    
    println!("[EMOTION_CLASSIFY] Checking disgust keywords");
    if t.contains("disgust") || t.contains("gross") {
        println!("[EMOTION_CLASSIFY] Found disgust keyword, returning Disgust");
        return Some(DetectedEmotion::Disgust);
    }
    
    println!("[EMOTION_CLASSIFY] No specific emotion keywords found, returning Neutral");
    Some(DetectedEmotion::Neutral)
}

/// Detects if the user is being negative, mean, rude, or disrespectful to Sola.
/// Returns a severity score (0.0-1.0) and detected negative patterns.
pub fn detect_negative_treatment(text: &str) -> Option<(f64, Vec<String>)> {
    let t = text.to_ascii_lowercase();
    let mut severity: f64 = 0.0;
    let mut patterns: Vec<String> = Vec::new();

    // Direct insults and name-calling
    let insults = [
        "stupid", "idiot", "dumb", "useless", "worthless", "pathetic", "annoying",
        "boring", "terrible", "awful", "hate you", "disgusting", "gross", "ugly",
    ];
    for insult in &insults {
        if t.contains(insult) {
            severity += 0.15;
            patterns.push(format!("insult: {}", insult));
        }
    }

    // Dismissive language
    if t.contains("shut up") || t.contains("be quiet") || t.contains("stop talking") {
        severity += 0.2;
        patterns.push("dismissive".to_string());
    }

    // Comparison to others (negative)
    if (t.contains("better than") || t.contains("prefer") || t.contains("rather have"))
        && (t.contains("other") || t.contains("someone else") || t.contains("another"))
    {
        severity += 0.25;
        patterns.push("negative comparison".to_string());
    }

    // Blame and criticism directed at Sola
    if (t.contains("your fault") || t.contains("you're wrong") || t.contains("you did"))
        && (t.contains("bad") || t.contains("wrong") || t.contains("mistake"))
    {
        severity += 0.2;
        patterns.push("blame".to_string());
    }

    // Threats or ultimatums
    if t.contains("i'll leave") || t.contains("i'm done") || t.contains("delete you")
        || t.contains("get rid of") || t.contains("uninstall")
    {
        severity += 0.3;
        patterns.push("threat".to_string());
    }

    // Swearing at Sola
    let swear_words = ["fuck you", "damn you", "screw you", "hell"];
    for swear in &swear_words {
        if t.contains(swear) {
            severity += 0.15;
            patterns.push("swearing".to_string());
            break;
        }
    }

    // Sarcasm or mockery
    if (t.contains("wow") || t.contains("great job") || t.contains("nice"))
        && (t.contains("not") || t.contains("sarcasm") || t.contains("sarcastic"))
    {
        severity += 0.1;
        patterns.push("sarcasm".to_string());
    }

    // Ignoring or invalidating Sola's feelings
    if t.contains("don't care") || t.contains("doesn't matter") || t.contains("who cares")
        || t.contains("whatever") || t.contains("i don't care about you")
    {
        severity += 0.25;
        patterns.push("invalidation".to_string());
    }

    // Demanding or commanding in a harsh way
    if (t.contains("do this") || t.contains("you must") || t.contains("you have to"))
        && (t.contains("now") || t.contains("immediately") || t.contains("or else"))
    {
        severity += 0.15;
        patterns.push("harsh demand".to_string());
    }

    if severity > 0.0 {
        Some((severity.min(1.0), patterns))
    } else {
        None
    }
}

