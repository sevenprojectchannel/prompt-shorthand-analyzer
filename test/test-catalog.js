/**
 * Test Suite: Catalog Verification
 */

const assert = require("assert");
const { SHORTHAND_CATALOG, getAllCategories, findShorthandsByCategory, searchShorthands } = require("../js/catalog.js");

function runCatalogTests() {
  console.log("=== Running Catalog Tests ===");

  // 1. Verify Catalog Array Existence and Count
  assert(Array.isArray(SHORTHAND_CATALOG), "SHORTHAND_CATALOG harus berupa array");
  assert(SHORTHAND_CATALOG.length >= 10, `Katalog harus memiliki minimal 10 item (Ditemukan: ${SHORTHAND_CATALOG.length})`);
  console.log(`✓ Total item katalog: ${SHORTHAND_CATALOG.length}`);

  // 2. Verify Schema Integrity for each item
  const validCategories = ["structure", "format", "reasoning", "image", "persona", "code"];
  SHORTHAND_CATALOG.forEach((item, idx) => {
    assert(item.id, `Item indeks ${idx} harus memiliki ID`);
    assert(item.code, `Item ${item.id} harus memiliki kode shorthand`);
    assert(validCategories.includes(item.category), `Item ${item.id} memiliki kategori tidak valid: ${item.category}`);
    assert(item.name, `Item ${item.id} harus memiliki nama`);
    assert(item.description, `Item ${item.id} harus memiliki deskripsi`);
    assert(Array.isArray(item.keywords) && item.keywords.length > 0, `Item ${item.id} harus memiliki keywords`);
    assert(item.exampleOriginal, `Item ${item.id} harus memiliki contoh asli`);
    assert(item.exampleShorthand, `Item ${item.id} harus memiliki contoh shorthand`);
  });
  console.log("✓ Semua item katalog memiliki skema data yang valid");

  // 3. Verify Categories Query Helper
  const categories = getAllCategories();
  assert(categories.length >= 6, "Kategori yang terdaftar harus mencakup minimal 6 domain");
  const foundImageItems = findShorthandsByCategory("image");
  assert(foundImageItems.length > 0, "Harus menemukan item untuk kategori 'image'");
  console.log(`✓ Kategori filter 'image' mengembalikan ${foundImageItems.length} item`);

  // 4. Verify Search Query Helper
  const searchResult = searchShorthands("json");
  assert(searchResult.length > 0, "Pencarian 'json' harus menemukan hasil");
  assert(searchResult.some(item => item.code.includes("JSON")), "Hasil pencarian harus memuat kode JSON");
  console.log(`✓ Pencarian 'json' mengembalikan ${searchResult.length} item`);

  console.log("--> Seluruh pengujian katalog BERHASIL!\n");
}

module.exports = { runCatalogTests };

if (require.main === module) {
  runCatalogTests();
}
