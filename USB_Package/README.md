# Phoenix AGI: Sola Edition - Portable USB Version

## Quick Start

1. **Configure API Key**: Edit `.env` file and add your OpenRouter API key:
   ```
   OPENROUTER_API_KEY=your_key_here
   ```

2. **Setup Git (First Time Only)**: If you want auto-updates, run `Setup_Git.cmd` once to configure the git repository

3. **Start Sola**: Double-click `Start_Sola.cmd`

4. **Access UI**: Browser will open automatically to http://127.0.0.1:8888

5. **Stop Sola**: Double-click `Stop_Sola.cmd` or close the command window

## Files

- `Start_Sola.cmd` - Launches Sola and opens browser
- `Stop_Sola.cmd` - Stops the Sola server
- `Setup_Git.cmd` - Configures git repository for auto-updates (run once)
- `Update_Sola.cmd` - Updates Sola from GitHub (requires Git)
- `pagi-sola-web.exe` - Main application
- `.env` - Configuration file (edit this)
- `.env.template` - Default configuration template
- `frontend/` - Web UI assets
- `data/` - Application data (created on first run)
- `.git/` - Git repository for auto-updates

## Requirements

- Windows 10 or 11
- Internet connection (for LLM API calls and updates)
- OpenRouter API key (get one at https://openrouter.ai)
- **Git** (for auto-updates - download from https://git-scm.com/download/win)
- **Rust/Cargo** (optional - for rebuilding after updates)
- **Node.js/npm** (optional - for frontend updates)

## Auto-Update

This USB package includes the full git repository for auto-updates. You can update Sola in two ways:

### Method 1: Manual Update Script
1. Run `Update_Sola.cmd`
2. The script will check for updates and ask for confirmation
3. If updates are available, it will pull changes and rebuild automatically

### Method 2: In-App Update (Recommended)
1. Start Sola using `Start_Sola.cmd`
2. Open the Self-Modification Console from the dashboard
3. Go to the "Sola Self-Improvement" section
4. Click "Check for Updates" to see if updates are available
5. Click "Apply Upgrade & Rebuild" to update and rebuild

**Requirements for Updates:**
- Git must be installed and in your system PATH
- Internet connection
- Rust/Cargo (optional - for automatic rebuilds after code changes)
- Node.js/npm (optional - for frontend updates)

**Note:** If Rust/Cargo is not installed, the code will be updated but the executable won't be rebuilt. You'll need to manually rebuild or use a pre-built executable from releases.

## Troubleshooting

- **Port in use**: If port 8888 is busy, edit `.env` and change `PHOENIX_WEB_BIND`
- **API errors**: Verify your OpenRouter API key is correct
- **Won't start**: Make sure no other instance is running (use Stop_Sola.cmd)
- **Update fails**: Ensure Git is installed and you have internet connection
- **Build fails**: Install Rust from https://rustup.rs for automatic rebuilds
- **Git not found**: Install Git from https://git-scm.com/download/win and ensure it's in PATH

## Support

For issues, check the main repository documentation.
