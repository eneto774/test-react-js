import { PageBreadcrub } from '@/components/breadcrumb';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import PopularSubreddits from '../components/popular-subreddits';

export default async function MyReddit() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }

  return (
    <div>
      <PageBreadcrub items={[{ name: '' }, { name: 'Popular Subreddits' }]} />
      <PopularSubreddits accessToken={session.accessToken || ''} />
    </div>
  );
}
