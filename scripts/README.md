# Phoenix Scripts

Utility scripts for Phoenix AGI development and operations.

## Verification Scripts

### `validate-config.ps1`

Validates that all port configurations are consistent across:
- `frontend/README.md` (source of truth)
- `frontend/vite.config.ts`
- `.env` file
- Default port definitions

**Usage:**
```powershell
.\scripts\validate-config.ps1
```

**Exit Codes:**
- `0` - All configurations consistent
- `1` - Configuration mismatches found

### `verify-stack.ps1`

Comprehensive stack verification that checks:
- Configuration consistency
- Running services on expected ports
- Backend health endpoint accessibility
- Frontend proxy connectivity (if frontend running)
- End-to-end connectivity

**Usage:**
```powershell
.\scripts\verify-stack.ps1
```

**Exit Codes:**
- `0` - All checks passed
- `1` - Issues found

### `start-backend-safe.ps1`

Safe backend startup script that:
- Validates configuration before starting
- Checks for existing processes
- Verifies port availability
- Starts backend with correct configuration

**Usage:**
```powershell
.\scripts\start-backend-safe.ps1
```

**Features:**
- Automatically validates config before starting
- Prompts before stopping existing processes
- Warns if port is in use
- Sets correct environment variables

## Workflow

### Standard Development Workflow

1. **Before starting services:**
   ```powershell
   .\scripts\validate-config.ps1
   ```

2. **Start backend:**
   ```powershell
   .\scripts\start-backend-safe.ps1
   ```

3. **After services are running:**
   ```powershell
   .\scripts\verify-stack.ps1
   ```

### Quick Verification

To quickly verify everything is working:
```powershell
.\scripts\verify-stack.ps1
```

## Integration

These scripts are designed to be integrated into:
- Pre-commit hooks (validate-config.ps1)
- CI/CD pipelines (verify-stack.ps1)
- Development workflows (start-backend-safe.ps1)
- Manual verification processes

## See Also

- `docs/PROCESS_STACK_VERIFICATION.md` - Detailed verification process
- `INVESTIGATION_REPORT.md` - Why these scripts exist

