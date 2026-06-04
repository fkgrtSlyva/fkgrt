import React from "react";
import client from "@/tina/__generated__/client";
import Layout from "@/components/layout/layout";
import HomeClientPage from "./home-client-page";
import { NewsPost } from "@/components/blocks/latest-news";

export const revalidate = 300;

export default async function Home() {
  const pageData = await client.queries.page({
    relativePath: `home.mdx`,
  });

  // Fetch latest posts for the news section on the homepage
  let latestPosts: NewsPost[] = [];
  try {
      const postsData = await client.queries.postConnection({
        sort: "date",
        last: 9,
      });
    const edges = postsData.data.postConnection.edges || [];
    latestPosts = edges
      .filter(Boolean)
      .map((edge: any) => ({
        title: edge.node.title as string,
        date: (edge.node.date as string) || null,
        heroImg: (edge.node.heroImg as string) || null,
        url: `/posts/${edge.node._sys.breadcrumbs.join("/")}`,
      }))
      .reverse(); // newest first (last: N returns oldest-first within the last N)
  } catch (_e) {
    // No posts yet — that's fine
  }

  return (
    <Layout rawPageData={pageData}>
      <HomeClientPage {...pageData} latestPosts={latestPosts} />
    </Layout>
  );
}
