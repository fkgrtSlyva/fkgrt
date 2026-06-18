// Helpers for the bilingual shell. The set of Ukrainian paths that have an
// English translation is derived at build time from the files under public/en
// (see `englishRoutePaths` in components/legacy-pages.tsx) and threaded to the
// client through the layout context, so adding a translation is just dropping
// the file — there is no hand-maintained list here.

const NO_ROUTES: ReadonlySet<string> = new Set();

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
export function localizeHref(href: string, inEnglish: boolean, enRoutes: ReadonlySet<string> = NO_ROUTES) {
  if (!inEnglish) return href;
  return enRoutes.has(href) ? `/en${href}` : href;
}

// Target for the language switcher given the current pathname.
export function languageToggleTarget(pathname: string, enRoutes: ReadonlySet<string> = NO_ROUTES) {
  if (isEnglishPath(pathname)) {
    return { label: "УКР", href: toUkrainianPath(pathname) };
  }
  return { label: "EN", href: enRoutes.has(pathname) ? `/en${pathname}` : "/en" };
}
