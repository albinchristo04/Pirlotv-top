// src/lib/data.ts
import type { Match, RawMatch } from './types';
import { DATA_URL, SPORT_MAP } from './config';
import { matchSlug } from './slugs';
import { getMatchTimezones } from './timezones';

let _cache: Match[] | null = null;

function normalizeTime(raw: string): string {
  // Accepts ISO "2026-04-16T21:00:00Z" or "21:00" or "21:00:00"
  const iso = raw.match(/T(\d{2}:\d{2})/);
  if (iso) return iso[1];
  const hm = raw.match(/^(\d{1,2}:\d{2})/);
  if (hm) return hm[1];
  return raw;
}

function normalizeDate(raw: string): string {
  const iso = raw.match(/^(\d{4}-\d{2}-\d{2})/);
  if (iso) {
    const [, y, m, d] = iso[1].split('-').reduce((acc: string[], v, i) => { acc.push(v); return acc; }, []);
    const months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const dateObj = new Date(raw);
    return `${dateObj.getUTCDate()} ${months[dateObj.getUTCMonth()]} ${dateObj.getUTCFullYear()}`;
  }
  return raw;
}

export async function getMatches(): Promise<Match[]> {
  if (_cache) return _cache;

  let raw: RawMatch[] = [];
  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    // Handle both array root and {data: [...]} wrapper
    raw = Array.isArray(json) ? json : (json.data ?? json.matches ?? json.events ?? []);
  } catch (e) {
    console.warn('[data] fetch failed, using empty dataset:', e);
    raw = [];
  }

  _cache = raw.map((m: RawMatch): Match => {
    const timeUTC = normalizeTime(m.time ?? '00:00');
    const dateRaw = m.date ?? m.time ?? new Date().toISOString();
    const info = SPORT_MAP[m.league] ?? {
      sport: 'Deportes',
      sportSlug: 'deportes',
      leagueSlug: 'otros',
    };
    return {
      ...m,
      time: timeUTC,
      slug: matchSlug(m.team1, m.team2),
      sportSlug: info.sportSlug,
      sportLabel: info.sport,
      leagueSlug: info.leagueSlug,
      dateLabel: normalizeDate(dateRaw),
      timezones: getMatchTimezones(timeUTC),
    };
  });

  return _cache;
}

export async function getMatchesBySport(sportSlug: string): Promise<Match[]> {
  const all = await getMatches();
  return all.filter((m) => m.sportSlug === sportSlug);
}

export async function getMatchesByLeague(leagueSlug: string): Promise<Match[]> {
  const all = await getMatches();
  return all.filter((m) => m.leagueSlug === leagueSlug);
}

export async function getMatchBySlug(slug: string): Promise<Match | undefined> {
  const all = await getMatches();
  return all.find((m) => m.slug === slug);
}
