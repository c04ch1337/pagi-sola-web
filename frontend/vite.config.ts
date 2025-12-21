import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Load env from repo root so `VITE_*` can live alongside the Rust `.env`.
    const repoRoot = path.resolve(__dirname, '..');
    const env = loadEnv(mode, repoRoot, '');
    const apiBase = 'http://127.0.0.1:5000'; // Hardcoded to use port 5000
    return {
      server: {
        port: 8888, // Hardcoded to use port 8888
        host: '0.0.0.0',
        proxy: {
          // Local dev:
          // - Frontend dev server: VITE_PORT (default: 3000)
          // - Backend API (phoenix-web): VITE_PHOENIX_API_BASE (default: http://127.0.0.1:8888)
          '/api': {
            target: apiBase,
            changeOrigin: true,
          },
          '/health': {
            target: apiBase,
            changeOrigin: true,
          },
        },
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
