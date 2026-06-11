import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { getLegacySearchSources } from "@/components/legacy-pages";
import { searchDocuments } from "./search-shared";
import type { SearchDocument } from "./search-shared";

export type { SearchDocument, SearchResult } from "./search-shared";

const contentRoot = path.join(process.cwd(), "content");

function parseFrontmatter(markdown: string) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    return { frontmatter: "", body: markdown };
  }

  return { frontmatter: match[1], body: match[2] };
}

function getField(frontmatter: string, field: string) {
  const match = frontmatter.match(new RegExp(`^${field}:\\s*(.+)$`, "m"));
  return match?.[1]?.replace(/^['"]|['"]$/g, "").trim() || "";
}

function getExcerpt(frontmatter: string, body: string) {
  const excerptStart = frontmatter.match(/^excerpt:\s*>?\s*$/m);
  if (excerptStart) {
    const lines = frontmatter.split("\n");
    const startIndex = lines.findIndex((line) => /^excerpt:\s*>?\s*$/.test(line));
    const excerptLines: string[] = [];

    for (const line of lines.slice(startIndex + 1)) {
      if (/^[a-zA-Z_][\w-]*:/.test(line)) break;
      excerptLines.push(line.trim());
    }

    const excerpt = excerptLines.join(" ").trim();
    if (excerpt) return excerpt;
  }

  return stripMarkdown(body).slice(0, 180);
}

function stripMarkdown(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[>#*_`~\-[\](){}|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function fileToHref(filePath: string, type: "page" | "post") {
  const relative = path.relative(path.join(contentRoot, type === "post" ? "posts" : "pages"), filePath);
  const slug = relative.replace(/\.mdx$/, "").split(path.sep).join("/");

  if (type === "page" && slug === "home") return "/";
  return type === "post" ? `/posts/${slug}` : `/${slug}`;
}

function getMdxFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return getMdxFiles(filePath);
    return entry.isFile() && entry.name.endsWith(".mdx") ? [filePath] : [];
  });
}

function getLegacySearchDocuments(): SearchDocument[] {
  return getLegacySearchSources().map(({ title, href, text }) => ({
    title,
    href,
    type: "page",
    excerpt: text.slice(0, 180),
    searchableText: `${title} ${text}`.toLocaleLowerCase("uk-UA"),
  }));
}

export function getSearchDocuments(): SearchDocument[] {
  const files = [
    ...getMdxFiles(path.join(contentRoot, "pages")),
    ...getMdxFiles(path.join(contentRoot, "posts")),
  ];

  const contentDocuments = files.map((filePath) => {
    const type: "page" | "post" = filePath.includes(`${path.sep}posts${path.sep}`) ? "post" : "page";
    const markdown = readFileSync(filePath, "utf8");
    const { frontmatter, body } = parseFrontmatter(markdown);
    const fallbackTitle = path.basename(filePath, ".mdx").replace(/-/g, " ");
    const title = getField(frontmatter, "title") || fallbackTitle;
    const excerpt = getExcerpt(frontmatter, body);
    const searchableText = stripMarkdown(`${title} ${frontmatter} ${body}`).toLocaleLowerCase("uk-UA");

    return {
      title,
      href: fileToHref(filePath, type),
      type,
      excerpt,
      searchableText,
    };
  });

  return [...contentDocuments, ...getLegacySearchDocuments()];
}

export function searchContent(query: string) {
  return searchDocuments(getSearchDocuments(), query);
}
