@echo off
setlocal

REM Phoenix AGI: Sola Edition - Portable Launcher
REM This launcher runs Sola from USB without installation

set "SCRIPT_DIR=%~dp0"
cd /d "%SCRIPT_DIR%"

REM Check if .env exists, if not create from template
if not exist ".env" (
    echo Creating default .env configuration...
    copy ".env.template" ".env" >nul 2>&1
    if errorlevel 1 (
        echo WARNING: Could not create .env file. Using defaults.
    )
)

echo ========================================
echo   Phoenix AGI: Sola Edition
echo   Portable USB Version
echo ========================================
echo.
echo Starting Sola server...
echo.

REM Start the server
start "" "%SCRIPT_DIR%pagi-sola-web.exe"

REM Wait for server to start
echo Waiting for server to initialize...
timeout /t 3 /nobreak > nul

REM Open browser
echo Opening browser...
start "" "http://127.0.0.1:8888"

echo.
echo Sola is now running!
echo.
echo To stop Sola, close this window or press Ctrl+C
echo Browser: http://127.0.0.1:8888
echo.
pause
