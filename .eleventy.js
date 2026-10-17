// .eleventy.js
const { renderPattern } = require('./tools/notation-renderer');
const PatternMath = require('./src/assets/js/pattern-math');
const i18n = require('./src/_data/i18n');

// DEV TOOLING — review dashboard backend. Delete the next line and the
// setServerOptions block below to remove the dashboard.
const { reviewMiddleware } = require('./tools/review-middleware');

module.exports = function (eleventyConfig) {
  // Pass-through for static assets
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });

  // DEV TOOLING — mount the /dev/review/status API into the dev server so
  // `npm start` serves both the site and the review state on one port.
  eleventyConfig.setServerOptions({
    middleware: [reviewMiddleware]
  });

  // The review dashboard is dev-server-only; keep src/dev/ out of one-off
  // production builds so internal tooling never ships in _site.
  if (process.env.ELEVENTY_RUN_MODE === 'build') {
    eleventyConfig.ignores.add('src/dev/**');
  }

  // Shortcode: render a notation pattern inline
  eleventyConfig.addShortcode('notation', function (specJson) {
    const spec = typeof specJson === 'string' ? JSON.parse(specJson) : specJson;
    return renderPattern(spec);
  });

  // Shortcode: full exercise block (title + meta + notation + tip).
  // If the spec includes a `bpm` field, also embed a play button carrying
  // a JSON copy of the audio-relevant fields for the client-side player.
  function escapeAttr(s) {
    return s.replace(/&/g, '&amp;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
  }
  // Attribute text for human-readable labels: strip tags, keep existing HTML
  // entities intact (titles already contain e.g. &amp;), escape only quotes.
  function labelText(s) {
    return String(s).replace(/<[^>]*>/g, '').replace(/"/g, '&quot;');
  }
  // The six signatures the transport dock's meter select actually offers
  // (src/_includes/base.njk), mapped to the option VALUES it uses. Keyed by the
  // whole signature on purpose — see the tempo-handoff comment below. If a
  // seventh option is ever added to the dock, add it here too;
  // tools/checks/check-tempo-handoff.js reads the built select and fails if the
  // two ever disagree.
  const DOCK_METERS = { '2/4': 2, '3/4': 3, '4/4': 4, '5/4': 5, '6/8': 6, '7/8': 7 };
  // And the range its BPM input accepts. metronome.js clamps to the same pair,
  // so a tempo outside it does not merely fail to arrive — it arrives WRONG,
  // silently, as 240. Same file, same check reads these off the built input.
  const DOCK_MIN_BPM = 30, DOCK_MAX_BPM = 240;

  // ---- Swing feel (BL-128) ----
  // 76 exercises across 27 lessons print a feel in their meta — "swing 8ths",
  // "swing 16ths", "swung 16ths" — carry no tuplets, and put notes on exactly the
  // subdivisions the instruction moves. That is 16 of the site's 21 jazz lessons,
  // and until this existed pattern-math.js divided every beat in binary halves and
  // player.js contained the word "swing" zero times, so jazz-ride-pattern — the
  // lesson that teaches the jazz ride — played a straight-eighths rock ride.
  //
  // THE NOTATION IS NOT THE BUG. Straight eighths under a printed "swing 8ths" is
  // correct engraving and BL-085 already ruled it right, so this is fixed in the
  // player. What the player needs is one number, and it is derived HERE rather
  // than in the browser for the same reason data-bpm/data-beats are: the meta is
  // prose, prose parsing belongs in one gated place, and `data-spec` is a copy of
  // audio-relevant CONTENT fields — a derived flag inside it invites someone to
  // "fix" it by adding a `swing` key to lessonContent.js in one lesson and not the
  // other 26. Emitted as an attribute it is greppable in _site and readable by
  // tools/checks/check-swing-feel.js off the built markup, exactly the way
  // check-tempo-handoff.js reads the handoff.
  //
  // READ THE META, NOT THE TITLE. An earlier draft of this comment justified that
  // with hiphop-r-and-b-basic#2, "3 — New Jack Swing Kick (& of 2)", whose tip
  // demands the kick be "equidistant between the snare on 2 and the kick on 3" —
  // a title reader, the argument went, would break the one exercise that asks for
  // even spacing. IT IS NOT TRUE OF THE READER BELOW: swingLevelFromMeta needs a
  // digit after swing|swung and that title has none, so it returns 0. The claim
  // holds only against a looser bare-word /swing/ reader that nothing here
  // implements, and the accent block above already carries the lesson about not
  // writing the stronger claim.
  //
  // Measured with the actual function instead: 12 exercises put a swing word in
  // the title while their meta names no feel, the regex returns a level for 10 of
  // them, and 9 of those are vetoed by tuplets anyway. So a title reader would
  // differ on exactly ONE exercise — funk-purdie-intro#3, "4 — Half-Time Shuffle
  // Preview (Triplet Feel)", whose tip does say "Swing the 8ths" and which is
  // genuinely played straight today. That is a META gap in the content, not an
  // argument for reading titles: the fix is to print the feel in its meta like
  // the other 76, and then the reader here picks it up with no code change.
  //
  // Reading TIPS is a worse idea and the corpus says so plainly:
  // jazz-modern-jazz#3's tip sets a different feel per BAR ("Bar 1: dead
  // straight ... Bar 2: standard swing. Bar 3: deep triplet feel") and nothing in
  // a spec is addressable per bar, so a tip reader would flatten four deliberately
  // different bars into one feel. Its meta names nothing and it gets nothing,
  // which is the correct outcome available today.
  //
  // 16 IS TESTED FIRST because "swing 16ths" contains no "swing 8".
  function swingLevelFromMeta(meta) {
    const s = String(meta || '').toLowerCase();
    if (/(?:swing|swung)\s*16(?:th|ths)?\b/.test(s)) return 16;
    if (/(?:swing|swung)\s*8(?:th|ths)?\b/.test(s)) return 8;
    // No meta in the corpus says "shuffle" today (the six shuffle lessons write
    // "8th triplets" and notate real tuplets, which is why they are already
    // right). A shuffle IS the swing-8ths division — the-shuffle#0's own tip
    // says the short note "arrive[s] a third of a beat before the next click" —
    // so the word is mapped rather than ignored, and a future meta that uses it
    // gets the feel instead of silence. Population today: 0.
    if (/\bshuffle\b/.test(s)) return 8;
    return 0;
  }
  // THE GRID IS THE LABEL'S OWN, and getting this wrong is subtle enough to be
  // worth spelling out. Every onset must sit on the grid the feel divides: the
  // EIGHTH grid for "swing 8ths", the SIXTEENTH grid for "swung 16ths".
  //
  // It is the monotonicity guarantee, not neatness. A swung eighth lands at 2/3
  // of its beat, so under a sixteenth-tolerant test a spec written in 16ths under
  // a "swing 8ths" meta would ship wrong on both axes at once: the 16th at 0.25
  // stays put while the eighth at 0.5 moves to 0.667, crushing a 0.25-beat gap to
  // 0.083, and the playhead would read 0.1875 at the moment the 0.25 note sounds.
  // A 32nd at 0.625 would be overtaken outright. On the label's own grid the
  // image (2/3 of the cell) always falls strictly between its neighbours at 1/2
  // and 1, so playback order can never differ from reading order.
  //
  // Every one of the 76 passes: measured across the corpus, ZERO swing-8ths
  // onsets sit off the eighth grid and zero swung-16ths onsets sit off the
  // sixteenth grid. Nothing is currently excluded by this test, which is exactly
  // why it has to be written down rather than discovered later — a spec that
  // fails it silently drops back to straight rather than scrambling itself.
  function onLevelGrid(spec, level) {
    const step = level === 16 ? 0.25 : 0.5;   // quarter-note units
    for (const voice of ['hands', 'feet']) {
      const arr = spec[voice] || [];
      const scale = PatternMath.tupletScales(spec, voice, arr.length);
      let u = 0;
      for (let i = 0; i < arr.length; i++) {
        if (Math.abs(u / step - Math.round(u / step)) > 1e-6) return false;
        const ticks = PatternMath.durationTicks(arr[i]);
        if (ticks === null) return false;
        u += ticks * scale[i];
      }
    }
    return true;
  }
  // THE FIRST OF THE THREE THINGS THAT MAKE DOUBLE-SWINGING IMPOSSIBLE: a spec
  // that already expresses the feel in notation is never handed the instruction.
  // Exactly three specs print a swing meta AND notate tuplets, and all three are
  // vetoed here: independence-chapin-method#4, jazz-modern-jazz#4, triplet-feel#3.
  // The first two sit in lessons whose other swing exercises are NOT tupleted —
  // chapin #0-#3 and jazz-modern-jazz #0/#2 — which is precisely the split that
  // made #4 the only one in its lesson that sounded right before BL-128. All four
  // the-shuffle exercises are tupleted and were already correct. Any tuplet at all
  // disqualifies a spec; tools/checks/check-swing-feel.js prints the vetoed list
  // on every run so the number cannot drift unnoticed.
  //
  // The denominator test is the unit collision documented at the tempo handoff
  // below, reused verbatim: spec.bpm is QUARTER-note BPM, so "the beat" is a
  // quarter only when the denominator is 4. In 6/8 or 12/8 the eighth is already
  // the triplet subdivision and a quarter-keyed swing map would be nonsense. No
  // swing meta is in such a meter today (75 are 4/4, 4 are 3/4).
  function swingLevelFor(spec) {
    const level = swingLevelFromMeta(spec.meta);
    if (!level) return 0;
    if ((spec.tuplets || []).length) return 0;
    if (Number(String(spec.timeSignature || '').split('/')[1]) !== 4) return 0;
    if (!onLevelGrid(spec, level)) return 0;
    return level;
  }
  eleventyConfig.addShortcode('exercise', function (ex, locale = 'en') {
    const spec = typeof ex === 'string' ? JSON.parse(ex) : ex;
    const isVi = locale === 'vi';
    const ariaLabel = labelText(
      (isVi ? 'Ký âm trống' : 'Drum notation') + (spec.title ? ': ' + spec.title : '') + (spec.meta ? ' — ' + spec.meta : '')
    );
    const rendered = renderPattern(spec);
    // Scale-aware width floor: staves wider than ~620 viewBox units keep a
    // horizontal-scroll floor at 70% natural size so notes stay legible on
    // phones; narrower staves simply fit their container (no forced pan).
    // viewBox may have a non-zero origin (staves whose tuplet brackets sit
    // above the stave grow the box upward) — read the width, not position 3.
    //
    // 0.55 → 0.70 is system.md §6.5 step 2. At the old floor a 760-unit stave
    // shrank to 418px inside a ~320px phone scroller and the sticking row went
    // with it; the trade is a longer pan for a legible one. Nothing is dropped
    // at either floor — the whole bar is always reachable by scrolling.
    const vb = /viewBox="[-\d.]+ [-\d.]+ ([\d.]+)/.exec(rendered);
    const natW = vb ? parseFloat(vb[1]) : 0;
    // DENSITY-AWARE FLOOR (BL-040). The flat 70% was a percentage of natural
    // width, and natural width is itself capped at 1400 units for multi-bar
    // phrases — so density got squeezed twice, and across the 432 staves that
    // take a floor it delivered anywhere from 13.6 to 116.7 px per notated
    // event. An 8.6x spread. The dense end sat at ~5px of sticking ink, which
    // is exactly the illegibility PKG-7 fixed for SINGLE bars and left in place
    // on multi-bar ones.
    //
    // Every constant here is derived rather than chosen:
    //   PX_PER_EVENT 28    VexFlow writes annotations in POINTS, so the 14pt
    //                      sticking is 18.67 user units and its rendered size
    //                      is 18.67 * (pxPerEvent / UNITS_PER_EVENT). PKG-7
    //                      measured 10px of sticking ink as legible at a true
    //                      390px, and 10 = 18.67 * (28 / 52). This floor
    //                      reproduces a measurement.
    //   UNITS_PER_EVENT 52 the renderer's own per-note width allowance
    //                      (notation-renderer.js: 140 + maxVoiceNotes * 52).
    //   PAN_THRESHOLD 620  unchanged. Below it a stave already fits a phone
    //                      scroller, so a floor would add panning for nothing.
    //   FLOOR_RATIO 0.70   system.md 6.5 step 2, kept as the lower bound for
    //                      wide-but-sparse staves where the density rule is slack.
    //
    // A 64-note four-bar phrase now floors at 1792px and pans about 5.6 screens
    // at 320px. That is a lot of panning, and it is the trade 6.5 states
    // outright: honest panning beats illegible shrinking. Nothing is dropped at
    // any width, at either floor.
    const PX_PER_EVENT = 28;
    const UNITS_PER_EVENT = 52;
    const PAN_THRESHOLD = 620;
    const FLOOR_RATIO = 0.70;
    const events = Math.max((spec.hands || []).length, (spec.feet || []).length, 1);
    const minW = natW > PAN_THRESHOLD
      ? Math.max(Math.round(natW * FLOOR_RATIO), events * PX_PER_EVENT)
      : 0;
    const svg = rendered.replace(
      '<svg ',
      `<svg role="img" aria-label="${ariaLabel}" ${minW ? `style="min-width:${minW}px" ` : ''}`
    );
    const tipBlock = spec.tip
      ? `<div class="exercise-tip">${spec.tip}</div>`
      : '';
    // Optional prose + link, used by reference cards (e.g. /rudiments/) that
    // fold the description and "full lesson" link into the exercise block.
    const descBlock = spec.description
      ? `<p class="exercise-desc">${spec.description}</p>`
      : '';
    const linkBlock = spec.lessonUrl
      ? `<p class="exercise-lesson-link"><a href="${spec.lessonUrl}">${spec.lessonLabel || (isVi ? 'Xem toàn bộ bài học →' : 'Open the full lesson →')}</a></p>`
      : '';
    let controls = '';
    if (spec.bpm) {
      const audioSpec = {
        bpm: spec.bpm,
        timeSignature: spec.timeSignature,
        repeatBegin: spec.repeatBegin,
        repeatEnd: spec.repeatEnd,
        hands: spec.hands,
        feet: spec.feet,
        tuplets: spec.tuplets
      };
      const data = escapeAttr(JSON.stringify(audioSpec));
      // The feel rides as its own attribute rather than a key inside audioSpec —
      // see the swingLevelFor block above. `8` displaces the off-BEAT eighths;
      // `16` displaces the off-EIGHTH sixteenths and leaves the eighths alone.
      const swingLevel = swingLevelFor(spec);
      const swingAttr = swingLevel ? ` data-swing="${swingLevel}"` : '';
      // Tempo handoff to the site metronome (BL-076).
      const ts = String(spec.timeSignature || '').trim();
      const beats = Number(ts.split('/')[1]) === 4 ? DOCK_METERS[ts] : undefined;
      const canHandOff = beats !== undefined && spec.bpm >= DOCK_MIN_BPM && spec.bpm <= DOCK_MAX_BPM;
      const handoffAria = isVi
        ? `Metronome ${spec.bpm} BPM in ${ts}, mở máy đếm nhịp`
        : `Metronome ${spec.bpm} BPM in ${ts}, opens the metronome`;
      const handoff = canHandOff
        ? `
          <button class="tempo-btn" type="button" data-exercise-metronome data-bpm="${spec.bpm}" data-beats="${beats}" aria-label="${labelText(handoffAria)}">Metronome ${spec.bpm}</button>`
        : '';
      const kitLabel = isVi ? 'Âm sắc bộ trống' : 'Drum kit sound';
      const kitOptElec = isVi ? 'Điện tử (Electronic)' : 'Electronic';
      const kitOptAcous = isVi ? 'Trống mộc (Acoustic)' : 'Acoustic';
      const playBtnLabel = isVi ? 'Phát' : 'Play';
      const playAria = isVi ? 'Phát bài tập' : 'Play exercise';
      controls = `
        <div class="exercise-controls">
          <select class="kit-selector__select" data-exercise-kit aria-label="${kitLabel}">
            <option value="electronic">${kitOptElec}</option>
            <option value="acoustic">${kitOptAcous}</option>
          </select>${handoff}
          <button class="play-btn" type="button" data-exercise-play${swingAttr} data-spec="${data}" aria-label="${playAria}"><span class="play-btn__icon" aria-hidden="true">▶</span><span class="play-btn__label">${playBtnLabel}</span></button>
        </div>`;
    }
    return `
      <div class="exercise">
        <div class="exercise-header">
          <div class="exercise-header__text">
            <h3 class="exercise-title">${spec.title || (isVi ? 'Bài tập' : 'Exercise')}</h3>
            ${spec.meta ? `<div class="exercise-meta">${spec.meta}</div>` : ''}
          </div>
          ${controls}
        </div>
        ${descBlock}
        <div class="notation${minW ? ' notation--pan' : ''}">${svg}</div>
        ${tipBlock}
        ${linkBlock}
      </div>
    `;
  });

  // Foundations is now sectioned; this helper returns its lessons flattened
  // with subsection metadata attached, so existing slug-lookup paths keep
  // working without caring about subsection structure.
  function flattenFoundations(curriculum) {
    return curriculum.foundations.sections.flatMap(s =>
      s.lessons.map(l => ({
        ...l,
        section: 'foundations',
        subSection: s.slug,
        subSectionTitle: s.title
      }))
    );
  }

  // Filter: find a track by slug
  eleventyConfig.addFilter('findTrack', function (curriculum, slug) {
    return curriculum.tracks.find(t => t.slug === slug);
  });

  // Filter: find a lesson by slug across the entire curriculum
  eleventyConfig.addFilter('findLesson', function (curriculum, slug) {
    const all = [
      ...flattenFoundations(curriculum),
      ...curriculum.tracks.flatMap(t =>
        t.levels.flatMap(lv =>
          lv.lessons.map(l => ({ ...l, section: 'track', track: t.slug, trackTitle: t.title, level: lv.level, levelTitle: lv.title }))
        )
      ),
      ...curriculum.mastery.lessons.map(l => ({ ...l, section: 'mastery' }))
    ];
    return all.find(l => l.slug === slug);
  });

  // Filter: count of all lessons
  eleventyConfig.addFilter('lessonCount', function (curriculum) {
    return curriculum.foundations.sections.reduce((sum, s) => sum + s.lessons.length, 0)
      + curriculum.tracks.reduce((sum, t) => sum + t.levels.reduce((s, lv) => s + lv.lessons.length, 0), 0)
      + curriculum.mastery.lessons.length;
  });

  // Filter: count of every playable exercise on the site. Takes the
  // lessonContent map (slug → entry) and sums each entry's exercise list, so
  // the homepage quotes a number that moves with the content rather than a
  // hand-maintained constant.
  eleventyConfig.addFilter('exerciseCount', function (lessonContent) {
    return Object.keys(lessonContent || {}).reduce(
      (sum, slug) => sum + ((lessonContent[slug] && lessonContent[slug].exercises) || []).length,
      0
    );
  });

  // Collection: flat list of all lessons across foundations + tracks + mastery
  eleventyConfig.addCollection('allLessons', function () {
    const curriculum = require('./src/_data/curriculum.js');
    return [
      ...flattenFoundations(curriculum),
      ...curriculum.tracks.flatMap(t =>
        t.levels.flatMap(lv =>
          lv.lessons.map(l => ({
            ...l,
            section: 'track',
            track: t.slug,
            trackTitle: t.title,
            level: lv.level,
            levelTitle: lv.title
          }))
        )
      ),
      ...curriculum.mastery.lessons.map(l => ({ ...l, section: 'mastery' }))
    ];
  });

  eleventyConfig.addFilter('readyCount', function (curriculum) {
    let n = 0;
    curriculum.foundations.sections.forEach(s => s.lessons.forEach(l => { if (l.status === 'ready') n++; }));
    curriculum.tracks.forEach(t => t.levels.forEach(lv => lv.lessons.forEach(l => { if (l.status === 'ready') n++; })));
    curriculum.mastery.lessons.forEach(l => { if (l.status === 'ready') n++; });
    return n;
  });

  // Zero-pad an integer to two digits for chapter-lesson labels (01, 02 ... 14).
  eleventyConfig.addFilter('pad2', n => String(n).padStart(2, '0'));

  // "20–25 min" → "PT20M" for schema.org timeRequired. Returns '' when no
  // leading number is found so templates can omit the property.
  eleventyConfig.addFilter('isoDuration', d => {
    const m = /(\d+)/.exec(d || '');
    return m ? `PT${m[1]}M` : '';
  });

  // Flatten a track's levels into a single ordered lesson array — used on the
  // homepage where each track renders as one chapter rather than per-level.
  eleventyConfig.addFilter('flatTrackLessons', track =>
    (track.levels || []).flatMap(lv => lv.lessons || [])
  );

  // Serialize a value as JSON safe for embedding inside an inline <script> tag.
  // Escapes the `</` sequence so a stray "</script>" in any string can't close
  // the parent tag.
  eleventyConfig.addFilter('inlineJson', v =>
    JSON.stringify(v).replace(/</g, '\\u003c')
  );

  // ---- i18n Filters ----
  eleventyConfig.addFilter('t', function (key, locale, params) {
    return i18n.t(key, locale || 'en', params);
  });

  eleventyConfig.addFilter('localeUrl', function (url, targetLocale) {
    const currentUrl = url || '/';
    const isVi = currentUrl === '/vi/' || currentUrl.startsWith('/vi/');
    if (targetLocale === 'vi') {
      if (isVi) return currentUrl;
      return currentUrl === '/' ? '/vi/' : `/vi${currentUrl}`;
    } else {
      if (!isVi) return currentUrl;
      const stripped = currentUrl.replace(/^\/vi/, '');
      return stripped === '' ? '/' : stripped;
    }
  });

  eleventyConfig.addFilter('localizedCurriculum', function (curriculum, locale) {
    return i18n.getLocalizedCurriculum(curriculum, locale || 'en');
  });

  eleventyConfig.addFilter('localizedLesson', function (baseContent, slug, locale) {
    return i18n.getLocalizedLesson(slug, baseContent, locale || 'en');
  });

  eleventyConfig.addFilter('localizedRudiments', function (baseRudiments, locale) {
    return i18n.getLocalizedRudiments(baseRudiments, locale || 'en');
  });

  eleventyConfig.addFilter('localizedChapters', function (baseChapters, locale) {
    return i18n.getLocalizedChapters(baseChapters, locale || 'en');
  });

  eleventyConfig.addFilter('lessonUrl', function (slug, locale) {
    return (locale === 'vi') ? `/vi/lessons/${slug}/` : `/lessons/${slug}/`;
  });

  eleventyConfig.addFilter('genreUrl', function (slug, locale) {
    return (locale === 'vi') ? `/vi/genres/${slug}/` : `/genres/${slug}/`;
  });

  eleventyConfig.addFilter('localizedLessonTitle', function (slug, locale) {
    return i18n.getLocalizedLessonTitle(slug, locale || 'en');
  });

  eleventyConfig.addFilter('localizedLessonTagline', function (slug, locale) {
    return i18n.getLocalizedLessonTagline(slug, locale || 'en');
  });

  eleventyConfig.addFilter('localizedTrackTitle', function (slug, locale) {
    return i18n.getLocalizedTrackTitle(slug, locale || 'en');
  });

  eleventyConfig.addFilter('localizedTrackDescription', function (slug, locale) {
    return i18n.getLocalizedTrackDescription(slug, locale || 'en');
  });

  eleventyConfig.addFilter('localizedLessonsData', function (baseData, locale) {
    return i18n.getLocalizedLessonsData(baseData, locale || 'en');
  });

  const FOCUS_VI = {
    'Getting Started': 'Bắt đầu làm quen',
    'Reading': 'Đọc bản nhạc',
    'Counting': 'Đếm nhịp',
    'Rudiments': 'Kỹ thuật Rudiments',
    'Sticking': 'Thế tay (Sticking)',
    'Hand Technique': 'Kỹ thuật tay',
    'Foot Technique': 'Kỹ thuật chân',
    'Coordination': 'Phối hợp tứ chi',
    'Independence': 'Độc lập tứ chi',
    'Time & Feel': 'Thời gian & Cảm giác nhịp',
    'Pocket & Groove': 'Pocket & Groove',
    'Dynamics': 'Sắc thái cường độ',
    'Articulation': 'Kỹ thuật diễn tấu',
    'Fills': 'Câu báo trống (Fills)',
    'Phrasing & Form': 'Cấu trúc câu & Khung bài',
    'Genre Vocabulary': 'Từ vựng thể loại',
    'Clave & Bell Patterns': 'Nhịp Clave & Mõ chuông',
    'Odd Meters & Polyrhythm': 'Nhịp lẻ & Phức điệu',
    'Linear Playing': 'Lối chơi tuyến tính (Linear)',
    'Speed & Endurance': 'Tốc độ & Độ bền',
    'Soloing & Improvisation': 'Độc tấu & Ngẫu hứng',
    'Listening & Analysis': 'Nghe & Phân tích',
    'Practice Method': 'Phương pháp luyện tập',
    'Studio & Sound': 'Âm thanh phòng thu'
  };
  eleventyConfig.addFilter('localizedFocus', function (focus, locale) {
    if (locale === 'vi' && FOCUS_VI[focus]) return FOCUS_VI[focus];
    return focus;
  });

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site'
    },
    templateFormats: ['njk', 'md', 'html'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};
