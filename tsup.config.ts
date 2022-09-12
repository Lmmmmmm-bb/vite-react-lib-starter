import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  minify: true,
  treeshake: true,
  splitting: true,
  external: ['react']
});
