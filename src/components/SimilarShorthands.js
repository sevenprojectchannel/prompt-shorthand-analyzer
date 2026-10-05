/**
 * SimilarShorthands Component V3.3.1
 * Menampilkan Card C: SHORTHAND ALTERNATIF / SERUPA (SIMILAR SHORTHAND)
 * Sesuai Blueprint Final Mode Analisa Gambar -> Prompt:
 * - Shorthand alternatif atau sinonim
 * - Memiliki fungsi/kategori yang mirip dengan primary/related
 * - Tidak aktif secara default [ ]
 * - Tidak boleh menduplikasi shorthand yang sudah masuk di bagian lain
 */

export function renderSimilarShorthands(similarShorthands = [], installedShorthands = [], onToggleShorthand) {
  const items = similarShorthands.length > 0 ? similarShorthands.map(rec => {
    const isInstalled = installedShorthands.includes(rec.code);
    const equivalentList = rec.equivalentTo || [];
    const funcGroup = rec.functionGroup || rec.category;

    return `
      <div class="rec-card similar-rec-card ${isInstalled ? 'rec-card-active' : ''}" data-code="${rec.code}">
        <div class="related-item-content">
          <div class="related-header-row" style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap;">
            <label class="checkbox-container" style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; user-select: none;">
              <input 
                type="checkbox" 
                class="similar-checkbox" 
                data-code="${rec.code}" 
                ${isInstalled ? 'checked' : ''} 
                style="width: 1.15rem; height: 1.15rem; cursor: pointer; accent-color: #0ea5e9;"
              />
              <span class="rec-code" style="color: #38bdf8; font-size: 1rem; font-weight: 800;">${rec.code}</span>
            </label>
            <div style="display: flex; gap: 0.35rem; align-items: center;">
              <span class="badge badge-blue" style="font-size: 0.675rem; background: rgba(14, 165, 233, 0.15); border: 1px solid rgba(14, 165, 233, 0.4); color: #38bdf8;">ALTERNATIF</span>
              <span class="badge badge-neutral" style="font-size: 0.7rem;">${rec.category}</span>
            </div>
          </div>

          <div class="related-fields" style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
            <div><strong style="color: var(--text-muted);">Nama:</strong> <span style="color: #f8fafc; font-weight: 600;">${rec.name}</span></div>
            <div><strong style="color: var(--text-muted);">Target:</strong> <span style="color: #93c5fd;">${rec.target || 'Visual'}</span></div>
            <div><strong style="color: var(--text-muted);">Fungsi:</strong> <span style="color: #38bdf8;">${funcGroup}</span></div>
            <div><strong style="color: var(--text-muted);">Alasan:</strong> <span style="color: #cbd5e1;">${rec.reason}</span></div>
            ${equivalentList.length > 0 ? `
              <div style="margin-top: 0.2rem;">
                <strong style="color: var(--text-muted);">Alias Setara:</strong>
                ${equivalentList.map(eq => `<span class="alias-tag font-mono">${eq}</span>`).join(' ')}
              </div>
            ` : ''}
          </div>
        </div>

        <div class="rec-toggle-row" style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.75rem; color: ${isInstalled ? '#34d399' : 'var(--text-muted)'}; display: flex; align-items: center; gap: 0.35rem;">
            ${isInstalled ? '✅ Dicentang (Terpasang di Prompt)' : '⚪ Nonaktif (Belum Dicentang)'}
          </span>
          <button 
            type="button" 
            class="btn ${isInstalled ? 'btn-danger' : 'btn-outline'} btn-xs btn-toggle-rec" 
            data-code="${rec.code}"
            title="${isInstalled ? 'Lepas dari prompt optimal' : 'Centang dan pasang ke prompt optimal'}"
          >
            ${isInstalled ? 'Batal Centang' : '+ Centang & Pasang'}
          </button>
        </div>
      </div>
    `;
  }).join('') : '<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Tidak ada shorthand alternatif tambahan yang terdeteksi.</div>';

  const html = `
    <!-- CARD C: SHORTHAND ALTERNATIF / SERUPA (SIMILAR SHORTHAND) -->
    <section class="panel analyzer-card" id="card-similar-shorthands">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge" style="background: #0ea5e9; color: #fff;">C</span>
          <h2>SHORTHAND ALTERNATIF / SERUPA (SIMILAR SHORTHAND)</h2>
        </div>
        <span class="badge badge-neutral">${similarShorthands.length} Alternatif</span>
      </div>

      <p style="font-size: 0.825rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Shorthand alternatif atau sinonim yang memiliki kesamaan fungsi/kategori dengan shorthand utama atau pendukung. Nonaktif secara default <strong>[ ]</strong>. Ceklis checkbox atau klik <strong>+ Centang &amp; Pasang</strong> untuk memasukkannya ke Prompt Optimal.
      </p>

      <div class="rec-grid">
        ${items}
      </div>
    </section>
  `;

  return {
    html,
    bindEvents(container) {
      if (!container) return;
      container.querySelectorAll('.similar-checkbox').forEach(chk => {
        chk.addEventListener('change', (e) => {
          e.stopPropagation();
          const code = chk.getAttribute('data-code');
          if (onToggleShorthand) onToggleShorthand(code);
        });
      });
      container.querySelectorAll('#card-similar-shorthands .btn-toggle-rec').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const code = btn.getAttribute('data-code');
          if (onToggleShorthand) onToggleShorthand(code);
        });
      });
    }
  };
}
