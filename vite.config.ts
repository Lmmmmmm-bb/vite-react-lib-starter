import { resolve } from 'path';
import Dts from 'vite-plugin-dts';
import { UserConfigExport, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const libBuildConfig: UserConfigExport = {
  plugins: [Dts({ staticImport: true, insertTypesEntry: true }), react()],
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

const buildConfig: UserConfigExport = {
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
