/**
 * Adaptive AI Color Grading Engine (V3.6)
 * 
 * Prinsip:
 * 1. Adaptive, Intelligent, Non-Destructive Image Enhancement berbasis FOTO ASLI.
 * 2. BUKAN Image Regeneration — 100% mempertahankan subjek, wajah, identitas, dan struktur scene.
 * 3. Menghitung adjustment spesifik per-foto berdasarkan kondisi visual aktual (Style Adaptive Intelligence).
 * 4. Proteksi cerdas: Highlight, Shadow, Skin Tone, dan Oversaturation.
 * 5. PERFORMANCE > PREVIEW — Zero preview canvas overhead, lazy on-demand processing.
 */

import {
  ALL_COLOUR_GRADING_STYLES,
  DEFAULT_COLOUR_GRADING_CONFIG
} from '../data/colourGradingData.js';

/**
 * Menganalisis kondisi visual & warna piksel foto asli secara mendalam
 */
export function analyzeImageColorTelemetry(canvas) {
  if (!canvas) {
    return {
      brightness: 128,
      contrast: 50,
      colorTemp: 'neutral',
      warmthScore: 0,
      saturation: 50,
      hasSkinTone: false,
      skinTonePercentage: 0,
      highlightClipping: 0,
      shadowCrushing: 0,
      dynamicRange: 'normal',
      qualityScore: 85
    };
  }

  const ctx = canvas.getContext('2d');
  const w = Math.min(canvas.width, 320);
  const h = Math.min(canvas.height, 240);

  // Buat kanvas thumbnail untuk sampling performa tinggi
  const sampleCanvas = document.createElement('canvas');
  sampleCanvas.width = w;
  sampleCanvas.height = h;
  const sCtx = sampleCanvas.getContext('2d');
  sCtx.drawImage(canvas, 0, 0, w, h);

  const imgData = sCtx.getImageData(0, 0, w, h);
  const data = imgData.data;
  const totalPixels = w * h;

  let totalR = 0;
  let totalG = 0;
  let totalB = 0;
  let totalLum = 0;
  let skinPixels = 0;
  let highClipPixels = 0;
  let shadowCrushPixels = 0;
  let totalSat = 0;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    totalR += r;
    totalG += g;
    totalB += b;

    // Perceived luminance
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    totalLum += lum;

    if (lum > 242) highClipPixels++;
    if (lum < 15) shadowCrushPixels++;

    // Saturation estimation
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const sat = max === 0 ? 0 : (max - min) / max;
    totalSat += sat;

    // Human Skin Tone Detection in RGB/YCbCr space
    // Standard rule: R > G > B, R - G >= 15, G - B >= 10, Lum between 40 and 230
    if (r > g && g > b && (r - g) >= 15 && (g - b) >= 10 && lum > 40 && lum < 235) {
      skinPixels++;
    }
  }

  const avgR = totalR / totalPixels;
  const avgG = totalG / totalPixels;
  const avgB = totalB / totalPixels;
  const avgLum = totalLum / totalPixels;
  const avgSat = (totalSat / totalPixels) * 100;

  const warmthDiff = (avgR - avgB);
  let colorTemp = 'neutral';
  if (warmthDiff > 12) colorTemp = 'warm';
  else if (warmthDiff < -12) colorTemp = 'cool';

  const skinPercent = (skinPixels / totalPixels) * 100;
  const highClipPercent = (highClipPixels / totalPixels) * 100;
  const shadowCrushPercent = (shadowCrushPixels / totalPixels) * 100;

  // Cleanup temporary sampling canvas resources immediately
  sampleCanvas.width = 0;
  sampleCanvas.height = 0;

  return {
    brightness: Math.round(avgLum),
    contrast: Math.round(Math.abs(avgLum - 128) * 0.8 + 40),
    colorTemp,
    warmthScore: Math.round(warmthDiff),
    avgR: Math.round(avgR),
    avgG: Math.round(avgG),
    avgB: Math.round(avgB),
    saturation: Math.round(avgSat),
    hasSkinTone: skinPercent > 1.2,
    skinTonePercentage: Number(skinPercent.toFixed(1)),
    highlightClipping: Number(highClipPercent.toFixed(1)),
    shadowCrushing: Number(shadowCrushPercent.toFixed(1)),
    dynamicRange: highClipPercent > 5 || shadowCrushPercent > 5 ? 'tinggi (perlu proteksi)' : 'seimbang',
    qualityScore: Math.max(50, Math.min(98, Math.round(100 - highClipPercent * 2 - shadowCrushPercent * 2)))
  };
}

/**
 * Menghitung parameter adjustment per-foto secara adaptif berdasarkan kondisi aktual foto asli
 */
export function calculateAdaptiveAdjustments(telemetry, config = DEFAULT_COLOUR_GRADING_CONFIG) {
  const cfg = { ...DEFAULT_COLOUR_GRADING_CONFIG, ...config };
  const mode = cfg.mode || 'AUTO';
  const intensity = (typeof cfg.intensity === 'number' ? cfg.intensity : 50) / 100;
  const protections = cfg.protections || {};

  // Base raw adjustment
  let exposure = 0;       // -1.0 to +1.0
  let contrast = 0;       // -50 to +50
  let highlights = 0;     // -100 to +100
  let shadows = 0;        // -100 to +100
  let warmth = 0;         // -50 to +50
  let tint = 0;           // -30 to +30
  let vibrance = 0;       // -50 to +50
  let saturation = 0;     // -50 to +50
  let clarity = 0;        // -30 to +30
  let targetStyleName = cfg.selectedStyle || 'Natural Vibrant';

  // 1. Perhitungan Adaptif Berdasarkan Mode
  if (mode === 'AUTO') {
    // Mode Auto: AI mengevaluasi kondisi visual individual foto
    if (telemetry.brightness < 100) {
      exposure += (115 - telemetry.brightness) / 100; // Lift underexposed photo
      shadows += 22;
    } else if (telemetry.brightness > 165) {
      exposure -= (telemetry.brightness - 150) / 120; // Pull overexposed photo
      highlights -= 25;
    }

    // Auto White Balance adjustment
    if (telemetry.colorTemp === 'warm' && telemetry.warmthScore > 18) {
      warmth -= Math.min(18, Math.round(telemetry.warmthScore * 0.5)); // Cool down excess warmth
    } else if (telemetry.colorTemp === 'cool' && telemetry.warmthScore < -18) {
      warmth += Math.min(18, Math.round(Math.abs(telemetry.warmthScore) * 0.5)); // Warm up excess coolness
    }

    // Contrast & Vibrance tuning
    contrast += 12;
    vibrance += 15;
    targetStyleName = telemetry.hasSkinTone ? 'Natural Clean' : 'Natural Vibrant';
  } else if (mode === 'SELECT_STYLE') {
    // Mode Select Style: Target Visual dengan Adaptive Intelligence
    targetStyleName = cfg.selectedStyle || 'Natural Vibrant';
    const styleLower = targetStyleName.toLowerCase();

    // Adaptive exposure based on photo brightness (lifts underexposed, controls overexposed)
    if (typeof telemetry.brightness === 'number') {
      if (telemetry.brightness < 110) {
        exposure += Number(((120 - telemetry.brightness) / 120).toFixed(2));
      } else if (telemetry.brightness > 155) {
        exposure -= Number(((telemetry.brightness - 150) / 140).toFixed(2));
      }
    }

    const isWarm = telemetry.colorTemp === 'warm' || (typeof telemetry.warmthScore === 'number' && telemetry.warmthScore > 10);
    const isCool = telemetry.colorTemp === 'cool' || (typeof telemetry.warmthScore === 'number' && telemetry.warmthScore < -10);

    // Map base style direction
    if (styleLower.includes('warm') || styleLower.includes('golden') || styleLower.includes('sun-kissed')) {
      // Style Hangat: Tambah warmth, TAPI adaptif jika foto sudah warm jangan over-orange!
      const maxWarmth = isWarm ? 10 : (isCool ? 32 : 22);
      warmth += maxWarmth;
      highlights += 8;
      shadows += 12;
      vibrance += 12;
    } else if (styleLower.includes('cinematic') || styleLower.includes('teal')) {
      // Style Sinematik
      if (styleLower.includes('teal')) {
        // Teal & Orange
        warmth += 8;
        tint -= 6;
        contrast += 22;
        shadows -= 8;
        highlights += 10;
        vibrance += 16;
      } else if (styleLower.includes('dark') || styleLower.includes('moody')) {
        // Moody / Dark
        contrast += 20;
        shadows -= 15;
        highlights -= 10;
        saturation -= 8;
        vibrance += 6;
      } else {
        // Modern / Clean Cinematic
        contrast += 16;
        highlights += 6;
        shadows += 10;
        vibrance += 14;
      }
    } else if (styleLower.includes('film') || styleLower.includes('vintage') || styleLower.includes('analog') || styleLower.includes('retro')) {
      // Film Look: Lifted shadows, soft highlights
      shadows += 18;
      highlights -= 12;
      contrast -= 5;
      warmth += 8;
      saturation -= 6;
      vibrance += 8;
    } else if (styleLower.includes('vivid') || styleLower.includes('color pop') || styleLower.includes('vibrant')) {
      // Vibrant
      vibrance += 28;
      contrast += 15;
      // Jangan oversaturasi jika foto sudah sangat saturated
      saturation += telemetry.saturation > 60 ? 4 : 14;
    } else if (styleLower.includes('clean') || styleLower.includes('crisp') || styleLower.includes('airy')) {
      // Clean & Modern
      if (telemetry.colorTemp !== 'neutral') {
        warmth -= (telemetry.warmthScore * 0.3); // Netralkan color cast
      }
      exposure += (styleLower.includes('airy') ? 0.25 : 0.08);
      highlights += 10;
      shadows += 14;
      contrast += 12;
      vibrance += 10;
    } else if (styleLower.includes('dramatic')) {
      // Dramatic
      contrast += 32;
      shadows -= 18;
      highlights += 14;
      vibrance += 10;
    } else {
      // Natural / Realistic default
      vibrance += 15;
      contrast += 10;
      shadows += 8;
    }
  } else if (mode === 'CUSTOM_STYLE') {
    // Mode Custom Style
    const c = cfg.custom || {};
    targetStyleName = 'Custom Style';
    warmth = (c.warmth || 0) * 0.45;
    tint = (c.tint || 0) * 0.35;
    contrast = (c.contrast || 0) * 0.4;
    highlights = (c.highlights || 0) * 0.5;
    shadows = (c.shadows || 0) * 0.5;
    saturation = (c.saturation || 0) * 0.4;
    vibrance = (c.vibrance || 0) * 0.45;
    clarity = (c.clarity || 0) * 0.35;
  }

  // 2. Intelligent Protection Guardrails (Requirement 8)
  const protectionLogs = [];

  // Highlight Protection: Jika highlight mendekati clipping, batasi atau tarik highlight
  if (protections.highlightProtection !== false) {
    if (telemetry.highlightClipping > 3) {
      highlights -= Math.round(telemetry.highlightClipping * 5);
      exposure = Math.min(exposure, 0.05);
      protectionLogs.push('Highlight Protection aktif: Mencegah highlight blown-out & menjaga detail tekstur putih.');
    }
  }

  // Shadow Protection: Jika bayangan sudah pekat, cegah crushing
  if (protections.shadowProtection !== false) {
    if (telemetry.shadowCrushing > 3 || shadows < 0) {
      shadows = Math.max(shadows, 5); // Selalu angkat sedikit bayangan untuk retensi detail
      protectionLogs.push('Shadow Protection aktif: Mencegah black crushing & mempertahankan detail bayangan.');
    }
  }

  // Skin Tone Protection: Jika terdapat manusia, amankan rona kulit
  if (protections.skinToneProtection !== false && telemetry.hasSkinTone) {
    warmth = Math.max(-15, Math.min(18, warmth)); // Batasi pergeseran kehangatan ekstrim
    saturation = Math.max(-15, Math.min(12, saturation));
    protectionLogs.push('Skin Tone Protection aktif: Mempertahankan keaslian & rona alami warna kulit subjek.');
  }

  // Oversaturation Protection
  if (protections.oversaturationProtection !== false) {
    if (telemetry.saturation > 55) {
      vibrance = Math.min(vibrance, 12);
      saturation = Math.min(saturation, 6);
      protectionLogs.push('Oversaturation Protection aktif: Menahan saturasi dalam batas gamut alami foto.');
    }
  }

  // 3. Terapkan Overall Intensity Factor (Requirement 7)
  const finalAdjustments = {
    exposure: Number((exposure * intensity).toFixed(2)),
    contrast: Math.round(contrast * intensity),
    highlights: Math.round(highlights * intensity),
    shadows: Math.round(shadows * intensity),
    warmth: Math.round(warmth * intensity),
    temperature: Math.round(warmth * intensity),
    tint: Math.round(tint * intensity),
    vibrance: Math.round(vibrance * intensity),
    saturation: Math.round(saturation * intensity),
    clarity: Math.round(clarity * intensity),
    intensityPercent: Math.round(intensity * 100),
    targetStyle: targetStyleName,
    protectionLogs
  };

  return finalAdjustments;
}

