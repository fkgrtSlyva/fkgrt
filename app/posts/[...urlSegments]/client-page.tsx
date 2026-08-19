"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { PostQuery } from "@/tina/__generated__/types";
import { components } from "@/components/mdx-components";
import ErrorBoundary from "@/components/error-boundary";
import { assetPath } from "@/lib/asset-path";
import { Calendar } from "lucide-react";

interface ClientPostProps {
  data: PostQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

export default function PostClientPage(props: ClientPostProps) {
  const { data } = useTina({ ...props });
  const post = data.post;

  const date = post.date ? new Date(post.date) : null;
  let formattedDate = "";
  if (date && !isNaN(date.getTime())) {
    formattedDate = format(date, "dd.MM.yyyy");
  }

  return (
    <ErrorBoundary>
      <section className="legacy-breadcrumb">
        <h1>Новини</h1>
        <p className="mt-8 text-sm">
          <Link href="/" className="hover:underline">
            Головна
          </Link>
          {" / "}
          <Link href="/posts" className="hover:underline">
            Новини
          </Link>
        </p>
      </section>

      <section className="bg-white py-[70px] md:py-[100px]">
        <div className="mx-auto max-w-[1000px] px-4">
          <article>
            <h1
              data-tina-field={tinaField(post, "title")}
              className="mb-4 font-serif text-2xl font-black text-[#0f2444] md:text-3xl lg:text-4xl"
            >
              {post.title}
            </h1>
            <div className="fk-divider mb-6" />

            {formattedDate && (
              <div
                data-tina-field={tinaField(post, "date")}
                className="mb-8 flex items-center gap-2 text-sm italic text-slate-600"
              >
                <Calendar size={16} className="text-[#3687aa]" />
                <span>{formattedDate}</span>
              </div>
            )}

            {post.heroImg && (
              <div
                data-tina-field={tinaField(post, "heroImg")}
                className="mb-8 overflow-hidden rounded-md border border-slate-100 shadow-sm"
              >
                <Image
                  src={assetPath(post.heroImg)}
                  alt={post.title}
                  width={1200}
                  height={675}
                  priority={true}
                  className="h-auto w-full object-cover max-h-[550px]"
                />
              </div>
            )}

            <div
              data-tina-field={tinaField(post, "_body")}
              className="prose prose-slate max-w-none text-[16px] leading-[1.8] text-[#444]"
            >
              <TinaMarkdown content={post._body} components={components} />
            </div>

            <div className="mt-12 border-t border-slate-100 pt-8">
              <Link
                href="/posts"
                className="fk-btn-outline inline-flex items-center gap-2 text-sm"
              >
                ← До всіх новин
              </Link>
            </div>
          </article>
        </div>
      </section>
    </ErrorBoundary>
  );
}
