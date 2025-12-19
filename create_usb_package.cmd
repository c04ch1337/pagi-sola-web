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

REM Copy full git repository for auto-updates
echo Copying git repository for auto-updates...
if exist "%SCRIPT_DIR%.git" (
    echo Copying .git directory...
    xcopy /E /I /Y /H "%SCRIPT_DIR%.git" "%USB_DIR%\.git"
    
    REM Copy essential source files for rebuilding
    echo Copying source files...
    xcopy /E /I /Y "%SCRIPT_DIR%phoenix-web" "%USB_DIR%\phoenix-web"
    
    REM Create temporary exclusion file for node_modules and other build artifacts
    set "EXCLUDE_FILE=%TEMP%\usb_package_exclude.txt"
    (
        echo node_modules
        echo \node_modules\
        echo node_modules\*
        echo dist\
        echo \dist\
        echo .git\
    ) > "%EXCLUDE_FILE%"
    
    REM Copy frontend source (excluding node_modules, dist, and .git)
    echo Copying frontend source files ^(excluding node_modules, dist, .git^)...
    xcopy /E /I /Y "%SCRIPT_DIR%frontend" "%USB_DIR%\frontend" /EXCLUDE:"%EXCLUDE_FILE%"
    
    REM Clean up temporary exclusion file
    del "%EXCLUDE_FILE%" >nul 2>&1
    
    if exist "%SCRIPT_DIR%frontend\node_modules" (
        echo node_modules excluded to save space. Run 'npm install' in frontend if rebuilding.
    )
    
    REM Copy Cargo files and workspace structure
    echo Copying Rust workspace files...
    copy "%SCRIPT_DIR%Cargo.toml" "%USB_DIR%\" >nul 2>&1
    copy "%SCRIPT_DIR%Cargo.lock" "%USB_DIR%\" >nul 2>&1
    
    REM Copy all crate directories (but exclude target and node_modules)
    setlocal enabledelayedexpansion
    for /d %%d in ("%SCRIPT_DIR%*") do (
        set "dir_name=%%~nxd"
        if /i not "!dir_name!"=="target" if /i not "!dir_name!"=="node_modules" if /i not "!dir_name!"=="USB_Package" if /i not "!dir_name!"==".git" (
            if exist "%%d\Cargo.toml" (
                echo Copying crate: !dir_name!
                xcopy /E /I /Y "%%d" "%USB_DIR%\!dir_name!" >nul 2>&1
            )
        )
    )
    endlocal
    
    REM Create .gitignore for USB package (exclude data and compiled files)
    (
    echo # USB Package specific ignores
    echo data/
    echo target/
    echo *.exe
    echo frontend/dist/
    echo frontend/node_modules/
    echo .env
    ) > "%USB_DIR%\.gitignore.usb"
    
    echo Git repository copied successfully!
) else (
    echo WARNING: .git directory not found. Auto-updates will not work.
    echo To enable auto-updates, ensure you're in a git repository.
)

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
echo REM Change to script directory (important for git and relative paths)
echo cd /d "%%SCRIPT_DIR%%"
echo.
echo REM Start the server (from current directory so git commands work)
echo start "" /D "%%SCRIPT_DIR%%" "%%SCRIPT_DIR%%pagi-sola-web.exe"
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

REM Create update script
echo Creating update script...
(
echo @echo off
echo setlocal enabledelayedexpansion
echo.
echo REM Phoenix AGI: Sola Edition - Auto-Update Script
echo REM This script updates Sola from GitHub
echo.
echo set "SCRIPT_DIR=%%~dp0"
echo cd /d "%%SCRIPT_DIR%%"
echo.
echo echo ========================================
echo echo   Sola Auto-Update
echo echo ========================================
echo echo.
echo.
echo REM Check if git is available
echo where git ^>nul 2^>^&1
echo if errorlevel 1 ^(
echo     echo ERROR: Git is not installed or not in PATH.
echo     echo.
echo     echo Please install Git from: https://git-scm.com/download/win
echo     echo Or use the Self-Modification Console in Sola's UI to update.
echo     echo.
echo     pause
echo     exit /b 1
echo ^)
echo.
echo REM Check if .git exists
echo if not exist ".git" ^(
echo     echo ERROR: Git repository not found in USB package.
echo     echo.
echo     echo This USB package was created without the git repository.
echo     echo Please use a USB package that includes the full repository for auto-updates.
echo     echo.
echo     pause
echo     exit /b 1
echo ^)
echo.
echo REM Stop Sola if running
echo echo Checking if Sola is running...
echo tasklist /FI "IMAGENAME eq pagi-sola-web.exe" 2^>NUL ^| find /I /N "pagi-sola-web.exe"^>NUL
echo if "%%errorlevel%%"=="0" ^(
echo     echo Sola is running. Stopping it first...
echo     taskkill /F /IM pagi-sola-web.exe 2^>nul
echo     timeout /t 2 /nobreak ^> nul
echo ^)
echo.
echo REM Fetch latest changes
echo echo Fetching latest changes from GitHub...
echo git fetch origin main
echo if errorlevel 1 ^(
echo     echo WARNING: Failed to fetch from GitHub. Check your internet connection.
echo     echo.
echo     pause
echo     exit /b 1
echo ^)
echo.
echo REM Check for updates
echo echo Checking for updates...
echo git rev-parse HEAD ^> temp_current.txt
echo git rev-parse origin/main ^> temp_latest.txt
echo set /p CURRENT_COMMIT=^<temp_current.txt
echo set /p LATEST_COMMIT=^<temp_latest.txt
echo del temp_current.txt temp_latest.txt
echo.
echo if "!CURRENT_COMMIT!"=="!LATEST_COMMIT!" ^(
echo     echo.
echo     echo You are already on the latest version!
echo     echo Current commit: !CURRENT_COMMIT:~0,8!
echo     echo.
echo     pause
echo     exit /b 0
echo ^)
echo.
echo echo Updates available!
echo echo Current: !CURRENT_COMMIT:~0,8!
echo echo Latest:  !LATEST_COMMIT:~0,8!
echo echo.
echo set /p CONFIRM="Do you want to update? (Y/N): "
echo if /i not "!CONFIRM!"=="Y" ^(
echo     echo Update cancelled.
echo     pause
echo     exit /b 0
echo ^)
echo.
echo REM Pull latest changes
echo echo Pulling latest changes...
echo git pull origin main
echo if errorlevel 1 ^(
echo     echo ERROR: Failed to pull changes. You may have local modifications.
echo     echo.
echo     echo Try: git stash
echo     echo Then run this script again.
echo     echo.
echo     pause
echo     exit /b 1
echo ^)
echo.
echo REM Rebuild if Cargo.toml exists
echo if exist "Cargo.toml" ^(
echo     echo.
echo     echo Checking if Rust/Cargo is available...
echo     where cargo ^>nul 2^>^&1
echo     if not errorlevel 1 ^(
echo         echo Rebuilding Sola with latest changes...
echo         echo This may take several minutes...
echo         echo.
echo         cargo build --release --bin pagi-sola-web
echo         if errorlevel 1 ^(
echo             echo WARNING: Build failed. The old executable will still work.
echo             echo You may need to rebuild manually or check for errors.
echo         ^) else ^(
echo             echo Build successful! Copying new executable...
echo             if exist "target\release\pagi-sola-web.exe" ^(
echo                 copy /Y "target\release\pagi-sola-web.exe" "pagi-sola-web.exe"
echo                 echo New executable installed!
echo             ^)
echo         ^)
echo     ^) else ^(
echo         echo WARNING: Cargo/Rust not found. Skipping rebuild.
echo         echo The executable will not be updated, but code changes are pulled.
echo         echo Install Rust from https://rustup.rs to enable automatic rebuilding.
echo     ^)
echo ^)
echo.
echo REM Rebuild frontend if needed
echo if exist "frontend\package.json" ^(
echo     echo.
echo     echo Checking if Node.js/npm is available...
echo     where npm ^>nul 2^>^&1
echo     if not errorlevel 1 ^(
echo         echo Rebuilding frontend...
echo         cd frontend
echo         call npm install
echo         call npm run build
echo         cd ..
echo         if exist "frontend\dist\index.html" ^(
echo             echo Frontend rebuilt successfully!
echo         ^)
echo     ^) else ^(
echo         echo WARNING: npm not found. Frontend not rebuilt.
echo         echo Install Node.js from https://nodejs.org to enable frontend updates.
echo     ^)
echo ^)
echo.
echo echo.
echo echo ========================================
echo echo   Update Complete!
echo echo ========================================
echo echo.
echo echo Sola has been updated to the latest version.
echo echo You can now start Sola using Start_Sola.cmd
echo echo.
echo pause
) > "%USB_DIR%\Update_Sola.cmd"

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
echo.
echo # Auto-update settings
echo SOLA_UPGRADE_REPO=https://github.com/c04ch1337/pagi-sola-web.git
) > "%USB_DIR%\.env.template"

REM Copy .env.template as .env for first run
copy "%USB_DIR%\.env.template" "%USB_DIR%\.env"

REM Create setup script for first-time git configuration
echo Creating git setup script...
(
echo @echo off
echo setlocal
echo.
echo REM Phoenix AGI: Sola Edition - Git Setup Script
echo REM Run this once to configure git remote for auto-updates
echo.
echo set "SCRIPT_DIR=%%~dp0"
echo cd /d "%%SCRIPT_DIR%%"
echo.
echo REM Check if git is available
echo where git ^>nul 2^>^&1
echo if errorlevel 1 ^(
echo     echo ERROR: Git is not installed or not in PATH.
echo     echo.
echo     echo Please install Git from: https://git-scm.com/download/win
echo     echo Then run this script again.
echo     echo.
echo     pause
echo     exit /b 1
echo ^)
echo.
echo REM Check if .git exists
echo if not exist ".git" ^(
echo     echo ERROR: Git repository not found.
echo     echo This USB package should include the .git directory.
echo     echo.
echo     pause
echo     exit /b 1
echo ^)
echo.
echo echo ========================================
echo echo   Git Repository Setup
echo echo ========================================
echo echo.
echo echo Configuring git remote for auto-updates...
echo.
echo REM Set remote URL
echo git remote set-url origin https://github.com/c04ch1337/pagi-sola-web.git
echo if errorlevel 1 ^(
echo     echo Adding remote origin...
echo     git remote add origin https://github.com/c04ch1337/pagi-sola-web.git
echo ^)
echo.
echo REM Fetch to verify connection
echo echo Testing connection to GitHub...
echo git fetch origin main
echo if errorlevel 1 ^(
echo     echo WARNING: Could not connect to GitHub.
echo     echo Check your internet connection and try again.
echo     echo.
echo     pause
echo     exit /b 1
echo ^)
echo.
echo echo.
echo echo ========================================
echo echo   Setup Complete!
echo echo ========================================
echo echo.
echo echo Git repository is now configured for auto-updates.
echo echo You can now use Update_Sola.cmd or the in-app update feature.
echo echo.
echo pause
) > "%USB_DIR%\Setup_Git.cmd"

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
echo - `Update_Sola.cmd` - Updates Sola from GitHub ^(requires Git^)
echo - `pagi-sola-web.exe` - Main application
echo - `.env` - Configuration file ^(edit this^)
echo - `.env.template` - Default configuration template
echo - `frontend/` - Web UI assets
echo - `data/` - Application data ^(created on first run^)
echo - `.git/` - Git repository for auto-updates
echo.
echo ## Requirements
echo.
echo - Windows 10 or 11
echo - Internet connection ^(for LLM API calls and updates^)
echo - OpenRouter API key ^(get one at https://openrouter.ai^)
echo - Git ^(for auto-updates - download from https://git-scm.com/download/win^)
echo - Rust/Cargo ^(optional - for rebuilding after updates^)
echo - Node.js/npm ^(optional - for frontend updates^)
echo.
echo ## Auto-Update
echo.
echo This USB package includes the full git repository for auto-updates:
echo.
echo 1. **Manual Update**: Run `Update_Sola.cmd` to check and install updates
echo 2. **In-App Update**: Use the Self-Modification Console in Sola's UI:
echo    - Go to Settings ^> Self-Mod Console
echo    - Click "Check for Updates" in the Sola Self-Improvement section
echo    - Click "Apply Upgrade ^& Rebuild" to update
echo.
echo **Requirements for Updates:**
echo - Git must be installed and in PATH
echo - Internet connection
echo - Rust/Cargo ^(optional - for automatic rebuilds^)
echo.
echo ## Troubleshooting
echo.
echo - **Port in use**: If port 8888 is busy, edit `.env` and change `PHOENIX_WEB_BIND`
echo - **API errors**: Verify your OpenRouter API key is correct
echo - **Won't start**: Make sure no other instance is running ^(use Stop_Sola.cmd^)
echo - **Update fails**: Ensure Git is installed and you have internet connection
echo - **Build fails**: Install Rust from https://rustup.rs for automatic rebuilds
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
echo 3. ^(Optional^) Run Setup_Git.cmd to configure git remote for auto-updates
echo 4. Run Start_Sola.cmd
echo.
echo For auto-updates:
echo - Install Git from https://git-scm.com/download/win
echo - Run Setup_Git.cmd once to configure the repository
echo - Use Update_Sola.cmd or the in-app update feature
echo.
pause
