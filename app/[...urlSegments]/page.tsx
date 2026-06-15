import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';
import { Section } from '@/components/layout/section';
import { GalleryPageContent, LegacyPageContent, knownLegacyRoots, legacyRoutePaths } from '@/components/legacy-pages';
import type { NewsPost } from '@/components/blocks/latest-news';
import { assetPath } from '@/lib/asset-path';
import ClientPage from './client-page';
import EnglishHome from './en-home';

export const revalidate = 300;

// The legacy /news section was a Bitrix database-driven component with no file
// content to migrate; news now lives in /posts.
const newsRedirectPaths = ['news', 'news/det'];

// The English home is a translation of the Ukrainian home (the React homepage),
// not a legacy page — render it directly at /en.
const englishHomePaths = ['en'];

async function fetchLatestPosts(): Promise<NewsPost[]> {
  try {
    const postsData = await client.queries.postConnection({ sort: 'date', last: 9 });
    const edges = postsData.data.postConnection.edges || [];
    return edges
      .filter(Boolean)
      .map((edge: any) => ({
        title: edge.node.title as string,
        date: (edge.node.date as string) || null,
        heroImg: (edge.node.heroImg as string) || null,
        url: `/posts/${edge.node._sys.breadcrumbs.join('/')}`,
      }))
      .reverse();
  } catch (_e) {
    return [];
  }
}

function NewsRedirect() {
  return (
    <Layout>
      <meta httpEquiv="refresh" content={`0;url=${assetPath('/posts')}`} />
      <Section>
        <p className="py-20 text-center">
          Новини переїхали. <Link href="/posts">Перейти до новин →</Link>
        </p>
      </Section>
    </Layout>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ urlSegments: string[] }>;
}) {
  const resolvedParams = await params;
  const filepath = resolvedParams.urlSegments.join('/');
  const root = resolvedParams.urlSegments[0];

  if (root === 'news') {
    return <NewsRedirect />;
  }

  if (filepath === 'en') {
    const latestPosts = await fetchLatestPosts();
    return (
      <Layout>
        <EnglishHome latestPosts={latestPosts} />
      </Layout>
    );
  }

  if (knownLegacyRoots.has(root)) {
    return (
      <Layout>
        {root === 'gallery' ? <GalleryPageContent /> : <LegacyPageContent filepath={filepath} />}
      </Layout>
    );
  }

  let data;
  try {
    data = await client.queries.page({
      relativePath: `${filepath}.mdx`,
    });
  } catch (error) {
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
  const legacyParams = [...legacyRoutePaths, ...newsRedirectPaths, ...englishHomePaths]
    .filter((path) => !tinaPaths.has(path))
    .map((path) => ({ urlSegments: path.split('/') }));

  return [...params, ...legacyParams];
}
