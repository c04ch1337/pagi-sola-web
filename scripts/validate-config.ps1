# Configuration Validator
# Validates that all port configurations are consistent
# Usage: .\scripts\validate-config.ps1

$ErrorActionPreference = "Stop"
$script:Issues = @()

function Add-Issue {
    param($severity, $message)
    $script:Issues += @{
        Severity = $severity
        Message = $message
    }
}

Write-Host ""
Write-Host "=== Configuration Validator ===" -ForegroundColor Magenta
Write-Host ""

$repoRoot = Split-Path -Parent $PSScriptRoot

# Read all configuration sources
$configs = @{}

# 1. Frontend README
$readmePath = Join-Path $repoRoot "frontend\README.md"
if (Test-Path $readmePath) {
    $readmeContent = Get-Content $readmePath -Raw
    if ($readmeContent -match "Backend API.*?`(http://[^`)]+:(\d+))") {
        $configs["README_Backend"] = $matches[2]
    }
    if ($readmeContent -match "Frontend dev server.*?`(http://[^`)]+:(\d+))") {
        $configs["README_Frontend"] = $matches[2]
    }
}

# 2. Vite config
$vitePath = Join-Path $repoRoot "frontend\vite.config.ts"
if (Test-Path $vitePath) {
    $viteContent = Get-Content $vitePath -Raw
    if ($viteContent -match "apiBase\s*=\s*['`"]http://[^:]+:(\d+)") {
        $configs["Vite_Backend"] = $matches[1]
    }
    if ($viteContent -match "port:\s*(\d+)") {
        $configs["Vite_Frontend"] = $matches[1]
    }
}

# 3. .env file
$envPath = Join-Path $repoRoot ".env"
if (Test-Path $envPath) {
    $envContent = Get-Content $envPath -Raw
    if ($envContent -match "PHOENIX_WEB_BIND\s*=\s*[^:]+:(\d+)") {
        $configs["Env_Backend"] = $matches[1]
    }
}

# 4. Default from common_types (if we can read it)
$portsPath = Join-Path $repoRoot "common_types\src\ports.rs"
if (Test-Path $portsPath) {
    $portsContent = Get-Content $portsPath -Raw
    if ($portsContent -match "DEFAULT_BIND.*?['`"](\d+)['`"]") {
        $configs["Default_Backend"] = $matches[1]
    }
}

# Validate consistency
Write-Host "Found configurations:" -ForegroundColor Cyan
foreach ($key in $configs.Keys | Sort-Object) {
    Write-Host "  $key = $($configs[$key])" -ForegroundColor Gray
}
Write-Host ""

# Check backend port consistency
$backendPorts = @()
if ($configs["README_Backend"]) { $backendPorts += @{Source="README.md"; Port=$configs["README_Backend"]} }
if ($configs["Vite_Backend"]) { $backendPorts += @{Source="vite.config.ts"; Port=$configs["Vite_Backend"]} }
if ($configs["Env_Backend"]) { $backendPorts += @{Source=".env"; Port=$configs["Env_Backend"]} }

if ($backendPorts.Count -gt 1) {
    $uniquePorts = $backendPorts | Select-Object -Unique -Property Port
    if ($uniquePorts.Count -gt 1) {
        $ports = $backendPorts | ForEach-Object { "$($_.Source):$($_.Port)" }
        Add-Issue "ERROR" "Backend port mismatch: $($ports -join ', ')"
    } else {
        Write-Host "Backend ports are consistent: $($uniquePorts[0].Port)" -ForegroundColor Green
    }
} else {
    Add-Issue "WARNING" "Only found backend port in one source - cannot verify consistency"
}

# Check frontend port consistency
$frontendPorts = @()
if ($configs["README_Frontend"]) { $frontendPorts += @{Source="README.md"; Port=$configs["README_Frontend"]} }
if ($configs["Vite_Frontend"]) { $frontendPorts += @{Source="vite.config.ts"; Port=$configs["Vite_Frontend"]} }

if ($frontendPorts.Count -gt 1) {
    $uniquePorts = $frontendPorts | Select-Object -Unique -Property Port
    if ($uniquePorts.Count -gt 1) {
        $ports = $frontendPorts | ForEach-Object { "$($_.Source):$($_.Port)" }
        Add-Issue "ERROR" "Frontend port mismatch: $($ports -join ', ')"
    } else {
        Write-Host "Frontend ports are consistent: $($uniquePorts[0].Port)" -ForegroundColor Green
    }
}

Write-Host ""

# Report issues
if ($script:Issues.Count -eq 0) {
    Write-Host "All configurations are consistent!" -ForegroundColor Green
    exit 0
} else {
    Write-Host "Configuration issues found:" -ForegroundColor Red
    Write-Host ""
    foreach ($issue in $script:Issues) {
        if ($issue.Severity -eq "ERROR") {
            Write-Host "  [ERROR] $($issue.Message)" -ForegroundColor Red
        } else {
            Write-Host "  [WARNING] $($issue.Message)" -ForegroundColor Yellow
        }
    }
    Write-Host ""
    Write-Host "Recommendation: Fix configuration mismatches before proceeding." -ForegroundColor Cyan
    exit 1
}

