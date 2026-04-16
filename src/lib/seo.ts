// src/lib/seo.ts
import { SITE_NAME, SITE_URL } from './config';
import type { Match } from './types';

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
}

export function homeSeo(): SeoMeta {
  return {
    title: `Pirlo TV — Deportes en Vivo Gratis · Roja Directa · Tarjeta Roja | PirloTV`,
    description: `Pirlo TV — Ver deportes en vivo gratis. Roja Directa · Tarjeta Roja TV. Fútbol, MLB, NBA en directo hoy con múltiples canales.`,
    canonical: SITE_URL + '/',
    ogTitle: 'Pirlo TV — Ver Deportes en Vivo Gratis',
    ogDescription: 'Fútbol, MLB, NBA, NHL en directo. Múltiples canales y servidores. Gratis sin registro.',
  };
}

export function sportSeo(sport: string, sportSlug: string, count: number): SeoMeta {
  const u = `${SITE_URL}/${sportSlug}/`;
  return {
    title: `${sport} En Vivo Hoy — Ver ${sport} Gratis | Pirlo TV`,
    description: `Ver ${sport} en vivo en Pirlo TV. ${count} partidos hoy en directo gratis. Múltiples canales en español, inglés y portugués.`,
    canonical: u,
    ogTitle: `${sport} En Vivo Hoy | Pirlo TV`,
    ogDescription: `${count} partidos de ${sport} disponibles ahora en Pirlo TV. Gratis sin registro.`,
  };
}

export function leagueSeo(league: string, leagueSlug: string, count: number): SeoMeta {
  const u = `${SITE_URL}/${leagueSlug}/`;
  return {
    title: `${league} En Vivo — Partidos Hoy Gratis | Pirlo TV`,
    description: `Ver ${league} en vivo en Pirlo TV. ${count} partidos hoy en directo gratis. Múltiples canales en español, inglés y portugués.`,
    canonical: u,
    ogTitle: `${league} En Vivo | Pirlo TV`,
    ogDescription: `${count} partidos de ${league} disponibles ahora gratis en Pirlo TV.`,
  };
}

export function matchSeo(m: Match): SeoMeta {
  const u = `${SITE_URL}/partido/${m.slug}/`;
  return {
    title: `${m.team1} vs ${m.team2} En Vivo — ${m.league} · Dónde Ver | Pirlo TV`,
    description: `Ver ${m.team1} vs ${m.team2} en vivo hoy en Pirlo TV. ${m.league} — ${m.dateLabel} a las ${m.time} UTC. ${m.channels.length} canales disponibles. ¿Dónde mirar? Aquí gratis.`,
    canonical: u,
    ogTitle: `${m.team1} vs ${m.team2} En Vivo | Pirlo TV`,
    ogDescription: `Ver ${m.team1} contra ${m.team2} en directo. ${m.league} — ${m.timezones}. Gratis en Pirlo TV.`,
  };
}

export function brandPageSeo(
  name: string,
  slug: string,
  count: number,
): SeoMeta {
  const u = `${SITE_URL}/${slug}/`;
  const titles: Record<string, string> = {
    'pirlo-tv': `Pirlo TV En Vivo — Fútbol y Deportes en Directo Gratis | PirloTV`,
    'tarjeta-roja': `Tarjeta Roja TV En Vivo — Ver Partidos Gratis | Pirlo TV`,
    'roja-directa-pirlo-tv': `Roja Directa Pirlo TV En Vivo — Partidos Gratis | PirloTV`,
    'tarjeta-roja-pirlo-tv': `Tarjeta Roja Pirlo TV En Vivo — Partidos Gratis | PirloTV`,
  };
  const descs: Record<string, string> = {
    'pirlo-tv': `Pirlo TV en vivo gratis. Ver fútbol, béisbol, baloncesto en directo. ${count} partidos disponibles hoy con múltiples canales y servidores.`,
    'tarjeta-roja': `Tarjeta Roja TV en vivo gratis en Pirlo TV. Ver fútbol, béisbol, baloncesto en directo. ${count} partidos disponibles hoy.`,
    'roja-directa-pirlo-tv': `Roja Directa Pirlo TV en vivo. ${count} partidos disponibles hoy gratis con múltiples canales. Pirlo TV · Roja Directa.`,
    'tarjeta-roja-pirlo-tv': `Tarjeta Roja Pirlo TV en vivo. ${count} partidos disponibles hoy gratis. Pirlo TV · Tarjeta Roja TV.`,
  };
  return {
    title: titles[slug] ?? `${name} En Vivo | Pirlo TV`,
    description: descs[slug] ?? `Ver ${name} en vivo gratis. ${count} partidos hoy.`,
    canonical: u,
    ogTitle: titles[slug] ?? `${name} | Pirlo TV`,
    ogDescription: descs[slug] ?? `${count} partidos disponibles ahora en Pirlo TV.`,
  };
}

// Schema generators
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    alternateName: ['PirloTV', 'Pirlo TV En Vivo', 'Roja Directa', 'Tarjeta Roja TV', 'RojaDirecta', 'Roja Dirécta'],
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function sportsEventSchema(m: Match) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: `${m.team1} vs ${m.team2}`,
    startDate: m.time,
    location: { '@type': 'VirtualLocation', url: `${SITE_URL}/partido/${m.slug}/` },
    organizer: { '@type': 'SportsOrganization', name: m.league },
    competitor: [
      { '@type': 'SportsTeam', name: m.team1 },
      { '@type': 'SportsTeam', name: m.team2 },
    ],
  };
}

export function faqMatchSchema(m: Match) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `¿Dónde mirar ${m.team1} contra ${m.team2}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Ver ${m.team1} vs ${m.team2} en vivo gratis en Pirlo TV (pirlo-tv.top). El partido comienza a las ${m.time} UTC. Disponible en ${m.channels.length} canales.`,
        },
      },
      {
        '@type': 'Question',
        name: `¿A qué hora juega ${m.team1} hoy?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${m.team1} juega a las ${m.timezones} contra ${m.team2} por ${m.league}.`,
        },
      },
      {
        '@type': 'Question',
        name: `¿En qué canal se transmite ${m.team1} vs ${m.team2}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `El partido se transmite con ${m.channels.length} canales disponibles. Ver gratis con 4 servidores en Pirlo TV.`,
        },
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
