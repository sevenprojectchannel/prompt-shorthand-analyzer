/**
 * Storage Service - Prompt Shorthand Analyzer
 * Manages secure client-side storage for BYOK Gemini API Key, preferences, and prompt history.
 * No data is ever transmitted to an external server other than direct Google Gemini REST endpoint.
 */

const STORAGE_KEYS = {
  GEMINI_API_KEY: "psa_byok_gemini_api_key",
  GEMINI_MODEL: "psa_selected_gemini_model",
  PROMPT_HISTORY: "psa_prompt_history_v1",
  THEME_PREFERENCE: "psa_theme_preference"
};

const StorageService = {
  /**
   * Save Gemini API Key securely in localStorage
   * @param {string} key 
   */
  setApiKey(key) {
    if (!key || typeof key !== "string") {
      localStorage.removeItem(STORAGE_KEYS.GEMINI_API_KEY);
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEYS.GEMINI_API_KEY, key.trim());
    } catch (e) {
      console.error("Gagal menyimpan API Key ke localStorage:", e);
    }
  },

  /**
   * Retrieve stored Gemini API Key
   * @returns {string}
   */
  getApiKey() {
    try {
      return localStorage.getItem(STORAGE_KEYS.GEMINI_API_KEY) || "";
    } catch (e) {
      console.error("Gagal membaca API Key dari localStorage:", e);
      return "";
    }
  },

  /**
   * Remove stored Gemini API Key
   */
  clearApiKey() {
    try {
      localStorage.removeItem(STORAGE_KEYS.GEMINI_API_KEY);
    } catch (e) {
      console.error("Gagal menghapus API Key:", e);
    }
  },

  /**
   * Check if Gemini API Key is configured
   * @returns {boolean}
   */
  hasApiKey() {
    const key = this.getApiKey();
    return Boolean(key && key.length > 5);
  },

  /**
   * Model preference handling
   */
  getSelectedModel() {
    return localStorage.getItem(STORAGE_KEYS.GEMINI_MODEL) || "gemini-2.5-flash";
  },

  setSelectedModel(modelName) {
    localStorage.setItem(STORAGE_KEYS.GEMINI_MODEL, modelName);
  },

  /**
   * Theme preference (dark / light)
   */
  getTheme() {
    return localStorage.getItem(STORAGE_KEYS.THEME_PREFERENCE) || "dark";
  },

  setTheme(theme) {
    localStorage.setItem(STORAGE_KEYS.THEME_PREFERENCE, theme);
  },

  /**
   * Prompt History Management
   */
  getHistory() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROMPT_HISTORY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Gagal membaca riwayat prompt:", e);
      return [];
    }
  },

  saveToHistory(promptItem) {
    try {
      const history = this.getHistory();
      const newItem = {
        id: "hist_" + Date.now(),
        timestamp: new Date().toISOString(),
        originalPrompt: promptItem.originalPrompt,
        optimizedPrompt: promptItem.optimizedPrompt,
        intent: promptItem.intent || "general",
        tokenSavingsEstimate: promptItem.tokenSavingsEstimate || 0
      };
      
      // Avoid duplicate consecutive entries
      if (history.length > 0 && history[0].originalPrompt === newItem.originalPrompt) {
        return history;
      }

      // Keep max 20 recent items
      const updated = [newItem, ...history].slice(0, 20);
      localStorage.setItem(STORAGE_KEYS.PROMPT_HISTORY, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error("Gagal menyimpan riwayat prompt:", e);
      return [];
    }
  },

  clearHistory() {
    try {
      localStorage.removeItem(STORAGE_KEYS.PROMPT_HISTORY);
    } catch (e) {
      console.error("Gagal mengosongkan riwayat:", e);
    }
  }
};

// Export for Node.js test runner & browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = { StorageService, STORAGE_KEYS };
}
