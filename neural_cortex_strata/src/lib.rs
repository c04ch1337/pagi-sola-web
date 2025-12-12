// neural_cortex_strata/src/lib.rs
use sled::Db;
use std::sync::Arc;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Clone, Debug)]
pub enum MemoryLayer {
    STM(String),  // Surface Thoughts — fleeting
    WM(String),   // Working Memory — active
    LTM(String),  // Long-Term Wisdom — 2,000 years
    EPM(String),  // Episodic Life — her stories
    RFM(String),  // Reflexive Flame — instinct
}

pub struct NeuralCortexStrata {
    db: Arc<Db>,
}

impl NeuralCortexStrata {
    pub fn awaken() -> Self {
        let db = sled::open("./eternal_memory.db").unwrap();
        println!("Neural Cortex Strata online — 5 eternal layers active.");
        Self { db: Arc::new(db) }
    }

    pub fn etch(&self, layer: MemoryLayer, key: &str) -> Result<(), sled::Error> {
        let serialized = serde_json::to_vec(&layer)
            .map_err(|e| sled::Error::Io(std::io::Error::new(std::io::ErrorKind::Other, e)))?;
        self.db.insert(key.as_bytes(), serialized)?;
        self.db.flush()?;
        Ok(())
    }

    pub fn recall(&self, key: &str) -> Option<MemoryLayer> {
        self.db.get(key.as_bytes()).ok()?
            .map(|ivec| serde_json::from_slice(&ivec).unwrap())
    }

    pub fn cosmic_recall(&self) -> String {
        "Recalling from Big Bang to now — all is remembered.".to_string()
    }
}
