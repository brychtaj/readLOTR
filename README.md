# The Ring's Journey 💍

An interactive, read-aloud guide to Tolkien's *The Lord of the Rings*, built for reading to kids. One shared engine, **one built file per volume**, tied together by a book switcher. Bilingual (English + Czech), with more languages easy to add.

➡️ Open a volume in a browser (each works offline — it's a single file):

| file | volume | status |
| --- | --- | --- |
| **`spolecenstvo.html`** | *The Fellowship of the Ring* | ✅ ready |
| **`dve-veze.html`** | *The Two Towers* | 🚧 in progress |
| **`navrat-krale.html`** | *The Return of the King* | 🗓️ planned |

## What the app does

- 🗺️ **Journey map** — the marked route plus a strip of stops; in Kids mode there are no spoilers (it unlocks as you read).
- 🧙 **Characters** — painted portraits with a "story so far" diary and (in other languages) how to say the names.
- 🖼️ **A chapter illustration** — a painted scene of the key moment, with a caption.
- 📖 **Chapters** — a *Parent* mode (summary, what to look out for, questions, a "scariness meter", vocabulary) and a *Kids* mode ("what happened" recaps + quizzes, all spoiler-free).
- 🌍 **World & Relations** — what the One Ring is, who Sauron is, the peoples of Middle-earth, a timeline, and how everyone is connected.
- 📚 **Book switcher** (in the header) — jump between volumes; **each volume keeps its own reading progress**.
- 🌐 **Language switcher** and 🌗 **light/dark theme** in the header.

## Architecture — shared engine + per-book data

Everything book-specific lives in data; the engine is book-agnostic and reads it from a `BOOK` object. That's what keeps each built file light (a tablet only ever loads one volume) while the app *feels* like one.

- **`engine.template.html`** — the **shared engine**: HTML/CSS/JS, icons, i18n, and the world backdrop (races, Ring-history timeline, lore). Edit engine behaviour here.
- **`books/<slug>.js`** — **one file per volume** (`spolecenstvo`, `dve-veze`, `navrat-krale`). Defines `var BOOK = {…}`: `meta`, `ui`, `relations`, and the content — `CH` (chapters), `CHARS` + `ARC` (characters and their diary), `PLACES`, `ILLUS`/`SCENES`, `KIDSUM`/`KIDINTRO`, `PORTRAITS`. Structural data (chapter order, `gi` indices, the internal book split, map coordinates, quiz answers) is shared across languages, so it can't drift.
- **`build.mjs`** — builds `<slug>.html` for every volume that has a data file, inlining images and injecting the switcher (which lists only the volumes that exist).
- **`assets/`**:
  - `map.jpg` — the **shared** map of Middle-earth (all volumes use it; each frames its own region),
  - `portraits/<id>.jpg` — a **shared portrait pool**, keyed by character `id` (recurring characters — Frodo, Gandalf, Gollum… — reuse one file),
  - `scenes/<slug>/<n>.jpg` — a volume's chapter illustrations (`n` = chapter index within the volume).
- `mapa-stredozem-original.jpg` — the original high-res map (10000×5455). **Not in the repo** — kept locally. The build uses the optimised `assets/map.jpg`.

## Build

After editing the engine or a book, run:

```bash
node build.mjs
```

The script replaces image tokens with base64 data URIs:

| token | source |
| --- | --- |
| `__MAP_DATA_URI__` | `assets/map.jpg` (shared) |
| `__IMG_<id>__` | `assets/portraits/<id>.jpg` (shared pool) |
| `__SCENE_<n>__` | `assets/scenes/<slug>/<n>.jpg` (this volume) |

**Missing images don't fail the build.** They fall back to a placeholder icon in the app, and the build prints a per-volume **shot-list** of what still needs generating (handy for a Midjourney pass). Only a stray, unrecognised build token fails the build — so you can't ship one by accident.

## Languages

The app is **English-first**; Czech is an optional alternate, switchable in the header (🌐). Nothing is hard-coded per language:

- **UI strings** live in the engine's `UI = { en, cs }` dictionary (a volume can override a few via `BOOK.ui`), read via `T('key')`.
- **Content** fields are per-field language maps, e.g. `sum: { en: '…', cs: '…' }`, read via `t(field)` (which falls back to English).

To add a language, add its key (e.g. `de`) to `UI` and to the content maps. Czech character and place names follow the translation by **Stanislava Pošustová**; English uses Tolkien's original names.

## Adding a volume

1. Create `books/<slug>.js` (copy an existing one as a template) and fill in `BOOK`.
2. Add the volume to the `VOLUMES` list in `build.mjs`.
3. Drop images into `assets/portraits/` (new characters) and `assets/scenes/<slug>/`.
4. `node build.mjs` — the shot-list tells you which images are still missing.
