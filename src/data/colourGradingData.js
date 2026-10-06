/**
 * Data Definition & Helper Functions Khusus Fitur "🎨 COLOUR GRADING" (V3.6)
 * 
 * Prinsip Utama:
 * 1. AI Color Grading / AI Image Enhancement adaptif, non-destructive, berbasis FOTO ASLI.
 * 2. BUKAN IMAGE REGENERATION.
 * 3. Menjaga 100% integritas Subjek, Wajah, Identitas, Pakaian, Rambut, Pose, Objek,
 *    Latar Belakang, Geometri, Komposisi, dan Perspektif.
 * 4. Memengaruhi karakteristik WARNA + TONAL semata.
 * 5. Scope-locked: HANYA digunakan pada tab "🎨 COLOUR GRADING".
 */

export const COLOUR_GRADING_MODES = [
  {
    id: 'AUTO',
    label: '✨ Auto (Adaptive AI)',
    description: 'AI menganalisis foto secara individual, mendeteksi exposure, dynamic range, white balance, skin tone, dan menentukan treatment warna paling optimal.'
  },
  {
    id: 'SELECT_STYLE',
    label: '🎯 Select Style (Target Visual)',
    description: 'Pilih arah visual / style kurasi. AI menghitung penyesuaian tonal & warna secara adaptif per-foto agar selaras dengan target style.'
  },
  {
    id: 'CUSTOM_STYLE',
    label: '⚙️ Custom Style (Parameter Pengguna)',
    description: 'Atur warmth, tint, contrast, highlights, shadows, vibrance, dan tone bayangan/highlight secara presisi dengan koreksi adaptif AI.'
  }
];

COLOUR_GRADING_MODES.AUTO = 'AUTO';
COLOUR_GRADING_MODES.SELECT_STYLE = 'SELECT_STYLE';
COLOUR_GRADING_MODES.CUSTOM_STYLE = 'CUSTOM_STYLE';

export const COLOUR_GRADING_CATEGORIES = [
  {
    category: 'NATURAL / REALISTIC',
    icon: '🌿',
    styles: [
      { name: 'Natural Vibrant', description: 'Warna natural tetapi lebih hidup dan segar, dengan vibrance terarah dan color separation yang tetap realistis tanpa oversaturation.' },
      { name: 'Natural Clean', description: 'Tampilan bersih, seimbang, dan realistis dengan white balance netral, contrast moderat, dan warna yang natural.' },
      { name: 'Natural DSLR', description: 'Karakter foto DSLR modern dengan tonal kaya, detail natural, warna realistis, depth yang baik, dan highlight terkontrol.' },
      { name: 'Natural Film', description: 'Tampilan natural dengan sentuhan film ringan, tonal lembut, highlight smooth, dan saturation terkontrol.' },
      { name: 'True to Life', description: 'Memprioritaskan reproduksi warna yang paling mendekati kondisi asli dengan koreksi minimal dan akurat.' },
      { name: 'Soft Natural', description: 'Tampilan natural yang lembut dengan contrast rendah hingga sedang, highlight halus, shadow tidak terlalu dalam, dan warna yang nyaman.' }
    ]
  },
  {
    category: 'WARM / BRIGHT',
    icon: '☀️',
    styles: [
      { name: 'Warm Cinematic', description: 'Nuansa hangat dan cinematic dengan highlight warm, shadow sedikit lebih dalam, dan color separation elegan.' },
      { name: 'Golden Hour', description: 'Karakter cahaya keemasan seperti golden hour dengan warmth adaptif, highlight keemasan, dan tonal hangat yang natural.' },
      { name: 'Sun-Kissed', description: 'Kesan terkena cahaya matahari lembut dengan warmth ringan, highlight bercahaya, dan skin tone tetap natural.' },
      { name: 'Bright & Airy', description: 'Tampilan terang, ringan, bersih, dan airy dengan shadow terangkat, contrast lembut, dan highlight tetap terkendali.' },
      { name: 'Warm Lifestyle', description: 'Tampilan hangat, ramah, dan natural untuk foto lifestyle dengan warmth moderat dan warna kulit yang nyaman.' },
      { name: 'Soft Golden', description: 'Nuansa keemasan yang lembut dengan highlight warm dan contrast rendah hingga sedang.' }
    ]
  },
  {
    category: 'CINEMATIC',
    icon: '🎬',
    styles: [
      { name: 'Moody Cinematic', description: 'Atmosfer cinematic yang lebih dalam dengan shadow kaya, contrast terkontrol, saturation sedikit lebih tenang, dan mood dramatis.' },
      { name: 'Modern Cinematic', description: 'Cinematic modern dengan tonal bersih, contrast elegan, warna terkontrol, dan color separation halus.' },
      { name: 'Teal & Orange Cinematic', description: 'Separation cyan/teal pada area cool dan orange pada area warm secara selektif dengan perlindungan warna kulit.' },
      { name: 'Cinematic Contrast', description: 'Menonjolkan depth melalui contrast lebih kuat, black lebih tegas, dan highlight tetap terjaga.' },
      { name: 'Dark Cinematic', description: 'Cinematic dengan overall exposure dan shadow lebih rendah namun tetap mempertahankan detail penting pada area gelap.' },
      { name: 'Soft Cinematic', description: 'Cinematic yang halus dengan contrast lembut, highlight smooth, shadow tidak crushed, dan warna tetap realistis.' }
    ]
  },
  {
    category: 'VIBRANT / COLORFUL',
    icon: '🌈',
    styles: [
      { name: 'Vivid Color', description: 'Meningkatkan vibrance dan saturation secara selektif untuk warna yang lebih hidup tanpa oversaturation.' },
      { name: 'Rich Color', description: 'Memberikan warna yang lebih kaya, dalam, dan memiliki depth dengan saturation yang dikontrol adaptif.' },
      { name: 'Color Pop', description: 'Menonjolkan warna utama secara selektif sambil menjaga warna lain tetap seimbang.' },
      { name: 'Fresh Vibrant', description: 'Tampilan segar, cerah, youthful, dan colorful dengan fokus pada vibrance dan clean color separation.' },
      { name: 'Deep Color', description: 'Menghasilkan warna lebih pekat dan kaya dengan tonal depth lebih kuat tanpa membuat warna terlihat neon.' }
    ]
  },
  {
    category: 'CLEAN / MODERN',
    icon: '✨',
    styles: [
      { name: 'Clean & Fresh', description: 'Warna bersih, segar, netral, dan modern dengan contrast moderat serta saturation terkontrol.' },
      { name: 'Modern Clean', description: 'Tampilan modern dan polished dengan white balance akurat, tonal rapi, dan warna tidak berlebihan.' },
      { name: 'Crisp Detail', description: 'Menonjolkan struktur tonal, local contrast, dan detail secara ringan tanpa menghasilkan sharpening berlebihan.' },
      { name: 'High Key Clean', description: 'Tampilan dominan terang dengan shadow ringan, highlight bersih, dan contrast rendah hingga sedang.' },
      { name: 'Minimal Neutral', description: 'Color grading sangat minimal dengan warna netral dan tonal natural untuk hasil profesional dan understated.' }
    ]
  },
  {
    category: 'FILM / ARTISTIC',
    icon: '🎞️',
    styles: [
      { name: 'Film Look', description: 'Karakter film halus melalui tonal curve lembut, highlight roll-off, saturation terkontrol, dan color palette harmonis.' },
      { name: 'Vintage Film', description: 'Nuansa film vintage dengan warna sedikit muted, contrast lembut, dan karakter warm/faded yang tetap mempertahankan detail.' },
      { name: 'Analog Film', description: 'Karakter analog dengan tonal lembut, color response organik, saturation moderat, dan warna yang tidak terlalu digital.' },
      { name: 'Pastel Film', description: 'Warna lebih lembut dan pastel dengan saturation lebih rendah, highlight airy, dan contrast ringan.' },
      { name: 'Faded Film', description: 'Efek faded dengan black sedikit terangkat, contrast lembut, dan warna sedikit desaturated.' },
      { name: 'Retro Color', description: 'Color palette bernuansa retro dengan karakter warna klasik tetap mempertahankan tonal dan detail foto.' }
    ]
  },
  {
    category: 'DRAMATIC',
    icon: '🎭',
    styles: [
      { name: 'Dark & Moody', description: 'Nuansa gelap, atmospheric, dan emosional dengan shadow lebih dalam serta warna yang lebih subdued.' },
      { name: 'Dramatic Contrast', description: 'Menonjolkan perbedaan terang dan gelap dengan contrast kuat namun tetap menjaga highlight dan shadow penting.' },
      { name: 'Deep Shadow', description: 'Memprioritaskan depth melalui shadow lebih kaya dan pekat tanpa crushing detail penting.' },
      { name: 'Low Key Cinematic', description: 'Overall image lebih gelap dengan fokus cahaya pada area utama, shadow dalam, dan karakter cinematic yang kuat.' }
    ]
  }
];

export const ALL_COLOUR_GRADING_STYLES = [
  ...COLOUR_GRADING_CATEGORIES.flatMap(cat => 
    cat.styles.map(s => ({ ...s, category: cat.category, categoryIcon: cat.icon }))
  ),
  { 
    name: 'Custom Style', 
    description: 'Style yang ditentukan pengguna melalui parameter color grading dengan adaptive correction berdasarkan kondisi masing-masing foto.', 
    category: 'CUSTOM', 
    categoryIcon: '⚙️' 
  }
];

export const INTENSITY_LEVELS = [
  { value: 0, label: '0% — Original', description: 'Tampilan foto asli tanpa grading' },
  { value: 25, label: '25% — Very Subtle', description: 'Sentuhan sangat halus dan tipis' },
  { value: 50, label: '50% — Balanced (Default)', description: 'Keseimbangan optimal antara gaya & kealamian foto' },
  { value: 75, label: '75% — Strong', description: 'Karakter style tegas dan terasa' },
  { value: 100, label: '100% — Full Style', description: 'Penerapan style penuh dengan proteksi batas' }
];

export const DEFAULT_COLOUR_GRADING_CONFIG = {
  mode: 'AUTO', // 'AUTO' | 'SELECT_STYLE' | 'CUSTOM_STYLE'
  selectedStyle: 'Natural Vibrant',
  intensity: 50, // 0 to 100 (Default 50%)
  
  // Intelligent Protections (Semua aktif secara default untuk keamanan visual foto asli)
  protections: {
    highlightProtection: true,
    shadowProtection: true,
    skinToneProtection: true,
    oversaturationProtection: true,
    clippingProtection: true,
    naturalColorProtection: true
  },

  // Custom Style Parameters (-100 to +100)
  custom: {
    warmth: 0,
    tint: 0,
    contrast: 0,
    highlights: 0,
    shadows: 0,
    saturation: 0,
    vibrance: 0,
    clarity: 0,
    colorIntensity: 0,
    shadowTone: 'Neutral',     // 'Neutral' | 'Cool Blue' | 'Deep Teal' | 'Warm Amber' | 'Slate Gray'
    highlightTone: 'Neutral'  // 'Neutral' | 'Soft Gold' | 'Clean White' | 'Warm Amber' | 'Soft Rose'
  }
};

export const SHADOW_TONE_OPTIONS = [
  { label: 'Neutral (Alami)', value: 'Neutral', color: '#64748b' },
  { label: 'Cool Blue (Sinematik Dingin)', value: 'Cool Blue', color: '#38bdf8' },
  { label: 'Deep Teal (Teal & Orange)', value: 'Deep Teal', color: '#14b8a6' },
  { label: 'Warm Amber (Keemasan Hangat)', value: 'Warm Amber', color: '#f59e0b' },
  { label: 'Slate Gray (Matte Film)', value: 'Slate Gray', color: '#94a3b8' }
];

export const HIGHLIGHT_TONE_OPTIONS = [
  { label: 'Neutral (Alami)', value: 'Neutral', color: '#e2e8f0' },
  { label: 'Soft Gold (Golden Hour)', value: 'Soft Gold', color: '#fde047' },
  { label: 'Clean White (Modern Airy)', value: 'Clean White', color: '#ffffff' },
  { label: 'Warm Amber (Sunset Warmth)', value: 'Warm Amber', color: '#fb923c' },
  { label: 'Soft Rose (Pastel Aesthetic)', value: 'Soft Rose', color: '#f472b6' }
];

/**
 * Membangun klausul direktif AI Color Grading adaptif non-destruktif
 * untuk disematkan pada PROMPT OPTIMAL tab "🎨 COLOUR GRADING".
 */
export function buildColourGradingDirectives(config = DEFAULT_COLOUR_GRADING_CONFIG, telemetry = null) {
  const cfg = { ...DEFAULT_COLOUR_GRADING_CONFIG, ...config };
  const mode = cfg.mode || 'AUTO';
  const intensity = typeof cfg.intensity === 'number' ? cfg.intensity : 50;

  const clauses = [];

  // 1. Strict Source Image Protection Header (NON-GENERATIVE)
  clauses.push(
    `STRICT PRESERVATION DIRECTIVE (FOTO ORIGINAL ADALAH SOURCE OF TRUTH): ` +
    `DO NOT regenerate the image (DILARANG melakukan regenerasi citra atau generative fill). ` +
    `DO NOT alter subject identity, facial features, or body structure (DILARANG mengubah wajah, identitas, proporsi tubuh, pakaian, rambut, pose, objek, atau komposisi). ` +
    `Retain original source image geometry and perspective. Apply NON-DESTRUCTIVE AI COLOR GRADING and TONAL ENHANCEMENT ONLY.`
  );

  // 2. Mode & Style Target
  if (mode === 'AUTO') {
    clauses.push(
      `COLOUR GRADING MODE: AUTO ADAPTIVE AI. ` +
      `Individually assess the source photo's dynamic range, exposure, highlight roll-off, shadow depth, white balance, and skin tone. ` +
      `Apply intelligent, adaptive, photo-specific color correction and tonal harmonization tailored to this individual image's characteristics. Intensity: ${intensity}%.`
    );
  } else if (mode === 'SELECT_STYLE') {
    const styleObj = ALL_COLOUR_GRADING_STYLES.find(s => s.name === cfg.selectedStyle) || { name: cfg.selectedStyle, description: 'Visual style direction' };
    clauses.push(
      `COLOUR GRADING STYLE TARGET: "${styleObj.name}" (${styleObj.category}). ` +
      `Description: ${styleObj.description}. ` +
      `Adaptive execution: Use this style as a visual target/color direction. Calculate per-photo adaptive adjustments rather than static numeric presets. ` +
      `Intensity: ${intensity}%.`
    );
  } else if (mode === 'CUSTOM_STYLE') {
    const c = cfg.custom || {};
    clauses.push(
      `COLOUR GRADING CUSTOM SPECIFICATION: ` +
      `Warmth: ${c.warmth > 0 ? '+' : ''}${c.warmth}, ` +
      `Tint: ${c.tint > 0 ? '+' : ''}${c.tint}, ` +
      `Contrast: ${c.contrast > 0 ? '+' : ''}${c.contrast}, ` +
      `Highlights: ${c.highlights > 0 ? '+' : ''}${c.highlights}, ` +
      `Shadows: ${c.shadows > 0 ? '+' : ''}${c.shadows}, ` +
      `Vibrance: ${c.vibrance > 0 ? '+' : ''}${c.vibrance}, ` +
      `Saturation: ${c.saturation > 0 ? '+' : ''}${c.saturation}, ` +
      `Clarity: ${c.clarity > 0 ? '+' : ''}${c.clarity}, ` +
      `Shadow Tone: ${c.shadowTone || 'Neutral'}, ` +
      `Highlight Tone: ${c.highlightTone || 'Neutral'}. ` +
      `AI Adaptive Correction: Balance custom adjustments against the actual image telemetry. Intensity: ${intensity}%.`
    );
  }

  // 3. Intelligent Protections
  const p = cfg.protections || {};
  const activeProtections = [];
  if (p.skinToneProtection !== false) activeProtections.push('Natural Skin Tone Protection (prioritize healthy, authentic skin tones; strictly prevent unnatural orange/red/magenta/gray casts)');
  if (p.highlightProtection !== false) activeProtections.push('Highlight Protection (prevent blown-out clipping, preserve highlight texture and roll-off)');
  if (p.shadowProtection !== false) activeProtections.push('Shadow Protection (prevent crushed blacks, preserve low-end shadow detail)');
  if (p.oversaturationProtection !== false) activeProtections.push('Oversaturation & Gamut Protection (maintain natural color boundaries)');
  if (p.clippingProtection !== false) activeProtections.push('Dynamic Range Clipping Protection (keep RGB channels within broadcast-safe gamut)');
  if (p.naturalColorProtection !== false) activeProtections.push('Natural Color Harmony (preserve realism of sky, foliage, and environmental textures)');

  if (activeProtections.length > 0) {
    clauses.push(`INTELLIGENT PROTECTIONS ACTIVE: ${activeProtections.join('; ')}.`);
  }

  // 4. Natural Result Priority
  clauses.push(
    `EXECUTION PRIORITY: NATURAL RESULT > STYLE ACCURACY > STRONG EFFECT. ` +
    `If the original photo already has optimal exposure or color, apply minimal fine-tuning. If heavily skewed, apply measured adaptive correction without artificial grading artifacts.`
  );

  return clauses.join('\n\n');
}
