import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const data = (file, expression) => runInNewContext(
  `${readFileSync(new URL(file, import.meta.url), 'utf8')}\n${expression}`,
  { L: (en, cs) => ({ en, cs }) },
);
const books = readdirSync(new URL('../books/', import.meta.url))
  .filter(file => file.endsWith('.js') && !['cast.js', 'routes.js'].includes(file))
  .map(file => data(`../books/${file}`, 'BOOK'));

test('reader content thresholds are reachable within each volume', () => {
  for (const book of books) {
    const max = book.CH.length;
    const thresholds = [book.meta.timelineMin, ...(book.loreExtra || []).map(item => item.min),
      ...(book.relations?.blocks || []).map(block => block.min),
      ...(book.relations?.ensemble ? [book.relations.ensemble.min] : [])];
    for (const min of thresholds) {
      assert.ok(Number.isInteger(min) && min >= 1 && min <= max,
        `${book.meta.slug}: invalid reader-content threshold ${min}`);
    }
  }
});

test('each offline volume includes routes that pass through every stop in its regional frame', () => {
  const expected = books.slice().sort((a, b) => a.meta.vol - b.meta.vol).map(book => ({
    vol: book.meta.vol,
    pts: Array.from(book.PLACES, ({ x, y, gi }) => [x, y, gi]),
  }));

  for (const book of books) {
    const { slug, mapFrame } = book.meta;
    const html = readFileSync(new URL(`../${slug}.html`, import.meta.url), 'utf8');
    const routes = JSON.parse(html.match(/^  var ROUTES = (.+);$/m)[1]);
    assert.deepEqual(routes.map(({ vol, pts }) => ({ vol, pts })), expected);
    for (const { x, y, id } of book.PLACES) {
      assert.ok(x / 100 >= mapFrame.x0 && x / 100 <= mapFrame.x1 &&
        y / 100 >= mapFrame.y0 && y / 100 <= mapFrame.y1, `${slug}: ${id} is outside the regional frame`);
    }
  }
});
