import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,   // 🚨 fail instead of auto-hopping
  },
  build: {
    outDir: 'dist',
  },
});
