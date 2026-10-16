# Drum Town (Multilingual Edition)

Drum Town is an open-source drum curriculum site, built with [Eleventy (11ty)](https://www.11ty.dev/) and [VexFlow](https://www.vexflow.com/). Notation is rendered server-side at build time, so the published site has zero JavaScript dependencies for the music notation.

> **Note on Fork & Affiliation**: This project is an independent multilingual fork of the original [Drum Town](https://github.com/dylanpjenkins/drum-town) created by Dylan Jenkins. It introduces a modular localization architecture supporting English (`en` - default & fallback) and Vietnamese (`vi`), without modifying the musical engine, core curriculum logic, or upstream functionality.

## Supported Languages

- **English (`en`)**: Default language and automatic fallback. Available at standard URLs (`/`, `/lessons/:slug/`, `/genres/:slug/`, `/rudiments/`, `/metronome/`).
- **Vietnamese (`vi`)**: First localized language edition. Available with `/vi/` prefix (`/vi/`, `/vi/lessons/:slug/`, `/vi/genres/:slug/`, `/vi/rudiments/`, `/vi/metronome/`).
- **Extensible Architecture**: Additional locales (such as `zh-CN`, `es`, `ja`) can be added cleanly via declarative JSON dictionaries without altering application code.

## Structure

```
drum-town/
├── package.json              ← npm config, scripts
├── .eleventy.js              ← 11ty config, custom shortcodes, and i18n filters
├── tools/
│   ├── notation-renderer.js  ← server-side VexFlow → SVG
│   ├── audit-lessons.js      ← validates exercise beat counts vs. time signatures
│   ├── audit-site.js         ← integrity and performance audit gates
│   └── checks/               ← 22 automated accessibility and verification suites
├── src/
│   ├── _data/
│   │   ├── curriculum.js     ← master curriculum data
│   │   ├── lessonContent.js  ← rich content for "ready" lessons (musical specs & base text)
│   │   └── i18n/             ← localization subsystem
│   │       ├── index.js      ← i18n engine with fallback to English
│   │       ├── en/           ← English UI, curriculum, rudiments & lessons dictionaries
│   │       └── vi/           ← Vietnamese dictionaries (UTF-8)
│   ├── _includes/
│   │   ├── base.njk          ← global layout (multilingual head, nav, lang selector, footer)
│   │   ├── curriculum-sidebar.njk
│   │   └── section-nav.njk
│   ├── assets/
│   │   ├── css/style.css     ← global stylesheet
│   │   └── js/               ← client scripts (chrome.js, player.js, progress.js, metronome.js)
│   ├── index.njk             ← English homepage (/)
│   ├── genres.njk            ← English genre pages (/genres/:slug/)
│   ├── lessons.njk           ← English lesson pages (/lessons/:slug/)
│   ├── rudiments.njk         ← English rudiments page (/rudiments/)
│   ├── metronome.njk         ← English metronome page (/metronome/)
│   └── vi/                   ← Vietnamese localized pages (/vi/...)
│       ├── index.njk         ← Vietnamese homepage (/vi/)
│       ├── genres.njk        ← Vietnamese genre pages (/vi/genres/:slug/)
│       ├── lessons.njk       ← Vietnamese lesson pages (/vi/lessons/:slug/)
│       ├── rudiments.njk     ← Vietnamese rudiments (/vi/rudiments/)
│       └── metronome.njk     ← Vietnamese metronome (/vi/metronome/)
└── _site/                    ← built static output (456 pages across en + vi)
```

## Getting started

```bash
npm install
npm start          # dev server at http://localhost:8080 with live reload
npm run build      # production build (renders both English and Vietnamese static pages)
npm test           # run automated test suites
```

## Localization Architecture

The localization system is built to be lightweight, zero-dependency, and strictly non-intrusive to the Web Audio engine and musical data:

1. **Separation of Prose & Music**: Musical data structures (`bpm`, `timeSignature`, `hands`, `feet`, `tuplets`, `beamGroups`, note pitches, and durations) remain untranslated and intact. Only human-facing prose (titles, taglines, instructions, practice tips, and UI strings) is localized.
2. **Fallback to English (`en`)**: If any key, lesson, or string is missing in a localized dictionary, the system automatically falls back to English without throwing errors or breaking page layout.
3. **Locale-Prefixed Routing**:
   - English (default): `/`, `/lessons/:slug/`, `/genres/:slug/`, `/rudiments/`, `/metronome/`
   - Vietnamese: `/vi/`, `/vi/lessons/:slug/`, `/vi/genres/:slug/`, `/vi/rudiments/`, `/vi/metronome/`
   - Each page emits canonical URLs and `<link rel="alternate" hreflang="..." />` tags for SEO.
4. **State Persistence**:
   - Language choice is remembered across visits in `localStorage.getItem('dt_locale')`.
   - Practice progress (`localStorage.getItem('dc_progress')`) and metronome settings (`dc_metro_bpm`, `dc_metro_sig`) are shared across all languages by slug, so switching language preserves 100% of the user's progress.

## Adding a New Language (e.g. Simplified Chinese `zh-CN`)

To add a new language without changing core business logic:

1. **Register the Locale**:
   In `src/_data/i18n/index.js`, add the locale identifier to `SUPPORTED_LOCALES`:
   ```javascript
   const SUPPORTED_LOCALES = ['en', 'vi', 'zh-CN'];
   ```
2. **Create the Dictionary Directory**:
   Create `src/_data/i18n/zh-CN/` and add the JSON resources:
   - `ui.json`: Navigation, footer, player button labels, skip links, and status messages.
   - `curriculum.json`: Localized section, track, and level titles.
   - `rudiments.json`: Localized rudiment names and family descriptions.
   - `lessons.json`: Localized lesson prose, tips, and graduation criteria.
3. **Add Page Templates**:
   Create `src/zh-CN/` mirroring `src/vi/` with `locale: zh-CN` and corresponding permalinks (e.g. `permalink: "zh-CN/lessons/{{ lesson.slug }}/"`).
4. **Add Selector Option**:
   Add the language link to the `.lang-switch` component in `src/_includes/base.njk`.
5. **Build and Validate**:
   Run `npm run build && npm test` to verify zero regressions.


## Adding a lesson

Lessons live in `src/_data/lessonContent.js`, keyed by slug. Each entry can include:

```javascript
'my-lesson-slug': {
  tagline:      "Short subtitle",
  duration:     "20 min",
  difficulty:   "Intermediate",
  focus:        "Coordination",
  prerequisites: ['some-other-slug'],
  nextLessons:   ['follow-up-slug'],
  bodyHtml:      "<p>The lesson prose...</p>",
  exercises: [
    {
      title: "1A — My Exercise",
      meta:  "4/4 · ♩ = 90",
      timeSignature: "4/4",
      hands: [ /* note specs */ ],
      feet:  [ /* note specs */ ],
      tip:   "Practice tip..."
    }
  ],
  listening: [
    { artist: "Drummer", work: "Album", note: "Track to focus on" }
  ]
}
```

The slug must match an entry in `src/_data/curriculum.js` (under foundations, a track level, or mastery). Once the slug exists in both files, set its `status` to `'ready'` in the curriculum, and the page will render with full content instead of the stub view.

## Notation specs

Each exercise has a `hands` array (rendered with stems up) and a `feet` array (stems down). Notes are described as:

```javascript
{ keys: ['g/5/x2'], duration: 'q' }                    // hi-hat quarter note
{ keys: ['g/5/x2', 'c/5'], duration: '8' }             // hi-hat + snare 8th (chord)
{ keys: ['f/4'], duration: 'q' }                       // bass drum quarter
{ keys: ['d/4/x2'], duration: 'q' }                    // hi-hat foot quarter
{ rest: true, duration: 'q' }                          // invisible spacer (default)
{ rest: true, duration: 'q', visible: true }           // visible rest glyph (rare)
```

Note conventions:
- **Hi-hat / ride** — `g/5/x2` (top of staff, x notehead)
- **Snare** — `c/5` (middle of staff)
- **Bass drum** — `f/4` (bottom space, stems down)
- **Hi-hat foot** — `d/4/x2` (below staff, x notehead, stems down)

Rests in the `feet` (or any) voice exist purely to position the next note at the correct beat — they are **not drawn** unless you set `visible: true`. The snare in the upper voice already conveys what's happening on those beats; a visible rest glyph would be redundant clutter. Use `visible: true` only when the rest is the *content* of the lesson (teaching silence, space, anticipation).

Optional spec fields:
- `expectedBeats: 16.5` — declares the true length (in quarter-note units) of a mixed-meter phrase that a single `timeSignature` can't express; `tools/audit-lessons.js` uses it instead of the time signature. Exercises whose voices sum to an exact multiple of the bar are auto-detected as multi-bar patterns and don't need this.
- `repeatBegin: true` / `repeatEnd: true` — adds repeat barlines (visual only; audio loops indefinitely)
- `tuplets: [{ voice, start, length, num_notes, notes_occupied }]` — for triplets and other tuplets
- `beamGroups: [[num, denom], ...]` — controls how 8ths and 16ths beam together
- `articulation: 'open'` (per-note) — renders a small "o" above the note and routes the audio to the open-hi-hat voice. Apply to a hi-hat note (`g/5/x2`).

## Adding a new genre track

In `src/_data/curriculum.js`, add a new entry to `tracks[]` with `slug`, `title`, `tagline`, `description`, `icon`, and four `levels` (each with two or more lessons). Genre pages are generated automatically.

## Building for deployment

```bash
SITE_URL=https://your-domain.example npm run build
```

The `_site/` directory is a fully static site — deploy it to Netlify, Vercel, GitHub Pages, S3, or any static host. There's no server-side runtime requirement and no client-side dependencies for notation rendering.

Set the `SITE_URL` environment variable (no trailing slash) for production builds — it enables canonical URLs, Open Graph URLs and images, `sitemap.xml` (absolute entries), and the `robots.txt` sitemap line. Without it those tags are omitted and no sitemap.xml is emitted at all, so a local build never ships wrong absolute URLs. Per-lesson meta descriptions come from each lesson's `tagline`, and lesson pages emit schema.org `LearningResource` JSON-LD automatically.

Always deploy from a fresh `npm run build` — the dev server (`npm start`) also writes `_site/` but includes the internal review dashboard under `dev/`, which production builds exclude.

## Notes on the curriculum design

- **Foundations** is small on purpose. The minimum required before specializing in a genre, not an exhaustive method book.
- **Tracks** each have four levels: Beginner → Intermediate → Advanced → Expert. The progression should feel like clear vocabulary acquisition, not just escalating difficulty.
- **Generalist Path** is a curated meta-trail across the tracks for breadth-seeking learners. *(Currently data-only in `curriculum.js` — no page renders it yet.)* Each waypoint references a lesson that already lives in a track (no duplicate content); the ordering at each level respects prerequisites across genres (e.g., rock 8ths before funk 16ths, basic clave before 6/8 Afro-Cuban). When adding a new track lesson that materially changes the canonical vocabulary at its level, consider whether the path should reference it.
- **Mastery** topics are the things every advanced drummer eventually arrives at, regardless of what genre they came from.
- The `prerequisites` field on a lesson should list the *minimum* required knowledge to attempt it. Don't list "nice to have" — only "you'll be lost without."

## Contributing

Contributions are welcome — new lessons, notation fixes, and tooling improvements. See [CONTRIBUTING.md](CONTRIBUTING.md) for setup, validation steps, and content guidelines. Known bugs live in [ISSUES.md](ISSUES.md); feature ideas in [IDEAS.md](IDEAS.md).

## License

[MIT](LICENSE)
