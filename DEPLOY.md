# Deployment guide

This Next.js site is exported as static files in `out/`. During the preview
period it is intentionally isolated from the existing PHP/Bitrix website:

```text
https://fkgrt.knu.ua/             existing site (untouched)
https://fkgrt.knu.ua/test-new/    new static preview

FTP /www/                        existing site root (never synchronized)
FTP /www/test-new/               static preview deployment target
```

## Build locally

Node.js 22 and pnpm are required:

```bash
pnpm install
NEXT_PUBLIC_BASE_PATH=/test-new \
NEXT_PUBLIC_SITE_URL=https://fkgrt.knu.ua/test-new \
pnpm build
```

The preview workflow uses the tokenless build. Tina `/admin` is excluded from
FTP until a real `TINA_TOKEN` is supplied and the cloud build is enabled.

## GitHub configuration

The workflow uses a GitHub environment named `production`.

Environment secrets:

- `FTP_SERVER`
- `FTP_USERNAME`
- `FTP_PASSWORD`

Environment variable:

- `NEXT_PUBLIC_TINA_CLIENT_ID`

Repository variable:

- `FTP_DEPLOY_ENABLED` — keep `false` until a successful dry run

The preview pipeline uses the hosting account's SFTP endpoint on port 22 with
the server's ED25519 host key pinned in the workflow. Transfers run in parallel.

The unreferenced legacy Bitrix thumbnail cache at `upload/resize_cache/` and
the development-only Tina `admin/` directory are excluded from the preview.
Export file mtimes are derived from their content hashes, allowing SFTP mirror
runs to skip unchanged files despite GitHub checkout timestamps changing.

## Safe rollout

1. Push the workflow with `FTP_DEPLOY_ENABLED=false` and confirm the build.
2. Run the workflow manually with `deployment=dry-run`.
3. Inspect that every planned remote path is below `/www/test-new/`.
4. Set `FTP_DEPLOY_ENABLED=true`.
5. Run manually with `deployment=publish`.
6. Verify both the old homepage and `/test-new/`.

Later pushes to `main` publish incrementally. The state file is stored inside
`/www/test-new/`; the workflow has no clean-slate mode and never targets
`/www/`. Files removed from the generated export may be removed from the
isolated preview directory, but not from its parent.

## URLs to verify

- `https://fkgrt.knu.ua/` — existing website still works
- `https://fkgrt.knu.ua/test-new/`
- `https://fkgrt.knu.ua/test-new/about`
- `https://fkgrt.knu.ua/test-new/posts`
- an unknown path below `/test-new/`, which should show its static 404 page

## Moving to the domain root later

Replacing the old website is a separate migration. It requires a verified
backup and a workflow change reviewed specifically for the root deployment.
Do not point the current synchronization at `/www/`.
