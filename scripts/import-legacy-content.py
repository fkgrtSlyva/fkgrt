#!/usr/bin/env python3

"""Import the public Bitrix news and gallery into Git-backed content."""

from __future__ import annotations

import argparse
import concurrent.futures
import datetime as dt
import html
import json
import re
import socket
import time
import unicodedata
import urllib.parse
import urllib.request
import urllib.error
from pathlib import Path

from bs4 import BeautifulSoup, NavigableString, Tag


SITE = "https://fkgrt.knu.ua"
POSTS_DIR = Path("content/posts")
GALLERY_FILE = Path("content/gallery.json")


def fetch(path: str) -> str:
    request = urllib.request.Request(
        urllib.parse.urljoin(SITE, path),
        headers={"User-Agent": "fkgrt-content-import/1.0"},
    )
    for attempt in range(4):
        try:
            with urllib.request.urlopen(request, timeout=60) as response:
                return response.read().decode("utf-8", errors="replace")
        except (urllib.error.URLError, socket.timeout):
            if attempt == 3:
                raise
            time.sleep(2 ** attempt)
    raise RuntimeError("unreachable")


def fetch_bytes(path: str) -> bytes:
    encoded_path = urllib.parse.quote(path, safe="/%")
    request = urllib.request.Request(
        urllib.parse.urljoin(SITE, encoded_path),
        headers={"User-Agent": "fkgrt-content-import/1.0"},
    )
    with urllib.request.urlopen(request, timeout=90) as response:
        return response.read()


def absolute_path(value: str) -> str:
    parsed = urllib.parse.urlsplit(urllib.parse.urljoin(SITE, value))
    return urllib.parse.unquote(parsed.path)


TRANSLITERATION = str.maketrans({
    "а": "a", "б": "b", "в": "v", "г": "h", "ґ": "g", "д": "d",
    "е": "e", "є": "ie", "ж": "zh", "з": "z", "и": "y", "і": "i",
    "ї": "i", "й": "i", "к": "k", "л": "l", "м": "m", "н": "n",
    "о": "o", "п": "p", "р": "r", "с": "s", "т": "t", "у": "u",
    "ф": "f", "х": "kh", "ц": "ts", "ч": "ch", "ш": "sh", "щ": "shch",
    "ь": "", "ю": "iu", "я": "ia", "ы": "y", "э": "e", "ё": "io", "ъ": "",
})


def slugify(title: str, legacy_id: int) -> str:
    value = unicodedata.normalize("NFKD", title.lower()).translate(TRANSLITERATION)
    value = re.sub(r"[^a-z0-9]+", "-", value).strip("-")
    return f"{value[:80].rstrip('-') or 'news'}-{legacy_id}"


def markdown(node: Tag | NavigableString) -> str:
    if isinstance(node, NavigableString):
        return str(node)
    if not isinstance(node, Tag):
        return ""

    name = node.name.lower()
    content = "".join(markdown(child) for child in node.children)
    content = html.unescape(content)

    if name == "br":
        return "\n\n"
    if name in {"strong", "b"}:
        return f"**{content.strip()}**"
    if name in {"em", "i"}:
        return f"*{content.strip()}*"
    if name == "a":
        href = node.get("href", "")
        if not href or href.startswith("javascript:"):
            return content
        return f"[{content.strip()}]({absolute_path(href) if href.startswith('/') else href})"
    if name == "img":
        src = node.get("src")
        if src and "/images/core/emoji/" in src:
            return node.get("alt", "")
        image_path = urllib.parse.quote(absolute_path(src), safe="/%") if src else ""
        return f"\n\n![{node.get('alt', '').strip()}]({image_path})\n\n" if image_path else ""
    if name == "li":
        return f"- {content.strip()}\n"
    if name in {"ul", "ol"}:
        return f"\n{content}\n"
    if name in {"p", "div", "section", "article", "table", "tr"}:
        return f"\n\n{content.strip()}\n\n"
    if name in {"h1", "h2", "h3", "h4", "h5", "h6"}:
        return f"\n\n{'#' * int(name[1])} {content.strip()}\n\n"
    return content


def clean_markdown(value: str) -> str:
    value = value.replace("\xa0", " ").replace("\r", "")
    value = re.sub(r"[ \t]+\n", "\n", value)
    value = re.sub(r"\n{3,}", "\n\n", value)
    return value.strip()


def list_news_ids() -> list[int]:
    ids: set[int] = set()
    for page in range(1, 26):
        soup = BeautifulSoup(fetch(f"/news/?PAGEN_1={page}"), "html.parser")
        for link in soup.select('a[href*="det.php?el="]'):
            match = re.search(r"[?&]el=(\d+)", link.get("href", ""))
            if match:
                ids.add(int(match.group(1)))
    return sorted(ids, reverse=True)


def parse_post(legacy_id: int) -> dict[str, str | int]:
    soup = BeautifulSoup(fetch(f"/news/det.php?el={legacy_id}"), "html.parser")
    item = soup.select_one(".news-detail-item.wrap")
    if item is None:
        raise RuntimeError(f"News item {legacy_id} has no detail body")

    heading = item.find(["h1", "h2", "h3"])
    title = heading.get_text(" ", strip=True) if heading else f"Новина {legacy_id}"
    description = item.select_one(".descripton")
    date_node = item.select_one(".news-date-time")
    image = item.select_one("img.detail_picture")

    body = clean_markdown(markdown(description)) if description else ""
    plain = description.get_text(" ", strip=True) if description else ""
    published = dt.datetime.strptime(date_node.get_text(strip=True), "%d.%m.%Y") if date_node else dt.datetime(1970, 1, 1)

    media = [
        absolute_path(node.get("src"))
        for node in item.select("img[src]")
        if "/images/core/emoji/" not in node.get("src", "")
    ]
    return {
        "id": legacy_id,
        "title": title,
        "slug": slugify(title, legacy_id),
        "heroImg": absolute_path(image.get("src")) if image and image.get("src") else "",
        "excerpt": re.sub(r"\s+", " ", plain)[:240].strip(),
        "date": published.strftime("%Y-%m-%dT09:00:00.000Z"),
        "body": body,
        "media": media,
    }


def render_post(post: dict[str, str | int]) -> str:
    frontmatter = [
        "---",
        f"title: {json.dumps(post['title'], ensure_ascii=False)}",
    ]
    if post["heroImg"]:
        frontmatter.append(f"heroImg: {json.dumps(post['heroImg'], ensure_ascii=False)}")
    frontmatter.extend([
        f"excerpt: {json.dumps(post['excerpt'], ensure_ascii=False)}",
        f"date: {post['date']}",
        "---",
        "",
        str(post["body"]),
        "",
    ])
    return "\n".join(frontmatter)


def import_gallery() -> list[dict[str, str]]:
    items: list[dict[str, str]] = []
    seen: set[str] = set()
    for page in range(1, 9):
        soup = BeautifulSoup(fetch(f"/gallery/?PAGEN_1={page}"), "html.parser")
        for link in soup.select('a[data-lightgallery="item"]'):
            image = link.get("href")
            if not image:
                continue
            image_path = absolute_path(image)
            if image_path in seen:
                continue
            seen.add(image_path)
            img = link.find("img")
            caption = link.find_next("figcaption")
            title = ""
            if caption:
                title_node = caption.find(class_="thumbnail-classic-title")
                title = title_node.get_text(" ", strip=True) if title_node else ""
            if not title and img:
                title = img.get("alt", "").strip()
            items.append({"image": image_path, "title": title or "Галерея"})
    return items


def download_media(paths: set[str]) -> None:
    allowed = {path for path in paths if path.startswith(("/upload/", "/images/"))}

    def download(path: str) -> tuple[bool, str | None]:
        target = Path("public") / path.lstrip("/")
        if target.is_file():
            return False, None
        target.parent.mkdir(parents=True, exist_ok=True)
        try:
            content = fetch_bytes(path)
        except urllib.error.HTTPError as error:
            if error.code == 404:
                return False, path
            raise
        target.write_bytes(content)
        return True, None

    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as pool:
        results = list(pool.map(download, sorted(allowed)))
    downloaded = sum(changed for changed, _missing in results)
    missing = [path for _changed, path in results if path]
    print(f"Downloaded {downloaded} missing media files")
    if missing:
        print(f"The legacy server itself is missing {len(missing)} referenced files")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--write", action="store_true", help="replace Git-backed posts and gallery")
    args = parser.parse_args()

    news_ids = list_news_ids()
    with concurrent.futures.ThreadPoolExecutor(max_workers=12) as pool:
        posts = list(pool.map(parse_post, news_ids))
    gallery = import_gallery()

    print(f"Found {len(posts)} news posts and {len(gallery)} gallery images")
    if not args.write:
        return

    media_paths = {
        path
        for post in posts
        for path in post["media"]
        if isinstance(path, str)
    }
    media_paths.update(item["image"] for item in gallery)
    download_media(media_paths)

    POSTS_DIR.mkdir(parents=True, exist_ok=True)
    for old_post in POSTS_DIR.glob("*.mdx"):
        old_post.unlink()
    for post in posts:
        (POSTS_DIR / f"{post['slug']}.mdx").write_text(render_post(post), encoding="utf-8")

    GALLERY_FILE.write_text(
        json.dumps(gallery, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
