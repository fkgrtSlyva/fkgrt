#!/usr/bin/env bash

# Build the production TinaCMS admin, then export the static Next.js site.
set -euo pipefail

export NODE_OPTIONS="${NODE_OPTIONS:---no-experimental-webstorage --max-old-space-size=4096}"

pnpm exec tinacms build
pnpm exec next build

base_path="${NEXT_PUBLIC_BASE_PATH:-}"
base_path="/${base_path#/}"
base_path="${base_path%/}"
[ "$base_path" = "/" ] && base_path=""
sed -i.bak "s#__BASE_PATH__#${base_path}#g" out/.htaccess
rm out/.htaccess.bak
