import { Match, RawMatch } from '../../../lib/types';
import { getMatchTimezones } from '../../../lib/timezones';
import { matchSlug } from '../../../lib/slugs';
import { SPORT_MAP } from '../../../lib/config';

export async function GET() {
  try {
    const res = await fetch("https://raw.githubusercontent.com/albinchristo04/ptv/refs/heads/main/events.json");
    if (!res.ok) throw new Error("Failed to fetch V2 data");
    const payload = await res.json();

    // The JSON structure has an 'events' object which contains 'streams' array of categories
    const categories = payload.events?.streams || [];
    
    let mappedMatches: Match[] = [];

    for (const cat of categories) {
      const streams = cat.streams || [];
      for (const stream of streams) {
        
        // Parse "Team1 vs Team2" or "Team1 vs. Team2"
        const nameStr = stream.name || "";
        const parts = nameStr.split(/ vs\.? | - /i);
        const team1 = parts[0]?.trim() || "Event";
        const team2 = parts[1]?.trim() || "TBA";

        // Extract Unix Timestamp to ISO
        const dateObj = new Date(stream.starts_at * 1000);
        // Ensure double digits
        const hs = String(dateObj.getUTCHours()).padStart(2, '0');
        const ms = String(dateObj.getUTCMinutes()).padStart(2, '0');
        const timeUTC = `${hs}:${ms}`;
        const dateISO = dateObj.toISOString();

        // League / Category
        const leagueRaw = stream.tag || stream.category_name || cat.category;
        const info = Object.values(SPORT_MAP).find(s => 
           s.sport.toLowerCase() === cat.category?.toLowerCase() ||
           s.leagueSlug.toLowerCase().includes(leagueRaw.toLowerCase())
        ) || SPORT_MAP[leagueRaw] ?? {
          sport: cat.category || 'Deportes',
          sportSlug: cat.category?.toLowerCase() || 'deportes',
          leagueSlug: 'otros',
        };

        const slug = matchSlug(team1, team2);

        // Make it identical to our V1 structure but use the new iframe URL as the channel ID
        // (so users get the pooembed URL ready to embed)
        const match: Match = {
          id: `v2-${stream.id}`,
          team1,
          team2,
          league: leagueRaw,
          time: timeUTC,
          date: dateISO,
          // Users of V2 API will read channels[0].id as the direct URL to the iframe "Server 2"
          channels: [
            { id: stream.iframe, lang: stream.locale || 'en' }
          ],
          slug,
          sportSlug: info.sportSlug,
          sportLabel: info.sport,
          leagueSlug: info.leagueSlug,
          dateLabel: `${dateObj.getUTCDate()} \/ ${dateObj.getUTCMonth() + 1}`,
          timezones: getMatchTimezones(timeUTC),
        };

        mappedMatches.push(match);
      }
    }

    return new Response(JSON.stringify({
      success: true,
      message: "Server 2 API (V2 format)",
      data: mappedMatches
    }, null, 2), {
      status: 200,
      headers: {
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to load V2 API source" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
