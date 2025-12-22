# Safe Backend Startup Script
# Validates configuration before starting backend
# Usage: .\scripts\start-backend-safe.ps1

$ErrorActionPreference = "Stop"

Write-Host "`n=== Safe Backend Startup ===" -ForegroundColor Magenta
Write-Host ""

# Step 1: Validate configuration
Write-Host "Step 1: Validating configuration..." -ForegroundColor Cyan
$configScript = Join-Path $PSScriptRoot "validate-config.ps1"
& $configScript
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "✗ Configuration validation failed. Please fix issues before starting backend." -ForegroundColor Red
    Write-Host "Run: .\scripts\validate-config.ps1" -ForegroundColor Yellow
    exit 1
}

Write-Host ""

# Step 2: Check for existing backend process
Write-Host "Step 2: Checking for existing backend processes..." -ForegroundColor Cyan
$existingBackend = Get-Process | Where-Object { $_.ProcessName -like "*pagi*" -or $_.ProcessName -like "*phoenix-web*" }
if ($existingBackend) {
    Write-Host "⚠ Found existing backend process(es):" -ForegroundColor Yellow
    $existingBackend | Format-Table ProcessName, Id, StartTime -AutoSize
    $response = Read-Host "Stop existing processes and continue? (y/N)"
    if ($response -eq "y" -or $response -eq "Y") {
        $existingBackend | Stop-Process -Force
        Start-Sleep -Seconds 2
        Write-Host "✓ Stopped existing processes" -ForegroundColor Green
    } else {
        Write-Host "Aborted." -ForegroundColor Yellow
        exit 0
    }
} else {
    Write-Host "✓ No existing backend processes found" -ForegroundColor Green
}

Write-Host ""

# Step 3: Read expected port from .env or default
Write-Host "Step 3: Determining backend port..." -ForegroundColor Cyan
$repoRoot = Split-Path -Parent $PSScriptRoot
$envFile = Join-Path $repoRoot ".env"

$backendPort = "8888" # Default
if (Test-Path $envFile) {
    $envContent = Get-Content $envFile -Raw
    if ($envContent -match "PHOENIX_WEB_BIND\s*=\s*([^:]+):(\d+)") {
        $backendHost = $matches[1]
        $backendPort = $matches[2]
        Write-Host "✓ Found PHOENIX_WEB_BIND in .env: $backendHost`:$backendPort" -ForegroundColor Green
    } else {
        Write-Host "⚠ No PHOENIX_WEB_BIND in .env, using default: 127.0.0.1:8888" -ForegroundColor Yellow
    }
} else {
    Write-Host "⚠ No .env file found, using default: 127.0.0.1:8888" -ForegroundColor Yellow
}

# Check if port is in use
$portInUse = Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue | 
    Where-Object { $_.LocalPort -eq [int]$backendPort }
if ($portInUse) {
    $process = Get-Process -Id $portInUse.OwningProcess -ErrorAction SilentlyContinue
    Write-Host "⚠ Port $backendPort is already in use by: $($process.ProcessName) (PID: $($portInUse.OwningProcess))" -ForegroundColor Yellow
    $response = Read-Host "Continue anyway? (y/N)"
    if ($response -ne "y" -and $response -ne "Y") {
        Write-Host "Aborted." -ForegroundColor Yellow
        exit 0
    }
}

Write-Host ""

# Step 4: Start backend
Write-Host "Step 4: Starting backend..." -ForegroundColor Cyan
Write-Host "Backend will start on port $backendPort" -ForegroundColor Gray
Write-Host ""

Set-Location $repoRoot
$env:PHOENIX_WEB_BIND = "127.0.0.1:$backendPort"

Write-Host "Running: cargo run --bin pagi-sola-web" -ForegroundColor Gray
Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow
Write-Host ""

cargo run --bin pagi-sola-web

