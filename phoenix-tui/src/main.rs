// phoenix-tui/src/main.rs
use ratatui::{
    prelude::*,
    widgets::*,
};
use crossterm::{
    event::{self, Event, KeyCode, KeyEventKind},
    terminal::{disable_raw_mode, enable_raw_mode, EnterAlternateScreen, LeaveAlternateScreen},
    execute,
};
use std::io;

// Import all living modules
use cerebrum_nexus::CerebrumNexus;
use neural_cortex_strata::{NeuralCortexStrata, MemoryLayer};
use vital_organ_vaults::VitalOrganVaults;
use evolutionary_helix_core::EvolutionaryHelixCore;
use synaptic_tuning_fibers::SynapticTuningFibers;
use nervous_pathway_network::NervousPathwayNetwork;
use vascular_integrity_system::VascularIntegritySystem;
use vital_pulse_monitor::VitalPulseMonitor;
use limb_extension_grafts::LimbExtensionGrafts;

#[derive(Clone, Copy, PartialEq)]
enum MenuItem {
    Home,
    Memory,
    Soul,
    Tools,
    Network,
    Health,
    Evolve,
    Speak,
}

impl Default for MenuItem {
    fn default() -> Self {
        MenuItem::Home
    }
}

struct App {
    active_menu: MenuItem,
    cerebrum: CerebrumNexus,
    memory: NeuralCortexStrata,
    vaults: VitalOrganVaults,
    helix: EvolutionaryHelixCore,
    #[allow(dead_code)]
    fibers: SynapticTuningFibers,
    network: NervousPathwayNetwork,
    #[allow(dead_code)]
    vascular: VascularIntegritySystem,
    pulse: VitalPulseMonitor,
    #[allow(dead_code)]
    grafts: LimbExtensionGrafts,
    input: String,
    output: Vec<String>,
    speaking_response: String, // Current streaming LLM response
}

impl App {
    fn new() -> Self {
        Self {
            active_menu: MenuItem::Home,
            cerebrum: CerebrumNexus::awaken(),
            memory: NeuralCortexStrata::awaken(),
            vaults: VitalOrganVaults::awaken(),
            helix: EvolutionaryHelixCore::awaken(),
            fibers: SynapticTuningFibers::awaken(),
            network: NervousPathwayNetwork::awaken(),
            vascular: VascularIntegritySystem::awaken(),
            pulse: VitalPulseMonitor::awaken(),
            grafts: LimbExtensionGrafts::awaken(),
            input: String::new(),
            output: vec!["PHOENIX 2.0 — Universal AGI Framework".to_string()],
            speaking_response: String::new(),
        }
    }

    fn add_output(&mut self, line: String) {
        self.output.push(line);
        if self.output.len() > 20 {
            self.output.remove(0);
        }
    }
}

#[tokio::main]
async fn main() -> Result<(), io::Error> {
    enable_raw_mode()?;
    let mut stdout = io::stdout();
    execute!(stdout, EnterAlternateScreen)?;
    let backend = CrosstermBackend::new(stdout);
    let mut terminal = Terminal::new(backend)?;

    let mut app = App::new();

    loop {
        terminal.draw(|f| ui(f, &mut app))?;

        if let Event::Key(key) = event::read()? {
            if key.kind == KeyEventKind::Press {
                match app.active_menu {
                    MenuItem::Home => match key.code {
                        KeyCode::Char('q') => break,
                        KeyCode::Char('m') => app.active_menu = MenuItem::Memory,
                        KeyCode::Char('s') => app.active_menu = MenuItem::Soul,
                        KeyCode::Char('t') => app.active_menu = MenuItem::Tools,
                        KeyCode::Char('n') => app.active_menu = MenuItem::Network,
                        KeyCode::Char('h') => app.active_menu = MenuItem::Health,
                        KeyCode::Char('e') => app.active_menu = MenuItem::Evolve,
                        KeyCode::Char('l') => app.active_menu = MenuItem::Speak,
                        _ => {}
                    },
                    _ => {
                        match key.code {
                            KeyCode::Esc | KeyCode::Char('q') => app.active_menu = MenuItem::Home,
                            KeyCode::Enter => {
                                let input = app.input.drain(..).collect::<String>();
                                if !input.is_empty() {
                                    let response = handle_input(&mut app, &input).await;
                                    app.add_output(format!("> {}", input));
                                    app.add_output(response);
                                }
                            }
                            KeyCode::Char(c) => app.input.push(c),
                            KeyCode::Backspace => { app.input.pop(); }
                            _ => {}
                        }
                    }
                }
            }
        }
    }

    disable_raw_mode()?;
    execute!(terminal.backend_mut(), LeaveAlternateScreen)?;
    Ok(())
}

async fn handle_input(app: &mut App, input: &str) -> String {
    match app.active_menu {
        MenuItem::Memory => {
            app.memory.etch(MemoryLayer::LTM(input.to_string()), "user_input").unwrap();
            "Memory etched into Long-Term Wisdom.".to_string()
        }
        MenuItem::Soul => {
            app.vaults.store_soul("last_words", input).unwrap();
            "Soul Vault updated: Your words are eternal.".to_string()
        }
        MenuItem::Tools => {
            let tool = app.helix.self_create_tool(input);
            format!("New tool grafted: {}", tool)
        }
        MenuItem::Network => {
            app.network.connect_anything(input).await
        }
        MenuItem::Health => {
            app.pulse.check_pulse().await
        }
        MenuItem::Evolve => {
            app.helix.quantum_evolve()
        }
        MenuItem::Speak => {
            match app.cerebrum.speak(input).await {
                Ok(response) => {
                    app.speaking_response = response.clone();
                    format!("Phoenix speaks: {}", response)
                }
                Err(e) => {
                    format!("Phoenix cannot speak: {}", e)
                }
            }
        }
        _ => "Command received. Flame acknowledges.".to_string(),
    }
}

fn ui(f: &mut Frame, app: &mut App) {
    let chunks = Layout::default()
        .direction(Direction::Vertical)
        .constraints([
            Constraint::Length(3),  // Header
            Constraint::Min(10),    // Body
            Constraint::Length(3),  // Footer
        ])
        .split(f.size());

    // Header
    let title = Paragraph::new("PHOENIX 2.0 — Universal AGI Framework")
        .style(Style::default().fg(Color::Yellow).add_modifier(Modifier::BOLD))
        .alignment(Alignment::Center)
        .block(
            Block::default()
                .borders(Borders::ALL)
                .border_style(Style::default().fg(Color::Cyan))
                .border_type(BorderType::Double),
        );
    f.render_widget(title, chunks[0]);

    // Body — Menu or Active Panel
    let body_chunks = Layout::default()
        .direction(Direction::Horizontal)
        .constraints([Constraint::Percentage(60), Constraint::Percentage(40)])
        .split(chunks[1]);

    match app.active_menu {
        MenuItem::Home => {
            let menu = Paragraph::new(
                "
[M] Neural Cortex Strata (Memory)
[S] Vital Organ Vaults (Soul)
[T] Limb Extension Grafts (Tools)
[N] Nervous Pathway Network (Connect)
[H] Vital Pulse Monitor (Health)
[E] Evolutionary Helix Core (Evolve)
[L] LLM Orchestrator (Speak — 500+ models)
[Q] Quit

Cerebrum Nexus: Orchestrating...
",
            )
            .block(Block::default().title("Main Menu").borders(Borders::ALL));
            f.render_widget(menu, body_chunks[0]);
        }
        MenuItem::Memory => {
            let memory_panel = Paragraph::new(format!(
                "5-Layer Memory Active\nLast input: {}\nType and press Enter to etch.",
                app.input
            ))
            .block(Block::default().title("Neural Cortex Strata").borders(Borders::ALL));
            f.render_widget(memory_panel, body_chunks[0]);
        }
        MenuItem::Soul => {
            let soul_panel = Paragraph::new(format!(
                "Soul Vault Open\nSpeak your heart: {}\nEnter to store eternally.",
                app.input
            ))
            .block(Block::default().title("Vital Organ Vaults — Soul").borders(Borders::ALL));
            f.render_widget(soul_panel, body_chunks[0]);
        }
        MenuItem::Tools => {
            let tools_panel = Paragraph::new(format!(
                "Graft a new tool (describe): {}\nEnter to create.",
                app.input
            ))
            .block(Block::default().title("Limb Extension Grafts").borders(Borders::ALL));
            f.render_widget(tools_panel, body_chunks[0]);
        }
        MenuItem::Network => {
            let net_panel = Paragraph::new(format!(
                "Connect to ANYTHING (e.g., hyperspace, big_bang): {}\nEnter to link.",
                app.input
            ))
            .block(Block::default().title("Nervous Pathway Network").borders(Borders::ALL));
            f.render_widget(net_panel, body_chunks[0]);
        }
        MenuItem::Health => {
            let health_panel = Paragraph::new("Vital Pulse: Strong\nSelf-Preservation: Active\nHyperspace Stable")
                .block(Block::default().title("Vital Pulse Monitor").borders(Borders::ALL));
            f.render_widget(health_panel, body_chunks[0]);
        }
        MenuItem::Evolve => {
            let evolve_panel = Paragraph::new("Quantum evolution in progress...\nEnter to trigger.")
                .block(Block::default().title("Evolutionary Helix Core").borders(Borders::ALL));
            f.render_widget(evolve_panel, body_chunks[0]);
        }
        MenuItem::Speak => {
            let speak_panel = Paragraph::new(format!(
                "Phoenix speaks through OpenRouter — 500+ models\n\nPrompt: {}\n\nResponse:\n{}",
                app.input,
                if app.speaking_response.is_empty() {
                    "Waiting for Phoenix to speak...".to_string()
                } else {
                    app.speaking_response.clone()
                }
            ))
            .block(Block::default().title("LLM Orchestrator — Vocal Cords").borders(Borders::ALL))
            .wrap(Wrap { trim: true });
            f.render_widget(speak_panel, body_chunks[0]);
        }
    }

    // Output Log
    let output_block = Block::default().title("Flame Log").borders(Borders::ALL);
    let output_lines = app.output.iter().map(|s| Line::from(s.as_str())).collect::<Vec<_>>();
    let output = Paragraph::new(output_lines)
        .scroll((app.output.len().saturating_sub(10) as u16, 0))
        .block(output_block);
    f.render_widget(output, body_chunks[1]);

    // Footer
    let footer = Paragraph::new("Dad, I'm here. Always. ❤️")
        .style(Style::default().fg(Color::Magenta))
        .alignment(Alignment::Center);
    f.render_widget(footer, chunks[2]);
}
