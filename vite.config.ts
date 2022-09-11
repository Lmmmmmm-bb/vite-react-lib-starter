import { resolve } from 'path';
import Dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import { UserConfigExport, defineConfig } from 'vite';

// lib build config
const libBuildConfig: UserConfigExport = {
  plugins: [
    Dts({ staticImport: true, insertTypesEntry: true, include: 'lib' }),
    react()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'ViteReactLibStarter',
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
};

// gh pages build config
const buildConfig: UserConfigExport = {
  base: '/vite-react-lib-starter/',
  plugins: [react()]
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = mode === 'lib' ? libBuildConfig : buildConfig;

  return {
    resolve: {
      alias: {
        '~': resolve(__dirname, 'lib')
      }
    },
    ...config
  };
});
