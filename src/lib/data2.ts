// src/lib/data2.ts
import type { Match } from './types';
import { SPORT_MAP } from './config';
import { matchSlug } from './slugs';
import { getMatchTimezones } from './timezones';

const DATA2_URL = 'https://raw.githubusercontent.com/albinchristo04/ptv/refs/heads/main/events.json';

let _cache: Match[] | null = null;

function pad(n: number) { 
  return n < 10 ? '0' + n : n.toString(); 
}

export async function getMatches2(): Promise<Match[]> {
  if (_cache) return _cache;

  let rawData: any = null;
  try {
    const res = await fetch(DATA2_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    rawData = await res.json();
  } catch (e) {
    console.warn('[data2] fetch failed:', e);
    return [];
  }

  const streamsCategory = rawData?.events?.streams || [];
  const processed: Match[] = [];

  for (const category of streamsCategory) {
    for (const ev of category.streams || []) {
      // Standardize the name string which is usually "Team A vs. Team B"
      let team1 = "Equipo 1";
      let team2 = "Equipo 2";
      if (ev.name) {
        const parts = ev.name.split(/ vs\.? /i);
        if (parts.length === 2) {
          team1 = parts[0].trim();
          team2 = parts[1].trim();
        } else {
          team1 = ev.name;
          team2 = "";
        }
      }

      // Convert UNUX timestamp to Date object
      const dateObj = new Date(ev.starts_at * 1000);
      const timeUTC = `${pad(dateObj.getUTCHours())}:${pad(dateObj.getUTCMinutes())}`;
      
      const months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
      const dateLabel = `${dateObj.getUTCDate()} ${months[dateObj.getUTCMonth()]} ${dateObj.getUTCFullYear()}`;

      // Map the tag (league name) to our configuration maps, fallback if missing
      const leagueName = ev.tag || category.category_name || "Otros";
      const info = SPORT_MAP[leagueName] ?? {
        sport: category.category_name || 'Deportes',
        sportSlug: 'deportes',
        leagueSlug: 'otros',
      };

      processed.push({
        id: ev.id,
        team1,
        team2,
        league: leagueName,
        time: timeUTC,
        date: dateObj.toISOString(),
        // Map the new source's ID and locale to the channels format we expect
        channels: [
          { id: ev.id, lang: ev.locale || 'es' }
        ],
        slug: matchSlug(team1, team2) + `-${ev.id}`, // ensure unique slug
        sportSlug: info.sportSlug,
        sportLabel: info.sport,
        leagueSlug: info.leagueSlug,
        dateLabel,
        timezones: getMatchTimezones(timeUTC)
      });
    }
  }

  _cache = processed;
  return _cache;
}
