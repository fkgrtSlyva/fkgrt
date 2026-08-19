"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import {
  PostConnectionQuery,
  PostConnectionQueryVariables,
} from "@/tina/__generated__/types";
import ErrorBoundary from "@/components/error-boundary";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { assetPath } from "@/lib/asset-path";

interface ClientPostProps {
  data: PostConnectionQuery;
  variables: PostConnectionQueryVariables;
  query: string;
}

const POSTS_PER_PAGE = 9;

export default function PostsClientPage(props: ClientPostProps) {
  const [currentPage, setCurrentPage] = React.useState(1);

  const posts = (props.data?.postConnection?.edges || [])
    .filter(Boolean)
    .map((postData) => {
      const post = postData!.node!;
      const date = post.date ? new Date(post.date) : null;
      let formattedDate = "";
      let rawDate = 0;
      if (date && !isNaN(date.getTime())) {
        formattedDate = format(date, "dd.MM.yyyy");
        rawDate = date.getTime();
      }

      return {
        id: post.id,
        rawDate,
        published: formattedDate,
        title: post.title,
        tags: post.tags?.map((tag) => tag?.tag?.name).filter(Boolean) || [],
        url: `/posts/${post._sys.breadcrumbs.join("/")}`,
        excerpt: post.excerpt,
        heroImg: post.heroImg,
        author: {
          name: post.author?.name || "",
          avatar: post.author?.avatar,
        },
      };
    })
    .sort((a, b) => b.rawDate - a.rawDate);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const displayedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ErrorBoundary>
      <section className="legacy-breadcrumb">
        <h1>Новини</h1>
        <p className="mt-8 text-sm">Головна / Новини</p>
      </section>

      <section className="bg-[#f3f6f9] py-[70px] md:py-[114px]">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {displayedPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <Link
                  href={post.url}
                  className="block aspect-[700/455] overflow-hidden bg-slate-100"
                >
                  {post.heroImg ? (
                    <Image
                      src={assetPath(post.heroImg)}
                      alt={post.title}
                      width={700}
                      height={455}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-400">
                      <span className="font-serif text-lg font-bold text-[#0f2444]/30">
                        КГРТ
                      </span>
                    </div>
                  )}
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 font-serif text-[18px] font-bold leading-snug text-[#0f2444] md:text-[19px]">
                    <Link
                      href={post.url}
                      className="transition-colors hover:text-[#3687aa]"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  {post.excerpt && (
                    <div className="mb-4 flex-1 text-sm leading-relaxed text-[#555]">
                      {typeof post.excerpt === "string" ? (
                        <p>{post.excerpt}</p>
                      ) : (
                        <TinaMarkdown content={post.excerpt} />
                      )}
                    </div>
                  )}
                  <div className="mt-auto">
                    <Link
                      href={post.url}
                      className="inline-flex items-center text-sm font-bold text-[#0f2444] transition-colors hover:text-[#3687aa]"
                    >
                      Детальніше &rarr;
                    </Link>
                  </div>
                  {post.published && (
                    <div className="mt-4 flex items-center border-t border-slate-100 pt-3 text-xs italic text-[#777]">
                      <Calendar
                        size={14}
                        className="mr-2 shrink-0 text-[#3687aa]"
                      />
                      <span className="font-medium text-black/80">
                        {post.published}
                      </span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="legacy-pagination">
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Попередня сторінка"
              >
                <ChevronLeft size={16} />
              </button>

              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isCurrent = currentPage === pageNumber;
                return (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => handlePageChange(pageNumber)}
                    aria-current={isCurrent ? "page" : undefined}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Наступна сторінка"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </ErrorBoundary>
  );
}
