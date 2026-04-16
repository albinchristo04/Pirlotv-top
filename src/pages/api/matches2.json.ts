// src/pages/api/matches2.json.ts
import { getMatches2 } from '../../lib/data2';

export async function GET() {
  const matches = await getMatches2();

  return new Response(JSON.stringify(matches, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
