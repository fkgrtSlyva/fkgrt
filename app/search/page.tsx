import { Suspense } from "react";
import type { Metadata } from "next";
import Layout from "@/components/layout/layout";
import SearchClientPage from "./client-page";

export const metadata: Metadata = {
  title: "Пошук",
  description: "Пошук по сайту Фахового коледжу геологорозвідувальних технологій КНУ.",
};

export default function SearchPage() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <SearchClientPage />
      </Suspense>
    </Layout>
  );
}
