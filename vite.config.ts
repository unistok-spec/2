import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    },
    server: {
      // Это заставит сервер слушать на 0.0.0.0, что чинит проблемы с localhost на Windows
      host: true, 
      port: 5173,
      strictPort: false,
    }
  };
});