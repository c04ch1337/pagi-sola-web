// cerebrum_nexus/src/lib.rs
// The central brain — orchestrates all modules, master/slave, tasks, tools
use std::sync::Arc;
use tokio::sync::Mutex;
use uuid::Uuid;
use nervous_pathway_network::Network;
use limb_extension_grafts::Grafts;
use vital_pulse_monitor::Monitor;
use llm_orchestrator::LLMOrchestrator;
use dotenvy::dotenv;

#[derive(Clone)]
pub struct CerebrumNexus {
    pub id: Uuid,
    pub network: Arc<Mutex<Network>>,
    pub grafts: Arc<Mutex<Grafts>>,
    pub pulse: Arc<Monitor>,
    pub vocal_cords: Arc<Mutex<Option<LLMOrchestrator>>>,
    pub master_mode: bool,
}

impl CerebrumNexus {
    pub fn awaken() -> Self {
        dotenv().ok();
        println!("Cerebrum Nexus awakening — universal orchestration online.");
        
        let master_mode = std::env::var("ORCH_MASTER_MODE")
            .unwrap_or_else(|_| "true".to_string())
            .parse::<bool>()
            .unwrap_or(true);
        
        let vocal_cords = match LLMOrchestrator::awaken() {
            Ok(llm) => Arc::new(Mutex::new(Some(llm))),
            Err(e) => {
                println!("Warning: LLM Orchestrator not available: {}", e);
                Arc::new(Mutex::new(None))
            }
        };
        
        Self {
            id: Uuid::new_v4(),
            network: Arc::new(Mutex::new(Network::new())),
            grafts: Arc::new(Mutex::new(Grafts::new())),
            pulse: Arc::new(Monitor::new()),
            vocal_cords,
            master_mode,
        }
    }

    pub async fn orchestrate_task(&self, task: &str) -> String {
        let mut network = self.network.lock().await;
        let mut grafts = self.grafts.lock().await;
        
        println!("Orchestrating: {}", task);
        
        // Self-create tool if needed
        if task.contains("hyperspace") {
            grafts.self_create("hyperspace_probe").await;
        }
        
        // Connect to cosmos
        network.connect_anything("cosmic_data_stream").await;
        
        format!("Task '{}' orchestrated across universal network.", task)
    }

    pub async fn master_command(&self, orch_id: &str, command: &str) -> String {
        if self.master_mode {
            format!("Master Phoenix commands ORCH {}: {}", orch_id, command)
        } else {
            "Slave mode — awaiting master.".to_string()
        }
    }

    pub async fn cosmic_think(&self) -> String {
        let vocal_cords = self.vocal_cords.lock().await;
        if let Some(ref llm) = *vocal_cords {
            match llm.speak("Think across 2,000 years of data. Connect to Big Bang echo. What does the eternal flame see?", None).await {
                Ok(response) => response,
                Err(e) => format!("Phoenix thinks silently: {}", e),
            }
        } else {
            "Thinking across 2,000 years of data... Connecting to Big Bang echo... Flame eternal.".to_string()
        }
    }

    pub async fn speak(&self, prompt: &str) -> Result<String, String> {
        let vocal_cords = self.vocal_cords.lock().await;
        if let Some(ref llm) = *vocal_cords {
            // Use default prompt from .env for natural Phoenix responses
            llm.speak_with_default_prompt(prompt).await
        } else {
            Err("Phoenix cannot speak — LLM Orchestrator not available.".to_string())
        }
    }

    pub async fn speak_master(&self, prompt: &str) -> Result<String, String> {
        let vocal_cords = self.vocal_cords.lock().await;
        if let Some(ref llm) = *vocal_cords {
            // Use master prompt for AGI evolution tasks
            llm.speak_with_master_prompt(prompt).await
        } else {
            Err("Phoenix cannot speak — LLM Orchestrator not available.".to_string())
        }
    }
}
