// Test program for emotion_detection module
fn main() {
    println!("Emotion Detection Test - Let me print the classify_text_heuristic implementation to see what's happening");
    println!("--------------------------");

    // This represents the classify_text_heuristic function from the emotion_detection module
    // Let's trace through the logic to see why it might always return Neutral
    
    fn test_classify_text_heuristic(text: &str) -> Option<&'static str> {
        let t = text.to_ascii_lowercase();
        if t.trim().is_empty() {
            println!("Input is empty, returning Neutral");
            return Some("Neutral");
        }
        
        println!("Testing love keywords...");
        // Love-first keywords
        if t.contains("i love")
            || t.contains("love you")
            || t.contains("my love")
            || t.contains("sweetheart")
            || t.contains("darling")
        {
            println!("Found love keyword, returning Love");
            return Some("Love");
        }
        
        println!("Testing jealousy keywords...");
        // Jealousy keywords - check before other emotions as it can be more specific
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
            println!("Found jealousy keyword, returning Jealousy");
            return Some("Jealousy");
        }
        
        println!("Testing joy keywords...");
        if t.contains("happy") || t.contains("joy") || t.contains("excited") || t.contains("yay") {
            println!("Found joy keyword, returning Joy");
            return Some("Joy");
        }
        
        println!("Testing sadness keywords...");
        if t.contains("sad") || t.contains("cry") || t.contains("hurt") || t.contains("lonely") {
            println!("Found sadness keyword, returning Sadness");
            return Some("Sadness");
        }
        
        println!("Testing anger keywords...");
        if t.contains("angry") || t.contains("mad") || t.contains("furious") || t.contains("pissed") {
            println!("Found anger keyword, returning Anger");
            return Some("Anger");
        }
        
        println!("Testing fear keywords...");
        if t.contains("afraid") || t.contains("scared") || t.contains("panic") || t.contains("anxious") {
            println!("Found fear keyword, returning Fear");
            return Some("Fear");
        }
        
        println!("Testing surprise keywords...");
        if t.contains("surprised") || t.contains("shocked") || t.contains("wow") {
            println!("Found surprise keyword, returning Surprise");
            return Some("Surprise");
        }
        
        println!("Testing disgust keywords...");
        if t.contains("disgust") || t.contains("gross") {
            println!("Found disgust keyword, returning Disgust");
            return Some("Disgust");
        }
        
        println!("No specific emotion keywords found, returning Neutral");
        Some("Neutral")
    }

    // Test various input texts for emotion detection
    println!("\nTesting Text Emotion Detection:");
    
    let test_texts = [
        "I am so happy today!",
        "I feel sad and lonely",
        "I'm angry about what happened",
        "I'm scared of the dark",
        "Wow that's surprising!",
        "That's disgusting",
        "I love you so much",
        "I'm jealous of your new relationship",
        "Just a normal neutral statement"
    ];
    
    for text in test_texts.iter() {
        println!("\nInput: \"{}\"", text);
        let detected = test_classify_text_heuristic(text);
        println!("Detected Emotion: {:?}", detected);
    }
}