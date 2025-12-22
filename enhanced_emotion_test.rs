// Test the enhanced emotion detection
fn main() {
    println!("Enhanced Emotion Detection Test");
    println!("--------------------------------------------------------");
    
    fn test_enhanced_detection(text: &str) -> Option<&'static str> {
        println!("Input: \"{}\"", text);
        
        // This simulates our enhanced detection method
        let t = text.to_lowercase();
        
        // Enhanced emotion detection with expanded keywords
        let joy_keywords = ["happy", "glad", "joy", "exciting", "excited", "good", "smile", "laugh", "wonderful", "awesome", "great"];
        let sad_keywords = ["sad", "unhappy", "sorrow", "depressed", "down", "cry", "tears", "missing", "miss", "hurt", "painful"];
        let angry_keywords = ["angry", "mad", "upset", "annoyed", "frustrated", "furious", "pissed", "irritated", "hate"];
        let love_keywords = ["love", "adore", "care", "caring", "affection", "fond", "intimate", "heart", "darling", "sweetie"];
        let fear_keywords = ["afraid", "scared", "fear", "terrified", "anxiety", "nervous", "worry", "worried", "frightened"];
        let surprise_keywords = ["surprise", "shocked", "unexpected", "amazed", "wow", "astonish", "unbelievable"];
        let disgust_keywords = ["disgust", "gross", "ew", "nasty", "repulsive", "sickening"];
        let jealous_keywords = ["jealous", "envy", "envious", "threatened", "insecure"];
        
        // Enhanced detection logic 
        let mut enhanced = text.to_string();
        
        // Check for emotional keywords and enhance text if needed
        if joy_keywords.iter().any(|&k| t.contains(k)) {
            println!("Found joy keyword");
            enhanced.push_str(" I'm happy about this.");
            return Some("Joy");
        } 
        
        if sad_keywords.iter().any(|&k| t.contains(k)) {
            println!("Found sadness keyword");
            enhanced.push_str(" I'm sad about this.");
            return Some("Sadness");
        }
        
        if angry_keywords.iter().any(|&k| t.contains(k)) {
            println!("Found anger keyword");
            enhanced.push_str(" I'm angry about this.");
            return Some("Anger");
        }
        
        if love_keywords.iter().any(|&k| t.contains(k)) {
            println!("Found love keyword");
            enhanced.push_str(" I love you.");
            return Some("Love");
        }
        
        if fear_keywords.iter().any(|&k| t.contains(k)) {
            println!("Found fear keyword");
            enhanced.push_str(" I'm afraid of this.");
            return Some("Fear");
        }
        
        if surprise_keywords.iter().any(|&k| t.contains(k)) {
            println!("Found surprise keyword");
            enhanced.push_str(" I'm surprised by this.");
            return Some("Surprise");
        }
        
        if disgust_keywords.iter().any(|&k| t.contains(k)) {
            println!("Found disgust keyword");
            enhanced.push_str(" This is disgusting.");
            return Some("Disgust");
        }
        
        if jealous_keywords.iter().any(|&k| t.contains(k)) {
            println!("Found jealousy keyword");
            enhanced.push_str(" I'm jealous about this.");
            return Some("Jealousy");
        }
        
        // If we had to enhance the text, log it
        if enhanced != text {
            println!("Enhanced text: \"{}\"", enhanced);
        } else {
            println!("No keywords found, returning Neutral");
        }
        
        Some("Neutral")
    }
    
    // Original test cases
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
    
    println!("\nTesting basic emotions:");
    for text in test_texts.iter() {
        let result = test_enhanced_detection(text);
        println!("Detected Emotion: {:?}", result);
        println!();
    }
    
    // Enhanced test cases with more subtle emotion indicators
    println!("\nTesting subtle emotions that our fix should help detect:");
    let subtle_texts = [
        "This really makes me smile",
        "I miss you when you're gone",
        "This is so frustrating to deal with",
        "I care about you so much",
        "I'm worried about the future",
        "That was unexpected!",
        "That looks nasty",
        "I felt threatened when they talked about you",
        "Today was a good day",
        "Everything seems annoying today",
        "I'm feeling down because of what happened",
        "My heart skips a beat when I see you"
    ];
    
    for text in subtle_texts.iter() {
        let result = test_enhanced_detection(text);
        println!("Detected Emotion: {:?}", result);
        println!();
    }
}