# Prompt Shorthand Analyzer V3.5

> **Aplikasi Cerdas Analisis Prompt Semantik, Rekomendasi Shorthand Visual, Multimodal Vision AI, Kloning Tab "2 Dunia", dan Pemilih Rasio Aspek Gambar (Generasi V3.5).**  
> **Basis / Source of Truth: Prompt Shorthand Analyzer V3.3.5 (Stable Master Base).**

[![Version: 3.5.0](https://img.shields.io/badge/Version-3.5.0-blue.svg)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Feature: 2 Dunia](https://img.shields.io/badge/Mode-2%20Dunia-purple.svg)](#fitur-baru-tab-2-dunia-v35)
[![BYOK Gemini](https://img.shields.io/badge/Gemini%20API-BYOK%20Enabled-blueviolet.svg)](https://aistudio.google.com/)
[![Aspect Ratio](https://img.shields.io/badge/Aspect%20Ratio-Auto%20%2B%20Target-brightgreen.svg)](#fitur-pilihan-rasio-aspek)

---

## 🌐 Fitur Baru — Kloning Tab "2 Dunia" (V3.5)

Pada versi **V3.5**, tab **"Analisa Gambar → Prompt"** telah dikloning dan dihadirkan sebagai mode khusus bernama **"2 dunia"** (`🌐 2 dunia`):

### Kapabilitas Mode "2 dunia":
1. **Source of Truth Visual**: Gambar yang diunggah dianalisis secara mendalam menggunakan Multimodal Vision AI / Heuristik Lokal.
2. **Kloning Fitur Lengkap**: Mempertahankan seluruh kapabilitas unggah gambar, deteksi dimensi, rincian 13 atribut visual, sintesis prompt terstruktur, dan pemetaan shorthand 5 kelompok.
3. **Pilihan Rasio Aspek**: Mendukung rasio otomatis dan rasio target (1:1, 2:3, 3:2, 3:4, 4:3, 9:16, 16:9) tanpa distorsi atau perubahan proporsi subjek.
4. **Prompt Optimal Khusus**: Menghasilkan prompt representasi visual dua dunia yang koheren, lengkap dengan tag shorthand terpasang dan parameter generasi AI.

---

## 📐 Fitur — Pilihan Rasio Aspek

Pada bagian **Unggah Gambar** (Mode **Analisa Gambar → Prompt**, **2 dunia**, dan **Analisa Shorthand Perbaikan Gambar**), tersedia kontrol **Pilihan Rasio Aspek**:

### Pilihan Rasio:
- **🔄 Otomatis** *(Default)*
- **1:1** *(Square)*
- **2:3** *(Portrait Classic)*
- **3:2** *(Landscape Classic)*
- **3:4** *(Vertical Standard)*
- **4:3** *(Horizontal Standard)*
- **9:16** *(Vertical Story / Reels)*
- **16:9** *(Widescreen Cinematic)*

---

## 🏛️ Prinsip Dasar & Source of Truth
1. **Prompt Shorthand Analyzer V3.3.5 sebagai BASIS / SOURCE OF TRUTH**:
   - Seluruh fitur, struktur direktori, UI, Kamus Shorthand, deduplikasi semantik, rekomendasi, diagnosis perbaikan gambar, dan analisis multimodal dipertahankan 100%.
   - V3.3.5 tetap utuh, stabil, dan independen.
2. **V3.5 sebagai Rilis Terpisah**:
   - Memiliki link GitHub, web build, standalone HTML, dan APK release tersendiri.

---

## 💻 Menjalankan Aplikasi

```bash
# Menjalankan development server (port 3350)
npm run dev

# Menjalankan pengujian otomatis (602 tests)
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
