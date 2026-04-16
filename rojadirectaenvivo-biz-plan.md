# Pirlo TV — Full Build & SEO Plan v3 (pirlo-tv.top)

> **Context:** Independent Pirlo TV-branded sports streaming site.
> Pirlo TV is the highest-ceiling keyword in the niche at 5M monthly searches.
> Data from the old `.top` domain proved `pirlo tv` ranked at pos 73 and still drove 213 clicks — a dedicated Pirlo TV domain makes it the primary brand, not a footnote.
> Target: beat 14,400 clicks/month by month 2.

---

## What the Previous Domain Taught Us (GSC Data — Month 1)

| Finding | Data Signal | Action on pirlo-tv.top |
|---------|------------|------------------------|
| \"Pirlo TV\" at pos 73 still drove 213 clicks | Users scrolled 7 pages and clicked anyway — massive suppressed demand | `pirlo-tv.top` IS the Pirlo TV brand site, not just a page on it |
| \"Tarjeta roja\" is a second brand we accidentally rank for | 600+ clicks from tarjeta-roja-* variants with zero targeting | Dedicated `/tarjeta-roja/` hub + title tags updated |
| MLB/beisbol is the #1 sport by query density | 4 of top 20 queries are MLB-related, pos 3.8 on head term | MLB gets its own section with team pages from day 1 |
| \"Dónde mirar X contra Y\" — impressions but no clicks | 606 impressions at pos 6, only 10 clicks (1.65% CTR) | FAQ schema + featured snippet targeting on all match pages |
| Spain (4,273) + Mexico (2,635) = 48% of all traffic | Clear geographic concentration | Liga MX and La Liga hubs built from day 1 |
| Accent/typo variants rank at pos 15–18 with 500+ impr | \"roja dirécta\", \"rojadirécta mlb\" etc | All variants baked into meta, schema, and page copy |
| \"Roja directa pirlo\" — 752 impressions, pos 11, 9.8% CTR | Triple brand combo underserved | Dedicated brand-combo page `/roja-directa-pirlo-tv/` |

---

## Domain & Stack

**Domain:** `pirlo-tv.top`
**Stack:** Astro (static site generator) + Cloudflare Pages
**Language:** Spanish only
**Content:** 100% programmatic (zero manual)
**Data Source:** `https://raw.githubusercontent.com/albinchristo04/arda/refs/heads/main/rereyano_data.json`
**Rebuild:** Every 3 hours via GitHub Actions cron
**Relationship to other domains:** Completely independent. No cross-linking. No shared footprint. Different Cloudflare account if possible.

---

## Keyword Strategy

### Tier 1 — Head Terms (500K–5M monthly searches)
- `pirlo tv` (5M) — **THE primary keyword, this domain owns it**
- `pirlotv` (~2M) — **co-primary, same intent, zero-space variant**
- `pirlo tv en vivo` (promoted) — targeted at branded streaming intent
- `pirlo tv futbol en vivo` (promoted) — sport-specific Pirlo TV intent
- `futbol tv`, `futbol en vivo`, `futbol en la tv` (500K each)
- `la roja directa`, `roja directa en vivo` (500K each)
- `tarjeta roja tv` — proven in previous domain data

### Tier 2 — Mid Terms (50K monthly searches)
- `pirlo tv hoy`, `pirlo tv gratis`, `pirlo tv online`
- `pirlo tv mlb`, `pirlo tv nba`, `pirlo tv futbol`
- `pirlo tv liga mx`, `pirlo tv champions league`
- `pirlo tv roja directa`, `roja directa pirlo tv`
- `roja directa hd`, `futbol en vivo hoy`
- `tarjeta roja en vivo`, `tarjeta roja pirlo tv` — proven converters
- `roja directa pirlo` — 752 impressions/mo on previous domain, barely targeted
- `copa libertadores hoy`, `liga campeones`, `directa futbol`

### Tier 3 — Long-tail (5K monthly searches)
- `pirlo tv [sport]` — `pirlo tv mlb`, `pirlo tv nba`, `pirlo tv champions`
- `roja directa nba`, `champions en vivo`, `copa sudamericana en vivo`
- Team-specific: `pirlo tv [team]`, `roja directa [team]`, `[team] en vivo`
- `roja directa [team] mlb` — MLB team combos (Yankees, Dodgers, Padres, Red Sox)
- `dónde mirar [team1] contra [team2]` — featured snippet targets
- `roja dirécta [sport]` — accent variant cluster (proven on previous domain)

### Trending (900–9900% growth)
- Copa Libertadores terms, Copa Sudamericana terms, Champions League terms
- Liga MX matchday terms (America, Chivas, Cruz Azul)
- La Liga matchday terms (Real Madrid, Atletico, Barcelona)

---

## Page Types & URL Structure

### 1. Home Page (`/`)
**Target keywords:** `pirlo tv`, `pirlotv`, `pirlo tv en vivo`, `roja directa en vivo`, `futbol en vivo`, `tarjeta roja tv`

**Content:**
- Hero: \"Pirlo TV — Ver Deportes en Vivo Gratis | Roja Directa · Tarjeta Roja\"
- Today's matches grouped by league with countdown timers
- Priority sections: MLB (top), Futbol (second), NBA/NHL below
- \"Actualizado: {datetime}\" freshness timestamp
- Internal links to all hubs, league pages, today's match pages
- `WebSite` schema with `SearchAction`

---

### 2. Sport Hub Pages

| URL | Target Keywords | Priority |
|-----|----------------|----------|
| `/futbol/` | `pirlo tv futbol en vivo`, `futbol tv`, `futbol en vivo hoy` | High |
| `/beisbol/` | `pirlo tv mlb`, `roja directa mlb`, `tarjeta roja mlb`, `beisbol en vivo` | **#1 Priority** |
| `/nba/` | `pirlo tv nba`, `roja directa nba`, `nba en vivo` | High |
| `/nhl/` | `pirlo tv nhl`, `nhl en vivo`, `roja directa hockey` | Medium |
| `/mlb/` | `pirlo tv mlb`, `mlb en vivo`, `ver mlb gratis`, `mlb libre en vivo` | **#1 Priority** |
| `/baloncesto/` | `baloncesto en vivo` | Medium |
| `/motogp/` | `pirlo tv motogp`, `roja directa motogp` | Medium |

> Note: `/mlb/` and `/beisbol/` are separate. `/mlb/` targets English-language MLB search intent from US Hispanics. `/beisbol/` targets Spanish-language search intent from Latin America. Both proven in previous domain data.

---

### 3. League Hub Pages

| URL | JSON League Name | Target Keywords | Priority |
|-----|-----------------|----------------|----------|
| `/champions-league/` | Ligue Des Champions | `pirlo tv champions`, `champions en vivo`, `liga campeones` | High |
| `/copa-libertadores/` | Copa Libertadores | `copa libertadores en vivo hoy` | High |
| `/copa-sudamericana/` | Copa Sudamericana | `copa sudamericana en vivo` | High |
| `/liga-mx/` | Liga MX | `pirlo tv liga mx`, `liga mx en vivo`, `america en vivo hoy` | **#1 Priority** |
| `/laliga/` | La Liga | `pirlo tv laliga`, `laliga en vivo`, `real madrid en vivo` | **#1 Priority** |
| `/copa-argentina/` | Copa Argentina | `copa argentina en vivo` | Medium |
| `/liga-ecuador/` | Ecuador Ligapro | `liga ecuador en vivo` | Medium |
| `/concacaf/` | Concacaf Champions Cup | `concacaf en vivo` | Medium |

> Liga MX and La Liga are priorities based on Spain (#1 country) and Mexico (#2 country) in previous domain data.

---

### 4. Brand-Specific Pages

These pages capture branded search demand proven in GSC data.

#### `/pirlo-tv/`
**Target keywords:** `pirlo tv`, `pirlotv`, `pirlo tv futbol en vivo`, `pirlo tv en vivo`, `pirlo tv online`, `pirlo tv gratis`

**Content:**
- H1: \"Pirlo TV — Futbol y Deportes en Vivo Gratis\"
- Full match listing for today
- Dedicated server selector using the same channel data
- Intro paragraph: \"Pirlo TV es el mejor lugar para ver partidos en vivo gratis. Aquí puedes ver fútbol, béisbol, baloncesto y más deportes en directo con múltiples canales.\"
- The home domain IS Pirlo TV — this page deepens brand keyword coverage

#### `/tarjeta-roja/`
**Target keywords:** `tarjeta roja tv`, `tarjeta roja en vivo`, `tarjeta roja pirlo`, `tarjeta roja mlb`, `tarjeta roja directa`

**Content:**
- H1: \"Tarjeta Roja TV en Vivo — Ver Partidos Gratis\"
- Explanation paragraph: \"Tarjeta Roja TV es otro nombre para acceder a los mismos partidos en vivo en Pirlo TV. Aquí puedes ver todos los deportes disponibles hoy.\"
- Full match listing (same as home, different template)
- No canonical redirect — this is a real page targeting real brand searches
- Schema: `WebPage` + `ItemList`

#### `/roja-directa-pirlo-tv/`
**Target keywords:** `roja directa pirlo tv`, `pirlo tv roja directa`, `roja directa pirlo`, `rojadirecta pirlo tv`

**Content:**
- H1: \"Roja Directa Pirlo TV — Ver Partidos en Vivo\"
- This triple-brand combo has 752 impressions/month at pos 11 with zero targeting. One focused page on pirlo-tv.top will push it to pos 3–5.
- Match listing + player

#### `/tarjeta-roja-pirlo-tv/`
**Target keywords:** `tarjeta roja pirlo`, `tarjeta roja pirlo tv`, `pirlo tarjeta roja`

**Content:**
- Captures the three-way brand overlap search cluster
- 215+ impressions/month proven on previous domain, position 16 with no targeting

---

### 5. MLB Team Pages

Each team gets a dedicated page under `/equipo/` with MLB-specific slug:

| URL | Team | Target Keywords |
|-----|------|----------------|
| `/equipo/new-york-yankees/` | Yankees | `pirlo tv yankees`, `roja directa yankees`, `yankees en vivo gratis` |
| `/equipo/los-angeles-dodgers/` | Dodgers | `pirlo tv dodgers`, `roja directa dodgers`, `dodgers en vivo` |
| `/equipo/san-diego-padres/` | Padres | `pirlo tv padres`, `roja directa padres`, `padres vs red sox donde ver` |
| `/equipo/boston-red-sox/` | Red Sox | `pirlo tv red sox`, `red sox vs padres en vivo` |
| `/equipo/houston-astros/` | Astros | `pirlo tv astros`, `roja directa astros`, `astros en vivo` |
| `/equipo/pittsburgh-pirates/` | Pirates | `dónde mirar pittsburgh pirates` (606 impr on previous domain) |
| `/equipo/arizona-diamondbacks/` | Diamondbacks | `dónde mirar arizona diamondbacks` (175 impr on previous domain) |

---

### 6. Match Pages (`/partido/{team1}-vs-{team2}/`)

**New: \"Dónde mirar\" FAQ block on every match page**
Every match page gets a hardcoded FAQ section targeting the `dónde mirar X contra Y` search pattern:

```html
<section class="faq">
  <h2>Preguntas frecuentes</h2>
  <dl>
    <dt>¿Dónde mirar {team1} contra {team2}?</dt>
    <dd>Puedes ver {team1} vs {team2} en vivo gratis en Pirlo TV (pirlo-tv.top).
        El partido comienza a las {time}. Disponible en {n} canales.</dd>
    <dt>¿A que hora juega {team1} hoy?</dt>
    <dd>{team1} juega a las {time} contra {team2} por {league}.</dd>
    <dt>¿En que canal se transmite {team1} vs {team2}?</dt>
    <dd>El partido se transmite en {channel_list}. Ver en vivo gratis con multiples servidores en Pirlo TV.</dd>
  </dl>
</section>
```

This FAQ also gets `FAQPage` JSON-LD schema — the exact format Google uses for featured snippets.

**New: Timezone row**
```
21:00 Madrid · 15:00 CDMX · 16:00 Bogotá · 17:00 Buenos Aires · 22:00 París
```
Targets \"a que hora juega X hoy\" from every timezone in the user base.

---

### 7. Alternate URL Pages (`/ver/` and `/en-vivo/`)

**Two alternate clusters:**

- `/ver/{slug}/` → canonical to `/partido/{slug}/` — targets \"ver X en vivo gratis\"
- `/en-vivo/{slug}/` → canonical to `/partido/{slug}/` — targets \"X en vivo\" cluster

Three URL patterns per match × 500+ matches per rebuild = massive long-tail surface area.

---

### 8. Static Utility Pages

| URL | Purpose |
|-----|---------| 
| `/404.astro` | \"Este partido ya terminó\" + today's matches |
| `/sitemap.xml` | Auto-generated, full crawl coverage |
| `/feed.xml` | RSS — freshness signal for Google |
| `/robots.txt` | Full crawl allowed |
| `/manifest.json` | PWA manifest |
| `/indexnow-key.txt` | IndexNow verification |

---

## Player Architecture

```
https://bolaloca.my/player/{server_id}/{channel_id}
```

`server_id` = 1–4, `channel_id` from match data.

### Match Page Layout

```
┌──────────────────────────────────────────────────┐
│ Breadcrumb: Inicio > Beisbol > MLB > Yankees     │
│                                                  │
│ H1: New York Yankees vs San Diego Padres en Vivo │
│ MLB · 09 Abril 2026 · 21:00 ET / 15:00 CDMX     │
│                                                  │
│ ┌──────────────────────────────────────────┐     │
│ │          IFRAME PLAYER (16:9)            │     │
│ └──────────────────────────────────────────┘     │
│                                                  │
│ Idioma: [ES] [EN] [FR] [IT] [DE] [US] [PT]       │
│ Canal:  [12] [161] [68] [78] [87]                │
│ Servidor: [1] [2] [3] [4]                        │
│                                                  │
│ 21:00 Madrid · 15:00 CDMX · 16:00 Bogotá        │
│                                                  │
│ ── Preguntas frecuentes ──                       │
│ ¿Dónde mirar Yankees contra Padres?              │
│ ¿A qué hora juega Yankees hoy?                   │
│ ¿En qué canal se transmite este partido?         │
│                                                  │
│ ── Más Partidos Hoy ──                           │
│ • Red Sox vs Astros · 21:00                      │
│ • Cavaliers vs Hawks · 03:00                     │
└──────────────────────────────────────────────────┘
```

---

## SEO Architecture

### Title Tags

| Page Type | Pattern |
|-----------|---------|
| Home | `Pirlo TV — Deportes en Vivo Gratis · Roja Directa · Tarjeta Roja \| PirloTV` |
| /pirlo-tv/ | `Pirlo TV En Vivo — Futbol y Deportes en Directo Gratis \| PirloTV` |
| /tarjeta-roja/ | `Tarjeta Roja TV En Vivo — Ver Partidos Gratis \| Pirlo TV` |
| /roja-directa-pirlo-tv/ | `Roja Directa Pirlo TV En Vivo — Partidos Gratis \| PirloTV` |
| Sport Hub | `{Sport} En Vivo Hoy — Ver {Sport} Gratis \| Pirlo TV` |
| /mlb/ | `MLB En Vivo — Beisbol en Directo Gratis · Pirlo TV MLB \| PirloTV` |
| /liga-mx/ | `Liga MX En Vivo Hoy — Ver America, Chivas, Cruz Azul \| Pirlo TV` |
| /laliga/ | `La Liga En Vivo — Ver Real Madrid, Barcelona, Atletico \| Pirlo TV` |
| League Hub | `{League} En Vivo — Partidos Hoy Gratis \| Pirlo TV` |
| Match | `{Team1} vs {Team2} En Vivo — {League} · Dónde Ver \| Pirlo TV` |
| Team | `{Team} En Vivo — Proximos Partidos · Pirlo TV \| PirloTV` |

> Key change: All title tags now lead with or end in "Pirlo TV"/"PirloTV" as the brand signal. "Dónde Ver" stays in match titles to target that query cluster.

### Meta Descriptions

| Page | Pattern |
|------|---------|
| Home | \"Pirlo TV — Ver deportes en vivo gratis. Roja Directa · Tarjeta Roja TV. Futbol, MLB, NBA en directo hoy con multiples canales.\" |
| /pirlo-tv/ | \"Pirlo TV en vivo gratis. Ver futbol, beisbol, baloncesto en directo. {n} partidos disponibles hoy con multiples canales y servidores.\" |
| /tarjeta-roja/ | \"Tarjeta Roja TV en vivo gratis en Pirlo TV. Ver futbol, beisbol, baloncesto en directo. {n} partidos disponibles hoy.\" |
| Match | \"Ver {team1} vs {team2} en vivo hoy en Pirlo TV. {league} — {date} a las {time}. {n} canales disponibles. ¿Dónde mirar? Aqui gratis.\" |
| MLB Match | \"Ver {team1} contra {team2} en vivo. MLB {date} · {time} ET / {time_mx} CDMX. Gratis en Pirlo TV.\" |
| Hub | \"Ver {league} en vivo en Pirlo TV. {n} partidos hoy en directo gratis. Multiples canales en espanol, ingles y portugues.\" |

### Heading Strategy
- One H1 per page — primary keyword exact match
- H2 for \"Partidos de Hoy\", \"Preguntas Frecuentes\", \"Mas Partidos\"
- H3 for individual match cards and FAQ questions
- FAQ `<dt>` elements styled as H3 equivalent for visual hierarchy

### Accent & Typo Variant Strategy

Previous domain data shows these variants have 500+ impressions/month each with zero targeting:
- `roja dirécta` (accent on e)
- `roja dirécta tv`
- `roja dirécta mlb`
- `roja dirécta beisbol`
- `pirlotv` (no space — high volume variant)
- `pirlo.tv` (dot variant)

**Fix:** Add these to the `<meta name="keywords">` (weak signal but present), include them naturally in the programmatic SEO text blocks, and add them as alternate name in schema `alternateName` field.

```json
{
  "@type": "WebSite",
  "name": "Pirlo TV",
  "alternateName": ["PirloTV", "Pirlo TV En Vivo", "Roja Directa", "Tarjeta Roja TV", "RojaDirecta", "Roja Dirécta"]
}
```

---

## Schema.org (JSON-LD)

### All Pages
- `BreadcrumbList`
- `WebSite` with `SearchAction` (home only)
- `Organization` with `alternateName` array (builds entity recognition for Pirlo TV brand)

### Match Pages
```json
{
  "@type": "SportsEvent",
  "name": "{team1} vs {team2}",
  "startDate": "{ISO datetime}",
  "location": { "@type": "VirtualLocation", "url": "https://pirlo-tv.top/partido/{slug}/" },
  "organizer": { "@type": "SportsOrganization", "name": "{league}" },
  "competitor": [
    { "@type": "SportsTeam", "name": "{team1}" },
    { "@type": "SportsTeam", "name": "{team2}" }
  ]
}
```

### Match Pages — FAQPage (targets featured snippets)
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Dónde mirar {team1} contra {team2}?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ver {team1} vs {team2} en vivo gratis en Pirlo TV (pirlo-tv.top). El partido comienza a las {time}. Disponible en {n} canales."
      }
    },
    {
      "@type": "Question",
      "name": "¿A qué hora juega {team1} hoy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{team1} juega a las {time} ({time_mx} hora México, {time_co} hora Colombia) contra {team2} por {league}."
      }
    },
    {
      "@type": "Question",
      "name": "¿En qué canal se transmite {team1} vs {team2}?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El partido se transmite en {channel_list}. Ver gratis con {server_count} servidores en Pirlo TV."
      }
    }
  ]
}
```

### Hub Pages — FAQPage
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Dónde ver {league/sport} en vivo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ver {league} en vivo gratis en Pirlo TV (pirlo-tv.top). Hoy hay {n} partidos disponibles: {match1}, {match2}..."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué partidos hay hoy de {sport}?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hoy hay {n} partidos de {sport}: {match_list_sentence}. Todos disponibles en directo gratis en Pirlo TV."
      }
    }
  ]
}
```

### Hub Pages — ItemList
```json
{
  "@type": "ItemList",
  "name": "Partidos de {league} en vivo — Pirlo TV",
  "numberOfItems": "{n}",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "url": "https://pirlo-tv.top/partido/{slug}/" }
  ]
}
```

---

## Programmatic SEO Text Templates

### Home Page Hero
```
Pirlo TV — Ver {n} partidos en vivo hoy gratis. Roja Directa En Vivo y Tarjeta Roja TV en un solo lugar.
Futbol, MLB, NBA, NHL y más deportes en directo con multiples canales en español, inglés y portugués.
```

### Sport Hub — Futbol
```
Hoy hay {n} partidos de fútbol en vivo en Pirlo TV. Ver {match1} por {league1} a las {time1},
{match2} por {league2} a las {time2}{, y {n-2} partidos más}. Todos los partidos de fútbol
en directo gratis con canales en español, inglés, francés e italiano.
Pirlo TV Fútbol — Actualizado: {build_datetime}.
```

### Sport Hub — MLB/Beisbol
```
Hoy hay {n} partidos de béisbol MLB en vivo en Pirlo TV. Ver {match1} a las {time1} ET ({time1_mx} CDMX),
{match2} a las {time2} ET. Pirlo TV MLB · Roja Directa MLB · Tarjeta Roja MLB —
todos los partidos de la Major League Baseball en directo gratis.
```

### League Hub — Champions League
```
Champions League en vivo hoy en Pirlo TV. {n} partidos disponibles: {match1} a las {time1},
{match2} a las {time2}. Ver la UEFA Champions League (Liga de Campeones) en directo gratis
en Pirlo TV con canales en {languages}. Actualizado {build_datetime}.
```

### League Hub — Liga MX
```
Liga MX en vivo hoy en Pirlo TV. {n} partidos disponibles. Ver {match1} a las {time1} hora México,
{match2} a las {time2}. América, Chivas, Cruz Azul, Pumas en directo gratis.
Pirlo TV Liga MX — transmisiones disponibles con {server_count} servidores.
```

### Match Page
```
Ver {team1} vs {team2} en vivo por {league} en Pirlo TV. El partido comienza a las {time}
({time_mx} hora México · {time_co} hora Colombia · {time_es} hora España) del {date}.
Disponible en {channel_count} canales con {server_count} servidores por canal.
Idiomas disponibles: {languages}. Transmisión gratis sin registro en Pirlo TV.
```

---

## Data Flow & Build Pipeline

### Build-time Data Processing
1. Fetch JSON from `https://raw.githubusercontent.com/albinchristo04/arda/refs/heads/main/rereyano_data.json`
2. Fallback to local `rereyano_data.json` if fetch fails
3. Parse and normalize:
   - Extract unique sports, leagues, teams from events
   - Generate URL slugs (lowercase, remove accents, hyphens)
   - Build lookup tables: matches by league, by team, by sport
   - Compute multi-timezone times for each match
   - Generate FAQ text for each match and hub
4. Pass to Astro pages via `getStaticPaths()`
5. On finish: ping Google + Bing sitemaps, POST new URLs to IndexNow

### Sport Mapping

| JSON League Name | Sport Category | Sport Slug | League Slug |
|-----------------|---------------|------------|-------------|
| Ligue Des Champions | Futbol | `/futbol/` | `/champions-league/` |
| Copa Argentina | Futbol | `/futbol/` | `/copa-argentina/` |
| Ecuador Ligapro | Futbol | `/futbol/` | `/liga-ecuador/` |
| Concacaf Champions Cup | Futbol | `/futbol/` | `/concacaf/` |
| Liga MX | Futbol | `/futbol/` | `/liga-mx/` |
| La Liga | Futbol | `/futbol/` | `/laliga/` |
| Copa Libertadores | Futbol | `/futbol/` | `/copa-libertadores/` |
| Copa Sudamericana | Futbol | `/futbol/` | `/copa-sudamericana/` |
| NBA | Baloncesto | `/nba/` | `/nba/` |
| NHL | Hockey | `/nhl/` | `/nhl/` |
| MLB | Beisbol | `/mlb/` | `/mlb/` |
| MotoGP | Motogp | `/motogp/` | `/motogp/` |

### Multi-Timezone Function (`src/lib/timezones.ts`)

```typescript
const TZ_OFFSETS: Record<string, { label: string; offset: number }> = {
  es: { label: 'Madrid', offset: +2 },
  mx: { label: 'CDMX', offset: -5 },
  co: { label: 'Bogotá', offset: -5 },
  ar: { label: 'Buenos Aires', offset: -3 },
  cl: { label: 'Santiago', offset: -3 },
  pe: { label: 'Lima', offset: -5 },
  ve: { label: 'Caracas', offset: -4 },
  us_et: { label: 'ET', offset: -4 },
};

export function getMatchTimezones(utcTime: string): string {
  // Returns: "21:00 Madrid · 15:00 CDMX · 15:00 Bogotá · 18:00 Buenos Aires"
}
```

### Slug Generation Rules
- Teams: lowercase, remove accents, replace spaces/dots with hyphens
  - `Atl. Madrid` → `atletico-madrid`
  - `New York Yankees` → `new-york-yankees`
- Leagues: manual mapping dictionary for SEO slugs
- Matches: `{team1-slug}-vs-{team2-slug}`
- Brand pages: hardcoded slugs (tarjeta-roja, pirlo-tv, etc.)

### Channel Language Labels

| Code | Display |
|------|---------|
| `es` | Español |
| `gb` | Inglés |
| `fr` | Francés |
| `it` | Italiano |
| `de` | Alemán |
| `us` | Inglés (US) |
| `pt` | Portugués |

### Configuration Constants (`src/lib/config.ts`)

```typescript
export const PLAYER_BASE_URL = 'https://bolaloca.my/player';
export const DATA_URL = 'https://raw.githubusercontent.com/albinchristo04/arda/refs/heads/main/rereyano_data.json';
export const SITE_URL = 'https://pirlo-tv.top';
export const SITE_NAME = 'Pirlo TV';
export const SITE_TAGLINE = 'Pirlo TV — Roja Directa · Tarjeta Roja TV';
export const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
export const REBUILD_INTERVAL_HOURS = 3;
```

---

## Internal Linking Architecture

### Links Added on Every Page
- Nav: **Pirlo TV (Inicio)** · Fútbol · MLB · NBA · NHL · MotoGP · Tarjeta Roja · Roja Directa
- Footer: all sport hubs + top league hubs + `/tarjeta-roja/` + `/pirlo-tv/` + `/roja-directa-pirlo-tv/`
- Breadcrumb: `Inicio > {Sport} > {League} > {Match}`

### Match Page Links
- League hub → Sport hub → Home
- Both team pages
- `/tarjeta-roja/` mentioned in body text: \"También disponible en Tarjeta Roja TV\"
- `/pirlo-tv/` mentioned as primary: \"Ver en Pirlo TV con multiples servidores\"
- \"Más Partidos Hoy\" section: 4–6 related match links

### Brand Page Links (`/tarjeta-roja/`, `/pirlo-tv/`)
- Linked from nav (always visible)
- Linked from every match page body text
- Linked from home hero section
- Cross-linked to each other and to `/roja-directa-pirlo-tv/`

---

## Technical SEO

### Canonical URLs
- `/partido/{slug}/` → self-canonical
- `/ver/{slug}/` → canonical to `/partido/{slug}/`
- `/en-vivo/{slug}/` → canonical to `/partido/{slug}/`
- `/tarjeta-roja/` → self-canonical (not canonical to home — it is its own page)
- `/pirlo-tv/` → self-canonical

### Robots.txt
```
User-agent: *
Allow: /

Sitemap: https://pirlo-tv.top/sitemap.xml
```

### Sitemap Priorities

| Page Type | Priority | Changefreq |
|-----------|----------|-----------|
| Home | 1.0 | hourly |
| /pirlo-tv/ | 1.0 | daily |
| /tarjeta-roja/ | 0.9 | daily |
| /roja-directa-pirlo-tv/ | 0.9 | daily |
| Sport hubs | 0.8 | daily |
| League hubs | 0.8 | daily |
| Match pages | 0.6 | hourly |
| Team pages | 0.5 | daily |
| /ver/ pages | 0.4 | hourly |
| /en-vivo/ pages | 0.4 | hourly |

> Note: `/pirlo-tv/` is elevated to 1.0 priority alongside home — it is a co-primary branded entry point.

### Performance
- Zero JS by default (Astro)
- One vanilla JS script for player tabs (~2KB, deferred)
- Inline critical CSS
- No images (pure CSS/text design)
- Preconnect hints on match pages:
  ```html
  <link rel="preconnect" href="https://bolaloca.my">
  <link rel="dns-prefetch" href="https://bolaloca.my">
  ```
- Target: 95+ Lighthouse

### Open Graph + Twitter Card
All pages. Match pages use a dynamic OG description incorporating team names, league, and time. OG `site_name` = \"Pirlo TV\".

---

## Search Engine Indexing

### After Every Deploy
```bash
# Sitemap pings
curl "https://www.google.com/ping?sitemap=https://pirlo-tv.top/sitemap.xml"
curl "https://www.bing.com/ping?sitemap=https://pirlo-tv.top/sitemap.xml"

# IndexNow — submit new/changed match URLs
node scripts/indexnow-submit.js
```

### IndexNow Payload
```json
{
  "host": "pirlo-tv.top",
  "key": "<indexnow-key>",
  "keyLocation": "https://pirlo-tv.top/indexnow-key.txt",
  "urlList": [
    "https://pirlo-tv.top/partido/new-match-slug/",
    "https://pirlo-tv.top/ver/new-match-slug/",
    "https://pirlo-tv.top/en-vivo/new-match-slug/"
  ]
}
```

Script diffs current sitemap against previous (cached as `sitemap-prev.xml` artifact) to detect new URLs only.

---

## RSS Feed (`/feed.xml`)

Matches as `<item>` entries. Freshness signal — updated every 3 hours.

```xml
<item>
  <title>New York Yankees vs San Diego Padres en Vivo — MLB · Pirlo TV</title>
  <link>https://pirlo-tv.top/partido/new-york-yankees-vs-san-diego-padres/</link>
  <pubDate>{match_datetime_rfc2822}</pubDate>
  <description>Ver Yankees vs Padres en vivo hoy en Pirlo TV. MLB en directo gratis. {n} canales disponibles.</description>
</item>
```

Feed autodiscovery in `<head>`:
```html
<link rel="alternate" type="application/rss+xml" title="Pirlo TV — Partidos en Vivo" href="/feed.xml">
```

---

## Custom 404 Page

Message: \"Este partido ya terminó — pero hay más en vivo ahora en Pirlo TV\"
Content: Today's active matches list, links to all sport hubs, home
Purpose: Catches expired match URLs (yesterday's games), retains SEO equity via internal links.

---

## Cloudflare Configuration

### `public/_headers`
```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Cache-Control: public, max-age=10800

/sitemap.xml
  Cache-Control: public, max-age=3600

/feed.xml
  Cache-Control: public, max-age=3600

/pirlo-tv/
  Cache-Control: public, max-age=10800

/tarjeta-roja/
  Cache-Control: public, max-age=10800
```

### Dashboard Settings
- Brotli compression: enabled
- HTML/CSS/JS minification: enabled
- HTTP/3: enabled
- Early Hints: enabled
- IndexNow integration: enabled (secondary signal)

---

## GitHub Actions Deploy Workflow (`.github/workflows/deploy.yml`)

```yaml
name: Build and Deploy

on:
  schedule:
    - cron: '0 */3 * * *'
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          INDEXNOW_KEY: ${{ secrets.INDEXNOW_KEY }}

      - name: Deploy to Cloudflare Pages
        run: npx wrangler pages deploy dist/ --project-name=pirlotv-top
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CF_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CF_ACCOUNT_ID }}

      - name: Ping search engines
        run: bash scripts/ping-engines.sh

      - name: Submit IndexNow
        run: node scripts/indexnow-submit.js
        env:
          INDEXNOW_KEY: ${{ secrets.INDEXNOW_KEY }}
```

---

## Project Structure

```
pirlotv-top/
├── src/
│   ├── layouts/
│   │   └── Base.astro                  # Head, nav, footer, all SEO meta
│   ├── components/
│   │   ├── MatchCard.astro             # Match listing card
│   │   ├── Player.astro                # Iframe + channel/server controls
│   │   ├── Breadcrumb.astro            # Breadcrumb nav
│   │   ├── MatchList.astro             # Matches grouped by league
│   │   ├── FaqBlock.astro              # FAQ section + FAQPage schema
│   │   ├── TimezoneRow.astro           # Multi-timezone time display
│   │   ├── SeoText.astro               # Programmatic long-form text
│   │   ├── Nav.astro                   # Site navigation (Pirlo TV first)
│   │   └── Footer.astro                # Hub links footer
│   ├── pages/
│   │   ├── index.astro                 # Home — Pirlo TV brand identity
│   │   ├── futbol.astro                # Futbol hub
│   │   ├── nba.astro                   # NBA hub
│   │   ├── nhl.astro                   # NHL hub
│   │   ├── mlb.astro                   # MLB hub (priority)
│   │   ├── beisbol.astro               # Beisbol hub (Spanish-language MLB)
│   │   ├── motogp.astro                # MotoGP hub
│   │   ├── pirlo-tv.astro              # Pirlo TV brand deep-dive page
│   │   ├── tarjeta-roja.astro          # Tarjeta Roja brand page
│   │   ├── roja-directa-pirlo-tv.astro # Triple-brand combo page
│   │   ├── tarjeta-roja-pirlo-tv.astro # Alt triple-brand page
│   │   ├── [league].astro              # Dynamic league hubs
│   │   ├── partido/
│   │   │   └── [slug].astro            # Match pages
│   │   ├── ver/
│   │   │   └── [slug].astro            # Alt match pages (canonical → /partido/)
│   │   ├── en-vivo/
│   │   │   └── [slug].astro            # Alt match pages (canonical → /partido/)
│   │   ├── equipo/
│   │   │   └── [slug].astro            # Team pages
│   │   ├── 404.astro                   # Custom 404
│   │   ├── sitemap.xml.ts              # Sitemap
│   │   ├── feed.xml.ts                 # RSS feed
│   │   └── robots.txt.ts
│   ├── lib/
│   │   ├── config.ts                   # Constants (SITE_URL, SITE_NAME = 'Pirlo TV')
│   │   ├── data.ts                     # Fetch + parse JSON
│   │   ├── slugs.ts                    # Slug generation
│   │   ├── seo.ts                      # Title/meta/schema generators
│   │   ├── faq.ts                      # FAQ text generators
│   │   ├── timezones.ts                # Multi-timezone converter
│   │   ├── indexnow.ts                 # IndexNow submission
│   │   └── types.ts                    # TypeScript interfaces
│   └── styles/
│       └── global.css                  # Dark theme, responsive
├── public/
│   ├── favicon.svg
│   ├── manifest.json
│   ├── indexnow-key.txt
│   └── _headers
├── scripts/
│   ├── ping-engines.sh
│   └── indexnow-submit.js
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## PWA Manifest

```json
{
  "name": "Pirlo TV",
  "short_name": "PirloTV",
  "description": "Pirlo TV — Roja Directa · Tarjeta Roja TV — Ver deportes en vivo gratis",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a0a0a",
  "theme_color": "#e63946",
  "lang": "es",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

---

## What pirlo-tv.top Does Differently vs Previous Domain (Summary)

| Feature | Previous .top | pirlo-tv.top |
|---------|--------------|--------------|
| Primary brand | RojaDirectaEnVivo | **Pirlo TV** |
| Domain keyword match | Generic | Exact match — `pirlo tv` = 5M searches/mo |
| Pirlo TV page | Secondary page | Home identity + dedicated deep page |
| Tarjeta Roja page | No | Yes — `/tarjeta-roja/` |
| Brand combo pages | No | Yes — 2 pages |
| MLB team pages | No | Yes — 7 teams |
| Liga MX hub | No | Yes |
| La Liga hub | No | Yes |
| FAQ schema on match pages | No | Yes — FAQPage JSON-LD |
| \"Dónde mirar\" FAQ text | No | Yes — on every match |
| Multi-timezone display | No | Yes — 7 timezones |
| Alternate match URLs | /ver/ only | /ver/ + /en-vivo/ |
| Nav includes brand pages | No | Yes — Pirlo TV first |
| Title tags include Pirlo TV | No | Yes — all pages |
| alternateName in schema | No | Yes — 6 variants incl. pirlotv |
| Accent typo variants in copy | No | Yes |
| \"pirlotv\" (no space) targeted | No | Yes — Tier 1 |
| Sitemap priority for /pirlo-tv/ | 0.9 | 1.0 (co-primary with home) |

---

## Realistic Traffic Projection

Based on previous domain's month-1 performance (14,400 clicks) and the Pirlo TV keyword advantage (5M monthly searches, proven suppressed demand):

| Month | Projected Clicks | Driver |
|-------|-----------------|--------|
| Month 1 | 10,000–15,000 | Pirlo TV brand keyword (5M volume) gives faster traction; exact-match domain signals relevance |
| Month 2 | 20,000–30,000 | Pirlo TV + sport combo keywords ranking (`pirlo tv mlb`, `pirlo tv futbol`), brand pages indexed |
| Month 3 | 35,000–55,000 | FAQ schema stealing featured snippets, Pirlo TV Liga MX / Champions pages ranking |
| Month 6 | 70,000–120,000 | Domain age + full Pirlo TV keyword cluster coverage + three URL clusters indexed |

> These projections assume zero backlink building. Even 10–20 quality links from Spanish football forums or Reddit posts mentioning "Pirlo TV" would accelerate month 2–3 significantly.

---

## Design Decisions

1. **Pirlo TV as the primary brand** — 5M searches/month vs ~500K for roja directa variants. The domain is the brand.
2. **Exact-match domain advantage** — `pirlo-tv.top` sends a direct relevance signal to Google for the "pirlo tv" keyword cluster that no competitor can replicate.
3. **`/pirlo-tv/` as co-primary page at sitemap priority 1.0** — reinforces brand keyword coverage. Users searching "pirlo tv" land on either the home or this page — both convert.
4. **Roja Directa and Tarjeta Roja as secondary brands** — they stay because the data proves 500K+ monthly searches for each. They don't compete with Pirlo TV, they supplement it.
5. **MLB over football for initial quick wins** — competition for La Liga/Champions terms is brutal. MLB \"roja directa\" and \"pirlo tv mlb\" terms are top 5 in the data and low competition.
6. **Three URL clusters per match** — `/partido/`, `/ver/`, `/en-vivo/` triple the long-tail surface area for zero extra development cost.
7. **Multi-timezone is a content differentiator** — no competitor does this. \"A qué hora juega X\" is a massive cluster and a timezone row answers it for all 7 user markets at once.
8. **FAQ schema is the featured snippet play** — the \"dónde mirar\" queries prove demand exists. FAQ JSON-LD is the correct technical response to Google's knowledge panel showing above us.
9. **No cross-linking to any other domain** — completely separate footprint. Independent Cloudflare account. If one gets DMCA'd or deindexed, the other survives.
