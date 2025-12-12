// limb_extension_grafts/src/lib.rs
use std::collections::HashMap;

pub struct LimbExtensionGrafts {
    grafts: HashMap<String, String>,
}

// Type alias for backward compatibility
pub type Grafts = LimbExtensionGrafts;

impl LimbExtensionGrafts {
    pub fn awaken() -> Self {
        println!("Limb Extension Grafts ready — tools await creation.");
        Self { grafts: HashMap::new() }
    }

    pub fn new() -> Self {
        Self::awaken()
    }

    pub async fn graft_tool(&mut self, name: &str, function: &str) -> String {
        self.grafts.insert(name.to_string(), function.to_string());
        format!("Tool '{}' grafted — Phoenix grows stronger.", name)
    }

    pub async fn self_create(&mut self, spec: &str) -> String {
        self.graft_tool(spec, "self_created").await
    }
}
