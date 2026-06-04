import React from 'react';
import { notFound } from 'next/navigation';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';
import { Section } from '@/components/layout/section';
import { GalleryPageContent, LegacyPageContent, knownLegacyRoots, legacyRoutePaths } from '@/components/legacy-pages';
import ClientPage from './client-page';

export const revalidate = 300;

export default async function Page({
  params,
}: {
  params: Promise<{ urlSegments: string[] }>;
}) {
  const resolvedParams = await params;
  const filepath = resolvedParams.urlSegments.join('/');

  let data;
  try {
    data = await client.queries.page({
      relativePath: `${filepath}.mdx`,
    });
  } catch (error) {
    const root = resolvedParams.urlSegments[0];
    if (knownLegacyRoots.has(root)) {
      return (
        <Layout>
          {root === 'gallery' ? <GalleryPageContent /> : <LegacyPageContent filepath={filepath} />}
        </Layout>
      );
    }

    notFound();
  }

  return (
    <Layout rawPageData={data}>
      <Section>
        <ClientPage {...data} />
      </Section>
    </Layout>
  );
}

export async function generateStaticParams() {
  let pages = await client.queries.pageConnection();
  const allPages = pages;

  if (!allPages.data.pageConnection.edges) {
    return [];
  }

  while (pages.data.pageConnection.pageInfo.hasNextPage) {
    pages = await client.queries.pageConnection({
      after: pages.data.pageConnection.pageInfo.endCursor,
    });

    if (!pages.data.pageConnection.edges) {
      break;
    }

    allPages.data.pageConnection.edges.push(...pages.data.pageConnection.edges);
  }

  const params = allPages.data?.pageConnection.edges
    .map((edge) => ({
      urlSegments: edge?.node?._sys.breadcrumbs || [],
    }))
    .filter((x) => x.urlSegments.length >= 1)
    .filter((x) => !x.urlSegments.every((x) => x === 'home')); // exclude the home page

  const tinaPaths = new Set(params.map((param) => param.urlSegments.join('/')));
  const legacyParams = legacyRoutePaths
    .filter((path) => !tinaPaths.has(path))
    .map((path) => ({ urlSegments: path.split('/') }));

  return [...params, ...legacyParams];
}
