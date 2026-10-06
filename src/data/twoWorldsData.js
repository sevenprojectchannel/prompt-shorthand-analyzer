/**
 * Data Definition & Helper Functions Khusus Fitur "2 Dunia" (V3.5)
 * Mendukung:
 * 1. Custom Request
 * 2. Jenis Kelamin Subyek
 * 3. Usia Karakter (Auto, 1 - 50 tahun)
 * 4. Ras / Etnis
 * 5. Style Subyek (Auto, Raw Photography Realism, Realistic, Photorealistic, Ultra Photorealistic, Live-Action, Custom)
 * 6. Environment Style (Auto + 92 Styles terstruktur)
 *
 * Seluruh data ini HANYA digunakan pada tab "2 Dunia" dan tidak memengaruhi tab lain.
 */

export const TWO_WORLDS_PROMPT_TEMPLATES = [
  {
    id: 'none',
    label: '-- Pilih Template Prompt (Opsional) --',
    text: ''
  },
  {
    id: 'tpl_1',
    label: 'Template 1: Tambahkan subjek manusia realistis di luar subjek yang sudah ada...',
    text: 'Tambahkan subjek manusia realistis di luar subjek yang sudah ada, dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan.'
  },
  {
    id: 'tpl_2',
    label: 'Template 2: Tambahkan subjek manusia realistis dengan pakaian yang menyesuaikan...',
    text: 'Tambahkan subjek manusia realistis dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan.'
  },
  {
    id: 'tpl_3',
    label: 'Template 3: Tambahkan subjek manusia realistis dan pertahankan seluruh subjek...',
    text: 'Tambahkan subjek manusia realistis dan pertahankan seluruh subjek serta karakter yang sudah ada dalam gambar. Jangan memodifikasi atau menghilangkan subjek/karakter asli. Latar belakang menyesuaikan dengan gambar unggahan.'
  },
  {
    id: 'tpl_4',
    label: 'Template 4: Tambahkan subjek baru yang mengenakan hijab...',
    text: 'Tambahkan subjek baru yang mengenakan hijab, lalu sesuaikan outfit dan warna agar harmonis dengan gambar unggahan.'
  },
  {
    id: 'tpl_5',
    label: 'Template 5: Tambahkan subjek manusia realistis yang mengenakan hijab...',
    text: 'Tambahkan subjek manusia realistis yang mengenakan hijab, dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan.'
  }
];

export const TWO_WORLDS_GENDERS = [
  'Auto (Smart Detection) mengikuti gambar unggahan',
  'Laki-Laki',
  'Perempuan'
];

export const TWO_WORLDS_AGES = [
  'Auto (Smart Detection) mengikuti gambar unggahan',
  ...Array.from({ length: 50 }, (_, i) => `${i + 1} tahun`)
];

export const TWO_WORLDS_ETHNICITIES = [
  'Auto (Smart Detection)',
  'Asia',
  'Eropa',
  'Afrika',
  'Timur Tengah',
  'Asia Selatan',
  'Asia Timur',
  'Asia Tenggara',
  'Pasifik / Oseania',
  'Amerika Latin'
];

export const TWO_WORLDS_SUBJECT_STYLES = [
  'Auto (Smart Detection)',
  'Raw Photography Realism',
  'Realistic',
  'Photorealistic',
  'Ultra Photorealistic',
  'Live-Action',
  'Custom'
];

export const TWO_WORLDS_ENVIRONMENT_STYLES = [
  { name: 'Auto (Smart Detection)', description: 'Sistem mendeteksi dan menentukan style lingkungan paling harmonis berdasarkan gambar sumber.' },
  { name: 'Stylized 3D Cartoon', description: 'Gaya kartun 3D yang sangat stilasi dengan warna berani dan proporsi ekspresif.' },
  { name: 'Pixar-style Lighting', description: 'Pencahayaan hangat dan emosional khas film Pixar yang memberikan kedalaman pada karakter.' },
  { name: 'Nickelodeon Animation Style', description: 'Gaya animasi enerjik dan berwarna cerah khas Nickelodeon.' },
  { name: 'SpongeBob Cinematic 3D', description: 'Visual 3D sinematik bergaya dunia bawah laut SpongeBob yang ceria.' },
  { name: 'Soft Clay Render', description: 'Render dengan tekstur tanah liat lembut yang memberikan kesan fisik dan taktil.' },
  { name: 'Smooth Plastic Material', description: 'Material plastik halus dan mengkilap seperti mainan modern yang bersih.' },
  { name: 'Vibrant Pastel Colors', description: 'Palet warna pastel yang cerah dan hidup untuk suasana yang positif.' },
  { name: 'Global Illumination', description: 'Teknik pencahayaan realistis yang memantulkan cahaya di seluruh permukaan untuk kedalaman maksimal.' },
  { name: 'Clean 3D Render', description: 'Hasil render 3D yang sangat bersih, tajam, dan bebas dari noise visual.' },
  { name: 'Whimsical Cartoon World', description: 'Dunia kartun yang penuh keajaiban, bentuk imajinatif, dan atmosfer fantasi.' },
  { name: 'Raw Photography Realism', description: 'Realisme murni seperti foto mentah kamera DSLR tanpa efek sinematik, menampilkan pori kulit, noise sensor, dan cahaya alami apa adanya.' },
  { name: 'True Camera Capture Realism', description: 'Meniru hasil kamera sungguhan dengan parameter fotografi realistis seperti ISO, aperture, shutter, dan depth of field alami.' },
  { name: 'Documentary Photo Realism', description: 'Gaya foto dokumenter yang jujur dan natural, komposisi tidak dibuat-buat seperti momen kehidupan nyata.' },
  { name: 'Natural Light Photorealism', description: 'Meniru cahaya alami dengan warna kulit akurat dan bayangan lembut tanpa efek artistik.' },
  { name: 'Documentary Style', description: 'Tampilan realistis dan informatif yang fokus pada keaslian visual.' },
  { name: 'Natural Lighting', description: 'Pencahayaan alami tanpa dramatisasi atau efek berlebihan.' },
  { name: 'Realistic', description: 'Tampilan natural yang mendekati dunia nyata.' },
  { name: 'Photorealistic', description: 'Sangat realistis seperti hasil foto kamera modern dengan kualitas bersih.' },
  { name: 'Ultra Photorealistic Live-Action', description: 'Detail sangat tajam dan bersih, masih realistis namun terasa sedikit dipoles.' },
  { name: 'Portrait Photography', description: 'Fokus pada wajah dengan latar blur profesional dan pencahayaan kamera.' },
  { name: 'Photoreal Cinematic Character Study', description: 'Studi karakter sangat realistis dengan sentuhan visual sinematik.' },
  { name: 'Live-Action Cinematic Photorealism', description: 'Perpaduan realisme dunia nyata dengan mood dan atmosfer sinematik.' },
  { name: 'Hollywood Movie Still Realism', description: 'Tampilan seperti cuplikan film Hollywood dengan color grading dramatis.' },
  { name: 'Cinematic Live-Action Portrait', description: 'Potret manusia nyata dengan gaya sinema dan pencahayaan artistik.' },
  { name: 'Film Still', description: 'Visual menyerupai satu frame adegan film.' },
  { name: 'Cinematic', description: 'Nuansa film dengan framing dan warna dramatis.' },
  { name: 'Ultra Cinematic', description: 'Cinematic tingkat tinggi dengan depth dan kontras kuat.' },
  { name: 'IMAX Look', description: 'Visual megah berskala besar dengan detail tinggi.' },
  { name: 'Dramatic Lighting', description: 'Pencahayaan kontras tinggi untuk emosi kuat dan tegas.' },
  { name: 'Moody Lighting', description: 'Cahaya redup bernuansa emosional dan misterius.' },
  { name: 'Dark & Moody', description: 'Nuansa gelap dengan atmosfer dramatis dan intens.' },
  { name: 'Hyper-Realistic', description: 'Detail ekstrem dengan tekstur dan ketajaman sangat tinggi.' },
  { name: 'Hyper-Real Live-Action Character', description: 'Sangat detail dan presisi namun sering terasa terlalu sempurna dan kurang alami.' },
  { name: 'Toy-like Characters', description: 'Karakter dengan proporsi dan material seperti mainan koleksi.' },
  { name: 'Semi-Realistic 3D', description: 'Perpaduan realisme dan gaya 3D yang masih terasa imut.' },
  { name: 'Toy Photography', description: 'Foto realistis mainan dengan depth of field dan pencahayaan profesional.' },
  { name: 'Miniature World', description: 'Dunia mini berskala kecil dengan detail tinggi dan perspektif makro.' },
  { name: 'Toy Diorama / Miniature World', description: 'Adegan mini seperti diorama mainan dengan detail artistik.' },
  { name: 'Plastic Toy Cinematic', description: 'Mainan plastik dengan sudut kamera dan pencahayaan sinematik.' },
  { name: 'Miniature / Diorama Style', description: 'Tampilan dunia makro seperti diorama miniatur dengan efek tilt-shift dan detail kecil yang menakjubkan.' },
  { name: 'Hyper-Realistic Miniature / Diorama Action Style', description: 'Diorama miniatur dengan detail hyper-realistic dan elemen aksi yang dinamis, memberikan kesan adegan film berskala kecil.' },
  { name: 'Miniature Diorama / LEGO Macro Photography', description: 'Gaya fotografi makro dengan fokus tajam pada detail balok LEGO, bokeh latar belakang artistik, dan pencahayaan studio yang menonjolkan tekstur plastik serta skala miniatur.' },
  { name: 'Low Poly 3D', description: 'Bentuk geometris sederhana dan minim detail.' },
  { name: 'Roblox-style 3D', description: 'Proporsi kotak dengan wajah simpel khas game Roblox.' },
  { name: 'Stylized Roblox 3D', description: 'Versi Roblox lebih halus dengan pencahayaan modern.' },
  { name: 'LEGO Style', description: 'Karakter dan objek berbentuk balok LEGO berwarna cerah.' },
  { name: 'LEGO Diorama', description: 'Adegan LEGO seperti miniatur pameran artistik.' },
  { name: 'LEGO Stop-Motion', description: 'Tampilan LEGO dengan nuansa animasi stop-motion.' },
  { name: 'LEGO Cinematic Superhero', description: 'Visual pahlawan super dalam dunia LEGO dengan pencahayaan dramatis, efek kekuatan yang bercahaya, dan komposisi epik.' },
  { name: 'LEGO Movie Action Style', description: 'Gaya aksi dinamis khas film LEGO dengan motion blur, efek ledakan balok yang intens, dan sudut kamera sinematik.' },
  { name: 'LEGO Unreal Engine Cinematic', description: 'Render LEGO ultra-detail menggunakan Unreal Engine, menampilkan pantulan cahaya realistis pada plastik dan atmosfer film berkualitas tinggi.' },
  { name: 'LEGO Blockbuster VFX', description: 'Visual blockbuster dengan efek khusus (VFX) spektakuler seperti api, asap, dan partikel yang terintegrasi dalam estetika balok LEGO.' },
  { name: 'LEGO Epic Battle Scene', description: 'Adegan pertempuran kolosal LEGO dengan ribuan minifigure, lingkungan yang hancur secara artistik, dan skala sinematik yang luar biasa.' },
  { name: 'Pixar-style Animation', description: 'Animasi 3D ekspresif ala film keluarga Pixar.' },
  { name: 'Storybook 3D', description: 'Visual 3D bernuansa buku cerita anak.' },
  { name: 'Whimsical Children Illustration', description: 'Ilustrasi ceria, imajinatif, dan penuh fantasi anak-anak.' },
  { name: 'Cute Kawaii Style', description: 'Estetika Kawaii yang sangat imut dengan elemen-elemen menggemaskan.' },
  { name: 'Chibi 3D', description: 'Proporsi kecil dengan kepala besar, sangat imut.' },
  { name: 'Kawaii Style', description: 'Visual super lucu dengan bentuk bulat dan ramah anak.' },
  { name: 'Cute 3D / Kawaii', description: 'Karakter 3D imut dengan warna lembut.' },
  { name: 'Cute Toy Style', description: 'Karakter seperti mainan dengan tekstur plastik halus.' },
  { name: 'Kids Fantasy 3D', description: 'Gaya 3D fantasi ceria dan aman untuk anak.' },
  { name: 'Dreamy Pastel Fantasy', description: 'Dunia fantasi dengan palet warna pastel yang lembut dan suasana seperti mimpi.' },
  { name: 'Pastel Soft Lighting', description: 'Cahaya lembut bernuansa pastel yang hangat dan dreamy.' },
  { name: 'Dreamy Soft Lighting', description: 'Pencahayaan halus dengan suasana seperti mimpi.' },
  { name: 'Pastel Fantasy', description: 'Warna pastel lembut dengan nuansa fantasi.' },
  { name: 'Candy World', description: 'Dunia fantasi manis seperti permen.' },
  { name: 'Candyland / Marshmallow World', description: 'Lingkungan imajinatif penuh marshmallow dan warna cerah.' },
  { name: 'Candyland 3D Style', description: 'Dunia 3D bertema permen dengan bentuk imut dan manis.' },
  { name: 'Pastel Candy Commercial Style', description: 'Gaya visual seperti iklan permen anak-anak.' },
  { name: 'Hello Kitty Dessert World', description: 'Dunia dessert pastel bertema Hello Kitty yang ceria.' },
  { name: 'Origami Diorama Style', description: 'Visual adegan fantasi yang seluruh elemennya terbuat dari lipatan kertas origami presisi dengan tekstur kertas nyata.' },
  { name: 'Paper Craft Portrait', description: 'Seni potret yang dibuat dari lapisan potongan kertas dan lipatan origami dengan efek kedalaman 3D.' },
  { name: 'Papercraft Origami', description: 'Visual bergaya kerajinan kertas dengan lipatan origami yang presisi dan tekstur kertas yang nyata.' },
  { name: 'Origami Low-Poly', description: 'Bentuk geometris rendah (low-poly) yang dipadukan dengan teknik lipat origami untuk tampilan artistik minimalis.' },
  { name: 'Pastel Origami Fantasy', description: 'Dunia fantasi origami dengan warna-warna pastel lembut dan pencahayaan dreamy.' },
  { name: 'Plush Felt Texture', description: 'Tekstur kain felt yang lembut dan empuk pada seluruh lingkungan.' },
  { name: 'Soft Fuzzy Material', description: 'Material berbulu halus yang memberikan kesan hangat dan nyaman.' },
  { name: 'Kawaii Plush 3D Render', description: 'Karakter 3D seperti boneka plush berbulu dan lembut.' },
  { name: 'Cute Felt Toy Aesthetic', description: 'Tampilan seperti mainan kain felt buatan tangan.' },
  { name: 'Soft Toy Food Diorama', description: 'Makanan yang divisualkan seperti boneka empuk.' },
  { name: 'Claymation Style', description: 'Tampilan seperti animasi plastisin stop-motion.' },
  { name: 'Crochet / Knitted / Amigurumi Style', description: 'Semua objek tampak dirajut dari benang.' },
  { name: 'Amigurumi 3D Style', description: 'Boneka rajut imut dalam bentuk 3D.' },
  { name: '3D Yarn World / Yarn Render', description: 'Dunia 3D dengan tekstur benang di seluruh objek.' },
  { name: 'Clay + Knit Hybrid', description: 'Perpaduan clay dan rajutan dengan tampilan boneka lembut.' },
  { name: 'Cozy Pastel Toy Cottage', description: 'Rumah mini pastel seperti mainan rajut yang hangat.' },
  { name: 'Knitted Miniature World', description: 'Dunia mini yang seluruh lingkungannya terlihat dirajut.' },
  { name: 'Crochet Dollhouse Render', description: 'Rumah boneka mini berbahan rajutan crochet.' },
  { name: 'Cute Handmade Toy Aesthetic', description: 'Estetika mainan buatan tangan yang hangat dan lucu.' },
  { name: 'Pastel Yarn Diorama', description: 'Diorama kecil bernuansa pastel dengan tekstur benang.' },
  { name: 'Cute Pastel Diorama', description: 'Diorama mini pastel dengan dunia fantasi yang sangat imut.' }
];

import { formatTwoWorldsEnglishIntegration } from '../lib/promptEnglishTranslator.js';

/**
 * Menyusun integrasi natural untuk PROMPT OPTIMAL pada mode 2 Dunia dalam Bahasa Inggris AI-readable.
 * Urutan Logika Sesuai Spesifikasi:
 * Prompt asli + hasil analisis gambar + Custom Request + Karakter Demografis + Style Subyek + Environment Style → PROMPT OPTIMAL (ENGLISH)
 */
export function buildTwoWorldsPromptIntegration(twoWorldsConfig, visionData) {
  return formatTwoWorldsEnglishIntegration(twoWorldsConfig, visionData);
}
