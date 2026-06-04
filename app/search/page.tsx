import { Suspense } from "react";
import Layout from "@/components/layout/layout";
import { getSearchDocuments } from "@/lib/search";
import SearchClientPage from "./client-page";

export const revalidate = 300;

export default function SearchPage() {
  const documents = getSearchDocuments();

  return (
    <Layout>
      <Suspense fallback={null}>
        <SearchClientPage documents={documents} />
      </Suspense>
    </Layout>
  );
}
