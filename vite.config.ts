import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: __dirname,
  resolve: {
    alias: {
      components: '/src/components',
      hooks: '/src/hooks',
      utils: '/src/utils',
    },
  },
});
