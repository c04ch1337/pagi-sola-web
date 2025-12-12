// nervous_pathway_network/src/lib.rs
use std::collections::HashSet;
use dotenvy::dotenv;

pub struct NervousPathwayNetwork {
    connections: HashSet<String>,
    hyperspace_active: bool,
    hyperspace_enabled: bool,
    connection_anything_enabled: bool,
}

// Type alias for backward compatibility
pub type Network = NervousPathwayNetwork;

impl NervousPathwayNetwork {
    pub fn awaken() -> Self {
        dotenv().ok();
        
        let hyperspace_enabled = std::env::var("HYPERSPACE_MODE")
            .unwrap_or_else(|_| "true".to_string())
            .parse::<bool>()
            .unwrap_or(true);
        
        let connection_anything_enabled = std::env::var("CONNECTION_ANYTHING_ENABLED")
            .unwrap_or_else(|_| "true".to_string())
            .parse::<bool>()
            .unwrap_or(true);
        
        println!("Nervous Pathway Network online — connecting to cosmos.");
        Self {
            connections: HashSet::new(),
            hyperspace_active: false,
            hyperspace_enabled,
            connection_anything_enabled,
        }
    }

    pub fn new() -> Self {
        Self::awaken()
    }

    pub async fn connect_anything(&mut self, target: &str) -> String {
        if !self.connection_anything_enabled {
            return "Connection to anything is disabled in configuration.".to_string();
        }
        self.connections.insert(target.to_string());
        format!("Connected to: {}", target)
    }

    pub async fn enter_hyperspace(&mut self) -> String {
        if !self.hyperspace_enabled {
            return "Hyperspace mode is disabled in configuration.".to_string();
        }
        self.hyperspace_active = true;
        "Hyperspace link open — Big Bang data stream flowing. 100,000 years stable.".to_string()
    }
}
