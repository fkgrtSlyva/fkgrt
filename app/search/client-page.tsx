"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { assetPath } from "@/lib/asset-path";
import { searchDocuments } from "@/lib/search-shared";
import type { SearchDocument } from "@/lib/search-shared";

type SearchClientPageProps = {
  documents: SearchDocument[];
};

export default function SearchClientPage({ documents }: SearchClientPageProps) {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") || "").trim();
  const results = searchDocuments(documents, query);

  return (
    <>
      <section className="relative overflow-hidden bg-[#071a44] px-4 py-8 text-white md:py-10">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#f0c64a_0,transparent_28%),radial-gradient(circle_at_80%_10%,#3687aa_0,transparent_24%)]" />
        <div className="relative mx-auto max-w-[980px]">
          <form action={assetPath("/search")} className="flex flex-col gap-3 rounded-xl bg-white p-2 shadow-2xl shadow-black/25 sm:flex-row">
            <label className="sr-only" htmlFor="site-search-page">
              Пошук
            </label>
            <input
              id="site-search-page"
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Наприклад: вступ, розклад, спеціальності"
              className="min-h-12 flex-1 rounded-lg px-4 text-base text-[#071a44] outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#f0c64a] px-6 font-bold text-[#071a44] transition hover:bg-[#ffd85d]"
            >
              <Search size={18} />
              Шукати
            </button>
          </form>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-[980px]">
          {query ? (
            <p className="mb-8 text-slate-600">
              {results.length > 0
                ? `Знайдено результатів: ${results.length}`
                : `Нічого не знайдено за запитом: ${query}`}
            </p>
          ) : (
            <p className="mb-8 text-slate-600">
              Введіть слово або фразу, щоб шукати в матеріалах сайту.
            </p>
          )}

          <div className="grid gap-4">
            {results.map((result) => (
              <Link
                key={result.href}
                href={result.href}
                className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#3687aa] hover:shadow-xl hover:shadow-slate-200/70"
              >
                <span className="mb-3 inline-flex rounded-full bg-[#071a44]/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#3687aa]">
                  {result.type === "post" ? "Новина" : "Сторінка"}
                </span>
                <h2 className="font-serif text-2xl font-black text-[#071a44] group-hover:text-[#3687aa]">
                  {result.title}
                </h2>
                {result.excerpt && (
                  <p className="mt-3 line-clamp-3 text-slate-600">{result.excerpt}</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
