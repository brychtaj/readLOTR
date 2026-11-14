// Builds one self-contained HTML file per volume from the shared engine + shared cast + per-book data.
//   node build.mjs
//
// For each volume it takes engine.template.html and injects:
//   /*__CAST_DATA__*/  <- books/cast.js       (the shared, saga-wide character cast + book structure)
//   /*__ROUTES_DATA__*/<- book stops and the colors in books/routes.js
//   /*__BOOK_DATA__*/  <- books/<slug>.js     (this volume's chapters, map, scenes, relations…)
// then inlines the images as data URIs:
//   __MAP_DATA_URI__   -> assets/map.svg (or map.jpg)      (shared Malazan world map)
//   __IMG_<id>__       -> assets/portraits/<id>.jpg        (shared portraits; only characters introduced
//                                                          up to this volume are inlined, the rest blanked)
//   __SCENE_<n>__      -> assets/scenes/<slug>/<n>.jpg     (this volume's chapter illustrations)
//
// Missing images don't fail the build — they become '' (the app shows an icon fallback) and are printed as a
// per-volume "shot-list" so you know what still needs generating. Only stray build tokens fail.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const ENGINE = path.join(ROOT, 'engine.template.html');
const ASSETS = path.join(ROOT, 'assets');
const BOOKS = path.join(ROOT, 'books');

// The saga's ten volumes. `short` labels the book switcher (localized); `order` = volume number (= cast intro.vol).
const VOLUMES = [
  { slug: 'mesicni-zahrady', file: 'mesicni-zahrady.html', order: 1,  short: { en: 'Gardens',        cs: 'Zahrady' } },
  { slug: 'dum-mrtvych',     file: 'dum-mrtvych.html',     order: 2,  short: { en: 'Deadhouse',      cs: 'Dům mrtvých' } },
  { slug: 'vzpominky-ledu',  file: 'vzpominky-ledu.html',  order: 3,  short: { en: 'Memories',       cs: 'Vzpomínky' } },
  { slug: 'dom-retezu',      file: 'dom-retezu.html',      order: 4,  short: { en: 'House of Chains',cs: 'Dóm řetězů' } },
  { slug: 'pulnocni-vlny',   file: 'pulnocni-vlny.html',   order: 5,  short: { en: 'Midnight Tides', cs: 'Půlnoční vlny' } },
  { slug: 'lovci-kosti',     file: 'lovci-kosti.html',     order: 6,  short: { en: 'Bonehunters',    cs: 'Lovci kostí' } },
  { slug: 'vichr-smrti',     file: 'vichr-smrti.html',     order: 7,  short: { en: 'Reaper’s Gale',  cs: 'Vichr smrti' } },
  { slug: 'dan-pro-ohare',   file: 'dan-pro-ohare.html',   order: 8,  short: { en: 'Toll the Hounds',cs: 'Daň pro ohaře' } },
  { slug: 'prach-snu',       file: 'prach-snu.html',       order: 9,  short: { en: 'Dust of Dreams', cs: 'Prach snů' } },
  { slug: 'chromy-buh',      file: 'chromy-buh.html',      order: 10, short: { en: 'Crippled God',   cs: 'Chromý bůh' } },
];

const bookData = (v) => path.join(BOOKS, v.slug + '.js');
const imageUri = (file) => {
  const mime = file.toLowerCase().endsWith('.svg') ? 'image/svg+xml'
             : file.toLowerCase().endsWith('.png') ? 'image/png'
             : 'image/jpeg';
  return 'data:' + mime + ';base64,' + fs.readFileSync(file).toString('base64');
};
const noBom = (s) => s.replace(/^\uFEFF/, '');

// shared cast — needed by every volume, and used to decide which portraits to inline
const CASTFILE = path.join(BOOKS, 'cast.js');
if (!fs.existsSync(CASTFILE)) { console.error('✗ Chybí books/cast.js — nemám sdílené postavy.'); process.exit(1); }
const castJs = noBom(fs.readFileSync(CASTFILE, 'utf8'));
const CAST = new Function(castJs + '\nreturn CAST;')();
const introVol = {};
CAST.forEach((c) => { introVol[c.id] = c.intro.vol; });

// Only volumes that have a data file get built — and only those appear in the switcher.
const present = VOLUMES.filter((v) => fs.existsSync(bookData(v)));
if (!present.length) { console.error('✗ Žádná kniha v books/ — nemám co stavět.'); process.exit(1); }

const routeColorsSrc = noBom(fs.readFileSync(path.join(BOOKS, 'routes.js'), 'utf8'));
const routeColors = new Function(routeColorsSrc + '\nreturn ROUTE_COLORS;')();
const volumesWithRoutes = present.map((volume) => {
  const source = noBom(fs.readFileSync(bookData(volume), 'utf8'));
  const { PLACES } = new Function('L', source + '\nreturn BOOK;')((en, cs) => ({ en, cs }));
  const route = {
    vol: volume.order,
    color: routeColors[volume.order - 1],
    pts: PLACES.map(({ x, y, gi }) => [x, y, gi]),
  };
  return { volume, source, route };
});
const routes = volumesWithRoutes.map(({ route }) => route);
const engineSrc = noBom(fs.readFileSync(ENGINE, 'utf8'));
const switcher = present.map((v) => ({ file: v.file, order: v.order, short: v.short }));

let hadError = false;
for (const { volume: vol, source } of volumesWithRoutes) {
  let html = engineSrc;

  // 1) shared cast + shared routes, then this volume's data
  html = html.replace('/*__CAST_DATA__*/', () => castJs);
  html = html.replace('/*__ROUTES_DATA__*/', () => 'var ROUTES = ' + JSON.stringify(routes) + ';');
  html = html.replace('/*__BOOK_DATA__*/', () => source);

  // 2) book switcher — this volume flagged as current
  const volumes = switcher.map((v) => ({ ...v, current: v.file === vol.file }));
  html = html.replace('__VOLUMES_JSON__', () => JSON.stringify(volumes));

  // 3) shared Malazan world map (SVG preferred, JPG fallback)
  const mapSvg = path.join(ASSETS, 'map.svg');
  const mapJpg = path.join(ASSETS, 'map.jpg');
  const mapFile = fs.existsSync(mapSvg) ? mapSvg : mapJpg;
  html = html.split('__MAP_DATA_URI__').join(fs.existsSync(mapFile) ? imageUri(mapFile) : '');

  // 4) portraits — only characters introduced up to this volume; missing (but wanted) → shot-list
  const missing = { portraits: [], scenes: [] };
  html = html.replace(/__IMG_([a-z0-9-]+)__/g, (_, id) => {
    const wanted = introVol[id] !== undefined && introVol[id] <= vol.order;
    if (!wanted) return ''; // character not in this volume yet
    const f = path.join(ASSETS, 'portraits', id + '.jpg');
    if (fs.existsSync(f)) return imageUri(f);
    missing.portraits.push(id); return '';
  });

  // 5) scenes — this volume's chapter illustrations
  html = html.replace(/__SCENE_(\d+)__/g, (_, n) => {
    const f = path.join(ASSETS, 'scenes', vol.slug, n + '.jpg');
    if (fs.existsSync(f)) return imageUri(f);
    missing.scenes.push(+n); return '';
  });

  // 6) safety: no build token may survive (catches typos / renamed placeholders)
  const leftover = html.match(/\/\*__[A-Za-z0-9_]+__\*\/|__[A-Za-z0-9_]+__/);
  if (leftover) { console.error(`✗ ${vol.file}: nenahrazený token ${leftover[0]}`); hadError = true; continue; }

  fs.writeFileSync(path.join(ROOT, vol.file), html, 'utf8');
  const mb = (Buffer.byteLength(html, 'utf8') / 1048576).toFixed(2);
  console.log(`✓ ${vol.file.padEnd(24)} ${mb} MB`);
  if (missing.portraits.length || missing.scenes.length) {
    console.log('   chybí obrázky (zatím ikonový fallback):');
    if (missing.portraits.length) console.log(`     portréty (${missing.portraits.length}): ${missing.portraits.join(', ')}`);
    if (missing.scenes.length)    console.log(`     scény (${missing.scenes.length}): ${missing.scenes.sort((a, b) => a - b).join(', ')}`);
  }
}
if (present.length < VOLUMES.length) {
  const todo = VOLUMES.filter((v) => !present.includes(v)).map((v) => v.slug).join(', ');
  console.log(`\n(bez dat, přeskočeno: ${todo})`);
}
process.exit(hadError ? 1 : 0);
