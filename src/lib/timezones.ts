// src/lib/timezones.ts
const TZ_OFFSETS: { label: string; offset: number }[] = [
  { label: 'Madrid',       offset: +2 },
  { label: 'CDMX',        offset: -5 },
  { label: 'Bogotá',      offset: -5 },
  { label: 'Lima',        offset: -5 },
  { label: 'Buenos Aires',offset: -3 },
  { label: 'ET',          offset: -4 },
];

function padZero(n: number): string {
  return n.toString().padStart(2, '0');
}

/**
 * Given a UTC time string like "21:00" or full ISO,
 * returns a formatted timezone row string.
 */
export function getMatchTimezones(utcTime: string): string {
  // Extract HH:MM from whatever format we receive
  const match = utcTime.match(/(\d{1,2}):(\d{2})/);
  if (!match) return '';
  const utcH = parseInt(match[1], 10);
  const utcM = parseInt(match[2], 10);

  return TZ_OFFSETS.map(({ label, offset }) => {
    let h = (utcH + offset + 24) % 24;
    return `${padZero(h)}:${padZero(utcM)} ${label}`;
  }).join(' · ');
}
