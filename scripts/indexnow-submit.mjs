#!/usr/bin/env node
// scripts/indexnow-submit.mjs
// Submits new/updated URLs to IndexNow API after each deploy.

const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const HOST = 'pirlo-tv.top';
const SITE_URL = `https://${HOST}`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

if (!INDEXNOW_KEY) {
  console.warn('⚠️  INDEXNOW_KEY not set — skipping IndexNow submission.');
  process.exit(0);
}

async function getSitemapUrls() {
  try {
    const res = await fetch(`${SITE_URL}/sitemap.xml`);
    const xml = await res.text();
    const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
    return matches.map((m) => m[1]);
  } catch (e) {
    console.warn('Could not fetch sitemap:', e.message);
    return [];
  }
}

async function submit(urls) {
  if (urls.length === 0) return;
  // IndexNow max 10,000 per request — chunk if needed
  const CHUNK = 500;
  for (let i = 0; i < urls.length; i += CHUNK) {
    const chunk = urls.slice(i, i + CHUNK);
    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/indexnow-key.txt`,
      urlList: chunk,
    };
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });
    console.log(`IndexNow chunk ${i / CHUNK + 1}: ${res.status} — ${chunk.length} URLs`);
  }
}

const urls = await getSitemapUrls();
console.log(`📤 Submitting ${urls.length} URLs to IndexNow…`);
await submit(urls);
console.log('✅ IndexNow submission complete.');
