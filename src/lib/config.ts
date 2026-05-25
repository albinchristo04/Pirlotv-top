// src/lib/config.ts
export const PLAYER_BASE_URL = 'https://bolaloca.my/player';
export const DATA_URL =
  'https://sportsonline.ppvtv.top/api/matches.json';
export const SITE_URL = 'https://pirlo-tv.top';
export const SITE_NAME = 'Pirlo TV';
export const SITE_TAGLINE = 'Pirlo TV — Roja Directa · Tarjeta Roja TV';
export const INDEXNOW_KEY = import.meta.env.INDEXNOW_KEY ?? '';
export const REBUILD_INTERVAL_HOURS = 3;

export const SPORT_MAP: Record<string, { sport: string; sportSlug: string; leagueSlug: string }> = {
  // Source 1 (rereyano) league names
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

  // Source 2 (ppv.to) league tag names
  'LaLiga':              { sport: 'Fútbol', sportSlug: 'futbol', leagueSlug: 'laliga' },
  'Premier League':      { sport: 'Fútbol', sportSlug: 'futbol', leagueSlug: 'premier-league' },
  'Bundesliga':          { sport: 'Fútbol', sportSlug: 'futbol', leagueSlug: 'bundesliga' },
  'Serie A':             { sport: 'Fútbol', sportSlug: 'futbol', leagueSlug: 'seriea' },
  'Ligue 1':             { sport: 'Fútbol', sportSlug: 'futbol', leagueSlug: 'ligue1' },
  'MLS':                 { sport: 'Fútbol', sportSlug: 'futbol', leagueSlug: 'mls' },
  'EFL League One':      { sport: 'Fútbol', sportSlug: 'futbol', leagueSlug: 'efl-league-one' },
  'EFL League Two':      { sport: 'Fútbol', sportSlug: 'futbol', leagueSlug: 'efl-league-two' },
  'Indian Premier League': { sport: 'Críquet', sportSlug: 'deportes', leagueSlug: 'ipl' },
  'NRL':                 { sport: 'Rugby',  sportSlug: 'deportes', leagueSlug: 'nrl' },
  'WNBA':                { sport: 'Baloncesto', sportSlug: 'nba', leagueSlug: 'wnba' },

  // Category name fallbacks (used when tag is a channel name like FOX, NBC, etc.)
  'Baseball':            { sport: 'Béisbol',    sportSlug: 'mlb', leagueSlug: 'mlb' },
  'Basketball':          { sport: 'Baloncesto', sportSlug: 'nba', leagueSlug: 'nba' },
  'American Football':   { sport: 'Fútbol Americano', sportSlug: 'deportes', leagueSlug: 'nfl' },
  'Australian Football': { sport: 'Fútbol Australiano', sportSlug: 'deportes', leagueSlug: 'afl' },
  'Ice Hockey':          { sport: 'Hockey',     sportSlug: 'nhl', leagueSlug: 'nhl' },
  'Football':            { sport: 'Fútbol',     sportSlug: 'futbol', leagueSlug: 'otros' },
  'Cricket':             { sport: 'Críquet',    sportSlug: 'deportes', leagueSlug: 'ipl' },
  'Rugby League':        { sport: 'Rugby',      sportSlug: 'deportes', leagueSlug: 'nrl' },
  'Wrestling':           { sport: 'Lucha Libre', sportSlug: 'deportes', leagueSlug: 'wwe' },
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
