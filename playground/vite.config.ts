import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-react-lib-starter/',
  plugins: [react()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      'vite-react-lib-starter': resolve(__dirname, '../src')
    }
  }
});
