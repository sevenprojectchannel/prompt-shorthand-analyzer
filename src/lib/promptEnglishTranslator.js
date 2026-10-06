/**
 * Prompt English Translator & Natural AI Prompt Formatter
 * 
 * Prinsip & Standar:
 * 1. Seluruh output "PROMPT OPTIMAL" wajib dalam Bahasa Inggris yang natural,
 *    deskriptif, spesifik, dan mudah dipahami AI image/video generator (Midjourney, SDXL, DALL-E, Imagen).
 * 2. Seluruh shorthand (misal: /portrait, /facelock, /softlight, /rawphoto) TETAP DIPERTAHANKAN
 *    sebagaimana adanya tanpa diubah atau diterjemahkan.
 * 3. Seluruh Midjourney parameter (--ar, --style, --v, --no) tetap utuh.
 * 4. Negative prompt wajib dalam Bahasa Inggris.
 * 5. Menerjemahkan makna & detail visual secara kontekstual, bukan terjemahan kata-per-kata yang kaku.
 */

// 1. Pemetaan 5 Template 2 Dunia Resmi ke Natural AI English
export const TWO_WORLDS_TEMPLATES_EN = {
  tpl_1: 'Add a realistic human subject alongside existing subjects, with coordinating attire, actively engaging in context harmonious with the uploaded image, while strictly preserving all original subjects and characters without modification or removal.',
  tpl_2: 'Add a realistic human subject with coordinating outfit, actively participating in the context of the uploaded image, while strictly preserving all original subjects and characters without modification or removal.',
  tpl_3: 'Add a realistic human subject while strictly preserving all existing subjects and characters within the image. Do not modify or remove original subjects or characters. Harmonize the background with the uploaded image.',
  tpl_4: 'Add a new subject wearing an elegant hijab, harmonizing outfit styling and color palette with the uploaded image.',
  tpl_5: 'Add a realistic human subject wearing a hijab, with coordinating outfit and engaging in activity harmonious with the uploaded image, while strictly preserving all original subjects and characters without modification or removal.',
  tpl_6: 'Add a realistic human male as a new subject into the uploaded image. First analyze the theme, environment, perspective, lighting, color, scale, and scene context, then adapt the male subject\'s clothing, pose, expression, and activity to integrate naturally and consistently with the scene. Choose attire suited to the theme, environment, atmosphere, and visual context of the uploaded image. Do not modify, delete, replace, move, or alter original image elements. All original elements remain the SOURCE OF TRUTH. The male subject is only added as a new element into available space within the scene and must not replace or alter any original elements.',
  tpl_7: 'Add a realistic human subject wearing a hijab as a new subject into the uploaded image. First analyze the theme, environment, perspective, lighting, color, scale, and scene context, then adapt the clothing, pose, expression, and activity of the subject to blend naturally with the scene. Do not modify, delete, replace, move, or alter original image elements. All original elements remain the SOURCE OF TRUTH. The subject is only added into available space within the scene and must not replace original elements.'
};

// 2. Pemetaan Demografi 2 Dunia
export const TWO_WORLDS_DEMOGRAPHICS_EN = {
  gender: {
    'laki-laki': 'Male',
    'pria': 'Male',
    'cowok': 'Male',
    'perempuan': 'Female',
    'wanita': 'Female',
    'cewek': 'Female'
  },
  ethnicity: {
    'asia': 'Asian',
    'eropa': 'European / Caucasian',
    'afrika': 'African',
    'timur tengah': 'Middle Eastern',
    'asia selatan': 'South Asian',
    'asia timur': 'East Asian',
    'asia tenggara': 'Southeast Asian',
    'pasifik / oseania': 'Pacific Islander / Oceanian',
    'pasifik': 'Pacific Islander',
    'oseania': 'Oceanian',
    'amerika latin': 'Latino / Hispanic'
  }
};

// 3. Kamus Frasa Visual & Prompt Engineering Bahasa Indonesia -> AI-Readable English
const PHRASE_DICTIONARY = [
  // Templates 2 Dunia exact / partial match
  [
    /Tambahkan subjek manusia realistis di luar subjek yang sudah ada[,\s]+dengan pakaian yang menyesuaikan[,\s]+serta terlibat dalam aktivitas sesuai gambar unggahan[,\s]+dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan\.?/gi,
    TWO_WORLDS_TEMPLATES_EN.tpl_1
  ],
  [
    /Tambahkan subjek manusia realistis dengan pakaian yang menyesuaikan[,\s]+serta terlibat dalam aktivitas sesuai gambar unggahan[,\s]+dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan\.?/gi,
    TWO_WORLDS_TEMPLATES_EN.tpl_2
  ],
  [
    /Tambahkan subjek manusia realistis dan pertahankan seluruh subjek serta karakter yang sudah ada dalam gambar\. Jangan memodifikasi atau menghilangkan subjek\/karakter asli\. Latar belakang menyesuaikan dengan gambar unggahan\.?/gi,
    TWO_WORLDS_TEMPLATES_EN.tpl_3
  ],
  [
    /Tambahkan subjek baru yang mengenakan hijab[,\s]+lalu sesuaikan outfit dan warna agar harmonis dengan gambar unggahan\.?/gi,
    TWO_WORLDS_TEMPLATES_EN.tpl_4
  ],
  [
    /Tambahkan subjek manusia realistis yang mengenakan hijab[,\s]+dengan pakaian yang menyesuaikan[,\s]+serta terlibat dalam aktivitas sesuai gambar unggahan[,\s]+dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan\.?/gi,
    TWO_WORLDS_TEMPLATES_EN.tpl_5
  ],
  [
    /Tambahkan satu subjek manusia laki-laki realistis sebagai subjek baru ke dalam gambar unggahan[\s\S]*?tidak boleh menggantikan atau mengubah elemen asli apa pun\.?/gi,
    TWO_WORLDS_TEMPLATES_EN.tpl_6
  ],
  [
    /Tambahkan subjek manusia realistis berhijab sebagai subjek baru ke dalam gambar unggahan[\s\S]*?tidak boleh menggantikan elemen asli\.?/gi,
    TWO_WORLDS_TEMPLATES_EN.tpl_7
  ],

  // Two Worlds custom request variations
  [/tambahkan subjek manusia realistis di luar subjek yang sudah ada[,\s]+dengan pakaian yang menyesuaikan/gi, 'Add a realistic human subject alongside existing subjects, with coordinating attire'],
  [/tambahkan subjek manusia realistis/gi, 'Add a realistic human subject'],
  [/tambahkan subjek baru/gi, 'Add a new subject'],
  [/tambahkan subjek/gi, 'Add a subject'],
  [/tambahkan/gi, 'Add'],

  // Vision Descriptions & Fixtures
  [/dua orang berada di taman tropis dengan latar belakang pemandangan alam/gi, 'Two people in a lush tropical garden with a natural scenic landscape backdrop'],
  [/dua orang berada di taman tropis/gi, 'Two people in a lush tropical garden'],
  [/dua orang berada di/gi, 'Two people in'],
  [/dua orang/gi, 'Two people'],
  [/di taman tropis/gi, 'in a lush tropical garden'],
  [/taman tropis/gi, 'tropical garden'],
  [/dengan latar belakang pemandangan alam/gi, 'with a natural scenic landscape backdrop'],
  [/latar belakang pemandangan alam/gi, 'scenic landscape backdrop'],
  [/pemandangan alam/gi, 'scenic landscape'],
  [/detail subjek utama dengan pencahayaan alami dan warna cerah/gi, 'Detail of main subjects with natural daylight illumination and vibrant vivid colors'],
  [/detail subjek utama/gi, 'Detail of main subjects'],
  [/subjek utama/gi, 'main subjects'],
  [/warna cerah/gi, 'vibrant vivid colors'],

  // Specific common prompt phrases
  [/perbaiki pencahayaan foto/gi, 'enhance photo lighting with balanced exposure and natural illumination'],
  [/perbaiki pencahayaan/gi, 'enhance lighting with balanced exposure and natural contrast'],
  [/hapus hijab[,\s]+jangan ubah wajah/gi, 'remove headwear, preserve natural hair, preserve original facial identity'],
  [/hapus hijab/gi, 'remove headwear, display natural hair'],
  [/jangan ubah wajah/gi, 'strictly preserve original face and facial identity'],
  [/pertahankan wajah asli/gi, 'maintain authentic original facial identity'],
  [/pertahankan wajah/gi, 'preserve facial identity'],
  [/ganti baju menjadi tanktop putih tali tipis[,\s]+jangan ubah wajah/gi, 'change outfit to a delicate white spaghetti strap tank top, strictly preserve original facial identity'],
  [/ganti baju menjadi ([^,.]+)/gi, 'change outfit to $1'],
  [/ganti baju/gi, 'change clothing outfit'],
  [/ganti pakaian menjadi ([^,.]+)/gi, 'change outfit to $1'],
  [/ganti pakaian/gi, 'change outfit styling'],
  [/hapus latar belakang/gi, 'remove background, isolate subject on clean backdrop'],
  [/hapus background/gi, 'remove background'],
  [/gunakan latar baru/gi, 'place subject in a new scenic environment'],
  [/ganti latar/gi, 'replace background setting'],
  [/pertahankan rambut asli tetapi ubah pakaian/gi, 'preserve natural authentic hair, change clothing attire'],
  [/pertahankan rambut asli/gi, 'preserve natural authentic hair'],
  [/ubah rasio menjadi 9:16/gi, 'aspect ratio 9:16 vertical composition'],
  [/ubah rasio menjadi 16:9/gi, 'aspect ratio 16:9 wide panoramic composition'],
  [/ubah rasio menjadi 1:1/gi, 'aspect ratio 1:1 square framing'],
  [/ubah rasio/gi, 'change canvas aspect ratio'],
  [/resolusi tinggi/gi, 'high resolution, fine micro-details'],
  [/kualitas tinggi/gi, 'masterpiece quality, ultra-detailed'],
  [/anatomi tangan natural/gi, 'anatomically correct natural hands and fingers'],
  [/anatomi tangan/gi, 'natural hand anatomy'],
  [/memperluas foto/gi, 'outpaint and expand canvas seamlessly'],
  [/perluas gambar/gi, 'expand image canvas with harmonious environment'],
  [/dokter bedah sedang operasi di rumah sakit futuristik/gi, 'a skilled surgical doctor performing an operation inside a high-tech futuristic hospital'],
  [/dokter bedah/gi, 'a professional surgical doctor'],
  [/rumah sakit futuristik/gi, 'a futuristic high-tech hospital'],
  [/montok/gi, 'voluptuous curvy feminine figure'],

  // Subject descriptors
  [/seorang wanita muda/gi, 'a young woman'],
  [/seorang wanita dewasa/gi, 'an adult woman'],
  [/seorang wanita/gi, 'a woman'],
  [/wanita muda/gi, 'young woman'],
  [/wanita cantik/gi, 'beautiful woman'],
  [/wanita/gi, 'woman'],
  [/seorang pria muda/gi, 'a young man'],
  [/seorang pria dewasa/gi, 'an adult man'],
  [/seorang pria/gi, 'a man'],
  [/pria muda/gi, 'young man'],
  [/pria tampan/gi, 'handsome man'],
  [/pria/gi, 'man'],
  [/seorang gadis muda/gi, 'a young girl'],
  [/seorang gadis/gi, 'a girl'],
  [/gadis muda/gi, 'young girl'],
  [/gadis/gi, 'girl'],
  [/anak perempuan/gi, 'a young girl'],
  [/anak laki-laki/gi, 'a young boy'],
  [/anak-anak/gi, 'children'],

  // Appearance & Details
  [/dengan rambut hitam panjang/gi, 'with long dark hair'],
  [/dengan rambut panjang/gi, 'with long hair'],
  [/dengan rambut pendek/gi, 'with short hair'],
  [/dengan rambut pirang/gi, 'with blonde hair'],
  [/dengan rambut bergelombang/gi, 'with wavy hair'],
  [/dengan rambut keriting/gi, 'with curly textured hair'],
  [/rambut hitam/gi, 'dark hair'],
  [/rambut cokelat/gi, 'brown hair'],
  [/mata cokelat/gi, 'warm brown eyes'],
  [/kulit cerah/gi, 'fair radiant skin'],
  [/kulit sawo matang/gi, 'warm tan golden skin'],
  [/kulit halus/gi, 'smooth skin texture'],
  [/tekstur kulit/gi, 'natural skin microtexture'],
  [/senyum manis/gi, 'gentle charming smile'],
  [/tersenyum lembut/gi, 'softly smiling'],
  [/ekspresi tenang/gi, 'serene composed expression'],
  [/tatapan mata tajam/gi, 'focused engaging gaze'],
  [/detail fokus pada mata dan tekstur kertas buku/gi, 'focus detail on expressive eyes and tactile book paper texture'],
  [/fokus pada mata/gi, 'focused on the eyes'],
  [/tekstur kertas buku/gi, 'tactile book paper texture'],
  [/tekstur kertas/gi, 'paper texture'],

  // Attire & Clothing
  [/mengenakan hijab/gi, 'wearing a stylish hijab'],
  [/berhijab/gi, 'wearing an elegant hijab'],
  [/mengenakan jaket hoodie/gi, 'wearing a cozy oversized hoodie jacket'],
  [/mengenakan hoodie/gi, 'wearing a hoodie'],
  [/mengenakan kemeja/gi, 'wearing a crisp button-up shirt'],
  [/mengenakan kaos/gi, 'wearing a casual t-shirt'],
  [/mengenakan gaun/gi, 'wearing an elegant dress'],
  [/mengenakan jas/gi, 'wearing a tailored formal suit'],
  [/mengenakan celana jeans/gi, 'wearing denim jeans'],
  [/berpakaian santai/gi, 'dressed in casual attire'],
  [/berpakaian formal/gi, 'dressed in formal attire'],

  // Poses & Actions
  [/memegang buku/gi, 'holding a book'],
  [/memegang/gi, 'holding'],
  [/berjalan di/gi, 'walking through'],
  [/berjalan santai/gi, 'strolling gracefully'],
  [/berdiri di/gi, 'standing in'],
  [/berdiri tegak/gi, 'standing confidently'],
  [/duduk di/gi, 'sitting in'],
  [/duduk santai/gi, 'relaxing comfortably'],
  [/menatap kamera/gi, 'looking directly at the camera'],
  [/menoleh ke samping/gi, 'turning head slightly toward the side'],

  // Environments & Backgrounds
  [/di perpustakaan klasik/gi, 'in a classic vintage library'],
  [/di perpustakaan/gi, 'in a library'],
  [/perpustakaan klasik/gi, 'classic vintage library'],
  [/perpustakaan/gi, 'library'],
  [/buku/gi, 'book'],
  [/di taman bunga/gi, 'in a blooming flower garden'],
  [/taman bunga/gi, 'blooming flower garden'],
  [/di pantai saat senja/gi, 'on a scenic beach at golden hour sunset'],
  [/di pantai/gi, 'on a picturesque tropical beach'],
  [/di taman kota/gi, 'in a vibrant urban city park'],
  [/di taman/gi, 'in a lush garden park'],
  [/di jalanan kota/gi, 'on a busy modern city street'],
  [/di kafe/gi, 'in a cozy ambient cafe'],
  [/di studio foto/gi, 'in a minimalist photography studio'],
  [/di studio/gi, 'in a professional studio'],
  [/di kantor modern/gi, 'in a sleek contemporary office'],
  [/di alam terbuka/gi, 'in an expansive outdoor landscape'],
  [/saat senja/gi, 'during golden hour sunset'],
  [/saat malam hari/gi, 'at night with atmospheric city lights'],
  [/saat malam/gi, 'at night'],
  [/saat pagi hari/gi, 'in the fresh morning daylight'],
  [/saat siang hari/gi, 'under bright natural midday sun'],
  [/hujan gerimis/gi, 'soft gentle drizzle rain'],
  [/hujan/gi, 'rainy wet pavement atmosphere'],

  // Lighting & Camera
  [/pencahayaan alami/gi, 'natural daylight illumination'],
  [/pencahayaan studio/gi, 'professional studio key and fill lighting'],
  [/pencahayaan lembut/gi, 'soft diffused ambient lighting'],
  [/pencahayaan sinematik/gi, 'cinematic volumetric illumination'],
  [/cahaya keemasan/gi, 'warm golden hour glow'],
  [/latar belakang buram/gi, 'smooth creamy background bokeh'],
  [/latar belakang kabur/gi, 'shallow depth of field with soft bokeh'],
  [/sudut pandang sejajar mata/gi, 'eye-level camera angle'],
  [/sudut pandang rendah/gi, 'low-angle perspective'],
  [/sudut pandang tinggi/gi, 'high-angle perspective'],
  [/lensa potret 85mm/gi, '85mm portrait lens with f/1.4 aperture'],
  [/lensa sudut lebar/gi, 'wide-angle 24mm lens'],
  [/komposisi rule of thirds/gi, 'rule of thirds composition'],
  [/potret jarak dekat/gi, 'closeup intimate portrait'],
  [/potret setengah badan/gi, 'medium shot portrait'],
  [/seluruh badan/gi, 'full-length body shot']
];

/**
 * Menerjemahkan dan memformat prompt natural language pengguna menjadi
 * prompt Bahasa Inggris yang optimal untuk model generatif AI.
 * Mempertahankan seluruh shorthand dan Midjourney flags.
 */
export function toAiEnglishPrompt(rawText) {
  if (!rawText || typeof rawText !== 'string') return '';
  const trimmed = rawText.trim();
  if (!trimmed) return '';

  // 1. Ekstrak dan amankan shorthand (/code) dan flags (--flag val)
  const tokens = [];
  const placeholderPrefix = '___TOKEN_PH_';

  // Lindungi shorthand: misal /facelock, /portrait, /ar 16:9
  let text = trimmed.replace(/\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g, (match) => {
    const id = `${placeholderPrefix}SH_${tokens.length}___`;
    tokens.push({ id, original: match });
    return id;
  });

  // Lindungi parameter Midjourney: --ar 16:9, --style raw, --v 6.1, --no ...
  text = text.replace(/--([a-zA-Z0-9_\-]+)(?:\s+([^-\s][^-\n]*))?/g, (match) => {
    const id = `${placeholderPrefix}FLAG_${tokens.length}___`;
    tokens.push({ id, original: match });
    return id;
  });

  // 2. Jika teks diawali /imagine prompt:, lindungi prefix imagine
  let hasImaginePrefix = false;
  if (/^(\/imagine prompt:)/i.test(text)) {
    hasImaginePrefix = true;
    text = text.replace(/^(\/imagine prompt:\s*)/i, '');
  }

  // 3. Terapkan pemetaan frasa & kamus AI English
  for (const [regex, replacement] of PHRASE_DICTIONARY) {
    text = text.replace(regex, replacement);
  }

  // 4. Bersihkan sisa kata hubung / struktur bahasa Indonesia umum jika ada
  text = text
    .replace(/\bdengan tetap mempertahankan\b/gi, 'while strictly preserving')
    .replace(/\bdengan mempertahankan\b/gi, 'while preserving')
    .replace(/\btanpa perubahan atau penghapusan\b/gi, 'without modification or removal')
    .replace(/\btanpa mengubah\b/gi, 'without modifying')
    .replace(/\bserta terlibat dalam aktivitas\b/gi, 'and engaging in activities')
    .replace(/\bsesuai gambar unggahan\b/gi, 'harmonious with the source image')
    .replace(/\bsesuai gambar sumber\b/gi, 'harmonious with the source image')
    .replace(/\bdengan pakaian yang menyesuaikan\b/gi, 'with coordinating attire')
    .replace(/\bpakaian yang menyesuaikan\b/gi, 'coordinating attire')
    .replace(/\bdi luar subjek yang sudah ada\b/gi, 'alongside existing subjects')
    .replace(/\bsubjek manusia realistis\b/gi, 'a realistic human subject')
    .replace(/\bseluruh subjek dan karakter asli\b/gi, 'all original subjects and characters')
    .replace(/\bsubjek\/karakter asli\b/gi, 'original subjects and characters')
    .replace(/\blatar belakang menyesuaikan\b/gi, 'background harmonized with')
    .replace(/\bsesuaikan outfit dan warna\b/gi, 'harmonizing outfit styling and color palette')
    .replace(/\bagar harmonis dengan\b/gi, 'to harmonize with')
    .replace(/\bgambar unggahan\b/gi, 'uploaded source image')
    .replace(/\bgambar sumber\b/gi, 'source image')
    .replace(/\bsubjek baru\b/gi, 'a new subject')
    .replace(/\bsubjek adalah\b/gi, 'the subject is')
    .replace(/\bsubjek berupa\b/gi, 'the subject is')
    .replace(/\bdengan\b/gi, 'with')
    .replace(/\bdan\b/gi, 'and')
    .replace(/\bserta\b/gi, 'and')
    .replace(/\bdi\b/gi, 'in')
    .replace(/\bke\b/gi, 'to')
    .replace(/\bdari\b/gi, 'from')
    .replace(/\bpada\b/gi, 'on')
    .replace(/\byang\b/gi, 'that is')
    .replace(/\btetapi\b/gi, 'but')
    .replace(/\bnamun\b/gi, 'however');

  // Rapikan spasi ganda dan tanda baca ganjil
  text = text
    .replace(/\s+/g, ' ')
    .replace(/\s+,/g, ',')
    .replace(/\s+\./g, '.')
    .replace(/,\s*,/g, ',')
    .replace(/\.\s*\./g, '.')
    .trim();

  // 5. Kembalikan token shorthand dan flags
  for (const token of tokens) {
    text = text.replace(token.id, token.original);
  }

  // 6. Kembalikan prefix imagine jika ada
  if (hasImaginePrefix) {
    text = `/imagine prompt: ${text}`;
  }

  return text;
}

/**
 * Format konfigurasi 2 Dunia ke dalam bahasa Inggris alami untuk disematkan pada PROMPT OPTIMAL.
 */
export function formatTwoWorldsEnglishIntegration(twoWorldsConfig, visionData = null) {
  if (!twoWorldsConfig) return '';

  const {
    customRequest = '',
    gender = 'Auto',
    age = 'Auto',
    ethnicity = 'Auto',
    subjectStyle = 'Auto',
    customSubjectStyle = '',
    environmentStyle = 'Auto'
  } = twoWorldsConfig;

  const sections = [];

  // 1. Custom Request (diterjemahkan ke natural English)
  if (customRequest && customRequest.trim()) {
    const translatedReq = toAiEnglishPrompt(customRequest.trim());
    sections.push(`Additional Directive (Custom Request): ${translatedReq}`);
  }

  // 2. Karakteristik Demografis Subjek
  const isGenderExplicit = gender && !gender.toLowerCase().startsWith('auto');
  const isAgeExplicit = age && !age.toLowerCase().startsWith('auto');
  const isEthnicityExplicit = ethnicity && !ethnicity.toLowerCase().startsWith('auto');

  if (isGenderExplicit || isAgeExplicit || isEthnicityExplicit) {
    const charParts = [];

    if (isGenderExplicit) {
      const gLower = gender.toLowerCase().trim();
      const gEn = TWO_WORLDS_DEMOGRAPHICS_EN.gender[gLower] || gender;
      charParts.push(`Gender: ${gEn}`);
    }

    if (isAgeExplicit) {
      const ageNum = parseInt(age, 10);
      const aEn = !isNaN(ageNum) ? `${ageNum} years old` : age;
      charParts.push(`Age: ${aEn}`);
    }

    if (isEthnicityExplicit) {
      const eLower = ethnicity.toLowerCase().trim();
      const eEn = TWO_WORLDS_DEMOGRAPHICS_EN.ethnicity[eLower] || ethnicity;
      charParts.push(`Ethnicity: ${eEn}`);
    }

    sections.push(
      `Subject Character Parameters: ${charParts.join(', ')}. Applied explicitly, proportionally, and naturally to the requested/added character, while strictly preserving all original subjects and characters without alteration or removal.`
    );
  }

  // 3. Style Subjek
  const isSubjectStyleExplicit = subjectStyle && !subjectStyle.toLowerCase().startsWith('auto');
  if (isSubjectStyleExplicit) {
    const finalSubjectStyle = subjectStyle === 'Custom'
      ? (customSubjectStyle ? toAiEnglishPrompt(customSubjectStyle.trim()) : 'Custom Realistic')
      : subjectStyle;

    sections.push(
      `Subject Style: Visual rendering, materiality, skin microtexture, and clothing adopt a ${finalSubjectStyle} aesthetic, prioritizing natural anatomical fidelity, authentic microtextures, and directional illumination on the subject.`
    );
  }

  // 4. Environment Style
  const isEnvStyleExplicit = environmentStyle && !environmentStyle.toLowerCase().startsWith('auto');
  if (isEnvStyleExplicit) {
    sections.push(
      `Environment Style: World-building, background setting, atmosphere, environmental materials, and global illumination apply ${environmentStyle}. All original subject identity, facial features, age, physical proportions, and attire remain completely intact and undistorted by the environment style.`
    );
  }

  return sections.join('\n\n');
}

/**
 * Format direktif non-destruktif Image Repair ke dalam bahasa Inggris alami.
 */
export function formatImageRepairEnglishDirective(userNotes = '') {
  let base = 'Apply comprehensive photographic restoration: recover shadow details, suppress highlight blowout, normalize contrast and color balance, and preserve fine microtextures and natural skin details without overprocessing.';
  if (userNotes && userNotes.trim()) {
    const translatedNotes = toAiEnglishPrompt(userNotes.trim());
    return `${base} User specific adjustment target: ${translatedNotes}.`;
  }
  return base;
}
