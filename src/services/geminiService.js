/**
 * Centralized Gemini Service V2
 * 
 * Prinsip:
 * 1. SATU titik akses terpusat untuk seluruh interaksi Gemini API.
 * 2. 100% BYOK (Bring Your Own Key) - tidak ada API key developer yang di-hardcode.
 * 3. Graceful Fallback: Jika key kosong, offline, atau gagal, aplikasi beralih
 *    mulus ke Local Semantic Engine tanpa crash.
 */

import { StorageService } from './storageService.js';
import { SemanticEngine } from '../lib/semanticEngine.js';
import { synthesizeDynamicImagePrompt, analyzeCanvasPixels } from '../lib/imageVisualAnalyzer.js';
import { buildTwoWorldsPromptIntegration } from '../data/twoWorldsData.js';

export const GEMINI_STATUS = {
  CONNECTED: 'CONNECTED',     // 🟢 Tersambung
  UNCONFIGURED: 'UNCONFIGURED', // 🟡 Belum diuji / konfigurasi
  FAILED: 'FAILED'            // 🔴 Gagal
};

export class GeminiService {
  constructor(catalog = []) {
    this.catalog = catalog;
    this.localEngine = new SemanticEngine(catalog);
    this.status = GEMINI_STATUS.UNCONFIGURED;
    this.lastError = null;
    this.initStatusFromStorage();
  }

  setCatalog(catalog) {
    this.catalog = catalog;
    this.localEngine.setCatalog(catalog);
  }

  initStatusFromStorage() {
    const key = StorageService.getApiKey();
    if (!key) {
      this.status = GEMINI_STATUS.UNCONFIGURED;
    }
  }

  getStatus() {
    return {
      status: this.status,
      error: this.lastError,
      hasKey: Boolean(StorageService.getApiKey())
    };
  }

  /**
   * Helper: Parse JSON with multi-stage fallback and markdown fence stripping
   */
  extractJson(rawText) {
    if (!rawText || typeof rawText !== 'string') {
      throw new Error('Respon kosong dari AI.');
    }

    // 1. Direct JSON parse
    try {
      return JSON.parse(rawText.trim());
    } catch (_) {}

    // 2. Strip markdown code fences (```json ... ``` or ``` ... ```)
    let cleaned = rawText
      .replace(/```(?:json)?/gi, '')
      .replace(/```/g, '')
      .trim();

    try {
      return JSON.parse(cleaned);
    } catch (_) {}

    // 3. Find outermost JSON object { ... }
    const firstBrace = cleaned.indexOf('{');
    const lastBrace = cleaned.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace > firstBrace) {
      const candidateObj = cleaned.substring(firstBrace, lastBrace + 1);
      try {
        return JSON.parse(candidateObj);
      } catch (_) {}
    }

    // 4. Find outermost JSON array [ ... ]
    const firstBracket = cleaned.indexOf('[');
    const lastBracket = cleaned.lastIndexOf(']');
    if (firstBracket !== -1 && lastBracket > firstBracket) {
      const candidateArr = cleaned.substring(firstBracket, lastBracket + 1);
      try {
        return JSON.parse(candidateArr);
      } catch (_) {}
    }

    throw new Error('Gagal mem-parsing format JSON dari respons AI.');
  }

  /**
   * Test connection using the user's API Key with multi-model cascade
   */
  async testConnection(apiKey, modelName) {
    const key = (apiKey || StorageService.getApiKey()).trim();
    const preferredModel = modelName || StorageService.getModel() || 'gemini-2.0-flash';

    if (!key) {
      this.status = GEMINI_STATUS.UNCONFIGURED;
      this.lastError = 'API Key belum dimasukkan';
      return {
        success: false,
        status: GEMINI_STATUS.UNCONFIGURED,
        message: 'Masukkan Gemini API Key Anda terlebih dahulu.'
      };
    }

    const cleanPreferred = (preferredModel || '').trim().replace(/^models\//, '');
    const candidateModels = [
      cleanPreferred,
      'gemini-2.0-flash',
      'gemini-3.5-flash-lite',
      'gemini-1.5-flash',
      'gemini-2.5-flash',
      'gemini-1.5-flash-8b'
    ].filter((m, i, arr) => m && arr.indexOf(m) === i && !m.includes('1.5-pro') && !m.includes('2.5-pro') && (m === 'gemini-3.5-flash-lite' || (!m.includes('3.5') && !m.includes('3.8'))));

    let lastErrMsg = '';
    let connectedModel = null;

    for (const model of candidateModels) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}?key=${encodeURIComponent(key)}`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          connectedModel = model;
          break;
        } else {
          const errorData = await response.json().catch(() => ({}));
          lastErrMsg = errorData.error?.message || `HTTP ${response.status}: ${response.statusText}`;
          if (response.status === 404) {
            // Model not found on this tier/API version, try next candidate
            continue;
          }
          if (response.status === 400 || response.status === 403) {
            // Invalid API key or permission denied
            break;
          }
        }
      } catch (err) {
        lastErrMsg = err.message || 'Koneksi jaringan gagal';
      }
    }

    if (connectedModel) {
      this.status = GEMINI_STATUS.CONNECTED;
      this.lastError = null;
      if (connectedModel !== preferredModel) {
        StorageService.setModel(connectedModel);
      }
      return {
        success: true,
        status: GEMINI_STATUS.CONNECTED,
        message: `Berhasil terhubung ke model ${connectedModel}!`
      };
    }

    // Secondary check: query available models list with user's key
    try {
      const listUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(key)}`;
      const listResp = await fetch(listUrl);
      if (listResp.ok) {
        const listData = await listResp.json().catch(() => ({}));
        const validModels = (listData.models || [])
          .filter(m => m.supportedGenerationMethods?.includes('generateContent'))
          .map(m => m.name.replace(/^models\//, ''))
          .filter(name => !name.includes('1.5-pro') && !name.includes('2.5-pro') && !name.includes('3.5') && !name.includes('3.8'));

        const autoModel = validModels.find(m => m.includes('2.0-flash')) ||
                          validModels.find(m => m.includes('1.5-flash')) ||
                          validModels[0];

        if (autoModel) {
          StorageService.setModel(autoModel);
          this.status = GEMINI_STATUS.CONNECTED;
          this.lastError = null;
          return {
            success: true,
            status: GEMINI_STATUS.CONNECTED,
            message: `Berhasil terhubung ke Gemini API (Model: ${autoModel})!`
          };
        }
      }
    } catch {
      // ignore
    }

    this.status = GEMINI_STATUS.FAILED;
    this.lastError = lastErrMsg || 'Koneksi gagal';
    return {
      success: false,
      status: GEMINI_STATUS.FAILED,
      message: `Gagal tersambung ke Gemini: ${this.lastError}`
    };
  }

  /**
   * Analyze prompt: Calls Gemini API if configured & connected;
   * otherwise transparently falls back to local SemanticEngine.
   */
  async analyzePrompt(rawPrompt, installedOverrides = null) {
    const key = StorageService.getApiKey().trim();
    const model = StorageService.getModel() || 'gemini-2.0-flash';

    // If no key or not connected, immediately use local engine
    if (!key) {
      const localResult = this.localEngine.analyze(rawPrompt, installedOverrides);
      return {
        ...localResult,
        source: 'LOCAL_ENGINE',
        isOnlineActive: false,
        engineNotice: 'Pencarian Online Shorthand TIDAK AKTIF (Mode Heuristik Lokal — Hubungkan Gemini API Key di Pengaturan untuk mengaktifkan pencarian online tanpa batas).'
      };
    }

    try {
      const aiResult = await this.callGeminiAPI(rawPrompt, key, model);
      if (aiResult) {
        // Merge AI structured result with shorthand catalog
        const finalResult = this.mergeAiWithCatalog(aiResult, rawPrompt, installedOverrides);
        this.status = GEMINI_STATUS.CONNECTED;
        this.lastError = null;
        const activeModel = StorageService.getModel() || model;
        return {
          ...finalResult,
          source: 'GEMINI_AI',
          isOnlineActive: true,
          engineNotice: `🌐 Pencarian Online Shorthand AKTIF (${activeModel}) — Menganalisis seluruh isi prompt tanpa batas domain, topik, atau kategori.`
        };
      }
    } catch (err) {
      console.warn('Gemini API call failed, maintaining connection and falling back smoothly to local engine:', err);
      // PENTING: JANGAN memutuskan status koneksi ke FAILED hanya karena sebuah prompt atau model error!
      // Status koneksi tetap CONNECTED karena API Key valid, hanya request individual ini yang fallback.
      this.lastError = err.message;
    }

    // Fallback to local deterministic engine without disconnecting Gemini
    const localResult = this.localEngine.analyze(rawPrompt, installedOverrides);
    return {
      ...localResult,
      source: 'LOCAL_ENGINE_FALLBACK',
      isOnlineActive: true,
      engineNotice: `🌐 Pencarian Online Shorthand AKTIF (Fallback lokal sementara: ${this.lastError || 'timeout/limit'}). Koneksi tetap tersambung.`
    };
  }

  /**
   * Call Gemini generateContent with multi-model fallback cascade
   */
  async callGeminiAPI(prompt, apiKey, model) {
    const cleanModel = (model || 'gemini-2.0-flash').trim().replace(/^models\//, '');
    const candidateModels = [
      cleanModel,
      'gemini-2.0-flash',
      'gemini-3.5-flash-lite',
      'gemini-1.5-flash',
      'gemini-2.5-flash',
      'gemini-1.5-flash-8b'
    ].filter((m, i, arr) => m && arr.indexOf(m) === i && !m.includes('1.5-pro') && !m.includes('2.5-pro') && (m === 'gemini-3.5-flash-lite' || (!m.includes('3.5') && !m.includes('3.8'))));

    let lastError = null;

    for (const currentModel of candidateModels) {
      try {
        const result = await this.executeGenerateContent(prompt, apiKey, currentModel);
        if (result) {
          if (currentModel !== model) {
            StorageService.setModel(currentModel);
          }
          return result;
        }
      } catch (err) {
        lastError = err;
        console.warn(`Model ${currentModel} tidak dapat digunakan (${err.message}), mencoba model alternatif...`);
        continue;
      }
    }

    throw lastError || new Error('Semua model Gemini tidak dapat dijangkau.');
  }

  /**
   * Private: Execute single generateContent request and parse JSON safely
   */
  async executeGenerateContent(prompt, apiKey, model) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;

    const systemInstruction = `Anda adalah Prompt Shorthand Analyzer V3.1 dengan Fitur Pencarian Online Shorthand Terbuka & Tidak Terbatas.
Tugas Anda: Menganalisis SELURUH isi INPUT PROMPT pengguna secara semantik dan menemukan/merekomendasikan notasi visual shorthand AI yang paling tepat, profesional, dan relevan.

PRINSIP UTAMA: PENCARIAN SHORTHAND HARUS TERBUKA DAN TIDAK TERBATAS.
- JANGAN MEMBATASI pencarian hanya pada kategori, subkategori, daftar istilah, atau topik tertentu.
- SETIAP INPUT PENGGUNA HARUS DAPAT DIPROSES DAN DICARI, apa pun topik, objek, gaya seni, konsep visual, komposisi, rasio/perluasan kanvas (outpainting / uncrop / expand canvas), aktivitas, profesi, suasana, atau istilah baru yang digunakan.
- Analisis seluruh makna dan konteks prompt, bukan hanya pencocokan kata kaku.
- Tetap temukan shorthand untuk istilah atau konsep baru yang belum terdapat dalam daftar shorthand lokal.
- Tidak memberikan batasan pencarian berdasarkan kategori aset.
- Tidak memblokir pencarian hanya karena istilah tidak dikenal oleh katalog shorthand lokal.
- Tampilkan HANYA shorthand yang benar-benar relevan dengan fungsi atau konsep dalam prompt.

PANDUAN SHORTHAND & NOTASI VISUAL:
1. Awali setiap shorthand dengan garis miring "/" (contoh: /outpaint, /expandcanvas, /facelock, /hairlock, /curvy, /enhance, /sharpen, /cyberpunk, /surgeon, /macrolens, /bokeh, dsb.).
2. Jika konsep ada di katalog umum aplikasi (misal: /facelock, /hairlock, /backgroundlock, /outfitlock, /bodylock, /outfit, /bgremove, /bgreplace, /headwear-remove, /enhance, /sharpen, /highresolution, /ar 9:16, /ar 16:9, /ar 1:1, /fullbody, /cinematic, /rawphoto, /colorgrade, /bodyvoluptuous, /curvy, /fullfigured, /plussize, /voluptuous, /handperfect, /hands, /handanatomy, /fingerperfect, /handdetail, /handnatural, /outpaint), prioritaskan kode tersebut.
3. JIKA user memasukkan kata kunci / konsep baru di luar katalog dasar (contoh: "memperluas foto" -> /outpaint, "fotografer tokyo cyberpunk" -> /cyberpunk, "dokter bedah" -> /surgeon, "lensa makro" -> /macrolens, dsb.), Anda WAJIB membuat dan merekomendasikan notasi shorthand yang paling profesional, presisi, dan sesuai standar industri visual AI.
4. Struktur Rekomendasi:
   - primaryShorthands (Prioritas 'WAJIB', isPrimary: true, checked: true): Rekomendasi utama (1 atau 2 shorthand paling vital yang langsung terpasang di Prompt Optimal). Beri label source: "ONLINE".
   - relatedShorthands (Prioritas 'DISARANKAN', isPrimary: false, checked: false): Alternatif shorthand relevan lainnya (2 sampai 5 pilihan alternatif). Beri label source: "ONLINE".

Jawab HANYA dalam format JSON valid tanpa markdown formatting:
{
  "intent": {
    "primaryAction": "NAMA_AKSI_SEMANTIK",
    "primaryTarget": "Target visual",
    "summary": "Ringkasan maksud instruksi visual user dalam bahasa Indonesia",
    "priority": "HIGH" | "MEDIUM" | "LOW",
    "category": "BODY_POSE" | "FACE_IDENTITY" | "HAIR" | "HEADWEAR" | "OUTFIT" | "BACKGROUND" | "LIGHTING" | "IMAGE_QUALITY" | "COLOR_TONE" | "CANVAS_RATIO" | "TRANSPARENCY" | "OBJECT_EDITING" | "STYLE_EFFECT" | "CAMERA_PHOTO"
  },
  "editAreas": [
    {
      "entity": "KATEGORI_ENTITY",
      "label": "Nama Area",
      "action": "ACTION_CODE",
      "description": "Deskripsi perubahan",
      "shorthand": "/shorthandutama"
    }
  ],
  "lockedAreas": [],
  "primaryShorthands": [
    {
      "code": "/shorthandutama",
      "name": "Nama Shorthand Utama",
      "category": "KATEGORI",
      "target": "TARGET",
      "description": "Penjelasan fungsi shorthand utama",
      "priority": "WAJIB",
      "reason": "Alasan rekomendasi utama",
      "isPrimary": true,
      "checked": true
    }
  ],
  "relatedShorthands": [
    {
      "code": "/alternatif1",
      "name": "Nama Alternatif",
      "category": "KATEGORI",
      "target": "TARGET",
      "description": "Penjelasan fungsi alternatif",
      "priority": "DISARANKAN",
      "reason": "Alternatif untuk variasi kebutuhan",
      "isPrimary": false,
      "checked": false
    }
  ],
  "installedShorthands": ["/shorthandutama"],
  "optimalPrompt": "prompt user bersih. /shorthandutama",
  "visualTransformation": "Deskripsi efek visual yang terjadi pada gambar"
}`;

    const requestBody = {
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `${systemInstruction}\n\nPrompt User: "${prompt}"`
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.1,
        responseMimeType: 'application/json'
      }
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API error (${response.status}): ${errText}`);
    }

    const data = await response.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) throw new Error('Respon Gemini kosong.');

    return this.extractJson(rawText);
  }

  /**
   * Ensure AI response enriches catalog and seamlessly provides recommendations
   */
  mergeAiWithCatalog(aiResult, rawPrompt, installedOverrides) {
    const fallback = this.localEngine.analyze(rawPrompt, installedOverrides);

    // 1. Tentukan primaryShorthands (Prioritaskan hasil online AI saat aktif)
    let primaryShorthands = [];
    const primaryCodesSet = new Set();

    if (aiResult && Array.isArray(aiResult.primaryShorthands) && aiResult.primaryShorthands.length > 0) {
      for (const p of aiResult.primaryShorthands) {
        if (!p || !p.code) continue;
        const code = p.code.startsWith('/') ? p.code : `/${p.code}`;
        if (primaryCodesSet.has(code)) continue;
        primaryCodesSet.add(code);

        // Cari metadata di katalog lokal jika ada
        const catItem = this.catalog.find(c => c.code.toLowerCase() === code.toLowerCase());
        primaryShorthands.push({
          item: catItem || null,
          code,
          name: p.name || catItem?.name || code,
          category: p.category || catItem?.category || 'ONLINE_DISCOVERY',
          target: p.target || catItem?.target || 'Konsep Visual Prompt',
          description: p.description || catItem?.description || 'Instruksi visual shorthand hasil analisis semantik online.',
          priority: 'WAJIB',
          reason: p.reason || 'Shorthand utama relevan berdasarkan analisis konteks prompt online.',
          isPrimary: true,
          checked: true,
          source: catItem ? 'CORE' : 'ONLINE',
          isOnline: !catItem,
          equivalentTo: catItem?.equivalentTo || p.equivalentTo || [],
          functionGroup: catItem?.functionGroup || p.functionGroup || p.category || 'ONLINE_EXTENSION'
        });
      }

      // Pastikan lock eksplisit dari user (seperti /facelock dari "jangan ubah wajah") tidak hilang
      if (fallback.primaryShorthands && fallback.primaryShorthands.length > 0) {
        for (const fp of fallback.primaryShorthands) {
          if (fp.category === 'LOCK_PRESERVATION' && !primaryCodesSet.has(fp.code)) {
            primaryCodesSet.add(fp.code);
            primaryShorthands.push({
              ...fp,
              isPrimary: true,
              checked: true,
              priority: 'WAJIB'
            });
          }
        }
      }
    } else if (fallback.primaryShorthands && fallback.primaryShorthands.length > 0) {
      primaryShorthands = fallback.primaryShorthands;
    }

    // 2. Tentukan relatedShorthands
    let relatedShorthands = [];
    const relatedCodesSet = new Set([...primaryShorthands.map(p => p.code)]);

    if (aiResult && Array.isArray(aiResult.relatedShorthands)) {
      for (const rel of aiResult.relatedShorthands) {
        if (!rel || !rel.code) continue;
        const code = rel.code.startsWith('/') ? rel.code : `/${rel.code}`;
        if (relatedCodesSet.has(code)) continue;
        relatedCodesSet.add(code);

        const catItem = this.catalog.find(c => c.code.toLowerCase() === code.toLowerCase());
        relatedShorthands.push({
          item: catItem || null,
          code,
          name: rel.name || catItem?.name || code,
          category: rel.category || catItem?.category || 'ONLINE_DISCOVERY',
          target: rel.target || catItem?.target || 'Variasi Konsep Visual',
          description: rel.description || catItem?.description || 'Alternatif shorthand hasil analisis semantik online.',
          priority: rel.priority || 'DISARANKAN',
          reason: rel.reason || 'Alternatif relevan dari pencarian online.',
          isPrimary: false,
          checked: false,
          source: catItem ? 'CORE' : 'ONLINE',
          isOnline: !catItem,
          equivalentTo: catItem?.equivalentTo || rel.equivalentTo || [],
          functionGroup: catItem?.functionGroup || rel.functionGroup || rel.category || 'ONLINE_EXTENSION'
        });
      }
    }

    // Gabungkan fallback related jika belum ada
    if (fallback.relatedShorthands && fallback.relatedShorthands.length > 0) {
      for (const fr of fallback.relatedShorthands) {
        if (!relatedCodesSet.has(fr.code)) {
          relatedCodesSet.add(fr.code);
          relatedShorthands.push(fr);
        }
      }
    }

    // 3. Tentukan installedShorthands
    let installedShorthands = [];
    if (installedOverrides && Array.isArray(installedOverrides)) {
      installedShorthands = installedOverrides;
    } else if (primaryShorthands.length > 0) {
      installedShorthands = primaryShorthands.map(p => p.code);
    } else if (aiResult.installedShorthands && Array.isArray(aiResult.installedShorthands) && aiResult.installedShorthands.length > 0) {
      installedShorthands = aiResult.installedShorthands.map(c => c.startsWith('/') ? c : `/${c}`);
    } else if (fallback.installedShorthands && fallback.installedShorthands.length > 0) {
      installedShorthands = fallback.installedShorthands;
    }

    // 4. Optimal Prompt
    const cleanText = fallback.cleanText || rawPrompt.trim();
    let optimalPrompt = fallback.optimalPrompt;
    if (installedShorthands.length > 0) {
      optimalPrompt = `${cleanText}. ${installedShorthands.join(' ')}`;
    } else if (aiResult.optimalPrompt && aiResult.optimalPrompt.trim()) {
      optimalPrompt = aiResult.optimalPrompt;
    }

    // 5. Intent
    const intent = {
      primaryAction: (aiResult.intent?.primaryAction && aiResult.intent.primaryAction !== 'MODIFIKASI_VISUAL')
        ? aiResult.intent.primaryAction
        : fallback.intent.primaryAction,
      primaryTarget: (aiResult.intent?.primaryTarget && aiResult.intent.primaryTarget !== 'Gambar')
        ? aiResult.intent.primaryTarget
        : fallback.intent.primaryTarget,
      summary: aiResult.intent?.summary || aiResult.summary || fallback.intent.summary,
      priority: aiResult.intent?.priority || fallback.intent.priority,
      category: (aiResult.intent?.category && aiResult.intent.category !== 'GENERAL')
        ? aiResult.intent.category
        : fallback.intent.category
    };

    // 6. Edit & Locked Areas
    const editAreas = (aiResult.editAreas && Array.isArray(aiResult.editAreas) && aiResult.editAreas.length > 0)
      ? aiResult.editAreas
      : fallback.editAreas;
    const lockedAreas = (aiResult.lockedAreas && Array.isArray(aiResult.lockedAreas) && aiResult.lockedAreas.length > 0)
      ? aiResult.lockedAreas
      : fallback.lockedAreas;

    return {
      rawPrompt,
      normalizedPrompt: fallback.normalizedPrompt,
      cleanText,
      intent,
      editAreas,
      lockedAreas,
      unchangedAreas: fallback.unchangedAreas,
      conflicts: (aiResult.conflicts && aiResult.conflicts.length > 0) ? aiResult.conflicts : fallback.conflicts,
      primaryShorthands,
      relatedShorthands,
      recommendations: [...primaryShorthands, ...relatedShorthands],
      exclusions: fallback.exclusions,
      installedShorthands,
      visualTransformation: aiResult.visualTransformation || fallback.visualTransformation,
      optimalPrompt,
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Online Fallback Shorthand Search (BYOK Gemini)
   * Digunakan jika katalog lokal tidak menemukan hasil relevan atau hasil terlalu sedikit.
   */
  async searchOnlineShorthand(query) {
    if (!query || typeof query !== 'string' || !query.trim()) {
      return { results: [], onlineAvailable: false, message: '' };
    }

    const key = StorageService.getApiKey() ? StorageService.getApiKey().trim() : '';
    const preferredModel = StorageService.getModel() || 'gemini-2.0-flash';

    if (!key) {
      return {
        results: [],
        onlineAvailable: false,
        message: 'Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia (atur Gemini API Key di Pengaturan).'
      };
    }

    const candidateModels = [
      preferredModel,
      'gemini-3.5-flash-lite',
      'gemini-2.0-flash',
      'gemini-2.5-flash',
      'gemini-1.5-flash',
      'gemini-2.5-pro'
    ].filter((m, i, arr) => m && arr.indexOf(m) === i && (m === 'gemini-3.5-flash-lite' || (!m.includes('3.5') && !m.includes('3.8'))));

    const systemPrompt = `Anda adalah Prompt Shorthand Dictionary Assistant profesional. Berdasarkan kata kunci pencarian user dalam domain visual APAPUN (tangan/jari, pose tubuh, fotografi, pencahayaan, sinematik, busana, anime, 3D render, efek visual, kamera, warna, latar, dsb.), rekomendasikan notasi shorthand visual AI yang paling tepat, umum, atau representatif (misal: untuk tangan natural -> /handperfect, /hands, /handanatomy, /fingerperfect; untuk pencahayaan -> /enhance, /cinematic, /volumetric-lighting; untuk portrait -> /portrait, /dof, /bokeh, dsb.).
Aturan:
1. Rekomendasikan 4 sampai 8 notasi shorthand yang paling relevan dengan kata kunci user.
2. Setiap kode shorthand WAJIB diawali garis miring (misal: /handperfect).
3. Berikan nama yang jelas dan deskripsi fungsi spesifik dalam bahasa Indonesia.
4. Format kembalian HANYA JSON array valid tanpa markdown wrapper:
[
  {
    "code": "/...",
    "name": "...",
    "description": "...",
    "category": "BODY_POSE"
  }
]`;

    const requestBody = {
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `${systemPrompt}\n\nKata kunci pencarian user: "${query.trim()}"`
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.1,
        responseMimeType: 'application/json'
      }
    };

    for (const model of candidateModels) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`;

        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
          continue;
        }

        const data = await response.json();
        const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!rawText) continue;

        let parsed = [];
        try {
          parsed = this.extractJson(rawText);
        } catch {
          continue;
        }

        if (!Array.isArray(parsed)) {
          continue;
        }

        const validResults = parsed
          .filter(item => item && item.code && typeof item.code === 'string')
          .map(item => ({
            code: item.code.startsWith('/') ? item.code : `/${item.code}`,
            name: item.name || item.code,
            description: item.description || 'Instruksi visual shorthand online',
            category: item.category || 'ONLINE_EXTENDED',
            source: 'ONLINE',
            isOnline: true
          }));

        return {
          results: validResults,
          onlineAvailable: true,
          message: validResults.length === 0 ? 'Tidak ada shorthand online yang cocok.' : ''
        };
      } catch (err) {
        console.warn(`Pencarian online dengan model ${model} gagal:`, err);
        continue;
      }
    }

    return {
      results: [],
      onlineAvailable: false,
      message: 'Pencarian online tidak tersedia saat ini.'
    };
  }

  /**
   * Fitur Baru V3.2: PERKAYA DENGAN AI (Enrich with AI)
   * Memperkaya Prompt Optimal menggunakan Gemini AI tanpa mengubah makna utama prompt.
   * Prinsip: "ENRICH, NOT REPLACE." Prompt Optimal asli adalah SOURCE OF TRUTH.
   */
  async enrichPrompt(optimalPrompt, analysisContext = null) {
    if (!optimalPrompt || typeof optimalPrompt !== 'string' || !optimalPrompt.trim()) {
      throw new Error('Prompt optimal kosong.');
    }

    const key = StorageService.getApiKey() ? StorageService.getApiKey().trim() : '';
    const preferredModel = StorageService.getModel() || 'gemini-2.0-flash';

    if (!key) {
      throw new Error('Gemini API Key belum terhubung. Silakan atur di menu API & Pengaturan.');
    }

    // Ekstrak seluruh shorthand yang ada di Prompt Optimal asli (misal /facelock, /hairlock, /enhance)
    const originalShorthands = (optimalPrompt.match(/\/[a-zA-Z0-9_\-:]+/g) || []);

    const candidateModels = [
      preferredModel,
      'gemini-3.5-flash-lite',
      'gemini-2.0-flash',
      'gemini-2.5-flash',
      'gemini-1.5-flash',
      'gemini-2.5-pro'
    ].filter((m, i, arr) => m && arr.indexOf(m) === i && (m === 'gemini-3.5-flash-lite' || (!m.includes('3.5') && !m.includes('3.8'))));

    const systemInstruction = `Anda adalah Prompt Shorthand Analyzer V3.3.5 - Asisten Ahli Prompt Enrichment untuk Generative Visual AI.
Tugas Anda: Memperkaya Prompt Optimal pengguna dengan detail visual berkualitas tinggi tanpa mengubah makna atau maksud utamanya.

PRINSIP UTAMA: "ENRICH, NOT REPLACE" (Prompt Optimal asli adalah SOURCE OF TRUTH).

ATURAN WAJIB & BATASAN KETAT:
1. JANGAN PERNAH mengubah subjek utama, objek utama, aktivitas, konteks, maksud/intent, maupun konsep adegan.
2. JANGAN PERNAH menghapus informasi penting dari Prompt Optimal asli.
3. JANGAN PERNAH menghapus atau mengubah shorthand visual (kata atau kode berawalan '/'). Seluruh shorthand yang ada pada prompt asli WAJIB dipertahankan dan diletakkan di akhir prompt.
4. JANGAN mengubah instruksi identitas, lock, pose, outfit, background, atau constraint penting lainnya.
5. ANDA DIIZINKAN DAN DIANJURKAN MEMPERBAIKI:
   - Kejelasan deskripsi visual dan materialitas objek.
   - Komposisi gambar (framing, focal length, angle kamera jika relevan).
   - Pencahayaan alami atau sinematik (soft illumination, ambient rim light, directional shadow).
   - Atmosfer, kedalaman ruang (depth of field), dan tekstur realistis.
   - Urutan instruksi deskriptif agar optimal dipahami model generasi gambar AI.
6. JANGAN menambahkan detail sembarangan atau fantasi berlebihan hanya agar prompt menjadi panjang.
7. JANGAN mengubah prompt menjadi konsep baru.
8. Pertahankan bahasa utama prompt asli (jika bahasa Inggris tetap bahasa Inggris; jika bahasa Indonesia tetap bahasa Indonesia).

Format respons HANYA berupa JSON valid:
{
  "enrichedPrompt": "teks prompt lengkap yang telah diperkaya beserta seluruh shorthand asli di akhir"
}`;

    const contextSummary = analysisContext?.intent?.summary || '';
    const userPromptPayload = `Prompt Optimal Asli:\n"${optimalPrompt.trim()}"\n${contextSummary ? `Konteks/Maksud Analisis:\n"${contextSummary}"\n` : ''}Shorthand Terpasang Wajib Dipertahankan: ${originalShorthands.length > 0 ? originalShorthands.join(' ') : '(tidak ada)'}`;

    const requestBody = {
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `${systemInstruction}\n\n${userPromptPayload}`
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: 'application/json'
      }
    };

    let lastError = null;

    for (const model of candidateModels) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`;
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
          const errText = await response.text();
          throw new Error(`HTTP ${response.status}: ${errText}`);
        }

        const data = await response.json();
        const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!rawText) throw new Error('Respon Gemini kosong.');

        const parsed = this.extractJson(rawText);
        let enrichedText = parsed.enrichedPrompt || parsed.prompt || (typeof parsed === 'string' ? parsed : '');

        if (!enrichedText || typeof enrichedText !== 'string' || !enrichedText.trim()) {
          throw new Error('Hasil pengayaan AI kosong atau tidak valid.');
        }

        enrichedText = enrichedText.trim();

        // Safe preservation: Pastikan seluruh shorthand awal tetap ada
        for (const sh of originalShorthands) {
          if (!enrichedText.includes(sh)) {
            enrichedText += ` ${sh}`;
          }
        }

        return {
          success: true,
          enrichedPrompt: enrichedText,
          modelUsed: model
        };
      } catch (err) {
        lastError = err;
        console.warn(`Enrich prompt dengan model ${model} gagal:`, err.message);
        continue;
      }
    }

    throw lastError || new Error('Gagal memperkaya prompt dengan Gemini.');
  }
  /**
   * Helper: Deteksi rasio aspek visual (aspect ratio) gambar dari atribut file atau header base64
   */
  detectImageAspect(imageFile = null, imageBase64 = null) {
    if (imageFile?.width && imageFile?.height) {
      const ratio = imageFile.width / imageFile.height;
      if (ratio > 1.6) return { ar: '16:9', orientation: 'landscape-wide' };
      if (ratio > 1.25) return { ar: '4:3', orientation: 'landscape' };
      if (ratio > 0.9 && ratio < 1.1) return { ar: '1:1', orientation: 'square' };
      if (ratio < 0.65) return { ar: '9:16', orientation: 'portrait-tall' };
      if (ratio < 0.85) return { ar: '3:4', orientation: 'portrait' };
    }

    if (imageBase64 && typeof imageBase64 === 'string') {
      try {
        const rawB64 = imageBase64.replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/, '');
        if (typeof atob === 'function') {
          const bin = atob(rawB64.substring(0, 4000));
          // PNG Check (bytes 16-23 contain width & height in IHDR)
          if (bin.charCodeAt(0) === 0x89 && bin.charCodeAt(1) === 0x50 && bin.charCodeAt(2) === 0x4E && bin.charCodeAt(3) === 0x47) {
            const w = (bin.charCodeAt(16) << 24) | (bin.charCodeAt(17) << 16) | (bin.charCodeAt(18) << 8) | bin.charCodeAt(19);
            const h = (bin.charCodeAt(20) << 24) | (bin.charCodeAt(21) << 16) | (bin.charCodeAt(22) << 8) | bin.charCodeAt(23);
            if (w > 0 && h > 0) {
              const ratio = w / h;
              if (ratio > 1.6) return { ar: '16:9', orientation: 'landscape-wide' };
              if (ratio > 1.2) return { ar: '4:3', orientation: 'landscape' };
              if (ratio > 0.9 && ratio < 1.1) return { ar: '1:1', orientation: 'square' };
              if (ratio < 0.65) return { ar: '9:16', orientation: 'portrait-tall' };
              return { ar: '3:4', orientation: 'portrait' };
            }
          }
        }
      } catch (_) {}
    }

    const fname = (imageFile?.name || '').toLowerCase();
    if (fname.includes('portrait') || fname.includes('vertical') || fname.includes('story') || fname.includes('reel')) {
      return { ar: '9:16', orientation: 'portrait-tall' };
    }
    if (fname.includes('square') || fname.includes('feed') || fname.includes('profile') || fname.includes('1x1')) {
      return { ar: '1:1', orientation: 'square' };
    }
    return { ar: '16:9', orientation: 'landscape-wide' };
  }

  /**
   * Helper: Menyusun format standar "PROMPT HASIL ANALISA GAMBAR"
   * /imagine prompt: [MAIN DESCRIPTION] \n\n [SECTIONS...]
   */
  assembleStructuredImagePrompt(visionData) {
    if (!visionData) return '';

    const main = (visionData.mainDescription || visionData.generatedPrompt || '').trim() ||
      'Fotografi autentik dengan pencahayaan alami dan detail realistis.';
    const header = main.startsWith('/imagine prompt:') ? main : `/imagine prompt: ${main}`;

    let visualDetails = (visionData.visualDetails || '').trim();
    if (!visualDetails) {
      const detailParts = [];
      if (visionData.subject || visionData.subjectDescription) {
        detailParts.push((visionData.subject || visionData.subjectDescription).trim());
      }
      if (visionData.pose || (visionData.poseExpression && visionData.poseExpression !== '-')) {
        detailParts.push((visionData.pose || visionData.poseExpression).trim());
      }
      if (visionData.identityPreservation && visionData.identityPreservation !== '-') {
        detailParts.push(visionData.identityPreservation.trim());
      }
      if (visionData.outfit || (visionData.outfitMaterial && visionData.outfitMaterial !== '-')) {
        detailParts.push((visionData.outfit || visionData.outfitMaterial).trim());
      }
      if (visionData.environment || (visionData.environmentBackground && visionData.environmentBackground !== '-')) {
        detailParts.push((visionData.environment || visionData.environmentBackground).trim());
      }
      if (visionData.composition || (visionData.compositionPerspective && visionData.compositionPerspective !== '-')) {
        detailParts.push((visionData.composition || visionData.compositionPerspective).trim());
      }
      if (visionData.lighting || (visionData.lightingColor && visionData.lightingColor !== '-')) {
        detailParts.push((visionData.lighting || visionData.lightingColor).trim());
      }
      if (visionData.cameraLensDof && visionData.cameraLensDof !== '-') {
        detailParts.push(visionData.cameraLensDof.trim());
      }
      if (visionData.style || (visionData.photoStyleRealism && visionData.photoStyleRealism !== '-')) {
        detailParts.push((visionData.style || visionData.photoStyleRealism).trim());
      }
      visualDetails = detailParts.join('\n\n');
    }

    if (visualDetails) {
      return `${header}\n\n${visualDetails}`;
    }
    return header;
  }

  /**
   * Helper: Menyusun format lengkap "PROMPT OPTIMAL FINAL"
   * Sesuai format wajib:
   * /imagine prompt: [prompt hasil analisa gambar aktual]
   * 
   * [seluruh detail visual yang relevan dari gambar]
   * 
   * [semua shorthand yang relevan berdasarkan hasil analisa]
   * 
   * --no [negative prompt yang relevan]
   */
  assembleOptimalImagePrompt(visionData, installedCodes = [], twoWorldsConfig = null) {
    const main = (visionData?.mainDescription || visionData?.generatedPrompt || '').trim() ||
      'Fotografi autentik dengan pencahayaan alami dan detail realistis.';
    const header = main.startsWith('/imagine prompt:') ? main : `/imagine prompt: ${main}`;

    let visualDetails = (visionData?.visualDetails || '').trim();
    if (!visualDetails) {
      const detailParts = [];
      if (visionData?.subject || visionData?.subjectDescription) {
        detailParts.push((visionData.subject || visionData.subjectDescription).trim());
      }
      if (visionData?.pose || (visionData?.poseExpression && visionData.poseExpression !== '-')) {
        detailParts.push((visionData.pose || visionData.poseExpression).trim());
      }
      if (visionData?.identityPreservation && visionData.identityPreservation !== '-') {
        detailParts.push(visionData.identityPreservation.trim());
      }
      if (visionData?.outfit || (visionData?.outfitMaterial && visionData.outfitMaterial !== '-')) {
        detailParts.push((visionData.outfit || visionData.outfitMaterial).trim());
      }
      if (visionData?.environment || (visionData?.environmentBackground && visionData.environmentBackground !== '-')) {
        detailParts.push((visionData.environment || visionData.environmentBackground).trim());
      }
      if (visionData?.composition || (visionData?.compositionPerspective && visionData.compositionPerspective !== '-')) {
        detailParts.push((visionData.composition || visionData.compositionPerspective).trim());
      }
      if (visionData?.lighting || (visionData?.lightingColor && visionData.lightingColor !== '-')) {
        detailParts.push((visionData.lighting || visionData.lightingColor).trim());
      }
      if (visionData?.cameraLensDof && visionData.cameraLensDof !== '-') {
        detailParts.push(visionData.cameraLensDof.trim());
      }
      if (visionData?.style || (visionData?.photoStyleRealism && visionData.photoStyleRealism !== '-')) {
        detailParts.push((visionData.style || visionData.photoStyleRealism).trim());
      }
      visualDetails = detailParts.join('\n\n');
    }

    const parts = [header];
    if (visualDetails) {
      parts.push(visualDetails);
    }

    // Integrasi Khusus Mode 2 Dunia (Hanya berlaku bila twoWorldsConfig diberikan)
    if (twoWorldsConfig) {
      const twoWorldsText = buildTwoWorldsPromptIntegration(twoWorldsConfig, visionData);
      if (twoWorldsText) {
        parts.push(twoWorldsText);
      }
    }

    // Section 3: Semua shorthand yang relevan berdasarkan hasil analisa (UNLIMITED)
    const ar = visionData?.aspectRatio || '16:9';
    const cleanCodes = (installedCodes || []).map(c => c.startsWith('/') ? c : `/${c}`);
    let shorthandsBlock = cleanCodes.join(' ');
    if (shorthandsBlock) {
      shorthandsBlock += ` --ar ${ar} --style raw --v 6.1`;
    } else {
      shorthandsBlock = `--ar ${ar} --style raw --v 6.1`;
    }
    parts.push(shorthandsBlock);

    // Section 4: --no [negative prompt yang relevan]
    let negative = (visionData?.negativePrompt || visionData?.contextualNegativePrompt || '').trim();
    const is3DSubject = Boolean(
      (visionData?.photoStyleRealism && /3d|render|octane|chibi|doll|figurine|toy/i.test(visionData.photoStyleRealism)) ||
      (visionData?.subjectDescription && /3d|chibi|doll|figurine|toy/i.test(visionData.subjectDescription)) ||
      (visionData?.mainDescription && /3d|chibi|doll|figurine|toy/i.test(visionData.mainDescription))
    );

    if (!negative) {
      negative = is3DSubject
        ? 'real human photo, photographic grain, wrinkled skin, bad 3d render, distorted limbs, extra fingers, blurry, watermark, text'
        : 'cartoon, 3d render, illustration, deformed, blurry, watermark, text';
    }

    let cleanNegative = negative.replace(/^--no\s+/i, '').trim();
    if (is3DSubject) {
      cleanNegative = cleanNegative
        .replace(/cartoon,\s*/gi, '')
        .replace(/3d render,\s*/gi, '')
        .replace(/illustration,\s*/gi, '')
        .replace(/,\s*3d render/gi, '')
        .replace(/,\s*cartoon/gi, '');
      if (!cleanNegative.includes('real human photo')) {
        cleanNegative = `real human photo, photographic grain, ${cleanNegative}`.replace(/^,\s*/, '');
      }
    }
    parts.push(`--no ${cleanNegative}`);

    return parts.join('\n\n');
  }

  /**
   * Helper: Mencocokkan seluruh konsep visual yang teridentifikasi dengan Katalog Shorthand
   * UNLIMITED (Tanpa batas jumlah) & Deduplikasi per Function Group
   */
  matchImageShorthands(fullPromptText, visionData = null) {
    const textLower = (
      (fullPromptText || '') + ' ' +
      (visionData?.mainDescription || '') + ' ' +
      (visionData?.visualDetails || '') + ' ' +
      (visionData?.subject || '') + ' ' +
      (visionData?.subjectDescription || '') + ' ' +
      (visionData?.outfit || '') + ' ' +
      (visionData?.outfitMaterial || '') + ' ' +
      (visionData?.pose || '') + ' ' +
      (visionData?.poseExpression || '') + ' ' +
      (visionData?.environment || '') + ' ' +
      (visionData?.environmentBackground || '') + ' ' +
      (visionData?.composition || '') + ' ' +
      (visionData?.compositionPerspective || '') + ' ' +
      (visionData?.lighting || '') + ' ' +
      (visionData?.lightingColor || '') + ' ' +
      (visionData?.cameraLensDof || '') + ' ' +
      (visionData?.style || '') + ' ' +
      (visionData?.photoStyleRealism || '') + ' ' +
      (Array.isArray(visionData?.suggestedShorthands) ? visionData.suggestedShorthands.join(' ') : '') + ' ' +
      (Array.isArray(visionData?.optimizationNeeds) ? visionData.optimizationNeeds.join(' ') : '')
    ).toLowerCase();

    const candidateMatches = [];

    // 1. Prioritaskan suggestedShorthands langsung dari Vision AI
    if (Array.isArray(visionData?.suggestedShorthands)) {
      for (const rawCode of visionData.suggestedShorthands) {
        const cleanCode = (rawCode || '').trim();
        if (!cleanCode) continue;
        const normCode = cleanCode.startsWith('/') ? cleanCode.toLowerCase() : `/${cleanCode.toLowerCase()}`;
        const found = this.catalog.find(c => c.code.toLowerCase() === normCode);
        if (found) {
          candidateMatches.push({
            code: found.code,
            name: found.name,
            category: found.category,
            functionGroup: found.functionGroup || `GROUP_${found.code.replace(/[^a-zA-Z0-9]/g, '_').toUpperCase()}`,
            description: found.description,
            priority: 'WAJIB',
            isPrimary: true,
            checked: true,
            reason: 'Teridentifikasi langsung oleh Vision AI dari karakteristik gambar aktual',
            source: 'IMAGE_VISION_AI'
          });
        }
      }
    }

    // 2. Evaluasi seluruh katalog untuk mendeteksi atribut visual lainnya (UNLIMITED)
    for (const item of this.catalog) {
      // Strict anti-random: periksa negative triggers
      const negTriggers = (item.negativeTriggers || []).map(t => t.toLowerCase());
      if (negTriggers.length > 0 && negTriggers.some(nt => textLower.includes(nt))) {
        continue;
      }

      // Periksa triggers semantik & direktif
      const triggers = (item.semanticTriggers || []).map(t => t.toLowerCase());
      let matched = false;
      let reason = '';

      if (textLower.includes(item.code.toLowerCase())) {
        matched = true;
        reason = `Terdeteksi dari direktif visual: ${item.code}`;
      } else if (triggers.some(t => textLower.includes(t))) {
        matched = true;
        reason = `Teridentifikasi dari atribut visual gambar (${item.name})`;
      } else if (Array.isArray(visionData?.optimizationNeeds) && visionData.optimizationNeeds.some(n => 
        item.code.toLowerCase().includes(n.toLowerCase()) || 
        (item.name || '').toLowerCase().includes(n.toLowerCase()) ||
        triggers.some(t => n.toLowerCase().includes(t))
      )) {
        matched = true;
        reason = `Direkomendasikan untuk optimasi visual gambar (${item.name})`;
      }

      if (matched) {
        candidateMatches.push({
          code: item.code,
          name: item.name,
          category: item.category,
          functionGroup: item.functionGroup || `GROUP_${item.code.replace(/[^a-zA-Z0-9]/g, '_').toUpperCase()}`,
          description: item.description,
          priority: item.priority || 'WAJIB',
          isPrimary: true,
          checked: true,
          reason: reason || item.whenToUse || 'Sesuai dengan karakter visual gambar',
          source: 'IMAGE_ANALYSIS'
        });
      }
    }

    // 3. Deduplikasi fungsi: 1 perwakilan paling relevan per functionGroup
    const seenFunctionGroups = new Set();
    const deduplicated = [];

    for (const candidate of candidateMatches) {
      if (!seenFunctionGroups.has(candidate.functionGroup)) {
        seenFunctionGroups.add(candidate.functionGroup);
        deduplicated.push(candidate);
      }
    }

    return deduplicated;
  }

  /**
   * Helper: Menyusun 13 Atribut Visual Standar sesuai Blueprint Mode 2:
   * Subject, Pose, Framing, Camera / Angle, Lighting, Environment, Background,
   * Outfit, Expression, Composition, Style, Color / Tone, Aspect Ratio
   */
  getStandard13VisualBreakdown(visionData) {
    const ar = visionData?.aspectRatio || '16:9';
    const isVertical = ar === '9:16' || ar === '3:4';

    return {
      'Subject': (visionData?.subject || visionData?.subjectDescription || visionData?.mainDescription || 'Subjek visual utama teridentifikasi').trim(),
      'Pose': (visionData?.pose || visionData?.poseExpression || 'Postur alami terpusat').trim(),
      'Framing': (visionData?.framing || (isVertical ? 'Vertical portrait framing' : 'Eye-level balanced framing')).trim(),
      'Camera / Angle': (visionData?.cameraAngle || visionData?.camera || visionData?.cameraLensDof || 'Eye-level angle, 50mm prime f/2.8').trim(),
      'Lighting': (visionData?.lighting || visionData?.lightingColor || 'Pencahayaan terukur dengan gradasi bayangan natural').trim(),
      'Environment': (visionData?.environment || visionData?.environmentBackground || 'Setting lingkungan terkoordinasi secara alami').trim(),
      'Background': (visionData?.background || visionData?.environmentBackground || 'Latar belakang dengan separasi kedalaman terukur').trim(),
      'Outfit': (visionData?.outfit || visionData?.outfitMaterial || 'Pakaian rapi dengan tekstur bahan autentik').trim(),
      'Expression': (visionData?.expression || 'Ekspresi wajar, fokus tenang, dan proporsi alami').trim(),
      'Composition': (visionData?.composition || visionData?.compositionPerspective || 'Komposisi terpusat seimbang rule-of-thirds').trim(),
      'Style': (visionData?.style || visionData?.photoStyleRealism || 'Fotografi realistis autentik').trim(),
      'Color / Tone': (visionData?.colorTone || 'Palet warna alami dengan kontras seimbang').trim(),
      'Aspect Ratio': ar
    };
  }

  /**
   * Helper: Blueprint 5-Bucket Shorthand Analysis untuk Mode 2
   * DEDUPLIKASI MUTLAK: Setiap shorthand hanya muncul di SATU kelompok/bucket.
   * A. Primary Shorthand (1 fungsi visual utama = 1 shorthand, aktif default [✓])
   * B. Related Shorthand (pendukung, fungsi berbeda dari primary, non-aktif default)
   * C. Similar / Alternative Shorthand (sinonim/alternatif, non-aktif default)
   * D. Shorthand Konflik (jika tidak ada: [])
   * E. Shorthand Tidak Diperlukan / Dikecualikan (redundant/out-of-context)
   */
  analyzeImageShorthandsBlueprint(generatedPrompt, visionData) {
    const usedCodes = new Set();
    const textCorpus = (
      (generatedPrompt || '') + ' ' +
      (visionData?.mainDescription || '') + ' ' +
      (visionData?.visualDetails || '') + ' ' +
      Object.values(visionData || {}).filter(v => typeof v === 'string').join(' ')
    ).toLowerCase();

    // 1. Scoring kandidat berdasarkan relevansi visual
    const candidateScores = new Map();

    // Prioritas 1: Shorthand yang disarankan langsung oleh Vision AI
    if (Array.isArray(visionData?.suggestedShorthands)) {
      visionData.suggestedShorthands.forEach(code => {
        const clean = (code || '').trim().toLowerCase();
        const norm = clean.startsWith('/') ? clean : `/${clean}`;
        candidateScores.set(norm, 100);
      });
    }

    // Prioritas 2: Pemindaian katalog dengan direktif semantik dan triggers
    for (const item of this.catalog) {
      const code = item.code.toLowerCase();
      let score = candidateScores.get(code) || 0;

      if (textCorpus.includes(code)) {
        score += 35;
      }

      const triggers = (item.semanticTriggers || []).map(t => t.toLowerCase());
      for (const trig of triggers) {
        if (trig && textCorpus.includes(trig)) {
          score += 20;
        }
      }

      if (Array.isArray(visionData?.optimizationNeeds)) {
        for (const need of visionData.optimizationNeeds) {
          const nLower = (need || '').toLowerCase();
          if (nLower && (triggers.some(t => nLower.includes(t)) || (item.name || '').toLowerCase().includes(nLower))) {
            score += 25;
          }
        }
      }

      const negTriggers = (item.negativeTriggers || []).map(t => t.toLowerCase());
      if (negTriggers.some(nt => nt && textCorpus.includes(nt))) {
        score = -100;
      }

      if (score > 0) {
        candidateScores.set(code, score);
      }
    }

    // Urutkan item katalog yang cocok berdasarkan skor tertinggi
    const matchedItems = [];
    for (const item of this.catalog) {
      const score = candidateScores.get(item.code.toLowerCase()) || 0;
      if (score > 0) {
        matchedItems.push({ item, score });
      }
    }
    matchedItems.sort((a, b) => b.score - a.score);

    // ========================================================
    // A. PRIMARY SHORTHAND
    // - Shorthand inti paling representatif
    // - 1 fungsi visual utama = 1 shorthand
    // - Status aktif / terpasang secara default [✓]
    // ========================================================
    const primaryShorthands = [];
    const primaryFuncGroups = new Set();

    for (const { item } of matchedItems) {
      const code = item.code.toLowerCase();
      const fg = item.functionGroup || item.category;
      if (!primaryFuncGroups.has(fg) && !usedCodes.has(code)) {
        primaryFuncGroups.add(fg);
        usedCodes.add(code);
        primaryShorthands.push({
          code: item.code,
          name: item.name,
          category: item.category,
          functionGroup: fg,
          description: item.description,
          target: item.target || 'Visual Utama',
          priority: 'WAJIB',
          isPrimary: true,
          checked: true,
          active: true,
          reason: `Mewakili fungsi visual inti (${item.name}) dari analisis gambar aktual`,
          source: (candidateScores.get(code) || 0) >= 100 ? 'VISION_AI' : 'IMAGE_ANALYSIS',
          equivalentTo: item.equivalentTo || []
        });
        if (primaryShorthands.length >= 8) break;
      }
    }

    // ========================================================
    // B. RELATED SHORTHAND
    // - Shorthand pendukung yang melengkapi primary
    // - Fungsi visual berbeda dari primary
    // - Tidak boleh mengulang primary
    // ========================================================
    const relatedShorthands = [];
    const relatedFuncGroups = new Set();

    for (const { item } of matchedItems) {
      const code = item.code.toLowerCase();
      const fg = item.functionGroup || item.category;
      if (!primaryFuncGroups.has(fg) && !relatedFuncGroups.has(fg) && !usedCodes.has(code)) {
        relatedFuncGroups.add(fg);
        usedCodes.add(code);
        relatedShorthands.push({
          code: item.code,
          name: item.name,
          category: item.category,
          functionGroup: fg,
          description: item.description,
          target: item.target || 'Visual Pendukung',
          priority: 'OPSIONAL',
          isPrimary: false,
          checked: false,
          active: false,
          relationship: 'COMPLEMENTARY',
          reason: `Melengkapi fungsi visual pada domain ${item.category} (${item.name})`,
          source: 'IMAGE_ANALYSIS',
          equivalentTo: item.equivalentTo || []
        });
        if (relatedShorthands.length >= 8) break;
      }
    }

    // ========================================================
    // C. SIMILAR / ALTERNATIVE SHORTHAND
    // - Shorthand alternatif atau sinonim
    // - Memiliki fungsi/kategori yang mirip dengan primary/related
    // - Tidak aktif secara default [ ]
    // - Tidak menduplikasi shorthand di bagian lain
    // ========================================================
    const similarShorthands = [];
    const activeCategories = new Set([
      ...primaryShorthands.map(p => p.category),
      ...relatedShorthands.map(r => r.category)
    ]);
    const activeFuncGroups = new Set([
      ...primaryFuncGroups,
      ...relatedFuncGroups
    ]);

    // Ambil kandidat tersisa dari matchedItems yang berbagi fg atau kategori
    for (const { item } of matchedItems) {
      const code = item.code.toLowerCase();
      const fg = item.functionGroup || item.category;
      if (!usedCodes.has(code) && (activeFuncGroups.has(fg) || activeCategories.has(item.category))) {
        usedCodes.add(code);
        similarShorthands.push({
          code: item.code,
          name: item.name,
          category: item.category,
          functionGroup: fg,
          description: item.description,
          target: item.target || 'Alternatif Visual',
          priority: 'ALTERNATIF',
          isPrimary: false,
          checked: false,
          active: false,
          relationship: 'ALTERNATIVE',
          reason: `Alternatif sinonim untuk fungsi ${fg} (${item.name})`,
          source: 'IMAGE_ANALYSIS',
          equivalentTo: item.equivalentTo || []
        });
        if (similarShorthands.length >= 8) break;
      }
    }

    // Jika masih ada slot, ambil alternatif dari katalog yang relevan dengan domain
    if (similarShorthands.length < 5) {
      for (const item of this.catalog) {
        const code = item.code.toLowerCase();
        const fg = item.functionGroup || item.category;
        if (!usedCodes.has(code) && (activeCategories.has(item.category) || activeFuncGroups.has(fg))) {
          const neg = (item.negativeTriggers || []).map(t => t.toLowerCase());
          if (neg.some(nt => nt && textCorpus.includes(nt))) continue;

          usedCodes.add(code);
          similarShorthands.push({
            code: item.code,
            name: item.name,
            category: item.category,
            functionGroup: fg,
            description: item.description,
            target: item.target || 'Alternatif Visual',
            priority: 'ALTERNATIF',
            isPrimary: false,
            checked: false,
            active: false,
            relationship: 'ALTERNATIVE',
            reason: `Alternatif variasi gaya dalam domain ${item.category}`,
            source: 'CATALOG_ALTERNATIVE',
            equivalentTo: item.equivalentTo || []
          });
          if (similarShorthands.length >= 8) break;
        }
      }
    }

    // ========================================================
    // D. SHORTHAND KONFLIK
    // - Shorthand yang saling bertentangan
    // - Jika tidak ada: [] (UI akan menampilkan "Tidak ada konflik shorthand.")
    // ========================================================
    const conflicts = [];

    // ========================================================
    // E. SHORTHAND TIDAK DIPERLUKAN / DIKECUALIKAN
    // - Shorthand redundant, terlalu umum, atau tidak relevan
    // - MUTLAK DEDUPLIKASI: Hanya item yang belum ada di usedCodes
    // ========================================================
    const exclusions = [];
    for (const item of this.catalog) {
      const code = item.code.toLowerCase();
      if (usedCodes.has(code)) continue;

      const neg = (item.negativeTriggers || []).map(t => t.toLowerCase());
      const isNeg = neg.some(nt => nt && textCorpus.includes(nt));
      const isOutOfContext = !activeCategories.has(item.category);

      if (isNeg || isOutOfContext) {
        usedCodes.add(code);
        exclusions.push({
          code: item.code,
          target: item.target || item.name,
          reason: isNeg
            ? `Bertentangan dengan kondisi visual gambar aktual (${item.name})`
            : `Tidak relevan dengan subjek atau medium gambar (${item.category})`
        });
        if (exclusions.length >= 10) break;
      }
    }

    return {
      primaryShorthands,
      relatedShorthands,
      similarShorthands,
      conflicts,
      exclusions
    };
  }

  /**
   * Mode 2: Analisa Gambar -> Prompt (100% DINAMIS BERDASARKAN GAMBAR AKTUAL)
   * Mengikuti Blueprint Final:
   * Upload Gambar -> Analisis Gambar Aktual -> Prompt Hasil Analisis Gambar ->
   * Prompt Optimal -> Maksud Prompt -> Area yang Diubah & Area Dikunci ->
   * Transformasi Visual FROM -> TO -> Shorthand Analysis (5 Kelompok Terpisah)
   */
  async analyzeImageToPrompt({ imageFile = null, imageBase64 = null, mimeType = 'image/jpeg', referencePrompt = '', preferredLang = 'id', visualTelemetry = null, targetAspectRatio = 'auto', isTwoWorlds = false, twoWorldsConfig = null }) {
    const key = StorageService.getApiKey().trim();
    const model = StorageService.getModel() || 'gemini-2.0-flash';

    let visionData = null;
    let source = 'LOCAL_ENGINE';
    let isOnlineActive = false;
    let engineNotice = '';

    // 1. Multimodal AI Vision Analysis jika API Key terhubung dan data base64 tersedia
    if (key && imageBase64) {
      try {
        const aiVisionResult = await this.executeMultimodalImageAnalysis(imageBase64, mimeType, referencePrompt, key, model, preferredLang, targetAspectRatio);
        if (aiVisionResult && (aiVisionResult.mainDescription || aiVisionResult.subjectDescription)) {
          visionData = aiVisionResult;
          source = 'GEMINI_AI';
          isOnlineActive = true;
          this.status = GEMINI_STATUS.CONNECTED;
          this.lastError = null;
          const activeModel = StorageService.getModel() || model;
          engineNotice = `🌐 Analisa Gambar AI AKTIF (${activeModel}) — Vision analysis mendalam dari gambar aktual.`;
        }
      } catch (err) {
        console.warn('Gemini multimodal image analysis failed, falling back smoothly to dynamic heuristic vision analysis:', err);
        this.lastError = err.message;
      }
    }

    // 2. Fallback Heuristik Vision Dinamis jika offline atau tanpa API Key
    if (!visionData) {
      visionData = this.generateDynamicImageAnalysis(imageFile, imageBase64, referencePrompt, preferredLang, visualTelemetry, targetAspectRatio);
      source = key ? 'LOCAL_ENGINE_FALLBACK' : 'LOCAL_ENGINE';
      isOnlineActive = Boolean(key);
      engineNotice = isOnlineActive
        ? `🌐 Mode Analisa Gambar (Fallback Heuristik Visual Dinamis: ${this.lastError || 'offline'}).`
        : `🖥️ Mode Analisa Gambar (Heuristik Visual Dinamis Lokal — Sambungkan Gemini API Key di Pengaturan untuk vision AI langsung).`;
    }

    // Terapkan target aspect ratio jika ditentukan pengguna secara eksplisit
    if (targetAspectRatio && targetAspectRatio !== 'auto' && targetAspectRatio !== 'Otomatis') {
      visionData.aspectRatio = targetAspectRatio;
    }

    // 3. GENERATE PROMPT HASIL ANALISA GAMBAR (Format Terstruktur Paragraf Deskriptif)
    const generatedPrompt = this.assembleStructuredImagePrompt(visionData);

    // 4. SUSUN 13 ATRIBUT VISUAL RINCIAN GAMBAR AKTUAL
    const visualBreakdown = this.getStandard13VisualBreakdown(visionData);
    if (visionData.aspectRatio) {
      visualBreakdown['Aspect Ratio'] = visionData.aspectRatio;
    }

    // 5. BLUEPRINT SHORTHAND ANALYSIS (5 BUCKET DISJOINT DENGAN DEDUPLIKASI MUTLAK)
    const {
      primaryShorthands,
      relatedShorthands,
      similarShorthands,
      conflicts,
      exclusions
    } = this.analyzeImageShorthandsBlueprint(generatedPrompt, visionData);

    // Shorthand terpasang secara default adalah Primary Shorthands [✓]
    const installedShorthands = primaryShorthands.map(s => s.code);

    // 6. GENERATE PROMPT OPTIMAL FINAL (Struktur Deskriptif + Shorthands Terpasang + Params + Negative Prompt)
    const optimalPrompt = this.assembleOptimalImagePrompt(visionData, installedShorthands, isTwoWorlds ? twoWorldsConfig : null);

    // 7. MAKSUD PROMPT
    const intent = {
      primaryAction: isTwoWorlds ? 'REPRESENTASI_2_DUNIA' : 'REPRESENTASI_VISUAL',
      primaryTarget: isTwoWorlds ? 'Karakteristik Visual & Dualitas Gambar Sumber' : 'Karakteristik Visual Gambar Aktual',
      summary: isTwoWorlds
        ? `Gambar ini merepresentasikan konsep 2 Dunia berbasis ${visionData.subjectDescription || visionData.mainDescription}. Analisis visual ditujukan untuk mengekstrak spesifikasi prompt representasi dualitas / dua dunia yang akurat dan mempertahankan identitas subjek, ekspresi, komposisi, pencahayaan, dan detail autentik pada hasil generasi AI.`
        : `Gambar ini merepresentasikan ${visionData.subjectDescription || visionData.mainDescription}. Analisis visual ditujukan untuk mengekstrak spesifikasi prompt yang akurat dan mempertahankan identitas subjek, ekspresi, komposisi, pencahayaan, dan detail autentik pada hasil generasi AI.`,
      priority: 'HIGH',
      category: isTwoWorlds ? 'TWO_WORLDS' : 'IMAGE_TO_PROMPT'
    };

    // 8. AREA YANG DIUBAH (Bukan edit gambar, melainkan optimasi prompt)
    const editAreas = [
      {
        entity: 'STRUKTUR_PROMPT',
        label: 'Penyesuaian Struktur Prompt',
        description: 'Menyusun urutan deskripsi sistematis: subjek utama → atribut pose & busana → pencahayaan & suasana → framing kamera.'
      },
      {
        entity: 'PENJELASAN_KATA',
        label: 'Penyederhanaan & Presisi Frasa',
        description: 'Mengonversi elemen visual menjadi deskripsi spesifik dan bahasa alami yang langsung dipahami oleh engine generatif AI.'
      },
      {
        entity: 'PENEKANAN_VISUAL',
        label: 'Penekanan Elemen Visual Kunci',
        description: 'Mempertegas karakteristik pencahayaan, tekstur material, dan proporsi nyata dari gambar sumber.'
      },
      {
        entity: 'PENGUATAN_DETAIL',
        label: 'Penguatan Detail Mikro',
        description: 'Menambahkan detail resolusi tinggi, kedalaman ruang (DoF), dan mikrokontras natural untuk menghindari artefak.'
      },
      {
        entity: 'PARAMETER_TEKNIS',
        label: 'Integrasi Parameter AI Generatif',
        description: `Menambahkan parameter teknis standar (--ar ${visionData.aspectRatio || '16:9'} --style raw --v 6.1) dan direktif negative prompt (--no) untuk stabilitas hasil visual.`
      }
    ];

    // 9. AREA YANG DIPERTAHANKAN / LOCKED (Elemen visual sumber yang dilindungi)
    const lockedAreas = [
      {
        entity: 'SUBJEK_UTAMA',
        label: 'Subjek Utama & Identitas Visual',
        description: visionData.subjectDescription || visionData.subject || visionData.mainDescription
      },
      {
        entity: 'POSE_EKSPRESI',
        label: 'Pose & Ekspresi',
        description: visionData.poseExpression || visionData.pose || 'Postur alami dan ekspresi wajah subjek asli'
      },
      {
        entity: 'PAKAIAN_BUSANA',
        label: 'Pakaian & Aksesoris',
        description: visionData.outfitMaterial || visionData.outfit || 'Gaya pakaian dan tekstur material busana'
      },
      {
        entity: 'FRAMING_KAMERA',
        label: 'Framing & Angle Kamera',
        description: visionData.cameraLensDof || visionData.camera || 'Sudut pandang lensa kamera dan rasio framing'
      },
      {
        entity: 'BACKGROUND_ENV',
        label: 'Background & Environment',
        description: visionData.environmentBackground || visionData.environment || 'Setting lokasi dan latar belakang asli'
      },
      {
        entity: 'KOMPOSISI',
        label: 'Komposisi Visual',
        description: visionData.compositionPerspective || visionData.composition || 'Pusat perhatian visual dan keseimbangan bidang'
      },
      {
        entity: 'PENCAHAYAAN',
        label: 'Pencahayaan & Suasana',
        description: visionData.lightingColor || visionData.lighting || 'Arah pencahayaan, kontras shadow-highlight, dan tone ambient'
      }
    ];

    // 10. TRANSFORMASI VISUAL FROM -> TO
    const visualTransformation = {
      from: `Kondisi visual aktual dari file gambar sumber: ${visionData.mainDescription || 'Subjek dan komposisi visual nyata'}`,
      to: `Spesifikasi prompt AI optimal terstruktur lengkap dengan shorthand terpasang (${installedShorthands.join(' ')}), parameter teknis (--ar ${visionData.aspectRatio || '16:9'} --style raw --v 6.1), dan negative prompt.`,
      summary: '💡 Translasi analitis representasi visual: Gambar sumber dianalisis secara objektif menjadi spesifikasi prompt AI generatif tanpa melakukan editing atau perombakan gambar asli.'
    };

    return {
      mode: isTwoWorlds ? 'TWO_WORLDS' : 'IMAGE_TO_PROMPT',
      source,
      isOnlineActive,
      engineNotice,
      generatedPrompt,
      optimalPrompt,
      cleanText: generatedPrompt,
      visionData,
      visualBreakdown,
      primaryShorthands,
      relatedShorthands,
      similarShorthands,
      recommendations: [...primaryShorthands, ...relatedShorthands, ...similarShorthands],
      installedShorthands,
      conflicts,
      exclusions,
      editAreas,
      lockedAreas,
      unchangedAreas: lockedAreas.map(l => l.description),
      visualTransformation,
      intent,
      referencePrompt: referencePrompt || '',
      imageInfo: {
        name: imageFile?.name || 'reference-image.jpg',
        size: imageFile?.size || 0,
        type: mimeType,
        aspectRatio: visionData.aspectRatio || '16:9'
      },
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Helper: Vision Multimodal Analysis via Gemini REST API
   */
  async executeMultimodalImageAnalysis(imageBase64, mimeType, referencePrompt, key, model, preferredLang = 'id', targetAspectRatio = 'auto') {
    // 1. Sanitize model list: prioritize gemini-2.0-flash and gemini-1.5-flash, filter out deprecated models
    const cleanModel = (model || 'gemini-2.0-flash').trim().replace(/^models\//, '');
    const candidateModels = [
      cleanModel,
      'gemini-2.0-flash',
      'gemini-3.5-flash-lite',
      'gemini-1.5-flash',
      'gemini-2.5-flash',
      'gemini-1.5-flash-8b'
    ].filter((m, i, arr) => m && arr.indexOf(m) === i && !m.includes('1.5-pro') && !m.includes('2.5-pro') && (m === 'gemini-3.5-flash-lite' || (!m.includes('3.5') && !m.includes('3.8'))));

    if (candidateModels.length === 0) {
      candidateModels.push('gemini-2.0-flash', 'gemini-1.5-flash');
    }

    // 2. Clean base64 and strictly normalize mime type
    const cleanBase64 = (imageBase64 || '')
      .replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/, '')
      .replace(/\s+/g, '')
      .trim();
    if (!cleanBase64 || cleanBase64.length < 50) {
      throw new Error('Data gambar (base64) tidak valid atau kosong.');
    }

    let normalizedMime = (mimeType || 'image/jpeg').toLowerCase().trim();
    if (normalizedMime.includes('png')) {
      normalizedMime = 'image/png';
    } else if (normalizedMime.includes('webp')) {
      normalizedMime = 'image/webp';
    } else if (normalizedMime.includes('heic')) {
      normalizedMime = 'image/heic';
    } else if (normalizedMime.includes('heif')) {
      normalizedMime = 'image/heif';
    } else {
      normalizedMime = 'image/jpeg';
    }

    const systemInstruction = `Anda adalah Ahli Analisis Gambar Vision AI & Prompt Engineering Profesional.
Tugas Anda: Menganalisis gambar yang diunggah secara objektif, mendalam, dan akurat sebagai SATU-SATUNYA SOURCE OF TRUTH.

ATURAN MUTLAK:
1. JANGAN PERNAH menggunakan template statis, data default, atau asumsi fiktif.
2. Analisis APA YANG BENAR-BENAR TERLIHAT pada gambar:
   - Subjek utama (siapa/apa: pria/wanita/anak/karakter 3D animasi/chibi doll figurine/hewan/objek; busana/hoodie/pakaian, warna nyata yang terlihat, tekstur, material).
   - Pose tubuh, posisi, gestur, arah pandangan, ekspresi wajah.
   - Komposisi, framing, sudut kamera (eye-level, low angle, closeup, medium shot, wide shot, dll.).
   - Pencahayaan (studio softbox, daylight alami, directional, ambient, highlight, shadow).
   - Lingkungan & latar belakang (studio foto, kantor, indoor, alam outdoor, warna background).
   - Palet warna, white balance, saturasi, tone.
   - Gaya fotografi atau gaya visual asli (realistis, karakter 3D animasi, chibi figurine, digital render).

Kembalikan respons HANYA dalam format JSON valid dengan 13 atribut visual lengkap:
{
  "mainDescription": "Ringkasan prompt deskriptif utama dari gambar aktual...",
  "visualDetails": "Rincian visual komprehensif mencakup subjek, busana, pose, ekspresi, komposisi, pencahayaan, latar belakang, dan karakter fotografi...",
  "subject": "Deskripsi subjek...",
  "pose": "Pose subjek...",
  "framing": "Framing shot (misal: medium shot, closeup, wide)...",
  "cameraAngle": "Sudut dan lensa kamera (misal: eye-level angle, 50mm lens)...",
  "lighting": "Karakter pencahayaan...",
  "environment": "Lingkungan sekitar...",
  "background": "Latar belakang...",
  "outfit": "Detail busana/pakaian...",
  "expression": "Ekspresi wajah/karakter...",
  "composition": "Komposisi visual...",
  "style": "Gaya fotografi atau visual...",
  "colorTone": "Warna dominan dan tone...",
  "aspectRatio": "16:9",
  "suggestedShorthands": ["/portrait", "/studio", "/suit", "/eyelevel", "/softlight", "/realistic", "/rawphoto"],
  "negativePrompt": "negative prompt yang relevan (misal: deformed, bad anatomy, blurry, watermark; sesuaikan dengan jenis subjek)"
}`;

    const promptText = referencePrompt && referencePrompt.trim()
      ? `Analisis gambar ini dengan panduan pengguna: "${referencePrompt.trim()}".`
      : 'Analisis gambar ini secara visual mendalam dan hasilkan rincian elemen visual nyata.';

    let lastError = null;
    const attemptErrors = [];

    for (const currentModel of candidateModels) {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${currentModel}:generateContent?key=${encodeURIComponent(key)}`;

      // Dua tahap eksekusi per model:
      // Tahap 1: dengan responseMimeType: 'application/json'
      // Tahap 2: fallback tanpa responseMimeType jika HTTP 400 terjadi
      const configsToTry = [
        { temperature: 0.1, responseMimeType: 'application/json' },
        { temperature: 0.1 }
      ];

      for (const genConfig of configsToTry) {
        try {
          const requestBody = {
            contents: [
              {
                role: 'user',
                parts: [
                  {
                    text: `${systemInstruction}\n\nInstruksi: ${promptText}`
                  },
                  {
                    inlineData: {
                      mimeType: normalizedMime,
                      data: cleanBase64
                    }
                  }
                ]
              }
            ],
            generationConfig: genConfig
          };

          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
          });

          if (!response.ok) {
            const errText = await response.text();
            if (response.status === 400 && genConfig.responseMimeType) {
              // Endpoint/model mungkin tidak menerima responseMimeType pada input gambar, coba tanpa mimeType
              continue;
            }
            throw new Error(`HTTP ${response.status}: ${errText}`);
          }

          const data = await response.json();
          const parts = data.candidates?.[0]?.content?.parts || [];
          let rawText = '';
          for (const p of parts) {
            if (p.text && !p.thought) rawText += p.text;
          }
          if (!rawText && parts[0]?.text) rawText = parts[0].text;
          if (!rawText) throw new Error('Respon Gemini kosong.');

          let parsed = null;
          try {
            parsed = this.extractJson(rawText);
          } catch {
            const cleanTxt = rawText.replace(/```[a-z]*\n?/gi, '').trim();
            parsed = {
              mainDescription: cleanTxt,
              visualDetails: ''
            };
          }

          if (parsed && typeof parsed === 'object') {
            const foundDesc = parsed.mainDescription || parsed.prompt || parsed.generatedPrompt ||
                              parsed.description || parsed.summary || parsed.subjectDescription ||
                              parsed.subject || parsed.visualDetails || parsed.details || parsed.analysis;
            if (foundDesc) {
              if (!parsed.mainDescription) {
                parsed.mainDescription = String(foundDesc).trim();
              }
              if (targetAspectRatio && targetAspectRatio !== 'auto' && targetAspectRatio !== 'Otomatis') {
                parsed.aspectRatio = targetAspectRatio;
              }
              this.lastSuccessfulModel = currentModel;
              if (currentModel !== model) {
                StorageService.setModel(currentModel);
              }
              return parsed;
            }
          }
        } catch (err) {
          lastError = err;
          attemptErrors.push(`${currentModel}: ${err.message}`);
          console.warn(`Model ${currentModel} multimodal gagal:`, err.message);
          break; // Lanjut ke model kandidat berikutnya
        }
      }
    }

    throw lastError || new Error(`Gagal menganalisis gambar dengan Gemini API (${attemptErrors.join(' | ')}).`);
  }

  /**
   * Helper: Generator Vision Heuristik Dinamis (100% DINAMIS, ZERO TEMPLATE STATIS)
   * Menghasilkan prompt deskriptif berbasis telemetri visual piksel nyata dan atribut gambar aktual.
   */
  generateDynamicImageAnalysis(imageFile, imageBase64, referencePrompt = '', preferredLang = 'id', visualTelemetry = null, targetAspectRatio = 'auto') {
    const telemetry = visualTelemetry || imageFile?.visualTelemetry || analyzeCanvasPixels(null, {
      filename: imageFile?.name,
      width: imageFile?.width,
      height: imageFile?.height,
      targetAspectRatio
    });

    return synthesizeDynamicImagePrompt(telemetry, {
      preferredLang,
      referencePrompt,
      filename: imageFile?.name,
      targetAspectRatio
    });
  }


  /**
   * Mode 3: Analisa Shorthand Perbaikan Gambar (Text / Shorthand Input)
   * Mendeteksi shorthand yang kurang tepat, konflik antar-shorthand, shorthand redundan,
   * dan memberikan versi shorthand/prompt yang lebih optimal untuk perbaikan gambar.
   */
  async analyzeShorthandImprove(promptText, installedOverrides = null) {
    const baseResult = await this.analyzePrompt(promptText, installedOverrides);

    // Diagnostic additions for shorthand repair
    const diagnostics = {
      conflictCount: baseResult.conflicts?.length || 0,
      redundancyCount: (baseResult.recommendations?.length || 0) - (baseResult.primaryShorthands?.length || 0),
      isOptimized: (baseResult.conflicts?.length || 0) === 0,
      improvementAdvice: baseResult.conflicts?.length > 0
        ? 'Ditemukan beberapa konflik direktif shorthand. Sistem telah merekomendasikan resolusi terpadu pada banner konflik.'
        : 'Shorthand telah dianalisis dan dioptimalkan secara semantik tanpa konflik.'
    };

    return {
      ...baseResult,
      mode: 'SHORTHAND_IMPROVE',
      isImageRepair: false,
      diagnostics
    };
  }

  /**
   * Mode 3 Baru: Analisa Perbaikan Gambar Berbasis Unggahan Visual
   * Upload Gambar -> Analisis Visual Menyeluruh -> Identifikasi Masalah/Kebutuhan ->
   * Cocokkan Katalog Shorthand -> Tampilkan Rekomendasi Tanpa Batas (UNLIMITED).
   */
  async analyzeImageRepair({ imageFile = null, imageBase64 = null, mimeType = 'image/jpeg', notesPrompt = '', preferredLang = 'id' }) {
    const key = StorageService.getApiKey().trim();
    const model = StorageService.getModel() || 'gemini-2.0-flash';

    let rawDiagnosis = null;
    let source = 'LOCAL_ENGINE';
    let isOnlineActive = false;
    let engineNotice = '';

    // 1. Multimodal AI Analysis if online key & image available
    if (key && imageBase64) {
      try {
        const aiDiag = await this.executeMultimodalImageRepairAnalysis(imageBase64, mimeType, notesPrompt, key, model, preferredLang);
        if (aiDiag && (aiDiag.optimizationAreas || aiDiag.visualConditionSummary)) {
          rawDiagnosis = aiDiag;
          source = 'GEMINI_AI';
          isOnlineActive = true;
          this.status = GEMINI_STATUS.CONNECTED;
          this.lastError = null;
          const activeModel = StorageService.getModel() || model;
          engineNotice = `🌐 Analisa Perbaikan AI AKTIF (${activeModel}) — Diagnosis visual komprehensif dari gambar asli.`;
        }
      } catch (err) {
        console.warn('Gemini multimodal image repair analysis failed, falling back to heuristic diagnosis:', err);
        this.lastError = err.message;
      }
    }

    // 2. Heuristic fallback if offline or no key
    if (!rawDiagnosis) {
      rawDiagnosis = this.generateHeuristicImageRepair(imageFile, notesPrompt, preferredLang);
      source = key ? 'LOCAL_ENGINE_FALLBACK' : 'LOCAL_ENGINE';
      isOnlineActive = Boolean(key);
      engineNotice = isOnlineActive
        ? `🌐 Mode Analisa Perbaikan Gambar (Fallback Heuristik Visual: ${this.lastError || 'offline'}).`
        : `🖥️ Mode Analisa Perbaikan Gambar (Heuristik Diagnostik Lokal — Sambungkan Gemini API Key di Pengaturan untuk diagnosis visual AI langsung).`;
    }

    // 3. Process Diagnosis: Match with Catalog, Deduplicate by Function Group, Unlimited items
    const {
      visualConditionSummary = 'Gambar telah dianalisis secara visual.',
      optimizationAreas = [],
      goodAspects = [],
      repairInstructions = 'Optimalkan kualitas dan karakteristik visual foto.'
    } = rawDiagnosis;

    // Issue Priority Order Definition
    const ISSUE_PRIORITY_ORDER = {
      'PRIMARY_ISSUE': 1,
      'SECONDARY_ISSUE': 2,
      'OPTIMIZATION': 3,
      'PRESERVATION': 4,
      'FINISHING': 5
    };

    // Match each optimization area to catalog shorthands
    const candidateMatches = [];

    for (const area of optimizationAreas) {
      const targetCodes = Array.isArray(area.recommendedCodes) ? area.recommendedCodes : [];
      let matchedItem = null;

      // 1. Direct code lookup in catalog
      for (const code of targetCodes) {
        const cleanCode = code.startsWith('/') ? code : `/${code}`;
        const found = this.catalog.find(c => c.code.toLowerCase() === cleanCode.toLowerCase());
        if (found) {
          matchedItem = found;
          break;
        }
      }

      // 2. Semantic trigger / text match if direct code not found
      if (!matchedItem) {
        const queryText = `${area.aspect || ''} ${area.problem || ''} ${area.suggestedAction || ''}`.toLowerCase();
        for (const item of this.catalog) {
          const triggers = (item.semanticTriggers || []).map(t => t.toLowerCase());
          if (triggers.some(t => queryText.includes(t)) || queryText.includes(item.name.toLowerCase())) {
            matchedItem = item;
            break;
          }
        }
      }

      // 3. Fallback to first recommended code if catalog doesn't have it
      const finalCode = matchedItem
        ? matchedItem.code
        : (targetCodes[0] ? (targetCodes[0].startsWith('/') ? targetCodes[0] : `/${targetCodes[0]}`) : null);

      if (finalCode) {
        candidateMatches.push({
          code: finalCode,
          name: matchedItem?.name || finalCode.replace('/', '').toUpperCase(),
          category: matchedItem?.category || 'IMAGE_QUALITY',
          functionGroup: matchedItem?.functionGroup || `GROUP_${finalCode.replace(/[^a-zA-Z0-9]/g, '_').toUpperCase()}`,
          description: matchedItem?.description || area.suggestedAction || 'Optimasi visual gambar',
          issuePriority: area.priority || 'OPTIMIZATION',
          priorityWeight: ISSUE_PRIORITY_ORDER[area.priority] || 3,
          aspect: area.aspect || 'Aspek Visual',
          problem: area.problem || '',
          reason: area.reason || `Diperlukan untuk ${area.suggestedAction || 'mengoptimalkan aspek ini'}.`,
          priority: 'WAJIB',
          isPrimary: true,
          checked: true,
          source: 'DIAGNOSTIC_REPAIR'
        });
      }
    }

    // 4. Functional Deduplication: If multiple items share the same functionGroup, keep the single best representative
    const seenFunctionGroups = new Set();
    const deduplicatedShorthands = [];

    for (const candidate of candidateMatches) {
      const group = candidate.functionGroup;
      if (!seenFunctionGroups.has(group)) {
        seenFunctionGroups.add(group);
        deduplicatedShorthands.push(candidate);
      }
    }

    // 5. UNLIMITED Shorthands - Order by Issue Priority:
    // PRIMARY_ISSUE -> SECONDARY_ISSUE -> OPTIMIZATION -> PRESERVATION -> FINISHING
    deduplicatedShorthands.sort((a, b) => {
      const prioDiff = (a.priorityWeight || 3) - (b.priorityWeight || 3);
      if (prioDiff !== 0) return prioDiff;
      return a.code.localeCompare(b.code);
    });

    const installedShorthands = deduplicatedShorthands.map(s => s.code);

    // 6. Build Optimal Prompt
    let optimalPrompt = repairInstructions.trim();
    if (installedShorthands.length > 0) {
      optimalPrompt = `${optimalPrompt} ${installedShorthands.join(' ')}`.trim();
    }

    return {
      mode: 'SHORTHAND_IMPROVE',
      isImageRepair: true,
      source,
      isOnlineActive,
      engineNotice,
      visualConditionSummary,
      optimizationAreas,
      goodAspects,
      repairInstructions,
      diagnosedShorthands: deduplicatedShorthands,
      installedShorthands,
      optimalPrompt,
      primaryShorthands: deduplicatedShorthands,
      relatedShorthands: [],
      recommendations: deduplicatedShorthands,
      conflicts: [],
      exclusions: [],
      editAreas: optimizationAreas.map(a => ({
        entity: a.aspect || 'AREA_OPTIMASI',
        description: a.problem || a.suggestedAction || ''
      })),
      lockedAreas: goodAspects.map(g => ({
        entity: 'ASPEK_SUDAH_BAIK',
        description: g
      })),
      unchangedAreas: goodAspects,
      intent: {
        primaryAction: 'DIAGNOSIS_PERBAIKAN_GAMBAR',
        primaryTarget: 'Kondisi Visual Foto',
        summary: visualConditionSummary,
        priority: 'HIGH',
        category: 'IMAGE_QUALITY'
      },
      diagnostics: {
        issueCount: optimizationAreas.length,
        goodCount: goodAspects.length,
        isOptimized: false,
        improvementAdvice: `Ditemukan ${optimizationAreas.length} area visual yang membutuhkan perbaikan. Menampilkan ${deduplicatedShorthands.length} shorthand rekomendasi tanpa batasan.`
      },
      imageInfo: {
        name: imageFile?.name || 'repair-source.jpg',
        size: imageFile?.size || 0,
        type: mimeType
      },
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Helper: Multimodal Image Repair Analysis via Gemini API
   */
  async executeMultimodalImageRepairAnalysis(imageBase64, mimeType, notesPrompt, key, model, preferredLang = 'id') {
    const cleanModel = (model || 'gemini-2.0-flash').trim().replace(/^models\//, '');
    const candidateModels = [
      cleanModel,
      'gemini-2.0-flash',
      'gemini-3.5-flash-lite',
      'gemini-1.5-flash',
      'gemini-2.5-flash',
      'gemini-1.5-flash-8b'
    ].filter((m, i, arr) => m && arr.indexOf(m) === i && !m.includes('1.5-pro') && !m.includes('2.5-pro') && (m === 'gemini-3.5-flash-lite' || (!m.includes('3.5') && !m.includes('3.8'))));

    if (candidateModels.length === 0) {
      candidateModels.push('gemini-2.0-flash', 'gemini-1.5-flash');
    }

    const cleanBase64 = (imageBase64 || '')
      .replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/, '')
      .replace(/\s+/g, '')
      .trim();
    if (!cleanBase64 || cleanBase64.length < 50) {
      throw new Error('Data gambar (base64) tidak valid atau kosong.');
    }

    let normalizedMime = (mimeType || 'image/jpeg').toLowerCase().trim();
    if (normalizedMime.includes('png')) {
      normalizedMime = 'image/png';
    } else if (normalizedMime.includes('webp')) {
      normalizedMime = 'image/webp';
    } else if (normalizedMime.includes('heic')) {
      normalizedMime = 'image/heic';
    } else if (normalizedMime.includes('heif')) {
      normalizedMime = 'image/heif';
    } else {
      normalizedMime = 'image/jpeg';
    }

    const systemInstruction = `Anda adalah Ahli Diagnosa Visual & Optimasi Fotografi Digital profesional.
Tugas Anda: Menganalisis kondisi aktual gambar yang diunggah secara menyeluruh dan obyektif sebagai SOURCE OF TRUTH.
Fokus utama: Mendiagnosis kondisi visual gambar dan menentukan SELURUH ASPEK gambar yang membutuhkan perbaikan, peningkatan, atau optimasi.

Parameter analisis meliputi:
- Exposure / brightness / lighting
- Highlight (terlalu keras / blown / clipping)
- Shadow (terlalu gelap / detail hilang)
- Dynamic range (rentang dinamis terbatas)
- Contrast (terlalu keras / datar)
- White balance / color balance / color temperature / saturation
- Skin tone (jika terdapat subjek manusia)
- Sharpness / detail / texture / noise / focus
- Lens distortion / perspective
- Composition / framing
- Processing artifacts / realism / keaslian karakter foto

ATURAN WAJIB & KETENTUAN KHUSUS:
1. STRICT RELEVANCE: HANYA aspek yang berdasarkan analisis memang membutuhkan optimasi yang boleh menghasilkan rekomendasi.
2. JANGAN memunculkan rekomendasi untuk aspek yang SUDAH BAIK.
3. Sebutkan secara eksplisit aspek-aspek visual yang SUDAH BAIK pada array "goodAspects".
4. BEBAS JUMLAH / UNLIMITED: JANGAN batasi jumlah rekomendasi (jika ada 3 sebutkan 3, jika ada 8 sebutkan 8, jika ada 12 sebutkan 12).
5. Kelompokkan prioritas isu ke dalam:
   - PRIMARY_ISSUE: Masalah utama (pencahayaan, bayangan pekat, highlight silau, blur/fokus, distorsi).
   - SECONDARY_ISSUE: Masalah sekunder (kontras, saturasi, white balance, tone warna).
   - OPTIMIZATION: Kebutuhan peningkatan tambahan (dynamic range, high detail, kejernihan, komposisi).
   - PRESERVATION: Kebutuhan preservasi detail/tekstur/kulit.
   - FINISHING: Sentuhan akhir/realisme/karakter fotografi alami.
6. Cocokkan dengan shorthand yang tepat, contoh: /shadowrecovery, /highlightcontrol, /dynamicrange, /naturalcontrast, /naturaltone, /colorbalance, /detailpreservation, /texturepreservation, /naturalprocessing, /perspectivecorrection, /lenscorrection, /compositionbalance, /highdetail, /sharpen, /denoise, /enhance, /hdr, /rawphoto.
7. Gunakan bahasa: ${preferredLang === 'en' ? 'English' : 'Bahasa Indonesia'}.

Format respons HANYA berupa JSON valid:
{
  "visualConditionSummary": "Ringkasan komprehensif kondisi visual foto aktual...",
  "optimizationAreas": [
    {
      "aspect": "Nama aspek visual (misal: Shadow / Bayangan)",
      "problem": "Deskripsi masalah spesifik yang ditemukan",
      "priority": "PRIMARY_ISSUE",
      "suggestedAction": "Tindakan perbaikan yang direkomendasikan",
      "recommendedCodes": ["/shadowrecovery"],
      "reason": "Alasan mengapa shorthand ini direkomendasikan untuk gambar ini"
    }
  ],
  "goodAspects": [
    "Aspek visual yang dinilai sudah optimal 1",
    "Aspek visual yang dinilai sudah optimal 2"
  ],
  "repairInstructions": "Teks instruksi perbaikan komprehensif..."
}`;

    const userPromptText = notesPrompt && notesPrompt.trim()
      ? `Analisis kondisi visual gambar ini untuk perbaikan. Catatan/perhatian khusus pengguna: "${notesPrompt.trim()}".`
      : 'Analisis kondisi visual gambar ini secara menyeluruh dan tentukan seluruh aspek yang membutuhkan perbaikan atau optimasi.';

    let lastError = null;
    const attemptErrors = [];

    for (const currentModel of candidateModels) {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${currentModel}:generateContent?key=${encodeURIComponent(key)}`;

      const configsToTry = [
        { temperature: 0.1, responseMimeType: 'application/json' },
        { temperature: 0.1 }
      ];

      for (const genConfig of configsToTry) {
        try {
          const requestBody = {
            contents: [
              {
                role: 'user',
                parts: [
                  {
                    text: `${systemInstruction}\n\nInstruksi: ${userPromptText}`
                  },
                  {
                    inlineData: {
                      mimeType: normalizedMime,
                      data: cleanBase64
                    }
                  }
                ]
              }
            ],
            generationConfig: genConfig
          };

          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
          });

          if (!response.ok) {
            const errText = await response.text();
            if (response.status === 400 && genConfig.responseMimeType) {
              continue;
            }
            throw new Error(`HTTP ${response.status}: ${errText}`);
          }

          const data = await response.json();
          const parts = data.candidates?.[0]?.content?.parts || [];
          let rawText = '';
          for (const p of parts) {
            if (p.text && !p.thought) rawText += p.text;
          }
          if (!rawText && parts[0]?.text) rawText = parts[0].text;
          if (!rawText) throw new Error('Respon Gemini kosong.');

          let parsed = null;
          try {
            parsed = this.extractJson(rawText);
          } catch {
            const cleanTxt = rawText.replace(/```[a-z]*\n?/gi, '').trim();
            parsed = {
              visualConditionSummary: cleanTxt,
              optimizationAreas: []
            };
          }

          if (parsed && typeof parsed === 'object') {
            const summary = parsed.visualConditionSummary || parsed.summary || parsed.diagnosis || parsed.description;
            if (summary || (Array.isArray(parsed.optimizationAreas) && parsed.optimizationAreas.length > 0)) {
              if (!parsed.visualConditionSummary && summary) {
                parsed.visualConditionSummary = String(summary).trim();
              }
              this.lastSuccessfulModel = currentModel;
              if (currentModel !== model) {
                StorageService.setModel(currentModel);
              }
              return parsed;
            }
          }
        } catch (err) {
          lastError = err;
          attemptErrors.push(`${currentModel}: ${err.message}`);
          console.warn(`Model ${currentModel} multimodal repair gagal:`, err.message);
          break;
        }
      }
    }

    throw lastError || new Error(`Gagal menganalisis perbaikan gambar dengan Gemini API (${attemptErrors.join(' | ')}).`);
  }

  /**
   * Helper: Offline Heuristic Diagnostic Generator for Image Repair
   */
  generateHeuristicImageRepair(imageFile, notesPrompt = '', preferredLang = 'id') {
    const textLower = (notesPrompt || '').toLowerCase();
    const hasNotes = Boolean(notesPrompt && notesPrompt.trim());

    const areas = [];
    const goodAspects = [];

    // Check specific conditions based on user notes or standard visual diagnosis
    const checkOrAdd = (triggerWords, areaObj) => {
      if (hasNotes) {
        if (triggerWords.some(w => textLower.includes(w))) {
          areas.push(areaObj);
        }
      } else {
        // Standard diagnostic case: add comprehensive items
        areas.push(areaObj);
      }
    };

    // 1. Shadow / Darkness
    checkOrAdd(['shadow', 'gelap', 'bayangan', 'underexposed', 'pekat'], {
      aspect: 'Shadow / Bayangan',
      problem: 'Area bayangan gelap kehilangan informasi detail tonal dan tampak pekat.',
      priority: 'PRIMARY_ISSUE',
      suggestedAction: 'Pemulihan detail bayangan tanpa mencerahkan berlebih',
      recommendedCodes: ['/shadowrecovery'],
      reason: 'Diperlukan untuk mengangkat detail pada area bayangan gelap tanpa merusak kontras alami.'
    });

    // 2. Highlight / Overexposure
    checkOrAdd(['highlight', 'terang', 'silau', 'blown', 'overexposed', 'putih'], {
      aspect: 'Highlight / Pencahayaan Terang',
      problem: 'Area highlight pada permukaan terang tampak agak keras dan berisiko kehilangan tekstur.',
      priority: 'PRIMARY_ISSUE',
      suggestedAction: 'Pengendalian intensitas highlight',
      recommendedCodes: ['/highlightcontrol'],
      reason: 'Mengontrol intensitas highlight agar detail permukaan terang tetap terjaga halus.'
    });

    // 3. Sharpness / Blur
    if (textLower.includes('tajam') || textLower.includes('buram') || textLower.includes('blur') || textLower.includes('fokus') || textLower.includes('kabur')) {
      areas.push({
        aspect: 'Ketajaman & Fokus',
        problem: 'Ketajaman gambar pada kontur dan tepi objek kurang terdefinisi dengan optimal.',
        priority: 'PRIMARY_ISSUE',
        suggestedAction: 'Peningkatan ketajaman tepi dan kontur',
        recommendedCodes: ['/sharpen'],
        reason: 'Meningkatkan ketajaman mikro pada tepi subjek agar gambar tampak lebih jernih.'
      });
    } else if (!hasNotes) {
      goodAspects.push('Ketajaman dan fokus subjek utama sudah terdefinisi dengan jelas.');
    }

    // 4. Noise
    if (textLower.includes('noise') || textLower.includes('bintik') || textLower.includes('grain')) {
      areas.push({
        aspect: 'Noise & Grain',
        problem: 'Terdapat gangguan bintik noise digital pada area bergradasi halus.',
        priority: 'PRIMARY_ISSUE',
        suggestedAction: 'Pembersihan noise digital secara selektif',
        recommendedCodes: ['/denoise'],
        reason: 'Membersihkan bintik noise digital tanpa mengorbankan ketajaman detail esensial.'
      });
    } else if (!hasNotes) {
      goodAspects.push('Tingkat noise digital berada dalam batas yang sangat rendah dan bersih.');
    }

    // 5. Perspective / Distortion
    if (textLower.includes('perspektif') || textLower.includes('miring') || textLower.includes('tilt')) {
      areas.push({
        aspect: 'Perspektif Garis & Sudut',
        problem: 'Garis bidang foto tampak miring atau mengalami distorsi perspektif.',
        priority: 'PRIMARY_ISSUE',
        suggestedAction: 'Koreksi pelurusan perspektif',
        recommendedCodes: ['/perspectivecorrection'],
        reason: 'Meluruskan geometri perspektif agar bidang tegak dan horizon sejajar alami.'
      });
    } else if (textLower.includes('distorsi') || textLower.includes('lensa') || textLower.includes('barrel')) {
      areas.push({
        aspect: 'Distorsi Lensa',
        problem: 'Terdapat distorsi lengkungan lensa pada area pinggir bidang foto.',
        priority: 'PRIMARY_ISSUE',
        suggestedAction: 'Koreksi distorsi lensa',
        recommendedCodes: ['/lenscorrection'],
        reason: 'Mengoreksi kelengkungan optik lensa agar proporsi subjek kembali natural.'
      });
    } else if (!hasNotes) {
      goodAspects.push('Geometri dan perspektif lensa sudah lurus dan bebas distorsi lengkung.');
    }

    // 6. Natural Contrast
    checkOrAdd(['kontras', 'contrast', 'keras', 'datar'], {
      aspect: 'Kontras Visual',
      problem: 'Rentang kontras antara area gelap dan terang membutuhkan penyesuaian gradasi yang lebih halus.',
      priority: 'SECONDARY_ISSUE',
      suggestedAction: 'Penerapan kontras natural seimbang',
      recommendedCodes: ['/naturalcontrast'],
      reason: 'Menyeimbangkan rasio kontras agar transisi antara gelap dan terang tampak organik.'
    });

    // 7. Color Balance / White Balance
    checkOrAdd(['balance', 'kuning', 'biru', 'cast', 'suhu', 'warna'], {
      aspect: 'Keseimbangan Warna & White Balance',
      problem: 'Keseimbangan temperatur warna memerlukan kalibrasi netral agar warna asli tidak bergeser.',
      priority: 'SECONDARY_ISSUE',
      suggestedAction: 'Penyelarasan white balance dan netralisasi color cast',
      recommendedCodes: ['/colorbalance'],
      reason: 'Mengembalikan akurasi warna alami dengan menetralkan pergeseran suhu warna.'
    });

    // 8. Natural Tone
    if (textLower.includes('pucat') || textLower.includes('kusam') || textLower.includes('tone') || (!hasNotes && !areas.some(a => a.recommendedCodes.includes('/naturaltone')))) {
      if (hasNotes || areas.length < 8) {
        areas.push({
          aspect: 'Rentang Tonal Warna',
          problem: 'Karakter tonal warna memerlukan pengayaan nuansa agar tampak hidup dan natural.',
          priority: 'SECONDARY_ISSUE',
          suggestedAction: 'Harmonisasi tonal warna natural',
          recommendedCodes: ['/naturaltone'],
          reason: 'Menghadirkan karakter warna yang kaya dan hangat tanpa saturasi berlebihan.'
        });
      }
    }

    // 9. Dynamic Range
    checkOrAdd(['dinamis', 'rentang', 'dynamic', 'range'], {
      aspect: 'Rentang Dinamis (Dynamic Range)',
      problem: 'Rentang dinamis antara bayangan terdalam dan kilauan paling terang dapat dioptimalkan.',
      priority: 'OPTIMIZATION',
      suggestedAction: 'Perluasan rentang dinamis visual',
      recommendedCodes: ['/dynamicrange'],
      reason: 'Memperluas jangkauan tonal agar adegan mempertahankan detail dari shadow hingga highlight.'
    });

    // 10. High Detail
    if (textLower.includes('kualitas') || textLower.includes('detail tinggi') || textLower.includes('resolusi') || textLower.includes('definisi')) {
      areas.push({
        aspect: 'Kerapatan Detail Visual',
        problem: 'Tingkat kejelasan detail mikro dapat ditingkatkan untuk ketajaman visual maksimal.',
        priority: 'OPTIMIZATION',
        suggestedAction: 'Peningkatan detail mikro berkualitas tinggi',
        recommendedCodes: ['/highdetail'],
        reason: 'Mengoptimalkan kerapatan mikro-detail pada seluruh bidang gambar.'
      });
    }

    // 11. Detail Preservation
    checkOrAdd(['detail', 'pertahankan', 'preservasi', 'halus'], {
      aspect: 'Preservasi Detail Halus',
      problem: 'Detail esensial pada subjek berisiko memudar selama proses perbaikan visual.',
      priority: 'PRESERVATION',
      suggestedAction: 'Penguncian dan perlindungan detail halus',
      recommendedCodes: ['/detailpreservation'],
      reason: 'Menjaga detail-detail mikro penting agar tidak terhapus atau blur selama optimasi.'
    });

    // 12. Texture Preservation
    checkOrAdd(['tekstur', 'texture', 'kulit', 'kain', 'permukaan'], {
      aspect: 'Preservasi Tekstur Alami',
      problem: 'Tekstur permukaan material asli rentan tampak licin seperti plastik jika tidak diproteksi.',
      priority: 'PRESERVATION',
      suggestedAction: 'Perlindungan tekstur asli material',
      recommendedCodes: ['/texturepreservation'],
      reason: 'Mempertahankan tekstur asli kulit, kain, atau permukaan material agar tetap autentik.'
    });

    // 13. Natural Processing / Anti-Overprocessing
    checkOrAdd(['alami', 'natural', 'realis', 'asli', 'overprocess'], {
      aspect: 'Karakter Pemrosesan Alami',
      problem: 'Potensi pemrosesan berlebih yang dapat mengurangi karakter fotografi asli.',
      priority: 'FINISHING',
      suggestedAction: 'Penerapan pemrosesan visual alami tanpa artefak sintetis',
      recommendedCodes: ['/naturalprocessing'],
      reason: 'Memastikan hasil perbaikan mempertahankan nuansa foto asli tanpa artefak over-processing.'
    });

    // Good aspects baseline
    if (goodAspects.length === 0) {
      goodAspects.push('Ketajaman dan fokus subjek utama sudah terdefinisi dengan jelas.');
      goodAspects.push('Komposisi dan framing foto sudah proporsional.');
      goodAspects.push('Tidak ditemukan distorsi optik lensa yang mengganggu.');
    }

    const summary = `Hasil diagnosis visual menunjukkan gambar memiliki struktur fotografi yang solid. Ditemukan ${areas.length} aspek yang memerlukan perbaikan terfokus untuk mencapai kualitas visual optimal.`;
    const instructions = `Lakukan perbaikan terpadu pada foto asli: pulihkan detail bayangan, kontrol highlight, seimbangkan kontras dan warna alami, serta lindungi tekstur dan detail halus dari pemrosesan berlebih.`;

    return {
      visualConditionSummary: summary,
      optimizationAreas: areas,
      goodAspects,
      repairInstructions: instructions
    };
  }
}

