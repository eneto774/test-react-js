import { Card } from '@/components/ui/card';
import { api } from '@/lib/api';
import { PostSubreddit } from '@/types/posts-subreddit';
import Image from 'next/image';
import Link from 'next/link';
import InfiniteViewMoreSubreddit from './infinite-view-more-subreddit';

export default async function ViewMoreSubreddit({ accessToken, id }: any) {
  try {
    const response = await api.get(`/r/${id}/new`, {
      params: { limit: 9, after: '' },
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'User-Agent': 'next-14',
      },
    });

    const posts = response.data.data.children;
    const nextAfter = response.data.data.after;

    return (
      <>
        <h1 className="py-5 text-2xl font-extrabold">Posts in r/{id}</h1>
        <ul className="grid grid-cols-3 grid-rows-2 gap-5">
          {posts.map((post: PostSubreddit) => (
            <li key={post.data.id}>
              <Card className="flex h-full min-h-[205px] w-[300px] flex-col">
                <div className="flex flex-col p-6">
                  <span className="line-clamp-2 text-base font-bold">{post.data.title}</span>
                  <span className="text-sm">Author: {post.data.author}</span>
                </div>
                <div className="h-full min-h-[205px] w-full px-6">
                  <div className="flex h-full w-full items-center justify-center">
                    {post.data.thumbnail.includes('http') && (
                      <Image src={post.data.thumbnail} alt="" width={200} height={200} />
                    )}
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between gap-1 p-5">
                  <div className="flex justify-end">
                    <Link
                      className="text-sm text-sky-600"
                      href={`/my-reddit/details/${post.data.subreddit}/comments/${post.data.id}`}
                    >
                      View more
                    </Link>
                  </div>
                </div>
              </Card>
            </li>
          ))}
          {nextAfter && (
            <InfiniteViewMoreSubreddit after={nextAfter} accessToken={accessToken} id={id} />
          )}
        </ul>
      </>
    );
  } catch (error) {
    console.error('Error fetching subreddits:', error);
    return <p>Failed to load subreddits.</p>;
  }
}
