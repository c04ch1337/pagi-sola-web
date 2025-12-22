# Phoenix Stack Verification Script
# Verifies that frontend and backend are properly configured and connected
# Usage: .\scripts\verify-stack.ps1

$ErrorActionPreference = "Stop"
$script:Errors = @()
$script:Warnings = @()
$script:Success = @()

function Write-Success { param($msg) Write-Host "✓ $msg" -ForegroundColor Green; $script:Success += $msg }
function Write-Warning { param($msg) Write-Host "⚠ $msg" -ForegroundColor Yellow; $script:Warnings += $msg }
function Write-Error { param($msg) Write-Host "✗ $msg" -ForegroundColor Red; $script:Errors += $msg }
function Write-Info { param($msg) Write-Host "ℹ $msg" -ForegroundColor Cyan }

Write-Host "`n=== Phoenix Stack Verification ===" -ForegroundColor Magenta
Write-Host ""

# Step 1: Read configuration files
Write-Info "Step 1: Reading configuration files..."

$repoRoot = Split-Path -Parent $PSScriptRoot
$frontendReadme = Join-Path $repoRoot "frontend\README.md"
$viteConfig = Join-Path $repoRoot "frontend\vite.config.ts"
$envFile = Join-Path $repoRoot ".env"

# Read frontend README
if (Test-Path $frontendReadme) {
    $readmeContent = Get-Content $frontendReadme -Raw
    $readmeBackendPort = if ($readmeContent -match "Backend API.*?`(http://[^`)]+:(\d+))") { $matches[2] } else { $null }
    $readmeFrontendPort = if ($readmeContent -match "Frontend dev server.*?`(http://[^`)]+:(\d+))") { $matches[2] } else { $null }
    Write-Success "Found frontend/README.md"
} else {
    Write-Error "frontend/README.md not found"
    $readmeBackendPort = $null
    $readmeFrontendPort = $null
}

# Read vite.config.ts
if (Test-Path $viteConfig) {
    $viteContent = Get-Content $viteConfig -Raw
    $viteBackendPort = if ($viteContent -match "apiBase\s*=\s*['`"]http://[^:]+:(\d+)") { $matches[1] } else { $null }
    $viteFrontendPort = if ($viteContent -match "port:\s*(\d+)") { $matches[1] } else { $null }
    Write-Success "Found frontend/vite.config.ts"
} else {
    Write-Error "frontend/vite.config.ts not found"
    $viteBackendPort = $null
    $viteFrontendPort = $null
}

# Read .env file
$envBackendPort = $null
if (Test-Path $envFile) {
    $envContent = Get-Content $envFile -Raw
    if ($envContent -match "PHOENIX_WEB_BIND\s*=\s*[^:]+:(\d+)") {
        $envBackendPort = $matches[1]
    }
    Write-Success "Found .env file"
} else {
    Write-Warning ".env file not found (will use defaults)"
}

Write-Host ""

# Step 2: Check configuration consistency
Write-Info "Step 2: Checking configuration consistency..."

$configIssues = @()

# Check README vs Vite config
if ($readmeBackendPort -and $viteBackendPort) {
    if ($readmeBackendPort -ne $viteBackendPort) {
        $configIssues += "MISMATCH: README says backend on port $readmeBackendPort, but vite.config.ts targets port $viteBackendPort"
        Write-Error "Configuration mismatch: README ($readmeBackendPort) vs vite.config.ts ($viteBackendPort)"
    } else {
        Write-Success "README and vite.config.ts agree on backend port: $readmeBackendPort"
    }
}

# Check .env vs expected
if ($envBackendPort -and $readmeBackendPort) {
    if ($envBackendPort -ne $readmeBackendPort) {
        $configIssues += "MISMATCH: .env has backend on port $envBackendPort, but README expects $readmeBackendPort"
        Write-Warning ".env port ($envBackendPort) doesn't match README expectation ($readmeBackendPort)"
    } else {
        Write-Success ".env matches README expectation: port $readmeBackendPort"
    }
}

Write-Host ""

# Step 3: Check running services
Write-Info "Step 3: Checking running services..."

$listeningPorts = Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue | 
    Where-Object { $_.LocalPort -in @(5000, 8888, 3000) } |
    Select-Object LocalAddress, LocalPort, @{Name='ProcessName';Expression={(Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue).ProcessName}}

$backendPort = if ($envBackendPort) { $envBackendPort } elseif ($readmeBackendPort) { $readmeBackendPort } else { "8888" }
$frontendPort = if ($viteFrontendPort) { $viteFrontendPort } elseif ($readmeFrontendPort) { $readmeFrontendPort } else { "3000" }

# Check backend
$backendRunning = $listeningPorts | Where-Object { $_.LocalPort -eq $backendPort -and $_.ProcessName -like "*pagi*" }
if ($backendRunning) {
    Write-Success "Backend is running on port $backendPort (Process: $($backendRunning.ProcessName))"
} else {
    Write-Error "Backend is NOT running on expected port $backendPort"
}

# Check frontend
$frontendRunning = $listeningPorts | Where-Object { $_.LocalPort -eq $frontendPort -and $_.ProcessName -like "*node*" }
if ($frontendRunning) {
    Write-Success "Frontend dev server is running on port $frontendPort (Process: $($frontendRunning.ProcessName))"
} else {
    Write-Warning "Frontend dev server is NOT running on expected port $frontendPort"
}

Write-Host ""

# Step 4: Test connectivity
Write-Info "Step 4: Testing connectivity..."

# Test backend health
try {
    $backendUrl = "http://127.0.0.1:$backendPort/health"
    $response = Invoke-WebRequest -Uri $backendUrl -UseBasicParsing -TimeoutSec 2 -ErrorAction Stop
    if ($response.StatusCode -eq 200) {
        Write-Success "Backend health endpoint responding: $backendUrl"
    } else {
        Write-Error "Backend health endpoint returned status $($response.StatusCode)"
    }
} catch {
    Write-Error "Backend health endpoint not accessible: $backendUrl - $($_.Exception.Message)"
}

# Test frontend proxy (if frontend is running)
if ($frontendRunning) {
    try {
        $frontendUrl = "http://localhost:$frontendPort/health"
        $response = Invoke-WebRequest -Uri $frontendUrl -UseBasicParsing -TimeoutSec 2 -ErrorAction Stop
        if ($response.StatusCode -eq 200) {
            Write-Success "Frontend proxy to backend working: $frontendUrl"
        } else {
            Write-Warning "Frontend proxy returned status $($response.StatusCode)"
        }
    } catch {
        Write-Warning "Frontend proxy test failed: $frontendUrl - $($_.Exception.Message)"
    }
}

Write-Host ""

# Step 5: Summary
Write-Host "=== Verification Summary ===" -ForegroundColor Magenta
Write-Host ""

if ($script:Errors.Count -eq 0 -and $configIssues.Count -eq 0) {
    Write-Host "✓ All checks passed!" -ForegroundColor Green
    exit 0
} else {
    Write-Host "✗ Issues found:" -ForegroundColor Red
    Write-Host ""
    
    if ($configIssues.Count -gt 0) {
        Write-Host "Configuration Issues:" -ForegroundColor Yellow
        foreach ($issue in $configIssues) {
            Write-Host "  - $issue" -ForegroundColor Yellow
        }
        Write-Host ""
    }
    
    if ($script:Errors.Count -gt 0) {
        Write-Host "Errors:" -ForegroundColor Red
        foreach ($error in $script:Errors) {
            Write-Host "  - $error" -ForegroundColor Red
        }
        Write-Host ""
    }
    
    if ($script:Warnings.Count -gt 0) {
        Write-Host "Warnings:" -ForegroundColor Yellow
        foreach ($warning in $script:Warnings) {
            Write-Host "  - $warning" -ForegroundColor Yellow
        }
    }
    
    Write-Host ""
    Write-Host "Recommendation: Fix configuration mismatches before starting services." -ForegroundColor Cyan
    exit 1
}

