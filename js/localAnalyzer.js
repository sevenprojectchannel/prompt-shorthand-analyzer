/**
 * Local Rule-based Analyzer - Prompt Shorthand Analyzer
 * 100% Client-side, zero-dependency engine for prompt context analysis,
 * intent detection, token estimation, shorthand density scoring, and recommendations.
 */

// Handle node/browser catalog import
let catalogReference = typeof SHORTHAND_CATALOG !== "undefined" ? SHORTHAND_CATALOG : [];
if (typeof require !== "undefined" && (!catalogReference || catalogReference.length === 0)) {
  try {
    catalogReference = require("./catalog.js").SHORTHAND_CATALOG;
  } catch (e) {
    catalogReference = [];
  }
}

const LocalAnalyzer = {
  /**
   * Estimates subword tokens from string
   * @param {string} text 
   * @returns {number}
   */
  countTokens(text) {
    if (!text || typeof text !== "string" || !text.trim()) return 0;
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const chars = text.length;
    return Math.max(1, Math.round(words * 1.3 + (chars / 25)));
  },

  /**
   * Main entry point to analyze a prompt string
   * @param {string} promptText 
   * @param {string} [forcedCategory="all"]
   * @returns {Object} Analysis results
   */
  analyze(promptText, forcedCategory = "all") {
    if (!promptText || typeof promptText !== "string" || !promptText.trim()) {
      return this.getEmptyAnalysis();
    }

    const text = promptText.trim();
    const intent = forcedCategory !== "all" ? forcedCategory : this.detectIntent(text);
    const existingShorthands = this.detectExistingShorthands(text);
    const matchedRecommendations = this.findMatchingShorthands(text, intent);
    const missingStructure = this.detectMissingStructure(text, existingShorthands, intent);
    
    // Metrics calculations
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const charCount = text.length;
    const estimatedTokens = this.countTokens(text);
    
    const densityScore = this.calculateDensityScore(text, existingShorthands);
    const concisenessScore = this.calculateConcisenessScore(text);
    
    // Generate optimized shorthand prompt suggestion using actual catalog shorthands
    const optimizedResult = this.generateOptimizedPrompt(text, matchedRecommendations, missingStructure, intent);
    
    // Calculate actual token savings between original and optimized
    const optimizedTokens = this.countTokens(optimizedResult.prompt);
    const actualTokenSavings = Math.max(0, estimatedTokens - optimizedTokens);

    return {
      originalPrompt: text,
      intent,
      intentLabel: this.getIntentLabel(intent),
      metrics: {
        wordCount,
        charCount,
        estimatedTokens,
        densityScore, // 0 - 100
        concisenessScore, // 0 - 100
        existingShorthandCount: existingShorthands.length,
        potentialTokenSavings: actualTokenSavings || optimizedResult.tokenSavingsEstimate || 0
      },
      existingShorthands,
      recommendations: matchedRecommendations,
      missingStructure,
      optimizedPrompt: optimizedResult.prompt,
      diffSummary: optimizedResult.summary
    };
  },

  /**
   * Detects the underlying domain/intent of the prompt based on full context
   */
  detectIntent(text) {
    const lower = text.toLowerCase();

    // 1. Image & Diffusion signals
    let imageScore = 0;
    const imageHighPriority = [
      "foto", "photo", "gambar", "lukisan", "portrait", "medium shot", 
      "close up", "wide shot", "pencahayaan", "natural lighting", "cinematic", 
      "bokeh", "kamera", "lens", "35mm", "8k", "midjourney", "--ar", "--v", 
      "latar belakang bersih", "negative space", "wallpaper", "render", "illustration",
      "pakaian formal", "standing in", "berdiri di"
    ];
    imageHighPriority.forEach(term => {
      if (lower.includes(term)) {
        if (term === "foto" || term === "photo" || term === "gambar" || term.startsWith("--")) {
          imageScore += 3;
        } else {
          imageScore += 2;
        }
      }
    });

    // 2. Code & Dev signals
    let codeScore = 0;
    const codeTerms = [
      "function", "fungsi", "code", "koding", "typescript", "javascript", 
      "python", "api", "database", "sql", "css", "html", "react", "bug", 
      "refactor", "unit test", "endpoint", "regex", "algorithm", "class", 
      "async", "promise", "tdd", "jest"
    ];
    codeTerms.forEach(term => {
      if (lower.includes(term)) {
        if (term === "typescript" || term === "python" || term === "javascript" || term === "sql") {
          codeScore += 3;
        } else {
          codeScore += 2;
        }
      }
    });
    if (lower.includes("```") || lower.includes("const ") || lower.includes("def ")) {
      codeScore += 4;
    }

    // 3. Reasoning & Chain-of-Thought signals
    let reasoningScore = 0;
    const reasoningTerms = [
      "step by step", "langkah demi langkah", "pikirkan", "kalkulasi", "hitung", 
      "analisis mendalam", "evaluasi", "bandingkan", "pros and cons", "mengapa", 
      "jelaskan logika", "reasoning", "deduksi", "solve this puzzle", "<thinking>"
    ];
    reasoningTerms.forEach(term => {
      if (lower.includes(term)) reasoningScore += 2;
    });

    // 4. Formatting signals
    let formatScore = 0;
    if (lower.includes("format json") || lower.includes("json-raw") || lower.includes("only json")) formatScore += 4;
    if (lower.includes("tabel markdown") || lower.includes("table format") || lower.includes("bentuk tabel")) formatScore += 4;
    if (lower.includes("no preamble") || lower.includes("tanpa pembuka") || lower.includes("langsung saja")) formatScore += 3;

    // 5. Persona signals
    let personaScore = 0;
    if (lower.includes("bertindak sebagai") || lower.includes("act as") || lower.includes("pretend to be")) personaScore += 4;
    if (lower.includes("eli5") || lower.includes("jelaskan untuk anak")) personaScore += 4;
    if (lower.includes("executive summary") || lower.includes("tldr") || lower.includes("level pimpinan")) personaScore += 4;

    // Check highest domain score
    const scores = [
      { intent: "image", score: imageScore },
      { intent: "code", score: codeScore },
      { intent: "reasoning", score: reasoningScore },
      { intent: "format", score: formatScore },
      { intent: "persona", score: personaScore }
    ];

    scores.sort((a, b) => b.score - a.score);
    if (scores[0].score >= 2) {
      return scores[0].intent;
    }

    return "structure";
  },

  getIntentLabel(intent) {
    const labels = {
      image: "Generasi Gambar / Diffusion",
      code: "Rekayasa Kode & Pengembangan",
      reasoning: "Penalaran & Logika Analitis",
      format: "Penataan Format & Ekstraksi Data",
      persona: "Penetapan Persona & Gaya Bahasa",
      structure: "Struktur Prompt Komprehensif"
    };
    return labels[intent] || "Instruksi Umum";
  },

  /**
   * Detects shorthand syntax already used in the prompt
   */
  detectExistingShorthands(text) {
    const found = [];
    
    // Tag pattern like [ROLE:...], [TASK:...], [FMT:...]
    const bracketPattern = /\[([A-Z0-9_\-]+)(?::\s*([^\]]+))?\]/gi;
    let match;
    while ((match = bracketPattern.exec(text)) !== null) {
      found.push({
        raw: match[0],
        tag: match[1].toUpperCase(),
        value: match[2] ? match[2].trim() : "",
        type: "bracket-tag"
      });
    }

    // XML-style thinking / output tags
    const xmlPattern = /<([a-z0-9_\-]+)>([\s\S]*?)<\/\1>/gi;
    while ((match = xmlPattern.exec(text)) !== null) {
      found.push({
        raw: match[0].length > 40 ? match[0].substring(0, 37) + "..." : match[0],
        tag: match[1].toLowerCase(),
        value: match[2].trim(),
        type: "xml-tag"
      });
    }

    // Diffusion flags like --ar 16:9, --v 6, --s 750
    const paramPattern = /--([a-z]+)\s+([^\s\-]+)/gi;
    while ((match = paramPattern.exec(text)) !== null) {
      found.push({
        raw: match[0],
        tag: "--" + match[1].toLowerCase(),
        value: match[2].trim(),
        type: "cli-flag"
      });
    }

    return found;
  },

  /**
   * Matches catalog items against prompt text with semantic context awareness
   * Avoids superficial single-word fluke matches
   */
  findMatchingShorthands(text, intent) {
    const lower = text.toLowerCase();
    const catalog = catalogReference && catalogReference.length > 0 ? catalogReference : [];
    const recommendations = [];

    catalog.forEach(item => {
      // 1. Intent Compatibility Check
      // If intent is image, do NOT recommend code or general structure task directives unless requested
      if (intent === "image" && item.category !== "image" && item.id !== "constraints-directive") {
        return;
      }
      if (intent === "code" && item.category === "image") {
        return;
      }

      // 2. Multi-word phrase search with semantic scoring
      let bestMatch = null;
      let maxLen = 0;

      for (const kw of item.keywords) {
        const kwLower = kw.toLowerCase();
        if (lower.includes(kwLower)) {
          // Check keyword significance
          const wordsInKw = kwLower.split(/\s+/).length;
          
          // Guard: Avoid single common words like "tolong" or "buatkan" triggering on specific domain prompts
          if (wordsInKw === 1 && (kwLower === "tolong" || kwLower === "buatkan" || kwLower === "bantu" || kwLower === "foto" || kwLower === "gambar")) {
            if (intent !== "structure") {
              continue;
            }
          }

          if (kwLower.length > maxLen) {
            maxLen = kwLower.length;
            bestMatch = kw;
          }
        }
      }

      if (bestMatch) {
        const isIntentAligned = item.category === intent || item.targetEngine === intent;
        const phraseWeight = bestMatch.includes(" ") ? 40 : 20;
        const relevance = phraseWeight + (isIntentAligned ? 35 : 10) + Math.min(25, bestMatch.length * 2);

        recommendations.push({
          ...item,
          relevance,
          matchedPhrase: bestMatch,
          replacesPhrase: bestMatch,
          actionType: "replace-phrase"
        });
      }
    });

    // Sort by highest relevance descending
    return recommendations.sort((a, b) => b.relevance - a.relevance);
  },

  /**
   * Identifies structural prompt gaps based on actual contextual needs
   * Does NOT report technical parameters as "missing" unless indicated by prompt context
   */
  detectMissingStructure(text, existingShorthands, intent) {
    const missing = [];
    const lower = text.toLowerCase();
    const existingTags = existingShorthands.map(s => s.tag.toUpperCase());

    if (intent === "image") {
      // 1. Aspect ratio: only a gap if canvas/aspect/orientation is indicated or mentioned loosely
      const hasArFlag = existingShorthands.some(s => s.tag === "--ar");
      const mentionsOrientation = /\b(orientasi|ukuran|dimensi|kanvas|layar|rasio|aspect\s*ratio|portrait|landscape|vertikal|horizontal|wallpaper|banner)\b/i.test(lower);
      
      if (!hasArFlag && mentionsOrientation && !lower.includes("16:9") && !lower.includes("9:16") && !lower.includes("3:2") && !lower.includes("1:1")) {
        missing.push({
          tag: "--ar <width:height>",
          title: "Parameter Aspek Rasio Belum Spesifik",
          tip: "Prompt menyebut orientasi/dimensi tetapi belum menentukan parameter rasio kanvas (misal: --ar 16:9 atau --ar 9:16)."
        });
      }

      // 2. Negative prompt: only a gap if exclusion/avoidance is mentioned loosely without --no
      const hasNegativeFlag = existingShorthands.some(s => s.tag === "--no");
      const mentionsExclusion = /\b(tanpa|jangan\s+ada|hilangkan|exclude|avoid|bebas\s+dari|tidak\s+boleh\s+ada)\b/i.test(lower);

      if (!hasNegativeFlag && mentionsExclusion) {
        missing.push({
          tag: "--no <elemen_yang_dihindari>",
          title: "Parameter Negatif Belum Terstandar",
          tip: "Prompt menyebutkan batasan larangan atau hal yang dihindari, namun belum diformat sebagai parameter '--no'."
        });
      }

      // 3. Framing: only a gap if user discusses framing/perspective vaguely without shot type
      const mentionsFramingVague = /\b(jarak\s+kamera|sudut\s+pandang|framing|posisi\s+kamera)\b/i.test(lower);
      const hasShot = /\b(medium\s+shot|close\s*up|wide\s+shot|full\s+shot|portrait\s+shot)\b/i.test(lower);
      if (mentionsFramingVague && !hasShot) {
        missing.push({
          tag: "medium shot / close-up",
          title: "Jenis Bidikan Kamera Belum Spesifik",
          tip: "Tentukan jenis framing kamera secara eksplisit untuk mempertegas komposisi."
        });
      }
    } else {
      // Text & Code specific checks
      if (!existingTags.includes("ROLE") && !lower.includes("bertindak sebagai") && !lower.includes("act as")) {
        const wordCount = text.split(/\s+/).filter(Boolean).length;
        if (wordCount >= 4) {
          missing.push({
            tag: "[ROLE: <persona>]",
            title: "Belum Ada Peran Spesifik (Role)",
            tip: "Menambahkan [ROLE: ...] memberikan model lensa keahlian khusus dan meningkatkan akurasi terminologi."
          });
        }
      }

      if (!existingTags.includes("FMT") && !existingTags.includes("FORMAT") && !lower.includes("format") && !lower.includes("json") && !lower.includes("markdown")) {
        missing.push({
          tag: "[FMT: Markdown / JSON / Direct]",
          title: "Belum Ada Batasan Format (Format Constraint)",
          tip: "Menentukan format output mencegah respons model menyimpang atau memberikan boilerplate berlebih."
        });
      }

      if (!existingTags.includes("CONSTR") && !lower.includes("jangan") && !lower.includes("do not") && !lower.includes("tanpa")) {
        if (intent === "code" || intent === "reasoning") {
          missing.push({
            tag: "[CONSTR: concise, no fluff]",
            title: "Batasan Keras (Constraints)",
            tip: "Tambahkan batasan negatif untuk memangkas basa-basi dan memastikan jawaban langsung pada inti."
          });
        }
      }
    }

    return missing;
  },

  /**
   * Calculates shorthand density score (0 to 100)
   */
  calculateDensityScore(text, existingShorthands) {
    if (existingShorthands.length === 0) return 15; // Base minimum
    const shorthandChars = existingShorthands.reduce((acc, curr) => acc + curr.raw.length, 0);
    const ratio = Math.min(1, shorthandChars / Math.max(1, text.length * 0.4));
    return Math.round(20 + ratio * 80);
  },

  /**
   * Calculates conciseness score based on presence of fluff / conversational padding
   */
  calculateConcisenessScore(text) {
    const lower = text.toLowerCase();
    const fluffWords = [
      "tolong", "bisa tolong", "saya ingin", "halo", "selamat pagi", "mohon bantuan", 
      "please", "can you", "i would like", "could you please", "thank you", "terima kasih",
      "sebisanya", "kalau bisa", "jangan lupa ya"
    ];
    let fluffCount = 0;
    fluffWords.forEach(f => {
      if (lower.includes(f)) fluffCount++;
    });

    const baseScore = 95 - (fluffCount * 12);
    return Math.max(20, Math.min(100, baseScore));
  },

  /**
   * Generates an optimized, streamlined prompt using actual catalog shorthands
   * Replaces equivalent verbose phrases and preserves un-shorthanded details
   */
  generateOptimizedPrompt(originalText, recommendations, missingStructure, intent) {
    let replacedItems = [];

    // ==========================================
    // 1. IMAGE PROMPTS RESTRUCTURING
    // ==========================================
    if (intent === "image") {
      let working = originalText.trim();

      // Strip introductory prompt-creation fluff
      const imageFluffPrefixes = [
        /^(tolong\s+)?(bantu\s+saya\s+)?(untuk\s+)?buatkan\s+(foto|gambar|image|lukisan|render)\s*(seorang|sebuah|tentang)?\s*/i,
        /^(please\s+)?(generate|create)\s+(a\s+)?(photo|image|picture)\s+(of\s+)?/i,
        /^(foto|gambar)\s*(seorang|sebuah)?\s*/i
      ];

      for (const prefix of imageFluffPrefixes) {
        if (prefix.test(working)) {
          working = working.replace(prefix, "");
          break;
        }
      }

      // Apply catalog replacements
      const imageSubstitutions = [
        {
          pattern: /\bpencahayaan\s+natural\b/gi,
          replacement: "natural lighting",
          code: "natural lighting",
          originalPhrase: "pencahayaan natural"
        },
        {
          pattern: /\blatar\s+belakang\s+bersih\b/gi,
          replacement: "negative space, clean backdrop",
          code: "negative space, clean backdrop",
          originalPhrase: "latar belakang bersih"
        },
        {
          pattern: /\b(bidikan\s+)?medium\s+shot\b/gi,
          replacement: "medium shot",
          code: "medium shot",
          originalPhrase: "medium shot"
        },
        {
          pattern: /\b(sangat\s+realistis|hyperrealistic|photorealistic)\b/gi,
          replacement: "35mm f/1.8, cinematic photography",
          code: "35mm f/1.8 | ISO 100 | Bokeh",
          originalPhrase: "sangat realistis / photorealistic"
        },
        {
          pattern: /\b(orientasi\s+layar\s+lebar|layar\s+lebar|widescreen)\s*(16\s*:\s*9)?\b/gi,
          replacement: "--ar 16:9",
          code: "--ar 16:9",
          originalPhrase: "layar lebar 16:9"
        },
        {
          pattern: /\b(jangan\s+ada\s+teks|tanpa\s+watermark|tanpa\s+teks)\b/gi,
          replacement: "--no text, watermark",
          code: "--no <elements>",
          originalPhrase: "tanpa teks / watermark"
        }
      ];

      imageSubstitutions.forEach(sub => {
        if (sub.pattern.test(working)) {
          working = working.replace(sub.pattern, sub.replacement);
          replacedItems.push(`'${sub.originalPhrase}' ➔ '${sub.replacement}'`);
        }
      });

      // Clean trailing punctuation and normalize spacing
      working = working.replace(/[.;\n]+$/, "").trim();
      const finalPrompt = working;

      const summaryText = replacedItems.length > 0
        ? `Memadatkan frasa: ${replacedItems.join(", ")} menggunakan notasi shorthand fotografi katalog.`
        : "Menstandardisasi parameter visual Midjourney / Difusi dari katalog.";

      return {
        prompt: finalPrompt,
        tokenSavingsEstimate: Math.max(8, replacedItems.length * 5),
        summary: summaryText
      };
    }

    // ==========================================
    // 2. CODE PROMPTS RESTRUCTURING
    // ==========================================
    if (intent === "code") {
      let working = originalText.trim();
      const codeTags = [];

      // Extract and substitute code stack
      if (/typescript/i.test(working)) {
        codeTags.push("[LANG: TS 5.x]");
        working = working.replace(/(di\s+|menggunakan\s+|dalam\s+bahasa\s+)?typescript(\s+modern)?/gi, "");
        replacedItems.push("'TypeScript' ➔ '[LANG: TS 5.x]'");
      } else if (/python/i.test(working)) {
        codeTags.push("[LANG: Python 3.11]");
        working = working.replace(/(di\s+|menggunakan\s+|dalam\s+bahasa\s+)?python(\s+3)?/gi, "");
        replacedItems.push("'Python' ➔ '[LANG: Python 3.11]'");
      }

      // Testing directive
      if (/unit\s+test|testing|jest|tdd/i.test(working)) {
        const testName = /jest/i.test(working) ? "Jest" : "Unit-Tests";
        codeTags.push(`[TDD: ${testName}, Edge-cases]`);
        working = working.replace(/(sertakan\s+|buatkan\s+|dengan\s+)?unit\s+test(\s+menggunakan\s+jest)?(\s+untuk\s+mengetes\s+edge\s+cases-nya)?/gi, "");
        replacedItems.push("'unit test Jest' ➔ '[TDD: Jest]'");
      }

      // Constraints
      if (/jangan\s+gunakan\s+library\s+eksternal|tanpa\s+library|tidak\s+boleh\s+ada\s+boilerplate/i.test(working)) {
        codeTags.push("[CONSTR: Zero external libraries, zero boilerplate]");
        working = working.replace(/jangan\s+gunakan\s+library\s+eksternal\s*(apapun)?\s*,?\s*/gi, "");
        working = working.replace(/tidak\s+boleh\s+ada\s+boilerplate\s*(yang\s+berlebihan)?\s*,?\s*/gi, "");
        replacedItems.push("Batasan library ➔ '[CONSTR: Zero-dep]'");
      }

      // Clean conversational task wrapper
      working = working.replace(/^(halo(\s+ai)?\s*,?\s*)/i, "");
      working = working.replace(/^(tolong\s+)?(bantu\s+saya\s+)?(untuk\s+)?(membuatkan|buatkan|membuat|buat)\s*/i, "");
      working = working.replace(/(\.|\s)*dan\s+(tolong\s+)?(berikan|buatkan|sertakan).*$/i, "");
      working = working.replace(/^fungsi\s+/i, "Fungsi ");
      working = working.replace(/\s+/g, " ").trim();

      let prompt = `[TASK: ${working.replace(/[.;]+$/, "")}]\n` + codeTags.join("\n");

      return {
        prompt: prompt.trim(),
        tokenSavingsEstimate: Math.max(10, replacedItems.length * 6),
        summary: `Memadatkan spesifikasi kode ke notasi shorthand: ${replacedItems.join(", ") || "Standar struktur dev"}.`
      };
    }

    // ==========================================
    // 3. REASONING / ANALYSIS PROMPTS
    // ==========================================
    if (intent === "reasoning") {
      let working = originalText.trim();
      const reasoningTags = [];

      if (/langkah\s+demi\s+langkah|step\s+by\s+step|secara\s+bertahap/i.test(working)) {
        reasoningTags.push("[COT: step-by-step]");
        working = working.replace(/pikirkan\s+solusinya\s+secara\s+bertahap\s+dan\s+jelaskan\s+langkah\s+demi\s+langkah\s*\.?\s*/gi, "");
        replacedItems.push("'langkah demi langkah' ➔ '[COT: step-by-step]'");
      }

      if (/verifikasi|double\s+check/i.test(working)) {
        reasoningTags.push("[VERIFY: verify calculation steps before output]");
        working = working.replace(/lakukan\s+verifikasi\s+kalkulasi\s*(sebelum\s+memberikan\s+jawaban\s+akhir)?\s*\.?\s*/gi, "");
        replacedItems.push("'verifikasi kalkulasi' ➔ '[VERIFY: ...]'");
      }

      let prompt = `[TASK: ${working.trim()}]\n` + reasoningTags.join("\n");

      return {
        prompt: prompt.trim(),
        tokenSavingsEstimate: Math.max(12, replacedItems.length * 7),
        summary: `Mengonversi instruksi penalaran bertahap ke shorthand [COT] & [VERIFY].`
      };
    }

    // ==========================================
    // 4. PERSONA / FORMAT / GENERAL PROMPTS
    // ==========================================
    let transformed = originalText.trim();
    
    // Role replacement
    const roleMatch = /(saya\s+ingin\s+kamu\s+bertindak\s+sebagai|act\s+as\s+a)\s+([^.,;\n]+)/i.exec(transformed);
    if (roleMatch) {
      const roleName = roleMatch[2].trim();
      transformed = transformed.replace(roleMatch[0], `[ROLE: ${roleName}]`);
      replacedItems.push(`'bertindak sebagai' ➔ '[ROLE: ${roleName}]'`);
    }

    // Table format replacement
    if (/format\s+tabel\s+markdown|dalam\s+bentuk\s+tabel\s+markdown/i.test(transformed)) {
      transformed = transformed.replace(/(dan\s+)?(tampilkan|dalam\s+bentuk|format)\s+tabel\s+markdown\s*(\w+)?/gi, "[FMT: MD-TABLE]");
      replacedItems.push("'format tabel markdown' ➔ '[FMT: MD-TABLE]'");
    }

    // JSON format replacement
    if (/format\s+hanya\s+berupa\s+json\s+murni|strictly\s+json\s+only|hanya\s+json/i.test(transformed)) {
      transformed = transformed.replace(/format\s+hanya\s+berupa\s+json\s+murni\s*,?\s*/gi, "[FMT: JSON-RAW] ");
      replacedItems.push("'hanya json murni' ➔ '[FMT: JSON-RAW]'");
    }

    // Executive summary replacement
    if (/ringkasan\s+eksekutif\s+tl;?dr/i.test(transformed)) {
      transformed = transformed.replace(/berikan\s+ringkasan\s+eksekutif\s+tl;?dr\s*(di\s+awal)?\s*,?\s*/gi, "[TONE: Executive, TL;DR] ");
      replacedItems.push("'ringkasan eksekutif TL;DR' ➔ '[TONE: Executive, TL;DR]'");
    }

    // Clean conversational fluff
    transformed = transformed.replace(/^(halo\s+ai|hai|selamat\s+(pagi|siang|sore|malam))\s*,?\s*/gi, "");
    transformed = transformed.replace(/(tolong\s+(bantu\s+saya\s+)?(untuk\s+)?buatkan|bisa\s+buatkan|please\s+create)\s*/gi, "");
    transformed = transformed.replace(/jelaskan\s+dengan\s+sangat\s+ringkas\s+dan\s+padat\s*,?\s*(jangan\s+bertele-tele\s*,?\s*)?/gi, "[DENSITY: HIGH] ");

    return {
      prompt: transformed.trim(),
      tokenSavingsEstimate: Math.max(6, replacedItems.length * 5),
      summary: replacedItems.length > 0 
        ? `Memadatkan instruksi naratif ke shorthand: ${replacedItems.join(", ")}.`
        : "Menstandardisasi prompt dengan notasi direktif katalog."
    };
  },

  getEmptyAnalysis() {
    return {
      originalPrompt: "",
      intent: "general",
      intentLabel: "Menunggu Input Prompt",
      metrics: {
        wordCount: 0,
        charCount: 0,
        estimatedTokens: 0,
        densityScore: 0,
        concisenessScore: 0,
        existingShorthandCount: 0,
        potentialTokenSavings: 0
      },
      existingShorthands: [],
      recommendations: [],
      missingStructure: [],
      optimizedPrompt: "",
      diffSummary: "Ketik atau tempelkan prompt di atas untuk memulai analisis."
    };
  }
};

// Export for Node.js test runner & browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = { LocalAnalyzer };
}
