/**
 * ColourGradingPanel Component (V3.6)
 * Khusus untuk Tab "🎨 COLOUR GRADING"
 * 
 * Performance Optimized:
 * - ZERO Preview Canvas Rendering
 * - ZERO Comparison Slider & Duplicate Buffer
 * - 100% Non-Destructive Image Protection (Foto Asli = Source of Truth)
 * - 3 Mode: AUTO, SELECT STYLE, CUSTOM STYLE
 * - Pilihan Style terkurasi 7 kategori & 37+ style
 * - Kontrol Color Grading Intensity (0%, 25%, 50%, 75%, 100%)
 * - Intelligent Protection System (Highlight, Shadow, Skin Tone, Gamut, dll.)
 * - Tombol Reset Color Grading
 * - Parameter Custom Style lengkap
 * - Batch Processing Selector (Multi-Foto)
 */

import {
  COLOUR_GRADING_MODES,
  COLOUR_GRADING_CATEGORIES,
  ALL_COLOUR_GRADING_STYLES,
  INTENSITY_LEVELS,
  SHADOW_TONE_OPTIONS,
  HIGHLIGHT_TONE_OPTIONS
} from '../data/colourGradingData.js';

export function renderColourGradingPanel({
  config,
  uploadedImage,
  onConfigChange,
  onResetGrading,
  batchImages = [],
  activeBatchIndex = 0,
  onSelectBatchImage
}) {
  const cfg = config || {};
  const currentMode = cfg.mode || 'AUTO';
  const selectedStyle = cfg.selectedStyle || 'Natural Vibrant';
  const intensity = typeof cfg.intensity === 'number' ? cfg.intensity : 50;
  const protections = cfg.protections || {};
  const custom = cfg.custom || {};

  const currentStyleObj = ALL_COLOUR_GRADING_STYLES.find(s => s.name === selectedStyle) || {
    name: selectedStyle,
    description: 'Arah visual colour grading adaptif.'
  };

  const html = `
    <div class="colour-grading-panel" id="colour-grading-panel" style="margin-top: 1rem; margin-bottom: 1.25rem;">
      <!-- 1. SOURCE IMAGE PROTECTION BANNER (NON-GENERATIVE GUARANTEE) -->
      <div style="background: rgba(236, 72, 153, 0.08); border: 1px solid rgba(236, 72, 153, 0.3); border-radius: var(--radius-sm); padding: 0.75rem 1rem; margin-bottom: 0.85rem; font-size: 0.825rem; line-height: 1.5; color: #fce7f3; display: flex; align-items: flex-start; gap: 0.65rem;">
        <span style="font-size: 1.2rem; line-height: 1;">🛡️</span>
        <div>
          <strong style="color: #f472b6; font-size: 0.85rem; display: block; margin-bottom: 0.2rem;">
            FOTO ASLI ADALAH SOURCE OF TRUTH — ENHANCEMENT NON-DESTRUKTIF
          </strong>
          <span>Color Grading hanya memengaruhi karakteristik <strong>warna, tonal, kontras &amp; pencahayaan</strong>. Subjek, wajah, identitas, proporsi tubuh, pakaian, rambut, pose, objek, latar belakang, dan komposisi <strong>100% DIPERTAHANKAN UTUH tanpa regenerasi citra</strong>.</span>
        </div>
      </div>

      <!-- 2. ACTION & STATUS BAR (RESET COLOR GRADING & BATCH INDICATOR) -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.55rem 0.85rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <span style="font-size: 0.825rem; font-weight: 700; color: #f472b6; display: flex; align-items: center; gap: 0.35rem;">
            <span>🎨</span>
            <span>KONTROL PARAMETER AI COLOR GRADING</span>
          </span>
          ${uploadedImage ? `
            <span style="font-size: 0.725rem; color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.25); padding: 0.15rem 0.5rem; border-radius: 4px;">
              📷 Foto Terpasang (Source of Truth)
            </span>
          ` : ''}
          ${currentMode === 'SELECT_STYLE' ? `
            <span style="font-size: 0.725rem; color: #e2e8f0; background: rgba(255, 255, 255, 0.08); padding: 0.15rem 0.5rem; border-radius: 4px;">
              Target: <strong>${currentStyleObj.name}</strong> (${intensity}%)
            </span>
          ` : ''}
        </div>

        <!-- Reset Color Grading Button -->
        <button type="button" class="btn btn-outline btn-xs btn-danger" id="btn-reset-colour-grading" style="font-size: 0.725rem; padding: 0.25rem 0.65rem;" title="Kembalikan seluruh parameter grading ke kondisi awal (Foto Asli)">
          🔄 RESET COLOR GRADING
        </button>
      </div>

      <!-- 3. BATCH THUMBNAIL SELECTOR (JIKA MULTI-FOTO DIUNGGAH) -->
      ${batchImages && batchImages.length > 1 ? `
        <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; margin-bottom: 0.85rem;">
          <span style="font-size: 0.75rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">
            📚 Batch Processing (${batchImages.length} Foto — Analisis &amp; Penyesuaian Adaptif Per-Foto):
          </span>
          <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.25rem;">
            ${batchImages.map((bImg, idx) => `
              <button 
                type="button" 
                class="batch-thumb-btn ${idx === activeBatchIndex ? 'active' : ''}" 
                data-batch-idx="${idx}" 
                style="border: 2px solid ${idx === activeBatchIndex ? '#ec4899' : 'rgba(255,255,255,0.1)'}; background: transparent; padding: 2px; border-radius: 4px; cursor: pointer;"
                title="Pilih Foto ${idx+1}"
              >
                <img src="${bImg.previewUrl}" style="width: 44px; height: 44px; object-fit: cover; border-radius: 2px; display: block;" alt="Foto ${idx+1}" />
              </button>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 4. MODE SELECTOR (AUTO | SELECT STYLE | CUSTOM STYLE) -->
      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
        <label style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem; margin-bottom: 0.5rem;">
          <span>🎛️</span>
          <span>1. PILIHAN MODE COLOR GRADING:</span>
        </label>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.5rem;">
          ${COLOUR_GRADING_MODES.map(m => `
            <button 
              type="button" 
              class="cg-mode-btn ${currentMode === m.id ? 'active' : ''}" 
              data-cg-mode="${m.id}" 
              style="display: flex; flex-direction: column; align-items: flex-start; text-align: left; padding: 0.65rem 0.85rem; border-radius: 6px; border: 1px solid ${currentMode === m.id ? '#ec4899' : 'rgba(255, 255, 255, 0.1)'}; background: ${currentMode === m.id ? 'rgba(236, 72, 153, 0.15)' : 'rgba(30, 41, 59, 0.4)'}; color: #f8fafc; cursor: pointer; transition: all 0.2s ease;"
            >
              <strong style="font-size: 0.825rem; color: ${currentMode === m.id ? '#f472b6' : '#f1f5f9'}; margin-bottom: 0.2rem;">
                ${m.label}
              </strong>
              <small style="font-size: 0.72rem; color: #94a3b8; line-height: 1.35;">
                ${m.description}
              </small>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- 5. SELECT STYLE SECTION (JIKA MODE === 'SELECT_STYLE') -->
      ${currentMode === 'SELECT_STYLE' ? `
        <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.4rem;">
            <label for="cg-style-select" style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
              <span>🎯</span>
              <span>2. TARGET VISUAL STYLE:</span>
            </label>
            <span style="font-size: 0.725rem; color: #f472b6; font-weight: 600;">
              Total ${ALL_COLOUR_GRADING_STYLES.length} Curated Styles
            </span>
          </div>

          <select id="cg-style-select" style="width: 100%; background: #0f172a; border: 1px solid rgba(236, 72, 153, 0.3); color: #f8fafc; padding: 0.55rem 0.75rem; border-radius: 6px; font-size: 0.825rem; margin-bottom: 0.5rem;">
            ${COLOUR_GRADING_CATEGORIES.map(cat => `
              <optgroup label="${cat.icon} ${cat.category}">
                ${cat.styles.map(s => `
                  <option value="${s.name}" ${selectedStyle === s.name ? 'selected' : ''}>
                    ${s.name}
                  </option>
                `).join('')}
              </optgroup>
            `).join('')}
          </select>

          <div id="cg-style-desc-box" style="background: rgba(236, 72, 153, 0.06); border-left: 3px solid #ec4899; padding: 0.6rem 0.85rem; border-radius: 4px; font-size: 0.8rem; color: #e2e8f0; line-height: 1.45;">
            <strong>${currentStyleObj.name}:</strong> ${currentStyleObj.description}
          </div>
          <small style="color: #94a3b8; display: block; margin-top: 0.4rem; font-size: 0.725rem;">
            💡 <em>Prinsip Style Adaptive Intelligence: AI menggunakan style ini sebagai target visual dan menghitung penyesuaian individual per-foto, bukan menerapkan preset angka statis.</em>
          </small>
        </div>
      ` : ''}

      <!-- 6. CUSTOM STYLE PARAMETERS (JIKA MODE === 'CUSTOM_STYLE') -->
      ${currentMode === 'CUSTOM_STYLE' ? `
        <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
          <label style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem; margin-bottom: 0.75rem;">
            <span>⚙️</span>
            <span>2. PARAMETER CUSTOM STYLE:</span>
          </label>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; margin-bottom: 0.85rem;">
            <!-- Warmth -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Warmth (Dingin / Hangat)</span>
                <span id="cg-val-warmth" style="color: #f472b6; font-weight: 600;">${custom.warmth || 0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-warmth" min="-100" max="100" value="${custom.warmth || 0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Tint -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Tint (Hijau / Magenta)</span>
                <span id="cg-val-tint" style="color: #f472b6; font-weight: 600;">${custom.tint || 0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-tint" min="-100" max="100" value="${custom.tint || 0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Contrast -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Contrast (Kontras)</span>
                <span id="cg-val-contrast" style="color: #f472b6; font-weight: 600;">${custom.contrast || 0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-contrast" min="-100" max="100" value="${custom.contrast || 0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Highlights -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Highlights</span>
                <span id="cg-val-highlights" style="color: #f472b6; font-weight: 600;">${custom.highlights || 0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-highlights" min="-100" max="100" value="${custom.highlights || 0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Shadows -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Shadows (Bayangan)</span>
                <span id="cg-val-shadows" style="color: #f472b6; font-weight: 600;">${custom.shadows || 0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-shadows" min="-100" max="100" value="${custom.shadows || 0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Vibrance -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Vibrance (Warna Cerdas)</span>
                <span id="cg-val-vibrance" style="color: #f472b6; font-weight: 600;">${custom.vibrance || 0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-vibrance" min="-100" max="100" value="${custom.vibrance || 0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Saturation -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Saturation (Saturasi)</span>
                <span id="cg-val-saturation" style="color: #f472b6; font-weight: 600;">${custom.saturation || 0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-saturation" min="-100" max="100" value="${custom.saturation || 0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Clarity -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Clarity (Mikro-Kontras)</span>
                <span id="cg-val-clarity" style="color: #f472b6; font-weight: 600;">${custom.clarity || 0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-clarity" min="-100" max="100" value="${custom.clarity || 0}" style="width: 100%; accent-color: #ec4899;" />
            </div>
          </div>

          <!-- Split Toning (Shadow Tone & Highlight Tone) -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem;">
            <div>
              <label for="cg-custom-shadow-tone" style="font-size: 0.75rem; color: #cbd5e1; display: block; margin-bottom: 0.25rem;">
                Shadow Tone (Rona Bayangan):
              </label>
              <select id="cg-custom-shadow-tone" style="width: 100%; background: #0f172a; border: 1px solid rgba(255,255,255,0.15); color: #f8fafc; padding: 0.45rem 0.65rem; border-radius: 4px; font-size: 0.8rem;">
                ${SHADOW_TONE_OPTIONS.map(opt => `
                  <option value="${opt.value}" ${custom.shadowTone === opt.value ? 'selected' : ''}>${opt.label}</option>
                `).join('')}
              </select>
            </div>
            <div>
              <label for="cg-custom-highlight-tone" style="font-size: 0.75rem; color: #cbd5e1; display: block; margin-bottom: 0.25rem;">
                Highlight Tone (Rona Highlight):
              </label>
              <select id="cg-custom-highlight-tone" style="width: 100%; background: #0f172a; border: 1px solid rgba(255,255,255,0.15); color: #f8fafc; padding: 0.45rem 0.65rem; border-radius: 4px; font-size: 0.8rem;">
                ${HIGHLIGHT_TONE_OPTIONS.map(opt => `
                  <option value="${opt.value}" ${custom.highlightTone === opt.value ? 'selected' : ''}>${opt.label}</option>
                `).join('')}
              </select>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- 7. COLOR GRADING INTENSITY CONTROL -->
      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem; flex-wrap: wrap; gap: 0.4rem;">
          <label for="cg-intensity-range" style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
            <span>⚡</span>
            <span>3. COLOR GRADING INTENSITY:</span>
          </label>
          <span id="cg-intensity-badge" style="font-size: 0.8rem; font-weight: 700; color: #f472b6; background: rgba(236, 72, 153, 0.15); border: 1px solid rgba(236, 72, 153, 0.3); padding: 0.15rem 0.55rem; border-radius: 4px;">
            ${intensity}%
          </span>
        </div>

        <input 
          type="range" 
          id="cg-intensity-range" 
          min="0" 
          max="100" 
          step="1" 
          value="${intensity}" 
          style="width: 100%; accent-color: #ec4899; margin-bottom: 0.5rem;" 
        />

        <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
          ${INTENSITY_LEVELS.map(lvl => `
            <button 
              type="button" 
              class="btn btn-xs ${intensity === lvl.value ? 'btn-primary' : 'btn-outline'}" 
              data-cg-intensity="${lvl.value}"
              style="font-size: 0.725rem; padding: 0.25rem 0.55rem;"
              title="${lvl.description}"
            >
              ${lvl.label}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- 8. INTELLIGENT PROTECTION SYSTEM -->
      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem; flex-wrap: wrap; gap: 0.4rem;">
          <label style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
            <span>🛡️</span>
            <span>4. INTELLIGENT PROTECTIONS (Pelindung Kualitas Foto Asli):</span>
          </label>
          <span style="font-size: 0.725rem; color: #4ade80;">Semua Proteksi Aktif</span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.45rem;">
          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" id="cg-prot-skin" ${protections.skinToneProtection !== false ? 'checked' : ''} style="accent-color: #ec4899;" />
            <span><strong>Skin Tone Protection</strong> (Rona Kulit Alami)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" id="cg-prot-hl" ${protections.highlightProtection !== false ? 'checked' : ''} style="accent-color: #ec4899;" />
            <span><strong>Highlight Protection</strong> (Anti-Blown/Clipping)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" id="cg-prot-sh" ${protections.shadowProtection !== false ? 'checked' : ''} style="accent-color: #ec4899;" />
            <span><strong>Shadow Protection</strong> (Anti-Crushed Blacks)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" id="cg-prot-oversat" ${protections.oversaturationProtection !== false ? 'checked' : ''} style="accent-color: #ec4899;" />
            <span><strong>Oversaturation Protection</strong> (Batas Gamut)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" id="cg-prot-clip" ${protections.clippingProtection !== false ? 'checked' : ''} style="accent-color: #ec4899;" />
            <span><strong>Clipping Protection</strong> (Safe RGB 0-255)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" id="cg-prot-natcolor" ${protections.naturalColorProtection !== false ? 'checked' : ''} style="accent-color: #ec4899;" />
            <span><strong>Natural Color Protection</strong> (Langit &amp; Daun)</span>
          </label>
        </div>
      </div>
    </div>
  `;

  return {
    html,
    bindEvents(container) {
      const panel = container.querySelector('#colour-grading-panel');
      if (!panel) return;

      // Mode Selection
      panel.querySelectorAll('.cg-mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const modeId = btn.getAttribute('data-cg-mode');
          if (onConfigChange && modeId !== currentMode) {
            onConfigChange({ ...cfg, mode: modeId });
          }
        });
      });

      // Style Selection
      const styleSelect = panel.querySelector('#cg-style-select');
      if (styleSelect) {
        styleSelect.addEventListener('change', (e) => {
          if (onConfigChange) {
            onConfigChange({ ...cfg, selectedStyle: e.target.value });
          }
        });
      }

      // Intensity Slider
      const intensitySlider = panel.querySelector('#cg-intensity-range');
      if (intensitySlider) {
        intensitySlider.addEventListener('input', (e) => {
          const val = Number(e.target.value);
          const badge = panel.querySelector('#cg-intensity-badge');
          if (badge) badge.textContent = `${val}%`;
          if (onConfigChange) {
            onConfigChange({ ...cfg, intensity: val });
          }
        });
      }

      // Intensity Preset Buttons
      panel.querySelectorAll('[data-cg-intensity]').forEach(btn => {
        btn.addEventListener('click', () => {
          const val = Number(btn.getAttribute('data-cg-intensity'));
          if (onConfigChange) {
            onConfigChange({ ...cfg, intensity: val });
          }
        });
      });

      // Reset Colour Grading Button
      const resetGradingBtn = panel.querySelector('#btn-reset-colour-grading');
      if (resetGradingBtn) {
        resetGradingBtn.addEventListener('click', () => {
          if (onResetGrading) {
            onResetGrading();
          } else if (onConfigChange) {
            onConfigChange({
              ...cfg,
              mode: 'AUTO',
              selectedStyle: 'Natural Vibrant',
              intensity: 50,
              custom: {
                warmth: 0,
                tint: 0,
                contrast: 0,
                highlights: 0,
                shadows: 0,
                saturation: 0,
                vibrance: 0,
                clarity: 0,
                colorIntensity: 0,
                shadowTone: 'Neutral',
                highlightTone: 'Neutral'
              }
            });
          }
        });
      }

      // Custom Sliders
      const customSliders = [
        'warmth', 'tint', 'contrast', 'highlights', 'shadows', 'saturation', 'vibrance', 'clarity'
      ];
      customSliders.forEach(param => {
        const slider = panel.querySelector(`#cg-custom-${param}`);
        if (slider) {
          slider.addEventListener('input', (e) => {
            const val = Number(e.target.value);
            const valSpan = panel.querySelector(`#cg-val-${param}`);
            if (valSpan) valSpan.textContent = val;
            if (onConfigChange) {
              onConfigChange({
                ...cfg,
                custom: {
                  ...cfg.custom,
                  [param]: val
                }
              });
            }
          });
        }
      });

      // Custom Tone Selects
      const shadowToneSelect = panel.querySelector('#cg-custom-shadow-tone');
      if (shadowToneSelect) {
        shadowToneSelect.addEventListener('change', (e) => {
          if (onConfigChange) {
            onConfigChange({
              ...cfg,
              custom: { ...cfg.custom, shadowTone: e.target.value }
            });
          }
        });
      }
      const highlightToneSelect = panel.querySelector('#cg-custom-highlight-tone');
      if (highlightToneSelect) {
        highlightToneSelect.addEventListener('change', (e) => {
          if (onConfigChange) {
            onConfigChange({
              ...cfg,
              custom: { ...cfg.custom, highlightTone: e.target.value }
            });
          }
        });
      }

      // Protections Checkboxes
      const protCheckboxes = [
        { id: '#cg-prot-skin', prop: 'skinToneProtection' },
        { id: '#cg-prot-hl', prop: 'highlightProtection' },
        { id: '#cg-prot-sh', prop: 'shadowProtection' },
        { id: '#cg-prot-oversat', prop: 'oversaturationProtection' },
        { id: '#cg-prot-clip', prop: 'clippingProtection' },
        { id: '#cg-prot-natcolor', prop: 'naturalColorProtection' }
      ];
      protCheckboxes.forEach(({ id, prop }) => {
        const cb = panel.querySelector(id);
        if (cb) {
          cb.addEventListener('change', (e) => {
            if (onConfigChange) {
              onConfigChange({
                ...cfg,
                protections: {
                  ...cfg.protections,
                  [prop]: e.target.checked
                }
              });
            }
          });
        }
      });

      // Batch Thumbnails
      panel.querySelectorAll('[data-batch-idx]').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = Number(btn.getAttribute('data-batch-idx'));
          if (onSelectBatchImage) {
            onSelectBatchImage(idx);
          }
        });
      });
    }
  };
}
