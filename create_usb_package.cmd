@echo off
echo ===== Phoenix AGI: Sola Edition - USB Portable Package Creator =====
echo.

REM Set paths
set SCRIPT_DIR=%~dp0
set USB_DIR=%SCRIPT_DIR%USB_Package
set RELEASE_DIR=%SCRIPT_DIR%target\release
set FRONTEND_DIST=%SCRIPT_DIR%frontend\dist

REM Check if release EXE exists
if not exist "%RELEASE_DIR%\pagi-sola-web.exe" (
    echo ERROR: pagi-sola-web.exe not found in target\release
    echo Please run: cargo build --release --bin pagi-sola-web
    pause
    exit /b 1
)

REM Check if frontend dist exists
if not exist "%FRONTEND_DIST%\index.html" (
    echo ERROR: Frontend dist not found. Please build frontend first.
    echo Run: cd frontend ^&^& npm install ^&^& npm run build
    pause
    exit /b 1
)

REM Clean USB directory if it exists
if exist "%USB_DIR%" (
    echo Cleaning existing USB_Package directory...
    rd /s /q "%USB_DIR%"
)

REM Create USB package directory structure
echo Creating USB package directory structure...
mkdir "%USB_DIR%"
mkdir "%USB_DIR%\data"
mkdir "%USB_DIR%\frontend"
mkdir "%USB_DIR%\frontend\dist"
mkdir "%USB_DIR%\frontend\dist\assets"

REM Copy main executable
echo Copying pagi-sola-web.exe...
copy "%RELEASE_DIR%\pagi-sola-web.exe" "%USB_DIR%\"

REM Copy frontend assets
echo Copying frontend assets...
xcopy /E /I /Y "%FRONTEND_DIST%" "%USB_DIR%\frontend\dist"

REM Create portable launcher
echo Creating portable launcher...
(
echo @echo off
echo setlocal
echo.
echo REM Phoenix AGI: Sola Edition - Portable Launcher
echo REM This launcher runs Sola from USB without installation
echo.
echo set "SCRIPT_DIR=%%~dp0"
echo cd /d "%%SCRIPT_DIR%%"
echo.
echo REM Check if .env exists, if not create from template
echo if not exist ".env" ^(
echo     echo Creating default .env configuration...
echo     copy ".env.template" ".env" ^>nul 2^>^&1
echo     if errorlevel 1 ^(
echo         echo WARNING: Could not create .env file. Using defaults.
echo     ^)
echo ^)
echo.
echo echo ========================================
echo echo   Phoenix AGI: Sola Edition
echo echo   Portable USB Version
echo echo ========================================
echo echo.
echo echo Starting Sola server...
echo echo.
echo.
echo REM Start the server
echo start "" "%%SCRIPT_DIR%%pagi-sola-web.exe"
echo.
echo REM Wait for server to start
echo echo Waiting for server to initialize...
echo timeout /t 3 /nobreak ^> nul
echo.
echo REM Open browser
echo echo Opening browser...
echo start "" "http://127.0.0.1:8888"
echo.
echo echo.
echo echo Sola is now running!
echo echo.
echo echo To stop Sola, close this window or press Ctrl+C
echo echo Browser: http://127.0.0.1:8888
echo echo.
echo pause
) > "%USB_DIR%\Start_Sola.cmd"

REM Create stop script
echo Creating stop script...
(
echo @echo off
echo echo Stopping Sola...
echo taskkill /F /IM pagi-sola-web.exe 2^>nul
echo if %%errorlevel%% equ 0 ^(
echo     echo Sola has been stopped.
echo ^) else ^(
echo     echo Sola was not running.
echo ^)
echo pause
) > "%USB_DIR%\Stop_Sola.cmd"

REM Create .env template
echo Creating .env template...
(
echo # ================================================
echo # Phoenix AGI: Sola Edition Configuration
echo # ================================================
echo.
echo # REQUIRED: Set your OpenRouter API Key
echo OPENROUTER_API_KEY=
echo.
echo # Your name ^(how Sola addresses you^)
echo USER_NAME=User
echo USER_PREFERRED_ALIAS=User
echo.
echo # Core settings ^(defaults work for most users^)
echo PHOENIX_WEB_BIND=127.0.0.1:8888
echo DEFAULT_LLM_MODEL=openai/gpt-4o-mini
echo TEMPERATURE=0.8
echo MAX_TOKENS=4096
echo.
echo # Girlfriend mode ^(optional^)
echo GIRLFRIEND_MODE_ENABLED=true
echo GIRLFRIEND_AFFECTION_LEVEL=0.85
echo.
echo # Vector KB ^(local semantic memory^)
echo VECTOR_KB_ENABLED=true
echo VECTOR_DB_PATH=./data/vector_db
echo.
echo # Storage paths ^(relative to exe location^)
echo HYPERSPACE_CACHE_PATH=./data/hyperspace_cache.db
echo RECORDING_STORAGE_PATH=./data/recordings
) > "%USB_DIR%\.env.template"

REM Copy .env.template as .env for first run
copy "%USB_DIR%\.env.template" "%USB_DIR%\.env"

REM Create README
echo Creating README...
(
echo # Phoenix AGI: Sola Edition - Portable USB Version
echo.
echo ## Quick Start
echo.
echo 1. **Configure API Key**: Edit `.env` file and add your OpenRouter API key:
echo    ```
echo    OPENROUTER_API_KEY=your_key_here
echo    ```
echo.
echo 2. **Start Sola**: Double-click `Start_Sola.cmd`
echo.
echo 3. **Access UI**: Browser will open automatically to http://127.0.0.1:8888
echo.
echo 4. **Stop Sola**: Double-click `Stop_Sola.cmd` or close the command window
echo.
echo ## Files
echo.
echo - `Start_Sola.cmd` - Launches Sola and opens browser
echo - `Stop_Sola.cmd` - Stops the Sola server
echo - `pagi-sola-web.exe` - Main application
echo - `.env` - Configuration file ^(edit this^)
echo - `.env.template` - Default configuration template
echo - `frontend/` - Web UI assets
echo - `data/` - Application data ^(created on first run^)
echo.
echo ## Requirements
echo.
echo - Windows 10 or 11
echo - Internet connection ^(for LLM API calls^)
echo - OpenRouter API key ^(get one at https://openrouter.ai^)
echo.
echo ## Troubleshooting
echo.
echo - **Port in use**: If port 8888 is busy, edit `.env` and change `PHOENIX_WEB_BIND`
echo - **API errors**: Verify your OpenRouter API key is correct
echo - **Won't start**: Make sure no other instance is running ^(use Stop_Sola.cmd^)
echo.
echo ## Support
echo.
echo For issues, check the main repository documentation.
) > "%USB_DIR%\README.md"

echo.
echo ===== USB Package Created Successfully! =====
echo.
echo Location: %USB_DIR%
echo.
echo Contents:
dir /b "%USB_DIR%"
echo.
echo To deploy:
echo 1. Copy the entire USB_Package folder to your USB drive
echo 2. On the target machine, edit .env to add your API key
echo 3. Run Start_Sola.cmd
echo.
pause
