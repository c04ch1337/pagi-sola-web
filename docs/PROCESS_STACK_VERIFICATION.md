# Stack Verification Process

## Overview

This document outlines the mandatory verification process to ensure frontend and backend are properly configured and connected before declaring services as "ready."

## Problem Statement

Previously, backend restarts were verified in isolation, leading to configuration mismatches that weren't caught until user testing. This process ensures all components are verified together.

## Mandatory Verification Steps

### Before Starting Services

1. **Run Configuration Validator**
   ```powershell
   .\scripts\validate-config.ps1
   ```
   This checks that all port configurations (README.md, vite.config.ts, .env) are consistent.

2. **Fix Any Configuration Mismatches**
   - If validator reports errors, fix them before proceeding
   - Ensure single source of truth for port assignments

### Starting Backend

**Always use the safe startup script:**
```powershell
.\scripts\start-backend-safe.ps1
```

This script:
- Validates configuration first
- Checks for existing processes
- Verifies port availability
- Starts backend with correct configuration

**Never start backend manually without verification.**

### After Starting Services

1. **Run Full Stack Verification**
   ```powershell
   .\scripts\verify-stack.ps1
   ```
   This verifies:
   - Configuration consistency
   - Services are running on expected ports
   - Backend health endpoint is accessible
   - Frontend proxy is working (if frontend is running)
   - End-to-end connectivity

2. **Verify from User Perspective**
   - Open frontend in browser (if running)
   - Check browser console for errors
   - Test sending a message through the UI
   - Verify API calls are working

## Configuration Sources

The following files must be consistent:

1. **`frontend/README.md`** - Official documentation (source of truth)
   - Documents expected backend port: `http://127.0.0.1:8888`
   - Documents expected frontend port: `http://localhost:3000`

2. **`frontend/vite.config.ts`** - Frontend configuration
   - `apiBase` must match README backend port
   - `server.port` must match README frontend port

3. **`.env`** - Environment variables
   - `PHOENIX_WEB_BIND` should match README backend port (default: `127.0.0.1:8888`)

4. **`common_types/src/ports.rs`** - Default port definitions
   - `PhoenixWebPort::DEFAULT_BIND` should match README

## Verification Checklist

Before declaring services ready, verify:

- [ ] Configuration validator passes (`validate-config.ps1`)
- [ ] Backend is running on expected port (check with `Get-NetTCPConnection`)
- [ ] Backend health endpoint responds (`http://127.0.0.1:8888/health`)
- [ ] Frontend dev server is running (if applicable)
- [ ] Frontend proxy works (test `/api/health` through frontend)
- [ ] Full stack verification passes (`verify-stack.ps1`)
- [ ] Browser console shows no connection errors
- [ ] Can send message through UI and receive response

## Common Issues and Fixes

### Issue: Configuration Mismatch

**Symptoms:**
- Validator reports port mismatches
- Backend on different port than frontend expects

**Fix:**
1. Check `frontend/README.md` for expected ports (source of truth)
2. Update `frontend/vite.config.ts` to match README
3. Update `.env` if needed
4. Re-run validator

### Issue: Backend Not Responding

**Symptoms:**
- Health endpoint returns error
- Frontend can't connect

**Fix:**
1. Check if backend process is running: `Get-Process | Where-Object {$_.ProcessName -like "*pagi*"}`
2. Check what port it's on: `Get-NetTCPConnection -State Listen`
3. Verify `.env` has correct `PHOENIX_WEB_BIND`
4. Restart backend using safe startup script

### Issue: Frontend Proxy Not Working

**Symptoms:**
- Frontend running but API calls fail
- Browser console shows connection errors

**Fix:**
1. Verify backend is running and accessible
2. Check `vite.config.ts` proxy target matches backend port
3. Verify frontend is using correct port
4. Test proxy directly: `Invoke-WebRequest -Uri http://localhost:8888/api/health`

## Automation

### Pre-Startup Verification

The `start-backend-safe.ps1` script automatically:
- Validates configuration
- Checks for existing processes
- Verifies port availability
- Starts backend with correct settings

### Post-Startup Verification

The `verify-stack.ps1` script automatically:
- Checks configuration consistency
- Verifies services are running
- Tests connectivity
- Reports any issues

## Best Practices

1. **Always read documentation first** - `frontend/README.md` is the source of truth
2. **Use verification scripts** - Don't skip automated checks
3. **Test end-to-end** - Verify from user perspective, not just backend
4. **Fix mismatches immediately** - Don't proceed with inconsistent configuration
5. **Document changes** - If you change ports, update all relevant files

## Integration with Development Workflow

### When Restarting Backend

```powershell
# 1. Validate configuration
.\scripts\validate-config.ps1

# 2. Start backend safely
.\scripts\start-backend-safe.ps1

# 3. Verify stack
.\scripts\verify-stack.ps1
```

### When Changing Ports

1. Update `frontend/README.md` (source of truth)
2. Update `frontend/vite.config.ts`
3. Update `.env` if needed
4. Run `validate-config.ps1` to verify
5. Restart services

### Before Committing Changes

1. Run `validate-config.ps1` to ensure consistency
2. Run `verify-stack.ps1` to ensure everything works
3. Document any port changes in commit message

## Emergency Procedures

If services are misconfigured and you need to fix quickly:

1. **Stop all services**
   ```powershell
   Get-Process | Where-Object {$_.ProcessName -like "*pagi*" -or $_.ProcessName -like "*node*"} | Stop-Process -Force
   ```

2. **Check configuration**
   ```powershell
   .\scripts\validate-config.ps1
   ```

3. **Fix mismatches** - Update files to match README.md

4. **Restart safely**
   ```powershell
   .\scripts\start-backend-safe.ps1
   ```

5. **Verify**
   ```powershell
   .\scripts\verify-stack.ps1
   ```

## Summary

**Never skip verification steps. Always:**
1. Validate configuration before starting
2. Use safe startup scripts
3. Verify stack after starting
4. Test from user perspective
5. Fix mismatches immediately

This process prevents configuration mismatches and ensures services are properly connected before declaring them ready.

