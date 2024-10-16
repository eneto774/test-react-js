import PostComments from '@/app/components/post-comments';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function MyReddit({ params }: any) {
  const { id, post_id } = params;
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }

  return (
    <div>
      <h1>Details: {post_id}</h1>
      <PostComments accessToken={session.accessToken} id={id} post_id={post_id} />
    </div>
  );
}
