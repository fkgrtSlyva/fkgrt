import type { Metadata } from 'next';
import Layout from '@/components/layout/layout';
import client from '@/tina/__generated__/client';
import PostsClientPage from './client-page';

export const metadata: Metadata = {
  title: 'Новини',
  description: 'Новини та події Фахового коледжу геологорозвідувальних технологій КНУ.',
};

export default async function PostsPage() {
  let posts = await client.queries.postConnection({
    sort: 'date',
    last: 50,
  });
  const allPosts = posts;

  if (!allPosts.data.postConnection.edges) {
    return (
      <Layout rawPageData={allPosts.data}>
        <PostsClientPage {...allPosts} />
      </Layout>
    );
  }

  while (posts.data?.postConnection.pageInfo.hasPreviousPage) {
    posts = await client.queries.postConnection({
      sort: 'date',
      before: posts.data.postConnection.pageInfo.endCursor,
      last: 50,
    });

    if (!posts.data.postConnection.edges) {
      break;
    }

    allPosts.data.postConnection.edges.push(...posts.data.postConnection.edges);
  }

  return (
    <Layout rawPageData={allPosts.data}>
      <PostsClientPage {...allPosts} />
    </Layout>
  );
}
