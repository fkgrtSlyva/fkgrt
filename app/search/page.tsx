import { Suspense } from "react";
import Layout from "@/components/layout/layout";
import SearchClientPage from "./client-page";

export const revalidate = 300;

export default function SearchPage() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <SearchClientPage />
      </Suspense>
    </Layout>
  );
}
