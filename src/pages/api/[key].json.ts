// src/pages/api/[key].json.ts
// Secure API Endpoint exposing live match data
import { getMatches } from '../../lib/data';

// Define the precise key that generates the API endpoint securely
export function getStaticPaths() {
  return [
    { params: { key: '893a585698eb4b4490b1f299f8a9149c' } },
  ];
}

export async function GET() {
  const matches = await getMatches();

  return new Response(JSON.stringify(matches, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      // Allow cross-origin requests so paid solutions can consume this from their domains
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
