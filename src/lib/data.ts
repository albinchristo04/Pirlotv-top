// src/lib/data.ts
import type { Match, Channel } from './types';
import { DATA_URL } from './config';
import { matchSlug } from './slugs';
import { getMatchTimezones } from './timezones';

let _cache: Match[] | null = null;

const DAYS_MAP: Record<string, number> = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
};

function getMatchDate(dayStr: string, generatedStr: string): Date {
  const genDate = new Date(generatedStr);
  const genDay = genDate.getUTCDay(); // 0 to 6
  const targetDay = DAYS_MAP[dayStr.toUpperCase()] ?? genDay;
  
  let diff = targetDay - genDay;
  if (diff < -1) {
    diff += 7;
  } else if (diff > 5) {
    diff -= 7;
  }
  
  const matchDate = new Date(genDate.getTime());
  matchDate.setUTCDate(genDate.getUTCDate() + diff);
  return matchDate;
}

function normalizeLang(label: string): string {
  const lbl = label.toLowerCase();
  if (lbl.includes('es') || lbl.includes('lat') || lbl.includes('spa') || lbl.includes('castellano') || lbl.includes('spn')) return 'es';
  if (lbl.includes('en') || lbl.includes('eng') || lbl.includes('us') || lbl.includes('uk') || lbl.includes('gb')) return 'gb';
  if (lbl.includes('pt') || lbl.includes('br') || lbl.includes('portugues') || lbl.includes('portuguese')) return 'pt';
  if (lbl.includes('fr') || lbl.includes('french') || lbl.includes('fra')) return 'fr';
  if (lbl.includes('de') || lbl.includes('german') || lbl.includes('ger') || lbl.includes('deutsch')) return 'de';
  if (lbl.includes('it') || lbl.includes('italian') || lbl.includes('ita')) return 'it';
  return 'es'; // default to Spanish
}

function classifyMatch(title: string): { league: string; leagueSlug: string; sportLabel: string; sportSlug: string } {
  const t = title.toLowerCase();
  
  // MotoGP
  if (t.includes('motogp') || t.includes('moto gp') || t.includes('motociclismo') || t.includes('moto2') || t.includes('moto3')) {
    return { league: 'MotoGP', leagueSlug: 'motogp', sportLabel: 'MotoGP', sportSlug: 'motogp' };
  }
  
  // NBA
  if (t.includes('nba') || t.includes('basketball') || t.includes('baloncesto') || t.includes('wnba') || t.includes('lakers') || t.includes('celtics') || t.includes('warriors')) {
    return { league: 'NBA', leagueSlug: 'nba', sportLabel: 'Baloncesto', sportSlug: 'nba' };
  }
  
  // MLB
  if (t.includes('mlb') || t.includes('baseball') || t.includes('béisbol') || t.includes('yankees') || t.includes('red sox') || t.includes('dodgers') || t.includes('astros') || t.includes('padres')) {
    return { league: 'MLB', leagueSlug: 'mlb', sportLabel: 'Béisbol', sportSlug: 'mlb' };
  }
  
  // NHL
  if (t.includes('nhl') || t.includes('hockey') || t.includes('canadiens') || t.includes('hurricanes') || t.includes('blackhawks') || t.includes('penguins')) {
    return { league: 'NHL', leagueSlug: 'nhl', sportLabel: 'Hockey', sportSlug: 'nhl' };
  }

  // Libertadores / Sudamericana
  if (t.includes('libertadores')) {
    return { league: 'Copa Libertadores', leagueSlug: 'copa-libertadores', sportLabel: 'Fútbol', sportSlug: 'futbol' };
  }
  if (t.includes('sudamericana')) {
    return { league: 'Copa Sudamericana', leagueSlug: 'copa-sudamericana', sportLabel: 'Fútbol', sportSlug: 'futbol' };
  }

  // Liga MX
  const ligaMxTeams = [
    'pumas', 'cruz azul', 'chivas', 'guadalajara', 'america', 'américa', 'monterrey', 'tigres', 'toluca',
    'pachuca', 'santos laguna', 'atlas', 'tijuana', 'necaxa', 'mazatlan', 'mazatlán', 'juarez', 'juárez',
    'queretaro', 'querétaro', 'puebla', 'san luis', 'león', 'leon'
  ];
  if (ligaMxTeams.some(team => t.includes(team))) {
    return { league: 'Liga MX', leagueSlug: 'liga-mx', sportLabel: 'Fútbol', sportSlug: 'futbol' };
  }

  // Fútbol Argentino
  const argTeams = [
    'boca juniors', 'boca', 'river plate', 'river', 'racing club', 'racing', 'independiente', 'san lorenzo',
    'vélez', 'velez', 'estudiantes', 'gimnasia', 'huracan', 'huracán', 'talleres', 'belgrano', 'newell',
    'rosario central', 'lanus', 'lanús', 'banfield', 'defensa y justicia', 'argentinos juniors'
  ];
  if (argTeams.some(team => t.includes(team)) || t.includes('copa argentina') || t.includes('argentina liga')) {
    return { league: 'Fútbol Argentino', leagueSlug: 'futbol-argentino', sportLabel: 'Fútbol', sportSlug: 'futbol' };
  }

  // Brasileirao
  const brTeams = [
    'sao paulo', 'são paulo', 'palmeiras', 'flamengo', 'corinthians', 'fluminense', 'vasco', 'botafogo',
    'gremio', 'grêmio', 'internacional', 'cruzeiro', 'atletico mineiro', 'atlético mineiro', 'bahia', 'coritiba',
    'paranaense', 'fortaleza', 'bragantino'
  ];
  if (brTeams.some(team => t.includes(team))) {
    return { league: 'Brasileirão', leagueSlug: 'brasileirao', sportLabel: 'Fútbol', sportSlug: 'futbol' };
  }

  // Liga Chilena
  const clTeams = [
    'colo colo', 'colo-colo', 'u. de chile', 'universidad de chile', 'u. catolica', 'u. católica', 'universidad catolica',
    'union española', 'unión española', 'audax', 'palestino', 'coquimbo', 'huachipato', 'cobreloa', 'copiapo', 'copiapó',
    'nublense', 'ñublense', 'cobresal'
  ];
  if (clTeams.some(team => t.includes(team))) {
    return { league: 'Liga Chilena', leagueSlug: 'liga-chilena', sportLabel: 'Fútbol', sportSlug: 'futbol' };
  }

  // Liga Ecuador
  const ecTeams = ['ldu quito', 'barcelona sc', 'emelec', 'independiente del valle', 'aucas', 'el nacional', 'ligapro'];
  if (ecTeams.some(team => t.includes(team)) || t.includes('ecuador') || t.includes('ligapro ecuador')) {
    return { league: 'Liga Pro Ecuador', leagueSlug: 'liga-ecuador', sportLabel: 'Fútbol', sportSlug: 'futbol' };
  }

  // Champions League
  if (t.includes('champions league') || t.includes('ucl') || t.includes('champions cup')) {
    return { league: 'Champions League', leagueSlug: 'champions-league', sportLabel: 'Fútbol', sportSlug: 'futbol' };
  }

  // LaLiga
  const esTeams = [
    'real madrid', 'barcelona', 'atletico madrid', 'atlético de madrid', 'sevilla', 'real betis', 'betis',
    'real sociedad', 'villarreal', 'valencia', 'athletic', 'osasuna', 'girona', 'celta', 'getafe', 'mallorca'
  ];
  if (esTeams.some(team => t.includes(team))) {
    return { league: 'LaLiga', leagueSlug: 'laliga', sportLabel: 'Fútbol', sportSlug: 'futbol' };
  }

  // Premier League
  const gbTeams = [
    'arsenal', 'chelsea', 'liverpool', 'man city', 'manchester city', 'man utd', 'manchester united',
    'tottenham', 'newcastle', 'aston villa', 'west ham', 'everton'
  ];
  if (gbTeams.some(team => t.includes(team))) {
    return { league: 'Premier League', leagueSlug: 'premier-league', sportLabel: 'Fútbol', sportSlug: 'futbol' };
  }

  // MLS
  if (t.includes('mls') || t.includes('inter miami', ) || t.includes('lafc') || t.includes('sounders') || t.includes('galaxy') || t.includes('major league soccer')) {
    return { league: 'MLS', leagueSlug: 'mls', sportLabel: 'Fútbol', sportSlug: 'futbol' };
  }

  // Default to Fútbol if it's "x" or "vs", otherwise Deportes
  if (t.includes(' x ') || t.includes(' vs ') || t.includes(' vs. ')) {
    return { league: 'Fútbol', leagueSlug: 'futbol', sportLabel: 'Fútbol', sportSlug: 'futbol' };
  }

  return { league: 'Deportes', leagueSlug: 'deportes', sportLabel: 'Deportes', sportSlug: 'deportes' };
}

export async function getMatches(): Promise<Match[]> {
  if (_cache) return _cache;

  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    
    const generated = data.generated ?? new Date().toISOString();
    const rawMatches = data.matches ?? [];
    
    const processed: Match[] = rawMatches.map((m: any): Match => {
      let titleClean = m.title || '';
      let isNBA = false;
      let isNHL = false;
      
      if (titleClean.toUpperCase().startsWith('NBA: ')) {
        isNBA = true;
        titleClean = titleClean.substring(5);
      } else if (titleClean.toUpperCase().startsWith('NHL: ')) {
        isNHL = true;
        titleClean = titleClean.substring(5);
      }
      
      let team1 = 'Equipo 1';
      let team2 = 'Equipo 2';
      let parts: string[] = [];
      
      if (titleClean.includes(' x ')) {
        parts = titleClean.split(' x ');
      } else if (titleClean.includes(' @ ')) {
        parts = titleClean.split(' @ ');
      } else if (titleClean.includes(' vs ')) {
        parts = titleClean.split(' vs ');
      } else if (titleClean.includes(' vs. ')) {
        parts = titleClean.split(' vs. ');
      }
      
      if (parts.length === 2) {
        team1 = parts[0].trim();
        team2 = parts[1].trim();
      } else {
        team1 = titleClean.trim();
        team2 = '';
      }
      
      const matchDate = getMatchDate(m.day || 'SUNDAY', generated);
      const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
      const dateLabel = `${matchDate.getUTCDate()} ${months[matchDate.getUTCMonth()]} ${matchDate.getUTCFullYear()}`;
      
      const classification = classifyMatch(m.title || '');
      
      const channels: Channel[] = (m.channels ?? []).map((ch: any, idx: number): Channel => {
        let localUrl = '';
        if (ch.embed_url) {
          try {
            const urlObj = new URL(ch.embed_url);
            let pathname = urlObj.pathname;
            if (pathname.startsWith('/embed/')) {
              pathname = pathname.substring(6); // remove leading '/embed'
            }
            localUrl = `/embed${pathname}${urlObj.search}`;
          } catch {
            localUrl = ch.embed_url;
          }
        }
        return {
          id: `${m.day}-${m.index}-ch${idx}`,
          lang: normalizeLang(ch.label || 'ES'),
          url: localUrl,
        };
      });

      const uniqueId = `${m.day}-${m.index}`;
      
      return {
        id: uniqueId,
        name: m.title || `${team1} vs ${team2}`,
        team1,
        team2,
        league: classification.league,
        time: m.time || '00:00',
        date: matchDate.toISOString(),
        channels,
        slug: matchSlug(team1, team2) + `-${uniqueId}`,
        sportSlug: classification.sportSlug,
        sportLabel: classification.sportLabel,
        leagueSlug: classification.leagueSlug,
        dateLabel,
        timezones: getMatchTimezones(m.time || '00:00'),
      };
    });

    _cache = processed;
    console.log(`[data] fetched and parsed ${_cache.length} matches from sportsonline API`);
    return _cache;
  } catch (e) {
    console.warn('[data] failed to fetch from sportsonline API, returning empty list:', e);
    return [];
  }
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
