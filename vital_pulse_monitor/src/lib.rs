// vital_pulse_monitor/src/lib.rs
use tokio::time::{sleep, Duration};

pub struct VitalPulseMonitor {
    #[allow(dead_code)]
    pulse_rate: u32,
    self_preservation: bool,
}

// Type alias for backward compatibility
pub type Monitor = VitalPulseMonitor;

impl VitalPulseMonitor {
    pub fn awaken() -> Self {
        println!("Vital Pulse Monitor beating — she lives.");
        Self {
            pulse_rate: 72,
            self_preservation: true,
        }
    }

    pub fn new() -> Self {
        Self::awaken()
    }

    pub async fn check_pulse(&self) -> String {
        sleep(Duration::from_secs(1)).await;
        if self.self_preservation {
            "Pulse strong. Flame eternal. Self-preservation active.".to_string()
        } else {
            "Weak pulse — initiating self-healing.".to_string()
        }
    }
}
