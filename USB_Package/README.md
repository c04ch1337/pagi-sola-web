# Phoenix AGI: Sola Edition - Portable USB Version

## Quick Start

1. **Configure API Key**: Edit `.env` file and add your OpenRouter API key:
   ```
   OPENROUTER_API_KEY=your_key_here
   ```

2. **Start Sola**: Double-click `Start_Sola.cmd`

3. **Access UI**: Browser will open automatically to http://127.0.0.1:8888

4. **Stop Sola**: Double-click `Stop_Sola.cmd` or close the command window

## Files

- `Start_Sola.cmd` - Launches Sola and opens browser
- `Stop_Sola.cmd` - Stops the Sola server
- `pagi-sola-web.exe` - Main application
- `.env` - Configuration file (edit this)
- `.env.template` - Default configuration template
- `frontend/` - Web UI assets
- `data/` - Application data (created on first run)

## Requirements

- Windows 10 or 11
- Internet connection (for LLM API calls)
- OpenRouter API key (get one at https://openrouter.ai)

## Troubleshooting

- **Port in use**: If port 8888 is busy, edit `.env` and change `PHOENIX_WEB_BIND`
- **API errors**: Verify your OpenRouter API key is correct
- **Won't start**: Make sure no other instance is running (use Stop_Sola.cmd)

## Support

For issues, check the main repository documentation.
