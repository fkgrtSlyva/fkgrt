// Public site origin. Used for metadata (Open Graph), the sitemap and robots.
// On the production domain the base path is empty, so these absolute URLs are
// correct; override via NEXT_PUBLIC_SITE_URL for other hosts.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fkgrt.knu.ua";
