import fs from "node:fs";
import path from "node:path";
import { Suspense } from "react";
import { assetPath } from "@/lib/asset-path";
import { LegacyGallery, type LegacyGalleryItem } from "./legacy-gallery";

type LegacyPage = {
  html: string;
  title: string;
};

const publicDir = path.join(process.cwd(), "public");
const legacyRoots = [
  "about",
  "contacts",
  "educational",
  "en",
  "gallery",
  "lecturer",
  "osvita",
  "student",
  "vstup",
];

// Root-level single-page legacy files (public/<name>.html) rather than directories.
const legacyRootPages = ["ecology"];

const migratedPageDetails: Record<string, { title: string }> = {
  about: { title: "Коледж" },
  contacts: { title: "Контакти" },
  educational: { title: "Студенту" },
  gallery: { title: "Галерея" },
  lecturer: { title: "Викладачу" },
  osvita: { title: "Освітній процес" },
  student: { title: "Студенту" },
  vstup: { title: "Вступнику" },
};

export const legacyRoutePaths = collectLegacyRoutePaths();
export const knownLegacyRoots = new Set([...legacyRoots, ...legacyRootPages]);

function collectLegacyRoutePaths() {
  const routes = new Set<string>();

  for (const rootPage of legacyRootPages) {
    if (fs.existsSync(path.join(publicDir, `${rootPage}.html`))) {
      routes.add(rootPage);
    }
  }

  for (const root of legacyRoots) {
    const directory = path.join(publicDir, root);
    if (!fs.existsSync(directory)) continue;

    for (const file of walk(directory)) {
      if (!file.endsWith(".html")) continue;

      const relative = path.relative(publicDir, file).replaceAll(path.sep, "/");
      const route = relative.replace(/\.html$/, "").replace(/\/index$/, "");
      if (route) routes.add(route);
    }
  }

  return Array.from(routes).sort();
}

function walk(directory: string): string[] {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function getLegacyFile(filepath: string) {
  const normalizedPath = filepath.replace(/\.html$/, "").replace(/\/$/, "");
  const directFile = path.join(publicDir, `${normalizedPath}.html`);
  const indexFile = path.join(publicDir, normalizedPath, "index.html");

  if (fs.existsSync(directFile)) return directFile;
  if (fs.existsSync(indexFile)) return indexFile;
  return null;
}

function decodeEntities(value: string) {
  return value
    .replaceAll("&quot;", '"')
    .replaceAll("&#039;", "'")
    .replaceAll("&amp;", "&")
    .replaceAll("&nbsp;", " ");
}

function titleFromHtml(source: string, filepath: string) {
  // Titles were carried over from the original SetTitle() into a leading
  // <!--title:...--> comment when the pages were converted from PHP to HTML.
  const titleMatch = source.match(/<!--title:([\s\S]*?)-->/);
  const normalizedPath = filepath.replace(/\.html$/, "").replace(/\/index$/, "");
  const pathWithoutLocale = normalizedPath.startsWith("en/") ? normalizedPath.slice(3) : normalizedPath;
  return decodeEntities(titleMatch?.[1] || migratedPageDetails[pathWithoutLocale]?.title || pathWithoutLocale.split("/").pop() || "КГРТ");
}

function isExternalUrl(value: string) {
  return /^(?:[a-z][a-z0-9+.-]*:|#|\/\/)/i.test(value);
}

function cleanPageHref(href: string) {
  return href
    .replace(/\/index\.php(?:$|[?#])/, (match) => match.replace("/index.php", ""))
    .replace(/\.php(?=$|[?#])/, "");
}

function rewriteUrl(value: string, baseRoute: string, attribute: string) {
  if (!value || isExternalUrl(value) || value.startsWith("data:")) return value;

  const [pathPart, suffix = ""] = value.split(/(?=[?#])/);
  const isRootRelative = pathPart.startsWith("/");
  // baseRoute is already rooted (e.g. "/en"), so joining a page-relative path
  // yields an absolute path — do not prepend another slash or we get "//en/...".
  const absolutePath = isRootRelative
    ? pathPart
    : path.posix.normalize(path.posix.join(baseRoute, pathPart));
  const cleanPath = attribute === "href" ? cleanPageHref(absolutePath) : absolutePath;

  return `${assetPath(cleanPath)}${suffix}`;
}

function normalizeLegacyHtml(source: string, file: string) {
  const baseRoute = `/${path.relative(publicDir, path.dirname(file)).replaceAll(path.sep, "/")}`;

  return source
    .replace(/^\uFEFF/, "")
    .replace(/<!--title:[\s\S]*?-->/, "")
    .replace(/<\?(?:php)?[\s\S]*?\?>/gi, "")
    .replace(/\s(?:data-type|data-group|data-lightgallery|data-fancybox-group)="[^"]*"/g, "")
    .replace(/\s(?:onclick|onload|onerror)="[^"]*"/gi, "")
    .replace(/\b(align|border|cellpadding|cellspacing|width|height)="([^"]*)"/gi, 'data-legacy-$1="$2"')
    .replace(/\b(src|href|action)=["']([^"']+)["']/gi, (_match, attribute: string, value: string) => {
      return `${attribute}="${rewriteUrl(value, baseRoute, attribute.toLowerCase())}"`;
    });
}

function getLegacyPage(filepath: string): LegacyPage | null {
  const file = getLegacyFile(filepath);
  if (!file) return null;

  const source = fs.readFileSync(file, "utf8");
  return {
    html: normalizeLegacyHtml(source, file),
    title: titleFromHtml(source, filepath),
  };
}

export type LegacySearchSource = {
  title: string;
  href: string;
  text: string;
};

export function getLegacySearchSources(): LegacySearchSource[] {
  return legacyRoutePaths
    .filter((route) => route !== "gallery" && !route.startsWith("gallery/"))
    .flatMap((route) => {
      const page = getLegacyPage(route);
      if (!page) return [];

      const text = page.html
        .replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();

      return [{ title: page.title, href: `/${route}`, text }];
    });
}

function galleryTitleFromPath(imagePath: string) {
  const filename = decodeURIComponent(path.basename(imagePath, path.extname(imagePath)));
  return filename
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim() || "Галерея";
}

function getGalleryItems(): LegacyGalleryItem[] {
  const roots = ["images/gallery", "upload/iblock", "upload/medialibrary"];
  const imagePattern = /\.(?:avif|gif|jpe?g|png|webp)$/i;
  const seen = new Set<string>();

  return roots.flatMap((root) => {
    const directory = path.join(publicDir, root);
    if (!fs.existsSync(directory)) return [];

    return walk(directory)
      .filter((file) => imagePattern.test(file))
      .map((file) => `/${path.relative(publicDir, file).replaceAll(path.sep, "/")}`)
      .filter((image) => {
        if (seen.has(image)) return false;
        seen.add(image);
        return true;
      })
      .map((image) => ({ image, title: galleryTitleFromPath(image) }));
  });
}

export function GalleryPageContent() {
  const items = getGalleryItems();

  return (
    <>
      <section className="legacy-breadcrumb">
        <h1>Галерея</h1>
        <p className="mt-8 text-sm">Головна / Галерея</p>
      </section>
      <section className="bg-white py-[70px] md:py-[114px]">
        <div className="mx-auto max-w-[1200px] px-4">
          <Suspense fallback={<div className="legacy-gallery-loading">Завантаження галереї...</div>}>
            <LegacyGallery items={items} />
          </Suspense>
        </div>
      </section>
    </>
  );
}

export function LegacyPageContent({ filepath }: { filepath: string }) {
  const page = getLegacyPage(filepath);
  const title = page?.title || "КГРТ";

  return (
    <>
      <section className="legacy-breadcrumb">
        <h1>{title}</h1>
        <p className="mt-8 text-sm">Головна / {title}</p>
      </section>
      <section className="legacy-content bg-white">
        <div className="legacy-html mx-auto max-w-[1200px] px-4">
          {page ? (
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
          ) : (
            <p>Сторінку збережено у спадковому архіві, але її файл не знайдено у поточній збірці.</p>
          )}
        </div>
      </section>
    </>
  );
}
