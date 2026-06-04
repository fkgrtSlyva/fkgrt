import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { assetPath } from "@/lib/asset-path";
import { Card } from "../ui/card";

export interface NewsPost {
  title: string;
  date: string | null;
  heroImg: string | null;
  url: string;
}

interface LatestNewsSectionProps {
  posts: NewsPost[];
}

export function LatestNewsSection({ posts }: LatestNewsSectionProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="bg-[#f3f6f9] py-[70px] md:py-[114px]">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mb-14 text-center">
          <h2 className="font-serif text-3xl font-black text-[#0f2444] md:text-[36px]">Останні новини</h2>
          <div className="fk-divider mx-auto mt-7" />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const date = post.date ? new Date(post.date) : null;
            const formattedDate =
              date && !isNaN(date.getTime())
                ? format(date, "dd.MM.yyyy")
                : "";

            return (
              <Card
                key={post.url}
                className="group overflow-hidden rounded-none border-0 bg-white shadow-none transition-shadow hover:shadow-xl"
              >
                {post.heroImg && (
                  <Link href={post.url}>
                    <div className="aspect-[1.55] overflow-hidden">
                      <Image
                        src={assetPath(post.heroImg)}
                        alt={post.title}
                        width={400}
                        height={225}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                )}
                <div className="p-7">
                  {formattedDate && (
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#f0c64a]">{formattedDate}</p>
                  )}
                  <h3 className="mb-5 font-serif text-lg font-bold leading-snug text-[#0f2444]">
                    <Link
                      href={post.url}
                      className="transition-colors hover:text-[#f0c64a]"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <Link
                    href={post.url}
                    className="text-sm font-bold uppercase tracking-wide text-[#0f2444] hover:text-[#f0c64a]"
                  >
                    Детальніше
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
        <div className="mt-14 text-center"><Link href="/posts" className="fk-btn-primary inline-block">Всі новини</Link></div>
      </div>
    </section>
  );
}
