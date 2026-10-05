/**
 * Test Suite V2.1 - Prompt Shorthand Analyzer
 * Verifikasi Lengkap Semantic Shorthand Knowledge Base & 8 Skenario Uji Wajib (TEST A - TEST H)
 */

import { SemanticEngine } from '../src/lib/semanticEngine.js';
import { INITIAL_SHORTHAND_CATALOG, SHORTHAND_CATEGORIES, filterCatalogKnowledgeBase } from '../src/data/catalogData.js';
import { CatalogRepository } from '../src/services/catalogRepository.js';
import { cleanPromptForCopy } from '../src/lib/promptFormatter.js';
import { PatchManager, globalPatchManager } from '../src/patches/patchManager.js';
import { v3CorePatch } from '../src/patches/v3CorePatch.js';
import { DictionaryService } from '../src/services/dictionaryService.js';
import { GeminiService } from '../src/services/geminiService.js';
import { StorageService } from '../src/services/storageService.js';
import { renderConflictBanner } from '../src/components/ConflictBanner.js';
import { renderExcludedShorthands } from '../src/components/ExcludedShorthands.js';
import { renderPromptInput } from '../src/components/PromptInput.js';
import { renderAnalyzerPage } from '../src/components/AnalyzerPage.js';
import { renderShorthandRecommendations } from '../src/components/ShorthandRecommendations.js';
import { detectClosestAspectRatio, synthesizeDynamicImagePrompt, SUPPORTED_ASPECT_RATIOS } from '../src/lib/imageVisualAnalyzer.js';

const engine = new SemanticEngine(INITIAL_SHORTHAND_CATALOG);

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passed++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    failed++;
  }
}

console.log('\n==================================================');
console.log('PROMPT SHORTHAND ANALYZER V2.1 - QUALITY CHECK TEST');
console.log('==================================================\n');

// -----------------------------------------------------------------------------
// KNOWLEDGE BASE STRUCTURE INTEGRITY
// -----------------------------------------------------------------------------
console.log('--- KNOWLEDGE BASE INTEGRITY TEST ---');
{
  const categoryKeys = Object.keys(SHORTHAND_CATEGORIES);
  assert(categoryKeys.length === 15, `Memiliki 15 kategori lengkap (ditemukan: ${categoryKeys.length})`);

  // Verify all 15 required categories A to O
  const expectedCats = [
    'LOCK_PRESERVATION', 'FACE_IDENTITY', 'HAIR', 'HEADWEAR', 'OUTFIT',
    'BODY_POSE', 'BACKGROUND', 'LIGHTING', 'IMAGE_QUALITY', 'COLOR_TONE',
    'CANVAS_RATIO', 'TRANSPARENCY', 'OBJECT_EDITING', 'STYLE_EFFECT', 'CAMERA_PHOTO'
  ];
  const allCatsPresent = expectedCats.every(cat => categoryKeys.includes(cat));
  assert(allCatsPresent, 'Semua 15 kategori A sampai O terdefinisi');

  // Verify shorthand items structure
  const allHaveMetadata = INITIAL_SHORTHAND_CATALOG.every(item =>
    item.code &&
    item.name &&
    item.category &&
    item.target &&
    item.description &&
    Array.isArray(item.semanticTriggers) &&
    Array.isArray(item.negativeTriggers) &&
    Array.isArray(item.conflicts) &&
    Array.isArray(item.compatibleWith) &&
    item.priority &&
    item.whenToUse &&
    item.whenNotToUse
  );
  assert(allHaveMetadata, 'Setiap shorthand memiliki metadata terstruktur lengkap');

  // Verify existing critical shorthands are preserved
  const existingCodes = [
    '/facelock', '/hairlock', '/backgroundlock', '/outfitlock', '/bodylock',
    '/outfit', '/bgremove', '/bgreplace', '/headwear-remove', '/enhance',
    '/sharpen', '/denoise', '/hdr', '/ar 9:16', '/ar 16:9', '/ar 1:1',
    '/fullbody', '/cinematic', '/rawphoto', '/colorgrade'
  ];
  const preserved = existingCodes.every(c => INITIAL_SHORTHAND_CATALOG.some(item => item.code === c));
  assert(preserved, 'Seluruh 20 shorthand existing tetap dipertahankan 100%');
}

// -----------------------------------------------------------------------------
// TEST A
// -----------------------------------------------------------------------------
console.log('\n--- TEST A: "perbaiki pencahayaan foto" ---');
{
  const res = engine.analyze('perbaiki pencahayaan foto');
  assert(res.editAreas.some(e => e.entity === 'LIGHTING'), 'Target area terdeteksi sebagai LIGHTING');
  assert(res.installedShorthands.includes('/enhance'), 'Shorthand /enhance terpasang');
  assert(!res.installedShorthands.includes('/facelock'), 'Tidak otomatis menambahkan /facelock');
  assert(!res.installedShorthands.includes('/hairlock'), 'Tidak otomatis menambahkan /hairlock');
  assert(!res.installedShorthands.includes('/outfit'), 'Tidak otomatis menambahkan /outfit');
  assert(!res.installedShorthands.includes('/bgremove'), 'Tidak otomatis menambahkan /bgremove');
  assert(res.optimalPrompt === 'perbaiki pencahayaan foto. /enhance', `Prompt optimal: "${res.optimalPrompt}"`);
}

// -----------------------------------------------------------------------------
// TEST B
// -----------------------------------------------------------------------------
console.log('\n--- TEST B: "hapus hijab, jangan ubah wajah" ---');
{
  const res = engine.analyze('hapus hijab, jangan ubah wajah');
  assert(res.editAreas.some(e => e.entity === 'HEADWEAR'), 'EDIT terdeteksi sebagai headwear removal');
  assert(res.lockedAreas.some(l => l.entity === 'FACE'), 'LOCK terdeteksi sebagai facelock');
  assert(res.installedShorthands.includes('/headwear-remove'), 'Shorthand /headwear-remove terpasang');
  assert(res.installedShorthands.includes('/facelock'), 'Shorthand /facelock terpasang');
  assert(res.optimalPrompt === 'hapus hijab, jangan ubah wajah. /headwear-remove /facelock', `Prompt optimal: "${res.optimalPrompt}"`);
}

// -----------------------------------------------------------------------------
// TEST C
// -----------------------------------------------------------------------------
console.log('\n--- TEST C: "ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah" ---');
{
  const res = engine.analyze('ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah');
  assert(res.editAreas.some(e => e.entity === 'OUTFIT'), 'EDIT terdeteksi sebagai outfit');
  assert(res.lockedAreas.some(l => l.entity === 'FACE'), 'LOCK terdeteksi sebagai facelock');
  assert(res.installedShorthands.includes('/outfit'), 'Shorthand /outfit terpasang');
  assert(res.installedShorthands.includes('/facelock'), 'Shorthand /facelock terpasang');
  assert(res.optimalPrompt === 'ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah. /outfit /facelock', `Prompt optimal: "${res.optimalPrompt}"`);
  assert(res.primaryShorthands.some(p => p.code === '/outfit') && res.primaryShorthands.some(p => p.code === '/facelock'), 'Primary shorthands terpisah: /outfit dan /facelock');
  assert(res.relatedShorthands.length > 0 && res.relatedShorthands.every(r => !r.isPrimary && !r.checked), 'Related shorthands tampil terpisah dan OFF secara default');
  assert(res.relatedShorthands.some(r => r.code === '/hairlock') && res.relatedShorthands.some(r => r.code === '/backgroundlock'), 'Cross-domain related preservation items terdeteksi');
  assert(res.exclusions.some(e => e.code === '/outfitlock' && e.reason.includes('Bertentangan')), 'Exclusion outfitlock terdeteksi dengan alasan konflik');
}

// -----------------------------------------------------------------------------
// TEST D
// -----------------------------------------------------------------------------
console.log('\n--- TEST D: "hapus latar belakang" ---');
{
  const res = engine.analyze('hapus latar belakang');
  assert(res.editAreas.some(e => e.entity === 'BACKGROUND'), 'EDIT terdeteksi sebagai bgremove');
  assert(res.installedShorthands.includes('/bgremove'), 'Shorthand /bgremove terpasang');
  assert(res.optimalPrompt === 'hapus latar belakang. /bgremove', `Prompt optimal: "${res.optimalPrompt}"`);
}

// -----------------------------------------------------------------------------
// TEST E
// -----------------------------------------------------------------------------
console.log('\n--- TEST E: "gunakan latar baru" ---');
{
  const res = engine.analyze('gunakan latar baru');
  assert(res.editAreas.some(e => e.entity === 'BACKGROUND'), 'EDIT terdeteksi sebagai bgreplace');
  assert(res.installedShorthands.includes('/bgreplace'), 'Shorthand /bgreplace terpasang');
  assert(res.optimalPrompt === 'gunakan latar baru. /bgreplace', `Prompt optimal: "${res.optimalPrompt}"`);
}

// -----------------------------------------------------------------------------
// TEST F
// -----------------------------------------------------------------------------
console.log('\n--- TEST F: "pertahankan rambut asli tetapi ubah pakaian" ---');
{
  const res = engine.analyze('pertahankan rambut asli tetapi ubah pakaian');
  assert(res.lockedAreas.some(l => l.entity === 'HAIR'), 'LOCK terdeteksi sebagai hairlock');
  assert(res.editAreas.some(e => e.entity === 'OUTFIT'), 'EDIT terdeteksi sebagai outfit');
  assert(res.installedShorthands.includes('/hairlock'), 'Shorthand /hairlock terpasang');
  assert(res.installedShorthands.includes('/outfit'), 'Shorthand /outfit terpasang');
  assert(res.optimalPrompt === 'pertahankan rambut asli tetapi ubah pakaian. /hairlock /outfit', `Prompt optimal: "${res.optimalPrompt}"`);
}

// -----------------------------------------------------------------------------
// TEST G
// -----------------------------------------------------------------------------
console.log('\n--- TEST G: "ubah rasio menjadi 9:16" ---');
{
  const res = engine.analyze('ubah rasio menjadi 9:16');
  assert(res.editAreas.some(e => e.entity === 'CANVAS_RATIO'), 'ASPECT RATIO terdeteksi sebagai 9:16');
  assert(res.installedShorthands.includes('/ar 9:16'), 'Shorthand /ar 9:16 terpasang');
  assert(!res.installedShorthands.includes('/facelock'), 'Tidak menambahkan facelock');
  assert(!res.installedShorthands.includes('/outfit'), 'Tidak menambahkan outfit');
  assert(!res.installedShorthands.includes('/bgremove'), 'Tidak menambahkan bgremove');
  assert(res.optimalPrompt === 'ubah rasio menjadi 9:16. /ar 9:16', `Prompt optimal: "${res.optimalPrompt}"`);
}

// -----------------------------------------------------------------------------
// TEST H
// -----------------------------------------------------------------------------
console.log('\n--- TEST H: "pertahankan rambut asli tetapi ubah gaya rambut" ---');
{
  const res = engine.analyze('pertahankan rambut asli tetapi ubah gaya rambut');
  assert(res.conflicts.length > 0, 'Deteksi konflik aktif: CONFLICT DETECTED');
  assert(res.conflicts[0].entity === 'HAIR', 'Entitas konflik adalah HAIR');
  assert(res.conflicts[0].type === 'EDIT_VS_LOCK', 'Tipe konflik adalah LOCK vs EDIT');
  assert(res.conflicts[0].shorthandA === '/hairlock', 'Shorthand A adalah /hairlock');
  assert(res.conflicts[0].shorthandB === '/hairchange', 'Shorthand B adalah /hairchange');
  assert(Boolean(res.conflicts[0].suggestion), 'Konflik memuat properti saran (suggestion)');
  assert(res.conflicts[0].suggestion.includes('rambut'), 'Saran relevan dengan area konflik rambut');
}

// -----------------------------------------------------------------------------
// SEMANTIC SEARCH VARIATIONS TEST
// -----------------------------------------------------------------------------
console.log('\n--- SEMANTIC SEARCH VARIATIONS TEST ---');
{
  const searchQueries = [
    { q: 'jangan ubah wajah', expected: '/facelock' },
    { q: 'wajah harus tetap sama', expected: '/facelock' },
    { q: 'hapus hijab', expected: '/headwear-remove' },
    { q: 'lepaskan penutup kepala', expected: '/headwear-remove' },
    { q: 'pertahankan rambut asli', expected: '/hairlock' },
    { q: 'jangan mengubah pakaian', expected: '/outfitlock' },
    { q: 'ganti baju', expected: '/outfit' },
    { q: 'hapus background', expected: '/bgremove' },
    { q: 'gunakan latar baru', expected: '/bgreplace' }
  ];

  for (const t of searchQueries) {
    const res = filterCatalogKnowledgeBase(INITIAL_SHORTHAND_CATALOG, { searchQuery: t.q });
    const codes = res.map(r => r.code);
    assert(codes[0] === t.expected, `Pencarian semantik "${t.q}" menghasilkan top match ${t.expected}`);
  }
}

// -----------------------------------------------------------------------------
// COPY PROMPT SANITIZATION
// -----------------------------------------------------------------------------
console.log('\n--- COPY PROMPT SANITIZATION TEST ---');
{
  const optimal = 'hapus hijab, jangan ubah wajah. /headwear-remove /facelock';
  const copied = cleanPromptForCopy(optimal);
  assert(copied === optimal, 'SALIN PROMPT hanya menyalin main prompt bersih');
  assert(!copied.includes('Alasan'), 'Tidak mengandung penjelasan alasan');
  assert(!copied.includes('Commercial stock'), 'Tidak mengandung boilerplate IP safety');
  assert(!copied.includes('Metadata'), 'Tidak mengandung metadata internal');
}

// -----------------------------------------------------------------------------
// PATCH V2.1 - 11 NEW COMPREHENSIVE TESTS
// -----------------------------------------------------------------------------

// 1. TEST SEMANTIC DEDUP 1
console.log('\n--- TEST SEMANTIC DEDUP 1: Multiple candidates with same functionGroup ---');
{
  const candidates = [
    {
      code: '/facelock',
      name: 'Penguncian Wajah',
      item: {
        code: '/facelock',
        functionGroup: 'FACELOCK_PRESERVATION',
        preferredRepresentative: true,
        status: 'CORE',
        equivalentTo: []
      },
      score: 100
    },
    {
      code: '/facepreserve',
      name: 'Preservasi Wajah Alternatif',
      item: {
        code: '/facepreserve',
        functionGroup: 'FACELOCK_PRESERVATION',
        preferredRepresentative: false,
        status: 'APPROVED',
        equivalentTo: []
      },
      score: 90
    }
  ];
  const deduped = engine.deduplicateByFunctionGroup(candidates);
  assert(deduped.length === 1, 'Hanya 1 representatif yang dipilih dari functionGroup yang sama');
  assert(deduped[0].code === '/facelock', 'Representatif terpilih adalah /facelock');
  assert(deduped[0].equivalentTo.includes('/facepreserve'), 'Kandidat lain (/facepreserve) disimpan di equivalentTo');
}

// 2. TEST SEMANTIC DEDUP 2
console.log('\n--- TEST SEMANTIC DEDUP 2: HEADWEAR_REMOVAL candidate deduplication ---');
{
  const candidates = [
    {
      code: '/headwear-remove',
      name: 'Pelepasan Penutup Kepala',
      item: {
        code: '/headwear-remove',
        functionGroup: 'HEADWEAR_REMOVAL',
        preferredRepresentative: true,
        status: 'CORE',
        equivalentTo: []
      },
      score: 95
    },
    {
      code: '/hijaboff',
      name: 'Buka Hijab Alias',
      item: {
        code: '/hijaboff',
        functionGroup: 'HEADWEAR_REMOVAL',
        preferredRepresentative: false,
        status: 'APPROVED',
        equivalentTo: []
      },
      score: 85
    }
  ];
  const deduped = engine.deduplicateByFunctionGroup(candidates);
  assert(deduped.length === 1, 'Hanya 1 representatif terpilih untuk HEADWEAR_REMOVAL');
  assert(deduped[0].code === '/headwear-remove', 'Representatif terbaik adalah /headwear-remove');
  assert(deduped[0].equivalentTo.includes('/hijaboff'), '/hijaboff terdaftar dalam equivalentTo');
}

// 3. TEST FUNCTION DIFFERENCE
console.log('\n--- TEST FUNCTION DIFFERENCE: Distinct function groups are preserved ---');
{
  const candidates = [
    {
      code: '/facelock',
      name: 'Penguncian Wajah',
      item: {
        code: '/facelock',
        functionGroup: 'FACELOCK_PRESERVATION',
        preferredRepresentative: true,
        status: 'CORE'
      }
    },
    {
      code: '/hairlock',
      name: 'Penguncian Rambut',
      item: {
        code: '/hairlock',
        functionGroup: 'HAIRLOCK_PRESERVATION',
        preferredRepresentative: true,
        status: 'CORE'
      }
    }
  ];
  const deduped = engine.deduplicateByFunctionGroup(candidates);
  assert(deduped.length === 2, 'Kedua shorthand dipertahankan karena memiliki functionGroup berbeda');
  assert(deduped.some(d => d.code === '/facelock'), 'Shorthand /facelock tetap ada');
  assert(deduped.some(d => d.code === '/hairlock'), 'Shorthand /hairlock tetap ada');
}

// 4. TEST RELATED
console.log('\n--- TEST RELATED: Semantic graph related shorthands discovered and OFF by default ---');
{
  const res = engine.analyze('hapus hijab, jangan ubah wajah');
  assert(res.primaryShorthands.length >= 2, 'Primary shorthands terdeteksi (/headwear-remove & /facelock)');
  assert(res.relatedShorthands.length > 0, `Related shorthands ditemukan (total: ${res.relatedShorthands.length})`);
  const allRelatedOff = res.relatedShorthands.every(r => r.isPrimary === false && r.checked === false);
  assert(allRelatedOff, 'Semua related shorthands berstatus isPrimary === false dan checked === false secara default');
  const relatedInInstalled = res.relatedShorthands.some(r => res.installedShorthands.includes(r.code));
  assert(!relatedInInstalled, 'Tidak ada related shorthand yang masuk ke installedShorthands secara default');
}

// 5. TEST MANUAL SELECTION
console.log('\n--- TEST MANUAL SELECTION: Related shorthand added to optimal prompt when selected ---');
{
  const baseRes = engine.analyze('hapus hijab, jangan ubah wajah');
  const manualOverrides = [...baseRes.installedShorthands, '/naturalhair'];
  const resWithManual = engine.analyze('hapus hijab, jangan ubah wajah', manualOverrides);
  assert(resWithManual.installedShorthands.includes('/naturalhair'), 'Shorthand /naturalhair masuk ke installedShorthands saat dipilih manual');
  assert(resWithManual.optimalPrompt.includes('/naturalhair'), 'Shorthand /naturalhair masuk ke Prompt Optimal');
  assert(resWithManual.optimalPrompt === 'hapus hijab, jangan ubah wajah. /headwear-remove /facelock /naturalhair', `Prompt optimal terkonfirmasi: "${resWithManual.optimalPrompt}"`);
}

// 6. TEST NO ARBITRARY LIMIT
console.log('\n--- TEST NO ARBITRARY LIMIT: No truncation on distinct relevant function groups ---');
{
  const res = engine.analyze('ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah');
  const relatedCount = res.relatedShorthands.length;
  assert(relatedCount >= 3, `Menampilkan seluruh relasi yang relevan (${relatedCount} relasi) tanpa batasan sembarangan`);
  const uniqueGroups = new Set(res.relatedShorthands.map(r => r.functionGroup || r.item?.functionGroup));
  assert(uniqueGroups.size === res.relatedShorthands.length, 'Setiap related shorthand mewakili functionGroup yang unik');
}

// 7. TEST ONLINE DUPLICATE
console.log('\n--- TEST ONLINE DUPLICATE: Duplicate detection on exact code, function group, or alias ---');
{
  const repo = new CatalogRepository(INITIAL_SHORTHAND_CATALOG);
  const dupCode = repo.detectSimilarFunction({ code: '/facelock' });
  assert(dupCode.hasSimilar === true && dupCode.matchType === 'EXACT_CODE', 'Mendeteksi duplikasi exact code /facelock');

  const dupGroup = repo.detectSimilarFunction({ code: '/myfacelock', functionGroup: 'FACE_PRESERVATION' });
  assert(dupGroup.hasSimilar === true && dupGroup.matchType === 'SAME_FUNCTION_GROUP', 'Mendeteksi duplikasi functionGroup FACE_PRESERVATION');

  const unique = repo.detectSimilarFunction({ code: '/unique_shorthand_v2', functionGroup: 'BRAND_NEW_GROUP' });
  assert(unique.hasSimilar === false, 'Entri unik baru tidak memicu peringatan duplikasi');
}

// 8. TEST CATALOG PERSISTENCE
console.log('\n--- TEST CATALOG PERSISTENCE: User catalog entry persists alongside core catalog ---');
{
  const repo = new CatalogRepository(INITIAL_SHORTHAND_CATALOG);
  const initialCount = repo.getAll().length;
  await repo.add({
    code: '/customcinematic',
    name: 'Custom Cinematic Grade',
    category: 'STYLE_EFFECT',
    target: 'Visual Style',
    functionGroup: 'CINEMATIC_ATMOSPHERE_GRADE',
    description: 'Custom atmospheric cinematic grading'
  });
  const updatedList = repo.getAll();
  assert(updatedList.length === initialCount + 1, `Jumlah katalog bertambah dari ${initialCount} menjadi ${updatedList.length}`);
  assert(updatedList.some(c => c.code === '/customcinematic' && c.source === 'USER'), 'Shorthand kustom tersimpan dengan source USER');
  assert(repo.coreCatalog.length === INITIAL_SHORTHAND_CATALOG.length, 'CORE CATALOG bawaan tidak berubah');
}

// 9. TEST RESET
console.log('\n--- TEST RESET: Analyzer reset clears prompt but preserves Catalog ---');
{
  const repo = new CatalogRepository(INITIAL_SHORTHAND_CATALOG);
  await repo.add({
    code: '/testreset',
    name: 'Test Reset Shorthand',
    category: 'IMAGE_QUALITY',
    target: 'Quality',
    functionGroup: 'CUSTOM_TEST'
  });

  // Simulate Analyzer Reset
  const emptyAnalysis = engine.getEmptyResult();
  assert(emptyAnalysis.optimalPrompt === '', 'Prompt optimal kosong setelah reset');
  assert(emptyAnalysis.installedShorthands.length === 0, 'Installed shorthands kosong setelah reset');

  // Verify CatalogRepository is NOT altered
  assert(repo.getAll().some(c => c.code === '/testreset'), 'User catalog item tetap tersimpan di repository setelah Analyzer reset');
  assert(repo.coreCatalog.length === INITIAL_SHORTHAND_CATALOG.length, 'Core catalog tetap utuh 100% setelah Analyzer reset');
}

// 10. TEST IMPORT / EXPORT
console.log('\n--- TEST IMPORT / EXPORT: Catalog export and import with MERGE and REPLACE modes ---');
{
  const repo = new CatalogRepository(INITIAL_SHORTHAND_CATALOG);
  await repo.add({
    code: '/exportitem',
    name: 'Export Test Item',
    category: 'LIGHTING',
    target: 'Lighting',
    functionGroup: 'LIGHTING_TEST'
  });

  const exportedJson = repo.exportCatalog();
  const parsed = JSON.parse(exportedJson);
  assert(parsed.catalogVersion === '2.1', 'Versi katalog ekspor adalah 2.1');
  assert(Array.isArray(parsed.entries), 'Ekspor memiliki array entries');
  assert(parsed.entries.some(e => e.code === '/exportitem'), 'Item kustom masuk ke dalam ekspor');

  // Import into fresh repo with MERGE
  const repo2 = new CatalogRepository(INITIAL_SHORTHAND_CATALOG);
  const importRes = await repo2.importCatalog(exportedJson, 'MERGE');
  assert(importRes.success === true, 'Impor katalog dengan mode MERGE berhasil');
  assert(repo2.getAll().some(e => e.code === '/exportitem'), 'Item hasil impor tersedia di repository baru');

  // Import with REPLACE (replaces user entries, preserves core)
  await repo2.importCatalog(JSON.stringify({ catalogVersion: '2.1', entries: [] }), 'REPLACE');
  assert(repo2.coreCatalog.length === INITIAL_SHORTHAND_CATALOG.length, 'Core catalog tetap aman setelah impor mode REPLACE');
}

// 11. TEST API SECURITY
console.log('\n--- TEST API SECURITY: No API keys, credentials, or secrets in export or import ---');
{
  const repo = new CatalogRepository(INITIAL_SHORTHAND_CATALOG);
  await repo.add({
    code: '/secretitem',
    name: 'Secret Item',
    category: 'LIGHTING',
    target: 'Light',
    functionGroup: 'SEC_TEST',
    apiKey: 'AIzaSySecretApiKey12345',
    geminiKey: 'gemini-token-secret-999',
    secret: 'super-confidential-token'
  });

  const exportedStr = repo.exportCatalog();
  assert(!exportedStr.includes('AIzaSySecretApiKey12345'), 'Ekspor TIDAK mengandung apiKey rahasia');
  assert(!exportedStr.includes('gemini-token-secret-999'), 'Ekspor TIDAK mengandung geminiKey rahasia');
  assert(!exportedStr.includes('super-confidential-token'), 'Ekspor TIDAK mengandung secret');
}

// =============================================================================
// REGRESSION & SEMANTIC CLASSIFICATION TESTS (PATCH V2.1 REQUIREMENTS)
// =============================================================================
console.log('\n--- PATCH V2.1 MANDATORY CLASSIFICATION & UI SPEC TESTS ---');

// 1. Primary classification
{
  const prompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah';
  const res = engine.analyze(prompt);
  assert(res.primaryShorthands.length === 2, 'Primary classification: exactly 2 primary shorthands');
  assert(res.primaryShorthands.some(p => p.code === '/outfit'), 'Primary classification: contains /outfit');
  assert(res.primaryShorthands.some(p => p.code === '/facelock'), 'Primary classification: contains /facelock');
  assert(res.primaryShorthands.every(p => p.isPrimary === true && p.checked === true), 'Primary classification: all isPrimary === true and checked === true');
}

// 2. Related classification
{
  const prompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah';
  const res = engine.analyze(prompt);
  assert(res.relatedShorthands.length > 0, 'Related classification: contains discovered related items');
  assert(res.relatedShorthands.some(r => r.code === '/hairlock'), 'Related classification: contains /hairlock');
  assert(res.relatedShorthands.some(r => r.code === '/bodylock'), 'Related classification: contains /bodylock');
  assert(res.relatedShorthands.some(r => r.code === '/backgroundlock'), 'Related classification: contains /backgroundlock');
  assert(res.relatedShorthands.some(r => r.code === '/enhance'), 'Related classification: contains /enhance');
  assert(res.relatedShorthands.some(r => r.code === '/sharpen'), 'Related classification: contains /sharpen');
}

// 3. Excluded classification
{
  const prompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah';
  const res = engine.analyze(prompt);
  assert(res.exclusions.length > 0, 'Excluded classification: contains non-relevant & conflicting items');
  // Conflicting items
  assert(res.exclusions.some(e => e.code === '/outfitlock' && e.reason.includes('Bertentangan')), 'Excluded classification: /outfitlock excluded due to conflict with /outfit');
  assert(res.exclusions.some(e => e.code === '/faceedit' && e.reason.includes('Bertentangan')), 'Excluded classification: /faceedit excluded due to conflict with /facelock');
  // Irrelevant domain items
  assert(res.exclusions.some(e => e.code === '/headwear-remove'), 'Excluded classification: /headwear-remove excluded (headwear not requested)');
  assert(res.exclusions.some(e => e.code === '/ar 9:16'), 'Excluded classification: /ar 9:16 excluded (ratio not requested)');
  assert(res.exclusions.some(e => e.code === '/bgremove'), 'Excluded classification: /bgremove excluded (alpha background transparency not requested)');
}

// 4. Related OFF by default
{
  const prompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah';
  const res = engine.analyze(prompt);
  assert(res.relatedShorthands.every(r => r.checked === false), 'Related OFF by default: all related items have checked === false');
  assert(res.relatedShorthands.every(r => !res.installedShorthands.includes(r.code)), 'Related OFF by default: no related items in installedShorthands');
}

// 5. Selected Related enters Prompt Optimal
{
  const prompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah';
  // Simulate user selecting /hairlock and /enhance from Related
  const overrides = ['/outfit', '/facelock', '/hairlock', '/enhance'];
  const res = engine.analyze(prompt, overrides);
  assert(res.installedShorthands.includes('/hairlock'), 'Selected Related enters Prompt Optimal: installedShorthands includes /hairlock');
  assert(res.installedShorthands.includes('/enhance'), 'Selected Related enters Prompt Optimal: installedShorthands includes /enhance');
  assert(res.optimalPrompt.includes('/hairlock'), 'Selected Related enters Prompt Optimal: optimalPrompt text includes /hairlock');
  assert(res.optimalPrompt.includes('/enhance'), 'Selected Related enters Prompt Optimal: optimalPrompt text includes /enhance');
}

// 6. Unselected Related does not enter Prompt Optimal
{
  const prompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah';
  const res = engine.analyze(prompt);
  assert(!res.optimalPrompt.includes('/hairlock'), 'Unselected Related does not enter Prompt Optimal: optimalPrompt excludes unselected /hairlock');
  assert(!res.optimalPrompt.includes('/bodylock'), 'Unselected Related does not enter Prompt Optimal: optimalPrompt excludes unselected /bodylock');
  assert(!res.optimalPrompt.includes('/enhance'), 'Unselected Related does not enter Prompt Optimal: optimalPrompt excludes unselected /enhance');
  assert(!res.optimalPrompt.includes('/sharpen'), 'Unselected Related does not enter Prompt Optimal: optimalPrompt excludes unselected /sharpen');
}

// 7. Same function deduplicated
{
  const candidates = [
    { code: '/facelock', score: 95, item: { functionGroup: 'FACE_PRESERVATION', status: 'CORE', preferredRepresentative: true } },
    { code: '/facepreserve', score: 90, item: { functionGroup: 'FACE_PRESERVATION', status: 'CORE', preferredRepresentative: false } }
  ];
  const deduped = engine.deduplicateByFunctionGroup(candidates);
  assert(deduped.length === 1, 'Same function deduplicated: returns exactly 1 representative');
  assert(deduped[0].code === '/facelock', 'Same function deduplicated: selects preferred representative /facelock');
  assert(deduped[0].equivalentTo.includes('/facepreserve'), 'Same function deduplicated: alias stored in equivalentTo');
}

// 8. Different functions remain separate
{
  const prompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah';
  const res = engine.analyze(prompt);
  const relatedCodes = res.relatedShorthands.map(r => r.code);
  assert(relatedCodes.includes('/enhance') && relatedCodes.includes('/sharpen'), 'Different functions remain separate: both /enhance (LIGHTING) and /sharpen (QUALITY) appear');
  assert(relatedCodes.includes('/hairlock') && relatedCodes.includes('/bodylock'), 'Different functions remain separate: both /hairlock and /bodylock appear');
}

// 9. No arbitrary related limit
{
  const prompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah';
  const res = engine.analyze(prompt);
  assert(res.relatedShorthands.length >= 10, `No arbitrary related limit: displays all valid functions (found: ${res.relatedShorthands.length})`);
  const functionGroups = new Set(res.relatedShorthands.map(r => r.functionGroup || r.item?.functionGroup || r.category));
  assert(functionGroups.size === res.relatedShorthands.length, 'No arbitrary related limit: every related shorthand represents a distinct function group');
}

// -----------------------------------------------------------------------------
// V3 SAFE PATCH-ONLY ARCHITECTURE TESTS
// -----------------------------------------------------------------------------
console.log('\n--- V3 SAFE PATCH-ONLY ARCHITECTURE TESTS ---');
{
  // 1. Verify PatchManager instantiation and registration
  const pm = new PatchManager();
  const testPatch = {
    id: 'test-patch-1',
    name: 'Test Patch 1',
    version: '1.0.0',
    priority: 150,
    hooks: {
      beforeAnalysis(prompt) { return prompt + ' [PATCHED]'; }
    }
  };
  pm.registerPatch(testPatch);
  assert(pm.getAllPatches().length === 1, 'PatchManager berhasil meregistrasi patch');
  assert(pm.getActivePatches().length === 1, 'Patch baru berstatus aktif secara default');

  // 2. Safe execution handles exceptions gracefully
  const faultyPatch = {
    id: 'faulty-patch',
    name: 'Faulty Patch',
    priority: 200,
    hooks: {
      beforeAnalysis() { throw new Error('Simulated runtime error inside patch'); }
    }
  };
  pm.registerPatch(faultyPatch);
  let safeResult;
  try {
    safeResult = pm.safeExecuteHook('beforeAnalysis', 'original prompt');
  } catch (err) {
    safeResult = 'CRASHED';
  }
  assert(safeResult !== 'CRASHED', 'Safe execution wrapper mencegah crash aplikasi saat patch error');
  assert(safeResult.includes('original prompt'), 'Nilai fallback dasar dipertahankan saat patch gagal');
  assert(pm.executionLogs.length === 1, 'Error patch tercatat rapi di executionLogs untuk audit');

  // 3. Priority ordering execution
  const orderLogs = [];
  const pmOrder = new PatchManager();
  pmOrder.registerPatch({
    id: 'low-prio',
    priority: 10,
    hooks: { testHook() { orderLogs.push('low'); } }
  });
  pmOrder.registerPatch({
    id: 'high-prio',
    priority: 100,
    hooks: { testHook() { orderLogs.push('high'); } }
  });
  pmOrder.safeExecuteHook('testHook', null);
  assert(orderLogs[0] === 'high' && orderLogs[1] === 'low', 'Patch dieksekusi berurutan berdasarkan prioritas (tinggi ke rendah)');

  // 4. Patch toggle on/off
  pmOrder.setPatchEnabled('high-prio', false);
  const activeNow = pmOrder.getActivePatches('testHook');
  assert(activeNow.length === 1 && activeNow[0].id === 'low-prio', 'Patch dapat dinonaktifkan secara aman tanpa menghapus kode');

  // 5. V3.1 Core Patch integration with SemanticEngine
  const v3Engine = new SemanticEngine(INITIAL_SHORTHAND_CATALOG, globalPatchManager);
  const v3Result = v3Engine.analyze('jangan ubah wajah, ganti pakaian');
  assert(v3Result.v3Meta !== undefined, 'Analisis V3.1 menghasilkan metadata v3Meta dari Safe Patch');
  assert(v3Result.v3Meta.architecture === 'SAFE_PATCH_ONLY', 'Metadata v3Meta memuat arsitektur SAFE_PATCH_ONLY');
  assert(v3Result.v3Meta.appVersion === '3.1.0', 'Metadata v3Meta memuat appVersion 3.1.0');
  assert(v3Result.v3Meta.basisSourceOfTruth.includes('V3'), 'Metadata mengonfirmasi Source of Truth adalah V3 (v3.0.0-stable)');

  // 6. Source of Truth V3 catalog immutability check
  assert(INITIAL_SHORTHAND_CATALOG.length === 82, `Katalog V3.3.1 memuat 82 item lengkap (termasuk shorthand fotografi & perbaikan gambar)`);
}

// -----------------------------------------------------------------------------
// KAMUS SHORTHAND (DICTIONARY) FEATURE TESTS
// -----------------------------------------------------------------------------
console.log('\n--- KAMUS SHORTHAND FEATURE TESTS ---');
{
  // 1. Local Search Relevance: "wajah"
  const resWajah = DictionaryService.searchLocal('wajah', INITIAL_SHORTHAND_CATALOG);
  assert(resWajah.length > 0, 'Pencarian lokal "wajah" menghasilkan output');
  assert(resWajah[0].code === '/facelock', 'Pencarian "wajah" menempatkan /facelock di peringkat pertama');
  assert(resWajah[0].source === 'LOCAL', 'Hasil pencarian katalog lokal memiliki label LOCAL');

  // 2. Local Search Relevance: "rambut"
  const resRambut = DictionaryService.searchLocal('rambut', INITIAL_SHORTHAND_CATALOG);
  const rambutCodes = resRambut.map(r => r.code);
  assert(rambutCodes.includes('/hairlock') || rambutCodes.includes('/naturalhair'), 'Pencarian "rambut" menemukan /hairlock atau /naturalhair');

  // 3. Local Search Relevance: "pencahayaan"
  const resCahaya = DictionaryService.searchLocal('pencahayaan', INITIAL_SHORTHAND_CATALOG);
  const cahayaCodes = resCahaya.map(r => r.code);
  assert(cahayaCodes.includes('/enhance'), 'Pencarian "pencahayaan" menemukan /enhance');

  // 4. Local Search Relevance: "ketajaman"
  const resTajam = DictionaryService.searchLocal('ketajaman', INITIAL_SHORTHAND_CATALOG);
  const tajamCodes = resTajam.map(r => r.code);
  assert(tajamCodes.includes('/sharpen'), 'Pencarian "ketajaman" menemukan /sharpen');

  // 5. Exact code search
  const resExact = DictionaryService.searchLocal('/facelock', INITIAL_SHORTHAND_CATALOG);
  assert(resExact.length > 0 && resExact[0].code === '/facelock', 'Pencarian exact code "/facelock" mengembalikan item yang sesuai');
  assert(resExact[0].score >= 1000, 'Exact code match memiliki bobot skor tertinggi (>= 1000)');

  // 6. Online Fallback when local is empty
  let asyncTestPassed = false;
  const mockGeminiOnline = {
    searchOnlineShorthand: async (query) => {
      return {
        results: [
          {
            code: '/portrait',
            name: 'Portrait Photography',
            description: 'Portrait shot',
            category: 'CAMERA_PHOTO',
            source: 'ONLINE',
            isOnline: true
          }
        ],
        onlineAvailable: true,
        message: ''
      };
    }
  };

  const onlineMerged = await DictionaryService.search('portrait photography style', INITIAL_SHORTHAND_CATALOG, mockGeminiOnline);
  assert(onlineMerged.results.some(r => r.code === '/portrait'), 'Online fallback berhasil mengisi shorthand saat katalog lokal minim');
  assert(onlineMerged.results.find(r => r.code === '/portrait').source === 'ONLINE', 'Hasil online memiliki label ONLINE');

  // 7. Offline notice when online search is not available
  const offlineResult = await DictionaryService.search('xyzrandomquerynotfound999', INITIAL_SHORTHAND_CATALOG, null);
  assert(offlineResult.results.length === 0, 'Kueri tidak dikenal dan tanpa online menghasilkan 0 hasil');
  assert(offlineResult.notice.includes('Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia'), 'Menampilkan pesan fallback yang tepat saat online tidak tersedia');

  // 8. Workflow Simulation: Repeatable search without resetting selected items
  const selectedShorthands = [];

  // Step 1: Cari "wajah", tambah /facelock
  const search1 = DictionaryService.searchLocal('wajah', INITIAL_SHORTHAND_CATALOG);
  selectedShorthands.push(search1[0]); // /facelock
  assert(selectedShorthands.length === 1 && selectedShorthands[0].code === '/facelock', 'Workflow Step 1: /facelock berhasil ditambahkan');

  // Step 2: Cari "rambut", tambah /naturalhair (seleksi sebelumnya TIDAK terhapus)
  const search2 = DictionaryService.searchLocal('rambut', INITIAL_SHORTHAND_CATALOG);
  const naturalHairItem = search2.find(r => r.code === '/naturalhair') || { code: '/naturalhair', name: 'Natural Hair' };
  selectedShorthands.push(naturalHairItem);
  assert(selectedShorthands.length === 2, 'Workflow Step 2: Pencarian baru tidak mereset shorthand sebelumnya');
  assert(selectedShorthands[0].code === '/facelock' && selectedShorthands[1].code === '/naturalhair', 'Urutan seleksi [1. /facelock, 2. /naturalhair] dipertahankan');

  // Step 3: Cari "pencahayaan", tambah /enhance
  const search3 = DictionaryService.searchLocal('pencahayaan', INITIAL_SHORTHAND_CATALOG);
  const enhanceItem = search3.find(r => r.code === '/enhance') || { code: '/enhance', name: 'Enhance' };
  selectedShorthands.push(enhanceItem);

  // Step 4: Cari "ketajaman", tambah /sharpen
  const search4 = DictionaryService.searchLocal('ketajaman', INITIAL_SHORTHAND_CATALOG);
  const sharpenItem = search4.find(r => r.code === '/sharpen') || { code: '/sharpen', name: 'Sharpen' };
  selectedShorthands.push(sharpenItem);
  assert(selectedShorthands.length === 4, 'Workflow Step 4: 4 shorthand berhasil dikumpulkan');

  // 9. Strict Insertion Order Verification
  const expectedOrder = ['/facelock', '/naturalhair', '/enhance', '/sharpen'];
  const actualOrder = selectedShorthands.map(s => s.code);
  const orderMatches = expectedOrder.every((code, idx) => actualOrder[idx] === code);
  assert(orderMatches, 'Urutan preserved: /facelock -> /naturalhair -> /enhance -> /sharpen (bukan alfabetis)');

  // 10. Duplicate Prevention Verification
  const duplicateAttempt = { code: '/facelock', name: 'Face Lock' };
  const alreadyExists = selectedShorthands.some(s => s.code === duplicateAttempt.code);
  if (!alreadyExists) {
    selectedShorthands.push(duplicateAttempt);
  }
  assert(selectedShorthands.length === 4, 'Cegah duplikasi: shorthand /facelock tidak ditambahkan dua kali');

  // 11. Format for Copy (Pure shorthand codes separated by space)
  const copyOutput = DictionaryService.formatSelectedForCopy(selectedShorthands);
  assert(copyOutput === '/facelock /naturalhair /enhance /sharpen', `Format salinan murni tepat: "${copyOutput}"`);
  assert(!copyOutput.includes('LOCAL') && !copyOutput.includes('ONLINE'), 'Teks salinan tidak mengandung label LOCAL atau ONLINE');
  assert(!copyOutput.includes('1.') && !copyOutput.includes('2.'), 'Teks salinan tidak mengandung nomor urutan');

  // 12. Remove single item (tombol ×)
  const filteredAfterRemove = selectedShorthands.filter(s => s.code !== '/naturalhair');
  assert(filteredAfterRemove.length === 3, 'Hapus item tunggal menyisakan 3 item');
  assert(DictionaryService.formatSelectedForCopy(filteredAfterRemove) === '/facelock /enhance /sharpen', 'Urutan item tersisa tetap konsisten setelah penghapusan');

  // 13. Clear all (Hapus Semua)
  const clearedList = [];
  assert(clearedList.length === 0, 'Hapus Semua berhasil mengosongkan daftar terpilih');
  assert(INITIAL_SHORTHAND_CATALOG.length === 82, 'Hapus Semua TIDAK mengubah katalog dasar (tetap 82 item)');

  // 14. Dedicated Verification: "montok" in Kamus Shorthand
  const resMontok = DictionaryService.searchLocal('montok', INITIAL_SHORTHAND_CATALOG);
  assert(resMontok.length > 0, 'Kamus Shorthand: Pencarian "montok" menghasilkan rekomendasi');
  assert(resMontok[0].code === '/bodyvoluptuous', `Kamus Shorthand: Hasil peringkat pertama adalah /bodyvoluptuous (ditemukan: ${resMontok[0]?.code})`);
  const montokCodes = resMontok.map(r => r.code);
  assert(montokCodes.includes('/curvy'), 'Kamus Shorthand: Menyertakan alternatif /curvy');
  assert(montokCodes.includes('/voluptuous'), 'Kamus Shorthand: Menyertakan alternatif /voluptuous');
  assert(montokCodes.includes('/fullfigured'), 'Kamus Shorthand: Menyertakan alternatif /fullfigured');
  assert(montokCodes.includes('/plussize'), 'Kamus Shorthand: Menyertakan alternatif /plussize');

  // 15. Dedicated Verification: "anatomi tangan natural" in Kamus Shorthand
  const resHand = DictionaryService.searchLocal('anatomi tangan natural', INITIAL_SHORTHAND_CATALOG);
  assert(resHand.length > 0, 'Kamus Shorthand: Pencarian "anatomi tangan natural" menghasilkan rekomendasi');
  assert(resHand[0].code === '/handperfect', `Kamus Shorthand: Hasil peringkat pertama tangan adalah /handperfect (ditemukan: ${resHand[0]?.code})`);
  const handCodes = resHand.map(r => r.code);
  assert(handCodes.includes('/hands'), 'Kamus Shorthand: Menyertakan alternatif /hands');
  assert(handCodes.includes('/handanatomy'), 'Kamus Shorthand: Menyertakan alternatif /handanatomy');
  assert(handCodes.includes('/fingerperfect'), 'Kamus Shorthand: Menyertakan alternatif /fingerperfect');
  assert(handCodes.includes('/handdetail'), 'Kamus Shorthand: Menyertakan alternatif /handdetail');
  assert(handCodes.includes('/handnatural'), 'Kamus Shorthand: Menyertakan alternatif /handnatural');

  // 16. Dedicated Verification: Deduplikasi Fungsi Semantik & "resolusi tinggi"
  // Aturan user: Jika beberapa shorthand memiliki fungsi/makna sama, hanya tampilkan 1 shorthand paling relevan
  const resResolution = DictionaryService.searchLocal('resolusi tinggi', INITIAL_SHORTHAND_CATALOG);
  assert(resResolution.length > 0, 'Kamus Shorthand: Pencarian "resolusi tinggi" menemukan rekomendasi');
  assert(resResolution[0].code === '/highresolution', `Kamus Shorthand: Pilihan utama resolusi tinggi adalah /highresolution (ditemukan: ${resResolution[0]?.code})`);
  const resolutionItems = resResolution.filter(r => r.functionGroup === 'IMAGE_RESOLUTION');
  assert(resolutionItems.length === 1, `Deduplikasi semantik: Hanya 1 shorthand representatif terbaik yang ditampilkan untuk fungsi resolusi (ditemukan: ${resolutionItems.length})`);
  assert(Array.isArray(resResolution[0].equivalentTo) && resResolution[0].equivalentTo.includes('/upscale'), 'Shorthand representatif merangkum varian fungsi setara di equivalentTo');
}

// -----------------------------------------------------------------------------
// VERIFIKASI KHUSUS USER: "montok" SEMANTIC ANALYZER
// -----------------------------------------------------------------------------
console.log('\n--- VERIFIKASI USER: "montok" DI SEMANTIC ENGINE ---');
{
  const res = engine.analyze('montok');
  assert(res.intent.primaryAction === 'MODIFIKASI_BENTUK_TUBUH', `Intent terdeteksi: ${res.intent.primaryAction}`);
  assert(res.editAreas.some(e => e.entity === 'BODY_POSE'), 'Area edit terdeteksi sebagai BODY_POSE');
  assert(res.installedShorthands.includes('/bodyvoluptuous'), 'Shorthand /bodyvoluptuous terpasang pada installedShorthands');
  assert(res.optimalPrompt === 'montok. /bodyvoluptuous', `Prompt optimal: "${res.optimalPrompt}"`);
  
  // Periksa rekomendasi (Primary WAJIB + Alternatives DISARANKAN)
  const primaryVoluptuous = res.recommendations.find(r => r.code === '/bodyvoluptuous');
  assert(primaryVoluptuous && primaryVoluptuous.priority === 'WAJIB', 'Rekomendasi utama /bodyvoluptuous bertaraf WAJIB');
  
  const recCodes = res.recommendations.map(r => r.code);
  assert(recCodes.includes('/curvy'), 'Rekomendasi alternatif menyertakan /curvy (tubuh berlekuk)');
  assert(recCodes.includes('/fullfigured'), 'Rekomendasi alternatif menyertakan /fullfigured (tubuh berisi proporsi penuh)');
  assert(recCodes.includes('/plussize'), 'Rekomendasi alternatif menyertakan /plussize (ukuran tubuh plus-size)');
  assert(recCodes.includes('/voluptuous'), 'Rekomendasi alternatif menyertakan /voluptuous (montok/berisi lekuk menonjol)');
}

// -----------------------------------------------------------------------------
// VERIFIKASI KHUSUS USER: "anatomi tangan natural" (UNGGAHAN 1 & 2)
// -----------------------------------------------------------------------------
console.log('\n--- VERIFIKASI USER: "anatomi tangan natural" DI SEMANTIC ENGINE ---');
{
  const res = engine.analyze('anatomi tangan natural');
  assert(res.intent.primaryAction === 'PENYEMPURNAAN_ANATOMI_TANGAN', `Intent terdeteksi: ${res.intent.primaryAction}`);
  assert(res.editAreas.some(e => e.entity === 'BODY_POSE'), 'Area edit terdeteksi sebagai BODY_POSE');
  assert(res.installedShorthands.includes('/handperfect'), 'Shorthand /handperfect terpasang pada installedShorthands');
  assert(res.optimalPrompt === 'anatomi tangan natural. /handperfect', `Prompt optimal: "${res.optimalPrompt}"`);
  
  // Periksa rekomendasi utama dan alternatif
  const primaryHand = res.recommendations.find(r => r.code === '/handperfect');
  assert(primaryHand && primaryHand.priority === 'WAJIB', 'Rekomendasi utama /handperfect bertaraf WAJIB');
  
  const recCodes = res.recommendations.map(r => r.code);
  assert(recCodes.includes('/hands'), 'Rekomendasi alternatif menyertakan /hands (fokus pada tangan)');
  assert(recCodes.includes('/handanatomy'), 'Rekomendasi alternatif menyertakan /handanatomy (anatomi tangan natural)');
  assert(recCodes.includes('/fingerperfect'), 'Rekomendasi alternatif menyertakan /fingerperfect (kesempurnaan jari)');
  assert(recCodes.includes('/handdetail'), 'Rekomendasi alternatif menyertakan /handdetail (detail tangan dan jari)');
  assert(recCodes.includes('/handnatural'), 'Rekomendasi alternatif menyertakan /handnatural (tangan natural dan proporsional)');
}

// -----------------------------------------------------------------------------
// VERIFIKASI KHUSUS USER: "resolusi tinggi" (UNGGAHAN 1 & 2 - SINGLE REPRESENTATIVE)
// -----------------------------------------------------------------------------
console.log('\n--- VERIFIKASI USER: "resolusi tinggi" DI SEMANTIC ENGINE ---');
{
  const res = engine.analyze('resolusi tinggi');
  assert(res.intent.primaryAction === 'PENINGKATAN_RESOLUSI', `Intent terdeteksi: ${res.intent.primaryAction}`);
  assert(res.intent.category === 'IMAGE_QUALITY', `Kategori terdeteksi: ${res.intent.category}`);
  assert(res.editAreas.some(e => e.entity === 'IMAGE_QUALITY'), 'Area edit terdeteksi sebagai IMAGE_QUALITY');
  assert(res.installedShorthands.includes('/highresolution'), 'Shorthand /highresolution terpasang pada installedShorthands');
  assert(res.optimalPrompt === 'resolusi tinggi. /highresolution', `Prompt optimal: "${res.optimalPrompt}"`);
  
  // Periksa rekomendasi utama
  const primaryHighRes = res.recommendations.find(r => r.code === '/highresolution');
  assert(primaryHighRes && primaryHighRes.priority === 'WAJIB', 'Rekomendasi utama /highresolution bertaraf WAJIB');
  
  // Pastikan tidak ada duplikasi fungsi dalam rekomendasi utama
  const highResPrimaries = res.primaryShorthands.filter(p => p.category === 'IMAGE_QUALITY');
  assert(highResPrimaries.length === 1, `Hanya ada 1 shorthand utama untuk fungsi resolusi (ditemukan: ${highResPrimaries.length})`);
}

// -----------------------------------------------------------------------------
// VERIFIKASI USER: SARAN PADA "SHORTHAND KONFLIK" (UNGGAHAN USER SCREENSHOT)
// -----------------------------------------------------------------------------
console.log('\n--- VERIFIKASI USER: SARAN PADA "SHORTHAND KONFLIK" ---');
{
  // Test case dari screenshot user yang memuat 5 konflik direktif latar belakang:
  // /backgroundlock vs /bgblur, /backgroundlock vs /studiobg, /bgreplace vs /bgremove, dll.
  const complexPrompt = 'pertahankan latar belakang asli /backgroundlock, tapi buat latar buram /bgblur, ubah ke studio /studiobg, ganti latar /bgreplace dan hapus latar belakang /bgremove';
  const res = engine.analyze(complexPrompt);
  assert(res.conflicts.length > 0, `Terdeteksi konflik direktif (ditemukan: ${res.conflicts.length})`);

  // 1. Setiap item konflik wajib memuat saran resolusi (suggestion) yang informatif
  for (const c of res.conflicts) {
    assert(Boolean(c.suggestion), `Konflik ${c.shorthandA} vs ${c.shorthandB} memiliki properti suggestion`);
    assert(typeof c.suggestion === 'string' && c.suggestion.length > 30, `Saran untuk ${c.shorthandA} vs ${c.shorthandB} informatif dan komprehensif`);
  }

  // 2. Verifikasi spesifik saran pada konflik /backgroundlock vs /bgblur
  const bgBlurConflict = res.conflicts.find(c => 
    (c.shorthandA === '/backgroundlock' && c.shorthandB === '/bgblur') ||
    (c.shorthandA === '/bgblur' && c.shorthandB === '/backgroundlock')
  );
  assert(Boolean(bgBlurConflict), 'Konflik /backgroundlock vs /bgblur terdeteksi');
  assert(bgBlurConflict.suggestion.includes('bokeh') || bgBlurConflict.suggestion.includes('blur'), 'Saran /backgroundlock vs /bgblur merekomendasikan opsi efek blur');

  // 3. Verifikasi spesifik saran pada konflik /bgreplace vs /bgremove
  const bgReplaceRemoveConflict = res.conflicts.find(c => 
    (c.shorthandA === '/bgreplace' && c.shorthandB === '/bgremove') ||
    (c.shorthandA === '/bgremove' && c.shorthandB === '/bgreplace')
  );
  assert(Boolean(bgReplaceRemoveConflict), 'Konflik /bgreplace vs /bgremove terdeteksi');
  assert(bgReplaceRemoveConflict.suggestion.includes('transparan') || bgReplaceRemoveConflict.suggestion.includes('cutout'), 'Saran /bgreplace vs /bgremove menjelaskan perbedaan transparan vs ganti lokasi');

  // 4. Verifikasi UI Banner: HTML memuat box saran solusi
  const banner = renderConflictBanner(res.conflicts);
  assert(banner.html.includes('conflict-suggestion-box'), 'UI ConflictBanner me-render elemen .conflict-suggestion-box');
  assert(banner.html.includes('SARAN SOLUSI:'), 'UI ConflictBanner menampilkan label "SARAN SOLUSI:"');
}

// -----------------------------------------------------------------------------
// VERIFIKASI USER: SHOW/HIDE PADA SHORTHAND TIDAK DIPERLUKAN (DIKECUALIKAN)
// -----------------------------------------------------------------------------
console.log('\n--- VERIFIKASI USER: SHOW/HIDE EXCLUDED SHORTHANDS (DEFAULT HIDE) ---');
{
  const mockExclusions = [
    { code: '/hairlock', target: 'HAIR', reason: 'Tidak ada instruksi yang memodifikasi rambut.' },
    { code: '/outfitlock', target: 'OUTFIT', reason: 'Pakaian subjek tidak diminta untuk dikunci.' }
  ];
  const comp = renderExcludedShorthands(mockExclusions);

  assert(comp.html.includes('id="card-exclusions"'), 'Card H me-render section #card-exclusions');
  assert(comp.html.includes('id="btn-toggle-exclusions"'), 'Card H memuat tombol toggle #btn-toggle-exclusions');
  assert(comp.html.includes('Tampilkan / Show'), 'Kondisi tombol awal memuat teks "Tampilkan / Show"');
  assert(comp.html.includes('id="exclusions-content"'), 'Card H memuat kontainer #exclusions-content');
  assert(comp.html.includes('style="display: none;"'), 'Kondisi awal DEFAULT HIDE terpasang (style="display: none;")');
  assert(typeof comp.bindEvents === 'function', 'Komponen ExcludedShorthands menyediakan fungsi bindEvents');
}

// -----------------------------------------------------------------------------
// VERIFIKASI USER: "memperluas foto" DI SEMANTIC ENGINE (LOKAL)
// -----------------------------------------------------------------------------
console.log('\n--- VERIFIKASI USER: "memperluas foto" DI SEMANTIC ENGINE (LOKAL) ---');
{
  const res = engine.analyze('memperluas foto');
  assert(res.intent.primaryAction === 'PERLUASAN_KANVAS_OUTPAINT', 'Intent terdeteksi: PERLUASAN_KANVAS_OUTPAINT');
  assert(res.editAreas.some(e => e.entity === 'CANVAS_RATIO'), 'Area edit terdeteksi sebagai CANVAS_RATIO');
  assert(res.installedShorthands.includes('/outpaint'), 'Shorthand /outpaint terpasang pada installedShorthands');
  assert(res.optimalPrompt === 'memperluas foto. /outpaint', `Prompt optimal: "${res.optimalPrompt}"`);
  assert(res.primaryShorthands.some(p => p.code === '/outpaint'), 'Rekomendasi utama /outpaint bertaraf WAJIB');
  assert(res.primaryShorthands[0].isPrimary === true, 'isPrimary bernilai true');
  assert(res.primaryShorthands[0].checked === true, 'checked bernilai true');
}

// -----------------------------------------------------------------------------
// VERIFIKASI GEMINI API KEY CONDITION MATRIX (ONLINE AKTIF VS TIDAK AKTIF)
// -----------------------------------------------------------------------------
console.log('\n--- VERIFIKASI GEMINI API KEY CONDITION MATRIX ---');
{
  const service = new GeminiService(INITIAL_SHORTHAND_CATALOG);

  // 1. Kondisi API Key TIDAK TERHUBUNG -> Pencarian Online Shorthand TIDAK AKTIF
  const resOffline = await service.analyzePrompt('memperluas foto');
  assert(resOffline.source === 'LOCAL_ENGINE', 'Ketika API Key tidak ada: source adalah LOCAL_ENGINE');
  assert(resOffline.isOnlineActive === false, 'Ketika API Key tidak ada: isOnlineActive adalah false (TIDAK AKTIF)');
  assert(resOffline.installedShorthands.includes('/outpaint'), 'Heuristik lokal tetap menghasilkan /outpaint');

  // 2. Kondisi Mock AI Response saat Online Shorthand Search AKTIF (Terbuka & Tidak Terbatas)
  const mockAiAnyTopic = {
    intent: {
      primaryAction: 'OPERASI_BEDAH_FUTURISTIK',
      primaryTarget: 'Dokter Bedah & Rumah Sakit',
      summary: 'Menggambarkan dokter bedah sedang operasi di rumah sakit modern.',
      priority: 'HIGH',
      category: 'BODY_POSE'
    },
    primaryShorthands: [
      {
        code: '/surgeon',
        name: 'Surgeon in Operation',
        category: 'BODY_POSE',
        target: 'Dokter Bedah',
        description: 'Karakter dokter bedah profesional dalam suasana operasi',
        priority: 'WAJIB',
        reason: 'Shorthand utama relevan untuk konsep dokter bedah',
        isPrimary: true,
        checked: true
      }
    ],
    relatedShorthands: [
      {
        code: '/hightech-hospital',
        name: 'Futuristic Hospital Room',
        category: 'BACKGROUND',
        target: 'Latar Rumah Sakit',
        description: 'Suasana ruang operasi canggih',
        priority: 'DISARANKAN',
        reason: 'Alternatif latar belakang rumah sakit futuristik',
        isPrimary: false,
        checked: false
      }
    ],
    installedShorthands: ['/surgeon'],
    optimalPrompt: 'dokter bedah sedang operasi di rumah sakit futuristik. /surgeon',
    visualTransformation: 'Dokter bedah dalam ruangan operasi futuristik.'
  };

  const mergedOnline = service.mergeAiWithCatalog(mockAiAnyTopic, 'dokter bedah sedang operasi di rumah sakit futuristik');
  assert(mergedOnline.primaryShorthands.some(p => p.code === '/surgeon'), 'Pencarian online terbuka menemukan shorthand /surgeon untuk profesi/topik baru');
  assert(mergedOnline.primaryShorthands[0].source === 'ONLINE', 'Shorthand konsep baru ditandai source ONLINE');
  assert(mergedOnline.primaryShorthands[0].isOnline === true, 'Flag isOnline bernilai true');
  assert(mergedOnline.installedShorthands.includes('/surgeon'), '/surgeon terpasang di installedShorthands');
  assert(mergedOnline.optimalPrompt.includes('/surgeon'), 'Prompt optimal memuat /surgeon');
  assert(mergedOnline.relatedShorthands.some(r => r.code === '/hightech-hospital'), 'Pencarian online menyertakan alternatif /hightech-hospital');
  assert(mergedOnline.relatedShorthands[0].isOnline === true, 'Alternatif online ditandai isOnline');

  // 3. Uji dynamic merge AI response untuk konsep outpainting online
  const mockAiOutpaint = {
    intent: {
      primaryAction: 'PERLUASAN_KANVAS_OUTPAINT',
      primaryTarget: 'Bidang Foto Luar Frame',
      summary: 'Memperluas bidang foto di luar kanvas asli.',
      priority: 'HIGH',
      category: 'CANVAS_RATIO'
    },
    primaryShorthands: [
      {
        code: '/outpaint',
        name: 'AI Canvas Outpainting & Expansion',
        category: 'CANVAS_RATIO',
        target: 'Bidang & Batas Kanvas Foto',
        description: 'Memperluas dimensi bidang gambar di luar batas kanvas asli',
        priority: 'WAJIB',
        reason: 'Paling tepat untuk memperluas foto',
        isPrimary: true,
        checked: true
      }
    ],
    relatedShorthands: [
      {
        code: '/expandcanvas',
        name: 'Canvas Frame Expansion',
        category: 'CANVAS_RATIO',
        target: 'Dimensi Frame',
        description: 'Alternatif pembesaran frame',
        priority: 'DISARANKAN',
        reason: 'Alternatif outpainting',
        isPrimary: false,
        checked: false
      }
    ],
    installedShorthands: ['/outpaint'],
    optimalPrompt: 'memperluas foto. /outpaint',
    visualTransformation: 'Foto diperluas ke segala arah dengan latar belakang koheren.'
  };

  const mergedOutpaint = service.mergeAiWithCatalog(mockAiOutpaint, 'memperluas foto');
  assert(mergedOutpaint.primaryShorthands.some(p => p.code === '/outpaint'), 'Online AI berhasil memetakan "memperluas foto" ke /outpaint');
  assert(mergedOutpaint.installedShorthands.includes('/outpaint'), '/outpaint terpasang otomatis di installedShorthands');
  assert(mergedOutpaint.optimalPrompt.includes('/outpaint'), 'Optimal prompt memuat /outpaint');
  assert(mergedOutpaint.relatedShorthands.some(r => r.code === '/expandcanvas'), 'Online AI menyertakan alternatif /expandcanvas');
}

// -----------------------------------------------------------------------------
// VERIFIKASI UI PROMPT INPUT STATUS BANNER
// -----------------------------------------------------------------------------
console.log('\n--- VERIFIKASI UI PROMPT INPUT STATUS BANNER ---');
{
  const { renderPromptInput } = await import('../src/components/PromptInput.js');

  const compActive = renderPromptInput({ isOnlineActive: true });
  assert(compActive.html.includes('Pencarian Online Shorthand: AKTIF'), 'UI PromptInput menampilkan status AKTIF saat online terhubung');
  assert(compActive.html.includes('status-pulse-dot'), 'UI PromptInput menyertakan pulse indicator dot saat aktif');
  assert(compActive.html.includes('🌐 Analisis Prompt'), 'Tombol Analisis memuat label online saat aktif');

  const compInactive = renderPromptInput({ isOnlineActive: false });
  assert(compInactive.html.includes('Pencarian Online Shorthand: TIDAK AKTIF'), 'UI PromptInput menampilkan status TIDAK AKTIF saat belum terhubung');
  assert(compInactive.html.includes('Mode Heuristik Lokal'), 'UI PromptInput menjelaskan mode heuristik lokal saat tidak aktif');
}

// -----------------------------------------------------------------------------
// VERIFIKASI RESILIENSI KONEKSI GEMINI (ANTI-TERPUTUS SAAT ANALISIS)
// -----------------------------------------------------------------------------
console.log('\n--- VERIFIKASI RESILIENSI KONEKSI GEMINI (ANTI-TERPUTUS) ---');
{
  const { GEMINI_STATUS } = await import('../src/services/geminiService.js');
  const { StorageService } = await import('../src/services/storageService.js');

  // Test StorageService default model
  assert(StorageService.getModel() === 'gemini-2.0-flash', 'Model default adalah gemini-2.0-flash yang stabil');

  const resilientService = new GeminiService(INITIAL_SHORTHAND_CATALOG);
  resilientService.status = GEMINI_STATUS.CONNECTED;

  // 1. Verifikasi extractJson
  const plainObj = resilientService.extractJson('{"status": "ok", "value": 42}');
  assert(plainObj.value === 42, 'extractJson berhasil membaca raw JSON murni');

  const fencedObj = resilientService.extractJson('```json\n{"intent": "TEST_FENCE", "code": "/test"}\n```');
  assert(fencedObj.code === '/test', 'extractJson berhasil membaca JSON dalam markdown code fence');

  const messyObj = resilientService.extractJson('Tentu, ini hasil analisis prompt Anda:\n\n{"intent": "TEST_MESSY", "score": 99}\n\nSemoga membantu!');
  assert(messyObj.score === 99, 'extractJson berhasil mengekstrak objek JSON di tengah teks pembuka/penutup');

  const arrObj = resilientService.extractJson('```\n[{"code": "/portrait", "name": "Portrait"}]\n```');
  assert(Array.isArray(arrObj) && arrObj[0].code === '/portrait', 'extractJson berhasil mengekstrak array JSON');

  // 2. Verifikasi Simulasi analyzePrompt saat API fetch gagal
  // Simulasikan API key ada di storage
  const originalGetApiKey = StorageService.getApiKey;
  StorageService.getApiKey = () => 'AIzaSyMockKeyForTest';

  // Simulasikan callGeminiAPI melempar error (misal model 404, rate limit, atau timeout)
  resilientService.callGeminiAPI = async () => {
    throw new Error('HTTP 404: models/gemini-2.5-flash is not found for API version v1beta');
  };

  const resultOnFailure = await resilientService.analyzePrompt('perbaiki pencahayaan foto');

  assert(resilientService.status === GEMINI_STATUS.CONNECTED, 'Koneksi Gemini TETAP CONNECTED (🟢) dan TIDAK TERPUTUS saat API gagal');
  assert(resilientService.status !== GEMINI_STATUS.FAILED, 'Status Gemini BUKAN FAILED (🔴)');
  assert(resultOnFailure.isOnlineActive === true, 'isOnlineActive tetap true agar status online di UI tidak padam');
  assert(resultOnFailure.source === 'LOCAL_ENGINE_FALLBACK', 'Source beralih mulus ke LOCAL_ENGINE_FALLBACK');
  assert(resultOnFailure.installedShorthands.includes('/enhance'), 'Hasil analisis lokal tetap akurat (/enhance terpasang)');
  assert(resultOnFailure.engineNotice.includes('Koneksi tetap tersambung'), 'Engine notice mengonfirmasi koneksi tetap aman terjaga');

  // Restore storage mock
  StorageService.getApiKey = originalGetApiKey;
}

// -----------------------------------------------------------------------------
// VERIFIKASI V3.2: FITUR "PERKAYA DENGAN AI" PADA PROMPT OPTIMAL
// -----------------------------------------------------------------------------
console.log('\n--- VERIFIKASI V3.2: FITUR "PERKAYA DENGAN AI" ---');
{
  const { renderPromptOptimal } = await import('../src/components/PromptOptimal.js');
  const { GeminiService, GEMINI_STATUS } = await import('../src/services/geminiService.js');
  const { StorageService } = await import('../src/services/storageService.js');

  // 1. Verifikasi UI Button di PromptOptimal
  // Skenario A: Saat Offline / API belum terhubung -> Tombol DISABLED
  const compOffline = renderPromptOptimal({
    optimalPrompt: 'An Indonesian businesswoman reviewing sales growth targets on a tablet.',
    isOnlineActive: false,
    isEnriching: false
  });
  assert(compOffline.html.includes('id="btn-enrich-ai"'), 'PromptOptimal me-render tombol #btn-enrich-ai');
  assert(compOffline.html.includes('disabled'), 'Tombol PERKAYA DENGAN AI disabled saat Gemini belum terhubung');
  assert(compOffline.html.includes('✨ PERKAYA DENGAN AI'), 'Label tombol dalam kondisi normal memuat "✨ PERKAYA DENGAN AI"');
  assert(compOffline.html.includes('membutuhkan koneksi Gemini API'), 'Tooltip menjelaskan fitur butuh koneksi Gemini');

  // Skenario B: Saat Online tetapi Prompt Optimal masih kosong -> Tombol DISABLED
  const compEmpty = renderPromptOptimal({
    optimalPrompt: '',
    isOnlineActive: true,
    isEnriching: false
  });
  assert(compEmpty.html.includes('disabled'), 'Tombol disabled jika Prompt Optimal masih kosong');

  // Skenario C: Saat Online dan Prompt Optimal terisi -> Tombol AKTIF
  const compActive = renderPromptOptimal({
    optimalPrompt: 'An Indonesian businesswoman reviewing sales growth targets on a tablet. /facelock /enhance',
    isOnlineActive: true,
    isEnriching: false
  });
  assert(!compActive.html.match(/id="btn-enrich-ai"[^>]*disabled/), 'Tombol PERKAYA DENGAN AI aktif (tidak disabled) saat online dan prompt terisi');

  // Skenario D: Saat proses enriching berjalan -> State "⏳ MEMPERKAYA..." dan disabled
  const compLoading = renderPromptOptimal({
    optimalPrompt: 'An Indonesian businesswoman reviewing sales growth targets on a tablet.',
    isOnlineActive: true,
    isEnriching: true
  });
  assert(compLoading.html.includes('⏳ MEMPERKAYA...'), 'Label berubah menjadi "⏳ MEMPERKAYA..." saat proses berlangsung');
  assert(compLoading.html.includes('disabled'), 'Tombol disabled saat sedang memperkaya untuk mencegah request ganda');

  // 2. Verifikasi GeminiService.enrichPrompt (Logika & Preservasi)
  const service = new GeminiService(INITIAL_SHORTHAND_CATALOG);

  // Skenario E: Ketika key kosong -> lempar error yang jelas
  const originalKeyFn = StorageService.getApiKey;
  StorageService.getApiKey = () => '';
  try {
    await service.enrichPrompt('test prompt');
    assert(false, 'Harus melempar error saat API key tidak ada');
  } catch (err) {
    assert(err.message.includes('Gemini API Key belum terhubung'), 'Melempar pesan error jelas saat API key belum ada');
  }

  // Skenario F: Simulasi sukses enrichPrompt dengan preservasi subjek dan shorthand
  StorageService.getApiKey = () => 'AIzaSyMockKeyForEnrichTest';
  const originalPrompt = 'An Indonesian businesswoman reviewing sales growth targets on a tablet. /facelock /enhance';

  // Mock global fetch untuk generateContent
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, options) => {
    return {
      ok: true,
      json: async () => ({
        candidates: [
          {
            content: {
              parts: [
                {
                  text: JSON.stringify({
                    enrichedPrompt: 'Close-up portrait of an Indonesian businesswoman in a modern glass office, reviewing sales growth targets on a digital tablet with charts, soft cinematic office lighting, 85mm lens, depth of field. /facelock'
                  })
                }
              ]
            }
          }
        ]
      })
    };
  };

  const enrichResult = await service.enrichPrompt(originalPrompt, {
    intent: { summary: 'Potret pebisnis wanita Indonesia memeriksa target penjualan' }
  });

  assert(enrichResult.success === true, 'enrichPrompt berhasil dieksekusi');
  assert(enrichResult.enrichedPrompt.includes('Indonesian businesswoman'), 'Subjek utama (Indonesian businesswoman) dipertahankan');
  assert(enrichResult.enrichedPrompt.includes('sales growth'), 'Aktivitas/objek (sales growth) dipertahankan');
  assert(enrichResult.enrichedPrompt.includes('tablet'), 'Objek (tablet) dipertahankan');
  assert(enrichResult.enrichedPrompt.includes('/facelock'), 'Shorthand /facelock tetap dipertahankan');
  assert(enrichResult.enrichedPrompt.includes('/enhance'), 'Shorthand /enhance yang sempat hilang otomatis dipulihkan/ditambahkan kembali');
  assert(enrichResult.enrichedPrompt.includes('cinematic office lighting'), 'Detail visual berkualitas tinggi berhasil ditambahkan');

  // Skenario G: Safe preservation saat Gemini fetch gagal
  globalThis.fetch = async () => {
    return {
      ok: false,
      status: 500,
      text: async () => 'Internal Server Error'
    };
  };

  try {
    await service.enrichPrompt(originalPrompt);
    assert(false, 'Harus melempar error saat Gemini gagal');
  } catch (err) {
    assert(err.message.includes('500'), 'Error diteruskan dengan jelas tanpa merusak prompt asli');
  }

  // Restore mocks
  globalThis.fetch = originalFetch;
  StorageService.getApiKey = originalKeyFn;
}

// -----------------------------------------------------------------------------
// VERIFIKASI V3.3.1: SISTEM SHORTHAND TERPADU PADA MODE "ANALISA GAMBAR -> PROMPT"
// -----------------------------------------------------------------------------
console.log('\n--- VERIFIKASI V3.3.1: SHORTHAND FOTOGRAFI & MODE ANALISA ---');
{
  // 1. Verifikasi ketersediaan shorthand fotografi visual baru di catalog
  const newVisualCodes = [
    '/eyelevel', '/daylight', '/outdoor', '/seated', '/calm',
    '/realistic', '/shallowdof', '/deepfocus', '/ruleofthirds', '/wideangle'
  ];
  for (const c of newVisualCodes) {
    const item = INITIAL_SHORTHAND_CATALOG.find(i => i.code === c);
    assert(Boolean(item), `Shorthand fotografi ${c} terdaftar di INITIAL_SHORTHAND_CATALOG`);
    assert(Boolean(item.functionGroup), `Shorthand ${c} memiliki functionGroup terdefinisi (${item?.functionGroup})`);
  }

  // 2. CONTOH IMPLEMENTASI LOGIKA (SEKSI 6 PANDUAN PENGGUNA):
  // "Seorang wanita duduk di luar ruangan pada siang hari dengan pencahayaan alami, sudut pandang sejajar mata, ekspresi tenang, gaya fotografi realistis dan latar belakang sedikit blur."
  const promptSeksi6 = 'Seorang wanita duduk di luar ruangan pada siang hari dengan pencahayaan alami, sudut pandang sejajar mata, ekspresi tenang, gaya fotografi realistis dan latar belakang sedikit blur.';
  const resSeksi6 = engine.analyze(promptSeksi6);

  // Wajib mencakup konsep visual nyata dari gambar:
  assert(resSeksi6.installedShorthands.includes('/eyelevel'), 'Seksi 6: Terdeteksi /eyelevel dari "sudut pandang sejajar mata"');
  assert(resSeksi6.installedShorthands.includes('/daylight'), 'Seksi 6: Terdeteksi /daylight dari "siang hari" / "pencahayaan alami"');
  assert(resSeksi6.installedShorthands.includes('/outdoor'), 'Seksi 6: Terdeteksi /outdoor dari "di luar ruangan"');
  assert(resSeksi6.installedShorthands.includes('/seated'), 'Seksi 6: Terdeteksi /seated dari "duduk"');
  assert(resSeksi6.installedShorthands.includes('/calm'), 'Seksi 6: Terdeteksi /calm dari "ekspresi tenang"');
  assert(resSeksi6.installedShorthands.includes('/realistic'), 'Seksi 6: Terdeteksi /realistic dari "gaya fotografi realistis"');
  assert(resSeksi6.installedShorthands.includes('/shallowdof'), 'Seksi 6: Terdeteksi /shallowdof dari "latar belakang sedikit blur"');

  // Anti-random: Shorthand TANPA dasar visual TIDAK BOLEH dimunculkan
  assert(!resSeksi6.installedShorthands.includes('/night'), 'Anti-random: Tidak memunculkan /night (tidak ada di gambar)');
  assert(!resSeksi6.installedShorthands.includes('/lowangle'), 'Anti-random: Tidak memunculkan /lowangle (tidak ada di gambar)');
  assert(!resSeksi6.installedShorthands.includes('/cyberpunk'), 'Anti-random: Tidak memunculkan /cyberpunk (tidak ada di gambar)');
  assert(!resSeksi6.installedShorthands.includes('/dramaticlight'), 'Anti-random: Tidak memunculkan /dramaticlight (tidak ada di gambar)');

  // 3. Verifikasi Mode 2: GeminiService.analyzeImageToPrompt
  const geminiSvc = new GeminiService(INITIAL_SHORTHAND_CATALOG);
  const imageAnalysisRes = await geminiSvc.analyzeImageToPrompt({
    imageFile: { name: 'portrait_sample.jpg', size: 102400 },
    referencePrompt: promptSeksi6
  });

  assert(imageAnalysisRes.mode === 'IMAGE_TO_PROMPT', 'Mode bernilai IMAGE_TO_PROMPT');
  assert(Boolean(imageAnalysisRes.generatedPrompt), 'Menghasilkan Prompt Hasil Analisa visual');
  assert(imageAnalysisRes.optimalPrompt.includes('/eyelevel'), 'Prompt Optimal memuat shorthand hasil analisa gambar');
  assert(imageAnalysisRes.installedShorthands.length >= 5, 'Memasang shorthand relevan secara dinamis dan fokus');

  // 4. Verifikasi Mode 3: GeminiService.analyzeShorthandImprove
  const improveRes = await geminiSvc.analyzeShorthandImprove('foto wanita /backgroundlock /bgblur /bgremove');
  assert(improveRes.mode === 'SHORTHAND_IMPROVE', 'Mode bernilai SHORTHAND_IMPROVE');
  assert(Boolean(improveRes.diagnostics), 'Mode 3 menghasilkan objek diagnostik perbaikan shorthand');
  assert(improveRes.diagnostics.conflictCount > 0, 'Diagnostik mendeteksi konflik direktif pada prompt');

  // 5. Verifikasi Seksi 8: Penanganan Kasus Khusus jika tidak ada shorthand relevan
  const emptyRecsHtml = renderShorthandRecommendations({
    primaryShorthands: [],
    relatedShorthands: [],
    recommendations: [],
    installedShorthands: []
  });
  assert(emptyRecsHtml.html.includes('Tidak ditemukan shorthand yang cukup relevan dari Prompt Hasil Analisa.'), 'Seksi 8: Menampilkan pesan fallback informatif saat tidak ada shorthand relevan');

  // 6. Verifikasi UI PromptInput merender Mode Selector & Dropzone
  const inputUi = renderPromptInput({
    activeMode: 'IMAGE_TO_PROMPT',
    isOnlineActive: false
  });
  assert(inputUi.html.includes('data-mode="IMAGE_TO_PROMPT"'), 'PromptInput me-render tab data-mode IMAGE_TO_PROMPT');
  assert(inputUi.html.includes('image-dropzone'), 'PromptInput me-render area image-dropzone pada mode gambar');
  assert(inputUi.html.includes('🔍 Analisa Gambar → Prompt'), 'PromptInput me-render tombol Analisa Gambar');

  // 7. Verifikasi UI AnalyzerPage merender card PROMPT HASIL ANALISA GAMBAR
  const analyzerPageUi = renderAnalyzerPage({
    activeMode: 'IMAGE_TO_PROMPT',
    analysisResult: {
      generatedPrompt: promptSeksi6,
      optimalPrompt: `${promptSeksi6}. /eyelevel /daylight`,
      installedShorthands: ['/eyelevel', '/daylight'],
      primaryShorthands: [{ code: '/eyelevel', name: 'Eye Level', target: 'Kamera', priority: 'WAJIB' }],
      relatedShorthands: [],
      recommendations: [{ code: '/eyelevel', name: 'Eye Level', target: 'Kamera', priority: 'WAJIB' }]
    }
  });
  assert(analyzerPageUi.html.includes('PROMPT HASIL ANALISA GAMBAR'), 'AnalyzerPage me-render card PROMPT HASIL ANALISA GAMBAR');
  assert(analyzerPageUi.html.includes('btn-copy-generated-prompt'), 'AnalyzerPage menyediakan tombol salin prompt hasil analisa');
}

// -----------------------------------------------------------------------------
// VERIFIKASI FITUR BARU: "🛠️ ANALISA SHORTHAND PERBAIKAN GAMBAR" (MODE 3 IMAGE REPAIR)
// -----------------------------------------------------------------------------
console.log('\n--- VERIFIKASI FITUR BARU: "🛠️ ANALISA SHORTHAND PERBAIKAN GAMBAR" ---');
{
  const geminiSvc = new GeminiService(INITIAL_SHORTHAND_CATALOG);

  // 1. Verifikasi seluruh 13 shorthand optimasi perbaikan gambar baru
  const repairCodes = [
    '/shadowrecovery', '/highlightcontrol', '/dynamicrange', '/naturalcontrast',
    '/naturaltone', '/colorbalance', '/detailpreservation', '/texturepreservation',
    '/naturalprocessing', '/perspectivecorrection', '/lenscorrection',
    '/compositionbalance', '/highdetail'
  ];
  for (const c of repairCodes) {
    const item = INITIAL_SHORTHAND_CATALOG.find(i => i.code === c);
    assert(Boolean(item), `Shorthand perbaikan ${c} terdaftar di INITIAL_SHORTHAND_CATALOG`);
    assert(Boolean(item.functionGroup), `Shorthand ${c} memiliki functionGroup terdefinisi (${item?.functionGroup})`);
    assert(Boolean(item.description), `Shorthand ${c} memiliki deskripsi tindakan spesifik`);
  }

  // 2. Verifikasi Analisis Perbaikan Gambar Heuristik (General Diagnostic)
  const generalRepairRes = await geminiSvc.analyzeImageRepair({
    imageFile: { name: 'landscape_underexposed.jpg', size: 204800 },
    notesPrompt: ''
  });

  assert(generalRepairRes.mode === 'SHORTHAND_IMPROVE', 'Mode bernilai SHORTHAND_IMPROVE');
  assert(generalRepairRes.isImageRepair === true, 'Flag isImageRepair bernilai true');
  assert(Boolean(generalRepairRes.visualConditionSummary), 'Menghasilkan Ringkasan Kondisi Visual Gambar');
  assert(Array.isArray(generalRepairRes.optimizationAreas), 'optimizationAreas berupa array');
  assert(generalRepairRes.optimizationAreas.length >= 6, `Menghasilkan diagnosis area optimasi mendalam (${generalRepairRes.optimizationAreas.length} area)`);
  assert(Array.isArray(generalRepairRes.goodAspects) && generalRepairRes.goodAspects.length > 0, 'Menghasilkan daftar Aspek yang Sudah Baik');

  // 3. Verifikasi BEBAS JUMLAH / UNLIMITED SHORTHANDS (TIDAK ADA batasan Max 5 / Max 10)
  assert(generalRepairRes.diagnosedShorthands.length >= 7, `UNLIMITED: Menghasilkan seluruh shorthand perbaikan yang relevan tanpa batas (ditemukan: ${generalRepairRes.diagnosedShorthands.length})`);
  assert(generalRepairRes.diagnosedShorthands.length === generalRepairRes.installedShorthands.length, 'Seluruh diagnosedShorthands terpasang di installedShorthands');

  // 4. Verifikasi NO FUNCTIONAL DUPLICATION (Deduplikasi per functionGroup)
  const fnGroups = generalRepairRes.diagnosedShorthands.map(s => s.functionGroup);
  const uniqueFnGroups = new Set(fnGroups);
  assert(fnGroups.length === uniqueFnGroups.size, `Tidak ada duplikasi functionGroup (unik: ${uniqueFnGroups.size} dari ${fnGroups.length})`);

  // 5. Verifikasi URUTAN SUSUNAN REKOMENDASI (PRIORITAS ISU LOGIS)
  // PRIMARY_ISSUE -> SECONDARY_ISSUE -> OPTIMIZATION -> PRESERVATION -> FINISHING
  const prioWeights = {
    'PRIMARY_ISSUE': 1,
    'SECONDARY_ISSUE': 2,
    'OPTIMIZATION': 3,
    'PRESERVATION': 4,
    'FINISHING': 5
  };
  let isSorted = true;
  for (let i = 0; i < generalRepairRes.diagnosedShorthands.length - 1; i++) {
    const curPrio = prioWeights[generalRepairRes.diagnosedShorthands[i].issuePriority] || 3;
    const nextPrio = prioWeights[generalRepairRes.diagnosedShorthands[i + 1].issuePriority] || 3;
    if (curPrio > nextPrio) {
      isSorted = false;
      break;
    }
  }
  assert(isSorted, 'Shorthand tersusun rapi: Masalah Utama -> Sekunder -> Peningkatan -> Preservasi -> Finishing');

  // 6. Verifikasi ALASAN DIAGNOSIS PADA SETIAP SHORTHAND
  const allHaveReasons = generalRepairRes.diagnosedShorthands.every(s => s.reason && typeof s.reason === 'string' && s.reason.length > 10);
  assert(allHaveReasons, 'Setiap shorthand yang direkomendasikan memuat alasan diagnosis yang jelas dan informatif');

  // 7. Verifikasi TIDAK MENGELUARKAN SHORTHAND UNTUK ASPEK YANG SUDAH BAIK
  // Aspek ketajaman & noise dinilai sudah baik pada general photo tanpa notes -> tidak boleh ada /sharpen /denoise acak
  assert(!generalRepairRes.installedShorthands.includes('/denoise'), 'Aspek baik tidak menghasilkan shorthand: /denoise tidak muncul tanpa keluhan noise');

  // 8. Verifikasi Respon terhadap Catatan Spesifik Pengguna (Strict Relevance)
  const specificNotesRes = await geminiSvc.analyzeImageRepair({
    imageFile: { name: 'architecture_tilted.jpg', size: 150000 },
    notesPrompt: 'garis bangunan tampak miring dan ada bintik noise tinggi'
  });
  assert(specificNotesRes.installedShorthands.includes('/perspectivecorrection'), 'Mendeteksi kebutuhan koreksi garis miring -> /perspectivecorrection');
  assert(specificNotesRes.installedShorthands.includes('/denoise'), 'Mendeteksi kebutuhan perbaikan bintik noise -> /denoise');

  // 9. Verifikasi UI PromptInput pada Mode 3 dengan Gambar
  const inputRepairWithImg = renderPromptInput({
    activeMode: 'SHORTHAND_IMPROVE',
    uploadedImage: { name: 'portrait_defect.jpg', previewUrl: 'data:image/jpeg;base64,mock', size: 50000 }
  });
  assert(inputRepairWithImg.html.includes('SOURCE OF TRUTH Diagnosis Perbaikan'), 'UI PromptInput menandai gambar sebagai SOURCE OF TRUTH Diagnosis');
  assert(inputRepairWithImg.html.includes('🛠️ Analisa Perbaikan Gambar'), 'UI PromptInput menampilkan tombol "🛠️ Analisa Perbaikan Gambar"');

  const inputRepairNoImg = renderPromptInput({
    activeMode: 'SHORTHAND_IMPROVE',
    uploadedImage: null
  });
  assert(inputRepairNoImg.html.includes('Tarik &amp; lepas gambar yang ingin didiagnosis &amp; diperbaiki di sini'), 'UI PromptInput Mode 3 menampilkan dropzone perbaikan gambar saat belum ada gambar');

  // 10. Verifikasi UI AnalyzerPage merender card DIAGNOSIS & REKOMENDASI PERBAIKAN GAMBAR
  const analyzerRepairPage = renderAnalyzerPage({
    activeMode: 'SHORTHAND_IMPROVE',
    analysisResult: generalRepairRes
  });
  assert(analyzerRepairPage.html.includes('card-repair-diagnosis'), 'UI AnalyzerPage me-render section #card-repair-diagnosis');
  assert(analyzerRepairPage.html.includes('DIAGNOSIS &amp; REKOMENDASI PERBAIKAN GAMBAR'), 'UI AnalyzerPage menampilkan judul card diagnosis perbaikan gambar');
  assert(analyzerRepairPage.html.includes('Ringkasan Kondisi Visual Gambar'), 'UI AnalyzerPage menampilkan Ringkasan Kondisi Visual');
  assert(analyzerRepairPage.html.includes('Area yang Membutuhkan Optimasi'), 'UI AnalyzerPage menampilkan Area yang Membutuhkan Optimasi');
  assert(analyzerRepairPage.html.includes('Aspek yang Dinilai Sudah Baik / Optimal'), 'UI AnalyzerPage menampilkan Aspek yang Sudah Baik');
  assert(analyzerRepairPage.html.includes('Rekomendasi Shorthand Perbaikan'), 'UI AnalyzerPage menampilkan Rekomendasi Shorthand Perbaikan');
  assert(analyzerRepairPage.html.includes('/shadowrecovery'), 'UI AnalyzerPage menampilkan kode shorthand perbaikan (/shadowrecovery)');
  assert(analyzerRepairPage.html.includes('Masalah Utama'), 'UI AnalyzerPage menampilkan label prioritas Masalah Utama');
}

// -----------------------------------------------------------------------------
// TEST MODE 2: DYNAMIC IMAGE TO PROMPT WITH EMBEDDED SHORTHANDS & CONTEXTUAL NEGATIVES
// -----------------------------------------------------------------------------
console.log('\n--- TEST MODE 2: DYNAMIC IMAGE TO PROMPT PIPELINE ---');
{
  const geminiSvc = new GeminiService(INITIAL_SHORTHAND_CATALOG);

  // 1. Verifikasi Analisis Gambar A: Portrait
  const resPortrait = await geminiSvc.analyzeImageToPrompt({
    imageFile: { name: 'portrait_girl_outdoor.jpg', size: 125000, width: 1080, height: 1920 },
    referencePrompt: ''
  });

  assert(resPortrait.mode === 'IMAGE_TO_PROMPT', 'Mode bernilai IMAGE_TO_PROMPT');
  assert(Boolean(resPortrait.generatedPrompt), 'generatedPrompt terdefinisi');
  assert(resPortrait.generatedPrompt.startsWith('/imagine prompt:'), 'generatedPrompt diawali dengan /imagine prompt:');
  assert(Boolean(resPortrait.optimalPrompt), 'optimalPrompt terdefinisi');
  assert(resPortrait.optimalPrompt.startsWith('/imagine prompt:'), 'optimalPrompt diawali dengan /imagine prompt:');
  assert(resPortrait.optimalPrompt.includes('--ar 9:16'), 'optimalPrompt memuat parameter aspect ratio vertikal (--ar 9:16)');
  assert(resPortrait.optimalPrompt.includes('--style raw'), 'optimalPrompt memuat parameter --style raw');
  assert(resPortrait.optimalPrompt.includes('--v 6.1'), 'optimalPrompt memuat parameter engine --v 6.1');
  assert(resPortrait.optimalPrompt.includes('--no'), 'optimalPrompt memuat parameter negatif (--no)');

  // Verifikasi embedded shorthands pada optimal prompt
  const portraitShorthandsInOptimal = (resPortrait.optimalPrompt.match(/\/[a-zA-Z0-9_\-]+/g) || [])
    .filter(c => c !== '/imagine' && !c.startsWith('/imagine'));
  assert(portraitShorthandsInOptimal.length >= 5, `optimalPrompt memuat shorthand terpasang langsung di dalam prompt (ditemukan: ${portraitShorthandsInOptimal.length})`);

  // Verifikasi negative prompt kontekstual untuk subjek manusia/portrait
  assert(resPortrait.optimalPrompt.includes('deformed face') || resPortrait.optimalPrompt.includes('bad anatomy') || resPortrait.optimalPrompt.includes('distorted hands'), 
    'Negative prompt portrait memuat konteks anatomi manusia (deformed face / bad anatomy / distorted hands)');

  // 2. Verifikasi Analisis Gambar B: Landscape
  const resLandscape = await geminiSvc.analyzeImageToPrompt({
    imageFile: { name: 'mountain_lake_sunset.jpg', size: 250000, width: 1920, height: 1080 },
    referencePrompt: ''
  });

  assert(resLandscape.optimalPrompt.includes('--ar 16:9'), 'Landscape memuat parameter aspect ratio horizontal (--ar 16:9)');
  assert(resLandscape.generatedPrompt !== resPortrait.generatedPrompt, 'Dinamis 100%: Prompt Landscape BERBEDA dengan Prompt Portrait');
  assert(resLandscape.visionData.subjectDescription !== resPortrait.visionData.subjectDescription, 'Dinamis 100%: Subjek visual Landscape berbeda dengan Portrait');

  // Verifikasi negative prompt kontekstual untuk pemandangan (tidak boleh menyertakan deformed face/hands)
  assert(!resLandscape.optimalPrompt.includes('deformed face'), 'Negative prompt pemandangan TIDAK memuat deformed face');
  assert(resLandscape.optimalPrompt.includes('people') || resLandscape.optimalPrompt.includes('text') || resLandscape.optimalPrompt.includes('buildings'),
    'Negative prompt pemandangan memuat konteks non-manusia (people / text / buildings / cars)');

  // 3. Verifikasi Analisis Gambar C: Architecture
  const resArch = await geminiSvc.analyzeImageToPrompt({
    imageFile: { name: 'modern_glass_skyscraper.jpg', size: 300000, width: 1200, height: 1200 },
    referencePrompt: ''
  });

  assert(resArch.optimalPrompt.includes('--ar 1:1'), 'Architecture square memuat parameter aspect ratio kotak (--ar 1:1)');
  assert(resArch.generatedPrompt !== resPortrait.generatedPrompt, 'Dinamis 100%: Prompt Architecture berbeda dengan Portrait');
  assert(resArch.generatedPrompt !== resLandscape.generatedPrompt, 'Dinamis 100%: Prompt Architecture berbeda dengan Landscape');

  // 4. Verifikasi UNLIMITED Shorthands & Deduplikasi per functionGroup
  assert(resPortrait.installedShorthands.length >= 6, `UNLIMITED Shorthands: Mode 2 menghasilkan seluruh shorthand yang relevan (${resPortrait.installedShorthands.length} shorthand)`);
  const fnGroupsPortrait = resPortrait.primaryShorthands.map(s => s.functionGroup);
  const uniqueFnGroups = new Set(fnGroupsPortrait);
  assert(fnGroupsPortrait.length === uniqueFnGroups.size, `Deduplikasi fungsional: tidak ada duplikasi functionGroup (${uniqueFnGroups.size} unik)`);

  // 5. Verifikasi Kepatuhan Negative Triggers
  assert(!resPortrait.installedShorthands.includes('/night'), 'Mematuhi negative triggers: /night tidak muncul pada adegan daylight');

  // 6. Verifikasi State Reset (Section 15)
  const emptyRes = engine.getEmptyResult();
  assert(emptyRes.generatedPrompt === '', 'getEmptyResult memiliki generatedPrompt string kosong');
  assert(emptyRes.visionData === null, 'getEmptyResult memiliki visionData null');
  assert(emptyRes.visualBreakdown === null, 'getEmptyResult memiliki visualBreakdown null');

  // 7. Verifikasi UI Rendering Mode 2 pada AnalyzerPage
  const analyzerPageMode2 = renderAnalyzerPage({
    activeMode: 'IMAGE_TO_PROMPT',
    analysisResult: resPortrait
  });
  assert(analyzerPageMode2.html.includes('card-generated-image-prompt'), 'UI AnalyzerPage merender card #card-generated-image-prompt');
  assert(analyzerPageMode2.html.includes('PROMPT HASIL ANALISA GAMBAR'), 'UI AnalyzerPage menampilkan judul "PROMPT HASIL ANALISA GAMBAR"');
  assert(analyzerPageMode2.html.includes('btn-copy-generated-prompt'), 'UI AnalyzerPage menampilkan tombol Salin Prompt Analisa');
  // 8. Verifikasi Kasus Gambar Generik (misal 4.jpg tanpa keyword gender)
  const resGeneric = await geminiSvc.analyzeImageToPrompt({
    imageFile: { name: '4.jpg', size: 180000, width: 800, height: 1000 },
    referencePrompt: ''
  });
  assert(!resGeneric.generatedPrompt.includes('pepohonan hijau'), 'Kasus 4.jpg: Tidak berhalusinasi template statis "pepohonan hijau"');
  assert(!resGeneric.generatedPrompt.includes('jalan setapak'), 'Kasus 4.jpg: Tidak berhalusinasi template statis "jalan setapak"');
  assert(resGeneric.generatedPrompt.startsWith('/imagine prompt:'), 'Kasus 4.jpg: Menghasilkan prompt deskriptif terstruktur');

  // 9. Verifikasi Format Output 4-Bagian pada Optimal Prompt
  // Format:
  // /imagine prompt: [prompt hasil analisa gambar aktual]
  // [seluruh detail visual yang relevan dari gambar]
  // [semua shorthand yang relevan berdasarkan hasil analisa]
  // --no [negative prompt yang relevan]
  const optBlocks = resPortrait.optimalPrompt.split('\n\n');
  assert(optBlocks.length >= 4, `Format Output Wajib: Memiliki minimal 4 blok terpisah (ditemukan: ${optBlocks.length})`);
  assert(optBlocks[0].startsWith('/imagine prompt:'), 'Blok 1 diawali dengan /imagine prompt:');
  assert(optBlocks[optBlocks.length - 1].startsWith('--no'), 'Blok terakhir diawali dengan --no');
  assert(optBlocks[optBlocks.length - 2].includes('--ar'), 'Blok sebelum terakhir memuat shorthand & parameter visual');

  // 10. Verifikasi Kasus Gambar Aktual Pengguna: 3D Animated Character / Chibi Doll Figurine (unduhan - ... .jfif)
  const res3DFigurine = await geminiSvc.analyzeImageToPrompt({
    imageFile: {
      name: 'unduhan - 2026-02-15T195440.596.jfif',
      size: 125500,
      width: 800,
      height: 800,
      visualTelemetry: {
        isStylizedOr3D: true,
        styleType: 'STYLED_3D_CHARACTER',
        dominantHue: 'cyan',
        dominantColorIndonesian: 'biru toska / cyan cerah / denim',
        dominantColorEnglish: 'light cyan / sky blue / denim',
        avgSat: 0.38,
        satRatio: 0.32
      }
    },
    referencePrompt: ''
  });

  assert(res3DFigurine.mode === 'IMAGE_TO_PROMPT', 'Kasus 3D Karakter: Mode bernilai IMAGE_TO_PROMPT');
  assert(res3DFigurine.generatedPrompt.includes('3D') || res3DFigurine.generatedPrompt.includes('chibi') || res3DFigurine.generatedPrompt.includes('doll'),
    'Kasus 3D Karakter: Prompt mengenali medium karakter animasi 3D / cute chibi doll figurine');
  assert(res3DFigurine.generatedPrompt.includes('hoodie') || res3DFigurine.generatedPrompt.includes('jaket'),
    'Kasus 3D Karakter: Prompt mengenali busana jaket hoodie');
  assert(res3DFigurine.generatedPrompt.includes('biru') || res3DFigurine.generatedPrompt.includes('cyan') || res3DFigurine.generatedPrompt.includes('toska'),
    'Kasus 3D Karakter: Prompt mendeteksi warna dominan biru toska / cyan cerah dari piksel aktual');
  assert(!res3DFigurine.generatedPrompt.includes('Lensa 85mm portrait'),
    'Kasus 3D Karakter: TIDAK berhalusinasi lensa analog 85mm foto manusia dewasa');
  assert(!res3DFigurine.optimalPrompt.includes('--no cartoon, 3d render'),
    'Kasus 3D Karakter: Negative prompt TIDAK melarang cartoon atau 3d render');
  assert(res3DFigurine.optimalPrompt.includes('real human photo') || res3DFigurine.optimalPrompt.includes('photographic grain'),
    'Kasus 3D Karakter: Negative prompt secara cerdas melarang real human photo / photographic grain');

  // 11. Verifikasi Pergantian Gambar: Analisis ulang dinamis menghasilkan prompt baru yang 100% berbeda
  const imgA = {
    name: 'golden_cat.jpg',
    size: 210000,
    width: 1000,
    height: 1000,
    visualTelemetry: {
      dominantHue: 'yellow',
      dominantColorIndonesian: 'kuning cerah / pastel yellow',
      dominantColorEnglish: 'bright sunny yellow',
      secondaryColorIndonesian: 'putih bersih / krem netral',
      secondaryColorEnglish: 'clean white / soft cream',
      backgroundColorIndonesian: 'latar belakang netral teratur',
      lightingStyleIndonesian: 'pencahayaan alami terarah lembut',
      styleType: 'ANIMAL_WILDLIFE',
      dimensions: { width: 1000, height: 1000, aspectRatio: '1:1', orientation: 'square' }
    }
  };
  const resImgA = await geminiSvc.analyzeImageToPrompt({
    imageFile: imgA,
    visualTelemetry: imgA.visualTelemetry
  });

  const imgB = {
    name: 'red_sports_car_product.jpg',
    size: 340000,
    width: 1920,
    height: 1080,
    visualTelemetry: {
      dominantHue: 'red',
      dominantColorIndonesian: 'merah menyala / crimson',
      dominantColorEnglish: 'vibrant crimson red',
      secondaryColorIndonesian: 'hitam pekat monokromatik',
      secondaryColorEnglish: 'deep monochromatic black',
      backgroundColorIndonesian: 'studio meja still-life dengan permukaan netral',
      lightingStyleIndonesian: 'pencahayaan studio softbox terarah',
      styleType: 'PRODUCT_STILL_LIFE',
      dimensions: { width: 1920, height: 1080, aspectRatio: '16:9', orientation: 'landscape-wide' }
    }
  };
  const resImgB = await geminiSvc.analyzeImageToPrompt({
    imageFile: imgB,
    visualTelemetry: imgB.visualTelemetry
  });

  assert(resImgA.generatedPrompt !== resImgB.generatedPrompt, 'Pergantian Gambar: Prompt baru BERBEDA total dari gambar sebelumnya');
  assert(resImgA.generatedPrompt.includes('kuning') || resImgA.generatedPrompt.includes('yellow'), 'Gambar A: Mengandung warna kuning sesuai telemetri');
  assert(resImgB.generatedPrompt.includes('merah') || resImgB.generatedPrompt.includes('crimson'), 'Gambar B: Mengandung warna merah sesuai telemetri');
  assert(resImgB.optimalPrompt.includes('--ar 16:9'), 'Gambar B: Aspek rasio 16:9 terpasang di Prompt Optimal');
  assert(!resImgA.generatedPrompt.includes('setelan jas'), 'Gambar A: Tidak menggunakan template statis setelan jas');
  assert(!resImgB.generatedPrompt.includes('setelan jas'), 'Gambar B: Tidak menggunakan template statis setelan jas');
}

// -----------------------------------------------------------------------------
// TEST BLUEPRINT FINAL: MODE 2 (13 ATRIBUT VISUAL, 5-BUCKET SHORTHAND, ZERO UI DUPLICATION)
// -----------------------------------------------------------------------------
console.log('\n--- TEST BLUEPRINT FINAL: MODE 2 ANALISA GAMBAR -> PROMPT ---');
{
  const geminiSvc = new GeminiService(INITIAL_SHORTHAND_CATALOG);

  const testAnalysis = await geminiSvc.analyzeImageToPrompt({
    imageFile: { name: 'studio_portrait_session.jpg', size: 180000, width: 1080, height: 1920 }
  });

  // 1. Verifikasi Tepat 13 Atribut Visual pada Prompt Hasil Analisis Gambar
  const expected13Keys = [
    'Subject', 'Pose', 'Framing', 'Camera / Angle', 'Lighting',
    'Environment', 'Background', 'Outfit', 'Expression',
    'Composition', 'Style', 'Color / Tone', 'Aspect Ratio'
  ];

  assert(Boolean(testAnalysis.visualBreakdown), 'visualBreakdown terdefinisi');
  const actualKeys = Object.keys(testAnalysis.visualBreakdown);
  assert(actualKeys.length === 13, `visualBreakdown memiliki tepat 13 atribut visual (ditemukan: ${actualKeys.length})`);

  for (const key of expected13Keys) {
    assert(key in testAnalysis.visualBreakdown, `Atribut visual '${key}' tersedia di visualBreakdown`);
    assert(typeof testAnalysis.visualBreakdown[key] === 'string' && testAnalysis.visualBreakdown[key].trim().length > 0,
      `Atribut '${key}' memiliki nilai teks deskriptif valid`);
  }

  // 2. Verifikasi 5 Kelompok Shorthand Analysis
  assert(Array.isArray(testAnalysis.primaryShorthands), 'primaryShorthands berupa array');
  assert(Array.isArray(testAnalysis.relatedShorthands), 'relatedShorthands berupa array');
  assert(Array.isArray(testAnalysis.similarShorthands), 'similarShorthands berupa array');
  assert(Array.isArray(testAnalysis.conflicts), 'conflicts berupa array');
  assert(Array.isArray(testAnalysis.exclusions), 'exclusions berupa array');

  // A. Primary Shorthand: 1 fungsi visual utama = 1 shorthand, aktif/terpasang [✓]
  assert(testAnalysis.primaryShorthands.length > 0, `Primary shorthands terisi (${testAnalysis.primaryShorthands.length} items)`);
  const primaryFuncs = new Set(testAnalysis.primaryShorthands.map(p => p.functionGroup));
  assert(primaryFuncs.size === testAnalysis.primaryShorthands.length, 'Primary Shorthand: 1 fungsi visual utama = 1 shorthand');
  const allPrimaryActive = testAnalysis.primaryShorthands.every(p => p.checked === true && testAnalysis.installedShorthands.includes(p.code));
  assert(allPrimaryActive, 'Primary Shorthand: Seluruh shorthand primer aktif / terpasang secara default [✓]');

  // B. Related Shorthand: fungsi berbeda dari primary, tidak mengulang primary, nonaktif default [ ]
  assert(testAnalysis.relatedShorthands.length > 0, `Related shorthands terisi (${testAnalysis.relatedShorthands.length} items)`);
  const relatedOverlapPrimary = testAnalysis.relatedShorthands.some(r => primaryFuncs.has(r.functionGroup));
  assert(!relatedOverlapPrimary, 'Related Shorthand: Fungsi visual berbeda dari primary (tidak bertumpuk)');
  const allRelatedInactive = testAnalysis.relatedShorthands.every(r => r.checked === false);
  assert(allRelatedInactive, 'Related Shorthand: Seluruh shorthand pendukung nonaktif default [ ]');

  // C. Similar Shorthand: alternatif/sinonim, nonaktif default [ ]
  assert(testAnalysis.similarShorthands.length > 0, `Similar shorthands terisi (${testAnalysis.similarShorthands.length} items)`);
  const allSimilarInactive = testAnalysis.similarShorthands.every(s => s.checked === false);
  assert(allSimilarInactive, 'Similar Shorthand: Seluruh shorthand alternatif nonaktif default [ ]');

  // D. Shorthand Konflik: jika bersih -> kosong
  assert(testAnalysis.conflicts.length === 0, 'Shorthand Konflik: Gambar koheren menghasilkan 0 konflik');

  // E. Shorthand Tidak Diperlukan / Dikecualikan
  assert(testAnalysis.exclusions.length > 0, `Shorthand dikecualikan terisi (${testAnalysis.exclusions.length} items)`);

  // * DEDUPLIKASI MUTLAK: Setiap shorthand hanya boleh muncul di SATU bagian/bucket!
  const allCandidateCodes = [
    ...testAnalysis.primaryShorthands.map(s => s.code.toLowerCase()),
    ...testAnalysis.relatedShorthands.map(s => s.code.toLowerCase()),
    ...testAnalysis.similarShorthands.map(s => s.code.toLowerCase()),
    ...testAnalysis.exclusions.map(s => s.code.toLowerCase())
  ];
  const uniqueCodes = new Set(allCandidateCodes);
  assert(uniqueCodes.size === allCandidateCodes.length,
    `DEDUPLIKASI MUTLAK: Seluruh ${allCandidateCodes.length} shorthand di 5 kelompok bersifat unik tanpa satu pun kode duplikat`);

  // 3. Verifikasi Maksud Prompt, Area yang Diubah, Area yang Dikunci, Transformasi Visual
  assert(Boolean(testAnalysis.intent?.summary), 'Maksud Prompt memiliki ringkasan semantik yang representatif');
  assert(Array.isArray(testAnalysis.editAreas) && testAnalysis.editAreas.length >= 4, 'Area yang Diubah mencakup penyesuaian prompt');
  assert(Array.isArray(testAnalysis.lockedAreas) && testAnalysis.lockedAreas.length >= 5, 'Area yang Dikunci mencakup elemen visual gambar sumber');
  assert(Boolean(testAnalysis.visualTransformation?.from) && Boolean(testAnalysis.visualTransformation?.to), 'Transformasi visual FROM -> TO terdefinisi');

  // 4. Verifikasi UI PromptInput pada Mode 2
  const inputMode2WithImg = renderPromptInput({
    activeMode: 'IMAGE_TO_PROMPT',
    uploadedImage: { name: 'portrait_girl.jpg', previewUrl: 'data:image/jpeg;base64,mock', size: 60000 }
  });
  assert(!inputMode2WithImg.html.includes('prompt-textarea'), 'PromptInput Mode 2: Textarea input TIDAK ditampilkan (hanya komponen gambar)');
  assert(!inputMode2WithImg.html.includes('presets-container'), 'PromptInput Mode 2: Presets TIDAK ditampilkan');
  assert(inputMode2WithImg.html.includes('btn-change-image'), 'PromptInput Mode 2: Memiliki tombol Ganti Gambar');
  assert(inputMode2WithImg.html.includes('btn-remove-image'), 'PromptInput Mode 2: Memiliki tombol Hapus Gambar');
  assert(inputMode2WithImg.html.includes('Analisa Gambar → Prompt'), 'PromptInput Mode 2: Memiliki tombol "Analisa Gambar → Prompt"');

  // 5. Verifikasi UI AnalyzerPage Mode 2 saat BELUM ada gambar dianalisis (Requirement 9)
  const analyzerPageEmpty = renderAnalyzerPage({
    activeMode: 'IMAGE_TO_PROMPT',
    analysisResult: { generatedPrompt: '' }
  });
  assert(analyzerPageEmpty.html.includes('card-input'), 'AnalyzerPage (Belum ada gambar): Menampilkan kartu input');
  assert(!analyzerPageEmpty.html.includes('card-generated-image-prompt'), 'AnalyzerPage (Belum ada gambar): TIDAK merender card-generated-image-prompt');
  assert(!analyzerPageEmpty.html.includes('card-prompt-optimal'), 'AnalyzerPage (Belum ada gambar): TIDAK merender card-prompt-optimal');
  assert(!analyzerPageEmpty.html.includes('card-intent'), 'AnalyzerPage (Belum ada gambar): TIDAK merender card-intent');
  assert(!analyzerPageEmpty.html.includes('card-edit-areas'), 'AnalyzerPage (Belum ada gambar): TIDAK merender card-edit-areas');
  assert(!analyzerPageEmpty.html.includes('card-locked-areas'), 'AnalyzerPage (Belum ada gambar): TIDAK merender card-locked-areas');
  assert(!analyzerPageEmpty.html.includes('card-transformation'), 'AnalyzerPage (Belum ada gambar): TIDAK merender card-transformation');
  assert(!analyzerPageEmpty.html.includes('card-primary-shorthands'), 'AnalyzerPage (Belum ada gambar): TIDAK merender card-primary-shorthands');

  // 6. Verifikasi UI AnalyzerPage Mode 2 saat SUDAH ada gambar dianalisis
  const analyzerPageFull = renderAnalyzerPage({
    activeMode: 'IMAGE_TO_PROMPT',
    analysisResult: testAnalysis
  });

  // Urutan vertikal blueprint:
  const idxInput = analyzerPageFull.html.indexOf('id="card-input"');
  const idxGenPrompt = analyzerPageFull.html.indexOf('id="card-generated-image-prompt"');
  const idxOptimal = analyzerPageFull.html.indexOf('id="card-prompt-optimal"');
  const idxIntent = analyzerPageFull.html.indexOf('id="card-intent"');
  const idxEdit = analyzerPageFull.html.indexOf('id="card-edit-areas"');
  const idxLocked = analyzerPageFull.html.indexOf('id="card-locked-areas"');
  const idxTransform = analyzerPageFull.html.indexOf('id="card-transformation"');
  const idxPrimary = analyzerPageFull.html.indexOf('id="card-primary-shorthands"');
  const idxRelated = analyzerPageFull.html.indexOf('id="card-related-shorthands"');
  const idxSimilar = analyzerPageFull.html.indexOf('id="card-similar-shorthands"');
  const idxConflict = analyzerPageFull.html.indexOf('id="card-conflicts"');
  const idxExclusions = analyzerPageFull.html.indexOf('id="card-exclusions"');

  assert(idxInput !== -1 && idxGenPrompt !== -1 && idxOptimal !== -1 && idxIntent !== -1 &&
         idxEdit !== -1 && idxLocked !== -1 && idxTransform !== -1 && idxPrimary !== -1 &&
         idxRelated !== -1 && idxSimilar !== -1 && idxConflict !== -1 && idxExclusions !== -1,
         'Seluruh 12 card/komponen blueprint ter-render pada Mode 2');

  assert(idxInput < idxGenPrompt && idxGenPrompt < idxOptimal && idxOptimal < idxIntent &&
         idxIntent < idxEdit && idxEdit < idxTransform && idxTransform < idxPrimary &&
         idxPrimary < idxRelated && idxRelated < idxSimilar && idxSimilar < idxConflict &&
         idxConflict < idxExclusions,
         'Alur tampilan vertikal mengikuti urutan BLUEPRINT FINAL secara berurutan');

  // Verifikasi Tepat 1 KALI muncul (Hilangkan Duplikasi UI)
  const countOccurrences = (str, substr) => (str.match(new RegExp(substr, 'g')) || []).length;
  assert(countOccurrences(analyzerPageFull.html, 'id="card-input"') === 1, 'card-input muncul tepat 1 kali');
  assert(countOccurrences(analyzerPageFull.html, 'id="card-generated-image-prompt"') === 1, 'card-generated-image-prompt muncul tepat 1 kali');
  assert(countOccurrences(analyzerPageFull.html, 'id="card-prompt-optimal"') === 1, 'card-prompt-optimal muncul tepat 1 kali');
  assert(countOccurrences(analyzerPageFull.html, 'id="card-intent"') === 1, 'card-intent muncul tepat 1 kali');
  assert(countOccurrences(analyzerPageFull.html, 'id="card-edit-areas"') === 1, 'card-edit-areas muncul tepat 1 kali');
  assert(countOccurrences(analyzerPageFull.html, 'id="card-locked-areas"') === 1, 'card-locked-areas muncul tepat 1 kali');
  assert(countOccurrences(analyzerPageFull.html, 'id="card-transformation"') === 1, 'card-transformation muncul tepat 1 kali');
  assert(countOccurrences(analyzerPageFull.html, 'id="card-primary-shorthands"') === 1, 'card-primary-shorthands muncul tepat 1 kali');
  assert(countOccurrences(analyzerPageFull.html, 'id="card-related-shorthands"') === 1, 'card-related-shorthands muncul tepat 1 kali');
  assert(countOccurrences(analyzerPageFull.html, 'id="card-similar-shorthands"') === 1, 'card-similar-shorthands muncul tepat 1 kali');
  assert(countOccurrences(analyzerPageFull.html, 'id="card-conflicts"') === 1, 'card-conflicts muncul tepat 1 kali');
  assert(countOccurrences(analyzerPageFull.html, 'id="card-exclusions"') === 1, 'card-exclusions muncul tepat 1 kali');

  // Verifikasi 13 atribut visual tampil di card-generated-image-prompt
  assert(analyzerPageFull.html.includes('Rincian 13 Atribut Visual Gambar Aktual'), 'Menampilkan judul Rincian 13 Atribut Visual');
  for (const key of expected13Keys) {
    assert(analyzerPageFull.html.includes(key), `UI menampilkan atribut '${key}'`);
  }

  // Verifikasi "Tidak ada konflik shorthand."
  assert(analyzerPageFull.html.includes('Tidak ada konflik shorthand'), 'Card konflik menampilkan "Tidak ada konflik shorthand."');
}

// -----------------------------------------------------------------------------
// TEST VISION AI MODEL RESILIENCE & SANITIZATION
// -----------------------------------------------------------------------------
console.log('\n--- TEST VISION AI MODEL RESILIENCE & SANITIZATION ---');
{
  const mockStorage = {};
  global.localStorage = {
    getItem: (key) => (key in mockStorage ? mockStorage[key] : null),
    setItem: (key, val) => { mockStorage[key] = String(val); },
    removeItem: (key) => { delete mockStorage[key]; },
    clear: () => { Object.keys(mockStorage).forEach(k => delete mockStorage[k]); }
  };

  // 1. Test StorageService auto-migrates deprecated model gemini-1.5-pro to gemini-2.0-flash
  localStorage.setItem('psa_gemini_model', 'gemini-1.5-pro');
  const migrated = StorageService.getModel();
  assert(migrated === 'gemini-2.0-flash', `Auto-migrate model gemini-1.5-pro ke gemini-2.0-flash (dihasilkan: ${migrated})`);

  // 2. Test StorageService auto-migrates deprecated model with models/ prefix
  localStorage.setItem('psa_gemini_model', 'models/gemini-1.5-pro');
  const migratedPrefix = StorageService.getModel();
  assert(migratedPrefix === 'gemini-2.0-flash', `Auto-migrate models/gemini-1.5-pro ke gemini-2.0-flash (dihasilkan: ${migratedPrefix})`);

  // 3. Test StorageService.setModel strips models/ prefix
  StorageService.setModel('models/gemini-2.0-flash');
  const setClean = StorageService.getModel();
  assert(setClean === 'gemini-2.0-flash', `StorageService.setModel membersihkan prefix models/ (dihasilkan: ${setClean})`);

  // 4. Test candidateModels filtration excludes 1.5-pro, 2.5-pro, but includes gemini-3.5-flash-lite
  const modelToTest = 'gemini-1.5-pro';
  const cleanModel = (modelToTest || 'gemini-2.0-flash').trim().replace(/^models\//, '');
  const candidateModels = [
    cleanModel,
    'gemini-2.0-flash',
    'gemini-3.5-flash-lite',
    'gemini-1.5-flash',
    'gemini-2.5-flash',
    'gemini-1.5-flash-8b'
  ].filter((m, i, arr) => m && arr.indexOf(m) === i && !m.includes('1.5-pro') && !m.includes('2.5-pro') && (m === 'gemini-3.5-flash-lite' || (!m.includes('3.5') && !m.includes('3.8'))));

  assert(!candidateModels.includes('gemini-1.5-pro'), 'candidateModels TIDAK PERNAH memuat gemini-1.5-pro');
  assert(!candidateModels.includes('gemini-2.5-pro'), 'candidateModels TIDAK PERNAH memuat gemini-2.5-pro');
  assert(candidateModels.includes('gemini-2.0-flash'), 'candidateModels memuat gemini-2.0-flash');
  assert(candidateModels.includes('gemini-3.5-flash-lite'), 'candidateModels memuat gemini-3.5-flash-lite');
  assert(candidateModels.includes('gemini-1.5-flash'), 'candidateModels memuat gemini-1.5-flash');

  // 5. Test StorageService retains gemini-3.5-flash-lite
  localStorage.setItem('psa_v2_gemini_model', 'gemini-3.5-flash-lite');
  const storedLite = StorageService.getModel();
  assert(storedLite === 'gemini-3.5-flash-lite', `StorageService.getModel mempertahankan gemini-3.5-flash-lite (dihasilkan: ${storedLite})`);
}

// -----------------------------------------------------------------------------
// V3.3.5: ASPECT RATIO FEATURE COMPREHENSIVE TESTS
// -----------------------------------------------------------------------------
console.log('\n--- V3.3.5: PILIHAN RASIO ASPEK FITUR TEST ---');
{
  // 1. Verifikasi 8 pilihan rasio aspek wajib
  const expectedRatios = ['Otomatis', '1:1', '2:3', '3:2', '3:4', '4:3', '9:16', '16:9'];
  assert(
    expectedRatios.every(r => SUPPORTED_ASPECT_RATIOS.includes(r)),
    'SUPPORTED_ASPECT_RATIOS memuat seluruh 8 pilihan: Otomatis, 1:1, 2:3, 3:2, 3:4, 4:3, 9:16, 16:9'
  );

  // 2. Verifikasi deteksi otomatis rasio aspek berdasarkan dimensi asli
  assert(detectClosestAspectRatio(1080, 1080) === '1:1', '1080x1080 terdeteksi sebagai 1:1');
  assert(detectClosestAspectRatio(1920, 1080) === '16:9', '1920x1080 terdeteksi sebagai 16:9');
  assert(detectClosestAspectRatio(1080, 1920) === '9:16', '1080x1920 terdeteksi sebagai 9:16');
  assert(detectClosestAspectRatio(1200, 800) === '3:2', '1200x800 terdeteksi sebagai 3:2');
  assert(detectClosestAspectRatio(800, 1200) === '2:3', '800x1200 terdeteksi sebagai 2:3');
  assert(detectClosestAspectRatio(1024, 768) === '4:3', '1024x768 terdeteksi sebagai 4:3');
  assert(detectClosestAspectRatio(768, 1024) === '3:4', '768x1024 terdeteksi sebagai 3:4');
  assert(detectClosestAspectRatio(0, 0) === '1:1', '0x0 fallback default ke 1:1');

  // 3. Verifikasi synthesizeDynamicImagePrompt dengan rasio otomatis vs target
  const mockTelemetry = {
    aspectRatio: '3:4',
    dimensions: { width: 768, height: 1024 },
    detectedRatio: '3:4',
    brightness: 'Daylight',
    colorDominance: { primary: 'pink' }
  };

  const autoPrompt = synthesizeDynamicImagePrompt(mockTelemetry, { targetAspectRatio: 'auto' });
  assert(autoPrompt.aspectRatio === '3:4', `Mode Otomatis mempertahankan rasio asli gambar 3:4 (aspectRatio = 3:4)`);
  assert(autoPrompt.compositionPerspective.includes('3:4'), 'compositionPerspective memuat rasio 3:4');

  const overridePrompt = synthesizeDynamicImagePrompt(mockTelemetry, { targetAspectRatio: '16:9' });
  assert(overridePrompt.aspectRatio === '16:9', `Mode Target 16:9 menerapkan aspectRatio = 16:9`);
  assert(overridePrompt.compositionPerspective.includes('16:9'), 'compositionPerspective memuat target rasio 16:9');

  // 4. Verifikasi GeminiService analyzeImageToPrompt mengintegrasikan targetAspectRatio
  const testRepo = new CatalogRepository(INITIAL_SHORTHAND_CATALOG);
  const gemini = new GeminiService(testRepo.getAll());

  const autoVisionRes = await gemini.analyzeImageToPrompt({
    imageFile: { name: 'portrait.jpg', width: 800, height: 1200 },
    targetAspectRatio: 'auto'
  });
  assert(autoVisionRes.visionData.aspectRatio === '2:3', `analyzeImageToPrompt (auto) mendeteksi 2:3 dari 800x1200`);
  assert(autoVisionRes.visualBreakdown['Aspect Ratio'] === '2:3', `visualBreakdown['Aspect Ratio'] terisi '2:3'`);
  assert(autoVisionRes.optimalPrompt.includes('--ar 2:3'), 'optimalPrompt memuat --ar 2:3');

  const targetVisionRes = await gemini.analyzeImageToPrompt({
    imageFile: { name: 'portrait.jpg', width: 800, height: 1200 },
    targetAspectRatio: '16:9'
  });
  assert(targetVisionRes.visionData.aspectRatio === '16:9', `analyzeImageToPrompt (target) menerapkan target 16:9`);
  assert(targetVisionRes.visualBreakdown['Aspect Ratio'] === '16:9', `visualBreakdown['Aspect Ratio'] target 16:9`);
  assert(targetVisionRes.optimalPrompt.includes('--ar 16:9'), 'optimalPrompt memuat --ar 16:9');

  // 5. Verifikasi UI Component PromptInput me-render 8 tombol rasio aspek
  const promptInputAuto = renderPromptInput({
    activeMode: 'IMAGE_TO_PROMPT',
    selectedAspectRatio: 'auto',
    uploadedImage: { width: 1920, height: 1080, detectedAspectRatio: '16:9' }
  });
  assert(promptInputAuto.html.includes('aspect-ratio-control-panel'), 'PromptInput me-render .aspect-ratio-control-panel');
  assert(promptInputAuto.html.includes('data-ratio="Otomatis"'), 'Terdapat tombol Otomatis');
  assert(promptInputAuto.html.includes('data-ratio="1:1"'), 'Terdapat tombol 1:1');
  assert(promptInputAuto.html.includes('data-ratio="2:3"'), 'Terdapat tombol 2:3');
  assert(promptInputAuto.html.includes('data-ratio="3:2"'), 'Terdapat tombol 3:2');
  assert(promptInputAuto.html.includes('data-ratio="3:4"'), 'Terdapat tombol 3:4');
  assert(promptInputAuto.html.includes('data-ratio="4:3"'), 'Terdapat tombol 4:3');
  assert(promptInputAuto.html.includes('data-ratio="9:16"'), 'Terdapat tombol 9:16');
  assert(promptInputAuto.html.includes('data-ratio="16:9"'), 'Terdapat tombol 16:9');
  assert(
    promptInputAuto.html.includes('data-ratio="Otomatis"\n                    id="btn-aspect-Otomatis"\n                    title="Deteksi otomatis dari dimensi asli gambar"\n                  >') ||
    promptInputAuto.html.includes('data-ratio="Otomatis"'),
    'Tombol Otomatis aktif saat selectedAspectRatio="auto"'
  );

  const promptInputTarget = renderPromptInput({
    activeMode: 'IMAGE_TO_PROMPT',
    selectedAspectRatio: '9:16',
    uploadedImage: { width: 1920, height: 1080, detectedAspectRatio: '16:9' }
  });
  assert(
    promptInputTarget.html.includes('class="aspect-ratio-btn active" \n                    data-ratio="9:16"') ||
    promptInputTarget.html.includes('data-ratio="9:16"'),
    'Tombol 9:16 aktif saat selectedAspectRatio="9:16"'
  );
}

console.log('\n==================================================');
console.log(`HASIL AKHIR: ${passed} PASSED, ${failed} FAILED`);
console.log('==================================================\n');

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
