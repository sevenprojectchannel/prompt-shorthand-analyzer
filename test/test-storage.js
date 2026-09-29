/**
 * Test Suite: Storage & BYOK Management Verification
 */

const assert = require("assert");

// Polyfill minimal localStorage for Node environment
global.localStorage = {
  store: {},
  getItem(key) {
    return this.store[key] || null;
  },
  setItem(key, value) {
    this.store[key] = String(value);
  },
  removeItem(key) {
    delete this.store[key];
  },
  clear() {
    this.store = {};
  }
};

const { StorageService, STORAGE_KEYS } = require("../js/storage.js");

function runStorageTests() {
  console.log("=== Running Storage & BYOK Tests ===");
  global.localStorage.clear();

  // 1. Initial State
  assert.strictEqual(StorageService.hasApiKey(), false, "Awalnya tidak boleh ada API Key");
  assert.strictEqual(StorageService.getApiKey(), "", "API Key kosong");
  console.log("✓ Status awal BYOK bersih");

  // 2. Set and Get API Key
  const testKey = "AIzaSyFakeTestKeyForUnitTestingOnly12345";
  StorageService.setApiKey(testKey);
  assert.strictEqual(StorageService.hasApiKey(), true, "Harus mengonfirmasi keberadaan API Key");
  assert.strictEqual(StorageService.getApiKey(), testKey, "API Key harus cocok");
  console.log("✓ Penyimpanan dan pembacaan API Key berhasil");

  // 3. Clear API Key
  StorageService.clearApiKey();
  assert.strictEqual(StorageService.hasApiKey(), false, "Setelah clear, API Key harus hilang");
  console.log("✓ Pembersihan API Key berhasil");

  // 4. History Management
  const hist = StorageService.saveToHistory({
    originalPrompt: "Tolong buatkan fungsi python",
    optimizedPrompt: "[TASK: Create Python function]",
    intent: "code",
    tokenSavingsEstimate: 15
  });

  assert(Array.isArray(hist), "Riwayat harus berupa array");
  assert.strictEqual(hist.length, 1, "Riwayat harus berisi 1 item");
  assert.strictEqual(hist[0].intent, "code");
  console.log("✓ Penyimpanan riwayat prompt berhasil");

  console.log("--> Seluruh pengujian Storage & BYOK BERHASIL!\n");
}

module.exports = { runStorageTests };

if (require.main === module) {
  runStorageTests();
}
