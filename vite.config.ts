import { resolve } from 'path';
import Dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  test: { globals: true, environment: 'jsdom' },
  plugins: [Dts({ staticImport: true, insertTypesEntry: true }), react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'ViteReactLibStarter',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: { react: 'React' }
      }
    }
  }
});
