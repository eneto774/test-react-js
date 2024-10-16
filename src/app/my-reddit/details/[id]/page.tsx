import ViewMoreSubreddit from '@/app/components/view-more-subreddit';
import { PageBreadcrub } from '@/components/breadcrumb';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function DetailsReddit({ params }: any) {
  const { id } = params;
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }

  return (
    <div>
      <PageBreadcrub
        items={[{ name: '' }, { name: 'Popular Subreddits', url: '/' }, { name: `r/${id}` }]}
      />
      <ViewMoreSubreddit accessToken={session.accessToken} id={id} />
    </div>
  );
}
