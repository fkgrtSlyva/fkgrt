"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { langFromPath } from "@/lib/i18n";

// The static export ships a single root <html lang="uk">, so English pages would
// otherwise be announced as Ukrainian. Correct the attribute on the client from
// the current path (e.g. /en/* -> "en") for screen readers and JS-aware crawlers.
export function HtmlLangSync() {
  const pathname = usePathname() || "/";

  useEffect(() => {
    document.documentElement.lang = langFromPath(pathname);
  }, [pathname]);

  return null;
}
