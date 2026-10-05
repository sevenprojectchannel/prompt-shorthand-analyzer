/**
 * PromptInput Component V3.3.1
 * Mendukung 3 Mode Analisis:
 * 1. Analisa Prompt (ANALISA_PROMPT) - 100% konsisten dengan V3.3
 * 2. Analisa Gambar → Prompt (IMAGE_TO_PROMPT) - Gambar sebagai Source of Truth
 * 3. Analisa Shorthand Perbaikan Gambar (SHORTHAND_IMPROVE) - Diagnosis & Optimal Shorthand
 */

import { renderPresetTests } from './PresetTests.js';
import { analyzeCanvasPixels, detectClosestAspectRatio } from '../lib/imageVisualAnalyzer.js';
import {
  TWO_WORLDS_GENDERS,
  TWO_WORLDS_AGES,
  TWO_WORLDS_ETHNICITIES,
  TWO_WORLDS_SUBJECT_STYLES,
  TWO_WORLDS_ENVIRONMENT_STYLES
} from '../data/twoWorldsData.js';

export function renderPromptInput({
  currentValue = '',
  onAnalyze,
  onReset,
  onClear,
  onSelectPreset,
  isAnalyzing = false,
  isOnlineActive = false,
  activeMode = 'ANALISA_PROMPT',
  onModeChange,
  uploadedImage = null,
  onImageSelected,
  onImageRemoved,
  selectedAspectRatio = 'auto',
  onAspectRatioChange,
  twoWorldsConfig = null,
  onTwoWorldsConfigChange
}) {
  const presets = renderPresetTests(onSelectPreset);
  const detectedRatio = uploadedImage
    ? (uploadedImage.detectedAspectRatio || (uploadedImage.width && uploadedImage.height ? detectClosestAspectRatio(uploadedImage.width, uploadedImage.height) : '1:1'))
    : null;

  const html = `
    <section class="panel analyzer-card" id="card-input">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
          <h2>INPUT &amp; MODE ANALISIS</h2>
        </div>
        <div style="display: flex; gap: 0.4rem;">
          ${(activeMode !== 'IMAGE_TO_PROMPT' && activeMode !== 'TWO_WORLDS') ? `
            <button type="button" class="btn btn-outline btn-xs" id="btn-clear-prompt" title="Kosongkan teks">
              Kosongkan
            </button>
          ` : ''}
          <button type="button" class="btn btn-danger btn-xs" id="btn-reset-app" title="Kembalikan aplikasi ke keadaan awal">
            Reset
          </button>
        </div>
      </div>

      <!-- Mode Selector Tabs -->
      <div class="analysis-mode-selector" id="mode-tabs-container">
        <button type="button" class="mode-tab-btn ${activeMode === 'ANALISA_PROMPT' ? 'active' : ''}" data-mode="ANALISA_PROMPT">
          <span>📝</span>
          <span>Analisa Prompt</span>
        </button>
        <button type="button" class="mode-tab-btn ${activeMode === 'IMAGE_TO_PROMPT' ? 'active' : ''}" data-mode="IMAGE_TO_PROMPT">
          <span>🔍</span>
          <span>Analisa Gambar → Prompt</span>
        </button>
        <button type="button" class="mode-tab-btn ${activeMode === 'TWO_WORLDS' ? 'active' : ''}" data-mode="TWO_WORLDS">
          <span>🌐</span>
          <span>2 dunia</span>
        </button>
        <button type="button" class="mode-tab-btn ${activeMode === 'SHORTHAND_IMPROVE' ? 'active' : ''}" data-mode="SHORTHAND_IMPROVE">
          <span>🛠️</span>
          <span>Analisa Shorthand Perbaikan Gambar</span>
        </button>
      </div>

      <!-- Online Shorthand Search Status Banner -->
      <div class="online-status-banner ${isOnlineActive ? 'banner-online-active' : 'banner-online-inactive'}" id="prompt-online-status-banner">
        <div class="banner-inner">
          ${isOnlineActive ? `
            <div class="banner-content">
              <span class="status-pulse-dot"></span>
              <strong class="banner-title">🌐 Pencarian Online Shorthand: AKTIF</strong>
              <span class="banner-desc">Analisis terbuka &amp; tidak terbatas — Memetakan konsep, objek, aktivitas, gaya, kanvas/outpaint, atau istilah baru ke shorthand AI yang relevan.</span>
            </div>
          ` : `
            <div class="banner-content">
              <span class="status-offline-dot">⚪</span>
              <strong class="banner-title">🖥️ Pencarian Online Shorthand: TIDAK AKTIF</strong>
              <span class="banner-desc">Berjalan dalam Mode Heuristik Lokal. Sambungkan Gemini API Key di Pengaturan untuk mengaktifkan pencarian online AI terbuka tanpa batas.</span>
            </div>
          `}
        </div>
      </div>

      <!-- IMAGE UPLOAD SECTION (MODE 2, MODE 2 DUNIA & MODE 3) -->
      ${(activeMode === 'IMAGE_TO_PROMPT' || activeMode === 'TWO_WORLDS' || activeMode === 'SHORTHAND_IMPROVE') ? `
        <div class="image-upload-wrapper" id="image-upload-wrapper">
          <input type="file" id="image-file-input" accept="image/*, .jfif, .jpg, .jpeg, .png, .webp" style="display: none;" />
          ${uploadedImage ? `
            <div class="image-preview-card">
              <img src="${uploadedImage.previewUrl}" alt="Reference Preview" class="image-preview-thumb" id="img-reference-preview" />
              <div class="image-preview-info">
                <div class="image-filename">${uploadedImage.name || 'reference-source.jpg'}</div>
                <div class="image-meta">
                  Ukuran: ${(uploadedImage.size ? (uploadedImage.size / 1024).toFixed(1) + ' KB' : 'Gambar Sumber')} &bull;
                  <span style="color: ${activeMode === 'SHORTHAND_IMPROVE' ? '#c084fc' : '#38bdf8'};">
                    ${activeMode === 'SHORTHAND_IMPROVE' ? 'SOURCE OF TRUTH Diagnosis Perbaikan' : (activeMode === 'TWO_WORLDS' ? 'SOURCE OF TRUTH Visual (2 Dunia)' : 'SOURCE OF TRUTH Visual')}
                  </span>
                </div>
              </div>
              <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
                <button type="button" class="btn btn-outline btn-xs" id="btn-change-image" title="Ganti gambar dengan file lain">
                  🔄 Ganti Gambar
                </button>
                <button type="button" class="btn btn-outline btn-xs btn-danger" id="btn-remove-image" title="Hapus gambar">
                  ✕ Hapus Gambar
                </button>
              </div>
            </div>
          ` : `
            <div class="image-dropzone" id="image-dropzone">
              <svg class="dropzone-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
              <div class="dropzone-text">
                ${activeMode === 'SHORTHAND_IMPROVE' 
                  ? 'Tarik &amp; lepas gambar yang ingin didiagnosis &amp; diperbaiki di sini, atau klik untuk memilih file' 
                  : (activeMode === 'TWO_WORLDS'
                    ? 'Tarik &amp; lepas gambar referensi di sini, atau klik untuk memilih file (Mode 2 Dunia)'
                    : 'Tarik &amp; lepas gambar referensi di sini, atau klik untuk memilih file')}
              </div>
              <div class="dropzone-hint">
                ${activeMode === 'SHORTHAND_IMPROVE' 
                  ? 'Format: JPG, PNG, WEBP — Sistem mendiagnosis kondisi visual &amp; merekomendasikan shorthand perbaikan (UNLIMITED)' 
                  : (activeMode === 'TWO_WORLDS'
                    ? 'Format yang didukung: JPG, PNG, WEBP (Gambar digunakan sebagai sumber analisis visual konsep 2 Dunia)'
                    : 'Format yang didukung: JPG, PNG, WEBP (Gambar digunakan sebagai sumber analisis visual murni)')}
              </div>
            </div>
          `}
          <!-- ASPECT RATIO SELECTOR (V3.3.5) -->
          <div class="aspect-ratio-control-panel" id="aspect-ratio-control-panel">
            <div class="aspect-ratio-control-header">
              <div class="aspect-ratio-title">
                <span class="aspect-ratio-icon">📐</span>
                <span class="aspect-ratio-heading">Pilihan Rasio Aspek:</span>
                <span class="aspect-ratio-badge" id="aspect-ratio-badge">
                  ${(selectedAspectRatio === 'auto' || selectedAspectRatio === 'Otomatis' || !selectedAspectRatio)
                    ? (detectedRatio ? `Otomatis (Asli: ${detectedRatio})` : 'Otomatis (Dimensi Asli)')
                    : `Target: ${selectedAspectRatio}`}
                </span>
              </div>
              <div class="aspect-ratio-hint">
                ${(selectedAspectRatio === 'auto' || selectedAspectRatio === 'Otomatis' || !selectedAspectRatio)
                  ? (uploadedImage ? `Mendeteksi aspek rasio asli gambar (${uploadedImage.width || '?'}×${uploadedImage.height || '?'}px → ${detectedRatio}). Proporsi subjek dipertahankan tanpa distorsi.` : 'Mendeteksi rasio aspek otomatis dari dimensi asli gambar yang diunggah.')
                  : `Mengarahkan rasio target kanvas ke ${selectedAspectRatio} tanpa stretching atau perubahan proporsi subjek.`}
              </div>
            </div>
            <div class="aspect-ratio-btn-group" role="radiogroup" aria-label="Pilihan Rasio Aspek">
              ${['Otomatis', '1:1', '2:3', '3:2', '3:4', '4:3', '9:16', '16:9'].map(ratio => {
                const isSelected = (ratio === 'Otomatis' && (selectedAspectRatio === 'auto' || selectedAspectRatio === 'Otomatis' || !selectedAspectRatio)) ||
                                   (selectedAspectRatio === ratio);
                return `
                  <button 
                    type="button" 
                    class="aspect-ratio-btn ${isSelected ? 'active' : ''}" 
                    data-ratio="${ratio}"
                    id="btn-aspect-${ratio.replace(':', '-')}"
                    title="${ratio === 'Otomatis' ? 'Deteksi otomatis dari dimensi asli gambar' : `Pilih rasio target ${ratio}`}"
                  >
                    ${ratio === 'Otomatis' ? '🔄 Otomatis' : ratio}
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      ` : ''}

      <!-- 2 DUNIA PARAMETER PANEL (V3.5 PATCH ONLY - KHUSUS TAB 2 DUNIA) -->
      ${activeMode === 'TWO_WORLDS' ? `
        <div class="two-worlds-config-panel" id="two-worlds-config-panel">
          <div class="two-worlds-header">
            <div class="two-worlds-title">
              <span>🌐</span>
              <span>PARAMETER MODIFIKASI KHUSUS 2 DUNIA</span>
            </div>
            <span class="two-worlds-badge">SOURCE OF TRUTH V3.5</span>
          </div>

          <!-- 1. CUSTOM REQUEST -->
          <div class="two-worlds-field">
            <label class="two-worlds-label" for="tw-custom-request">
              <span>✍️</span>
              <span>1. CUSTOM REQUEST (Instruksi Tambahan)</span>
            </label>
            <div class="two-worlds-hint">
              Instruksi tambahan untuk memodifikasi <strong>PROMPT OPTIMAL</strong>. Karakter/subjek asli tetap dipertahankan utuh kecuali diminta secara eksplisit.
            </div>
            <textarea 
              id="tw-custom-request" 
              class="two-worlds-textarea" 
              rows="3" 
              placeholder="Contoh: Tambahkan subjek manusia realistis di luar subjek yang sudah ada, dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan."
            >${twoWorldsConfig?.customRequest || ''}</textarea>
          </div>

          <!-- DEMOGRAFI SUBJEK: JENIS KELAMIN, USIA, RAS/ETNIS -->
          <div class="two-worlds-grid-row">
            <!-- 2. JENIS KELAMIN SUBYEK -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-gender">
                <span>👤</span>
                <span>2. JENIS KELAMIN SUBYEK</span>
              </label>
              <select id="tw-gender" class="two-worlds-select">
                ${TWO_WORLDS_GENDERS.map(g => `
                  <option value="${g}" ${(twoWorldsConfig?.gender === g || (!twoWorldsConfig?.gender && g.startsWith('Auto'))) ? 'selected' : ''}>${g}</option>
                `).join('')}
              </select>
              <div class="two-worlds-hint">Diterapkan pada subjek/karakter tambahan atau karakter yang diminta.</div>
            </div>

            <!-- 3. USIA KARAKTER -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-age">
                <span>🎂</span>
                <span>3. USIA KARAKTER</span>
              </label>
              <select id="tw-age" class="two-worlds-select">
                ${TWO_WORLDS_AGES.map(a => `
                  <option value="${a}" ${(twoWorldsConfig?.age === a || (!twoWorldsConfig?.age && a.startsWith('Auto'))) ? 'selected' : ''}>${a}</option>
                `).join('')}
              </select>
              <div class="two-worlds-hint">Pilihan Auto atau 1 s/d 50 tahun untuk karakter yang dibuat.</div>
            </div>

            <!-- 4. RAS / ETNIS -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-ethnicity">
                <span>🌍</span>
                <span>4. RAS / ETNIS</span>
              </label>
              <select id="tw-ethnicity" class="two-worlds-select">
                ${TWO_WORLDS_ETHNICITIES.map(e => `
                  <option value="${e}" ${(twoWorldsConfig?.ethnicity === e || (!twoWorldsConfig?.ethnicity && e.startsWith('Auto'))) ? 'selected' : ''}>${e}</option>
                `).join('')}
              </select>
              <div class="two-worlds-hint">Auto (Smart Detection) atau etnis spesifik karakter.</div>
            </div>
          </div>

          <!-- VISUAL STYLE: STYLE SUBYEK & ENVIRONMENT STYLE -->
          <div class="two-worlds-grid-row">
            <!-- 5. STYLE SUBYEK -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-subject-style">
                <span>🎨</span>
                <span>5. STYLE SUBYEK</span>
              </label>
              <select id="tw-subject-style" class="two-worlds-select">
                ${TWO_WORLDS_SUBJECT_STYLES.map(s => `
                  <option value="${s}" ${(twoWorldsConfig?.subjectStyle === s || (!twoWorldsConfig?.subjectStyle && s.startsWith('Auto'))) ? 'selected' : ''}>${s}</option>
                `).join('')}
              </select>
              <input 
                type="text" 
                id="tw-custom-subject-style" 
                class="two-worlds-input" 
                placeholder="Ketik style subjek custom (misal: Neo-Renaissance Oil Painting)..." 
                value="${twoWorldsConfig?.customSubjectStyle || ''}" 
                style="display: ${twoWorldsConfig?.subjectStyle === 'Custom' ? 'block' : 'none'}; margin-top: 0.35rem;" 
              />
              <div class="two-worlds-hint">Hanya mengontrol tampilan visual, materialitas, rendering, dan tekstur subjek.</div>
            </div>

            <!-- 6. ENVIRONMENT STYLE -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-env-style">
                <span>🏞️</span>
                <span>6. ENVIRONMENT STYLE</span>
              </label>
              <select id="tw-env-style" class="two-worlds-select">
                ${TWO_WORLDS_ENVIRONMENT_STYLES.map(env => `
                  <option value="${env.name}" ${(twoWorldsConfig?.environmentStyle === env.name || (!twoWorldsConfig?.environmentStyle && env.name.startsWith('Auto'))) ? 'selected' : ''}>${env.name}</option>
                `).join('')}
              </select>
              <div class="two-worlds-desc-box" id="tw-env-desc">
                ${(TWO_WORLDS_ENVIRONMENT_STYLES.find(e => e.name === (twoWorldsConfig?.environmentStyle || 'Auto (Smart Detection)'))?.description) || 'Sistem mendeteksi dan menentukan style lingkungan paling harmonis berdasarkan gambar sumber.'}
              </div>
              <div class="two-worlds-hint">Mengontrol estetika latar belakang &amp; atmosfer. Subjek asli tetap dipertahankan.</div>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- MODE 3 SPECIFIC: DIAGNOSTIC NOTICE -->
      ${activeMode === 'SHORTHAND_IMPROVE' ? `
        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.25); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; margin-bottom: 0.85rem; font-size: 0.825rem; color: #d8b4fe;">
          <strong>🛠️ Mode Analisa Shorthand Perbaikan Gambar:</strong> 
          ${uploadedImage 
            ? 'Gambar terpasang. Sistem akan mendiagnosis seluruh aspek visual (shadow, highlight, contrast, color balance, detail, tekstur, dll.) dan merekomendasikan seluruh shorthand perbaikan yang relevan tanpa batasan jumlah.'
            : 'Unggah gambar di atas untuk diagnosis visual komprehensif, atau masukkan prompt/shorthand di bawah untuk evaluasi konflik direktif dan perbaikan prompt.'}
        </div>
      ` : ''}

      <!-- Preset Test Cases (Only in Mode 1, or Mode 3 without image) -->
      ${(activeMode === 'ANALISA_PROMPT' || (activeMode === 'SHORTHAND_IMPROVE' && !uploadedImage)) ? `
        <div id="presets-container">
          ${presets.html}
        </div>
      ` : ''}

      <!-- Textarea Input (Hanya untuk Mode 1 dan Mode 3) -->
      ${(activeMode !== 'IMAGE_TO_PROMPT' && activeMode !== 'TWO_WORLDS') ? `
        <div class="form-group" style="margin-bottom: 0.85rem;">
          <label for="prompt-textarea" style="display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.35rem;">
            ${(activeMode === 'SHORTHAND_IMPROVE' && uploadedImage)
              ? 'B. Prompt Pengguna (Opsional / Catatan Tambahan):' 
              : 'B. Prompt Pengguna (Indonesia / English):'}
          </label>
          <textarea 
            id="prompt-textarea" 
            class="textarea-prompt font-mono" 
            placeholder="${(activeMode === 'SHORTHAND_IMPROVE' && uploadedImage)
              ? 'Ketik catatan aspek spesifik yang ingin diperhatikan/diperbaiki (opsional, misal: fokus pada bayangan dan warna)...'
              : 'Ketik atau tempelkan prompt bahasa natural Anda di sini...&#10;&#10;Contoh pencarian terbuka (apapun topik, objek, atau konsep visualnya):&#10;• memperluas foto&#10;• perbaiki pencahayaan foto&#10;• hapus hijab, jangan ubah wajah&#10;• ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah&#10;• fotografer cyberpunk di jalanan tokyo dengan pantulan neon&#10;• dokter bedah di rumah sakit futuristik'}"
          >${currentValue || ''}</textarea>
        </div>
      ` : ''}

      <!-- Actions Bar -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
        <small style="color: var(--text-muted); font-size: 0.775rem;">
          ${activeMode === 'TWO_WORLDS'
            ? '💡 Gambar dianalisis langsung sebagai SOURCE OF TRUTH untuk sintesis prompt 2 Dunia &amp; rekomendasi shorthand.'
            : (activeMode === 'IMAGE_TO_PROMPT' 
              ? '💡 Gambar dianalisis langsung sebagai SOURCE OF TRUTH untuk menghasilkan deskripsi visual 13 atribut &amp; rekomendasi shorthand.' 
              : (activeMode === 'SHORTHAND_IMPROVE' && uploadedImage)
                ? '💡 Mendiagnosis seluruh parameter visual &amp; merekomendasikan seluruh shorthand perbaikan yang relevan tanpa batasan jumlah.'
                : '💡 Menganalisis seluruh teks prompt secara semantik tanpa batas kategori atau batasan topik.')}
        </small>
        <button type="button" class="btn btn-primary" id="btn-run-analysis" ${isAnalyzing ? 'disabled' : ''}>
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          ${isAnalyzing 
            ? (activeMode === 'TWO_WORLDS'
                ? '🌐 Menganalisis 2 Dunia...'
                : (activeMode === 'IMAGE_TO_PROMPT' 
                    ? '🔍 Menganalisis Gambar...' 
                    : (activeMode === 'SHORTHAND_IMPROVE' && uploadedImage)
                      ? '🛠️ Mendiagnosis Gambar...'
                      : (isOnlineActive ? 'Mencari Online...' : 'Menganalisis...')))
            : (activeMode === 'TWO_WORLDS'
                ? '🌐 Analisa 2 Dunia → Prompt'
                : (activeMode === 'IMAGE_TO_PROMPT' 
                    ? '🔍 Analisa Gambar → Prompt' 
                    : (activeMode === 'SHORTHAND_IMPROVE' && uploadedImage)
                      ? '🛠️ Analisa Perbaikan Gambar'
                      : (activeMode === 'SHORTHAND_IMPROVE' 
                          ? '🛠️ Analisa Shorthand &amp; Perbaikan' 
                          : (isOnlineActive ? '🌐 Analisis Prompt' : 'Analisis Prompt'))))}
        </button>
      </div>
    </section>
  `;

  return {
    html,
    bindEvents(container) {
      if (activeMode === 'ANALISA_PROMPT' || (activeMode === 'SHORTHAND_IMPROVE' && !uploadedImage)) {
        presets.bindEvents(container);
      }

      const textarea = container.querySelector('#prompt-textarea');
      const analyzeBtn = container.querySelector('#btn-run-analysis');
      const clearBtn = container.querySelector('#btn-clear-prompt');
      const resetBtn = container.querySelector('#btn-reset-app');

      // Mode Selector buttons
      container.querySelectorAll('.mode-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const mode = btn.getAttribute('data-mode');
          if (onModeChange && mode !== activeMode) {
            onModeChange(mode);
          }
        });
      });

      // Image upload handling
      const dropzone = container.querySelector('#image-dropzone');
      const fileInput = container.querySelector('#image-file-input');
      const changeImageBtn = container.querySelector('#btn-change-image');
      const removeImageBtn = container.querySelector('#btn-remove-image');

      if (fileInput) {
        if (dropzone) {
          dropzone.addEventListener('click', () => {
            fileInput.click();
          });

          dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('dragover');
          });

          dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('dragover');
          });

          dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('dragover');
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
              handleFile(e.dataTransfer.files[0]);
            }
          });
        }

        if (changeImageBtn) {
          changeImageBtn.addEventListener('click', () => {
            fileInput.click();
          });
        }

        fileInput.addEventListener('change', () => {
          if (fileInput.files && fileInput.files[0]) {
            handleFile(fileInput.files[0]);
            fileInput.value = '';
          }
        });

        function handleFile(file) {
          if (!file) return;
          const isImageMime = file.type && file.type.startsWith('image/');
          const isImageExt = /\.(jpe?g|png|webp|jfif|bmp|gif|heic|heif)$/i.test(file.name || '');
          if (!isImageMime && !isImageExt) {
            alert('Silakan pilih file gambar yang valid (JPG, PNG, WEBP, JFIF).');
            return;
          }

          const reader = new FileReader();
          reader.onload = (evt) => {
            const dataUrl = evt.target.result;
            const img = new Image();
            img.onload = () => {
              const naturalW = img.naturalWidth || img.width || 800;
              const naturalH = img.naturalHeight || img.height || 800;

              let cleanJpegDataUrl = dataUrl;
              let visualTelemetry = null;

              try {
                // Skalakan ke resolusi optimal Vision AI (max 1280px) untuk menjaga detail tinggi
                // sekaligus mencegah payload base64 raksasa (menghasilkan ~150-300KB)
                const MAX_DIM = 1280;
                let drawW = naturalW;
                let drawH = naturalH;
                if (drawW > MAX_DIM || drawH > MAX_DIM) {
                  const scale = Math.min(MAX_DIM / drawW, MAX_DIM / drawH);
                  drawW = Math.round(drawW * scale);
                  drawH = Math.round(drawH * scale);
                }

                const canvas = document.createElement('canvas');
                canvas.width = drawW;
                canvas.height = drawH;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, drawW, drawH);

                // Ekstraksi telemetri pixel visual nyata
                visualTelemetry = analyzeCanvasPixels(canvas, { filename: file.name, targetAspectRatio: selectedAspectRatio });

                // Normalisasi ke standard image/jpeg untuk menjamin kompatibilitas Gemini API
                cleanJpegDataUrl = canvas.toDataURL('image/jpeg', 0.88);
              } catch (canvasErr) {
                console.warn('Canvas processing fallback:', canvasErr);
                cleanJpegDataUrl = dataUrl;
                visualTelemetry = analyzeCanvasPixels(null, { filename: file.name, targetAspectRatio: selectedAspectRatio });
              }

              const detectedAspect = detectClosestAspectRatio(naturalW, naturalH);

              if (onImageSelected) {
                onImageSelected({
                  file,
                  name: file.name,
                  size: file.size,
                  type: 'image/jpeg',
                  base64: cleanJpegDataUrl,
                  previewUrl: cleanJpegDataUrl,
                  width: naturalW,
                  height: naturalH,
                  aspectRatio: detectedAspect,
                  detectedAspectRatio: detectedAspect,
                  visualTelemetry
                });
              }
            };
            img.onerror = () => {
              if (onImageSelected) {
                onImageSelected({
                  file,
                  name: file.name,
                  size: file.size,
                  type: 'image/jpeg',
                  base64: dataUrl,
                  previewUrl: dataUrl,
                  width: 0,
                  height: 0,
                  visualTelemetry: null
                });
              }
            };
            img.src = dataUrl;
          };
          reader.readAsDataURL(file);
        }
      }

      if (removeImageBtn) {
        removeImageBtn.addEventListener('click', () => {
          if (onImageRemoved) {
            onImageRemoved();
          }
        });
      }

      // Aspect Ratio Selector buttons (V3.3.5)
      const aspectBtns = container.querySelectorAll('.aspect-ratio-btn');
      aspectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const ratio = btn.getAttribute('data-ratio');
          if (onAspectRatioChange) {
            onAspectRatioChange(ratio);
          }
        });
      });

      if (analyzeBtn) {
        analyzeBtn.addEventListener('click', () => {
          if (activeMode === 'IMAGE_TO_PROMPT' || activeMode === 'TWO_WORLDS') {
            if (!uploadedImage) {
              if (fileInput) fileInput.click();
              return;
            }
            if (onAnalyze) onAnalyze('');
            return;
          }
          const val = textarea ? textarea.value : '';
          if (onAnalyze) onAnalyze(val);
        });
      }

      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          if (textarea) textarea.value = '';
          if (onClear) onClear();
        });
      }

      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (onReset) onReset();
        });
      }

      // Enter key (Ctrl+Enter or Cmd+Enter) triggers analysis
      if (textarea) {
        textarea.addEventListener('keydown', (e) => {
          if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            if (onAnalyze) onAnalyze(textarea.value);
          }
        });
      }

      // 2 Dunia Tab Specific Event Listeners (V3.5)
      if (activeMode === 'TWO_WORLDS') {
        const twCustomReq = container.querySelector('#tw-custom-request');
        const twGender = container.querySelector('#tw-gender');
        const twAge = container.querySelector('#tw-age');
        const twEthnicity = container.querySelector('#tw-ethnicity');
        const twSubjectStyle = container.querySelector('#tw-subject-style');
        const twCustomSubjectStyle = container.querySelector('#tw-custom-subject-style');
        const twEnvStyle = container.querySelector('#tw-env-style');
        const twEnvDesc = container.querySelector('#tw-env-desc');

        const triggerTwUpdate = () => {
          if (!onTwoWorldsConfigChange) return;
          onTwoWorldsConfigChange({
            customRequest: twCustomReq ? twCustomReq.value : '',
            gender: twGender ? twGender.value : 'Auto (Smart Detection) mengikuti gambar unggahan',
            age: twAge ? twAge.value : 'Auto (Smart Detection) mengikuti gambar unggahan',
            ethnicity: twEthnicity ? twEthnicity.value : 'Auto (Smart Detection)',
            subjectStyle: twSubjectStyle ? twSubjectStyle.value : 'Auto (Smart Detection)',
            customSubjectStyle: twCustomSubjectStyle ? twCustomSubjectStyle.value : '',
            environmentStyle: twEnvStyle ? twEnvStyle.value : 'Auto (Smart Detection)'
          });
        };

        if (twCustomReq) {
          twCustomReq.addEventListener('input', triggerTwUpdate);
        }
        if (twGender) {
          twGender.addEventListener('change', triggerTwUpdate);
        }
        if (twAge) {
          twAge.addEventListener('change', triggerTwUpdate);
        }
        if (twEthnicity) {
          twEthnicity.addEventListener('change', triggerTwUpdate);
        }
        if (twSubjectStyle) {
          twSubjectStyle.addEventListener('change', () => {
            const isCustom = twSubjectStyle.value === 'Custom';
            if (twCustomSubjectStyle) {
              twCustomSubjectStyle.style.display = isCustom ? 'block' : 'none';
              if (isCustom) twCustomSubjectStyle.focus();
            }
            triggerTwUpdate();
          });
        }
        if (twCustomSubjectStyle) {
          twCustomSubjectStyle.addEventListener('input', triggerTwUpdate);
        }
        if (twEnvStyle) {
          twEnvStyle.addEventListener('change', () => {
            const selectedStyle = twEnvStyle.value;
            const matched = TWO_WORLDS_ENVIRONMENT_STYLES.find(e => e.name === selectedStyle);
            if (twEnvDesc) {
              twEnvDesc.textContent = matched ? matched.description : '';
            }
            triggerTwUpdate();
          });
        }
      }
    }
  };
}
