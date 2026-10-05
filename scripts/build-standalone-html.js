import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const cssPath = path.join(projectRoot, 'dist/assets/index-D6E0OC2b.css');
const jsPath = path.join(projectRoot, 'dist/assets/index-DKvLWBLY.js');

if (!fs.existsSync(cssPath) || !fs.existsSync(jsPath)) {
  console.error('Dist assets not found. Run npm run build first.');
  process.exit(1);
}

const cssContent = fs.readFileSync(cssPath, 'utf8');
const jsContent = fs.readFileSync(jsPath, 'utf8');

const html = `<!DOCTYPE html>
<html lang="id" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prompt Shorthand Analyzer V3.3.5 - Visual Aspect Ratio & Multimodal AI</title>
  <meta name="description" content="Aplikasi analisis prompt semantik V3.3.5 berarsitektur Safe Patch-Only berbasis Source of Truth V3.3.1 dengan fitur Pilihan Rasio Aspek pada analisis gambar visual.">
  <meta name="theme-color" content="#090d16">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
${cssContent}
  </style>
</head>
<body>
  <div id="app"></div>
  <script>
${jsContent}
  </script>
</body>
</html>`;

const standalonePath = path.join(projectRoot, 'prompt-shorthand-analyzer-v3.3.5-standalone.html');
fs.writeFileSync(standalonePath, html, 'utf8');

const distStandalone = path.join(projectRoot, 'dist/prompt-shorthand-analyzer-v3.3.5-standalone.html');
fs.writeFileSync(distStandalone, html, 'utf8');

const publicStandalone = path.join(projectRoot, 'public/prompt-shorthand-analyzer-v3.3.5-standalone.html');
fs.writeFileSync(publicStandalone, html, 'utf8');

const artifactDir = 'C:/Users/Seven Studio PC/.gemini/antigravity/brain/47b25806-af3e-4610-9588-b0f361279728';
if (fs.existsSync(artifactDir)) {
  fs.writeFileSync(path.join(artifactDir, 'prompt-shorthand-analyzer-v3.3.5-standalone.html'), html, 'utf8');
}

console.log('Standalone HTML generated successfully!');
console.log('File size:', fs.statSync(standalonePath).size, 'bytes');
