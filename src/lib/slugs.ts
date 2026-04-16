// src/lib/slugs.ts
const ACCENT_MAP: Record<string, string> = {
  á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u',
  Á: 'a', É: 'e', Í: 'i', Ó: 'o', Ú: 'u',
  ñ: 'n', Ñ: 'n', ü: 'u', Ü: 'u',
};

export function toSlug(str: string): string {
  return str
    .split('')
    .map((c) => ACCENT_MAP[c] ?? c)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function matchSlug(team1: string, team2: string): string {
  return `${toSlug(team1)}-vs-${toSlug(team2)}`;
}
