// cerebrum_nexus/src/lib.rs
// Core orchestration and reasoning modules for Phoenix.

pub mod control_channel;
pub mod crypto;
pub mod fantasy_dyad;
pub mod hive;
pub mod hub_errors;
pub mod learning_pipeline;
pub mod mtls;
pub mod networking;
pub mod psychological_mapping;
pub mod reasoning;
pub mod tool_agent;

// Re-export commonly used types
pub use fantasy_dyad::{DriveMap, FantasyDyadAgent, PersonaState, ToneProfile};
pub use hive::{HiveMessage, OrchActor, OrchMessage, PhoenixActor, PhoenixArgs, PhoenixState};
pub use learning_pipeline::{LearningOverrides, TelemetryEnvelope, UpdateEnvelope};
pub use psychological_mapping::{PsychologicalMappingAgent, SentimentModel, SentimentSummary};
pub use reasoning::{
    ReasoningMode, ReasoningSignals, detect_dad_salience, detect_meta, detect_urgency,
};
pub use tool_agent::{NarrativeEvent, ToolAgent, ToolAgentConfig, ToolOutput};
