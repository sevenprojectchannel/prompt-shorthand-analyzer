/**
 * Master Test Runner - Prompt Shorthand Analyzer
 * Executes all unit, integration, and HTTP static server tests locally.
 */

const { runCatalogTests } = require("./test-catalog.js");
const { runAnalyzerTests } = require("./test-local-analyzer.js");
const { runStorageTests } = require("./test-storage.js");
const { runHttpTests } = require("./test-http.js");
require("./test-ui-functional.js");

console.log("=================================================");
console.log("  PROMPT SHORTHAND ANALYZER - AUTOMATED TESTS    ");
console.log("=================================================\n");

async function runAll() {
  try {
    runCatalogTests();
    runAnalyzerTests();
    runStorageTests();
    await runHttpTests();

    console.log("=================================================");
    console.log("  SEMUA TEST LOKAL BERHASIL (100% PASSING)       ");
    console.log("=================================================");
    process.exit(0);
  } catch (error) {
    console.error("\n❌ TEST FAILED:", error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

runAll();
