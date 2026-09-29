/**
 * Test Suite: Local Rule-Based Analyzer Verification
 */

const assert = require("assert");
const { LocalAnalyzer } = require("../js/localAnalyzer.js");

function runAnalyzerTests() {
  console.log("=== Running Local Analyzer Tests ===");

  // 1. Empty Prompt Handling
  const emptyRes = LocalAnalyzer.analyze("");
  assert.strictEqual(emptyRes.metrics.wordCount, 0, "Prompt kosong harus menghasilkan 0 kata");
  assert.strictEqual(emptyRes.recommendations.length, 0, "Prompt kosong tidak boleh menghasilkan rekomendasi");
  console.log("✓ Penanganan input prompt kosong berhasil");

  // 2. Intent Detection: Code Generation
  const codePrompt = "Tolong buatkan fungsi di TypeScript untuk memvalidasi email regex dan berikan unit test Jest.";
  const codeRes = LocalAnalyzer.analyze(codePrompt);
  assert.strictEqual(codeRes.intent, "code", `Ekspektasi intent 'code', diterima '${codeRes.intent}'`);
  console.log("✓ Deteksi intent kode & dev berhasil");

  // 3. Intent Detection: Image Generation
  const imagePrompt = "Foto sinematik seorang ksatria di tengah hutan berkabut, cinematic lighting, bokeh, 35mm lens, widescreen 16:9.";
  const imageRes = LocalAnalyzer.analyze(imagePrompt);
  assert.strictEqual(imageRes.intent, "image", `Ekspektasi intent 'image', diterima '${imageRes.intent}'`);
  console.log("✓ Deteksi intent gambar / Midjourney berhasil");

  // 4. Intent Detection: Reasoning & Deliberation
  const reasoningPrompt = "Pikirkan solusinya secara bertahap dan jelaskan langkah demi langkah kalkulasi laba ruginya.";
  const reasoningRes = LocalAnalyzer.analyze(reasoningPrompt);
  assert.strictEqual(reasoningRes.intent, "reasoning", `Ekspektasi intent 'reasoning', diterima '${reasoningRes.intent}'`);
  console.log("✓ Deteksi intent penalaran bertahap (Chain-of-Thought) berhasil");

  // 5. Existing Shorthand Detection
  const promptWithExisting = "[ROLE: Senior Architect] [TASK: Build API] Buat endpoint REST --ar 16:9 <thinking>cek auth dulu</thinking>";
  const detected = LocalAnalyzer.detectExistingShorthands(promptWithExisting);
  assert(detected.length >= 4, `Harus mendeteksi minimal 4 tag/flag (Ditemukan: ${detected.length})`);
  const tagNames = detected.map(d => d.tag);
  assert(tagNames.includes("ROLE"), "Harus mendeteksi tag ROLE");
  assert(tagNames.includes("TASK"), "Harus mendeteksi tag TASK");
  assert(tagNames.includes("--ar"), "Harus mendeteksi flag --ar");
  assert(tagNames.includes("thinking"), "Harus mendeteksi tag thinking");
  console.log(`✓ Deteksi shorthand yang sudah ada berhasil (${detected.length} tag terdeteksi)`);

  // 6. Missing Structure Detection
  const loosePrompt = "Buat deskripsi produk sepatu lari.";
  const looseRes = LocalAnalyzer.analyze(loosePrompt);
  assert(looseRes.missingStructure.length > 0, "Prompt polos harus memiliki rekomendasi elemen struktur yang hilang");
  console.log(`✓ Deteksi celah struktur berhasil (${looseRes.missingStructure.length} celah teridentifikasi)`);

  // 7. Token Estimation & Optimization Output
  const verbosePrompt = "Halo AI, tolong bantu saya untuk membuatkan rancangan database e-commerce. Jangan ada penjelasan tambahan dan format hanya berupa JSON murni.";
  const optRes = LocalAnalyzer.analyze(verbosePrompt);
  assert(optRes.metrics.estimatedTokens > 0, "Estimasi token harus > 0");
  assert(optRes.metrics.potentialTokenSavings > 0, "Estimasi penghematan token harus > 0");
  assert(optRes.optimizedPrompt.length > 0, "Harus menghasilkan prompt teroptimasi");
  assert(optRes.recommendations.length > 0, "Harus menghasilkan rekomendasi shorthand pengganti");
  // 8. Regression Test: User Manual Test Case (Contextual Image Shorthand & Substitution)
  const userPrompt = "Buatkan foto seorang wanita profesional berdiri di kantor modern, medium shot, pencahayaan natural, pakaian formal, latar belakang bersih, cinematic.";
  const userRes = LocalAnalyzer.analyze(userPrompt);

  assert.strictEqual(userRes.intent, "image", `Prompt foto harus terdeteksi sebagai 'image', diterima '${userRes.intent}'`);
  
  // Must recommend actual visual shorthands from catalog
  const recCodes = userRes.recommendations.map(r => r.code);
  assert(recCodes.includes("medium shot"), "Harus merekomendasikan shorthand 'medium shot'");
  assert(recCodes.includes("natural lighting"), "Harus merekomendasikan shorthand 'natural lighting'");
  assert(recCodes.includes("negative space, clean backdrop"), "Harus merekomendasikan shorthand 'negative space, clean backdrop'");
  
  // Final prompt MUST NOT contain generic metadata like [TASK: ...] or [FMT: Structured Markdown]
  assert(!userRes.optimizedPrompt.includes("[TASK:"), "Prompt gambar tidak boleh dibungkus metadata [TASK:]");
  assert(!userRes.optimizedPrompt.includes("[FMT:"), "Prompt gambar tidak boleh dibungkus metadata [FMT:]");
  
  // Final prompt MUST contain actual shorthands that exist in prompt
  assert(userRes.optimizedPrompt.includes("medium shot"), "Hasil harus memuat 'medium shot'");
  assert(userRes.optimizedPrompt.includes("natural lighting"), "Hasil harus memuat 'natural lighting'");
  assert(userRes.optimizedPrompt.includes("negative space, clean backdrop"), "Hasil harus memuat 'negative space, clean backdrop'");
  
  // MUST NOT contain unsolicited parameters not requested by user
  assert(!userRes.optimizedPrompt.includes("--ar"), "Hasil TIDAK boleh memuat parameter '--ar' jika prompt asli tidak meminta rasio");
  assert(!userRes.optimizedPrompt.includes("--v"), "Hasil TIDAK boleh memuat parameter '--v' jika prompt asli tidak menyebut versi");
  
  // Missing structure MUST NOT report --ar or --no as gaps when prompt doesn't mention them
  assert.strictEqual(userRes.missingStructure.length, 0, "Prompt foto lengkap tanpa indikasi celah tidak boleh memunculkan celah palsu");
  assert(!userRes.missingStructure.some(m => m.tag.includes("--ar")), "Parameter --ar TIDAK boleh muncul sebagai celah jika rasio tidak disebut");
  assert(!userRes.missingStructure.some(m => m.tag.includes("--no")), "Parameter --no TIDAK boleh muncul sebagai celah jika tidak diminta");

  // Must preserve un-shorthanded creative terms
  assert(userRes.optimizedPrompt.includes("wanita profesional berdiri di kantor modern"), "Harus mempertahankan deskripsi subjek");
  assert(userRes.optimizedPrompt.includes("pakaian formal"), "Harus mempertahankan detail pakaian formal");
  assert(userRes.optimizedPrompt.includes("cinematic"), "Harus mempertahankan nuansa cinematic");
  console.log("✓ Regresi test manual prompt foto berhasil: Shorthand aktual diterapkan, over-recommendation dan celah palsu dicegah");

  // 9. Prompt WITH explicit aspect ratio requested
  const ratioPrompt = "Foto lanskap pemandangan pegunungan saat senja, widescreen 16:9, natural lighting.";
  const ratioRes = LocalAnalyzer.analyze(ratioPrompt);
  assert(ratioRes.optimizedPrompt.includes("--ar 16:9"), "Jika pengguna meminta widescreen 16:9, parameter --ar 16:9 HARUS disertakan");
  assert(!ratioRes.optimizedPrompt.includes("--v"), "Parameter --v tetap TIDAK boleh muncul karena tidak diminta");
  console.log("✓ Pengujian prompt dengan rasio eksplisit berhasil: --ar disertakan hanya saat diminta");

  // 10. Prompt with vague orientation indication -> should flag missing aspect ratio!
  const vagueOrientPrompt = "Foto pemandangan kota malam hari untuk wallpaper vertikal hp.";
  const vagueOrientRes = LocalAnalyzer.analyze(vagueOrientPrompt);
  assert(vagueOrientRes.missingStructure.some(m => m.tag.includes("--ar")), "Prompt dengan orientasi samar harus memunculkan celah aspek rasio");
  console.log("✓ Celah struktural terbukti hanya muncul saat didukung indikasi konteks nyata");

  console.log("--> Seluruh pengujian Local Analyzer BERHASIL!\n");
}

module.exports = { runAnalyzerTests };

if (require.main === module) {
  runAnalyzerTests();
}
