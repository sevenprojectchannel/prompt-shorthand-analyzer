import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const v36Dir = path.join(distDir, 'v3.6');

if (!fs.existsSync(v36Dir)) {
  fs.mkdirSync(v36Dir, { recursive: true });
}

// 1. Copy v3.6 assets and index.html into dist/v3.6/
if (fs.existsSync(path.join(distDir, 'assets'))) {
  fs.cpSync(path.join(distDir, 'assets'), path.join(v36Dir, 'assets'), { recursive: true });
}
if (fs.existsSync(path.join(distDir, 'index.html'))) {
  fs.copyFileSync(path.join(distDir, 'index.html'), path.join(v36Dir, 'index.html'));
}
if (fs.existsSync(path.join(distDir, 'prompt-shorthand-analyzer-v3.6-standalone.html'))) {
  fs.copyFileSync(
    path.join(distDir, 'prompt-shorthand-analyzer-v3.6-standalone.html'),
    path.join(v36Dir, 'prompt-shorthand-analyzer-v3.6-standalone.html')
  );
  fs.copyFileSync(
    path.join(distDir, 'prompt-shorthand-analyzer-v3.6-standalone.html'),
    path.join(v36Dir, 'standalone.html')
  );
}

// Copy release APK if present in apks/
const apkSrc = path.join(projectRoot, 'apks', 'Prompt-Shorthand-Analyzer-v3.6-release.apk');
if (fs.existsSync(apkSrc)) {
  fs.copyFileSync(apkSrc, path.join(distDir, 'Prompt-Shorthand-Analyzer-v3.6-release.apk'));
  fs.copyFileSync(apkSrc, path.join(v36Dir, 'Prompt-Shorthand-Analyzer-v3.6-release.apk'));
}

// 2. Also ensure v3.5 is preserved under dist/v3.5/ if available
const v35Dist = path.resolve(projectRoot, '../prompt-shorthand-analyzer-v3.5/dist');
const v35Target = path.join(distDir, 'v3.5');
if (fs.existsSync(v35Dist)) {
  fs.cpSync(v35Dist, v35Target, { recursive: true });
}

// 3. Ensure .nojekyll in all folders so GitHub Pages doesn't ignore anything
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
fs.writeFileSync(path.join(v36Dir, '.nojekyll'), '');
if (fs.existsSync(v35Target)) {
  fs.writeFileSync(path.join(v35Target, '.nojekyll'), '');
}

console.log('Multi-version dist structure prepared successfully:');
console.log(' - /v3.6/ exists with assets and index.html');
if (fs.existsSync(v35Target)) {
  console.log(' - /v3.5/ exists with assets and index.html');
}
