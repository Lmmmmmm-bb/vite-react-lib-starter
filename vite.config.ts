import { resolve } from 'path';
import Dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Dts({ staticImport: true, insertTypesEntry: true }), react()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'lib')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'ViteReactLibStarter'
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
});
