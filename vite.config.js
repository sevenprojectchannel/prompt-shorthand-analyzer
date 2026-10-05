import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 3305,
    open: true,
    watch: {
      ignored: ['**/android/**', '**/dist/**', '**/apks/**', '**/*.apk']
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
});
