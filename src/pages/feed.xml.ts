// src/pages/feed.xml.ts
// Astro static endpoint — outputs /feed.xml at build time

import { getMatches } from '../lib/data';
import { SITE_URL, SITE_NAME } from '../lib/config';

export async function GET() {
  const matches = await getMatches();
  const now = new Date().toUTCString();

  const items = matches
    .slice(0, 50)
    .map((m) => {
      return [
        '    <item>',
        `      <title><![CDATA[${m.team1} vs ${m.team2} en Vivo — ${m.league} · Pirlo TV]]></title>`,
        `      <link>${SITE_URL}/partido/${m.slug}/</link>`,
        `      <guid isPermaLink="true">${SITE_URL}/partido/${m.slug}/</guid>`,
        `      <pubDate>${now}</pubDate>`,
        `      <description><![CDATA[Ver ${m.team1} vs ${m.team2} en vivo hoy en Pirlo TV. ${m.league} en directo gratis. ${m.channels.length} canales. ${m.timezones}]]></description>`,
        '    </item>',
      ].join('\n');
    })
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>${SITE_NAME} — Partidos en Vivo</title>`,
    `    <link>${SITE_URL}</link>`,
    `    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />`,
    '    <description>Pirlo TV — Ver deportes en vivo gratis. Roja Directa · Tarjeta Roja TV.</description>',
    '    <language>es</language>',
    `    <lastBuildDate>${now}</lastBuildDate>`,
    '    <ttl>180</ttl>',
    items,
    '  </channel>',
    '</rss>',
  ].join('\n');

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
