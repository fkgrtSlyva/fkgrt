#!/usr/bin/env python3

"""Prepare the static export for Apache and deterministic SFTP mirroring."""

from __future__ import annotations

import hashlib
import os
import shutil
from pathlib import Path


export_root = Path("out")
base_path = os.environ.get("NEXT_PUBLIC_BASE_PATH", "").strip("/")
base_path = f"/{base_path}" if base_path else ""

htaccess = export_root / ".htaccess"
htaccess.write_text(
    htaccess.read_text(encoding="utf-8").replace("__BASE_PATH__", base_path),
    encoding="utf-8",
)

# Apache redirects real directories before resolving a sibling `page.html`.
# Put the generated page at `page/index.html` too, replacing any copied legacy
# index, so clean routes work consistently below the preview base path.
for html_file in sorted(export_root.rglob("*.html")):
    if html_file.name == "index.html" or "admin" in html_file.parts:
        continue

    route_directory = html_file.with_suffix("")
    if route_directory.is_dir():
        shutil.copyfile(html_file, route_directory / "index.html")

# GitHub checkouts give tracked assets fresh mtimes on every run. Derive each
# file's mtime from its contents so lftp can compare size+mtime reliably:
# unchanged files remain identical, including large legacy media files.
epoch_2000 = 946_684_800
timestamp_span = 900_000_000
for file_path in export_root.rglob("*"):
    if not file_path.is_file():
        continue

    digest = hashlib.sha256(file_path.read_bytes()).digest()
    timestamp = epoch_2000 + int.from_bytes(digest[:4], "big") % timestamp_span
    os.utime(file_path, (timestamp, timestamp))
