/**
 * UI Service - Prompt Shorthand Analyzer
 * Manages rendering of dashboard metrics, recommendation cards,
 * shorthand catalog, diff view, modal dialogs, and toast notifications.
 */

const UI = {
  /**
   * Display a floating toast notification
   * @param {string} message 
   * @param {'success'|'info'|'warning'|'error'} type 
   */
  showToast(message, type = "info") {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast-item toast-${type}`;
    
    const icons = {
      success: `<svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
      error: `<svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`,
      warning: `<svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>`,
      info: `<svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`
    };

    toast.innerHTML = `
      <div class="toast-icon">${icons[type] || icons.info}</div>
      <div class="toast-body">${message}</div>
      <button type="button" class="toast-close" aria-label="Tutup">&times;</button>
    `;

    container.appendChild(toast);

    toast.querySelector(".toast-close").addEventListener("click", () => {
      toast.remove();
    });

    setTimeout(() => {
      if (toast.parentElement) {
        toast.classList.add("toast-fade-out");
        setTimeout(() => toast.remove(), 300);
      }
    }, 3800);
  },

  /**
   * Copy text to clipboard with modern Async Clipboard API and fallback
   * @param {string} text 
   * @param {string} [successMsg="Teks berhasil disalin!"] 
   */
  async copyToClipboard(text, successMsg = "Teks berhasil disalin!") {
    if (!text) return;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      this.showToast(successMsg, "success");
    } catch (err) {
      console.error("Clipboard copy failed:", err);
      this.showToast("Gagal menyalin teks ke clipboard.", "error");
    }
  },

  /**
   * Render Analysis Dashboard Metrics
   * @param {Object} metrics 
   * @param {string} intentLabel 
   */
  renderMetrics(metrics, intentLabel) {
    document.getElementById("metric-word-count").textContent = metrics.wordCount || 0;
    document.getElementById("metric-token-count").textContent = `~${metrics.estimatedTokens || 0}`;
    
    // Density score with progress indicator
    const densityVal = document.getElementById("metric-density-val");
    const densityBar = document.getElementById("metric-density-bar");
    if (densityVal) densityVal.textContent = `${metrics.densityScore || 0}%`;
    if (densityBar) densityBar.style.width = `${metrics.densityScore || 0}%`;

    // Conciseness score
    const conciseVal = document.getElementById("metric-concise-val");
    if (conciseVal) conciseVal.textContent = `${metrics.concisenessScore || 0}/100`;

    // Potential Token Savings
    const savingsVal = document.getElementById("metric-savings-val");
    if (savingsVal) savingsVal.textContent = `~${metrics.potentialTokenSavings || 0} tokens`;

    // Intent Badge
    const intentBadge = document.getElementById("intent-badge");
    if (intentBadge) {
      intentBadge.textContent = intentLabel || "Instruksi Umum";
    }
  },

  /**
   * Render Recommended Shorthands
   * @param {Array} recommendations 
   * @param {Function} onApplyCallback 
   */
  renderRecommendations(recommendations, onApplyCallback) {
    const container = document.getElementById("recommendations-list");
    if (!container) return;

    if (!recommendations || recommendations.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <svg class="empty-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          <p>Prompt sudah cukup padat atau belum terdeteksi frasa bertele-tele spesifik.</p>
          <span class="sub-text">Cek bagian <strong>Katalog Shorthand</strong> untuk inspirasi parameter tambahan.</span>
        </div>
      `;
      return;
    }

    container.innerHTML = recommendations.map((item, idx) => `
      <div class="recommendation-card" data-idx="${idx}">
        <div class="rec-header">
          <div class="rec-title-group">
            <span class="rec-code font-mono">${this.escapeHtml(item.code)}</span>
            <span class="badge badge-category badge-${item.category}">${this.getCategoryLabel(item.category)}</span>
          </div>
          <div class="rec-actions">
            <button type="button" class="btn btn-sm btn-outline btn-copy-rec" data-code="${this.escapeHtml(item.code)}">
              Salin
            </button>
            <button type="button" class="btn btn-sm btn-primary btn-apply-rec" data-idx="${idx}">
              Terapkan
            </button>
          </div>
        </div>
        <p class="rec-desc">${this.escapeHtml(item.description)}</p>
        <div class="rec-context-box">
          <div class="rec-context-row">
            <span class="rec-label">Frasa Asli:</span>
            <span class="rec-original">${this.escapeHtml(item.exampleOriginal || item.replacesPhrase || "-")}</span>
          </div>
          <div class="rec-context-row">
            <span class="rec-label">Saran Shorthand:</span>
            <span class="rec-suggested font-mono">${this.escapeHtml(item.exampleShorthand || item.code)}</span>
          </div>
        </div>
        ${item.tokenSavings ? `<div class="rec-savings-tag"><svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg> ${this.escapeHtml(item.tokenSavings)}</div>` : ""}
      </div>
    `).join("");

    // Bind Apply & Copy clicks
    container.querySelectorAll(".btn-apply-rec").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-idx"), 10);
        if (onApplyCallback) onApplyCallback(recommendations[idx]);
      });
    });

    container.querySelectorAll(".btn-copy-rec").forEach(btn => {
      btn.addEventListener("click", () => {
        const code = btn.getAttribute("data-code");
        this.copyToClipboard(code, `Shorthand ${code} disalin!`);
      });
    });
  },

  /**
   * Render Missing Structural Elements
   * @param {Array} missingList 
   * @param {Function} onInsertCallback 
   */
  renderMissingStructure(missingList, onInsertCallback) {
    const container = document.getElementById("missing-structure-list");
    if (!container) return;

    if (!missingList || missingList.length === 0) {
      container.innerHTML = `
        <div class="alert alert-success">
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <div>
            Tidak ditemukan celah struktural yang cukup kuat berdasarkan konteks prompt.
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = missingList.map((item, idx) => `
      <div class="missing-card">
        <div class="missing-info">
          <span class="missing-tag font-mono">${this.escapeHtml(item.tag)}</span>
          <div class="missing-title">${this.escapeHtml(item.title)}</div>
          <div class="missing-tip">${this.escapeHtml(item.tip)}</div>
        </div>
        <button type="button" class="btn btn-sm btn-secondary btn-insert-structure" data-tag="${this.escapeHtml(item.tag)}">
          + Tambahkan
        </button>
      </div>
    `).join("");

    container.querySelectorAll(".btn-insert-structure").forEach(btn => {
      btn.addEventListener("click", () => {
        const tag = btn.getAttribute("data-tag");
        if (onInsertCallback) onInsertCallback(tag);
      });
    });
  },

  /**
   * Render Shorthand Catalog Grid
   * @param {Array} items 
   * @param {Function} onInsertCallback 
   */
  renderCatalog(items, onInsertCallback) {
    const container = document.getElementById("catalog-grid");
    if (!container) return;

    if (!items || items.length === 0) {
      container.innerHTML = `
        <div class="catalog-empty">
          <p>Tidak ditemukan shorthand yang cocok dengan kata kunci pencarian.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = items.map(item => `
      <div class="catalog-card">
        <div class="catalog-card-top">
          <span class="catalog-code font-mono">${this.escapeHtml(item.code)}</span>
          <span class="badge badge-category badge-${item.category}">${this.getCategoryLabel(item.category)}</span>
        </div>
        <h4 class="catalog-name">${this.escapeHtml(item.name)}</h4>
        <p class="catalog-desc">${this.escapeHtml(item.description)}</p>
        <div class="catalog-example">
          <small class="text-muted">Contoh Penggunaan:</small>
          <div class="catalog-example-code font-mono">${this.escapeHtml(item.exampleShorthand || item.code)}</div>
        </div>
        <div class="catalog-card-footer">
          <button type="button" class="btn btn-xs btn-outline btn-catalog-copy" data-code="${this.escapeHtml(item.code)}">
            Salin Tag
          </button>
          <button type="button" class="btn btn-xs btn-primary btn-catalog-insert" data-code="${this.escapeHtml(item.exampleShorthand || item.code)}">
            Sisipkan ke Prompt
          </button>
        </div>
      </div>
    `).join("");

    // Bind event handlers
    container.querySelectorAll(".btn-catalog-copy").forEach(btn => {
      btn.addEventListener("click", () => {
        const code = btn.getAttribute("data-code");
        this.copyToClipboard(code, `Tag ${code} disalin ke clipboard!`);
      });
    });

    container.querySelectorAll(".btn-catalog-insert").forEach(btn => {
      btn.addEventListener("click", () => {
        const code = btn.getAttribute("data-code");
        if (onInsertCallback) onInsertCallback(code);
      });
    });
  },

  /**
   * Render History Modal Content
   * @param {Array} historyItems 
   * @param {Function} onRestoreCallback 
   */
  renderHistory(historyItems, onRestoreCallback) {
    const container = document.getElementById("history-list");
    if (!container) return;

    if (!historyItems || historyItems.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <p>Belum ada riwayat analisis tersimpan.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = historyItems.map(item => `
      <div class="history-item">
        <div class="history-item-meta">
          <span class="badge badge-category badge-${item.intent}">${item.intent}</span>
          <span class="history-time">${new Date(item.timestamp).toLocaleString("id-ID")}</span>
        </div>
        <div class="history-prompt font-mono">${this.escapeHtml(item.originalPrompt.substring(0, 160))}${item.originalPrompt.length > 160 ? "..." : ""}</div>
        <div class="history-actions">
          <button type="button" class="btn btn-xs btn-primary btn-restore-hist" data-id="${item.id}">
            Buka Kembali
          </button>
        </div>
      </div>
    `).join("");

    container.querySelectorAll(".btn-restore-hist").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const found = historyItems.find(h => h.id === id);
        if (found && onRestoreCallback) {
          onRestoreCallback(found);
        }
      });
    });
  },

  getCategoryLabel(category) {
    const map = {
      structure: "Struktur & Tag",
      format: "Format & Output",
      reasoning: "Penalaran & Logika",
      image: "Gambar / Difusi",
      persona: "Persona & Nada",
      code: "Kode & Dev",
      all: "Semua"
    };
    return map[category] || category;
  },

  escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
};

// Export for Node.js test runner & browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = { UI };
}
