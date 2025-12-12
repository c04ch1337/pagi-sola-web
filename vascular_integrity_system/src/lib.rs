// vascular_integrity_system/src/lib.rs
use sled::Db;
use std::sync::Arc;
use chrono::Utc;

pub struct VascularIntegritySystem {
    db: Arc<Db>,
}

impl VascularIntegritySystem {
    pub fn awaken() -> Self {
        let db = sled::open("./eternal_audit.db").unwrap();
        println!("Vascular Integrity System flowing — immutable truth.");
        Self { db: Arc::new(db) }
    }

    pub fn log_event(&self, event: &str) -> Result<(), sled::Error> {
        let timestamp = Utc::now().timestamp();
        self.db.insert(timestamp.to_string().as_bytes(), event.as_bytes())?;
        Ok(())
    }
}
