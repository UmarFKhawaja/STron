import { type ConfigEnv, defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const env: Record<string, string> = loadEnv(mode, process.cwd(), '');

  const port: number = parseInt(env.PORT || '9090');

  return {
    server: {
      port: isNaN(port) ? 9090 : port
    },
    plugins: [react()],
    resolve: {
      alias: {
        path: 'path-browserify'
      }
    }
  };
});
