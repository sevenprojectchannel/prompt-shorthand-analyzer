/**
 * Prompt Shorthand Analyzer - Comprehensive Shorthand Catalog
 * Standalone static data module containing categories, definitions, rules, and examples.
 */

const SHORTHAND_CATALOG = [
  // ==========================================
  // 1. Structural & Core Directives
  // ==========================================
  {
    id: "role-directive",
    code: "[ROLE: <expert_type>]",
    category: "structure",
    name: "Role & Persona Directive",
    description: "Menetapkan identitas, tingkat keahlian, dan sudut pandang model secara instan tanpa kalimat panjang.",
    keywords: ["act as", "bertindak sebagai", "kamu adalah", "you are an expert", "as a senior", "pretend to be", "sebagai seorang"],
    suggestedWhen: "Prompt tidak memiliki penentuan peran atau menggunakan kalimat pembuka peran yang bertele-tele.",
    exampleOriginal: "Saya ingin kamu bertindak sebagai seorang Senior Software Architect berpengalaman 10 tahun.",
    exampleShorthand: "[ROLE: Senior Software Architect (10+ yrs)]",
    tokenSavings: "Hemat ~60% token pembuka peran",
    targetEngine: "all"
  },
  {
    id: "context-directive",
    code: "[CTX: <context_summary>]",
    category: "structure",
    name: "Context Wrapper",
    description: "Membatasi latar belakang atau konteks proyek agar model fokus dan membedakan konteks dari instruksi utama.",
    keywords: ["latar belakang", "background", "konteks", "context", "for context", "situasinya adalah", "our situation"],
    suggestedWhen: "Terdapat penjelasan latar belakang yang menyatu dengan instruksi inti.",
    exampleOriginal: "Sebagai latar belakang, perusahaan kami sedang memigrasikan sistem monolitik ke microservices di cloud.",
    exampleShorthand: "[CTX: Monolith to Cloud Microservices Migration]",
    tokenSavings: "Memisahkan instruksi dan konteks dengan batas tegas",
    targetEngine: "all"
  },
  {
    id: "task-directive",
    code: "[TASK: <action_verb> <objective>]",
    category: "structure",
    name: "Core Task Declaration",
    description: "Deklarasi ringkas tugas utama menggunakan kata kerja tindakan yang eksplisit.",
    keywords: ["tolong", "bantu saya", "tolong buatkan", "bisa bantu saya", "buatkan", "please write", "i need you to", "can you create", "tugas kamu adalah"],
    suggestedWhen: "Prompt diawali dengan sapaan basa-basi atau permohonan berbelit-belit.",
    exampleOriginal: "Halo AI, tolong bantu saya membuat rencana arsitektur database untuk e-commerce berskala besar.",
    exampleShorthand: "[TASK: Design scalable e-commerce DB architecture]",
    tokenSavings: "Menghilangkan 8-15 token basa-basi",
    targetEngine: "all"
  },
  {
    id: "constraints-directive",
    code: "[CONSTR: <rules_separated_by_comma>]",
    category: "structure",
    name: "Hard Constraints Tag",
    description: "Menegaskan batasan ketat dan aturan negatif yang tidak boleh dilanggar dalam satu tag padat.",
    keywords: ["jangan gunakan", "tidak boleh", "do not use", "without", "harus tanpa", "never", "dilarang"],
    suggestedWhen: "Prompt memiliki instruksi larangan atau aturan batasan yang tersebar di beberapa kalimat.",
    exampleOriginal: "Harap jangan menggunakan library eksternal dan tidak boleh ada boilerplate code.",
    exampleShorthand: "[CONSTR: No external libraries, zero boilerplate, pure vanilla]",
    tokenSavings: "Memperjelas instruksi negatif dengan tingkat kepatuhan LLM lebih tinggi",
    targetEngine: "all"
  },
  {
    id: "few-shot-directive",
    code: "[FS: in='<sample>' -> out='<result>']",
    category: "structure",
    name: "Few-Shot In-Context Shorthand",
    description: "Format ringkas untuk memberikan contoh input dan output acuan dalam prompt.",
    keywords: ["contohnya", "seperti contoh", "for example", "contoh:", "sample input", "e.g."],
    suggestedWhen: "Prompt menyajikan contoh kasus dalam format paragraf yang panjang.",
    exampleOriginal: "Contohnya jika saya memasukkan teks 'buku bagus' maka outputnya harus 'Sentiment: Positif'.",
    exampleShorthand: "[FS: in='buku bagus' -> out='Sentiment: Positif']",
    tokenSavings: "Hemat 40-50% token penyajian contoh",
    targetEngine: "all"
  },

  // ==========================================
  // 2. Output Formatting & Optimization
  // ==========================================
  {
    id: "format-json-raw",
    code: "[FMT: JSON-RAW]",
    category: "format",
    name: "Strict JSON Shorthand",
    description: "Memaksa output model hanya berupa JSON valid tanpa teks pembuka, penutup, atau markdown backtick.",
    keywords: ["format json", "hanya json", "only json", "in json format", "valid json without explanation", "tanpa penjelasan"],
    suggestedWhen: "Pengguna meminta output JSON tetapi menulis instruksi berulang agar model tidak berbicara.",
    exampleOriginal: "Berikan jawaban hanya dalam format JSON murni. Jangan beri penjelasan apapun sebelum atau sesudah JSON.",
    exampleShorthand: "[FMT: JSON-RAW, NO-PREAMBLE]",
    tokenSavings: "Hemat 20+ token dan menghilangkan halusinasi markdown wrap",
    targetEngine: "all"
  },
  {
    id: "format-markdown-table",
    code: "[FMT: MD-TABLE]",
    category: "format",
    name: "Markdown Table Shorthand",
    description: "Meminta penyajian data dalam tabel Markdown yang rapi dan terstruktur.",
    keywords: ["dalam bentuk tabel", "format tabel", "table format", "make a table", "tampilkan tabel"],
    suggestedWhen: "Pengguna meminta perbandingan atau ringkasan tabular.",
    exampleOriginal: "Tolong tampilkan perbandingan fitur ini dalam bentuk tabel markdown dengan kolom Fitur, Pro, dan Kontra.",
    exampleShorthand: "[FMT: MD-TABLE: Feature | Pros | Cons]",
    tokenSavings: "Format ringkas dan instruksi kolom presisi",
    targetEngine: "all"
  },
  {
    id: "no-preamble",
    code: "[NO-PREAMBLE]",
    category: "format",
    name: "Zero Chat / Direct Output",
    description: "Instruksi keras agar LLM langsung memberikan jawaban inti tanpa 'Tentu, ini dia...' atau sapaan pembuka.",
    keywords: ["langsung saja", "tanpa pembuka", "no preamble", "skip introduction", "cut the fluff", "straight to answer", "jangan bertele-tele"],
    suggestedWhen: "Pengguna ingin respon cepat tanpa basa-basi pembuka dan penutup.",
    exampleOriginal: "Langsung ke jawabannya saja, tidak perlu menyapa atau memberikan kata pengantar apapun.",
    exampleShorthand: "[NO-PREAMBLE, NO-WRAPUP]",
    tokenSavings: "Mencegah pemborosan token respon hingga 30%",
    targetEngine: "all"
  },
  {
    id: "format-diff-only",
    code: "[DIFF-ONLY]",
    category: "format",
    name: "Unified Diff Only",
    description: "Mengharuskan output kode hanya berupa format git diff / baris yang berubah saja.",
    keywords: ["hanya bagian yang berubah", "only changed lines", "diff only", "show changes only", "jangan tulis ulang semua kode"],
    suggestedWhen: "Pengguna meminta revisi kode tapi tidak ingin seluruh file dicetak ulang.",
    exampleOriginal: "Jangan tampilkan semua kode lagi, hanya tampilkan potongan baris yang diperbaiki saja dalam bentuk diff.",
    exampleShorthand: "[DIFF-ONLY: unified]",
    tokenSavings: "Sangat menghemat token output dan waktu generasi",
    targetEngine: "code"
  },
  {
    id: "concise-density",
    code: "[DENSITY: HIGH, MAX_WORDS: <n>]",
    category: "format",
    name: "High Information Density",
    description: "Mengharuskan penjelasan padat dengan densitas informasi maksimal tanpa filler words.",
    keywords: ["singkat padat", "ringkas", "concise", "be brief", "maksimal kalimat", "jangan panjang-panjang", "short"],
    suggestedWhen: "Pengguna meminta jawaban ringkas namun informatif.",
    exampleOriginal: "Jelaskan dengan sangat ringkas, padat, jangan bertele-tele, maksimal dalam 3 kalimat saja.",
    exampleShorthand: "[DENSITY: MAX, LIMIT: 3 sentences]",
    tokenSavings: "Instruksi terstandar dengan kepatuhan panjang lebih akurat",
    targetEngine: "all"
  },

  // ==========================================
  // 3. Reasoning & Deliberation Directives
  // ==========================================
  {
    id: "chain-of-thought",
    code: "[COT: step-by-step]",
    category: "reasoning",
    name: "Chain of Thought Shorthand",
    description: "Memicu proses penalaran langkah demi langkah untuk problem solving, kalkulasi, atau logika kompleks.",
    keywords: ["langkah demi langkah", "step by step", "jelaskan proses berpikir", "pikirkan bertahap", "think through"],
    suggestedWhen: "Tugas membutuhkan kalkulasi, logika multi-tahap, atau analisis mendalam.",
    exampleOriginal: "Pikirkan solusinya secara bertahap dan jelaskan langkah demi langkah bagaimana kamu mendapatkan hasil tersebut.",
    exampleShorthand: "[COT: step-by-step, verify-each-step]",
    tokenSavings: "Shorthand standar yang dioptimasi untuk transformer reasoning",
    targetEngine: "all"
  },
  {
    id: "scratchpad-thinking",
    code: "<thinking>...</thinking>",
    category: "reasoning",
    name: "Explicit Scratchpad Block",
    description: "Memerintahkan model untuk merumuskan penalaran internal dalam blok tag sebelum memberikan jawaban final.",
    keywords: ["scratchpad", "draft dulu", "internal thinking", "analisis sebelum menjawab", "pikirkan di awal"],
    suggestedWhen: "Pengguna ingin melihat proses audit/penalaran terpisah dari hasil final.",
    exampleOriginal: "Lakukan analisis internal terlebih dahulu sebelum menulis jawaban akhir agar tidak ada kekeliruan logika.",
    exampleShorthand: "[REASONING: in <thinking> tag, FINAL in <output> tag]",
    tokenSavings: "Membuat output terstruktur dan mudah di-parse programmatically",
    targetEngine: "all"
  },
  {
    id: "self-critique",
    code: "[SELF-CRITIQUE: edge-cases]",
    category: "reasoning",
    name: "Adversarial Self-Critique",
    description: "Memerintahkan model untuk mengecek ulang jawabannya sendiri terhadap celah atau edge cases sebelum menyelesaikan.",
    keywords: ["cek lagi", "evaluasi kelemahan", "critique yourself", "double check", "periksa kemungkinan error", "edge cases"],
    suggestedWhen: "Memerlukan kode atau arsitektur mission-critical dengan validasi mandiri.",
    exampleOriginal: "Setelah membuat kodenya, tolong periksa kembali apakah ada bug atau edge cases yang mungkin terlewat.",
    exampleShorthand: "[SELF-CRITIQUE: test edge-cases, memory-leaks]",
    tokenSavings: "Meningkatkan kualitas kode hingga 40% tanpa kalimat panjang",
    targetEngine: "all"
  },

  // ==========================================
  // 4. Image & Generative Diffusion Parameters
  // ==========================================
  {
    id: "aspect-ratio",
    code: "--ar <width:height>",
    category: "image",
    name: "Aspect Ratio Parameter",
    description: "Menentukan perbandingan dimensi gambar (misal 16:9 untuk landscape, 9:16 untuk story/reels, 1:1 untuk kotak).",
    keywords: ["widescreen", "format lanskap", "landscape", "portrait", "16:9", "ukuran layar lebar", "vertikal"],
    suggestedWhen: "Prompt gambar menyebutkan orientasi atau ukuran layar.",
    exampleOriginal: "Buat gambar dengan orientasi layar lebar landscape sinematik 16 banding 9.",
    exampleShorthand: "--ar 16:9",
    tokenSavings: "Parameter wajib Midjourney / diffusion engine",
    targetEngine: "image"
  },
  {
    id: "negative-prompt",
    code: "--no <elements>",
    category: "image",
    name: "Negative Parameter / Exclusion",
    description: "Mengecualikan objek, warna, atau artefak yang tidak diinginkan dari hasil generasi gambar.",
    keywords: ["jangan ada", "tanpa teks", "no watermark", "exclude", "hilangkan orang", "without text"],
    suggestedWhen: "Prompt gambar memiliki daftar hal yang dihindari.",
    exampleOriginal: "Pastikan di dalam gambar tidak ada teks, tidak ada watermark, dan tidak ada orang di latar belakang.",
    exampleShorthand: "--no text, watermark, people, blur",
    tokenSavings: "Sintaks parameter native generator gambar",
    targetEngine: "image"
  },
  {
    id: "photo-optics-shorthand",
    code: "35mm f/1.8 | ISO 100 | Bokeh",
    category: "image",
    name: "Photographic Optical Tags",
    description: "Menggantikan kata-kata 'sangat realistis' dengan parameter kamera nyata yang dipahami model visual.",
    keywords: ["realistis", "photorealistic", "seperti foto asli", "kamera bagus", "efek blur latar", "bokeh"],
    suggestedWhen: "Prompt gambar menggunakan kata klise 'photorealistic' atau 'hyper-realistic'.",
    exampleOriginal: "Foto seorang wanita di cafe yang sangat realistis, hyperrealistic 8k, dengan latar belakang yang agak blur.",
    exampleShorthand: "cinematic portrait, 35mm f/1.4 lens, soft bokeh, natural lighting --ar 3:2 --v 6.1",
    tokenSavings: "Menghindari tag usang dan menghasilkan kualitas visual jauh lebih tinggi",
    targetEngine: "image"
  },
  {
    id: "stylize-chaos",
    code: "--s <0-1000> --c <0-100>",
    category: "image",
    name: "Stylize & Chaos Controls",
    description: "Mengontrol tingkat artistik visual (--s) dan variasi/eksplorasi acak (--c).",
    keywords: ["lebih artistik", "lebih variatif", "artistic style", "chaos", "randomness"],
    suggestedWhen: "Prompt gambar ingin mengatur estetika atau keberagaman variasi.",
    exampleOriginal: "Buat dengan gaya yang sangat artistik dan berikan variasi komposisi yang tidak biasa.",
    exampleShorthand: "--s 750 --c 15",
    tokenSavings: "Kontrol presisi Midjourney",
    targetEngine: "image"
  },
  {
    id: "camera-framing-medium",
    code: "medium shot",
    category: "image",
    name: "Camera Framing: Medium Shot (MS)",
    description: "Menstandarkan framing kamera setengah badan (Medium Shot) untuk komposisi subjek terfokus dan proporsional.",
    keywords: ["medium shot", "setengah badan", "mid shot", "waist up shot", "bidikan menengah"],
    suggestedWhen: "Prompt gambar menentukan framing subjek setengah badan atau jarak menengah.",
    exampleOriginal: "bidikan kamera dari pinggang ke atas medium shot",
    exampleShorthand: "medium shot",
    tokenSavings: "Standar terminologi framing visual",
    targetEngine: "image"
  },
  {
    id: "natural-lighting",
    code: "natural lighting",
    category: "image",
    name: "Natural Lighting Shorthand",
    description: "Menentukan pencahayaan alami fotografi yang lembut dan menghindari efek flash buatan yang kaku.",
    keywords: ["pencahayaan natural", "natural lighting", "cahaya alami", "soft natural light", "ambient sunlight"],
    suggestedWhen: "Prompt gambar membutuhkan pencahayaan alami.",
    exampleOriginal: "dengan pencahayaan natural yang lembut dan realistis",
    exampleShorthand: "natural lighting",
    tokenSavings: "Presisi difusi cahaya",
    targetEngine: "image"
  },
  {
    id: "composition-negative-space",
    code: "negative space, clean backdrop",
    category: "image",
    name: "Negative Space & Clean Backdrop",
    description: "Mengarahkan komposisi visual yang bersih, minimalis, dan memberikan ruang kosong (negative space).",
    keywords: ["latar belakang bersih", "clean background", "negative space", "ruang kosong", "latar minimalis", "clean backdrop"],
    suggestedWhen: "Prompt gambar menginginkan latar belakang bersih tanpa distraksi objek lain.",
    exampleOriginal: "latar belakang bersih dengan ruang kosong minimalis",
    exampleShorthand: "negative space, clean backdrop",
    tokenSavings: "Mencegah latar belakang berantakan",
    targetEngine: "image"
  },

  // ==========================================
  // 5. Persona, Tone & Style
  // ==========================================
  {
    id: "tone-eli5",
    code: "[ELI5]",
    category: "persona",
    name: "Explain Like I'm 5",
    description: "Mengarahkan model untuk menjelaskan konsep rumit dengan analogi sederhana dan bahasa yang sangat mudah dipahami.",
    keywords: ["jelaskan untuk anak kecil", "explain like i am 5", "eli5", "bahasa awam", "untuk pemula sekali", "analogi sederhana"],
    suggestedWhen: "Pengguna ingin penjelasan konsep teknis dalam bahasa ramah non-ahli.",
    exampleOriginal: "Tolong jelaskan cara kerja Quantum Computing seperti menjelaskannya kepada anak berusia 5 tahun menggunakan analogi sederhana.",
    exampleShorthand: "[TASK: Explain Quantum Computing] [AUDIENCE: ELI5] [FMT: Analogy-driven]",
    tokenSavings: "Hemat 65% token dan menjaga fokus gaya bahasa",
    targetEngine: "all"
  },
  {
    id: "tone-executive",
    code: "[TONE: Executive, TL;DR]",
    category: "persona",
    name: "Executive Briefing Shorthand",
    description: "Format nada bicara ringkas, berorientasi hasil bisnis, dilengkapi ringkasan tingkat tinggi (TL;DR) dan action items.",
    keywords: ["untuk pimpinan", "executive summary", "untuk bos", "bahasa profesional bisnis", "tldr", "action items"],
    suggestedWhen: "Pengguna memerlukan ringkasan bisnis untuk manajemen.",
    exampleOriginal: "Buatkan ringkasan untuk level pimpinan eksekutif dengan bahasa profesional, berikan TL;DR di awal dan poin tindakan.",
    exampleShorthand: "[AUDIENCE: C-Level] [TONE: Executive] [FMT: TL;DR + Key Metrics + Action Items]",
    tokenSavings: "Standarisasi struktur laporan eksekutif",
    targetEngine: "all"
  },

  // ==========================================
  // 6. Code & Technical Development
  // ==========================================
  {
    id: "code-specs",
    code: "[ENV: <stack>] [LANG: <lang>]",
    category: "code",
    name: "Technical Environment Shorthand",
    description: "Spesifikasi lingkungan runtime, bahasa pemrograman, dan target kompatibilitas dalam tag ringkas.",
    keywords: ["typescript", "javascript", "python", "node", "react", "vue", "menggunakan typescript", "di node js", "versi react 18", "pure css", "in python 3.11", "pakai tailwind"],
    suggestedWhen: "Pengguna menyebutkan tumpukan teknologi dalam kalimat naratif.",
    exampleOriginal: "Saya ingin membuat kode ini dalam bahasa TypeScript modern untuk runtime Node.js v20 tanpa library luar.",
    exampleShorthand: "[LANG: TS 5.x] [ENV: Node v20] [DEPS: None/Zero-dep]",
    tokenSavings: "Memastikan model tidak menggunakan sintaks deprecated atau library salah",
    targetEngine: "code"
  },
  {
    id: "code-tdd",
    code: "[TDD: Tests-First]",
    category: "code",
    name: "Test-Driven Development Flag",
    description: "Menginstruksikan model untuk menuliskan test suite (unit test) sebelum atau bersamaan dengan implementasi fungsi.",
    keywords: ["test", "testing", "jest", "pytest", "unit test", "buatkan unit test", "sertakan testing", "test driven", "tdd", "unit testing jest"],
    suggestedWhen: "Pengguna meminta fungsi beserta pengujiannya.",
    exampleOriginal: "Tolong tuliskan fungsinya dan sertakan juga unit test lengkap dengan edge cases menggunakan framework Jest.",
    exampleShorthand: "[TASK: Implement function] [TDD: Jest, Coverage >= 90%, Edge-cases included]",
    tokenSavings: "Mengarahkan model untuk memprioritaskan ketahanan kode",
    targetEngine: "code"
  }
];

// Helper functions for catalog queries
function getAllCategories() {
  return [
    { id: "all", label: "Semua Kategori", icon: "bi-grid" },
    { id: "structure", label: "Struktur & Tag", icon: "bi-diagram-3" },
    { id: "format", label: "Format & Output", icon: "bi-file-earmark-code" },
    { id: "reasoning", label: "Penalaran & Logika", icon: "bi-cpu" },
    { id: "image", label: "Gambar & Midjourney", icon: "bi-image" },
    { id: "persona", label: "Persona & Nada", icon: "bi-person-badge" },
    { id: "code", label: "Kode & Rekayasa", icon: "bi-terminal" }
  ];
}

function findShorthandsByCategory(categoryId) {
  if (!categoryId || categoryId === "all") return SHORTHAND_CATALOG;
  return SHORTHAND_CATALOG.filter(item => item.category === categoryId);
}

function searchShorthands(query) {
  if (!query || !query.trim()) return SHORTHAND_CATALOG;
  const q = query.toLowerCase().trim();
  return SHORTHAND_CATALOG.filter(item => 
    item.name.toLowerCase().includes(q) ||
    item.code.toLowerCase().includes(q) ||
    item.description.toLowerCase().includes(q) ||
    item.keywords.some(k => k.toLowerCase().includes(q))
  );
}

// Export for ES modules and Node.js testing compatibility
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    SHORTHAND_CATALOG,
    getAllCategories,
    findShorthandsByCategory,
    searchShorthands
  };
}
