/**
 * Functional HTTP & Static Assets Verification Test
 * Ensures all assets linked in index.html load cleanly with HTTP 200 and proper MIME types.
 */

const http = require("http");
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const { server } = require("./dev-server.js");

const TEST_PORT = 8089;

function fetchUrl(pathname) {
  return new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:${TEST_PORT}${pathname}`, (res) => {
      let body = "";
      res.on("data", chunk => body += chunk);
      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body
        });
      });
    }).on("error", reject);
  });
}

async function runHttpTests() {
  console.log("=== Running HTTP & Static Asset Integrity Tests ===");

  await new Promise((resolve) => {
    server.listen(TEST_PORT, "127.0.0.1", resolve);
  });
  console.log(`✓ Test HTTP server listening on port ${TEST_PORT}`);

  try {
    // 1. Test index.html
    const rootRes = await fetchUrl("/");
    assert.strictEqual(rootRes.statusCode, 200, "Root / harus merespons 200 OK");
    assert(rootRes.headers["content-type"].includes("text/html"), "Root / harus bertipe text/html");
    assert(rootRes.body.includes("Prompt Shorthand Analyzer"), "index.html harus memuat judul aplikasi");
    assert(rootRes.body.includes("byok-api-key-input"), "index.html harus memiliki elemen input password BYOK");
    console.log("✓ index.html valid dan menyajikan struktur HTML yang lengkap");

    // 2. Extract and test all linked CSS files
    const cssLinks = ["/css/styles.css", "/css/components.css", "/css/diff.css"];
    for (const cssPath of cssLinks) {
      const res = await fetchUrl(cssPath);
      assert.strictEqual(res.statusCode, 200, `${cssPath} harus merespons 200 OK`);
      assert(res.headers["content-type"].includes("text/css"), `${cssPath} harus bertipe text/css`);
      assert(res.body.length > 50, `${cssPath} tidak boleh kosong`);
      console.log(`✓ Asset CSS ${cssPath} berhasil dimuat (200 OK, ${res.body.length} bytes)`);
    }

    // 3. Extract and test all linked JS files
    const jsLinks = [
      "/js/catalog.js",
      "/js/storage.js",
      "/js/localAnalyzer.js",
      "/js/geminiAnalyzer.js",
      "/js/ui.js",
      "/js/app.js"
    ];
    for (const jsPath of jsLinks) {
      const res = await fetchUrl(jsPath);
      assert.strictEqual(res.statusCode, 200, `${jsPath} harus merespons 200 OK`);
      assert(res.headers["content-type"].includes("text/javascript"), `${jsPath} harus bertipe text/javascript`);
      assert(res.body.length > 50, `${jsPath} tidak boleh kosong`);
      console.log(`✓ Asset JS ${jsPath} berhasil dimuat (200 OK, ${res.body.length} bytes)`);
    }

    // 4. Test 404 behavior
    const notFoundRes = await fetchUrl("/non-existent-file.xyz");
    assert.strictEqual(notFoundRes.statusCode, 404, "File fiktif harus menghasilkan 404 Not Found");
    console.log("✓ Penanganan 404 file tidak ditemukan berfungsi");

    console.log("--> Seluruh pengujian HTTP & Asset Statis BERHASIL!\n");
  } finally {
    server.close();
  }
}

if (require.main === module) {
  runHttpTests().catch(err => {
    console.error("Test HTTP failed:", err);
    process.exit(1);
  });
}

module.exports = { runHttpTests };
