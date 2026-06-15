# Deployment guide

This site is a **Next.js static export** (`output: 'export'`) with **TinaCMS**.
`pnpm build` produces a folder of plain static files in **`out/`**. Any web
server that can serve static files can host it — there is **no Node.js process
at runtime**.

The original site ran on **Apache**, and a matching `public/.htaccess` is
included (and copied into `out/` on every build), so Apache works out of the box.

---

## 1. Prerequisites (build machine only)

- **Node.js 22** (see `.nvmrc`)
- **pnpm** (`corepack enable` or `npm i -g pnpm`)
- TinaCMS Cloud credentials (only if you want the `/admin` editor — see §5)

The server that *serves* the site needs none of this — just the contents of `out/`.

## 2. Environment variables (build time only)

Copy `.env.example` to `.env.local` and fill in the values from
<https://app.tina.io>:

```ini
NEXT_PUBLIC_TINA_CLIENT_ID=...   # baked into the client JS (not secret)
TINA_TOKEN=...                   # build-only secret, never shipped to the server
NEXT_PUBLIC_TINA_BRANCH=main
```

`.env.local` is gitignored. **Never place it inside `out/` or the web root** —
it must not be served.

> If you do **not** need the `/admin` visual editor, you can skip Tina Cloud
> entirely and build with `make build-local` — no credentials required.

## 3. Build

```bash
make install        # pnpm install
make build          # Tina Cloud build  -> out/   (needs the env vars above)
# or
make build-local    # no Tina Cloud, no credentials, but /admin won't work
```

Output is the **`out/`** directory. Preview it locally before shipping:

```bash
make preview        # serves out/ at http://localhost:3000
```

> **Important:** build *without* `GITHUB_ACTIONS=true`. Under GitHub Actions the
> config adds a `/<repo-name>` base path (for GitHub Pages); for a normal domain
> the base path must stay empty so the site lives at `/`.

## 4. Serve `out/` on the server

Point the web server's document root at the contents of `out/`.

### Apache (default)

`out/.htaccess` is already included and handles everything:

- extensionless clean URLs (`/about` → `about.html`)
- `/admin` → `/admin/index.html`
- `404.html`, security headers, long-cache for `/_next/static`

Requires `mod_rewrite` and `mod_headers` enabled, and `AllowOverride All` for
the directory so the `.htaccess` is honored.

### nginx (equivalent, if not Apache)

```nginx
root /var/www/fkgrt;            # the out/ contents
location / { try_files $uri $uri.html $uri/index.html =404; }
location = /admin { try_files /admin/index.html =404; }
error_page 404 /404.html;
```

### Quick deploy with rsync

```bash
make deploy DEPLOY_HOST=user@server DEPLOY_PATH=/var/www/fkgrt
```

(`make deploy` runs `build` first, then mirrors `out/` to the server with
`rsync --delete`.)

### OpenBSD notes

**Build elsewhere, ship `out/`.** The build pulls native modules (better-sqlite3,
sharp, esbuild) that have no reliable prebuilt OpenBSD binaries and may fail to
compile there. Build on Linux/macOS (or CI), then `rsync` `out/` to the OpenBSD
box. The server only serves static files — it needs **no Node, pnpm, or make**.

**Web server:** OpenBSD's default `httpd(8)` has no `.htaccess` and limited
rewriting, so it does not handle the clean URLs out of the box. Easiest options:

- `pkg_add apache-httpd` — the included `.htaccess` then works as-is (the
  original site ran Apache).
- `pkg_add nginx` — use the nginx config above.

If you must use OpenBSD `httpd(8)`, it can only approximate the clean URLs, e.g.:

```
server "example.com" {
    listen on * port 80
    root "/fkgrt"            # the out/ contents
    request rewrite "/admin" "/admin/index.html"
    # httpd cannot do per-path .html fallback like try_files; prefer Apache/nginx.
}
```

**make:** this `Makefile` works with OpenBSD's BSD `make`. (GNU make is also
available via `pkg_add gmake` / `gmake` if preferred.)

## 5. `/admin` (TinaCMS visual editor) — read this

`/admin` is a static SPA built into `out/admin/`. It works on a static server,
**but content editing is Git-backed via Tina Cloud:**

1. An editor saves in `/admin` → Tina Cloud **commits the change to this repo**
   (branch `main`). Media uploads go to Tina Cloud (`assets.tina.io`).
2. **The live static files are NOT updated by editing.** The site only reflects
   changes after a **rebuild + redeploy**.

So for `/admin` to be useful you must:

- Build with real Tina Cloud credentials (`make build`, not `build-local`).
- In the Tina Cloud project settings, **allow the production domain** or the
  `/admin` login will be rejected.
- Set up a **rebuild-on-edit pipeline**: when Tina commits to `main`, rebuild and
  redeploy `out/` (e.g. a CI job, or a webhook on the server that runs
  `git pull && make build` and swaps `out/` into place). Without this, edits land
  in git but never appear on the live site.

## 6. Updating the site

```bash
git pull
make build       # or build-local
make deploy DEPLOY_HOST=... DEPLOY_PATH=...
```
