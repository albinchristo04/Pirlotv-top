// src/lib/types.ts
export interface Channel {
  id: string | number;
  lang: string;
  url?: string;
}

export interface RawMatch {
  id: string | number;
  name: string;
  team1: string;
  team2: string;
  league: string;
  time: string;      // ISO or HH:MM UTC
  date?: string;     // YYYY-MM-DD optional
  channels: Channel[];
}

export interface Match extends RawMatch {
  slug: string;
  sportSlug: string;
  sportLabel: string;
  leagueSlug: string;
  dateLabel: string;
  timezones: string;
}
