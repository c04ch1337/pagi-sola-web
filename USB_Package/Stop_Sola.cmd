@echo off
echo Stopping Sola...
taskkill /F /IM pagi-sola-web.exe 2>nul
if %errorlevel% equ 0 (
    echo Sola has been stopped.
) else (
    echo Sola was not running.
)
pause
