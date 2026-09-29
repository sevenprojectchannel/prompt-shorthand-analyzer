/**
 * Main Application Orchestrator - Prompt Shorthand Analyzer
 * Coordinates event listeners, local & Gemini analysis pipelines,
 * BYOK settings modal, preset selectors, and catalog interaction.
 */

// Sample Presets for instant user testing
const PRESET_PROMPTS = {
  coding: `Halo AI, tolong bantu saya untuk membuatkan fungsi di TypeScript modern yang bisa melakukan debouncing pada input form pencarian. Jangan gunakan library eksternal apapun, tidak boleh ada boilerplate yang berlebihan, dan tolong berikan unit test menggunakan Jest untuk mengetes edge cases-nya.`,
  
  image: `Buatkan foto seorang astronot wanita yang sedang berdiri di pasar tradisional cyberpunk kota Tokyo pada malam hari, ada lampu neon warna ungu dan toska yang memantul di genangan air hujan, sangat realistis, hyperrealistic 8k, efek blur latar belakang yang lembut, orientasi layar lebar landscape 16:9 sinematik, dan jangan ada teks atau watermark sama sekali.`,
  
  executive: `Saya ingin kamu bertindak sebagai seorang konsultan bisnis senior. Tolong buatkan analisis mendalam mengenai dampak adopsi AI terhadap efisiensi operasional tim customer support. Jelaskan dengan sangat ringkas dan padat, jangan bertele-tele, berikan ringkasan eksekutif TL;DR di awal, dan tampilkan poin perbandingan pro dan kontra dalam format tabel markdown.`,
  
  reasoning: `Pikirkan solusinya secara bertahap dan jelaskan langkah demi langkah. Jika sebuah perusahaan memiliki biaya tetap 50 juta per bulan dan margin kontribusi per unit produk adalah 25 ribu rupiah, berapa unit yang harus dijual untuk mencapai titik impas (break-even point) dan mendapatkan laba bersih 20 juta per bulan? Lakukan verifikasi kalkulasi sebelum memberikan jawaban akhir.`
};

class PromptShorthandApp {
  constructor() {
    this.currentAnalysis = null;
    this.debounceTimer = null;
    this.activeCatalogCategory = "all";
    this.isGeminiMode = false;
  }

  init() {
    this.initTheme();
    this.initElements();
    this.bindEvents();
    this.renderInitialCatalog();
    this.updateApiKeyStatusBadge();

    // Check if initial preset or text exists
    const promptInput = document.getElementById("prompt-input");
    if (promptInput && promptInput.value.trim()) {
      this.runAnalysis();
    }
  }

  initTheme() {
    const savedTheme = StorageService.getTheme() || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    const themeToggleBtn = document.getElementById("btn-theme-toggle");
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute("aria-label", savedTheme === "dark" ? "Mode Terang" : "Mode Gelap");
    }
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    StorageService.setTheme(newTheme);
    UI.showToast(`Beralih ke tema ${newTheme === "dark" ? "Gelap" : "Terang"}`, "info");
  }

  initElements() {
    this.promptInput = document.getElementById("prompt-input");
    this.btnAnalyze = document.getElementById("btn-analyze");
    this.btnClear = document.getElementById("btn-clear");
    this.btnCopyOptimized = document.getElementById("btn-copy-optimized");
    this.btnApplyOptimizedToInput = document.getElementById("btn-apply-optimized");
    this.btnExportMd = document.getElementById("btn-export-md");
    this.optimizedText = document.getElementById("optimized-prompt-text");
    this.categoryFilter = document.getElementById("category-filter");
    
    // BYOK Elements
    this.apiKeyModal = document.getElementById("modal-byok");
    this.apiKeyInput = document.getElementById("byok-api-key-input");
    this.apiKeyToggleShow = document.getElementById("byok-toggle-show");
    this.modelSelect = document.getElementById("byok-model-select");
    this.btnSaveApiKey = document.getElementById("btn-save-byok");
    this.btnClearApiKey = document.getElementById("btn-clear-byok");
    this.btnTestApiKey = document.getElementById("btn-test-byok");
    this.byokStatusBadge = document.getElementById("byok-status-badge");
    this.toggleAiEngine = document.getElementById("toggle-ai-engine");

    // Catalog elements
    this.catalogSearch = document.getElementById("catalog-search");
    this.catalogNav = document.getElementById("catalog-nav");

    // History elements
    this.historyModal = document.getElementById("modal-history");
    this.btnHistory = document.getElementById("btn-history");
  }

  bindEvents() {
    // Theme toggle
    document.getElementById("btn-theme-toggle")?.addEventListener("click", () => this.toggleTheme());

    // Prompt Input with Debounced Realtime Analysis
    this.promptInput?.addEventListener("input", () => {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        if (!this.isGeminiMode) {
          this.runAnalysis();
        }
      }, 400);
    });

    // Analyze Button
    this.btnAnalyze?.addEventListener("click", () => this.runAnalysis(true));

    // Clear Button
    this.btnClear?.addEventListener("click", () => {
      if (this.promptInput) {
        this.promptInput.value = "";
        this.runAnalysis();
        this.promptInput.focus();
      }
    });

    // Preset Buttons
    document.querySelectorAll(".btn-preset").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const presetKey = btn.getAttribute("data-preset");
        if (PRESET_PROMPTS[presetKey] && this.promptInput) {
          this.promptInput.value = PRESET_PROMPTS[presetKey];
          UI.showToast(`Preset "${btn.textContent.trim()}" dimuat!`, "info");
          this.runAnalysis(true);
        }
      });
    });

    // Category Filter Change
    this.categoryFilter?.addEventListener("change", () => {
      this.runAnalysis(true);
    });

    // Copy Optimized Prompt
    this.btnCopyOptimized?.addEventListener("click", () => {
      if (this.currentAnalysis?.optimizedPrompt) {
        UI.copyToClipboard(this.currentAnalysis.optimizedPrompt, "Prompt shorthand berhasil disalin!");
      }
    });

    // Replace Input with Optimized Prompt
    this.btnApplyOptimizedToInput?.addEventListener("click", () => {
      if (this.currentAnalysis?.optimizedPrompt && this.promptInput) {
        this.promptInput.value = this.currentAnalysis.optimizedPrompt;
        UI.showToast("Prompt asli digantikan dengan versi shorthand teroptimasi!", "success");
        this.runAnalysis(true);
      }
    });

    // Export Markdown
    this.btnExportMd?.addEventListener("click", () => this.exportMarkdown());

    // AI Engine Toggle
    this.toggleAiEngine?.addEventListener("change", (e) => {
      this.isGeminiMode = e.target.checked;
      const indicator = document.getElementById("engine-mode-label");
      if (this.isGeminiMode) {
        if (!StorageService.hasApiKey()) {
          UI.showToast("Silakan atur Gemini API Key di BYOK Settings terlebih dahulu.", "warning");
          this.openByokModal();
          e.target.checked = false;
          this.isGeminiMode = false;
          return;
        }
        if (indicator) indicator.textContent = "Mode: Gemini BYOK AI";
        UI.showToast("Mode beralih ke Gemini BYOK AI (Analisis Kontekstual)", "info");
        this.runAnalysis(true);
      } else {
        if (indicator) indicator.textContent = "Mode: Offline Rule Engine";
        UI.showToast("Mode beralih ke Offline Rule Engine", "info");
        this.runAnalysis(true);
      }
    });

    // BYOK Modal bindings
    document.getElementById("btn-open-byok")?.addEventListener("click", () => this.openByokModal());
    document.querySelectorAll(".modal-close, .modal-backdrop").forEach(el => {
      el.addEventListener("click", (e) => {
        if (e.target === el) {
          this.closeModals();
        }
      });
    });

    // Password Show/Hide Toggle
    this.apiKeyToggleShow?.addEventListener("click", () => {
      if (!this.apiKeyInput) return;
      const isPassword = this.apiKeyInput.type === "password";
      this.apiKeyInput.type = isPassword ? "text" : "password";
      this.apiKeyToggleShow.setAttribute("aria-label", isPassword ? "Sembunyikan API Key" : "Tampilkan API Key");
      this.apiKeyToggleShow.innerHTML = isPassword 
        ? `<svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>`
        : `<svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`;
    });

    // Save BYOK Key
    this.btnSaveApiKey?.addEventListener("click", () => {
      const key = this.apiKeyInput?.value || "";
      if (!key.trim()) {
        UI.showToast("Kunci API tidak boleh kosong.", "warning");
        return;
      }
      StorageService.setApiKey(key);
      if (this.modelSelect) {
        StorageService.setSelectedModel(this.modelSelect.value);
      }
      this.updateApiKeyStatusBadge();
      UI.showToast("Gemini API Key tersimpan secara aman di browser lokal Anda!", "success");
      this.closeModals();
    });

    // Clear BYOK Key
    this.btnClearApiKey?.addEventListener("click", () => {
      if (confirm("Hapus API Key dari penyimpanan browser lokal?")) {
        StorageService.clearApiKey();
        if (this.apiKeyInput) this.apiKeyInput.value = "";
        this.updateApiKeyStatusBadge();
        if (this.toggleAiEngine) this.toggleAiEngine.checked = false;
        this.isGeminiMode = false;
        UI.showToast("API Key dihapus.", "info");
      }
    });

    // Test BYOK Key
    this.btnTestApiKey?.addEventListener("click", async () => {
      const key = this.apiKeyInput?.value?.trim() || StorageService.getApiKey();
      const model = this.modelSelect?.value || StorageService.getSelectedModel();
      
      if (!key) {
        UI.showToast("Silakan masukkan API Key terlebih dahulu untuk diuji.", "warning");
        return;
      }

      this.btnTestApiKey.disabled = true;
      this.btnTestApiKey.textContent = "Menguji...";

      const result = await GeminiAnalyzer.testConnection(key, model);
      
      this.btnTestApiKey.disabled = false;
      this.btnTestApiKey.textContent = "Uji Koneksi";

      if (result.success) {
        UI.showToast(result.message, "success");
      } else {
        UI.showToast(result.message, "error");
      }
    });

    // Catalog Search
    this.catalogSearch?.addEventListener("input", (e) => {
      this.filterCatalog(e.target.value);
    });

    // History Modal Open
    this.btnHistory?.addEventListener("click", () => {
      const history = StorageService.getHistory();
      UI.renderHistory(history, (restoredItem) => {
        if (this.promptInput) {
          this.promptInput.value = restoredItem.originalPrompt;
          this.closeModals();
          this.runAnalysis(true);
          UI.showToast("Prompt dari riwayat berhasil dimuat!", "info");
        }
      });
      document.getElementById("modal-history")?.classList.add("modal-open");
    });

    // Clear History Button
    document.getElementById("btn-clear-history")?.addEventListener("click", () => {
      if (confirm("Hapus semua riwayat analisis?")) {
        StorageService.clearHistory();
        UI.renderHistory([], null);
        UI.showToast("Riwayat analisis dibersihkan.", "info");
      }
    });
  }

  openByokModal() {
    if (this.apiKeyInput) {
      this.apiKeyInput.value = StorageService.getApiKey();
    }
    if (this.modelSelect) {
      this.modelSelect.value = StorageService.getSelectedModel();
    }
    this.apiKeyModal?.classList.add("modal-open");
  }

  closeModals() {
    document.querySelectorAll(".modal").forEach(m => m.classList.remove("modal-open"));
  }

  updateApiKeyStatusBadge() {
    const hasKey = StorageService.hasApiKey();
    if (this.byokStatusBadge) {
      if (hasKey) {
        this.byokStatusBadge.className = "badge badge-success";
        this.byokStatusBadge.innerHTML = `<span class="badge-dot"></span> BYOK Aktif`;
      } else {
        this.byokStatusBadge.className = "badge badge-neutral";
        this.byokStatusBadge.innerHTML = `<span class="badge-dot"></span> BYOK Belum Diatur`;
      }
    }
  }

  /**
   * Run Analysis pipeline
   * @param {boolean} forceRun - triggers even if text didn't change
   */
  async runAnalysis(forceRun = false) {
    const text = this.promptInput?.value || "";
    const category = this.categoryFilter?.value || "all";

    if (!text.trim()) {
      const emptyResult = LocalAnalyzer.getEmptyAnalysis();
      this.displayAnalysisResults(emptyResult);
      return;
    }

    if (this.isGeminiMode && StorageService.hasApiKey()) {
      await this.runGeminiAnalysis(text);
    } else {
      this.runLocalAnalysis(text, category);
    }
  }

  runLocalAnalysis(text, category) {
    const result = LocalAnalyzer.analyze(text, category);
    this.currentAnalysis = result;
    this.displayAnalysisResults(result);

    // Save to history if substantial prompt
    if (text.length > 25) {
      StorageService.saveToHistory({
        originalPrompt: result.originalPrompt,
        optimizedPrompt: result.optimizedPrompt,
        intent: result.intent,
        tokenSavingsEstimate: result.metrics.potentialTokenSavings
      });
    }
  }

  async runGeminiAnalysis(text) {
    const apiKey = StorageService.getApiKey();
    const model = StorageService.getSelectedModel();

    if (this.btnAnalyze) {
      this.btnAnalyze.disabled = true;
      this.btnAnalyze.innerHTML = `<span class="spinner"></span> Menganalisis dengan Gemini...`;
    }

    try {
      const aiData = await GeminiAnalyzer.analyzePromptWithGemini(text, apiKey, model);
      
      // Calculate local metric baseline for display
      const localResult = LocalAnalyzer.analyze(text);
      
      const mergedResult = {
        originalPrompt: text,
        intent: aiData.detectedDomain || localResult.intent,
        intentLabel: `Gemini AI: ${aiData.detectedDomain ? aiData.detectedDomain.toUpperCase() : "Contextual"}`,
        metrics: {
          wordCount: localResult.metrics.wordCount,
          charCount: localResult.metrics.charCount,
          estimatedTokens: localResult.metrics.estimatedTokens,
          densityScore: aiData.densityScore || 85,
          concisenessScore: 90,
          existingShorthandCount: localResult.existingShorthands.length,
          potentialTokenSavings: Math.round(localResult.metrics.estimatedTokens * 0.35)
        },
        existingShorthands: localResult.existingShorthands,
        recommendations: (aiData.recommendedShorthands || []).map((r, i) => ({
          id: `ai-rec-${i}`,
          code: r.code,
          category: "structure",
          name: r.name || "AI Contextual Shorthand",
          description: r.reason || "Dihasilkan secara cerdas oleh model Gemini untuk konteks spesifik ini.",
          exampleOriginal: r.replacesPhrase || "-",
          exampleShorthand: r.code,
          tokenSavings: "Rekomendasi AI Teroptimasi",
          relevance: 95
        })),
        missingStructure: (aiData.actionableTips || []).map(tip => ({
          tag: "[TIP]",
          title: "Saran Optimasi Kontekstual",
          tip: tip
        })),
        optimizedPrompt: aiData.optimizedPrompt || localResult.optimizedPrompt,
        diffSummary: aiData.contextSummary || "Optimasi berbasis pemahaman konteks penuh oleh Gemini AI."
      };

      this.currentAnalysis = mergedResult;
      this.displayAnalysisResults(mergedResult);

      StorageService.saveToHistory({
        originalPrompt: text,
        optimizedPrompt: mergedResult.optimizedPrompt,
        intent: mergedResult.intent,
        tokenSavingsEstimate: mergedResult.metrics.potentialTokenSavings
      });

      UI.showToast("Analisis mendalam Gemini selesai!", "success");
    } catch (err) {
      console.error("Gemini Analysis error:", err);
      UI.showToast(`Gemini Error: ${err.message}. Mengalihkan ke Local Engine.`, "error");
      this.runLocalAnalysis(text, this.categoryFilter?.value || "all");
    } finally {
      if (this.btnAnalyze) {
        this.btnAnalyze.disabled = false;
        this.btnAnalyze.innerHTML = `
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          Analisis Prompt
        `;
      }
    }
  }

  displayAnalysisResults(result) {
    // Render Dashboard Metrics
    UI.renderMetrics(result.metrics, result.intentLabel);

    // Render Recommendations
    UI.renderRecommendations(result.recommendations, (selectedRec) => {
      this.applyRecommendationToPrompt(selectedRec);
    });

    // Render Missing Structural Elements
    UI.renderMissingStructure(result.missingStructure, (tagToInsert) => {
      this.insertTagToPrompt(tagToInsert);
    });

    // Render Optimized Prompt Output
    if (this.optimizedText) {
      this.optimizedText.value = result.optimizedPrompt || "";
    }

    // Render Summary Tip
    const summaryEl = document.getElementById("diff-summary-text");
    if (summaryEl) {
      summaryEl.textContent = result.diffSummary || "";
    }
  }

  applyRecommendationToPrompt(rec) {
    if (!this.promptInput) return;
    let current = this.promptInput.value;

    if (rec.exampleOriginal && current.includes(rec.exampleOriginal)) {
      current = current.replace(rec.exampleOriginal, rec.code);
    } else {
      // Append or prepend tag cleanly
      current = `${rec.code}\n${current}`;
    }

    this.promptInput.value = current;
    UI.showToast(`Shorthand ${rec.code} diterapkan!`, "success");
    this.runAnalysis(true);
  }

  insertTagToPrompt(tag) {
    if (!this.promptInput) return;
    const current = this.promptInput.value.trim();
    this.promptInput.value = current ? `${tag}\n${current}` : tag;
    UI.showToast(`Tag ${tag} disisipkan ke prompt!`, "info");
    this.runAnalysis(true);
  }

  renderInitialCatalog() {
    const categories = getAllCategories();
    if (this.catalogNav) {
      this.catalogNav.innerHTML = categories.map((cat, i) => `
        <button type="button" class="catalog-tab ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
          ${cat.label}
        </button>
      `).join("");

      this.catalogNav.querySelectorAll(".catalog-tab").forEach(tab => {
        tab.addEventListener("click", () => {
          this.catalogNav.querySelectorAll(".catalog-tab").forEach(t => t.classList.remove("active"));
          tab.classList.add("active");
          this.activeCatalogCategory = tab.getAttribute("data-category");
          this.filterCatalog(this.catalogSearch?.value || "");
        });
      });
    }

    this.filterCatalog("");
  }

  filterCatalog(query) {
    let items = findShorthandsByCategory(this.activeCatalogCategory);
    if (query && query.trim()) {
      const q = query.toLowerCase().trim();
      items = items.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.keywords.some(k => k.toLowerCase().includes(q))
      );
    }

    UI.renderCatalog(items, (codeToInsert) => {
      this.insertTagToPrompt(codeToInsert);
    });
  }

  exportMarkdown() {
    if (!this.currentAnalysis) {
      UI.showToast("Tidak ada analisis untuk diekspor.", "warning");
      return;
    }

    const res = this.currentAnalysis;
    const mdContent = `# Prompt Shorthand Analysis Report
Tanggal: ${new Date().toLocaleString("id-ID")}
Konteks / Intent: ${res.intentLabel}

## 1. Prompt Asli
\`\`\`text
${res.originalPrompt}
\`\`\`

## 2. Prompt Shorthand Teroptimasi
\`\`\`text
${res.optimizedPrompt}
\`\`\`

## 3. Metrik Analisis
- Jumlah Kata: ${res.metrics.wordCount}
- Estimasi Token: ${res.metrics.estimatedTokens}
- Shorthand Density: ${res.metrics.densityScore}%
- Conciseness Score: ${res.metrics.concisenessScore}/100
- Estimasi Penghematan Token: ~${res.metrics.potentialTokenSavings} tokens

## 4. Rekomendasi Shorthand Diterapkan
${res.recommendations.map(r => `- **${r.code}** (${r.name}): ${r.description}`).join("\n") || "Tidak ada rekomendasi khusus."}

---
*Dibuat dengan Prompt Shorthand Analyzer*
`;

    const blob = new Blob([mdContent], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `prompt-shorthand-${Date.now()}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    UI.showToast("Laporan analisis berhasil diunduh sebagai Markdown!", "success");
  }
}

// Instantiate and initialize when DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  window.app = new PromptShorthandApp();
  window.app.init();
});
