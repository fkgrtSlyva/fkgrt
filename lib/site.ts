// Public site URL, including any temporary preview base path. It is used for
// metadata, the sitemap and robots output.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://fkgrt.knu.ua"
).replace(/\/$/, "");
