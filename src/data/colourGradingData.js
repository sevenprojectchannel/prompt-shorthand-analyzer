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
      { name: 'Natural Vibrant', description: 'Warna hidup dan segar namun tetap natural, saturasi terarah tanpa oversaturasi.' },
      { name: 'Natural Clean', description: 'Tonal bersih, neutral white balance, kejernihan alami tanpa color cast.' },
      { name: 'Natural DSLR', description: 'Karakter sensor kamera DSLR profesional, dynamic range seimbang, gradasi halus.' },
      { name: 'Natural Film', description: 'Sentuhan tone film alami dengan roll-off highlight lembut dan kontras organik.' },
      { name: 'True to Life', description: 'Akurasi warna presisi 100% menyerupai apa yang dilihat mata manusia secara langsung.' },
      { name: 'Soft Natural', description: 'Kontras lembut, bayangan terbuka bersih, transisi tonal halus yang menenangkan.' }
    ]
  },
  {
    category: 'WARM / BRIGHT',
    icon: '☀️',
    styles: [
      { name: 'Warm Cinematic', description: 'Nuansa hangat sinematik dengan shadow keemasan lembut dan atmosfer emosional.' },
      { name: 'Golden Hour', description: 'Pendaran cahaya matahari terbenam/terbit, warm highlights dan golden glow merata.' },
      { name: 'Sun-Kissed', description: 'Sentuhan hangat sinar matahari musim panas, kulit cerah berseri tanpa over-orange.' },
      { name: 'Bright & Airy', description: 'Highlight terang lapang, bayangan diangkat bersih, atmosfer segar dan luas.' },
      { name: 'Warm Lifestyle', description: 'Tonal hangat fotogenik khas editorial majalah gaya hidup modern.' },
      { name: 'Soft Golden', description: 'Kehangatan amber halus yang menenangkan tanpa tint kuning/merah berlebih.' }
    ]
  },
  {
    category: 'CINEMATIC',
    icon: '🎬',
    styles: [
      { name: 'Moody Cinematic', description: 'Kontras sinematik berkarakter dengan bayangan pekat dan mood mendalam.' },
      { name: 'Modern Cinematic', description: 'Palet film layar lebar modern dengan separasi warna jernih antara subjek dan latar.' },
      { name: 'Teal & Orange Cinematic', description: 'Pemisahan komplementer klasik (teal pada bayangan, warm orange pada highlight & kulit).' },
      { name: 'Cinematic Contrast', description: 'Kurva kontras S-curve terukur khas proyeksi bioskop dengan highlight terkontrol.' },
      { name: 'Dark Cinematic', description: 'Nuansa gelap berbobot, atmosfer misterius dengan retensi detail bayangan.' },
      { name: 'Soft Cinematic', description: 'Film sinematik berdaya pikat lembut, kontras rendah yang anggun dan puitis.' }
    ]
  },
  {
    category: 'VIBRANT / COLORFUL',
    icon: '🌈',
    styles: [
      { name: 'Vivid Color', description: 'Saturasi kaya dan hidup di semua channel warna dengan proteksi clipping.' },
      { name: 'Rich Color', description: 'Kedalaman warna berbobot tanpa kesan artifisial, tonasi padat.' },
      { name: 'Color Pop', description: 'Penonjolan warna-warna primer dengan kontras selektif yang memukau.' },
      { name: 'Fresh Vibrant', description: 'Kesegaran warna alami dengan penekanan pada hijau dedaunan dan biru langit.' },
      { name: 'Deep Color', description: 'Warna berdensitas tinggi, nuansa mewah dengan bayangan mantap.' }
    ]
  },
  {
    category: 'CLEAN / MODERN',
    icon: '✨',
    styles: [
      { name: 'Clean & Fresh', description: 'Putih bersih, tanpa color cast, visual cerah dan jernih seperti udara pagi.' },
      { name: 'Modern Clean', description: 'Minimalis kontemporer, tonal terkalibrasi presisi dengan kontras seimbang.' },
      { name: 'Crisp Detail', description: 'Mikro-kontras tajam pada tekstur tanpa memunculkan noise digital kasar.' },
      { name: 'High Key Clean', description: 'Kecerahan dominan yang lapang dengan detail highlight tetap terlindungi.' },
      { name: 'Minimal Neutral', description: 'Palet warna terkendali dengan tonal netral yang tenang dan elegan.' }
    ]
  },
  {
    category: 'FILM / ARTISTIC',
    icon: '🎞️',
    styles: [
      { name: 'Film Look', description: 'Emulasi emulsi seluloid klasik dengan kurva tonal organik dan gradasi lembut.' },
      { name: 'Vintage Film', description: 'Nuansa film tempo dulu dengan warm faded look dan bayangan matte.' },
      { name: 'Analog Film', description: 'Karakter kamera analog 35mm dengan black point sedikit terangkat.' },
      { name: 'Pastel Film', description: 'Palet warna pastel lembut bernuansa artistik dengan kontras rendah.' },
      { name: 'Faded Film', description: 'Tonal matte dengan bayangan memudar yang puitis dan nostalgia.' },
      { name: 'Retro Color', description: 'Sentuhan nostalgia dengan pergeseran warna retro khas fotografi 70/80-an.' }
    ]
  },
  {
    category: 'DRAMATIC',
    icon: '🎭',
    styles: [
      { name: 'Dark & Moody', description: 'Atmosfer dramatis intens dengan dominasi bayangan berbobot.' },
      { name: 'Dramatic Contrast', description: 'Perbedaan tegas antara gelap dan terang untuk dampak visual kuat.' },
      { name: 'Deep Shadow', description: 'Bayangan dalam berdensitas tinggi dengan siluet tegas dan highlight tajam.' },
      { name: 'Low Key Cinematic', description: 'Komposisi cahaya minim (low-key) dengan highlight terfokus dramatis.' }
    ]
  }
];

export const ALL_COLOUR_GRADING_STYLES = [
  ...COLOUR_GRADING_CATEGORIES.flatMap(cat => 
    cat.styles.map(s => ({ ...s, category: cat.category, categoryIcon: cat.icon }))
  ),
  { name: 'Custom Style', description: 'Parameter warna kustom yang ditentukan pengguna dengan kalibrasi adaptif AI.', category: 'CUSTOM', categoryIcon: '⚙️' }
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
