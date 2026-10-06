/**
 * ColourGradingPanel Component (V3.6)
 * Khusus untuk Tab "🎨 COLOUR GRADING"
 * 
 * Performance & UI Enhancement:
 * - ZERO Permanent Description Box (No wasted vertical space)
 * - Dynamic Floating Tooltip on Hover & Keyboard Focus per Style
 * - Custom Dropdown / Listbox with Search & Category Grouping
 * - Full Style Descriptions for all 38 Curated Styles + Custom Style
 * - ZERO Preview Canvas Rendering (High performance)
 * - 100% Non-Destructive Image Protection (Foto Asli = Source of Truth)
 * - 3 Mode: AUTO, SELECT STYLE, CUSTOM STYLE
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
    category: 'Target Visual',
    categoryIcon: '🎯',
    description: 'Arah visual colour grading adaptif.'
  };

  const html = `
    <div class="colour-grading-panel" id="colour-grading-panel" style="margin-top: 1rem; margin-bottom: 1.25rem;">
      <!-- FLOATING POPOVER TOOLTIP (Zero permanent layout space, follows hovered / focused Style) -->
      <div 
        id="cg-style-tooltip" 
        class="cg-style-tooltip" 
        role="tooltip" 
        aria-hidden="true" 
        style="display: none; position: fixed; z-index: 999999; max-width: 330px; background: rgba(15, 23, 42, 0.98); border: 1px solid #f472b6; border-radius: 6px; padding: 0.65rem 0.85rem; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.85), 0 0 15px rgba(236, 72, 153, 0.25); pointer-events: none; backdrop-filter: blur(8px); transition: opacity 0.12s ease; opacity: 0;"
      >
        <div id="cg-tooltip-title" style="font-weight: 700; color: #f472b6; font-size: 0.825rem; margin-bottom: 0.15rem;"></div>
        <div id="cg-tooltip-cat" style="font-size: 0.68rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.35rem;"></div>
        <div id="cg-tooltip-desc" style="font-size: 0.775rem; color: #f1f5f9; line-height: 1.45;"></div>
      </div>

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
              Target: <strong>${selectedStyle}</strong> (${intensity}%)
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
              ${m.id === 'CUSTOM_STYLE' ? 'data-style-name="Custom Style"' : ''}
              tabindex="0"
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
            <label id="cg-style-label" style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
              <span>🎯</span>
              <span>2. TARGET VISUAL STYLE:</span>
            </label>
            <span style="font-size: 0.725rem; color: #f472b6; font-weight: 600;">
              Total ${ALL_COLOUR_GRADING_STYLES.length} Curated Styles
            </span>
          </div>

          <!-- CUSTOM DROPDOWN / LISTBOX WITH HOVER/FOCUS TOOLTIPS -->
          <div class="cg-custom-dropdown" id="cg-custom-dropdown" style="position: relative; width: 100%;">
            <!-- Trigger Button: Hanya menampilkan Style Name (Bersih, Tidak Memakan Ruang) -->
            <button 
              type="button" 
              id="cg-style-dropdown-btn" 
              class="cg-style-dropdown-btn" 
              aria-haspopup="listbox" 
              aria-expanded="false" 
              aria-labelledby="cg-style-label" 
              data-style-name="${selectedStyle}"
              tabindex="0"
              style="width: 100%; display: flex; justify-content: space-between; align-items: center; background: #0f172a; border: 1px solid rgba(236, 72, 153, 0.35); color: #f8fafc; padding: 0.6rem 0.85rem; border-radius: 6px; font-size: 0.825rem; cursor: pointer; text-align: left; transition: all 0.2s ease;"
            >
              <span style="display: flex; align-items: center; gap: 0.45rem;">
                <span style="font-size: 0.95rem;">${currentStyleObj.categoryIcon || '🎯'}</span>
                <strong style="color: #fce7f3; font-size: 0.825rem;">${selectedStyle}</strong>
                <span style="font-size: 0.72rem; color: #94a3b8; margin-left: 0.25rem;">(${currentStyleObj.category || 'Target Visual'})</span>
              </span>
              <span id="cg-dropdown-arrow" style="font-size: 0.75rem; color: #f472b6; transition: transform 0.2s ease;">▼</span>
            </button>

            <!-- Hidden Standard Select Element (Dukungan Kompatibilitas Form & Test) -->
            <select id="cg-style-select" style="display: none;" aria-hidden="true" tabindex="-1">
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

            <!-- Custom Listbox Dropdown Menu (Grouped by Category) -->
            <div 
              id="cg-style-menu" 
              class="cg-style-menu" 
              role="listbox" 
              aria-labelledby="cg-style-label" 
              style="display: none; position: absolute; top: calc(100% + 4px); left: 0; right: 0; max-height: 290px; overflow-y: auto; background: #090d16; border: 1px solid rgba(236, 72, 153, 0.4); border-radius: 6px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.85); z-index: 1000; padding: 0.35rem 0;"
            >
              <!-- Search Filter Input -->
              <div style="padding: 0.4rem 0.65rem; border-bottom: 1px solid rgba(255, 255, 255, 0.08); position: sticky; top: 0; background: #090d16; z-index: 2;">
                <input 
                  type="text" 
                  id="cg-style-search" 
                  placeholder="🔍 Cari Style visual (misal: Film, Warm, Moody, Clean)..." 
                  style="width: 100%; background: #0f172a; border: 1px solid rgba(255, 255, 255, 0.15); color: #f8fafc; padding: 0.35rem 0.65rem; border-radius: 4px; font-size: 0.775rem; outline: none;"
                />
              </div>

              <!-- Listbox Options Container -->
              <div id="cg-style-list-items">
                ${COLOUR_GRADING_CATEGORIES.map(cat => `
                  <div class="cg-category-group" data-cat-name="${cat.category}" style="padding: 0.25rem 0;">
                    <div style="padding: 0.25rem 0.75rem; font-size: 0.68rem; font-weight: 700; color: #f472b6; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; gap: 0.35rem; background: rgba(236, 72, 153, 0.06);">
                      <span>${cat.icon}</span>
                      <span>${cat.category}</span>
                    </div>
                    ${cat.styles.map(s => {
                      const isSelected = selectedStyle === s.name;
                      return `
                        <div 
                          class="cg-style-item ${isSelected ? 'selected' : ''}" 
                          role="option" 
                          aria-selected="${isSelected}" 
                          data-style-name="${s.name}" 
                          tabindex="0" 
                          style="padding: 0.45rem 0.85rem; font-size: 0.8rem; color: ${isSelected ? '#f472b6' : '#e2e8f0'}; background: ${isSelected ? 'rgba(236, 72, 153, 0.15)' : 'transparent'}; cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: all 0.15s ease;"
                        >
                          <span>${s.name}</span>
                          ${isSelected ? '<span style="font-size: 0.75rem; color: #f472b6; font-weight: 700;">✓</span>' : ''}
                        </div>
                      `;
                    }).join('')}
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <small style="color: #94a3b8; display: block; margin-top: 0.45rem; font-size: 0.725rem;">
            💡 <em>Arahkan kursor atau fokus keyboard ke nama Style untuk melihat deskripsi visual target.</em>
          </small>
        </div>
      ` : ''}

      <!-- 6. CUSTOM STYLE PARAMETERS (JIKA MODE === 'CUSTOM_STYLE') -->
      ${currentMode === 'CUSTOM_STYLE' ? `
        <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.4rem;">
            <label style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
              <span>⚙️</span>
              <span>2. PARAMETER CUSTOM STYLE:</span>
            </label>
            <span 
              class="cg-custom-style-info"
              data-style-name="Custom Style" 
              tabindex="0"
              style="font-size: 0.725rem; color: #f472b6; cursor: help; border-bottom: 1px dashed rgba(244, 114, 182, 0.6); padding-bottom: 1px;"
              title="Arahkan kursor untuk info Custom Style"
            >
              ℹ️ Info Custom Style
            </span>
          </div>

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

      // Tooltip elements & functions
      const tooltip = panel.querySelector('#cg-style-tooltip');
      const tipTitle = panel.querySelector('#cg-tooltip-title');
      const tipCat = panel.querySelector('#cg-tooltip-cat');
      const tipDesc = panel.querySelector('#cg-tooltip-desc');

      const showTooltip = (targetEl, styleName) => {
        if (!tooltip || !targetEl) return;
        const name = styleName || targetEl.getAttribute('data-style-name');
        if (!name) return;

        const styleObj = ALL_COLOUR_GRADING_STYLES.find(
          s => s.name.toLowerCase() === name.toLowerCase()
        ) || {
          name,
          category: 'Target Visual',
          categoryIcon: '🎯',
          description: 'Arah visual colour grading adaptif.'
        };

        if (tipTitle) tipTitle.textContent = styleObj.name;
        if (tipCat) tipCat.textContent = `${styleObj.categoryIcon || '🎯'} ${styleObj.category || ''}`;
        if (tipDesc) tipDesc.textContent = styleObj.description;

        tooltip.style.display = 'block';
        tooltip.style.opacity = '1';
        tooltip.setAttribute('aria-hidden', 'false');

        // Smart positioning relative to target element and viewport
        const rect = targetEl.getBoundingClientRect();
        const tipRect = tooltip.getBoundingClientRect();

        let top = rect.top + (rect.height / 2) - (tipRect.height / 2);
        let left = rect.right + 12;

        // Check if tooltip overflows viewport on the right
        if (left + tipRect.width > window.innerWidth - 12) {
          left = rect.left - tipRect.width - 12;
        }
        // If still overflowing on the left, place below or above
        if (left < 12) {
          left = Math.max(12, Math.min(window.innerWidth - tipRect.width - 12, rect.left));
          top = rect.bottom + 8;
        }
        // Viewport vertical clamping
        if (top < 12) top = 12;
        if (top + tipRect.height > window.innerHeight - 12) {
          top = window.innerHeight - tipRect.height - 12;
        }

        tooltip.style.top = `${Math.round(top)}px`;
        tooltip.style.left = `${Math.round(left)}px`;
      };

      const hideTooltip = () => {
        if (tooltip) {
          tooltip.style.opacity = '0';
          tooltip.style.display = 'none';
          tooltip.setAttribute('aria-hidden', 'true');
        }
      };

      // Helper to bind tooltip to an element on mouse hover and keyboard focus
      const attachTooltipEvents = (el, styleName) => {
        if (!el) return;
        el.addEventListener('mouseenter', () => showTooltip(el, styleName));
        el.addEventListener('mouseleave', hideTooltip);
        el.addEventListener('focus', () => showTooltip(el, styleName));
        el.addEventListener('blur', hideTooltip);
      };

      // Custom Dropdown & Listbox Elements
      const dropdownBtn = panel.querySelector('#cg-style-dropdown-btn');
      const dropdownMenu = panel.querySelector('#cg-style-menu');
      const dropdownArrow = panel.querySelector('#cg-dropdown-arrow');
      const searchInput = panel.querySelector('#cg-style-search');
      const hiddenSelect = panel.querySelector('#cg-style-select');

      let isDropdownOpen = false;

      const openDropdown = () => {
        if (!dropdownMenu) return;
        isDropdownOpen = true;
        dropdownMenu.style.display = 'block';
        if (dropdownBtn) dropdownBtn.setAttribute('aria-expanded', 'true');
        if (dropdownArrow) dropdownArrow.style.transform = 'rotate(180deg)';
        if (searchInput) {
          searchInput.value = '';
          filterItems('');
          setTimeout(() => searchInput.focus(), 50);
        }
      };

      const closeDropdown = () => {
        if (!dropdownMenu) return;
        isDropdownOpen = false;
        dropdownMenu.style.display = 'none';
        if (dropdownBtn) dropdownBtn.setAttribute('aria-expanded', 'false');
        if (dropdownArrow) dropdownArrow.style.transform = 'rotate(0deg)';
        hideTooltip();
      };

      const toggleDropdown = () => {
        if (isDropdownOpen) closeDropdown();
        else openDropdown();
      };

      // Search filter function
      function filterItems(query) {
        const q = (query || '').toLowerCase().trim();
        panel.querySelectorAll('.cg-category-group').forEach(group => {
          let hasVisible = false;
          group.querySelectorAll('.cg-style-item').forEach(item => {
            const sName = (item.getAttribute('data-style-name') || '').toLowerCase();
            if (!q || sName.includes(q)) {
              item.style.display = 'flex';
              hasVisible = true;
            } else {
              item.style.display = 'none';
            }
          });
          group.style.display = hasVisible ? 'block' : 'none';
        });
      }

      if (dropdownBtn) {
        dropdownBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleDropdown();
        });

        // Hover & focus on trigger button shows currently selected style description
        attachTooltipEvents(dropdownBtn, selectedStyle);

        dropdownBtn.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openDropdown();
          } else if (e.key === 'Escape') {
            closeDropdown();
          }
        });
      }

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          filterItems(e.target.value);
        });
        searchInput.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            closeDropdown();
            if (dropdownBtn) dropdownBtn.focus();
          } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const firstItem = panel.querySelector('.cg-style-item:not([style*="display: none"])');
            if (firstItem) firstItem.focus();
          }
        });
      }

      // Close dropdown when clicking outside
      const onDocumentClick = (e) => {
        if (isDropdownOpen && !panel.querySelector('#cg-custom-dropdown')?.contains(e.target)) {
          closeDropdown();
        }
      };
      document.addEventListener('click', onDocumentClick);

      // Bind all .cg-style-item options
      panel.querySelectorAll('.cg-style-item').forEach(item => {
        const sName = item.getAttribute('data-style-name');
        
        // Tooltip on hover & focus
        attachTooltipEvents(item, sName);

        // Click to select
        item.addEventListener('click', () => {
          if (onConfigChange && sName) {
            onConfigChange({ ...cfg, selectedStyle: sName });
          }
          if (hiddenSelect) {
            hiddenSelect.value = sName;
          }
          closeDropdown();
          if (dropdownBtn) dropdownBtn.focus();
        });

        // Keyboard navigation inside listbox
        item.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            item.click();
          } else if (e.key === 'Escape') {
            e.preventDefault();
            closeDropdown();
            if (dropdownBtn) dropdownBtn.focus();
          } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const allVisible = Array.from(panel.querySelectorAll('.cg-style-item:not([style*="display: none"])'));
            const idx = allVisible.indexOf(item);
            if (idx >= 0 && idx < allVisible.length - 1) {
              allVisible[idx + 1].focus();
            }
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const allVisible = Array.from(panel.querySelectorAll('.cg-style-item:not([style*="display: none"])'));
            const idx = allVisible.indexOf(item);
            if (idx > 0) {
              allVisible[idx - 1].focus();
            } else if (searchInput) {
              searchInput.focus();
            }
          }
        });
      });

      // Bind hidden select for programmatic change or fallback tests
      if (hiddenSelect) {
        hiddenSelect.addEventListener('change', (e) => {
          if (onConfigChange) {
            onConfigChange({ ...cfg, selectedStyle: e.target.value });
          }
        });
      }

      // Attach tooltip for Custom Style elements
      const customStyleInfoBtn = panel.querySelector('.cg-custom-style-info');
      if (customStyleInfoBtn) {
        attachTooltipEvents(customStyleInfoBtn, 'Custom Style');
      }

      const customModeBtn = panel.querySelector('.cg-mode-btn[data-cg-mode="CUSTOM_STYLE"]');
      if (customModeBtn) {
        attachTooltipEvents(customModeBtn, 'Custom Style');
      }

      // Mode Selection
      panel.querySelectorAll('.cg-mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const modeId = btn.getAttribute('data-cg-mode');
          if (onConfigChange && modeId !== currentMode) {
            onConfigChange({ ...cfg, mode: modeId });
          }
        });
      });

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
