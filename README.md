# Prompt Shorthand Analyzer V3.3.5

> **Aplikasi Cerdas Analisis Prompt Semantik, Rekomendasi Shorthand Visual, Multimodal Vision AI, dan Pemilih Rasio Aspek Gambar (Generasi V3.3.5).**  
> **Arsitektur: SAFE PATCH-ONLY ARCHITECTURE &bull; Basis / Source of Truth: Prompt Shorthand Analyzer V3.3.1 (Stable Base).**

[![Version: 3.3.5](https://img.shields.io/badge/Version-3.3.5-blue.svg)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Architecture: Safe Patch-Only](https://img.shields.io/badge/Architecture-Safe%20Patch--Only-orange.svg)](#arsitektur-safe-patch-only)
[![BYOK Gemini](https://img.shields.io/badge/Gemini%20API-BYOK%20Enabled-blueviolet.svg)](https://aistudio.google.com/)
[![Aspect Ratio](https://img.shields.io/badge/Aspect%20Ratio-Auto%20%2B%20Target-brightgreen.svg)](#fitur-baru-pilihan-rasio-aspek-v335)

---

## 📐 Fitur Baru — Pilihan Rasio Aspek (V3.3.5)

Pada bagian **Unggah Gambar** (Mode **Analisa Gambar → Prompt** dan **Analisa Shorthand Perbaikan Gambar**), tersedia kontrol **Pilihan Rasio Aspek**:

### Pilihan Rasio:
- **🔄 Otomatis** *(Default)*
- **1:1** *(Square)*
- **2:3** *(Portrait Classic)*
- **3:2** *(Landscape Classic)*
- **3:4** *(Vertical Standard)*
- **4:3** *(Horizontal Standard)*
- **9:16** *(Vertical Story / Reels)*
- **16:9** *(Widescreen Cinematic)*

### Perilaku Fitur:
1. **Otomatis sebagai Default**: Sistem otomatis memilih mode "Otomatis" saat awal pemuatan atau reset.
2. **Deteksi Rasio Asli Gambar**: Ketika gambar diunggah, sistem mendeteksi rasio dimensi asli (`width × height`) secara matematis dan mempertahankan rasio tersebut.
3. **Target Rasio Fleksibel**: Pengguna dapat memilih rasio target tertentu untuk diterapkan pada prompt optimal (`--ar [target]`) dan visual breakdown.
4. **Proteksi Proporsi Subjek**: Penyesuaian rasio dilakukan pada kanvas generasi tanpa melakukan stretching, distorsi, atau perubahan proporsi wajah/tubuh subjek.

---

## 🏛️ Prinsip Dasar & Source of Truth
Proyek ini dibangun dengan mematuhi hierarki stabilitas:
1. **Prompt Shorthand Analyzer V3.3.1 sebagai BASIS / SOURCE OF TRUTH**:
   - Seluruh fitur, struktur direktori, UI, Kamus Shorthand, deduplikasi semantik, rekomendasi, diagnosis perbaikan gambar, dan analisis multimodal dipertahankan 100%.
   - V3.3.1 tetap utuh dan independen sebagai baseline stabil.
2. **SAFE PATCH-ONLY ARCHITECTURE**:
   - Semua modifikasi rasio aspek ditambahkan sebagai patch aman tanpa merusak alur kerja yang sudah stabil.

---

## 💻 Menjalankan Aplikasi

```bash
# Menjalankan development server
npm run dev

# Menjalankan pengujian otomatis (578 tests)
npm test

# Build production web bundle
npm run build

# Sinkronisasi asset web ke Android
npm run android:sync

# Build Android APK Debug
npm run android:apk:debug

# Build Android APK Release
npm run android:apk:release
```

---

## 📱 Aplikasi Android (APK Wrapper V3.3.5)

- **Package ID**: `com.sevenprojectchannel.promptshorthand.v335`
- **Application Name**: `Prompt Shorthand Analyzer V3.3.5`
- **Version**: `versionName = "3.3.5"` | `versionCode = 335`
- **Arsitektur**: Native Android WebView Hybrid Wrapper (mendukung online dan fallback offline lokal otomatis).
- **Fitur Khusus Android**:
  - Pull-to-refresh (`SwipeRefreshLayout`)
  - Tombol Back hardware Android dengan history navigasi (`OnBackPressedDispatcher`)
  - Penanganan rotasi layar dinamis tanpa mereset status aplikasi
  - Penyimpanan BYOK Gemini API Key di dalam secure Web Storage perangkat (tanpa hardcode key)
