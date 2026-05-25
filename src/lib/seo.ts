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
    title: `Pirlo TV — Fútbol Libre en Vivo Gratis · Roja Directa en Vivo · Tarjeta Roja | PirloTV`,
    description: `Pirlo TV — Ver fútbol libre en vivo gratis hoy. Roja Directa en Vivo · Tarjeta Roja TV · RojaDirecta. Fútbol, MLB, NBA, MotoGP en directo con múltiples canales. La mejor alternativa a futbol libre y rojadirecta.`,
    canonical: SITE_URL + '/',
    ogTitle: 'Pirlo TV — Fútbol Libre en Vivo Gratis · Roja Directa',
    ogDescription: 'Ver fútbol en vivo gratis hoy. Liga MX, Copa Libertadores, Fútbol Argentino, NBA, MLB. Múltiples canales y servidores. Gratis sin registro.',
  };
}

export function sportSeo(sport: string, sportSlug: string, count: number): SeoMeta {
  const u = `${SITE_URL}/${sportSlug}/`;
  return {
    title: `${sport} En Vivo Hoy — Ver ${sport} Gratis | Pirlo TV · Fútbol Libre`,
    description: `Ver ${sport} en vivo gratis en Pirlo TV. ${count} partidos hoy en directo. Múltiples canales en español. Roja directa ${sport.toLowerCase()} en vivo.`,
    canonical: u,
    ogTitle: `${sport} En Vivo Hoy | Pirlo TV`,
    ogDescription: `${count} partidos de ${sport} disponibles ahora en Pirlo TV. Gratis sin registro.`,
  };
}

export function leagueSeo(league: string, leagueSlug: string, count: number): SeoMeta {
  const u = `${SITE_URL}/${leagueSlug}/`;
  return {
    title: `${league} En Vivo — Partidos Hoy Gratis | Pirlo TV · Roja Directa`,
    description: `Ver ${league} en vivo gratis en Pirlo TV hoy. ${count} partidos en directo. Múltiples canales en español, inglés y portugués. Fútbol libre · Roja directa.`,
    canonical: u,
    ogTitle: `${league} En Vivo | Pirlo TV`,
    ogDescription: `${count} partidos de ${league} disponibles ahora gratis en Pirlo TV.`,
  };
}

export function matchSeo(m: Match): SeoMeta {
  const u = `${SITE_URL}/partido/${m.slug}/`;
  return {
    title: `${m.team1} vs ${m.team2} En Vivo — ${m.league} · Dónde Ver Gratis | Pirlo TV`,
    description: `Ver ${m.team1} vs ${m.team2} en vivo hoy en Pirlo TV. ${m.league} — ${m.dateLabel} a las ${m.time} UTC. ${m.channels.length} canales disponibles. Fútbol libre gratis sin registro.`,
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
    'pirlo-tv': `Pirlo TV En Vivo — Fútbol Libre y Deportes en Directo Gratis | PirloTV`,
    'tarjeta-roja': `Tarjeta Roja TV En Vivo — Ver Partidos Gratis Hoy | Pirlo TV · Roja Directa`,
    'roja-directa-pirlo-tv': `Roja Directa Pirlo TV En Vivo — Partidos Gratis Hoy | PirloTV · RojaDirecta`,
    'tarjeta-roja-pirlo-tv': `Tarjeta Roja Pirlo TV En Vivo — Partidos Gratis | PirloTV`,
    'futbol-libre': `Fútbol Libre En Vivo — Ver Partidos de Fútbol Gratis Hoy | Pirlo TV`,
    'roja-directa-en-vivo': `Roja Directa en Vivo — Deportes Gratis Hoy · RojaDirecta | Pirlo TV`,
    'futbol-en-vivo': `Fútbol en Vivo Hoy — Transmisiones Gratis en Directo | Pirlo TV · Fútbol Libre`,
  };
  const descs: Record<string, string> = {
    'pirlo-tv': `Pirlo TV en vivo gratis. Ver fútbol libre, béisbol, baloncesto en directo. ${count} partidos disponibles hoy con múltiples canales y servidores. La mejor alternativa a rojadirecta.`,
    'tarjeta-roja': `Tarjeta Roja TV en vivo gratis en Pirlo TV. Ver fútbol, béisbol, baloncesto en directo. ${count} partidos disponibles hoy. Roja directa en vivo.`,
    'roja-directa-pirlo-tv': `Roja Directa Pirlo TV en vivo. ${count} partidos disponibles hoy gratis con múltiples canales. Pirlo TV · RojaDirecta · Fútbol Libre.`,
    'tarjeta-roja-pirlo-tv': `Tarjeta Roja Pirlo TV en vivo. ${count} partidos disponibles hoy gratis. Pirlo TV · Tarjeta Roja TV.`,
    'futbol-libre': `Fútbol Libre en vivo gratis. Ver partidos de Liga MX, Copa Libertadores, Fútbol Argentino, LaLiga y más. ${count} partidos hoy en Pirlo TV. Roja directa · Tarjeta roja.`,
    'roja-directa-en-vivo': `Roja Directa en vivo gratis hoy. ${count} partidos de fútbol, béisbol, baloncesto y más deportes en directo. RojaDirecta en Pirlo TV con múltiples canales.`,
    'futbol-en-vivo': `Fútbol en vivo hoy gratis. ${count} partidos de fútbol en directo: Liga MX, Copa Libertadores, Fútbol Argentino, LaLiga. Pirlo TV · Fútbol libre · Roja directa.`,
  };
  return {
    title: titles[slug] ?? `${name} En Vivo | Pirlo TV`,
    description: descs[slug] ?? `Ver ${name} en vivo gratis. ${count} partidos hoy.`,
    canonical: u,
    ogTitle: titles[slug] ?? `${name} | Pirlo TV`,
    ogDescription: descs[slug] ?? `${count} partidos disponibles ahora en Pirlo TV.`,
  };
}

export function hubSeo(count: number): SeoMeta {
  return {
    title: 'Hub de Competiciones en Vivo — Ligas Latinoamericanas y Mundiales | Pirlo TV · Fútbol Libre',
    description: `Accede al Hub de Competiciones en Pirlo TV. ${count} partidos en vivo hoy. Liga MX, Copa Libertadores, Fútbol Argentino, Brasileirão, LaLiga, NBA, MLB, MotoGP. Fútbol libre · Roja directa en vivo gratis.`,
    canonical: SITE_URL + '/hub/',
    ogTitle: 'Hub de Competiciones — Pirlo TV · Fútbol Libre',
    ogDescription: 'Las ligas más importantes de Latinoamérica y el mundo en un solo lugar. Fútbol, NBA, MLB, MotoGP gratis.',
  };
}

// Schema generators
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    alternateName: [
      'PirloTV', 'Pirlo TV En Vivo', 'Roja Directa', 'Tarjeta Roja TV',
      'RojaDirecta', 'Roja Dirécta', 'Fútbol Libre', 'Futbol Libre',
      'Roja Directa En Vivo', 'RojaDirecta En Vivo', 'Futbol Libre en Vivo',
      'Pirlo TV Gratis', 'PirloTV En Vivo'
    ],
    url: SITE_URL,
    inLanguage: 'es',
    publisher: publisherSchema(),
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function publisherSchema() {
  return {
    '@type': 'Organization',
    name: 'Pirlo TV',
    url: SITE_URL,
    alternateName: ['PirloTV', 'Fútbol Libre', 'Roja Directa', 'Tarjeta Roja TV'],
  };
}

export function webPageSchema(seo: SeoMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: seo.title,
    description: seo.description,
    url: seo.canonical,
    inLanguage: 'es',
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    publisher: publisherSchema(),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.hero__title', '.hero__sub', '.faq dt', '.faq dd'],
    },
  };
}

export function sportsEventSchema(m: Match) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: `${m.team1} vs ${m.team2}`,
    startDate: m.date,
    location: { '@type': 'VirtualLocation', url: `${SITE_URL}/partido/${m.slug}/` },
    organizer: { '@type': 'SportsOrganization', name: m.league },
    competitor: [
      { '@type': 'SportsTeam', name: m.team1 },
      { '@type': 'SportsTeam', name: m.team2 },
    ],
    publisher: publisherSchema(),
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
      {
        '@type': 'Question',
        name: `¿Es gratis ver ${m.team1} vs ${m.team2}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Sí, ver ${m.team1} vs ${m.team2} es completamente gratis en Pirlo TV (pirlo-tv.top). No requiere registro ni suscripción. Accede directamente y elige entre ${m.channels.length} canales disponibles.`,
        },
      },
      {
        '@type': 'Question',
        name: `¿Necesito registro para ver ${m.team1} vs ${m.team2} en vivo?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `No, no necesitas registro para ver ${m.team1} vs ${m.team2}. Pirlo TV ofrece acceso directo sin registro, sin suscripción y sin pago.`,
        },
      },
    ],
  };
}

export function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function itemListSchema(name: string, matches: Match[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: matches.length,
    itemListElement: matches.slice(0, 20).map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${m.team1} vs ${m.team2}`,
      url: `${SITE_URL}/partido/${m.slug}/`,
    })),
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
