# ФКГРТ КНУ — website

Website of the **Professional College of Geological Prospecting Technologies**
(Фаховий коледж геологорозвідувальних технологій) of Taras Shevchenko National
University of Kyiv.

A **Next.js 15** static-export rebuild of the college's old Bitrix/PHP site,
with **TinaCMS** for the editable news and homepage content. The build produces
a folder of plain static files (`out/`) — there is no Node.js process at runtime.

## Stack

- **Next.js 15** (App Router, `output: 'export'`)
- **TinaCMS** — `/admin` visual editor; news + homepage content live as MDX in `content/`
- **Tailwind CSS v4**
- **Biome** for lint/format

## Project layout

| Path | What it is |
| --- | --- |
| `app/` | Routes. `app/[...urlSegments]` is the catch-all that serves migrated legacy pages, Tina pages and the English home. |
| `content/` | Tina-managed MDX (posts, homepage) + global settings. |
| `public/` | Migrated legacy HTML (`about/`, `vstup/`, `osvita/`, …, plus `en/` translations) and all static assets. |
| `components/legacy-pages.tsx` | Reads the legacy `.html` files at build time, normalizes URLs and renders them. Also derives the route and English-translation lists from the filesystem. |
| `lib/i18n.ts` | Bilingual UI strings + the navigation menu. |
| `lib/en-routes.ts` | Locale helpers for the bilingual shell. |

The legacy migration details (which sections were skipped, how `/news` redirects
to `/posts`, the search index, etc.) are documented inline in
`components/legacy-pages.tsx`.

## Local development

```bash
nvm use            # Node 22 (see .nvmrc)
corepack enable    # provides pnpm
pnpm install
pnpm dev           # Tina dev server + next dev
```

### Environment

Copy `.env.example` to `.env.local`. For local work without the `/admin` editor
you can leave the Tina credentials blank. To produce a build with a working
`/admin`, fill in the values from <https://app.tina.io>. `NEXT_PUBLIC_SITE_URL`
controls the absolute URLs used in metadata and the sitemap.

## Build

```bash
pnpm build          # Tina Cloud build (needs TINA_TOKEN) -> out/
pnpm build-local    # no Tina Cloud / credentials, but /admin won't work
```

> **Verifying a build locally** can be fragile because `next build` needs the
> Tina GraphQL server running. The reliable sequence is to run them as two
> separate processes: start `npx tinacms dev --noTelemetry --noWatch`, wait for
> `http://localhost:4001/graphql`, then run `npx next build` separately.

## Deployment

The output is the static `out/` directory; serve it with any static web server.
See **[DEPLOY.md](./DEPLOY.md)** for the full guide (Apache/nginx config,
`/admin` rebuild pipeline, GitHub Pages and OpenBSD notes). Pushes to `main`
build and deploy to GitHub Pages via `.github/workflows`.

## Adding pages

- **New page:** drop the HTML under `public/<path>/index.html` with a
  `<!--title:Назва-->` comment. The route, `<title>`, metadata and sitemap entry
  are picked up automatically on the next build. To add it to the menu, edit
  `navGroups` in `lib/i18n.ts` (labels are `{ uk, en }`).
- **English version:** drop the translation under `public/en/<path>/index.html`.
  Nothing else to wire up — the navigation and language switcher detect the
  translation from the filesystem and link to it automatically.

## License

Licensed under the [Apache 2.0 license](./LICENSE).
