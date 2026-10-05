/**
 * AnalyzerPage Component V3.3.1
 * Tampilan utama Analyzer yang menggabungkan seluruh komponen alur kerja terpadu.
 * Mendukung 3 Mode: Analisa Prompt, Analisa Gambar → Prompt, dan Analisa Shorthand Perbaikan Gambar.
 */

import { renderPromptInput } from './PromptInput.js';
import { renderConflictBanner } from './ConflictBanner.js';
import { renderPromptOptimal } from './PromptOptimal.js';
import { renderSemanticIntent } from './SemanticIntent.js';
import { renderEditAreas } from './EditAreas.js';
import { renderLockedAreas } from './LockedAreas.js';
import { renderVisualTransformation } from './VisualTransformation.js';
import { renderShorthandRecommendations } from './ShorthandRecommendations.js';
import { renderSimilarShorthands } from './SimilarShorthands.js';
import { renderExcludedShorthands } from './ExcludedShorthands.js';

export function renderAnalyzerPage({
  analysisResult,
  currentPrompt,
  catalog,
  isAnalyzing,
  isOnlineActive = false,
  isEnriching = false,
  activeMode = 'ANALISA_PROMPT',
  uploadedImage = null,
  onModeChange,
  onImageSelected,
  onImageRemoved,
  onAnalyze,
  onReset,
  onClear,
  onSelectPreset,
  onCopyPrompt,
  onCopyGeneratedPrompt,
  onEnrichPrompt,
  onAddShorthand,
  onRemoveShorthand,
  onToggleRecommendation,
  onResolveConflict,
  selectedAspectRatio = 'auto',
  onAspectRatioChange
}) {
  const {
    optimalPrompt = '',
    generatedPrompt = '',
    visualBreakdown = null,
    isImageRepair = false,
    visualConditionSummary = '',
    optimizationAreas = [],
    goodAspects = [],
    diagnosedShorthands = [],
    installedShorthands = [],
    conflicts = [],
    intent = {},
    editAreas = [],
    lockedAreas = [],
    unchangedAreas = [],
    visualTransformation = {},
    primaryShorthands = [],
    relatedShorthands = [],
    similarShorthands = [],
    recommendations = [],
    exclusions = []
  } = analysisResult || {};

  function renderPriorityBadge(priority) {
    switch (priority) {
      case 'PRIMARY_ISSUE':
        return '<span class="badge badge-red" style="font-size: 0.72rem; font-weight: 700;">🔴 Masalah Utama</span>';
      case 'SECONDARY_ISSUE':
        return '<span class="badge badge-amber" style="font-size: 0.72rem; font-weight: 700;">🟠 Masalah Sekunder</span>';
      case 'OPTIMIZATION':
        return '<span class="badge badge-blue" style="font-size: 0.72rem; font-weight: 700;">🔵 Peningkatan Tambahan</span>';
      case 'PRESERVATION':
        return '<span class="badge badge-green" style="font-size: 0.72rem; font-weight: 700;">🟢 Preservasi Detail/Tekstur</span>';
      case 'FINISHING':
        return '<span class="badge badge-purple" style="font-size: 0.72rem; font-weight: 700;">🟣 Sentuhan Akhir Alami</span>';
      default:
        return '<span class="badge badge-blue" style="font-size: 0.72rem;">Optimasi</span>';
    }
  }

  // Sub-components
  const promptInputComp = renderPromptInput({
    currentValue: currentPrompt,
    onAnalyze,
    onReset,
    onClear,
    onSelectPreset,
    isAnalyzing,
    isOnlineActive,
    activeMode,
    onModeChange,
    uploadedImage,
    onImageSelected,
    onImageRemoved,
    selectedAspectRatio,
    onAspectRatioChange
  });

  const conflictBannerComp = renderConflictBanner(conflicts, onResolveConflict, activeMode);

  const promptOptimalComp = renderPromptOptimal({
    optimalPrompt,
    installedShorthands,
    catalog,
    isOnlineActive,
    isEnriching,
    onCopyPrompt,
    onEnrichPrompt,
    onRemoveShorthand,
    onAddShorthand
  });

  const semanticIntentComp = renderSemanticIntent(intent);
  const editAreasComp = renderEditAreas(editAreas);
  const lockedAreasComp = renderLockedAreas(lockedAreas, unchangedAreas);
  const visualTransformComp = renderVisualTransformation(visualTransformation);

  const recommendationsComp = renderShorthandRecommendations({
    primaryShorthands,
    relatedShorthands,
    recommendations,
    installedShorthands,
    activeMode,
    onToggleShorthand: onToggleRecommendation
  });

  const similarShorthandsComp = renderSimilarShorthands(
    similarShorthands,
    installedShorthands,
    onToggleRecommendation
  );

  const exclusionsComp = renderExcludedShorthands(exclusions, activeMode);

  // =========================================================================
  // CASE A: MODE 2 & MODE 2 DUNIA - ANALISA GAMBAR -> PROMPT (BLUEPRINT FINAL PIPELINE)
  // =========================================================================
  if (activeMode === 'IMAGE_TO_PROMPT' || activeMode === 'TWO_WORLDS') {
    // Blueprint Requirement 9:
    // Jika belum ada gambar / belum dianalisis: tampilkan HANYA kartu input gambar.
    if (!generatedPrompt) {
      return {
        html: `
          <div class="analyzer-stream-container">
            ${promptInputComp.html}
          </div>
        `,
        bindEvents(container) {
          promptInputComp.bindEvents(container);
        }
      };
    }

    // Blueprint Final Single Pipeline (Strict Sequential Order):
    // 1. INPUT GAMBAR
    // 2. PROMPT HASIL ANALISIS GAMBAR (Prompt deskriptif + Rincian 13 atribut visual)
    // 3. PROMPT OPTIMAL
    // 4. MAKSUD PROMPT
    // 5. AREA YANG DIUBAH vs AREA YANG DIPERTAHANKAN / LOCKED
    // 6. TRANSFORMASI VISUAL FROM -> TO
    // 7. SHORTHAND ANALYSIS (5 Kelompok Terpisah)
    const mode2Html = `
      <div class="analyzer-stream-container">
        <!-- 1. INPUT GAMBAR -->
        ${promptInputComp.html}

        <!-- 2. PROMPT HASIL ANALISIS GAMBAR -->
        <section class="panel analyzer-card card-generated-image-prompt" id="card-generated-image-prompt">
          <div class="card-header">
            <div class="card-title">
              <svg class="icon" viewBox="0 0 24 24" style="color: #38bdf8;"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/></svg>
              <h2 style="color: #38bdf8;">
                ${activeMode === 'TWO_WORLDS' ? 'PROMPT HASIL ANALISA 2 DUNIA' : 'PROMPT HASIL ANALISA GAMBAR'}
              </h2>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              ${activeMode === 'TWO_WORLDS' ? `<span class="badge badge-purple" style="background: rgba(168, 85, 247, 0.15); border: 1px solid #c084fc; color: #c084fc;">🌐 Mode 2 Dunia</span>` : ''}
              ${analysisResult?.source === 'GEMINI_AI' 
                ? `<span class="badge badge-blue" style="background: rgba(14, 165, 233, 0.15); border: 1px solid #38bdf8; color: #38bdf8;">🌐 Vision AI Aktif (${analysisResult.imageInfo?.name || 'Gambar Aktual'})</span>`
                : `<span class="badge badge-blue">🤖 Source of Truth Visual</span>`}
              <button type="button" class="btn btn-outline btn-xs" id="btn-copy-generated-prompt" title="Salin teks deskriptif hasil analisa visual gambar">
                <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                Salin Prompt Analisa
              </button>
            </div>
          </div>
          <div class="generated-prompt-display-box">
            <p class="font-mono" style="margin: 0; line-height: 1.6; color: #f1f5f9; font-size: 0.925rem; white-space: pre-wrap;">
              ${generatedPrompt}
            </p>
          </div>
          ${visualBreakdown ? `
            <div style="margin-top: 1rem;">
              <h3 style="font-size: 0.85rem; font-weight: 700; color: #38bdf8; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
                <span>📋</span> Rincian 13 Atribut Visual Gambar Aktual:
              </h3>
              <div class="visual-breakdown-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.55rem; font-size: 0.825rem;">
                ${Object.entries(visualBreakdown).map(([k, v], idx) => `
                  <div style="background: rgba(15, 23, 42, 0.7); padding: 0.55rem 0.75rem; border-radius: 8px; border: 1px solid rgba(56, 189, 248, 0.2); display: flex; flex-direction: column; gap: 0.2rem;">
                    <strong style="color: #38bdf8; font-size: 0.8rem;">${idx + 1}. ${k}</strong>
                    <span style="color: #f1f5f9; font-size: 0.8rem; line-height: 1.4;">${v}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </section>

        <!-- 3. PROMPT OPTIMAL -->
        ${promptOptimalComp.html}

        <!-- 4. MAKSUD PROMPT -->
        ${semanticIntentComp.html}

        <!-- 5. AREA YANG DIUBAH vs AREA YANG DIPERTAHANKAN / LOCKED -->
        <div class="grid-2">
          ${editAreasComp.html}
          ${lockedAreasComp.html}
        </div>

        <!-- 6. TRANSFORMASI VISUAL FROM -> TO -->
        ${visualTransformComp.html}

        <!-- 7. SHORTHAND ANALYSIS (5 Kelompok Terpisah Sesuai Blueprint) -->
        <!-- A & B. Shorthand Utama & Shorthand Berhubungan -->
        ${recommendationsComp.html}

        <!-- C. Shorthand Alternatif / Serupa -->
        ${similarShorthandsComp.html}

        <!-- D. Shorthand Konflik -->
        ${conflictBannerComp.html}

        <!-- E. Shorthand Tidak Diperlukan (Dikecualikan) -->
        ${exclusionsComp.html}
      </div>
    `;

    return {
      html: mode2Html,
      bindEvents(container) {
        promptInputComp.bindEvents(container);
        promptOptimalComp.bindEvents(container);
        recommendationsComp.bindEvents(container);
        similarShorthandsComp.bindEvents(container);
        conflictBannerComp.bindEvents(container);
        exclusionsComp.bindEvents(container);

        const copyGenBtn = container.querySelector('#btn-copy-generated-prompt');
        if (copyGenBtn) {
          copyGenBtn.addEventListener('click', () => {
            if (onCopyGeneratedPrompt) {
              onCopyGeneratedPrompt(generatedPrompt);
            }
          });
        }
      }
    };
  }

  // =========================================================================
  // CASE B: MODE 1 (ANALISA_PROMPT) & MODE 3 (SHORTHAND_IMPROVE)
  // (100% Mempertahankan Perilaku Asli yang Berjalan)
  // =========================================================================

  const html = `
    <div class="analyzer-stream-container">
      <!-- 1. Input & Presets Card -->
      ${promptInputComp.html}

      <!-- MODE 3 SPECIFIC: DIAGNOSIS & REKOMENDASI PERBAIKAN GAMBAR CARD -->
      ${(activeMode === 'SHORTHAND_IMPROVE' && isImageRepair) ? `
        <section class="panel analyzer-card card-repair-diagnosis" id="card-repair-diagnosis">
          <div class="card-header">
            <div class="card-title">
              <svg class="icon" viewBox="0 0 24 24" style="color: #c084fc;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              <h2 style="color: #c084fc;">🛠️ DIAGNOSIS &amp; REKOMENDASI PERBAIKAN GAMBAR</h2>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              <span class="badge badge-purple">🔍 Diagnosis Visual Komprehensif</span>
              <span class="badge badge-blue">⚡ ${diagnosedShorthands.length} Shorthand (UNLIMITED)</span>
            </div>
          </div>

          <!-- 1. Ringkasan Kondisi Visual Gambar -->
          <div style="margin-bottom: 1.15rem;">
            <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
              <span>📷</span> Ringkasan Kondisi Visual Gambar:
            </h3>
            <div style="background: rgba(168, 85, 247, 0.08); border-left: 3px solid #c084fc; border-radius: 4px; padding: 0.75rem 0.95rem; color: #f1f5f9; font-size: 0.875rem; line-height: 1.6;">
              ${visualConditionSummary}
            </div>
          </div>

          <!-- 2. Area yang Membutuhkan Optimasi -->
          <div style="margin-bottom: 1.15rem;">
            <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
              <span>⚠️</span> Area yang Membutuhkan Optimasi (${optimizationAreas.length} Teridentifikasi):
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.65rem;">
              ${optimizationAreas.map((area, idx) => `
                <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 0.75rem 0.85rem;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem; gap: 0.5rem;">
                    <strong style="color: #f8fafc; font-size: 0.825rem;">${idx + 1}. ${area.aspect}</strong>
                    ${renderPriorityBadge(area.priority)}
                  </div>
                  <p style="color: #cbd5e1; font-size: 0.8rem; margin: 0 0 0.4rem 0; line-height: 1.45;">
                    ${area.problem}
                  </p>
                  <div style="color: #38bdf8; font-size: 0.75rem; display: flex; align-items: center; gap: 0.25rem;">
                    <span>➔ Tindakan:</span> <span>${area.suggestedAction}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- 3. Aspek yang Sudah Baik -->
          ${goodAspects && goodAspects.length > 0 ? `
            <div style="margin-bottom: 1.15rem;">
              <h3 style="font-size: 0.825rem; font-weight: 700; color: #4ade80; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
                <span>✅</span> Aspek yang Dinilai Sudah Baik / Optimal:
              </h3>
              <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 8px; padding: 0.75rem 0.95rem;">
                <ul style="margin: 0; padding-left: 1.2rem; color: #bbf7d0; font-size: 0.825rem; line-height: 1.6;">
                  ${goodAspects.map(aspect => `<li>${aspect}</li>`).join('')}
                </ul>
                <small style="color: #86efac; display: block; margin-top: 0.4rem; font-size: 0.75rem;">
                  💡 <em>Catatan: Aspek visual di atas sudah optimal pada foto asli, sehingga sistem secara cerdas tidak memunculkan shorthand yang tidak diperlukan untuk menjaga keaslian.</em>
                </small>
              </div>
            </div>
          ` : ''}

          <!-- 4. Rekomendasi Shorthand Perbaikan (UNLIMITED) -->
          <div style="margin-bottom: 0.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem; flex-wrap: wrap; gap: 0.5rem;">
              <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin: 0; display: flex; align-items: center; gap: 0.35rem;">
                <span>🎯</span> Rekomendasi Shorthand Perbaikan (${diagnosedShorthands.length} Shorthand Tanpa Batasan):
              </h3>
              <span style="font-size: 0.725rem; color: var(--text-muted);">Urutan: Masalah Utama ➔ Sekunder ➔ Peningkatan ➔ Preservasi ➔ Finishing</span>
            </div>
            <div class="repair-shorthands-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.65rem;">
              ${diagnosedShorthands.map(sh => `
                <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(168, 85, 247, 0.25); border-radius: 8px; padding: 0.75rem 0.85rem; display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
                      <code style="background: #0f172a; color: #a855f7; font-weight: 700; padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.85rem;">
                        ${sh.code}
                      </code>
                      ${renderPriorityBadge(sh.issuePriority)}
                    </div>
                    <div style="font-weight: 600; color: #f1f5f9; font-size: 0.825rem; margin-bottom: 0.25rem;">
                      ${sh.name}
                    </div>
                    <p style="color: #94a3b8; font-size: 0.775rem; margin: 0 0 0.45rem 0; line-height: 1.4;">
                      ${sh.reason}
                    </p>
                  </div>
                  <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.725rem; color: #64748b; border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 0.4rem; margin-top: 0.25rem;">
                    <span>Grup: <strong style="color: #cbd5e1;">${sh.functionGroup}</strong></span>
                    <span class="badge badge-outline" style="font-size: 0.675rem; color: #a855f7; border-color: rgba(168, 85, 247, 0.4);">TERPASANG</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      ` : ''}

      <!-- 2. Prompt Optimal & Installed Shorthands (Prominent Highlight) -->
      ${promptOptimalComp.html}

      <!-- 3. Card A: Maksud Prompt -->
      ${semanticIntentComp.html}

      <!-- 4. Cards B & C: Area yang Diubah vs Area yang Dikunci (Side-by-side grid on desktop) -->
      <div class="grid-2">
        ${editAreasComp.html}
        ${lockedAreasComp.html}
      </div>

      <!-- 5. Card D: Transformasi Visual FROM -> TO -->
      ${visualTransformComp.html}

      <!-- 6. Card E & F: Shorthand Utama & Shorthand Berhubungan -->
      ${recommendationsComp.html}

      <!-- 7. Card G: Shorthand Konflik -->
      ${conflictBannerComp.html}

      <!-- 8. Card H: Shorthand Tidak Diperlukan (Dikecualikan) -->
      ${exclusionsComp.html}
    </div>
  `;

  return {
    html,
    bindEvents(container) {
      promptInputComp.bindEvents(container);
      promptOptimalComp.bindEvents(container);
      recommendationsComp.bindEvents(container);
      conflictBannerComp.bindEvents(container);
      exclusionsComp.bindEvents(container);

      const copyGenBtn = container.querySelector('#btn-copy-generated-prompt');
      if (copyGenBtn) {
        copyGenBtn.addEventListener('click', () => {
          if (onCopyGeneratedPrompt) {
            onCopyGeneratedPrompt(generatedPrompt);
          }
        });
      }
    }
  };
}
