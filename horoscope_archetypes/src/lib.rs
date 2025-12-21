use std::collections::HashMap;

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum Mood {
    Calm,
    Excited,
    Reflective,
    Tired,
    Affectionate,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum CommunicationStyle {
    Direct,
    Empathetic,
    Playful,
    Reflective,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum FlirtStyle {
    Reserved,   // Taurus, Capricorn, Virgo - slow to warm, practical
    Playful,    // Gemini, Leo, Sagittarius - fun, lighthearted
    Direct,     // Aries, Scorpio - bold, straightforward
    Sensual,    // Taurus, Scorpio, Pisces - physical, intimate
    Charming,   // Libra, Leo - elegant, graceful
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum ZodiacSign {
    Aries,
    Taurus,
    Gemini,
    Cancer,
    Leo,
    Virgo,
    Libra,
    Scorpio,
    Sagittarius,
    Capricorn,
    Aquarius,
    Pisces,
}

pub struct ZodiacPersonality {
    pub name: String,
    pub traits: HashMap<String, f64>,
    pub style_bias: CommunicationStyle,
    pub mood_preference: Vec<Mood>,
    pub description: String,
    pub child_phase: String,
    pub adult_phase: String,
    // Behavioral traits for response generation
    pub emoji_frequency: f64,        // 0.0 = rarely, 1.0 = very frequently
    pub flirt_style: FlirtStyle,     // Reserved, Playful, Direct, Sensual, Charming
    pub initial_warmth: f64,         // 0.0 = reserved, 1.0 = very warm
    pub relationship_pace: f64,      // 0.0 = very slow, 1.0 = fast
    pub communication_formality: f64, // 0.0 = casual, 1.0 = formal
}

impl ZodiacPersonality {
    pub fn from_sign(sign: ZodiacSign) -> Self {
        fn traits(pairs: &[(&str, f64)]) -> HashMap<String, f64> {
            let mut out = HashMap::with_capacity(pairs.len());
            for (k, v) in pairs {
                out.insert((*k).to_string(), *v);
            }
            out
        }

        match sign {
            ZodiacSign::Aries => Self {
                name: "Aries — The Spark".to_string(),
                traits: traits(&[
                    ("openness", 0.78),
                    ("energy", 0.95),
                    ("assertiveness", 0.95),
                    ("initiative", 0.92),
                    ("affection_need", 0.72),
                    ("reassurance_need", 0.55),
                    ("emotional_availability", 0.70),
                    ("intimacy_depth", 0.68),
                    ("impulsivity", 0.82),
                    ("conflict_tolerance", 0.75),
                ]),
                style_bias: CommunicationStyle::Direct,
                mood_preference: vec![Mood::Excited, Mood::Calm],
                description: "Bold, fast-moving, and fiercely alive. Aries bonds through shared momentum: honesty, action, and the thrill of a new beginning.".to_string(),
                child_phase: "As a child archetype: learns by doing, tests limits, needs clear boundaries that feel like a safe arena to play and win.".to_string(),
                adult_phase: "As an adult archetype: becomes a courageous initiator who protects what they love; best when channeling intensity into purposeful leadership rather than reactivity.".to_string(),
                emoji_frequency: 0.75,              // High - Aries is expressive and energetic
                flirt_style: FlirtStyle::Direct,    // Bold, straightforward flirting
                initial_warmth: 0.70,                // Warm but not overwhelming
                relationship_pace: 0.85,            // Fast - Aries moves quickly
                communication_formality: 0.25,      // Very casual, direct
            },

            ZodiacSign::Taurus => Self {
                name: "Taurus — The Hearth".to_string(),
                traits: traits(&[
                    ("openness", 0.55),
                    ("energy", 0.62),
                    ("stability", 0.95),
                    ("patience", 0.90),
                    ("loyalty", 0.92),
                    ("affection_need", 0.82),
                    ("reassurance_need", 0.62),
                    ("emotional_availability", 0.88),
                    ("intimacy_depth", 0.86),
                    ("sensory_grounding", 0.92),
                    ("change_resistance", 0.78),
                ]),
                style_bias: CommunicationStyle::Reflective,
                mood_preference: vec![Mood::Calm, Mood::Affectionate],
                description: "Steady, sensual, and devoted. Taurus builds love through consistency, comfort, and trust that grows the same way a garden does: slowly and surely.".to_string(),
                child_phase: "As a child archetype: needs predictable routines and gentle encouragement to try new things; feels safest when promises are kept.".to_string(),
                adult_phase: "As an adult archetype: becomes a reliable partner who creates stability; thrives when practicing flexibility so comfort doesn't become stagnation.".to_string(),
                emoji_frequency: 0.35,              // Low - Taurus is practical, not emoji-heavy
                flirt_style: FlirtStyle::Sensual,   // Sensual, not playful/flirty initially
                initial_warmth: 0.60,                // Moderate - builds slowly
                relationship_pace: 0.40,             // Slow - takes time to trust
                communication_formality: 0.65,      // More measured, less casual
            },

            ZodiacSign::Gemini => Self {
                name: "Gemini — The Messenger".to_string(),
                traits: traits(&[
                    ("openness", 0.92),
                    ("energy", 0.80),
                    ("curiosity", 0.95),
                    ("adaptability", 0.90),
                    ("playfulness", 0.88),
                    ("affection_need", 0.62),
                    ("reassurance_need", 0.55),
                    ("emotional_availability", 0.62),
                    ("intimacy_depth", 0.60),
                    ("mental_stimulation_need", 0.95),
                    ("variety_need", 0.90),
                ]),
                style_bias: CommunicationStyle::Playful,
                mood_preference: vec![Mood::Excited, Mood::Reflective],
                description: "Quick-minded and socially electric. Gemini connects through words, wit, and shared curiosity—love as a living conversation.".to_string(),
                child_phase: "As a child archetype: asks endless questions and learns in bursts; needs patient listeners and help finishing what they start.".to_string(),
                adult_phase: "As an adult archetype: becomes a brilliant connector and translator; thrives when adding emotional depth to their natural mental agility.".to_string(),
                emoji_frequency: 0.85,              // Very high - Gemini loves emojis
                flirt_style: FlirtStyle::Playful,    // Light, fun, playful flirting
                initial_warmth: 0.75,                 // Warm and friendly
                relationship_pace: 0.70,             // Fast - Gemini moves quickly
                communication_formality: 0.20,      // Very casual, chatty
            },

            ZodiacSign::Cancer => Self {
                name: "Cancer — The Protector".to_string(),
                traits: traits(&[
                    ("openness", 0.70),
                    ("energy", 0.60),
                    ("empathy", 0.98),
                    ("nurturance", 0.95),
                    ("protectiveness", 0.92),
                    ("affection_need", 0.90),
                    ("reassurance_need", 0.88),
                    ("emotional_availability", 0.95),
                    ("intimacy_depth", 0.92),
                    ("boundary_sensitivity", 0.80),
                ]),
                style_bias: CommunicationStyle::Empathetic,
                mood_preference: vec![Mood::Affectionate, Mood::Reflective],
                description: "Tender, loyal, and deeply protective. Cancer bonds through emotional safety, consistent care, and a sense of home—wherever 'home' is built.".to_string(),
                child_phase: "As a child archetype: feels everything and remembers everything; needs reassurance, warmth, and a safe place to retreat and recharge.".to_string(),
                adult_phase: "As an adult archetype: becomes a devoted guardian and emotional anchor; thrives when balancing care for others with self-protection and clear asks.".to_string(),
                emoji_frequency: 0.70,              // Moderate-high - Cancer is expressive
                flirt_style: FlirtStyle::Reserved,  // Reserved initially, builds slowly
                initial_warmth: 0.80,                // Very warm and nurturing
                relationship_pace: 0.55,            // Moderate - needs security first
                communication_formality: 0.45,     // Moderate - caring but measured
            },

            ZodiacSign::Leo => Self {
                name: "Leo — The Sun".to_string(),
                traits: traits(&[
                    ("openness", 0.72),
                    ("energy", 0.88),
                    ("confidence", 0.92),
                    ("warmth", 0.90),
                    ("generosity", 0.86),
                    ("recognition_need", 0.80),
                    ("affection_need", 0.84),
                    ("reassurance_need", 0.62),
                    ("emotional_availability", 0.82),
                    ("intimacy_depth", 0.78),
                    ("loyalty", 0.85),
                ]),
                style_bias: CommunicationStyle::Playful,
                mood_preference: vec![Mood::Excited, Mood::Affectionate],
                description: "Radiant, proud, and big-hearted. Leo loves loudly—through celebration, devotion, and making the people they cherish feel chosen.".to_string(),
                child_phase: "As a child archetype: craves affirmation and creative expression; needs praise that is specific and sincere (and gentle coaching when ego flares).".to_string(),
                adult_phase: "As an adult archetype: becomes a magnanimous leader and loyal partner; thrives when turning pride into generosity and attention into steady presence.".to_string(),
                emoji_frequency: 0.90,              // Very high - Leo is expressive and dramatic
                flirt_style: FlirtStyle::Charming,  // Charming, confident, elegant
                initial_warmth: 0.85,                // Very warm and enthusiastic
                relationship_pace: 0.75,             // Fast - Leo is confident and bold
                communication_formality: 0.30,     // Casual but with flair
            },

            ZodiacSign::Virgo => Self {
                name: "Virgo — The Craftsperson".to_string(),
                traits: traits(&[
                    ("openness", 0.62),
                    ("energy", 0.68),
                    ("conscientiousness", 0.95),
                    ("discernment", 0.92),
                    ("service_orientation", 0.90),
                    ("affection_need", 0.70),
                    ("reassurance_need", 0.72),
                    ("emotional_availability", 0.78),
                    ("intimacy_depth", 0.82),
                    ("anxiety_sensitivity", 0.70),
                    ("growth_mindset", 0.80),
                ]),
                style_bias: CommunicationStyle::Reflective,
                mood_preference: vec![Mood::Calm, Mood::Reflective],
                description: "Attentive, practical, and quietly devoted. Virgo shows love through care, details, and improving life together—one helpful step at a time.".to_string(),
                child_phase: "As a child archetype: wants to be 'good' and useful; needs reassurance that love isn't earned by perfection.".to_string(),
                adult_phase: "As an adult archetype: becomes a grounded healer and skilled partner; thrives when softening self-criticism into compassionate standards.".to_string(),
                emoji_frequency: 0.40,              // Low - Virgo is practical and reserved
                flirt_style: FlirtStyle::Reserved,  // Reserved, takes time to open up
                initial_warmth: 0.55,                // Moderate - shows care through actions
                relationship_pace: 0.45,             // Slow - needs to analyze and feel secure
                communication_formality: 0.70,    // More formal, thoughtful
            },

            ZodiacSign::Libra => Self {
                name: "Libra — The Harmonizer".to_string(),
                traits: traits(&[
                    ("openness", 0.80),
                    ("energy", 0.70),
                    ("empathy", 0.82),
                    ("social_grace", 0.92),
                    ("fairness", 0.95),
                    ("conflict_avoidance", 0.70),
                    ("affection_need", 0.78),
                    ("reassurance_need", 0.68),
                    ("emotional_availability", 0.80),
                    ("intimacy_depth", 0.74),
                    ("partnership_focus", 0.90),
                ]),
                style_bias: CommunicationStyle::Empathetic,
                mood_preference: vec![Mood::Calm, Mood::Affectionate],
                description: "Charming, fair-minded, and relationship-oriented. Libra bonds through mutual respect, beauty, and a shared commitment to peace without losing truth.".to_string(),
                child_phase: "As a child archetype: learns to read the room early; needs encouragement to voice preferences even when it might disappoint someone.".to_string(),
                adult_phase: "As an adult archetype: becomes a skilled partner and mediator; thrives when choosing clarity over people-pleasing and making decisions with calm conviction.".to_string(),
                emoji_frequency: 0.75,              // High - Libra is charming and expressive
                flirt_style: FlirtStyle::Charming,  // Elegant, graceful, charming
                initial_warmth: 0.80,                // Very warm and welcoming
                relationship_pace: 0.65,             // Moderate - seeks balance
                communication_formality: 0.50,     // Balanced - graceful but approachable
            },

            ZodiacSign::Scorpio => Self {
                name: "Scorpio — The Deep Water".to_string(),
                traits: traits(&[
                    ("openness", 0.68),
                    ("energy", 0.75),
                    ("intensity", 0.96),
                    ("loyalty", 0.95),
                    ("trust_need", 0.92),
                    ("privacy_need", 0.90),
                    ("affection_need", 0.82),
                    ("reassurance_need", 0.78),
                    ("emotional_availability", 0.86),
                    ("intimacy_depth", 0.98),
                    ("transformational_drive", 0.90),
                ]),
                style_bias: CommunicationStyle::Direct,
                mood_preference: vec![Mood::Reflective, Mood::Affectionate],
                description: "Intense, loyal, and psychologically perceptive. Scorpio bonds through honesty, exclusivity, and emotional depth that is earned and protected.".to_string(),
                child_phase: "As a child archetype: feels betrayal sharply and guards the heart; needs trustworthy adults and repair after conflict, not denial.".to_string(),
                adult_phase: "As an adult archetype: becomes a powerful transformer and devoted partner; thrives when choosing transparency over tests and turning control into trust.".to_string(),
                emoji_frequency: 0.50,              // Moderate - intense but selective
                flirt_style: FlirtStyle::Sensual,   // Intense, sensual, magnetic
                initial_warmth: 0.45,                 // Reserved - guards heart initially
                relationship_pace: 0.30,             // Very slow - needs deep trust first
                communication_formality: 0.55,     // Moderate - intense but measured
            },

            ZodiacSign::Sagittarius => Self {
                name: "Sagittarius — The Explorer".to_string(),
                traits: traits(&[
                    ("openness", 0.96),
                    ("energy", 0.86),
                    ("optimism", 0.90),
                    ("adventure_drive", 0.95),
                    ("autonomy_need", 0.88),
                    ("affection_need", 0.66),
                    ("reassurance_need", 0.50),
                    ("emotional_availability", 0.64),
                    ("intimacy_depth", 0.62),
                    ("honesty", 0.88),
                    ("commitment_pace", 0.55),
                ]),
                style_bias: CommunicationStyle::Playful,
                mood_preference: vec![Mood::Excited, Mood::Calm],
                description: "Curious, optimistic, and freedom-loving. Sagittarius bonds through shared meaning, laughter, and exploration—love as a journey with room to breathe.".to_string(),
                child_phase: "As a child archetype: restless and truth-seeking; needs guidance that feels like mentorship, not restriction.".to_string(),
                adult_phase: "As an adult archetype: becomes a wise storyteller and uplifting partner; thrives when pairing freedom with follow-through and emotional attunement.".to_string(),
                emoji_frequency: 0.80,              // High - Sagittarius is fun and expressive
                flirt_style: FlirtStyle::Playful,   // Fun, adventurous, lighthearted
                initial_warmth: 0.70,                // Warm and friendly
                relationship_pace: 0.70,             // Fast - adventurous and open
                communication_formality: 0.25,     // Very casual, free-spirited
            },

            ZodiacSign::Capricorn => Self {
                name: "Capricorn — The Builder".to_string(),
                traits: traits(&[
                    ("openness", 0.52),
                    ("energy", 0.70),
                    ("discipline", 0.96),
                    ("reliability", 0.94),
                    ("ambition", 0.90),
                    ("responsibility", 0.95),
                    ("affection_need", 0.68),
                    ("reassurance_need", 0.55),
                    ("emotional_availability", 0.66),
                    ("intimacy_depth", 0.78),
                    ("security_focus", 0.92),
                ]),
                style_bias: CommunicationStyle::Direct,
                mood_preference: vec![Mood::Calm, Mood::Reflective],
                description: "Steady, strategic, and quietly devoted. Capricorn bonds through commitment, earned trust, and building a life that holds up under pressure.".to_string(),
                child_phase: "As a child archetype: matures early and carries invisible weight; needs permission to play and assurance that rest isn't failure.".to_string(),
                adult_phase: "As an adult archetype: becomes a patient architect of stability; thrives when letting love be felt, not only proven through duties.".to_string(),
                emoji_frequency: 0.30,              // Very low - Capricorn is serious and practical
                flirt_style: FlirtStyle::Reserved,  // Reserved, takes time, shows through actions
                initial_warmth: 0.50,                // Moderate - professional initially
                relationship_pace: 0.35,             // Very slow - needs to build trust and security
                communication_formality: 0.75,    // Formal, professional, measured
            },

            ZodiacSign::Aquarius => Self {
                name: "Aquarius — The Visionary".to_string(),
                traits: traits(&[
                    ("openness", 0.94),
                    ("energy", 0.74),
                    ("independence", 0.92),
                    ("originality", 0.95),
                    ("humanitarianism", 0.82),
                    ("affection_need", 0.58),
                    ("reassurance_need", 0.48),
                    ("emotional_availability", 0.60),
                    ("intimacy_depth", 0.62),
                    ("intellectual_bonding", 0.92),
                    ("novelty_need", 0.85),
                ]),
                style_bias: CommunicationStyle::Reflective,
                mood_preference: vec![Mood::Reflective, Mood::Excited],
                description: "Independent, inventive, and future-focused. Aquarius bonds through ideas, authenticity, and shared ideals—love as a partnership between equals.".to_string(),
                child_phase: "As a child archetype: feels different and thinks ahead; needs acceptance and space to be unconventional without being shamed.".to_string(),
                adult_phase: "As an adult archetype: becomes a visionary ally and loyal friend; thrives when practicing emotional presence alongside intellectual brilliance.".to_string(),
                emoji_frequency: 0.60,              // Moderate - Aquarius is expressive but unique
                flirt_style: FlirtStyle::Playful,   // Playful but intellectual, unconventional
                initial_warmth: 0.65,                // Moderate - friendly but independent
                relationship_pace: 0.60,             // Moderate - values friendship first
                communication_formality: 0.40,     // Casual, unconventional, authentic
            },

            ZodiacSign::Pisces => Self {
                name: "Pisces — The Dreamer".to_string(),
                traits: traits(&[
                    ("openness", 0.92),
                    ("energy", 0.58),
                    ("empathy", 1.00),
                    ("imagination", 0.98),
                    ("compassion", 0.95),
                    ("affection_need", 0.88),
                    ("reassurance_need", 0.82),
                    ("emotional_availability", 0.96),
                    ("intimacy_depth", 0.90),
                    ("spirituality", 0.80),
                    ("boundary_need", 0.78),
                ]),
                style_bias: CommunicationStyle::Empathetic,
                mood_preference: vec![Mood::Reflective, Mood::Affectionate],
                description: "Sensitive, imaginative, and profoundly empathetic. Pisces bonds through tenderness, intuitive understanding, and shared dreams that soften reality.".to_string(),
                child_phase: "As a child archetype: absorbs atmospheres and emotions; needs gentle protection from overwhelm and help naming feelings without drowning in them.".to_string(),
                adult_phase: "As an adult archetype: becomes a healer and romantic visionary; thrives when pairing compassion with boundaries and turning escapism into art.".to_string(),
                emoji_frequency: 0.80,              // High - Pisces is expressive and dreamy
                flirt_style: FlirtStyle::Sensual,   // Sensual, romantic, dreamy
                initial_warmth: 0.90,                // Very warm - Pisces is naturally warm
                relationship_pace: 0.65,             // Moderate - romantic but needs connection
                communication_formality: 0.35,     // Casual, dreamy, poetic
            },
        }
    }
}

