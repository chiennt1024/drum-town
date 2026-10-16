// tools/extract-en-lessons.js
// Extracts English lesson content from src/_data/lessonContent.js
// to mirror the exact structure of src/_data/i18n/vi/lessons/ and src/_data/i18n/vi/lessons.json

const fs = require('fs');
const path = require('path');
const lessonContent = require('../src/_data/lessonContent.js');

const viDir = path.join(__dirname, '../src/_data/i18n/vi');
const enDir = path.join(__dirname, '../src/_data/i18n/en');
const enLessonsDir = path.join(enDir, 'lessons');

if (!fs.existsSync(enLessonsDir)) {
  fs.mkdirSync(enLessonsDir, { recursive: true });
}

function extractLessonData(slug) {
  const base = lessonContent[slug];
  if (!base) {
    console.warn(`[WARN] Slug "${slug}" not found in lessonContent.js`);
    return null;
  }

  const out = {
    tagline: base.tagline || "",
    bodyHtml: base.bodyHtml || "",
    graduationCriteria: base.graduationCriteria || [],
    exercises: (base.exercises || []).map(ex => {
      const exObj = { title: ex.title || "" };
      if (ex.tip !== undefined) exObj.tip = ex.tip;
      if (ex.description !== undefined) exObj.description = ex.description;
      if (ex.lessonLabel !== undefined) exObj.lessonLabel = ex.lessonLabel;
      return exObj;
    })
  };

  if (base.listening && Array.isArray(base.listening)) {
    out.listening = base.listening.map(item => ({
      artist: item.artist,
      work: item.work,
      year: item.year,
      note: item.note
    }));
  }

  return out;
}

// 1. Process root lessons.json
const viRootLessonsPath = path.join(viDir, 'lessons.json');
const enRootLessonsPath = path.join(enDir, 'lessons.json');

if (fs.existsSync(viRootLessonsPath)) {
  const viRootLessons = JSON.parse(fs.readFileSync(viRootLessonsPath, 'utf8'));
  const enRootLessons = {};
  for (const slug of Object.keys(viRootLessons)) {
    const data = extractLessonData(slug);
    if (data) enRootLessons[slug] = data;
  }
  fs.writeFileSync(enRootLessonsPath, JSON.stringify(enRootLessons, null, 2), 'utf8');
  console.log(`Wrote ${Object.keys(enRootLessons).length} lessons to ${enRootLessonsPath}`);
}

// 2. Process modular lessons in lessons/*.json
const viLessonsDir = path.join(viDir, 'lessons');
if (fs.existsSync(viLessonsDir)) {
  const files = fs.readdirSync(viLessonsDir);
  for (const file of files) {
    if (!file.endsWith('.json')) continue;
    const viFilePath = path.join(viLessonsDir, file);
    const enFilePath = path.join(enLessonsDir, file);

    const viData = JSON.parse(fs.readFileSync(viFilePath, 'utf8'));
    const enData = {};
    for (const slug of Object.keys(viData)) {
      const data = extractLessonData(slug);
      if (data) enData[slug] = data;
    }

    fs.writeFileSync(enFilePath, JSON.stringify(enData, null, 2), 'utf8');
    console.log(`Wrote ${Object.keys(enData).length} lessons to ${enFilePath}`);
  }
}

console.log('Finished mirroring English lesson content 1-to-1 with Vietnamese.');
