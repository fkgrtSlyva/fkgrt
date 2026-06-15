"use client";

import { FkgrtHome } from "@/components/fkgrt-home";
import ErrorBoundary from "@/components/error-boundary";
import type { NewsPost } from "@/components/blocks/latest-news";

export default function EnglishHome({ latestPosts }: { latestPosts: NewsPost[] }) {
  return (
    <ErrorBoundary>
      <FkgrtHome latestPosts={latestPosts} lang="en" />
    </ErrorBoundary>
  );
}
