/**
 * Main Application Orchestrator V2.1
 * Prompt Shorthand Analyzer V2.1
 * Terintegrasi dengan CatalogRepository (Core Read-only + User IndexedDB Persistent),
 * Primary & Related Shorthand separation, dan Semantic Deduplication.
 */

import './styles/main.css';
import './styles/components.css';

import { INITIAL_SHORTHAND_CATALOG } from './data/catalogData.js';
import { CatalogRepository } from './services/catalogRepository.js';
import { StorageService } from './services/storageService.js';
import { GeminiService, GEMINI_STATUS } from './services/geminiService.js';
import { cleanPromptForCopy } from './lib/promptFormatter.js';
import { DEFAULT_COLOUR_GRADING_CONFIG } from './data/colourGradingData.js';
import { toAiEnglishPrompt } from './lib/promptEnglishTranslator.js';

import { renderHeader } from './components/Header.js';
import { renderAnalyzerPage } from './components/AnalyzerPage.js';
import { renderDictionaryPage } from './components/DictionaryPage.js';
import { renderJsonTestPage } from './components/JsonTestPage.js';
import { renderCatalogPage } from './components/CatalogPage.js';
import { renderSettingsPage } from './components/SettingsPage.js';
import { DictionaryService } from './services/dictionaryService.js';

class App {
  constructor() {
    this.appRoot = document.getElementById('app');

    // Central Catalog Repository
    this.catalogRepo = new CatalogRepository(INITIAL_SHORTHAND_CATALOG);
    this.catalog = this.catalogRepo.getAll();
    this.geminiService = new GeminiService(this.catalog);

    // Initial state
    this.activeTab = 'analyzer';
    this.activeMode = 'ANALISA_PROMPT'; // 'ANALISA_PROMPT' | 'IMAGE_TO_PROMPT' | 'SHORTHAND_IMPROVE'
    this.uploadedImage = null;
    this.selectedAspectRatio = 'auto'; // 'auto' | '1:1' | '2:3' | '3:2' | '3:4' | '4:3' | '9:16' | '16:9'
    this.currentPrompt = '';
    this.isAnalyzing = false;
    this.catalogCategory = 'ALL';
    this.catalogTarget = 'ALL';
    this.catalogRecLevel = 'ALL';
    this.catalogSearchQuery = '';
    this.catalogCurrentPage = 1;
    this.selectedDetailCode = null;
    this.isAddModalOpen = false;
    this.isImportModalOpen = false;
    this.duplicateWarning = null;
    this.isEnrichingPrompt = false;

    // Dictionary (Kamus Shorthand) State
    this.dictionaryState = {
      searchQuery: '',
      searchResults: [],
      selectedShorthands: [],
      isSearching: false,
      searchNotice: null,
      hasSearched: false
    };

    // 2 Dunia Config State (V3.5)
    this.twoWorldsConfig = {
      customRequest: '',
      gender: 'Auto (Smart Detection) mengikuti gambar unggahan',
      age: 'Auto (Smart Detection) mengikuti gambar unggahan',
      ethnicity: 'Auto (Smart Detection)',
      subjectStyle: 'Auto (Smart Detection)',
      customSubjectStyle: '',
      environmentStyle: 'Auto (Smart Detection)'
    };

    // Colour Grading Config State (V3.6)
    this.colourGradingConfig = { ...DEFAULT_COLOUR_GRADING_CONFIG };
    this.batchGradingImages = [];
    this.activeGradingBatchIndex = 0;

    // Initialize with empty analysis result
    this.analysisResult = this.geminiService.localEngine.getEmptyResult();

    // Async init
    this.initRepository();
    this.initGeminiStatus();
  }

  async initRepository() {
    try {
      await this.catalogRepo.init();
      this.catalog = this.catalogRepo.getAll();
      this.geminiService.catalog = this.catalog;
      this.geminiService.localEngine.catalog = this.catalog;
      this.render();
    } catch (err) {
      console.warn('Repository init error:', err);
    }
  }

  async initGeminiStatus() {
    const key = StorageService.getApiKey();
    if (key) {
      // Test quietly in background to set accurate status indicator
      const res = await this.geminiService.testConnection(key);
      this.render();
    }
  }

  showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✅' : (type === 'error' ? '❌' : 'ℹ️')}</span>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  async runAnalysis(promptText, installedOverrides = null) {
    if (this.activeMode === 'IMAGE_TO_PROMPT' || this.activeMode === 'TWO_WORLDS') {
      if (!this.uploadedImage) {
        this.showToast('Silakan pilih atau unggah gambar referensi terlebih dahulu.', 'error');
        return;
      }
      this.isAnalyzing = true;
      this.currentPrompt = promptText || '';
      this.render();

      try {
        const fileObj = this.uploadedImage.file ? Object.assign(this.uploadedImage.file, {
          width: this.uploadedImage.width,
          height: this.uploadedImage.height,
          visualTelemetry: this.uploadedImage.visualTelemetry
        }) : {
          name: this.uploadedImage.name,
          size: this.uploadedImage.size,
          width: this.uploadedImage.width,
          height: this.uploadedImage.height,
          visualTelemetry: this.uploadedImage.visualTelemetry
        };
        const targetRatio = (this.selectedAspectRatio && this.selectedAspectRatio !== 'auto' && this.selectedAspectRatio !== 'Otomatis')
          ? this.selectedAspectRatio
          : (this.uploadedImage.detectedAspectRatio || this.uploadedImage.aspectRatio || 'auto');

        const result = await this.geminiService.analyzeImageToPrompt({
          imageFile: fileObj,
          imageBase64: this.uploadedImage.base64,
          mimeType: this.uploadedImage.type,
          referencePrompt: promptText,
          visualTelemetry: this.uploadedImage.visualTelemetry,
          targetAspectRatio: targetRatio,
          isTwoWorlds: this.activeMode === 'TWO_WORLDS',
          twoWorldsConfig: this.activeMode === 'TWO_WORLDS' ? this.twoWorldsConfig : null
        });
        result.mode = this.activeMode;
        this.analysisResult = result;
        if (result.source === 'GEMINI_AI') {
          this.showToast(this.activeMode === 'TWO_WORLDS' ? '✅ Analisa 2 Dunia Vision AI berhasil!' : '✅ Analisa Vision AI berhasil berdasarkan gambar aktual!', 'success');
        } else if (result.source === 'LOCAL_ENGINE_FALLBACK') {
          const reason = this.geminiService.lastError ? ` (${this.geminiService.lastError})` : '';
          this.showToast(`⚠️ Vision AI terkendala${reason}, menggunakan analisis visual lokal.`, 'warning');
        } else {
          this.showToast(this.activeMode === 'TWO_WORLDS' ? 'Analisa 2 dunia & pemetaan shorthand berhasil!' : 'Analisa gambar & pemetaan shorthand berhasil!');
        }
      } catch (err) {
        this.showToast(`Gagal menganalisis gambar: ${err.message}`, 'error');
      } finally {
        this.isAnalyzing = false;
        this.render();
      }
      return;
    }

    if (this.activeMode === 'SHORTHAND_IMPROVE' || this.activeMode === 'COLOUR_GRADING') {
      const isColourGrading = this.activeMode === 'COLOUR_GRADING';
      // Skenario A: Unggah Gambar untuk Diagnosis Visual & Rekomendasi Shorthand Perbaikan / Colour Grading
      if (this.uploadedImage) {
        this.isAnalyzing = true;
        this.currentPrompt = promptText || '';
        this.render();

        try {
          const result = await this.geminiService.analyzeImageRepair({
            imageFile: this.uploadedImage.file,
            imageBase64: this.uploadedImage.base64,
            mimeType: this.uploadedImage.type,
            notesPrompt: promptText,
            isColourGrading,
            mode: this.activeMode,
            colourGradingConfig: isColourGrading ? this.colourGradingConfig : null,
            telemetry: isColourGrading ? (this.uploadedImage.colorTelemetry || this.uploadedImage.visualTelemetry || null) : null
          });
          result.mode = this.activeMode;
          this.analysisResult = result;
          if (result.source === 'GEMINI_AI') {
            this.showToast(isColourGrading ? '✅ Diagnosis visual Vision AI & rekomendasi colour grading selesai!' : '✅ Diagnosis visual Vision AI & rekomendasi perbaikan selesai!', 'success');
          } else if (result.source === 'LOCAL_ENGINE_FALLBACK') {
            const reason = this.geminiService.lastError ? ` (${this.geminiService.lastError})` : '';
            this.showToast(`⚠️ Vision AI terkendala${reason}, menggunakan diagnosis visual lokal.`, 'warning');
          } else {
            this.showToast(isColourGrading ? 'Diagnosis visual & rekomendasi colour grading selesai!' : 'Diagnosis visual & rekomendasi perbaikan gambar selesai!');
          }
        } catch (err) {
          this.showToast(`Gagal menganalisis ${isColourGrading ? 'colour grading' : 'perbaikan gambar'}: ${err.message}`, 'error');
        } finally {
          this.isAnalyzing = false;
          this.render();
        }
        return;
      }

      // Skenario B: Analisa Teks Shorthand / Prompt
      if (!promptText || !promptText.trim()) {
        this.showToast(isColourGrading ? 'Silakan unggah gambar atau masukkan preferensi colour grading yang diinginkan.' : 'Silakan unggah gambar atau masukkan prompt / shorthand yang ingin diperbaiki.', 'error');
        return;
      }
      this.currentPrompt = promptText;
      this.isAnalyzing = true;
      this.render();

      try {
        const result = await this.geminiService.analyzeShorthandImprove(promptText, installedOverrides, { isColourGrading, mode: this.activeMode });
        result.mode = this.activeMode;
        this.analysisResult = result;
        this.showToast(isColourGrading ? 'Analisa shorthand colour grading selesai!' : 'Analisa shorthand perbaikan selesai!');
      } catch (err) {
        this.showToast(`Gagal menganalisis: ${err.message}`, 'error');
      } finally {
        this.isAnalyzing = false;
        this.render();
      }
      return;
    }

    // Default: ANALISA_PROMPT (100% existing V3.3 logic preserved)
    if (!promptText || !promptText.trim()) {
      this.showToast('Silakan masukkan prompt terlebih dahulu', 'error');
      return;
    }

    this.currentPrompt = promptText;
    this.isAnalyzing = true;
    this.render();

    try {
      const result = await this.geminiService.analyzePrompt(promptText, installedOverrides);
      this.analysisResult = result;
      this.showToast('Analisis prompt selesai!');
    } catch (err) {
      this.showToast(`Gagal menganalisis: ${err.message}`, 'error');
    } finally {
      this.isAnalyzing = false;
      this.render();
    }
  }

  /**
   * Reset Analyzer state only.
   * Tidak pernah menghapus atau mengubah CatalogRepository.
   */
  handleReset() {
    this.currentPrompt = '';
    this.uploadedImage = null;
    this.selectedAspectRatio = 'auto';
    this.twoWorldsConfig = {
      customRequest: '',
      gender: 'Auto (Smart Detection) mengikuti gambar unggahan',
      age: 'Auto (Smart Detection) mengikuti gambar unggahan',
      ethnicity: 'Auto (Smart Detection)',
      subjectStyle: 'Auto (Smart Detection)',
      customSubjectStyle: '',
      environmentStyle: 'Auto (Smart Detection)'
    };
    this.analysisResult = this.geminiService.localEngine.getEmptyResult();
    this.showToast('Analyzer telah di-reset ke kondisi awal.');
    this.render();
  }

  handleClear() {
    this.currentPrompt = '';
    this.uploadedImage = null;
    this.selectedAspectRatio = 'auto';
    this.twoWorldsConfig = {
      customRequest: '',
      gender: 'Auto (Smart Detection) mengikuti gambar unggahan',
      age: 'Auto (Smart Detection) mengikuti gambar unggahan',
      ethnicity: 'Auto (Smart Detection)',
      subjectStyle: 'Auto (Smart Detection)',
      customSubjectStyle: '',
      environmentStyle: 'Auto (Smart Detection)'
    };
    this.analysisResult = this.geminiService.localEngine.getEmptyResult();
    this.render();
  }

  /**
   * Menangani pembaruan konfigurasi parameter kustom 2 Dunia (V3.5)
   * Menyinkronkan PROMPT OPTIMAL secara real-time bila hasil analisis visual sudah ada
   */
  handleTwoWorldsConfigChange(newConfig) {
    this.twoWorldsConfig = { ...this.twoWorldsConfig, ...newConfig };
    if (this.activeMode === 'TWO_WORLDS' && this.analysisResult && this.analysisResult.visionData) {
      if (typeof this.geminiService.assembleOptimalImagePrompt === 'function') {
        this.analysisResult.optimalPrompt = this.geminiService.assembleOptimalImagePrompt(
          this.analysisResult.visionData,
          this.analysisResult.installedShorthands || [],
          this.twoWorldsConfig
        );
        this.analysisResult.generatedPrompt = this.analysisResult.optimalPrompt;
      }
    }
    this.render();
  }

  /**
   * Mengubah Konfigurasi Colour Grading (V3.6)
   */
  handleColourGradingConfigChange(newConfig) {
    this.colourGradingConfig = { ...this.colourGradingConfig, ...newConfig };
    if (this.activeMode === 'COLOUR_GRADING' && this.analysisResult && this.analysisResult.isColourGrading) {
      this.analysisResult.colourGradingConfig = this.colourGradingConfig;
    }
    this.render();
  }

  /**
   * Reset Colour Grading (Requirement 10)
   * Mengembalikan tampilan dan parameter grading ke foto original tanpa menghapus gambar
   */
  handleResetGrading() {
    this.colourGradingConfig = { ...DEFAULT_COLOUR_GRADING_CONFIG };
    this.render();
    this.showToast('Pengaturan Colour Grading telah di-reset ke nilai default (Foto Asli).');
  }

  /**
   * Memilih foto aktif dalam Batch Processing (Requirement 11)
   */
  handleSelectBatchImage(index) {
    if (this.batchGradingImages && this.batchGradingImages[index]) {
      this.activeGradingBatchIndex = index;
      this.uploadedImage = this.batchGradingImages[index];
      this.render();
    }
  }

  /**
   * Mengubah Pilihan Rasio Aspek (V3.3.5)
   * Mendukung 'auto' / 'Otomatis', '1:1', '2:3', '3:2', '3:4', '4:3', '9:16', '16:9'
   * Tanpa stretching, distorsi, atau perubahan proporsi subjek.
   */
  handleAspectRatioChange(ratio) {
    this.selectedAspectRatio = ratio;
    const effectiveRatio = (ratio === 'auto' || ratio === 'Otomatis')
      ? (this.uploadedImage ? (this.uploadedImage.detectedAspectRatio || this.uploadedImage.aspectRatio || '1:1') : '1:1')
      : ratio;

    if (this.analysisResult && this.analysisResult.visionData) {
      this.analysisResult.visionData.aspectRatio = effectiveRatio;
      if (this.analysisResult.visualBreakdown) {
        this.analysisResult.visualBreakdown['Aspect Ratio'] = effectiveRatio;
      }
      if (typeof this.geminiService.assembleOptimalImagePrompt === 'function') {
        this.analysisResult.optimalPrompt = this.geminiService.assembleOptimalImagePrompt(
          this.analysisResult.visionData,
          this.analysisResult.installedShorthands || [],
          this.activeMode === 'TWO_WORLDS' ? this.twoWorldsConfig : null
        );
        this.analysisResult.generatedPrompt = this.analysisResult.optimalPrompt;
      }
    }

    if (ratio === 'auto' || ratio === 'Otomatis') {
      this.showToast(`📐 Rasio Aspek: Otomatis (Asli: ${effectiveRatio})`);
    } else {
      this.showToast(`📐 Rasio Aspek Target: ${ratio} (Proporsi subjek dipertahankan)`);
    }
    this.render();
  }

  handleSelectPreset(presetPrompt) {
    this.currentPrompt = presetPrompt;
    this.runAnalysis(presetPrompt);
  }

  handleCopyPrompt(promptToCopy) {
    const clean = cleanPromptForCopy(promptToCopy);
    if (!clean) {
      this.showToast('Tidak ada prompt untuk disalin', 'error');
      return;
    }

    navigator.clipboard.writeText(clean).then(() => {
      this.showToast('✅ Main Prompt berhasil disalin ke clipboard!');
    }).catch(() => {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = clean;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      this.showToast('✅ Main Prompt berhasil disalin!');
    });
  }

  async handleEnrichPrompt() {
    const currentOptimal = this.analysisResult?.optimalPrompt || '';
    if (!currentOptimal || !currentOptimal.trim()) {
      this.showToast('Belum ada Prompt Optimal untuk diperkaya.', 'error');
      return;
    }

    const hasApiKey = Boolean(StorageService.getApiKey() && StorageService.getApiKey().trim());
    if (!hasApiKey || this.geminiService.status === GEMINI_STATUS.FAILED) {
      this.showToast('Fitur ini membutuhkan koneksi Gemini API di Pengaturan.', 'error');
      return;
    }

    if (this.isEnrichingPrompt) {
      return;
    }

    this.isEnrichingPrompt = true;
    this.render();

    try {
      const isTwoWorlds = this.activeMode === 'TWO_WORLDS' || this.analysisResult?.mode === 'TWO_WORLDS';

      if (isTwoWorlds) {
        this.showToast('Menyelaraskan & memperkaya prompt 2 Dunia dengan Gemini AI...', 'info');
        const res = await this.geminiService.enrichTwoWorldsPrompt({
          optimalPrompt: currentOptimal,
          generatedPrompt: this.analysisResult?.generatedPrompt || '',
          twoWorldsConfig: this.twoWorldsConfig,
          analysisResult: this.analysisResult
        });
        if (res && res.success && res.enrichedPrompt) {
          this.analysisResult.optimalPrompt = res.enrichedPrompt;
          const toastMsg = (res.conflictsResolved && res.conflictsResolved.length > 0)
            ? '✨ Prompt Optimal 2 Dunia berhasil diperkaya & konflik diselaraskan!'
            : '✨ Prompt Optimal 2 Dunia berhasil diperkaya dengan AI!';
          this.showToast(toastMsg, 'success');
        } else {
          throw new Error('Hasil pengayaan AI 2 Dunia tidak valid.');
        }
      } else {
        this.showToast('Memperkaya prompt dengan Gemini AI...', 'info');
        const res = await this.geminiService.enrichPrompt(currentOptimal, this.analysisResult);
        if (res && res.success && res.enrichedPrompt) {
          this.analysisResult.optimalPrompt = res.enrichedPrompt;
          this.showToast('✨ Prompt Optimal berhasil diperkaya dengan AI!', 'success');
        } else {
          throw new Error('Hasil pengayaan AI tidak valid.');
        }
      }
    } catch (err) {
      console.warn('Enrich prompt error:', err);
      this.showToast(`Gagal memperkaya prompt: ${err.message}`, 'error');
    } finally {
      this.isEnrichingPrompt = false;
      this.render();
    }
  }

  handleAddShorthand(code) {
    if (!code) return;
    const currentInstalled = this.analysisResult.installedShorthands || [];
    if (!currentInstalled.includes(code)) {
      const updated = [...currentInstalled, code];
      this.updateInstalledShorthands(updated);
      this.showToast(`Shorthand ${code} ditambahkan.`);
    }
  }

  handleRemoveShorthand(code) {
    const currentInstalled = this.analysisResult.installedShorthands || [];
    const updated = currentInstalled.filter(c => c !== code);
    this.updateInstalledShorthands(updated);
    this.showToast(`Shorthand ${code} dilepas.`);
  }

  handleToggleRecommendation(code) {
    const currentInstalled = this.analysisResult.installedShorthands || [];
    if (currentInstalled.includes(code)) {
      this.handleRemoveShorthand(code);
    } else {
      this.handleAddShorthand(code);
    }
  }

  updateInstalledShorthands(newInstalledList) {
    this.analysisResult.installedShorthands = newInstalledList;
    // Reconstruct optimal prompt (100% AI-Readable English across all modes)
    if ((this.analysisResult.mode === 'IMAGE_TO_PROMPT' || this.analysisResult.mode === 'TWO_WORLDS') && this.analysisResult.visionData) {
      this.analysisResult.optimalPrompt = this.geminiService.assembleOptimalImagePrompt(
        this.analysisResult.visionData,
        newInstalledList,
        this.analysisResult.mode === 'TWO_WORLDS' ? this.twoWorldsConfig : null
      );
    } else if (this.analysisResult.isColourGrading) {
      if (typeof this.geminiService.assembleImageRepairPrompt === 'function') {
        const activeItem = this.uploadedImagesList[this.activeUploadedImageIndex];
        const currentTelemetry = activeItem?.colorTelemetry || activeItem?.visualTelemetry || this.analysisResult.telemetry || null;
        const updatedResult = this.geminiService.assembleImageRepairPrompt({
          ...this.analysisResult,
          colourGradingConfig: this.colourGradingConfig,
          telemetry: currentTelemetry,
          installedOverrides: newInstalledList
        });
        this.analysisResult.optimalPrompt = updatedResult.optimalPrompt;
      }
    } else if (this.analysisResult.isImageRepair && this.analysisResult.repairInstructions) {
      const baseOpt = this.analysisResult.englishBasePrompt || toAiEnglishPrompt(this.analysisResult.repairInstructions.trim());
      this.analysisResult.optimalPrompt = newInstalledList.length > 0
        ? `${baseOpt} ${newInstalledList.join(' ')}`.trim()
        : baseOpt;
    } else {
      const baseText = this.analysisResult.englishBasePrompt || toAiEnglishPrompt(this.analysisResult.cleanText || '');
      this.analysisResult.optimalPrompt = newInstalledList.length > 0
        ? `${baseText}. ${newInstalledList.join(' ')}`.trim()
        : baseText;
    }

    // Sync active and checked states on cards
    if (this.analysisResult.recommendations) {
      for (const rec of this.analysisResult.recommendations) {
        rec.checked = newInstalledList.includes(rec.code);
        rec.active = rec.checked;
      }
    }
    if (this.analysisResult.primaryShorthands) {
      for (const p of this.analysisResult.primaryShorthands) {
        p.checked = newInstalledList.includes(p.code);
        p.active = p.checked;
      }
    }
    if (this.analysisResult.relatedShorthands) {
      for (const r of this.analysisResult.relatedShorthands) {
        r.checked = newInstalledList.includes(r.code);
        r.active = r.checked;
      }
    }
    if (this.analysisResult.similarShorthands) {
      for (const s of this.analysisResult.similarShorthands) {
        s.checked = newInstalledList.includes(s.code);
        s.active = s.checked;
      }
    }

    this.render();
  }

  handleResolveConflict(conflictId, action) {
    const conflict = this.analysisResult.conflicts.find(c => c.id === conflictId);
    if (!conflict) return;

    let updated = [...(this.analysisResult.installedShorthands || [])];
    const isLockConflict = conflict.type === 'EDIT_VS_LOCK' || (conflict.shorthandA && conflict.shorthandA.includes('lock'));

    if (action === 'use_user_edit') {
      // Keep edit / option B, remove lock / option A
      updated = updated.filter(c => c !== conflict.shorthandA);
      const toastMsg = isLockConflict
        ? `Kunci ${conflict.shorthandA} dilepas sesuai instruksi ubah.`
        : `Memilih ${conflict.shorthandB}, ${conflict.shorthandA} dihapus.`;
      this.showToast(toastMsg);
    } else if (action === 'keep_lock') {
      // Keep lock / option A, remove edit / option B
      updated = updated.filter(c => c !== conflict.shorthandB);
      if (!updated.includes(conflict.shorthandA)) {
        updated.push(conflict.shorthandA);
      }
      const toastMsg = isLockConflict
        ? `Lock ${conflict.shorthandA} dipertahankan.`
        : `Memilih ${conflict.shorthandA}, ${conflict.shorthandB} dihapus.`;
      this.showToast(toastMsg);
    } else if (action === 'dismiss') {
      this.showToast('Peringatan konflik diabaikan.');
    }

    // Filter out resolved conflict
    this.analysisResult.conflicts = this.analysisResult.conflicts.filter(c => c.id !== conflictId);
    this.updateInstalledShorthands(updated);
  }

  // --- Catalog Actions ---
  async handleAddShorthandSubmit(entry) {
    if (!this.duplicateWarning) {
      const sim = this.catalogRepo.detectSimilarFunction(entry);
      if (sim.hasSimilar) {
        this.duplicateWarning = sim;
        this.render();
        return;
      }
    }

    try {
      await this.catalogRepo.add(entry);
      this.catalog = this.catalogRepo.getAll();
      this.geminiService.catalog = this.catalog;
      this.geminiService.localEngine.catalog = this.catalog;
      this.isAddModalOpen = false;
      this.duplicateWarning = null;
      this.showToast(`Shorthand ${entry.code} berhasil disimpan ke User Catalog!`);
      this.render();
    } catch (err) {
      this.showToast(`Gagal menambahkan: ${err.message}`, 'error');
    }
  }

  handleExportCatalog() {
    try {
      const json = this.catalogRepo.exportCatalog();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `psa-v2-catalog-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      this.showToast('✅ Katalog berhasil diekspor (JSON aman tanpa rahasia)!');
    } catch (err) {
      this.showToast(`Gagal mengekspor: ${err.message}`, 'error');
    }
  }

  async handleImportCatalog(jsonText, mode) {
    if (!jsonText || !jsonText.trim()) {
      this.showToast('Silakan pilih file atau paste JSON katalog.', 'error');
      return;
    }
    try {
      const res = await this.catalogRepo.importCatalog(jsonText, mode);
      this.catalog = this.catalogRepo.getAll();
      this.geminiService.catalog = this.catalog;
      this.geminiService.localEngine.catalog = this.catalog;
      this.isImportModalOpen = false;
      this.showToast(`✅ Berhasil mengimpor ${res.count} shorthand (${mode})!`);
      this.render();
    } catch (err) {
      this.showToast(`Gagal impor: ${err.message}`, 'error');
    }
  }

  async handleResetUserCatalog() {
    try {
      await this.catalogRepo.resetUserCatalog();
      this.catalog = this.catalogRepo.getAll();
      this.geminiService.catalog = this.catalog;
      this.geminiService.localEngine.catalog = this.catalog;
      this.showToast('User Catalog berhasil direset. Core Catalog tetap aman.');
      this.render();
    } catch (err) {
      this.showToast(`Gagal mereset: ${err.message}`, 'error');
    }
  }

  async handleTestConnection(apiKey, modelName) {
    this.showToast('Menguji koneksi ke Gemini API...', 'info');
    const res = await this.geminiService.testConnection(apiKey, modelName);
    if (res.success) {
      this.showToast(res.message, 'success');
    } else {
      this.showToast(res.message, 'error');
    }
    this.render();
  }

  handleSaveSettings(apiKey, modelName) {
    StorageService.setApiKey(apiKey);
    StorageService.setModel(modelName);
    this.showToast('Pengaturan BYOK berhasil disimpan!', 'success');
    this.geminiService.testConnection(apiKey, modelName).then(() => this.render());
  }

  handleClearKey() {
    StorageService.clearApiKey();
    this.geminiService.status = GEMINI_STATUS.UNCONFIGURED;
    this.showToast('API Key telah dihapus dari perangkat ini.');
    this.render();
  }

  // --- KAMUS SHORTHAND HANDLERS ---
  async handleDictionarySearch(query) {
    this.dictionaryState.searchQuery = query;
    if (!query || !query.trim()) {
      this.dictionaryState.searchResults = [];
      this.dictionaryState.hasSearched = false;
      this.dictionaryState.searchNotice = null;
      this.render();
      return;
    }

    this.dictionaryState.isSearching = true;
    this.dictionaryState.hasSearched = true;
    this.render();

    try {
      const searchRes = await DictionaryService.search(query, this.catalog, this.geminiService);
      this.dictionaryState.isSearching = false;
      this.dictionaryState.searchResults = searchRes.results;
      this.dictionaryState.searchNotice = searchRes.notice;
    } catch (err) {
      console.warn('Dictionary search error:', err);
      this.dictionaryState.isSearching = false;
      this.dictionaryState.searchResults = [];
      this.dictionaryState.searchNotice = 'Pencarian shorthand sedang tidak tersedia. Silakan coba lagi.';
    }
    this.render();
  }

  handleDictionaryAddShorthand(item) {
    if (!item) return;
    const code = (item.code || '').trim();
    if (!code) return;

    const alreadySelected = this.dictionaryState.selectedShorthands.some(
      s => (typeof s === 'string' ? s : s.code).toLowerCase() === code.toLowerCase()
    );

    if (!alreadySelected) {
      this.dictionaryState.selectedShorthands.push(item);
      this.showToast(`Ditambahkan: ${code}`);
      this.render();
    } else {
      this.showToast(`${code} sudah ada di daftar terpilih`, 'info');
    }
  }

  handleDictionaryRemoveShorthand(code) {
    if (!code) return;
    this.dictionaryState.selectedShorthands = this.dictionaryState.selectedShorthands.filter(
      s => (typeof s === 'string' ? s : s.code).toLowerCase() !== code.toLowerCase()
    );
    this.showToast(`Dihapus: ${code}`, 'info');
    this.render();
  }

  handleDictionaryClearAll() {
    this.dictionaryState.selectedShorthands = [];
    this.showToast('Seluruh shorthand terpilih telah dikosongkan.', 'info');
    this.render();
  }

  async handleDictionaryCopy() {
    const copyText = DictionaryService.formatSelectedForCopy(this.dictionaryState.selectedShorthands);
    if (!copyText) {
      this.showToast('Belum ada shorthand yang dipilih untuk disalin.', 'warning');
      return;
    }

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(copyText);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = copyText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      this.showToast(`✓ Shorthand berhasil disalin: ${copyText}`);
    } catch (err) {
      console.warn('Copy failed:', err);
      this.showToast(`Shorthand: ${copyText}`);
    }
  }

  render() {
    const geminiStatusInfo = this.geminiService.getStatus();

    // 1. Header
    const headerComponent = renderHeader(
      this.activeTab,
      geminiStatusInfo,
      (tab) => {
        this.activeTab = tab;
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      () => {
        this.activeTab = 'settings';
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    );

    // 2. Main Page View
    let pageContent = null;

    if (this.activeTab === 'analyzer') {
      const hasApiKey = Boolean(StorageService.getApiKey() && StorageService.getApiKey().trim());
      const isOnlineActive = hasApiKey && this.geminiService.status !== GEMINI_STATUS.FAILED;

      pageContent = renderAnalyzerPage({
        analysisResult: this.analysisResult,
        currentPrompt: this.currentPrompt,
        catalog: this.catalog,
        isAnalyzing: this.isAnalyzing,
        isOnlineActive,
        isEnriching: this.isEnrichingPrompt,
        activeMode: this.activeMode,
        uploadedImage: this.uploadedImage,
        selectedAspectRatio: this.selectedAspectRatio,
        onAspectRatioChange: (ratio) => this.handleAspectRatioChange(ratio),
        twoWorldsConfig: this.twoWorldsConfig,
        onTwoWorldsConfigChange: (newConfig) => this.handleTwoWorldsConfigChange(newConfig),
        colourGradingConfig: this.colourGradingConfig,
        onColourGradingConfigChange: (newConfig) => this.handleColourGradingConfigChange(newConfig),
        onResetGrading: () => this.handleResetGrading(),
        batchImages: this.batchGradingImages,
        activeBatchIndex: this.activeGradingBatchIndex,
        onSelectBatchImage: (idx) => this.handleSelectBatchImage(idx),
        onModeChange: (mode) => {
          if (this.activeMode !== mode) {
            this.activeMode = mode;
            this.analysisResult = this.geminiService.localEngine.getEmptyResult();
            this.render();
          }
        },
        onImageSelected: (img, batchList) => {
          this.uploadedImage = img;
          if (batchList && Array.isArray(batchList) && batchList.length > 0) {
            this.batchGradingImages = batchList;
            this.activeGradingBatchIndex = 0;
          } else if (img) {
            this.batchGradingImages = [img];
            this.activeGradingBatchIndex = 0;
          } else {
            this.batchGradingImages = [];
            this.activeGradingBatchIndex = 0;
          }
          this.analysisResult = this.geminiService.localEngine.getEmptyResult();
          this.render();
          if (this.activeMode === 'IMAGE_TO_PROMPT' || this.activeMode === 'TWO_WORLDS') {
            this.runAnalysis(this.currentPrompt);
          }
        },
        onImageRemoved: () => {
          this.uploadedImage = null;
          this.batchGradingImages = [];
          this.activeGradingBatchIndex = 0;
          this.analysisResult = this.geminiService.localEngine.getEmptyResult();
          this.render();
        },
        onAnalyze: (text) => this.runAnalysis(text),
        onReset: () => this.handleReset(),
        onClear: () => this.handleClear(),
        onSelectPreset: (text) => this.handleSelectPreset(text),
        onCopyPrompt: (prompt) => this.handleCopyPrompt(prompt),
        onCopyGeneratedPrompt: (text) => this.handleCopyPrompt(text),
        onEnrichPrompt: () => this.handleEnrichPrompt(),
        onAddShorthand: (code) => this.handleAddShorthand(code),
        onRemoveShorthand: (code) => this.handleRemoveShorthand(code),
        onToggleRecommendation: (code) => this.handleToggleRecommendation(code),
        onResolveConflict: (id, act) => this.handleResolveConflict(id, act)
      });
    } else if (this.activeTab === 'json-test') {
      pageContent = renderJsonTestPage({
        analysisResult: this.analysisResult,
        onCopyJson: (jsonStr) => {
          navigator.clipboard.writeText(jsonStr);
          this.showToast('Output JSON berhasil disalin!');
        }
      });
    } else if (this.activeTab === 'catalog') {
      pageContent = renderCatalogPage({
        catalog: this.catalog,
        activeCategory: this.catalogCategory,
        activeTarget: this.catalogTarget,
        activeRecLevel: this.catalogRecLevel,
        searchQuery: this.catalogSearchQuery,
        currentPage: this.catalogCurrentPage,
        pageSize: 12,
        selectedDetailCode: this.selectedDetailCode,
        isAddModalOpen: this.isAddModalOpen,
        isImportModalOpen: this.isImportModalOpen,
        duplicateWarning: this.duplicateWarning,
        onSelectCategory: (cat) => {
          this.catalogCategory = cat;
          this.catalogCurrentPage = 1;
          this.render();
        },
        onSelectTarget: (tgt) => {
          this.catalogTarget = tgt;
          this.catalogCurrentPage = 1;
          this.render();
        },
        onSelectRecLevel: (lvl) => {
          this.catalogRecLevel = lvl;
          this.catalogCurrentPage = 1;
          this.render();
        },
        onSearchChange: (query) => {
          this.catalogSearchQuery = query;
          this.catalogCurrentPage = 1;
          this.render();
        },
        onPageChange: (newPage) => {
          this.catalogCurrentPage = newPage;
          this.render();
        },
        onOpenDetail: (code) => {
          this.selectedDetailCode = code;
          this.render();
        },
        onCloseDetail: () => {
          this.selectedDetailCode = null;
          this.render();
        },
        onOpenAddModal: () => {
          this.isAddModalOpen = true;
          this.duplicateWarning = null;
          this.render();
        },
        onCloseAddModal: () => {
          this.isAddModalOpen = false;
          this.duplicateWarning = null;
          this.render();
        },
        onSubmitAddShorthand: async (entry) => {
          await this.handleAddShorthandSubmit(entry);
        },
        onOpenImportModal: () => {
          this.isImportModalOpen = true;
          this.render();
        },
        onCloseImportModal: () => {
          this.isImportModalOpen = false;
          this.render();
        },
        onSubmitImport: async (jsonText, mode) => {
          await this.handleImportCatalog(jsonText, mode);
        },
        onExportCatalog: () => {
          this.handleExportCatalog();
        },
        onResetUserCatalog: async () => {
          if (confirm('Apakah Anda yakin ingin mereset User Catalog? Shorthand custom Anda akan dihapus. CORE CATALOG bawaan tetap 100% aman.')) {
            await this.handleResetUserCatalog();
          }
        },
        onAddShorthandToPrompt: (code) => {
          this.handleAddShorthand(code);
          this.activeTab = 'analyzer';
          this.render();
          this.showToast(`Shorthand ${code} ditambahkan ke prompt analyzer!`);
        }
      });
    } else if (this.activeTab === 'dictionary') {
      pageContent = renderDictionaryPage({
        searchQuery: this.dictionaryState.searchQuery,
        searchResults: this.dictionaryState.searchResults,
        selectedShorthands: this.dictionaryState.selectedShorthands,
        isSearching: this.dictionaryState.isSearching,
        searchNotice: this.dictionaryState.searchNotice,
        hasSearched: this.dictionaryState.hasSearched,
        onSearch: (q) => this.handleDictionarySearch(q),
        onAddShorthand: (item) => this.handleDictionaryAddShorthand(item),
        onRemoveShorthand: (code) => this.handleDictionaryRemoveShorthand(code),
        onClearAll: () => this.handleDictionaryClearAll(),
        onCopyShorthands: () => this.handleDictionaryCopy()
      });
    } else if (this.activeTab === 'settings') {
      pageContent = renderSettingsPage({
        geminiStatusInfo,
        onTestConnection: (key, model) => this.handleTestConnection(key, model),
        onSaveSettings: (key, model) => this.handleSaveSettings(key, model),
        onClearKey: () => this.handleClearKey()
      });
    }

    // 3. Assemble DOM
    this.appRoot.innerHTML = `
      <div class="app-container">
        ${headerComponent.html}
        <main class="main-content">
          ${pageContent.html}
        </main>
        <footer class="app-footer">
          <div class="footer-container">
            <div>
              <strong>PROMPT SHORTHAND ANALYZER V3.0</strong> &mdash; Safe Patch-Only Architecture
            </div>
            <div>
              BYOK Gemini API &bull; Fallback Offline Heuristic &bull; Kamus Shorthand Enabled
            </div>
          </div>
        </footer>
      </div>
    `;

    // 4. Bind interactive events
    headerComponent.bindEvents(this.appRoot);
    if (pageContent.bindEvents) {
      pageContent.bindEvents(this.appRoot);
    }
  }
}

// Resilient App Bootstrapping
function initPromptShorthandApp() {
  if (window.__PSA_APP__) return;
  const rootEl = document.getElementById('app');
  if (rootEl) {
    window.__PSA_APP__ = new App();
    window.__PSA_APP__.render();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPromptShorthandApp);
} else {
  initPromptShorthandApp();
}

// Fallback window load listener in case of late asset injection
window.addEventListener('load', initPromptShorthandApp);
