#!/usr/bin/env bash

# Build the production TinaCMS admin, then export the static Next.js site.
set -euo pipefail

export NODE_OPTIONS="${NODE_OPTIONS:---no-experimental-webstorage --max-old-space-size=4096}"

pnpm exec tinacms build
pnpm exec next build
python3 scripts/prepare-static-export.py
