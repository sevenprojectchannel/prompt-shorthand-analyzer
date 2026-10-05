import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: './',
  publicDir: 'public',
  server: {
    port: 3305,
    open: true,
    watch: {
      ignored: ['**/android/**', '**/dist/**', '**/apks/**', '**/*.apk']
    }
  },
  plugins: [
    {
      name: 'apk-downloader-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const rawUrl = req.url || '';
          if (rawUrl.toLowerCase().includes('.apk')) {
            const fileName = path.basename(rawUrl.split('?')[0]);
            const filePath = path.resolve(__dirname, 'apks', fileName);
            if (fs.existsSync(filePath)) {
              const stat = fs.statSync(filePath);
              res.writeHead(200, {
                'Content-Type': 'application/vnd.android.package-archive',
                'Content-Length': stat.size,
                'Content-Disposition': `attachment; filename="${fileName}"`,
                'Cache-Control': 'no-cache'
              });
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          }
          next();
        });
      }
    }
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
});
