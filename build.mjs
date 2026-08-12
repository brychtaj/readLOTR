// Builds one self-contained HTML file per volume from the shared engine + per-book data.
//   node build.mjs
//
// For each volume it takes engine.template.html, injects that book's data (books/<slug>.js),
// the book switcher, and inlines the images as base64 data URIs:
//   __MAP_DATA_URI__   -> assets/map.jpg                 (shared Middle-earth map)
//   __IMG_<id>__       -> assets/portraits/<id>.jpg       (shared portrait pool, by character id)
//   __SCENE_<n>__      -> assets/scenes/<slug>/<n>.jpg     (this volume's chapter illustrations)
//
// Missing images don't fail the build — they become '' (the app shows a fallback) and are
// printed as a "shot-list" so you know what still needs generating. Only stray build tokens fail.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const ENGINE = path.join(ROOT, 'engine.template.html');
const ASSETS = path.join(ROOT, 'assets');
const BOOKS = path.join(ROOT, 'books');

// The saga's volumes. `short` labels the book switcher (localized); `order` = volume numeral.
const VOLUMES = [
  { slug: 'spolecenstvo', file: 'spolecenstvo.html', order: 1, short: { en: 'Fellowship',         cs: 'Společenstvo' } },
  { slug: 'dve-veze',     file: 'dve-veze.html',     order: 2, short: { en: 'Two Towers',         cs: 'Dvě věže' } },
  { slug: 'navrat-krale', file: 'navrat-krale.html', order: 3, short: { en: 'Return of the King', cs: 'Návrat krále' } },
];

const bookData = (v) => path.join(BOOKS, v.slug + '.js');
const jpgUri = (file) => 'data:image/jpeg;base64,' + fs.readFileSync(file).toString('base64');

// Only volumes that have a data file get built — and only those appear in the switcher.
const present = VOLUMES.filter((v) => fs.existsSync(bookData(v)));
if (!present.length) { console.error('✗ Žádná kniha v books/ — nemám co stavět.'); process.exit(1); }

const engineSrc = fs.readFileSync(ENGINE, 'utf8').replace(/^﻿/, '');
const switcher = present.map((v) => ({ file: v.file, order: v.order, short: v.short }));

let hadError = false;
for (const vol of present) {
  let html = engineSrc;

  // 1) per-book data (defines `var BOOK = {…}`)
  const bookJs = fs.readFileSync(bookData(vol), 'utf8').replace(/^﻿/, '');
  html = html.replace('/*__BOOK_DATA__*/', () => bookJs);

  // 2) book switcher — this volume flagged as current
  const volumes = switcher.map((v) => ({ ...v, current: v.file === vol.file }));
  html = html.replace('__VOLUMES_JSON__', () => JSON.stringify(volumes));

  // 3) shared Middle-earth map
  const mapFile = path.join(ASSETS, 'map.jpg');
  html = html.split('__MAP_DATA_URI__').join(fs.existsSync(mapFile) ? jpgUri(mapFile) : '');

  // 4) portraits (shared, by id) + scenes (this volume) — missing become '' and go on the shot-list
  const missing = { portraits: [], scenes: [] };
  html = html.replace(/__IMG_([a-z0-9-]+)__/g, (_, id) => {
    const f = path.join(ASSETS, 'portraits', id + '.jpg');
    if (fs.existsSync(f)) return jpgUri(f);
    missing.portraits.push(id); return '';
  });
  html = html.replace(/__SCENE_(\d+)__/g, (_, n) => {
    const f = path.join(ASSETS, 'scenes', vol.slug, n + '.jpg');
    if (fs.existsSync(f)) return jpgUri(f);
    missing.scenes.push(+n); return '';
  });

  // 5) safety: no build token may survive (catches typos / renamed placeholders)
  const leftover = html.match(/\/\*__[A-Za-z0-9_]+__\*\/|__[A-Za-z0-9_]+__/);
  if (leftover) { console.error(`✗ ${vol.file}: nenahrazený token ${leftover[0]}`); hadError = true; continue; }

  fs.writeFileSync(path.join(ROOT, vol.file), html, 'utf8');
  const mb = (Buffer.byteLength(html, 'utf8') / 1048576).toFixed(2);
  console.log(`✓ ${vol.file.padEnd(20)} ${mb} MB`);
  if (missing.portraits.length || missing.scenes.length) {
    console.log('   Midjourney shot-list (chybí — zatím fallback):');
    if (missing.portraits.length) console.log(`     portréty (${missing.portraits.length}): ${missing.portraits.join(', ')}`);
    if (missing.scenes.length)    console.log(`     scény (${missing.scenes.length}): ${missing.scenes.sort((a, b) => a - b).join(', ')}`);
  }
}
if (present.length < VOLUMES.length) {
  const todo = VOLUMES.filter((v) => !present.includes(v)).map((v) => v.slug).join(', ');
  console.log(`\n(bez dat, přeskočeno: ${todo})`);
}
process.exit(hadError ? 1 : 0);
