// src/_data/i18n/index.js
// Multilingual Localization Engine for Drum Town
// Supports English ('en') as default/fallback and Vietnamese ('vi').
// Designed for zero-downtime addition of future locales (e.g. 'zh-CN').

const fs = require('fs');
const path = require('path');

const SUPPORTED_LOCALES = ['en', 'vi'];
const DEFAULT_LOCALE = 'en';

const dictionaries = {};

// Load JSON resources synchronously at initialization
function loadLocaleData(locale) {
  const dir = path.join(__dirname, locale);
  const data = {
    ui: {},
    curriculum: {},
    rudiments: {},
    lessons: {}
  };

  if (!fs.existsSync(dir)) return data;

  for (const domain of ['ui', 'curriculum', 'rudiments', 'lessons']) {
    const file = path.join(dir, `${domain}.json`);
    if (fs.existsSync(file)) {
      try {
        data[domain] = JSON.parse(fs.readFileSync(file, 'utf8'));
      } catch (err) {
        console.error(`[i18n] Error loading ${file}:`, err.message);
      }
    }
  }

  // Support modular lesson translation files in [locale]/lessons/*.json
  const lessonsDir = path.join(dir, 'lessons');
  if (fs.existsSync(lessonsDir) && fs.statSync(lessonsDir).isDirectory()) {
    try {
      const files = fs.readdirSync(lessonsDir);
      for (const f of files) {
        if (f.endsWith('.json')) {
          const filePath = path.join(lessonsDir, f);
          try {
            const chunk = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            Object.assign(data.lessons, chunk);
          } catch (err) {
            console.error(`[i18n] Error loading ${filePath}:`, err.message);
          }
        }
      }
    } catch (e) {
      console.error(`[i18n] Error reading directory ${lessonsDir}:`, e.message);
    }
  }

  return data;
}

for (const loc of SUPPORTED_LOCALES) {
  dictionaries[loc] = loadLocaleData(loc);
}

// Deep get helper with dot notation
function getNestedValue(obj, pathStr) {
  if (!obj || typeof obj !== 'object') return undefined;
  const parts = pathStr.split('.');
  let current = obj;
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      return undefined;
    }
  }
  return current;
}

// Format string with parameters: replaces {param} or {{param}}
function formatString(template, params) {
  if (typeof template !== 'string' || !params) return template;
  return template.replace(/\{\{\s*(\w+)\s*\}\}|\{\s*(\w+)\s*\}/g, (match, p1, p2) => {
    const key = p1 || p2;
    return key in params ? params[key] : match;
  });
}

// Translation function: t('nav.foundations', 'vi')
function t(key, locale = DEFAULT_LOCALE, params = null) {
  const targetLocale = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
  
  // 1. Check in target locale's UI dictionary
  let val = getNestedValue(dictionaries[targetLocale]?.ui, key);
  
  // 2. Fall back to default locale (English) if missing
  if (val === undefined && targetLocale !== DEFAULT_LOCALE) {
    val = getNestedValue(dictionaries[DEFAULT_LOCALE]?.ui, key);
    if (process.env.NODE_ENV !== 'production' && val === undefined) {
      console.warn(`[i18n] Missing translation key "${key}" in "${targetLocale}" and fallback "${DEFAULT_LOCALE}"`);
    }
  }

  // 3. If still undefined, return the key itself
  if (val === undefined) {
    return key;
  }

  return params ? formatString(val, params) : val;
}

// Translate curriculum structure
function getLocalizedCurriculum(baseCurriculum, locale = DEFAULT_LOCALE) {
  if (locale === DEFAULT_LOCALE || !dictionaries[locale]?.curriculum) {
    return baseCurriculum;
  }

  const cTrans = dictionaries[locale].curriculum;
  const deepClone = JSON.parse(JSON.stringify(baseCurriculum));

  // Translate foundations
  if (cTrans.foundations) {
    if (cTrans.foundations.title) deepClone.foundations.title = cTrans.foundations.title;
    if (cTrans.foundations.tagline) deepClone.foundations.tagline = cTrans.foundations.tagline;
    if (cTrans.foundations.description) deepClone.foundations.description = cTrans.foundations.description;

    if (cTrans.foundations.sections && Array.isArray(deepClone.foundations.sections)) {
      deepClone.foundations.sections.forEach(sec => {
        const secTrans = cTrans.foundations.sections[sec.slug];
        if (secTrans) {
          if (secTrans.title) sec.title = secTrans.title;
          if (secTrans.tagline) sec.tagline = secTrans.tagline;
          if (secTrans.lessons && Array.isArray(sec.lessons)) {
            sec.lessons.forEach(l => {
              if (secTrans.lessons[l.slug]) {
                l.title = secTrans.lessons[l.slug];
              }
            });
          }
        }
      });
    }
  }

  // Translate tracks
  if (cTrans.tracks && Array.isArray(deepClone.tracks)) {
    deepClone.tracks.forEach(track => {
      const tTrans = cTrans.tracks[track.slug];
      if (tTrans) {
        if (tTrans.title) track.title = tTrans.title;
        if (tTrans.tagline) track.tagline = tTrans.tagline;
        if (tTrans.description) track.description = tTrans.description;
        if (tTrans.levels && Array.isArray(track.levels)) {
          track.levels.forEach(lvl => {
            const lvlTrans = tTrans.levels[lvl.level];
            if (lvlTrans) {
              if (lvlTrans.title) lvl.title = lvlTrans.title;
              if (lvlTrans.lessons && Array.isArray(lvl.lessons)) {
                lvl.lessons.forEach(l => {
                  if (lvlTrans.lessons[l.slug]) {
                    l.title = lvlTrans.lessons[l.slug];
                  }
                });
              }
            }
          });
        }
      }
    });
  }

  // Translate mastery
  if (cTrans.mastery) {
    if (cTrans.mastery.title) deepClone.mastery.title = cTrans.mastery.title;
    if (cTrans.mastery.tagline) deepClone.mastery.tagline = cTrans.mastery.tagline;
    if (cTrans.mastery.lessons && Array.isArray(deepClone.mastery.lessons)) {
      deepClone.mastery.lessons.forEach(l => {
        if (cTrans.mastery.lessons[l.slug]) {
          l.title = cTrans.mastery.lessons[l.slug];
        }
      });
    }
  }

  return deepClone;
}

// Translate a lesson content item
function getLocalizedLesson(slug, baseContent, locale = DEFAULT_LOCALE) {
  if (!baseContent) return baseContent;
  if (locale === DEFAULT_LOCALE || !dictionaries[locale]?.lessons) {
    return baseContent;
  }

  const lTrans = dictionaries[locale].lessons[slug];
  if (!lTrans) return baseContent;

  const merged = { ...baseContent };

  if (lTrans.tagline) merged.tagline = lTrans.tagline;
  if (lTrans.bodyHtml) merged.bodyHtml = lTrans.bodyHtml;
  if (lTrans.graduationCriteria && Array.isArray(lTrans.graduationCriteria)) {
    merged.graduationCriteria = lTrans.graduationCriteria;
  }

  if (lTrans.exercises && Array.isArray(lTrans.exercises) && Array.isArray(baseContent.exercises)) {
    merged.exercises = baseContent.exercises.map((baseEx, idx) => {
      const exTrans = lTrans.exercises[idx];
      if (!exTrans) return baseEx;
      return {
        ...baseEx,
        title: exTrans.title || baseEx.title,
        tip: exTrans.tip || baseEx.tip,
        description: exTrans.description || baseEx.description,
        lessonLabel: exTrans.lessonLabel || baseEx.lessonLabel
      };
    });
  }

  if (lTrans.listening && Array.isArray(lTrans.listening) && Array.isArray(baseContent.listening)) {
    merged.listening = baseContent.listening.map((baseItem, idx) => {
      const itemTrans = lTrans.listening[idx];
      if (!itemTrans) return baseItem;
      return {
        ...baseItem,
        note: itemTrans.note || baseItem.note
      };
    });
  }

  return merged;
}

// Translate rudiments
function getLocalizedRudiments(baseRudiments, locale = DEFAULT_LOCALE) {
  if (locale === DEFAULT_LOCALE || !dictionaries[locale]?.rudiments) {
    return baseRudiments;
  }

  const rTrans = dictionaries[locale].rudiments;
  const deepClone = JSON.parse(JSON.stringify(baseRudiments));

  deepClone.forEach(group => {
    const groupTrans = rTrans.groups && rTrans.groups[group.slug];
    if (groupTrans) {
      if (groupTrans.title) group.title = groupTrans.title;
      if (groupTrans.blurb) group.blurb = groupTrans.blurb;
    }

    if (group.rudiments && Array.isArray(group.rudiments) && rTrans.items) {
      group.rudiments.forEach(rud => {
        const itemTrans = rTrans.items[rud.number];
        if (itemTrans) {
          if (itemTrans.name) rud.name = itemTrans.name;
          if (itemTrans.description) rud.description = itemTrans.description;
          if (itemTrans.card) {
            rud.card = { ...rud.card, ...itemTrans.card };
          }
        }
      });
    }
  });

  return deepClone;
}

// Translate chapters for homepage ledger
function getLocalizedChapters(baseChapters, locale = DEFAULT_LOCALE) {
  if (locale === DEFAULT_LOCALE) return baseChapters;
  const curriculum = getLocalizedCurriculum(require('../curriculum.js'), locale);
  return [
    ...curriculum.foundations.sections.map((s, i) => ({
      id: i === 0 ? 'foundations' : `chapter-${s.slug}`,
      title: s.title,
    })),
    ...curriculum.tracks.map((t, i) => ({
      id: i === 0 ? 'tracks' : `chapter-${t.slug}`,
      title: t.title,
    })),
    { id: 'mastery', title: curriculum.mastery.title || (locale === 'vi' ? 'Chủ đề nâng cao' : 'Other Topics') },
  ];
}

// Get localized title for a lesson slug
function getLocalizedLessonTitle(slug, locale = DEFAULT_LOCALE) {
  if (locale === 'vi') {
    const cVi = dictionaries.vi?.curriculum;
    if (cVi) {
      for (const sKey in cVi.foundations?.sections || {}) {
        const lTitle = cVi.foundations.sections[sKey]?.lessons?.[slug];
        if (lTitle) return lTitle;
      }
      for (const tKey in cVi.tracks || {}) {
        for (const lKey in cVi.tracks[tKey]?.levels || {}) {
          const lTitle = cVi.tracks[tKey].levels[lKey]?.lessons?.[slug];
          if (lTitle) return lTitle;
        }
      }
      if (cVi.mastery?.lessons?.[slug]) {
        return cVi.mastery.lessons[slug];
      }
    }
  }
  const curriculum = require('../curriculum.js');
  for (const s of curriculum.foundations?.sections || []) {
    const found = s.lessons.find(l => l.slug === slug);
    if (found) return found.title;
  }
  for (const t of curriculum.tracks || []) {
    for (const lv of t.levels || []) {
      const found = lv.lessons.find(l => l.slug === slug);
      if (found) return found.title;
    }
  }
  for (const l of curriculum.mastery?.lessons || []) {
    if (l.slug === slug) return l.title;
  }
  return slug;
}

// Get localized tagline for a lesson slug
function getLocalizedLessonTagline(slug, locale = DEFAULT_LOCALE) {
  if (locale === 'vi' && dictionaries.vi?.lessons?.[slug]?.tagline) {
    return dictionaries.vi.lessons[slug].tagline;
  }
  const lessonContent = require('../lessonContent.js');
  return lessonContent[slug]?.tagline || '';
}

// Get localized track title
function getLocalizedTrackTitle(slug, locale = DEFAULT_LOCALE) {
  if (locale === 'vi' && dictionaries.vi?.curriculum?.tracks?.[slug]?.title) {
    return dictionaries.vi.curriculum.tracks[slug].title;
  }
  const curriculum = require('../curriculum.js');
  const tr = curriculum.tracks?.find(t => t.slug === slug);
  return tr ? tr.title : slug;
}

// Get localized track description
function getLocalizedTrackDescription(slug, locale = DEFAULT_LOCALE) {
  if (locale === 'vi' && dictionaries.vi?.curriculum?.tracks?.[slug]?.description) {
    return dictionaries.vi.curriculum.tracks[slug].description;
  }
  const curriculum = require('../curriculum.js');
  const tr = curriculum.tracks?.find(t => t.slug === slug);
  return tr ? tr.description : '';
}

// Localize lessonsData for homepage hero "Up Next" activation
function getLocalizedLessonsData(baseData, locale = DEFAULT_LOCALE) {
  if (locale === DEFAULT_LOCALE || !baseData) return baseData;
  const curriculum = require('../curriculum.js');
  const locCurr = getLocalizedCurriculum(curriculum, locale);
  const out = JSON.parse(JSON.stringify(baseData));

  // Build chapter lookup map: slug -> { chapterIndex, chapterTitle }
  const slugMeta = {};
  const foundationsCount = locCurr.foundations.sections.length;
  const tracksCount = locCurr.tracks.length;

  locCurr.foundations.sections.forEach((sec, secIdx) => {
    sec.lessons.forEach(l => {
      slugMeta[l.slug] = {
        chapterIndex: secIdx + 1,
        chapterTitle: sec.title
      };
    });
  });
  locCurr.tracks.forEach((t, tIdx) => {
    t.levels.forEach(lv => {
      lv.lessons.forEach(l => {
        slugMeta[l.slug] = {
          chapterIndex: foundationsCount + tIdx + 1,
          chapterTitle: t.title
        };
      });
    });
  });
  const masteryChapter = foundationsCount + tracksCount + 1;
  locCurr.mastery.lessons.forEach(l => {
    slugMeta[l.slug] = {
      chapterIndex: masteryChapter,
      chapterTitle: locCurr.mastery.title || (locale === 'vi' ? 'Chủ đề nâng cao' : 'Other Topics')
    };
  });

  for (const slug in out.bySlug || {}) {
    const item = out.bySlug[slug];
    const meta = slugMeta[slug] || {};
    item.title = getLocalizedLessonTitle(slug, locale);
    item.url = locale === 'vi' ? `/vi/lessons/${slug}/` : `/lessons/${slug}/`;
    item.tagline = getLocalizedLessonTagline(slug, locale);
    if (meta.chapterIndex) {
      item.eyebrow = locale === 'vi'
        ? `Chương ${meta.chapterIndex} · ${meta.chapterTitle}`
        : `Chapter ${meta.chapterIndex} · ${meta.chapterTitle}`;
    }
    if (item.before && item.before.url) {
      const prevSlugMatch = item.before.url.match(/\/lessons\/([^\/]+)\/?$/);
      if (prevSlugMatch) {
        const prevSlug = prevSlugMatch[1];
        item.before.title = getLocalizedLessonTitle(prevSlug, locale);
        item.before.url = locale === 'vi' ? `/vi/lessons/${prevSlug}/` : `/lessons/${prevSlug}/`;
      }
    }
  }

  return out;
}

module.exports = {
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  t,
  getLocalizedCurriculum,
  getLocalizedLesson,
  getLocalizedRudiments,
  getLocalizedChapters,
  getLocalizedLessonTitle,
  getLocalizedLessonTagline,
  getLocalizedTrackTitle,
  getLocalizedTrackDescription,
  getLocalizedLessonsData,
  dictionaries
};
