// src/lib/data.ts
import type { Match, RawMatch } from './types';
import { DATA_URL, SPORT_MAP } from './config';
import { matchSlug } from './slugs';
import { getMatchTimezones } from './timezones';

// Source 2: ppv.to events via GitHub mirror
const DATA2_URL = 'https://raw.githubusercontent.com/albinchristo04/ptv/refs/heads/main/events.json';

let _cache: Match[] | null = null;

function pad(n: number) {
  return n < 10 ? '0' + n : n.toString();
}

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

/** Fetch + normalize source 1 (rereyano / zonalive) */
async function fetchSource1(): Promise<Match[]> {
  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const raw: RawMatch[] = Array.isArray(json)
      ? json
      : (json.data ?? json.matches ?? json.events ?? []);

    return raw.map((m: RawMatch): Match => {
      const timeUTC = normalizeTime(m.time ?? '00:00');
      const dateRaw = m.date ?? m.time ?? new Date().toISOString();
      const info = SPORT_MAP[m.league] ?? {
        sport: 'Deportes',
        sportSlug: 'deportes',
        leagueSlug: 'otros',
      };
      return {
        ...m,
        name: m.name ?? `${m.team1} vs ${m.team2}`,
        time: timeUTC,
        slug: matchSlug(m.team1, m.team2),
        sportSlug: info.sportSlug,
        sportLabel: info.sport,
        leagueSlug: info.leagueSlug,
        dateLabel: normalizeDate(dateRaw),
        timezones: getMatchTimezones(timeUTC),
      };
    });
  } catch (e) {
    console.warn('[data] source1 fetch failed:', e);
    return [];
  }
}

/** Fetch + normalize source 2 (ppv.to / events.json) */
async function fetchSource2(): Promise<Match[]> {
  try {
    const res = await fetch(DATA2_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rawData = await res.json();

    const streamsCategory = rawData?.events?.streams || [];
    const processed: Match[] = [];

    for (const category of streamsCategory) {
      for (const ev of category.streams || []) {
        let team1 = 'Equipo 1';
        let team2 = 'Equipo 2';
        if (ev.name) {
          const parts = ev.name.split(/ vs\.? /i);
          if (parts.length === 2) {
            team1 = parts[0].trim();
            team2 = parts[1].trim();
          } else {
            team1 = ev.name;
            team2 = '';
          }
        }

        const dateObj = new Date(ev.starts_at * 1000);
        const timeUTC = `${pad(dateObj.getUTCHours())}:${pad(dateObj.getUTCMinutes())}`;

        const months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
        const dateLabel = `${dateObj.getUTCDate()} ${months[dateObj.getUTCMonth()]} ${dateObj.getUTCFullYear()}`;

        const leagueName = ev.tag || category.category_name || 'Otros';
        const info = SPORT_MAP[leagueName] ?? {
          sport: category.category_name || 'Deportes',
          sportSlug: 'deportes',
          leagueSlug: 'otros',
        };

        const localIframe = ev.iframe
          ? ev.iframe.replace('https://pooembed.eu/', 'https://pirlo-tv.top/')
          : '';

        processed.push({
          id: ev.id,
          name: ev.name || `${team1} vs ${team2}`,
          team1,
          team2,
          league: leagueName,
          time: timeUTC,
          date: dateObj.toISOString(),
          channels: [
            {
              id: ev.id,
              lang: ev.locale || 'en',
              url: localIframe,
            },
          ],
          slug: matchSlug(team1, team2) + `-${ev.id}`,
          sportSlug: info.sportSlug,
          sportLabel: info.sport,
          leagueSlug: info.leagueSlug,
          dateLabel,
          timezones: getMatchTimezones(timeUTC),
        });
      }
    }

    return processed;
  } catch (e) {
    console.warn('[data] source2 fetch failed:', e);
    return [];
  }
}

/**
 * Merge both data sources. Fetches in parallel for speed.
 * Source 1 matches take priority when duplicates are found (by normalized name).
 */
export async function getMatches(): Promise<Match[]> {
  if (_cache) return _cache;

  const [src1, src2] = await Promise.all([fetchSource1(), fetchSource2()]);

  // Deduplicate: use normalized name as key. Source 1 wins on conflict.
  const seen = new Map<string, Match>();

  for (const m of src1) {
    const key = m.name.toLowerCase().replace(/\s+/g, ' ').trim();
    seen.set(key, m);
  }
  for (const m of src2) {
    const key = m.name.toLowerCase().replace(/\s+/g, ' ').trim();
    if (!seen.has(key)) {
      seen.set(key, m);
    }
  }

  _cache = Array.from(seen.values());
  console.log(`[data] merged ${src1.length} (src1) + ${src2.length} (src2) → ${_cache.length} matches`);
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
