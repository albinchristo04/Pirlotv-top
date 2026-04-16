// src/lib/config.ts
export const PLAYER_BASE_URL = 'https://bolaloca.my/player';
export const DATA_URL =
  'https://raw.githubusercontent.com/albinchristo04/arda/refs/heads/main/rereyano_data.json';
export const SITE_URL = 'https://pirlo-tv.top';
export const SITE_NAME = 'Pirlo TV';
export const SITE_TAGLINE = 'Pirlo TV — Roja Directa · Tarjeta Roja TV';
export const INDEXNOW_KEY = import.meta.env.INDEXNOW_KEY ?? '';
export const REBUILD_INTERVAL_HOURS = 3;

export const SPORT_MAP: Record<string, { sport: string; sportSlug: string; leagueSlug: string }> = {
  'Ligue Des Champions': { sport: 'Fútbol', sportSlug: 'futbol', leagueSlug: 'champions-league' },
  'Copa Argentina':      { sport: 'Fútbol', sportSlug: 'futbol', leagueSlug: 'copa-argentina' },
  'Ecuador Ligapro':     { sport: 'Fútbol', sportSlug: 'futbol', leagueSlug: 'liga-ecuador' },
  'Concacaf Champions Cup': { sport: 'Fútbol', sportSlug: 'futbol', leagueSlug: 'concacaf' },
  'Liga MX':             { sport: 'Fútbol', sportSlug: 'futbol', leagueSlug: 'liga-mx' },
  'La Liga':             { sport: 'Fútbol', sportSlug: 'futbol', leagueSlug: 'laliga' },
  'Copa Libertadores':   { sport: 'Fútbol', sportSlug: 'futbol', leagueSlug: 'copa-libertadores' },
  'Copa Sudamericana':   { sport: 'Fútbol', sportSlug: 'futbol', leagueSlug: 'copa-sudamericana' },
  'NBA':                 { sport: 'Baloncesto', sportSlug: 'nba', leagueSlug: 'nba' },
  'NHL':                 { sport: 'Hockey',     sportSlug: 'nhl', leagueSlug: 'nhl' },
  'MLB':                 { sport: 'Béisbol',    sportSlug: 'mlb', leagueSlug: 'mlb' },
  'MotoGP':              { sport: 'MotoGP',     sportSlug: 'motogp', leagueSlug: 'motogp' },
};

export const LANG_LABELS: Record<string, string> = {
  es: 'Español',
  gb: 'Inglés',
  fr: 'Francés',
  it: 'Italiano',
  de: 'Alemán',
  us: 'Inglés (US)',
  pt: 'Portugués',
};
