# Fix: DevTools Auto-Opening Issue

This guide helps you prevent browser DevTools from automatically opening.

## Problem

Browser DevTools (Chrome/Edge DevTools) may automatically open due to:
- Browser settings
- Browser extensions
- Browser flags
- Uncaught JavaScript errors

## Solution Steps

### 1. Browser DevTools Settings

**Chrome/Edge:**
1. Open DevTools (F12 or Right-click → Inspect)
2. Click the **gear icon** (⚙️) in the top-right corner of DevTools
3. In Settings, look for:
   - **"Auto-open DevTools for popups"** - **UNCHECK THIS**
   - **"Preserve log upon navigation"** - Adjust to your preference
   - **"Show console drawer on errors"** - **UNCHECK THIS**
4. Close DevTools and refresh the page

### 2. Check Browser Extensions

Some extensions can cause DevTools to auto-open:

1. Open Chrome/Edge Extensions: `chrome://extensions` or `edge://extensions`
2. Disable extensions one by one to identify the culprit
3. Common culprits:
   - React DevTools
   - Redux DevTools
   - Vue DevTools
   - Any debugging/developer extensions

### 3. Browser Flags (Chrome/Edge)

1. Open: `chrome://flags` or `edge://flags`
2. Search for:
   - **"Auto-open DevTools"** - Set to **Disabled**
   - **"Enable automatic tab discarding"** - Can sometimes interfere
3. Restart the browser

### 4. Reset DevTools Preferences

**Chrome:**
1. Close all Chrome windows
2. Delete DevTools preferences:
   - Windows: `%LOCALAPPDATA%\Google\Chrome\User Data\Default\Preferences`
   - Look for `devtools` entries and remove them
3. Or use: `chrome://settings/resetProfileSettings`

**Edge:**
1. Close all Edge windows
2. Delete DevTools preferences:
   - Windows: `%LOCALAPPDATA%\Microsoft\Edge\User Data\Default\Preferences`
3. Or use: `edge://settings/resetProfileSettings`

### 5. Code-Level Fixes (Already Implemented)

The codebase now includes:
- Global error handlers to catch uncaught errors
- Promise rejection handlers
- Error suppression in production mode

These prevent errors from triggering DevTools auto-open.

### 6. Manual Prevention

**Keyboard Shortcut:**
- If DevTools opens, press `Ctrl+Shift+I` (Windows) or `Cmd+Option+I` (Mac) to close it
- Or press `F12` to toggle

**Disable via Registry (Windows - Advanced):**
```
HKEY_CURRENT_USER\Software\Microsoft\Edge\Main
Create DWORD: AutoOpenDevTools = 0
```

## Verification

After applying fixes:
1. Close all browser windows
2. Restart the browser
3. Open the application
4. DevTools should NOT auto-open

## Additional Notes

- The in-app "DevTools" view (Self-Mod Console) is different from browser DevTools
- Browser DevTools = Developer tools panel (F12)
- App DevTools = Internal system access console (in the app UI)

If issues persist, check:
- Browser version (update if outdated)
- Windows/OS settings
- Antivirus software (may interfere)

