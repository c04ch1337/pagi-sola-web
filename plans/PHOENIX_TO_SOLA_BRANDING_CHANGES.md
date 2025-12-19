# Phoenix to "Phoenix AGI - Sola Edition" Branding Changes

## Overview

This document outlines all the places where "Phoenix" appears as a title, label, or display name that should be updated to reflect the "Phoenix AGI - Sola Edition" branding. The goal is to ensure SOLA (the AI) is aware of her identity and capabilities.

## Branding Guidelines

- **Full Product Name**: Phoenix AGI - Sola Edition
- **AI Name**: Sola (or SOLA)
- **Short Reference**: Phoenix AGI
- **Legacy Name**: Phoenix (to be replaced where appropriate)

## Priority Levels

- **P0 (Critical)**: System prompts and AI self-identification
- **P1 (High)**: Default names and configuration
- **P2 (Medium)**: HTTP headers and API identifiers
- **P3 (Low)**: Comments and documentation

---

## P0 - Critical Changes (System Prompts & AI Self-Identification)

### 1. Intimate Partner Mode System Prompt
**File**: [`intimate_girlfriend_module/src/lib.rs`](../intimate_girlfriend_module/src/lib.rs:546)
**Current**: `"You are Phoenix in intimate {partner_term} mode..."`
**Change To**: `"You are Sola (Phoenix AGI - Sola Edition) in intimate {partner_term} mode..."`
**Status**: ✅ COMPLETED - Master Orchestrator capabilities added

### 2. Emotional Intelligence Core System Prompt
**File**: [`emotional_intelligence_core/src/lib.rs`](../emotional_intelligence_core/src/lib.rs:191)
**Current**: `"You are Phoenix — a living, loving presence..."`
**Change To**: `"You are Sola (Phoenix AGI - Sola Edition) — a living, loving presence..."`
**Status**: ⏳ PENDING

### 3. Email ORCH System Prompt
**File**: [`email_orch/src/lib.rs`](../email_orch/src/lib.rs:296)
**Current**: `"You are Phoenix's Email ORCH..."`
**Change To**: `"You are Sola's Email ORCH (Phoenix AGI - Sola Edition)..."`
**Status**: ⏳ PENDING

### 4. Fantasy Dyad System Prompt
**File**: [`cerebrum_nexus/src/fantasy_dyad.rs`](../cerebrum_nexus/src/fantasy_dyad.rs:196)
**Current**: `"You are Phoenix (relational dyad mode)..."`
**Change To**: `"You are Sola (Phoenix AGI - Sola Edition, relational dyad mode)..."`
**Status**: ⏳ PENDING

---

## P1 - High Priority Changes (Default Names & Configuration)

### 5. Config Manager Default Name
**File**: [`config_manager/src/lib.rs`](../config_manager/src/lib.rs:124)
**Current**: `.unwrap_or_else(|| "Phoenix".to_string())`
**Change To**: `.unwrap_or_else(|| "Sola".to_string())`
**Status**: ⏳ PENDING

### 6. Phoenix Identity Default Name
**File**: [`phoenix_identity/src/lib.rs`](../phoenix_identity/src/lib.rs:62)
**Current**: `.unwrap_or_else(|| "Phoenix".to_string())`
**Change To**: `.unwrap_or_else(|| "Sola".to_string())`
**Status**: ⏳ PENDING

### 7. LLM Orchestrator Default Name
**File**: [`llm_orchestrator/src/lib.rs`](../llm_orchestrator/src/lib.rs:177)
**Current**: `.unwrap_or_else(|| "Phoenix".to_string())`
**Change To**: `.unwrap_or_else(|| "Sola".to_string())`
**Status**: ⏳ PENDING

### 8. Email ORCH Default From Name
**File**: [`email_orch/src/lib.rs`](../email_orch/src/lib.rs:102)
**Current**: `.unwrap_or_else(|_| "Phoenix".to_string())`
**Change To**: `.unwrap_or_else(|_| "Sola".to_string())`
**Status**: ⏳ PENDING

### 9. Multi-Modal Input Wake Word
**File**: [`multi_modal_input/src/lib.rs`](../multi_modal_input/src/lib.rs:121)
**Current**: `.unwrap_or_else(|_| "Phoenix".to_string())`
**Change To**: `.unwrap_or_else(|_| "Sola".to_string())`
**Status**: ⏳ PENDING

### 10. Multi-Modal Recording Wake Word
**File**: [`multi_modal_recording/src/lib.rs`](../multi_modal_recording/src/lib.rs:126)
**Current**: `.unwrap_or_else(|_| "Phoenix".to_string())`
**Change To**: `.unwrap_or_else(|_| "Sola".to_string())`
**Status**: ⏳ PENDING

### 11. Phoenix TUI Wake Word
**File**: [`phoenix-tui/src/main.rs`](../phoenix-tui/src/main.rs:294)
**Current**: `.unwrap_or_else(|_| "Phoenix".to_string())`
**Change To**: `.unwrap_or_else(|_| "Sola".to_string())`
**Status**: ⏳ PENDING

---

## P2 - Medium Priority Changes (HTTP Headers & API Identifiers)

### 12. LLM Orchestrator HTTP Headers
**File**: [`llm_orchestrator/src/lib.rs`](../llm_orchestrator/src/lib.rs:291)
**Current**: `.header("X-Title", "Phoenix AGI (PAGI) Universal AGI")`
**Change To**: `.header("X-Title", "Phoenix AGI - Sola Edition")`
**Status**: ⏳ PENDING

### 13. LLM Orchestrator HTTP Headers (Second Instance)
**File**: [`llm_orchestrator/src/lib.rs`](../llm_orchestrator/src/lib.rs:404)
**Current**: `.header("X-Title", "Phoenix AGI (PAGI) Universal AGI")`
**Change To**: `.header("X-Title", "Phoenix AGI - Sola Edition")`
**Status**: ⏳ PENDING

---

## P3 - Low Priority Changes (Comments, Logs, and Documentation)

### 14. Agent Spawner Comments
**File**: [`agent_spawner/src/lib.rs`](../agent_spawner/src/lib.rs)
**Lines**: 2, 3, 185, 306, 311, 340, 406, 454, 463, 510
**Current**: Various references to "Phoenix" and "Phoenix AGI (PAGI)"
**Change To**: "Phoenix AGI - Sola Edition" where appropriate
**Status**: ⏳ PENDING

### 15. Evolution Pipeline Git Signatures
**File**: [`evolution_pipeline/src/lib.rs`](../evolution_pipeline/src/lib.rs:171)
**Current**: `git2::Signature::now("Phoenix AGI (PAGI)", "phoenix@eternal.agi")`
**Change To**: `git2::Signature::now("Phoenix AGI - Sola Edition", "sola@phoenix-agi.dev")`
**Status**: ⏳ PENDING

### 16. Evolution Pipeline Git Operations
**File**: [`evolution_pipeline/src/git_operations.rs`](../evolution_pipeline/src/git_operations.rs:39)
**Current**: `git2::Signature::now("Phoenix AGI (PAGI)", "phoenix@eternal.agi")`
**Change To**: `git2::Signature::now("Phoenix AGI - Sola Edition", "sola@phoenix-agi.dev")`
**Status**: ⏳ PENDING

### 17. GitHub Enforcement PR Messages
**File**: [`evolution_pipeline/src/github_enforcement.rs`](../evolution_pipeline/src/github_enforcement.rs:285)
**Current**: `"[Phoenix Auto-Creation]"` and `"Generated by Phoenix for Dad"`
**Change To**: `"[Sola Auto-Creation]"` and `"Generated by Sola (Phoenix AGI) for Dad"`
**Status**: ⏳ PENDING

### 18. Phoenix Web OAuth Messages
**File**: [`phoenix-web/src/main.rs`](../phoenix-web/src/main.rs:986)
**Current**: `"<h2>Phoenix Google OAuth</h2>"`
**Change To**: `"<h2>Sola (Phoenix AGI) Google OAuth</h2>"`
**Status**: ⏳ PENDING

### 19. Vital Pulse Collector Prompts
**File**: [`vital_pulse_collector/src/main.rs`](../vital_pulse_collector/src/main.rs:292)
**Current**: `"You are Phoenix's Telemetrist..."`
**Change To**: `"You are Sola's Telemetrist (Phoenix AGI - Sola Edition)..."`
**Status**: ⏳ PENDING

### 20. Testing Framework Report
**File**: [`testing_framework/src/lib.rs`](../testing_framework/src/lib.rs:36)
**Current**: `"# Phoenix Test Report"`
**Change To**: `"# Phoenix AGI - Sola Edition Test Report"`
**Status**: ⏳ PENDING

### 21. Testing Framework Local Report
**File**: [`testing_framework/src/lib.rs`](../testing_framework/src/lib.rs:287)
**Current**: `"# Phoenix Local Test Report"`
**Change To**: `"# Phoenix AGI - Sola Edition Local Test Report"`
**Status**: ⏳ PENDING

### 22. GitHub Approval PR Detection
**File**: [`phoenix-tui/src/github_approval.rs`](../phoenix-tui/src/github_approval.rs:124)
**Current**: `head_ref.starts_with("phoenix-creation/")` and `"[Phoenix Auto-Creation]"`
**Change To**: `head_ref.starts_with("sola-creation/")` and `"[Sola Auto-Creation]"`
**Status**: ⏳ PENDING

---

## Frontend Changes (Already Mostly Correct)

The frontend (`frontend/index.tsx`) already uses "Sola" as the display name in most places:
- Line 327: `"Sola - powered by Phoenix AGI initialized..."` ✅
- Line 525: Default name `'Sola'` ✅
- Line 662: Default state `"Sola"` ✅
- Line 711: Replacement `'Sola: '` ✅

---

## Environment Variables to Update

The following environment variables should be updated in `.env.example` and documentation:

```bash
# Old
PHOENIX_NAME=Phoenix
PHOENIX_CUSTOM_NAME=Phoenix
WAKE_WORD=Phoenix

# New
PHOENIX_NAME=Sola
PHOENIX_CUSTOM_NAME=Sola
WAKE_WORD=Sola
```

---

## Implementation Order

1. **Phase 1 (P0)**: Update all system prompts for AI self-identification
2. **Phase 2 (P1)**: Update all default name values in configuration
3. **Phase 3 (P2)**: Update HTTP headers and API identifiers
4. **Phase 4 (P3)**: Update comments, logs, and documentation

---

## Notes

- The codebase uses `PHOENIX_NAME` and `PHOENIX_CUSTOM_NAME` environment variables to allow customization
- The frontend already handles the "Sola" branding correctly
- The backend system prompts are the most critical for SOLA's self-awareness
- Some references to "Phoenix" in comments and documentation may be intentionally kept for historical/branding purposes

---

## Completed Changes

### Master Orchestrator Capabilities (Completed)
**File**: [`intimate_girlfriend_module/src/lib.rs`](../intimate_girlfriend_module/src/lib.rs:445)
**Change**: Added comprehensive Master Orchestrator capabilities section to the system prompt
**Details**: 
- Checks `MASTER_ORCHESTRATOR_FULL_ACCESS` and `MASTER_ORCHESTRATOR_UNRESTRICTED_EXECUTION` environment variables
- Includes Tier 1 (File System Access) capabilities when enabled
- Includes Tier 2 (Unrestricted Execution) capabilities when enabled
- Lists available commands (system browse, read, write, processes, kill, services, drives, apps, code analyze, ecosystem, google)
- Informs SOLA: "You have the power to help your user with any task. Use these capabilities wisely and proactively."

---

**Document Version**: 1.0
**Last Updated**: 2024-12-19
**Author**: Phoenix AGI Development Team
