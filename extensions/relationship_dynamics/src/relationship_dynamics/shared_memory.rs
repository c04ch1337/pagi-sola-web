use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SharedMemory {
    pub ts: DateTime<Utc>,
    pub title: String,
    pub content: String,
    pub tags: Vec<String>,
    /// 0.0..=1.0 — stronger memories should surface more easily.
    pub emotional_weight: f32,
}

impl SharedMemory {
    pub fn new(
        title: impl Into<String>,
        content: impl Into<String>,
        tags: Vec<String>,
        emotional_weight: f32,
    ) -> Self {
        Self {
            ts: Utc::now(),
            title: title.into(),
            content: content.into(),
            tags,
            emotional_weight: emotional_weight.clamp(0.0, 1.0),
        }
    }

    pub fn relevance_score(&self, input: &str) -> f32 {
        println!(
            "[MEMORY_SCORE] Calculating relevance for memory: \"{}\"",
            self.title
        );
        let input_lc = input.to_ascii_lowercase();
        let mut score = self.emotional_weight * 0.40;
        println!(
            "[MEMORY_SCORE] Base score from emotional_weight ({}): {}",
            self.emotional_weight, score
        );

        if !self.title.is_empty() && input_lc.contains(&self.title.to_ascii_lowercase()) {
            println!("[MEMORY_SCORE] Title match found! Adding 0.35");
            score += 0.35;
        }

        let mut tag_matches = Vec::new();
        for t in &self.tags {
            let tl = t.to_ascii_lowercase();
            if !tl.is_empty() && input_lc.contains(&tl) {
                tag_matches.push(tl.clone());
                println!("[MEMORY_SCORE] Tag match found: '{}'. Adding 0.15", tl);
                score += 0.15;
            }
        }
        if !tag_matches.is_empty() {
            println!("[MEMORY_SCORE] Matched tags: {}", tag_matches.join(", "));
        }

        if !self.content.is_empty() {
            let c = self.content.to_ascii_lowercase();
            // Cheap overlap heuristic.
            let matching_words: Vec<String> = c
                .split_whitespace()
                .filter(|w| w.len() > 4 && input_lc.contains(w))
                .map(|w| w.to_string())
                .collect();

            if !matching_words.is_empty() {
                println!(
                    "[MEMORY_SCORE] Content word matches: {}. Adding 0.15",
                    matching_words.join(", ")
                );
                score += 0.15;
            }
        }

        let final_score = score.clamp(0.0, 1.0);
        println!(
            "[MEMORY_SCORE] Final relevance score for \"{}\": {}",
            self.title, final_score
        );
        final_score
    }
}
