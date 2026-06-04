"use client";

import { PageQuery } from "@/tina/__generated__/types";
import { NewsPost } from "@/components/blocks/latest-news";
import ErrorBoundary from "@/components/error-boundary";
import { FkgrtHome } from "@/components/fkgrt-home";

interface HomeClientPageProps {
  data: { page: PageQuery["page"] };
  variables: { relativePath: string };
  query: string;
  latestPosts: NewsPost[];
}

export default function HomeClientPage({
  latestPosts,
  ..._tinaProps
}: HomeClientPageProps) {
  return (
    <ErrorBoundary>
      <FkgrtHome latestPosts={latestPosts} />
    </ErrorBoundary>
  );
}
