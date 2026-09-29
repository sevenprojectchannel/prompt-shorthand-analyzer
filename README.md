# Prompt Shorthand Analyzer

Aplikasi web modern berbasis static client-side untuk menganalisis prompt pengguna berdasarkan konteks keseluruhan dan merekomendasikan notasi shorthand yang relevan, padat token, dan presisi tinggi untuk berbagai target engine AI (LLM umum, Midjourney / Difusi Gambar, Rekayasa Kode, dan Penalaran Langkah demi Langkah).

---

## Fitur Utama

1. **Dual Engine Mode**:
   - **Offline Rule Engine (Default)**: Berjalan 100% di browser tanpa koneksi internet atau API key. Mampu mendeteksi domain/intent, menghitung densitas shorthand, mengestimasi penghematan token, mendeteksi celah struktural (Role, Constraints, Format), dan merekonstruksi prompt.
   - **Gemini BYOK AI Engine (Opsional)**: Memanfaatkan Google Gemini API secara langsung dari browser pengguna untuk analisis semantik mendalam, identifikasi basa-basi percakapan (fluff), dan rekomendasi shorthand khusus domain.

2. **BYOK (Bring Your Own Key) yang Aman**:
   - Input kunci bertipe `password` dengan tombol toggle *show/hide* (ikon mata).
   - Dilengkapi tombol *Uji Koneksi* langsung ke REST endpoint Google Generative Language.
   - Disimpan hanya di `localStorage` peramban lokal pengguna &mdash; tidak pernah dikirim ke server perantara.

3. **Metrik & Analisis Real-Time**:
   - Penghitung kata dan estimasi token.
   - Indikator skor densitas shorthand (persentase struktur).
   - Skor keringkasan (Conciseness Score).
   - Estimasi potensi penghematan token.
   - Deteksi celah struktural dengan tombol 1-klik `+ Tambahkan`.

4. **Katalog Shorthand Terstruktur**:
   - Referensi notasi prompt lengkap yang terbagi dalam 6 domain:
     - Struktur & Tag (`[ROLE]`, `[CTX]`, `[TASK]`, `[CONSTR]`, `[FS]`)
     - Format & Output (`[FMT: JSON-RAW]`, `[FMT: MD-TABLE]`, `[NO-PREAMBLE]`, `[DIFF-ONLY]`)
     - Penalaran & Logika (`[COT]`, `<thinking>`, `[SELF-CRITIQUE]`)
     - Gambar / Midjourney (`--ar`, `--no`, `35mm lens`, `--s`, `--c`)
     - Persona & Gaya (`[ELI5]`, `[TONE: Executive]`)
     - Kode & Dev (`[LANG]`, `[ENV]`, `[TDD]`)
   - Dilengkapi pencarian kata kunci dan tombol salin/sisipkan.

5. **Ekspor & Riwayat**:
   - Ekspor hasil analisis ke file Markdown (`.md`).
   - Riwayat 20 prompt terakhir yang dapat dipanggil kembali kapan saja.
   - Mode tema Gelap (Dark) dan Terang (Light).

---

## Arsitektur & Kompatibilitas GitHub Pages

Aplikasi ini dirancang sebagai **Pure Static Web App** (HTML5, Modern CSS, Vanilla ES6 JavaScript).
- **Tidak ada dependensi server-side Node.js saat runtime**: Dapat langsung dijalankan di browser manapun atau di-host di GitHub Pages.
- Semua asset menggunakan path relatif (`css/`, `js/`).

### Struktur File

```
d:/08. Github/
├── index.html                   # Entry point aplikasi web
├── css/
│   ├── styles.css               # Desain sistem inti, warna tema, tata letak
│   ├── components.css           # Tombol, badge, modal, input password, toast
│   └── diff.css                 # Kartu metrik, rekomendasi, grid katalog
├── js/
│   ├── catalog.js               # Database shorthand & fungsi pencarian/filter
│   ├── storage.js               # Pengelola BYOK API key & riwayat lokal
│   ├── localAnalyzer.js         # Engine analisis prompt berbasis aturan offline
│   ├── geminiAnalyzer.js        # Integrasi REST API Google Gemini BYOK
│   ├── ui.js                    # Perender DOM, diff, notifikasi toast
│   └── app.js                   # Koordinator aplikasi utama & event listener
├── test/
│   ├── test-catalog.js          # Unit test katalog shorthand
│   ├── test-local-analyzer.js   # Unit test analisis prompt & metrik
│   ├── test-storage.js          # Unit test penyimpanan BYOK & riwayat
│   └── run-tests.js             # Test runner otomatis lokal
└── README.md                    # Dokumentasi aplikasi
```

---

## Menjalankan & Menguji Secara Lokal

### 1. Menjalankan Automated Tests
Jalankan test runner menggunakan Node.js di terminal:
```bash
node test/run-tests.js
```

### 2. Menjalankan Web Server Lokal
Gunakan server statis sederhana untuk pengujian browser:
```bash
# Opsi 1: Menggunakan npx serve
npx serve .

# Opsi 2: Menggunakan Python
python -m http.server 8080
```
Buka browser pada URL yang ditampilkan (misal: `http://localhost:8080`).

---

## Ketentuan & Keamanan
- Kunci API tidak pernah disimpan di source code repository.
- Tidak ada push atau deployment otomatis sebelum tahap verifikasi pengguna selesai.
