"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { assetPath } from "@/lib/asset-path";

export type LegacyGalleryItem = {
  title: string;
  image: string;
};

const PAGE_SIZE = 60;

function getPage(value: string | null, pageCount: number) {
  const parsed = Number.parseInt(value || "1", 10);
  if (!Number.isFinite(parsed)) return 1;
  return Math.min(Math.max(parsed, 1), pageCount);
}

export function LegacyGallery({ items }: { items: LegacyGalleryItem[] }) {
  const searchParams = useSearchParams();
  const pageCount = Math.max(Math.ceil(items.length / PAGE_SIZE), 1);
  const page = getPage(searchParams?.get("page") || null, pageCount);
  const visibleItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return items.slice(start, start + PAGE_SIZE);
  }, [items, page]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <a
            key={item.image}
            href={assetPath(item.image)}
            className="group relative block overflow-hidden bg-[#102c57] shadow-lg"
          >
            <img
              src={assetPath(item.image)}
              alt={item.title}
              className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-55"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 p-5 font-serif text-lg font-bold text-white">
              {item.title}
            </span>
          </a>
        ))}
      </div>
      {pageCount > 1 && (
        <nav className="legacy-pagination" aria-label="Сторінки галереї">
          {Array.from({ length: pageCount }, (_, index) => {
            const pageNumber = index + 1;
            return (
              <a
                key={pageNumber}
                href={pageNumber === 1 ? "/gallery" : `/gallery?page=${pageNumber}`}
                aria-current={pageNumber === page ? "page" : undefined}
              >
                {pageNumber}
              </a>
            );
          })}
        </nav>
      )}
    </>
  );
}
