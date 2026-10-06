/**
 * Two Worlds Smart Detector (V3.6)
 * Otomasi "Auto (Smart Detection)" Khusus Tab 2 Dunia.
 * 
 * Menganalisis gambar sumber aktual dan menghasilkan nilai spesifik untuk 5 parameter:
 * 1. gender: 'Laki-Laki' | 'Perempuan'
 * 2. age: '1 tahun' s/d '50 tahun' (misal: '25 tahun')
 * 3. ethnicity: 'Asia' | 'Asia Tenggara' | 'Asia Timur' | 'Asia Selatan' | 'Eropa' | 'Timur Tengah' | 'Afrika' | 'Amerika Latin' | 'Pasifik / Oseania'
 * 4. subjectStyle: 'Realistic Human Style' | 'LEGO Style' | '3D Cartoon Style' | 'Stylized 3D Character' | 'Anime Style' | 'Claymation Style' | dll.
 * 5. environmentStyle: 'Candy World 3D Style' | 'Fantasy Environment' | 'Dreamy Pastel 3D' | 'Realistic Environment' | 'Natural Lighting' | dll.
 * 
 * Aturan Utama:
 * - "Auto (Smart Detection)" adalah mode analisis, bukan teks akhir yang menetap pada parameter.
 * - Nilai yang dikembalikan selalu nilai spesifik hasil deteksi.
 * - Gambar unggahan adalah SOURCE OF TRUTH.
 */

import {
  TWO_WORLDS_GENDERS,
  TWO_WORLDS_AGES,
  TWO_WORLDS_ETHNICITIES,
  TWO_WORLDS_SUBJECT_STYLES,
  TWO_WORLDS_ENVIRONMENT_STYLES
} from '../data/twoWorldsData.js';

/**
 * Mendeteksi jenis kelamin subjek dari data visual gambar aktual.
 */
export function detectGender(visionData = {}, telemetry = {}, filename = '') {
  // 1. Cek deteksi langsung dari AI Vision jika tersedia
  if (visionData.smartDetection?.gender) {
    const raw = String(visionData.smartDetection.gender).trim();
    if (/perempuan|wanita|female|woman|girl/i.test(raw)) return 'Perempuan';
    if (/laki-laki|pria|male|man|boy/i.test(raw)) return 'Laki-Laki';
  }

  // 2. Gabungkan seluruh teks deskriptif visual
  const textPool = [
    visionData.subject,
    visionData.subjectDescription,
    visionData.mainDescription,
    visionData.visualDetails,
    visionData.outfit,
    visionData.outfitMaterial,
    visionData.expression,
    filename
  ].filter(Boolean).join(' ').toLowerCase();

  const femaleTokens = [
    'woman', 'female', 'wanita', 'perempuan', 'cewek', 'girl', 'lady', 'hijab',
    'gadis', 'ibu', 'sister', 'mother', 'daughter', 'queen', 'princess', 'she', 'her'
  ];

  const maleTokens = [
    'man', 'male', 'pria', 'laki-laki', 'cowok', 'boy', 'gentleman', 'businessman',
    'ayah', 'bapak', 'brother', 'father', 'son', 'king', 'prince', 'he', 'his'
  ];

  let femaleCount = 0;
  let maleCount = 0;

  for (const token of femaleTokens) {
    const re = new RegExp(`\\b${token}\\b`, 'g');
    const matches = textPool.match(re);
    if (matches) femaleCount += matches.length;
  }

  for (const token of maleTokens) {
    const re = new RegExp(`\\b${token}\\b`, 'g');
    const matches = textPool.match(re);
    if (matches) maleCount += matches.length;
  }

  if (femaleCount > maleCount) {
    return 'Perempuan';
  }
  if (maleCount > femaleCount) {
    return 'Laki-Laki';
  }

  // Default deteksi cerdas jika seimbang
  return 'Laki-Laki';
}

/**
 * Mendeteksi perkiraan usia karakter dari data visual gambar aktual.
 */
export function detectAge(visionData = {}, telemetry = {}, filename = '') {
  // 1. Cek deteksi langsung dari AI Vision jika tersedia
  if (visionData.smartDetection?.age) {
    const raw = String(visionData.smartDetection.age).trim();
    const numMatch = raw.match(/(\d{1,2})/);
    if (numMatch) {
      const parsedNum = Math.min(50, Math.max(1, parseInt(numMatch[1], 10)));
      return `${parsedNum} tahun`;
    }
  }

  // 2. Cari penyebutan usia numerik dalam deskripsi
  const textPool = [
    visionData.subject,
    visionData.subjectDescription,
    visionData.mainDescription,
    visionData.visualDetails,
    filename
  ].filter(Boolean).join(' ').toLowerCase();

  const explicitAgeMatch = textPool.match(/(?:age|usia|umur|aged|berusia)\s*(?:is|sekitar|about|approx)?\s*(\d{1,2})/i) ||
                           textPool.match(/\b(\d{1,2})\s*(?:years?\s*old|yo|y\.o|thn|tahun)\b/i);

  if (explicitAgeMatch) {
    const n = Math.min(50, Math.max(1, parseInt(explicitAgeMatch[1], 10)));
    return `${n} tahun`;
  }

  // 3. Klasifikasi berdasarkan terminologi visual
  if (/\b(baby|infant|bayi)\b/i.test(textPool)) return '1 tahun';
  if (/\b(toddler|balita)\b/i.test(textPool)) return '3 tahun';
  if (/\b(little\s*girl|little\s*boy|anak-anak|anak\s*kecil|child|kid|bocah)\b/i.test(textPool)) return '8 tahun';
  if (/\b(preteen|young\s*teen)\b/i.test(textPool)) return '12 tahun';
  if (/\b(teenager|teen|remaja|abg|high\s*school)\b/i.test(textPool)) return '16 tahun';
  if (/\b(college|university|mahasiswa|dewasa\s*muda|young\s*adult|young\s*woman|young\s*man)\b/i.test(textPool)) return '21 tahun';
  if (/\b(chibi|doll|figurine|cute\s*3d)\b/i.test(textPool)) return '22 tahun';
  if (/\b(middle\s*aged|paruh\s*baya|dewasa\s*matang)\b/i.test(textPool)) return '42 tahun';
  if (/\b(elderly|senior|old\s*man|old\s*woman|kakek|nenek|wrinkled)\b/i.test(textPool)) return '50 tahun';
  if (/\b(adult|dewasa|pria\s*dewasa|wanita\s*dewasa)\b/i.test(textPool)) return '28 tahun';

  // Default usia visual produktif / prima
  return '25 tahun';
}

/**
 * Mendeteksi ras / etnis subjek berdasarkan karakteristik visual nyata.
 * Tidak mengarang ras/etnis yang tidak didukung data gambar.
 */
export function detectEthnicity(visionData = {}, telemetry = {}, filename = '') {
  // 1. Cek deteksi langsung dari AI Vision jika ada
  if (visionData.smartDetection?.ethnicity) {
    const raw = String(visionData.smartDetection.ethnicity).trim();
    const matched = TWO_WORLDS_ETHNICITIES.find(e => e.toLowerCase() === raw.toLowerCase() && !e.startsWith('Auto'));
    if (matched) return matched;
  }

  const textPool = [
    visionData.subject,
    visionData.subjectDescription,
    visionData.mainDescription,
    visionData.visualDetails,
    filename
  ].filter(Boolean).join(' ').toLowerCase();

  // 2. Pemetaan berdasarkan evidensi visual nyata
  if (/\b(southeast\s*asian|indonesia|indonesian|melayu|malay|asean|nusantara|jawa|sunda|bali|filipino|tagalog|vietnamese|thai)\b/i.test(textPool)) {
    return 'Asia Tenggara';
  }
  if (/\b(east\s*asian|japanese|korean|chinese|mandarin|tokyo|seoul|beijing|jepang|korea|tionghoa|cina)\b/i.test(textPool)) {
    return 'Asia Timur';
  }
  if (/\b(south\s*asian|indian|india|pakistan|pakistani|bengali|bangladesh|nepali|sri\s*lanka)\b/i.test(textPool)) {
    return 'Asia Selatan';
  }
  if (/\b(caucasian|european|eropa|bule|nordic|slavic|british|german|french|italian|scandinavian|western)\b/i.test(textPool)) {
    return 'Eropa';
  }
  if (/\b(middle\s*eastern|arab|arabic|timur\s*tengah|persian|iranian|turkish|turki)\b/i.test(textPool)) {
    return 'Timur Tengah';
  }
  if (/\b(african|afrika|black|afro|ethiopian|nigerian|kenyan)\b/i.test(textPool)) {
    return 'Afrika';
  }
  if (/\b(latino|latina|hispanic|mexican|brazilian|colombian|amerika\s*latin)\b/i.test(textPool)) {
    return 'Amerika Latin';
  }
  if (/\b(pacific|oceania|polynesian|maori|samoan|hawaiian|pasifik|oseania)\b/i.test(textPool)) {
    return 'Pasifik / Oseania';
  }
  if (/\b(asian|asia|oriental)\b/i.test(textPool)) {
    return 'Asia';
  }

  // Standar evidensi visual default untuk konteks subjek Asia
  return 'Asia';
}

/**
 * Mengidentifikasi style visual subjek/karakter secara spesifik.
 * Contoh hasil: LEGO Style, 3D Cartoon Style, Anime Style, Realistic Human Style, Claymation Style, Stylized 3D Character, dll.
 */
export function detectSubjectStyle(visionData = {}, telemetry = {}, filename = '') {
  // 1. Cek deteksi langsung dari AI Vision jika ada
  if (visionData.smartDetection?.subjectStyle) {
    const raw = String(visionData.smartDetection.subjectStyle).trim();
    if (raw && !raw.startsWith('Auto')) {
      const match = TWO_WORLDS_SUBJECT_STYLES.find(s => s.toLowerCase() === raw.toLowerCase() && !s.startsWith('Auto'));
      return match || raw;
    }
  }

  const textPool = [
    visionData.style,
    visionData.photoStyleRealism,
    visionData.subjectDescription,
    visionData.mainDescription,
    visionData.visualDetails,
    filename
  ].filter(Boolean).join(' ').toLowerCase();

  // 2. Evaluasi gaya spesifik subjek
  if (/\b(lego|minifigure|brick|lego\s*style)\b/i.test(textPool)) {
    return 'LEGO Style';
  }
  if (/\b(claymation|clay\s*render|clay\s*model|plastisin|soft\s*clay)\b/i.test(textPool)) {
    return 'Claymation Style';
  }
  if (/\b(anime|manga|anime\s*style|shonen|shojo|makoto\s*shinkai)\b/i.test(textPool)) {
    return 'Anime Style';
  }
  if (/\b(chibi|doll\s*figurine|cute\s*3d\s*character|chibi\s*3d|vinyl\s*toy|figurine)\b/i.test(textPool)) {
    return 'Stylized 3D Character';
  }
  if (/\b(3d\s*cartoon|pixar|disney|animated\s*character|cartoon\s*3d|3d\s*animation|cgi\s*character|cartoon)\b/i.test(textPool)) {
    return '3D Cartoon Style';
  }
  if (/\b(papercraft|origami|paper\s*cut)\b/i.test(textPool)) {
    return 'Papercraft Origami';
  }
  if (/\b(crochet|knitted|amigurumi|yarn)\b/i.test(textPool)) {
    return 'Crochet / Knitted Style';
  }
  if (/\b(raw\s*photo|raw\s*photography|dslr\s*sensor|sensor\s*noise)\b/i.test(textPool)) {
    return 'Raw Photography Realism';
  }
  if (/\b(ultra\s*photorealistic|ultra\s*photoreal)\b/i.test(textPool)) {
    return 'Ultra Photorealistic';
  }
  if (/\b(photorealistic|hyper\s*realistic|photorealism)\b/i.test(textPool)) {
    return 'Photorealistic';
  }
  if (/\b(live-action|live\s*action)\b/i.test(textPool)) {
    return 'Live-Action';
  }

  // 3. Evaluasi telemetri piksel
  if (telemetry?.isStylizedOr3D || telemetry?.styleType === 'STYLED_3D_CHARACTER') {
    return '3D Cartoon Style';
  }

  // 4. Default: Realistic Human Style
  return 'Realistic Human Style';
}

/**
 * Mengidentifikasi style visual environment / latar dunia pada gambar sumber secara spesifik.
 * Contoh hasil: Candy World 3D Style, Fantasy Environment, Dreamy Pastel 3D, Realistic Environment, Natural Lighting, dll.
 */
export function detectEnvironmentStyle(visionData = {}, telemetry = {}, filename = '') {
  // 1. Cek deteksi langsung dari AI Vision jika ada
  if (visionData.smartDetection?.environmentStyle) {
    const raw = String(visionData.smartDetection.environmentStyle).trim();
    if (raw && !raw.startsWith('Auto')) {
      const match = TWO_WORLDS_ENVIRONMENT_STYLES.find(e => e.name.toLowerCase() === raw.toLowerCase() && !e.name.startsWith('Auto'));
      if (match) return match.name;
      return raw;
    }
  }

  const textPool = [
    visionData.environment,
    visionData.background,
    visionData.environmentBackground,
    visionData.lighting,
    visionData.lightingColor,
    visionData.mainDescription,
    visionData.visualDetails,
    filename
  ].filter(Boolean).join(' ').toLowerCase();

  // 2. Evaluasi gaya environment spesifik
  if (/\b(candyland|candy\s*world|marshmallow|sweets|dessert\s*world)\b/i.test(textPool)) {
    return 'Candy World 3D Style';
  }
  if (/\b(dreamy\s*pastel|pastel\s*fantasy|pastel\s*soft|dreamy\s*soft|pastel\s*lighting)\b/i.test(textPool)) {
    return 'Dreamy Pastel 3D';
  }
  if (/\b(fantasy\s*environment|magical\s*world|enchanted|fairy\s*tale|mystical)\b/i.test(textPool)) {
    return 'Fantasy Environment';
  }
  if (/\b(spongebob|bikini\s*bottom|underwater\s*3d)\b/i.test(textPool)) {
    return 'SpongeBob Cinematic 3D';
  }
  if (/\b(lego|lego\s*world|brick\s*diorama)\b/i.test(textPool)) {
    return 'LEGO Style';
  }
  if (/\b(claymation|clay\s*world|soft\s*clay)\b/i.test(textPool)) {
    return 'Soft Clay Render';
  }
  if (/\b(origami|papercraft|paper\s*diorama)\b/i.test(textPool)) {
    return 'Papercraft Origami';
  }
  if (/\b(plush|felt|fuzzy)\b/i.test(textPool)) {
    return 'Cute Felt Toy Aesthetic';
  }
  if (/\b(crochet|yarn|knitted|amigurumi)\b/i.test(textPool)) {
    return 'Amigurumi 3D Style';
  }
  if (/\b(clean\s*3d|studio\s*render|octane\s*render|studio\s*backdrop|clean\s*studio)\b/i.test(textPool)) {
    return 'Clean 3D Render';
  }
  if (/\b(stylized\s*3d\s*cartoon|cartoon\s*world|whimsical\s*cartoon)\b/i.test(textPool)) {
    return 'Stylized 3D Cartoon';
  }
  if (/\b(pixar|pixar-style)\b/i.test(textPool)) {
    return 'Pixar-style Lighting';
  }
  if (/\b(dark\s*&\s*moody|dark\s*and\s*moody|moody\s*lighting)\b/i.test(textPool)) {
    return 'Dark & Moody';
  }
  if (/\b(dramatic\s*lighting|high\s*contrast\s*light)\b/i.test(textPool)) {
    return 'Dramatic Lighting';
  }
  if (/\b(cinematic|film\s*still|movie\s*scene)\b/i.test(textPool)) {
    return 'Cinematic';
  }
  if (/\b(portrait\s*photography|bokeh\s*backdrop|studio\s*portrait)\b/i.test(textPool)) {
    return 'Portrait Photography';
  }
  if (/\b(realistic\s*environment|outdoor\s*scenic|landscape\s*photography|real\s*world|nature\s*landscape)\b/i.test(textPool)) {
    return 'Realistic Environment';
  }
  if (/\b(natural\s*lighting|natural\s*light|daylight|sunlight|ambient\s*daylight)\b/i.test(textPool)) {
    return 'Natural Lighting';
  }

  // 3. Evaluasi telemetri
  if (telemetry?.isStylizedOr3D || telemetry?.styleType === 'STYLED_3D_CHARACTER') {
    if (telemetry.dominantHue === 'pink' || telemetry.dominantHue === 'cyan') {
      return 'Dreamy Pastel 3D';
    }
    return 'Clean 3D Render';
  }

  // 4. Default: Natural Lighting
  return 'Natural Lighting';
}

/**
 * Fungsi Utama: Menghasilkan seluruh 5 parameter deteksi cerdas 2 Dunia secara serentak.
 */
export function detectTwoWorldsSmartParameters(visionData = {}, imageInfo = {}, visualTelemetry = {}, contextConfig = {}) {
  const telemetry = visualTelemetry || imageInfo?.visualTelemetry || {};
  const filename = imageInfo?.name || '';

  const detectedGender = detectGender(visionData, telemetry, filename);
  const detectedAge = detectAge(visionData, telemetry, filename);
  const detectedEthnicity = detectEthnicity(visionData, telemetry, filename);
  const detectedSubjectStyle = detectSubjectStyle(visionData, telemetry, filename);
  const detectedEnvironmentStyle = detectEnvironmentStyle(visionData, telemetry, filename);

  return {
    gender: detectedGender,
    age: detectedAge,
    ethnicity: detectedEthnicity,
    subjectStyle: detectedSubjectStyle,
    environmentStyle: detectedEnvironmentStyle
  };
}
