// src/pages/robots.txt.ts
// Astro static endpoint — outputs /robots.txt at build time

import { SITE_URL } from '../lib/config';

export function GET() {
  const body = `# Pirlo TV — Fútbol Libre en Vivo · Roja Directa · Tarjeta Roja TV
# https://pirlo-tv.top

# Bing crawler
User-agent: bingbot
Allow: /
Crawl-delay: 1

User-agent: msnbot
Allow: /

# AI assistants (citation optimization)
User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Google-Extended
Allow: /

# General crawlers
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
  return new Response(body, {
    status: 200,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

