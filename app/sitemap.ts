import type { MetadataRoute } from "next";
import client from "@/tina/__generated__/client";
import { legacyRoutePaths } from "@/components/legacy-pages";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

// Collect every route the site exports: static shells, migrated legacy pages,
// Tina content pages and posts. Tina lookups are wrapped so a missing GraphQL
// server still yields a sitemap of the static + legacy routes.
async function tinaPageRoutes(): Promise<string[]> {
  try {
    let connection = await client.queries.pageConnection();
    const edges = [...(connection.data.pageConnection.edges || [])];

    while (connection.data.pageConnection.pageInfo.hasNextPage) {
      connection = await client.queries.pageConnection({
        after: connection.data.pageConnection.pageInfo.endCursor,
      });
      edges.push(...(connection.data.pageConnection.edges || []));
    }

    return edges
      .map((edge) => edge?.node?._sys.breadcrumbs.join("/") || "")
      .filter((route) => route && route !== "home");
  } catch {
    return [];
  }
}

async function postRoutes(): Promise<string[]> {
  try {
    let connection = await client.queries.postConnection();
    const edges = [...(connection.data.postConnection.edges || [])];

    while (connection.data.postConnection.pageInfo.hasNextPage) {
      connection = await client.queries.postConnection({
        after: connection.data.postConnection.pageInfo.endCursor,
      });
      edges.push(...(connection.data.postConnection.edges || []));
    }

    return edges
      .map((edge) => edge?.node?._sys.breadcrumbs.join("/"))
      .filter((route): route is string => Boolean(route))
      .map((route) => `posts/${route}`);
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = new Set<string>(["", "en", "posts", "gallery", "search"]);

  for (const route of legacyRoutePaths) routes.add(route);
  for (const route of await tinaPageRoutes()) routes.add(route);
  for (const route of await postRoutes()) routes.add(route);

  const lastModified = new Date();
  return Array.from(routes)
    .sort()
    .map((route) => ({
      url: route ? `${siteUrl}/${route}` : siteUrl,
      lastModified,
    }));
}
