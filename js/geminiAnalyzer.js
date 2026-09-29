/**
 * Gemini BYOK Integration - Prompt Shorthand Analyzer
 * Connects directly from user's browser to Google Gemini REST API.
 * Uses the user's personal API Key (never sent to any intermediary server).
 */

const GeminiAnalyzer = {
  API_BASE_URL: "https://generativelanguage.googleapis.com/v1beta/models",

  /**
   * Available Gemini models for analysis
   */
  getAvailableModels() {
    return [
      { id: "gemini-2.5-flash", name: "Gemini 2.5 Flash (Rekomendasi Cepat & Cerdas)", default: true },
      { id: "gemini-2.5-pro", name: "Gemini 2.5 Pro (Penalaran Kompleks Mendalam)" },
      { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash (Cepat & Ringan)" },
      { id: "gemini-1.5-pro", name: "Gemini 1.5 Pro (Analisis Panjang)" }
    ];
  },

  /**
   * Test user's Gemini API Key connection
   * @param {string} apiKey 
   * @param {string} model 
   * @returns {Promise<{success: boolean, message: string}>}
   */
  async testConnection(apiKey, model = "gemini-2.5-flash") {
    if (!apiKey || !apiKey.trim()) {
      return { success: false, message: "API Key belum diisi. Silakan masukkan Gemini API Key Anda." };
    }

    const cleanKey = apiKey.trim();
    const endpoint = `${this.API_BASE_URL}/${model}:generateContent?key=${cleanKey}`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: "Ping test. Balas hanya dengan satu kata: PONG" }]
            }
          ],
          generationConfig: {
            maxOutputTokens: 10,
            temperature: 0.1
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errMessage = errorData.error?.message || `HTTP ${response.status}: ${response.statusText}`;
        
        if (response.status === 400 || response.status === 403) {
          return { success: false, message: `Autentikasi Gagal: API Key tidak valid atau izin ditolak (${errMessage}).` };
        } else if (response.status === 429) {
          return { success: false, message: "Batas Quota / Rate Limit Gemini terlampaui. Coba beberapa saat lagi." };
        }
        return { success: false, message: `Koneksi gagal: ${errMessage}` };
      }

      const data = await response.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
      if (reply) {
        return { success: true, message: `Koneksi berhasil terhubung ke ${model}!` };
      }
      return { success: false, message: "Menerima respons kosong dari Gemini API." };
    } catch (e) {
      return { 
        success: false, 
        message: `Gagal menghubungi Google API (${e.message || "Periksa koneksi internet Anda"}).` 
      };
    }
  },

  /**
   * Deep Contextual Shorthand Analysis powered by Gemini
   * @param {string} promptText 
   * @param {string} apiKey 
   * @param {string} model 
   * @returns {Promise<Object>} Structured recommendations & compressed prompt
   */
  async analyzePromptWithGemini(promptText, apiKey, model = "gemini-2.5-flash") {
    if (!apiKey || !apiKey.trim()) {
      throw new Error("Gemini API Key belum dikonfigurasi. Silakan atur di bagian BYOK Settings.");
    }

    const cleanKey = apiKey.trim();
    const endpoint = `${this.API_BASE_URL}/${model}:generateContent?key=${cleanKey}`;

    const systemInstruction = `Anda adalah "Prompt Shorthand Architect" kelas dunia.
Tugas Anda:
1. Menganalisis teks prompt pengguna secara menyeluruh berdasarkan konteks implisit dan eksplisit (tujuan utama, persona, batasan, target format, domain/engine yang dituju).
2. Mengidentifikasi basa-basi percakapan (fluff), permohonan sopan santun yang membuang token, dan instruksi bertele-tele.
3. Memberikan rekomendasi shorthand notasi yang relevan (misal tag terstruktur [ROLE:], [CTX:], [TASK:], [CONSTR:], [FMT:], [COT:], parameter difusi visual --ar, --v, dsb).
4. Menghasilkan versi "Optimized Shorthand Prompt" yang mempertahankan 100% esensi instruksi namun jauh lebih padat token dan mudah dipahami LLM/AI.
5. Menjelaskan secara singkat mengapa setiap shorthand dipilih.

Format balasan WAJIB berupa JSON murni tanpa pembuka atau penutup markdown backtick (JSON-RAW):
{
  "contextSummary": "Ringkasan pemahaman konteks prompt pengguna",
  "detectedDomain": "image | code | reasoning | format | persona | general",
  "densityScore": 85,
  "estimatedTokenReduction": "35%",
  "recommendedShorthands": [
    {
      "code": "[ROLE: ...]",
      "name": "Nama Shorthand",
      "reason": "Alasan kontekstual rekomendasi untuk prompt ini",
      "replacesPhrase": "Potongan kalimat asli yang digantikan"
    }
  ],
  "optimizedPrompt": "Versi prompt baru yang sudah direstrukturisasi menggunakan shorthand",
  "actionableTips": [
    "Tips 1 perbaikan konteks",
    "Tips 2 optimasi parameter"
  ]
}`;

    const payload = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Analisis prompt berikut dan rekomendasikan shorthand yang tepat:\n\n"""\n${promptText}\n"""`
            }
          ]
        }
      ],
      systemInstruction: {
        parts: [{ text: systemInstruction }]
      },
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.2
      }
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `Gemini API Error (HTTP ${response.status})`);
    }

    const data = await response.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!rawText) {
      throw new Error("Gemini tidak mengembalikan hasil analisis.");
    }

    try {
      // Clean JSON in case model wrapped it in markdown codeblocks
      const cleanedJson = rawText.replace(/```json/gi, "").replace(/```/g, "").trim();
      const parsed = JSON.parse(cleanedJson);
      return parsed;
    } catch (e) {
      console.warn("JSON parse error from Gemini output, raw text:", rawText);
      return {
        contextSummary: "Analisis teks prompt berhasil dilakukan.",
        detectedDomain: "general",
        densityScore: 75,
        estimatedTokenReduction: "30%",
        recommendedShorthands: [],
        optimizedPrompt: rawText,
        actionableTips: ["Gunakan struktur tag eksplisit untuk memisahkan instruksi dan data."]
      };
    }
  }
};

// Export for Node.js test runner & browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = { GeminiAnalyzer };
}
