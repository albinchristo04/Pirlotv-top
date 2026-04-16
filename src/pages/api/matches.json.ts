// src/pages/api/matches.json.ts
// API Endpoint exposing live match data
import { getMatches } from '../../lib/data';
import { SITE_URL } from '../../lib/config';

export async function GET() {
  const matches = await getMatches();

  return new Response(JSON.stringify(matches, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      // Allow cross-origin requests so your paid users can consume this API from their domains
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
