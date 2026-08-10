#!/usr/bin/env bash

# Next.js queries Tina's local GraphQL API while statically exporting pages.
# Run that API in the background and always stop it when the build finishes.
set -euo pipefail

export NODE_OPTIONS="${NODE_OPTIONS:---no-experimental-webstorage --max-old-space-size=4096}"

pnpm exec tinacms dev --noTelemetry --noWatch > /tmp/fkgrt-tina-build.log 2>&1 &
tina_pid=$!

cleanup() {
  kill "$tina_pid" 2>/dev/null || true
  wait "$tina_pid" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

for attempt in $(seq 1 90); do
  if curl --fail --silent http://localhost:4001/graphql --output /dev/null; then
    break
  fi

  if [ "$attempt" = 90 ]; then
    cat /tmp/fkgrt-tina-build.log
    exit 1
  fi

  sleep 1
done

pnpm exec next build
python3 scripts/prepare-static-export.py
