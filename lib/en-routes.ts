// The legacy site has a parallel English version under /en that mirrors a
// subset of the Ukrainian routes (it has no vstup, posts/news, or a few
// student pages). This is a frozen legacy archive, so the set is static.
// Used by the header to build a two-way language switch and to keep the nav
// inside /en — but only for links whose English page actually exists, so we
// never produce a broken /en/... link.
export const EN_ROUTES = new Set<string>([
  "/about",
  "/about/administratsiya",
  "/about/museum",
  "/about/publichna-informatsiya",
  "/about/spetsialnosti",
  "/about/spivrobitnitstvo",
  "/about/vipuskniki",
  "/contacts",
  "/educational",
  "/educational/monitoring",
  "/educational/psychologist",
  "/educational/quality",
  "/educational/resources",
  "/educational/scribble",
  "/educational/selfmanagement",
  "/educational/stop",
  "/gallery",
  "/lecturer",
  "/lecturer/educationalwork",
  "/osvita",
  "/osvita/comision",
  "/osvita/kabinet",
  "/osvita/konzept",
  "/osvita/laborotory",
  "/osvita/links",
  "/osvita/methodrob",
  "/osvita/methodrob2",
  "/osvita/navchaliniplan",
  "/osvita/portal",
  "/osvita/robota",
  "/osvita/subjects/components",
  "/osvita/subjects/drilling",
  "/osvita/subjects/ecology",
  "/osvita/subjects/geology",
  "/osvita/subjects/geophysics",
  "/osvita/subjects/geotourism",
  "/osvita/subjects/hydrogeological",
  "/osvita/subjects/maintenance",
  "/osvita/subjects/motorists",
]);

// The Ukrainian route for a path, regardless of current locale.
export function toUkrainianPath(pathname: string) {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}

export function isEnglishPath(pathname: string) {
  return pathname === "/en" || pathname.startsWith("/en/");
}

// Localize an internal Ukrainian href for the current locale. In English mode a
// link is prefixed with /en only when an English page exists for it; otherwise
// it falls back to the Ukrainian page so we never emit a dead /en link.
export function localizeHref(href: string, inEnglish: boolean) {
  if (!inEnglish) return href;
  return EN_ROUTES.has(href) ? `/en${href}` : href;
}

// Target for the language switcher given the current pathname.
export function languageToggleTarget(pathname: string) {
  if (isEnglishPath(pathname)) {
    return { label: "УКР", href: toUkrainianPath(pathname) };
  }
  return { label: "EN", href: EN_ROUTES.has(pathname) ? `/en${pathname}` : "/en" };
}
