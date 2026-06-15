// English routes that have a real translation of the CURRENT Ukrainian page
// (a hand-translated public/en/<path> file). The stale legacy /en archive was
// removed; this set is grown as each UA page is translated. Used by the header
// and home so the nav links into /en only where an English page exists, and
// falls back to the Ukrainian page everywhere else (never a broken /en link).
export const EN_ROUTES = new Set<string>([
  // Add a UA path here once its English translation lands in public/en/<path>.
  "/about",
  "/contacts",
  "/osvita",
  "/vstup",
  "/about/spetsialnosti",
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
