// src/pages/sitemap.xml.ts
// Astro static endpoint — outputs /sitemap.xml at build time

import { getMatches } from '../lib/data';
import { SITE_URL } from '../lib/config';

export async function GET() {
  const matches = await getMatches();
  const now = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'hourly' },
    { url: '/pirlo-tv/', priority: '1.0', changefreq: 'daily' },
    { url: '/tarjeta-roja/', priority: '0.9', changefreq: 'daily' },
    { url: '/roja-directa-pirlo-tv/', priority: '0.9', changefreq: 'daily' },
    { url: '/tarjeta-roja-pirlo-tv/', priority: '0.9', changefreq: 'daily' },
    { url: '/futbol/', priority: '0.8', changefreq: 'daily' },
    { url: '/mlb/', priority: '0.8', changefreq: 'daily' },
    { url: '/nba/', priority: '0.8', changefreq: 'daily' },
    { url: '/nhl/', priority: '0.8', changefreq: 'daily' },
    { url: '/beisbol/', priority: '0.8', changefreq: 'daily' },
    { url: '/motogp/', priority: '0.8', changefreq: 'daily' },
    { url: '/champions-league/', priority: '0.8', changefreq: 'daily' },
    { url: '/liga-mx/', priority: '0.8', changefreq: 'daily' },
    { url: '/laliga/', priority: '0.8', changefreq: 'daily' },
    { url: '/copa-libertadores/', priority: '0.8', changefreq: 'daily' },
    { url: '/copa-sudamericana/', priority: '0.7', changefreq: 'daily' },
  ];

  const matchUrls = matches.flatMap((m) => [
    { url: `/partido/${m.slug}/`, priority: '0.6', changefreq: 'hourly' },
    { url: `/ver/${m.slug}/`,     priority: '0.4', changefreq: 'hourly' },
    { url: `/en-vivo/${m.slug}/`, priority: '0.4', changefreq: 'hourly' },
  ]);

  const allUrls = [...staticPages, ...matchUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(({ url, priority, changefreq }) => `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
