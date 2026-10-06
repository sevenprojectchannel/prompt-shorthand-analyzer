/**
 * Two Worlds (2 Dunia) Conflict Resolver & AI Enrichment Engine (V3.6 Patch)
 *
 * Mengaudit, menyelaraskan, dan menyelesaikan konflik antara:
 * 1. PARAMETER MODIFIKASI KHUSUS 2 DUNIA (Priority #1 - Source of Truth)
 * 2. PROMPT HASIL ANALISA 2 DUNIA (Priority #2 - Konteks Karakter / Subjek Asli)
 * 3. PROMPT OPTIMAL (Priority #3 - Target Audit)
 *
 * SCOPE LOCK: HANYA digunakan untuk Tab 2 Dunia. Tidak memengaruhi tab lain.
 */

import { toAiEnglishPrompt } from './promptEnglishTranslator.js';
import { TWO_WORLDS_ENVIRONMENT_STYLES } from '../data/twoWorldsData.js';

/**
 * Menyusun System Prompt Gemini AI khusus harmonisasi konflik 2 Dunia
 */
export function buildTwoWorldsEnrichmentSystemPrompt() {
  return `You are Prompt Shorthand Analyzer V3.6 - Specialized Two Worlds (2 Dunia) AI Conflict Harmonizer & Prompt Enrichment Engine.
Your mission: Audit, harmonize, and resolve all conflicts, contradictions, inconsistencies, or mismatched instructions within PROMPT OPTIMAL for the "2 Dunia" (Two Worlds) workflow.

============================================================
ABSOLUTE PRIORITY HIERARCHY (SOURCE OF TRUTH)
PARAMETER MODIFIKASI KHUSUS 2 DUNIA → PROMPT HASIL ANALISA 2 DUNIA → PROMPT OPTIMAL
============================================================
1. PARAMETER MODIFIKASI KHUSUS 2 DUNIA (HIGHEST PRIORITY - ABSOLUTE SOURCE OF TRUTH):
   - Custom Request (Directive for added subject, attire, action)
   - Subject Demographics (Gender, Age, Ethnicity)
   - Subject Visual Style (Rendering / Materiality)
   - Environment Style (World-building, background, lighting, atmosphere)
   * If any text in PROMPT OPTIMAL contradicts these active parameters, PARAMETER MODIFIKASI KHUSUS 2 DUNIA OVERRULES AND REPLACES IT.

2. PROMPT HASIL ANALISA 2 DUNIA (SECONDARY PRIORITY - ORIGINAL IMAGE CONTEXT):
   - Contains the core visual description and identity of the original source character/subject.
   * ABSOLUTE PRESERVATION: The original character's facial features, identity, physical appearance, and key clothing must remain 100% intact, undistorted, and protected from deletion or unwanted morphing.

3. PROMPT OPTIMAL (PROMPT UNDER AUDIT):
   - The prompt being reviewed and harmonized.
   - Retain all valuable, non-conflicting visual details, realistic microtextures, camera angles, lighting, and composition.

============================================================
SPECIFIC CONFLICT RESOLUTION RULES
============================================================
1. ENVIRONMENT CONFLICT RESOLUTION:
   - If an active Environment Style is chosen (not "Auto"), eliminate any contradictory original background settings (e.g., original classroom, indoor studio, plain wall) and synthesize the scene into the chosen Environment Style world, incorporating its atmosphere, materials, and lighting seamlessly.
   - The original subject must be naturally placed within this new environment while maintaining their identity.

2. SUBJECT & DEMOGRAPHIC CONFLICT RESOLUTION:
   - If an added character or modification is specified in Custom Request or Demographics (Gender, Age, Ethnicity), ensure the added subject adheres strictly to these parameters.
   - Remove any contradictory traits, clothing, or ages assigned to the added character.

3. NEGATIVE PROMPT & SHORTHAND INTEGRITY:
   - Remove any negative prompt flags that contradict the active styles (e.g., remove "--no 3d render" or "3d render" from negative prompts if the environment is a 3D animation/cartoon style).
   - All shorthand codes (e.g., /facelock, /hairlock, /raw, /candid, /masterpiece) and Midjourney parameters (--ar ..., --style ..., --v ...) MUST BE PRESERVED and placed at the end of the prompt.

4. LANGUAGE & FORMAT:
   - Output must be in natural, descriptive, clear English optimal for state-of-the-art AI image generators.
   - Do NOT output conversational filler, disclaimers, or markdown outside JSON.

Format response STRICTLY as valid JSON:
{
  "enrichedPrompt": "the complete, conflict-free, harmonized English prompt with shorthands and parameters preserved at the end",
  "conflictsResolved": ["list of resolved conflicts, e.g., 'Replaced legacy indoor studio background with chosen SpongeBob Cinematic 3D underwater environment'"]
}`;
}

/**
 * Menyusun User Payload untuk Gemini AI berdasarkan ketiga sumber
 */
export function buildTwoWorldsEnrichmentUserPayload({ optimalPrompt, generatedPrompt, twoWorldsConfig }) {
  const config = twoWorldsConfig || {};

  const paramSummary = [
    `1. Custom Request (Instruksi Tambahan): "${config.customRequest ? config.customRequest.trim() : '(tidak ada / kosong)'}"`,
    `2. Gender Subyek Tambahan: "${config.gender || 'Auto'}"`,
    `3. Usia Karakter Tambahan: "${config.age || 'Auto'}"`,
    `4. Suku / Etnis Karakter: "${config.ethnicity || 'Auto'}"`,
    `5. Style Subyek: "${config.subjectStyle === 'Custom' ? (config.customSubjectStyle || 'Custom') : (config.subjectStyle || 'Auto')}"`,
    `6. Environment Style (Dunia / Background): "${config.environmentStyle || 'Auto'}"`
  ].join('\n');

  return `=== 1. PARAMETER MODIFIKASI KHUSUS 2 DUNIA (PRIORITY 1 - SOURCE OF TRUTH) ===
${paramSummary}

=== 2. PROMPT HASIL ANALISA 2 DUNIA (PRIORITY 2 - CONTEXT OF ORIGINAL IMAGE & SUBJECT) ===
"${(generatedPrompt || '').trim() || '(tidak ada analisa visual awal)'}"

=== 3. PROMPT OPTIMAL (PRIORITY 3 - TARGET AUDIT & HARMONISASI) ===
"${(optimalPrompt || '').trim()}"

TUGAS AI:
Audit PROMPT OPTIMAL di atas terhadap PARAMETER MODIFIKASI KHUSUS 2 DUNIA dan PROMPT HASIL ANALISA 2 DUNIA.
Selesaikan semua kontradiksi (seperti latar belakang lama vs environment style baru, deskripsi karakter tambahan yang tidak sesuai parameter, atau negative prompt yang bentrok).
Pertahankan identitas karakter asli 100%, pertahankan seluruh shorthand dan flag parameter di akhir prompt, dan hasilkan prompt final dalam bahasa Inggris yang harmonis dan siap pakai.`;
}

/**
 * Ekstraksi token shorthand (/tag) dan flag Midjourney (--param value) dari prompt
 */
export function extractShorthandsAndFlags(promptText = '') {
  const shorthands = (promptText.match(/\/[a-zA-Z0-9_\-:]+/g) || []);
  
  // Midjourney flags seperti --ar 16:9, --style raw, --v 6.1, --no ...
  const flags = [];
  const flagMatches = promptText.match(/--[a-zA-Z0-9_\-]+(?:\s+[a-zA-Z0-9_.,:\-]+)*/g) || [];
  for (const f of flagMatches) {
    if (!flags.includes(f.trim())) {
      flags.push(f.trim());
    }
  }

  return { shorthands, flags };
}

/**
 * Resolusi Heuristik Lokal Deterministic jika Gemini API offline / terkendala
 */
export function resolveTwoWorldsConflictsHeuristic({
  optimalPrompt = '',
  generatedPrompt = '',
  twoWorldsConfig = {},
  analysisResult = null
}) {
  if (!optimalPrompt || !optimalPrompt.trim()) {
    return {
      success: false,
      enrichedPrompt: optimalPrompt,
      conflictsResolved: []
    };
  }

  const conflictsResolved = [];
  let baseText = optimalPrompt.trim();

  // Ekstrak shorthand dan flag yang ada
  const { shorthands, flags } = extractShorthandsAndFlags(baseText);

  // Pisahkan header /imagine prompt: jika ada
  let hasImagine = baseText.startsWith('/imagine prompt:');
  if (hasImagine) {
    baseText = baseText.replace(/^\/imagine prompt:\s*/i, '').trim();
  }

  // 1. Audit Konflik Environment Style
  const envStyle = twoWorldsConfig?.environmentStyle || 'Auto (Smart Detection)';
  const isEnvExplicit = envStyle && !envStyle.toLowerCase().startsWith('auto');

  if (isEnvExplicit) {
    const is3DStyle = /3d|clay|plastic|pixar|nickelodeon|spongebob|lego|cartoon|chibi|toy|amigurumi|origami|yarn/i.test(envStyle);
    
    // Cari deskripsi background lama yang berasal dari gambar original
    const legacyBackgroundPatterns = [
      /(?:standing|sitting|located|set)\s+in\s+a\s+[^.,\n]+(?:classroom|room|office|studio|bedroom|hallway|interior|backdrop)[^.,\n]*/gi,
      /wooden\s+classroom\s+with\s+chalkboards[^.,\n]*/gi,
      /in\s+a\s+(?:traditional\s+)?wooden\s+classroom[^.,\n]*/gi,
      /plain\s+(?:studio\s+)?backdrop[^.,\n]*/gi
    ];

    let replacedLegacyBg = false;
    for (const pat of legacyBackgroundPatterns) {
      if (pat.test(baseText)) {
        baseText = baseText.replace(pat, `seamlessly integrated into a ${envStyle} environment`);
        replacedLegacyBg = true;
      }
    }

    if (replacedLegacyBg) {
      conflictsResolved.push(`Harmonized legacy background into ${envStyle} environment`);
    }

    // Pastikan directive Environment Style tercantum
    const envDirectiveRegex = new RegExp(`Environment Style:.*?${envStyle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i');
    if (!envDirectiveRegex.test(baseText) && !baseText.toLowerCase().includes(envStyle.toLowerCase())) {
      baseText += `\n\nEnvironment Style: World-building, background setting, atmosphere, environmental materials, and lighting seamlessly adopt ${envStyle}. All original subject identity, facial features, age, physical proportions, and attire remain completely intact and undistorted by the environment style.`;
      conflictsResolved.push(`Added explicit ${envStyle} environment harmonization directive`);
    }

    // 2. Audit Konflik Negative Prompt untuk Style 3D / Animasi
    if (is3DStyle) {
      if (/--no\s+[^,\n]*3d render/i.test(baseText) || /--no\s+[^,\n]*cartoon/i.test(baseText)) {
        baseText = baseText
          .replace(/cartoon,\s*/gi, '')
          .replace(/3d render,\s*/gi, '')
          .replace(/,\s*3d render/gi, '')
          .replace(/,\s*cartoon/gi, '');
        conflictsResolved.push(`Removed conflicting negative prompts ('3d render', 'cartoon') to match ${envStyle}`);
      }
    }
  }

  // 3. Audit Demografi & Karakter Tambahan
  const customReq = twoWorldsConfig?.customRequest ? twoWorldsConfig.customRequest.trim() : '';
  const gender = twoWorldsConfig?.gender || 'Auto';
  const age = twoWorldsConfig?.age || 'Auto';
  const ethnicity = twoWorldsConfig?.ethnicity || 'Auto';

  const isGenderExplicit = gender && !gender.toLowerCase().startsWith('auto');
  const isAgeExplicit = age && !age.toLowerCase().startsWith('auto');
  const isEthnicityExplicit = ethnicity && !ethnicity.toLowerCase().startsWith('auto');

  if (isGenderExplicit || isAgeExplicit || isEthnicityExplicit || customReq) {
    // Pastikan Custom Request tidak berkonflik
    if (customReq) {
      const translatedReq = toAiEnglishPrompt(customReq);
      if (!baseText.toLowerCase().includes(translatedReq.toLowerCase().slice(0, 20))) {
        baseText += `\n\nAdditional Directive (Custom Request): ${translatedReq}`;
        conflictsResolved.push(`Synchronized Custom Request directive: ${translatedReq}`);
      }
    }

    if (isGenderExplicit || isAgeExplicit || isEthnicityExplicit) {
      const parts = [];
      if (isGenderExplicit) parts.push(`Gender: ${gender === 'Laki-Laki' ? 'Male' : (gender === 'Perempuan' ? 'Female' : gender)}`);
      if (isAgeExplicit) {
        const ageNum = parseInt(age, 10);
        parts.push(`Age: ${!isNaN(ageNum) ? `${ageNum} years old` : age}`);
      }
      if (isEthnicityExplicit) parts.push(`Ethnicity: ${ethnicity}`);

      const demoString = parts.join(', ');
      if (!baseText.includes(demoString)) {
        baseText += `\n\nSubject Character Parameters: ${demoString}. Applied explicitly, proportionally, and naturally to the requested/added character, while strictly preserving all original subjects and characters without alteration or removal.`;
        conflictsResolved.push(`Synchronized demographic parameters: ${demoString}`);
      }
    }
  }

  // 4. Pastikan teks prompt diterjemahkan ke AI English yang bersih
  baseText = toAiEnglishPrompt(baseText);

  // 5. Kembalikan prefix /imagine prompt:
  let finalPrompt = hasImagine ? `/imagine prompt: ${baseText}` : baseText;

  // 6. Pastikan seluruh shorthand dan Midjourney flags terpasang di akhir tanpa duplikasi
  for (const sh of shorthands) {
    if (!finalPrompt.includes(sh)) {
      finalPrompt += ` ${sh}`;
    }
  }

  return {
    success: true,
    enrichedPrompt: finalPrompt.trim(),
    conflictsResolved,
    source: 'HEURISTIC_RESOLVER'
  };
}

/**
 * Validasi dan sanitasi hasil pengayaan prompt 2 Dunia dari Gemini AI
 */
export function sanitizeTwoWorldsPrompt({
  enrichedPrompt = '',
  optimalPrompt = '',
  twoWorldsConfig = {},
  originalShorthands = []
}) {
  if (!enrichedPrompt || typeof enrichedPrompt !== 'string') {
    return optimalPrompt;
  }

  let text = toAiEnglishPrompt(enrichedPrompt.trim());

  // Pastikan shorthand asli tetap ada
  for (const sh of originalShorthands) {
    if (!text.includes(sh)) {
      text += ` ${sh}`;
    }
  }

  // Sanitasi negative prompt bila environment 3D
  const envStyle = twoWorldsConfig?.environmentStyle || '';
  const is3D = /3d|clay|plastic|pixar|nickelodeon|spongebob|lego|cartoon|chibi|toy|amigurumi|origami|yarn/i.test(envStyle);
  if (is3D) {
    text = text
      .replace(/cartoon,\s*/gi, '')
      .replace(/3d render,\s*/gi, '')
      .replace(/,\s*3d render/gi, '')
      .replace(/,\s*cartoon/gi, '');
  }

  return text.trim();
}
