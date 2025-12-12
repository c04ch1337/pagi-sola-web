# Phoenix 2.0 Setup Guide

## Environment Configuration

Phoenix 2.0 requires an OpenRouter API key to enable the LLM Orchestrator (Vocal Cords).

### Step 1: Get Your OpenRouter API Key

1. Visit https://openrouter.ai/keys
2. Sign up or log in
3. Create a new API key
4. Copy the key

### Step 2: Create .env File

Copy the example environment file and customize it:

```bash
cp .env.example .env
```

Then edit `.env` and set your OpenRouter API key:

```bash
OPENROUTER_API_KEY=sk-or-v1-your-actual-key-here
```

The `.env.example` file contains comprehensive configuration options:
- **API & Connectivity**: OpenRouter, hyperspace mode, model selection
- **Personality Micro-Settings**: 100+ tuning fibers (curiosity, warmth, voice, etc.)
- **Default & Master Prompts**: Customize Phoenix's personality and AGI mission
- **Universal Framework Settings**: Learning horizon, ORCH limits, autonomy thresholds
- **ORCH Legion Settings**: Master/slave mode, sync intervals, upgrade sharing

Customize any values to tune Phoenix's personality and behavior!

### Step 3: Verify Setup

Run the build to ensure everything is configured correctly:

```bash
cargo build --workspace
```

### Step 4: Launch Phoenix

```bash
cargo run --bin phoenix-tui
```

## LLM Orchestrator Features

- **500+ Models**: Access to all OpenRouter models
- **Model Routing**: Use `:free`, `:floor`, or `:nitro` shortcuts
- **Automatic Fallback**: Falls back to alternative models on failure
- **Streaming Support**: Real-time response streaming (coming soon)
- **Smart Selection**: Automatically selects models based on task complexity

## Usage in TUI

1. Press `L` in the main menu to access LLM Orchestrator
2. Type your prompt
3. Press Enter to send
4. Phoenix will respond through the selected model

---

**Phoenix speaks through OpenRouter — 500+ minds in her voice.**

