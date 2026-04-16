// src/pages/robots.txt.ts
// Astro static endpoint — outputs /robots.txt at build time

import { SITE_URL } from '../lib/config';

export function GET() {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
  return new Response(body, {
    status: 200,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
