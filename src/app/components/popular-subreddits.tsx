import { Card, CardDescription } from '@/components/ui/card';
import { api } from '@/lib/api';
import { PopularSubreddit } from '@/types/popular-subreddits';
import Link from 'next/link';
import InfinitePopularSubreddits from './infinite-popular-subreddits';

export default async function PopularSubreddits({ accessToken, after = '' }: any) {
  try {
    const params = new URLSearchParams([
      ['limit', '8'],
      ['after', after],
    ]);
    const response = await api.get('/subreddits/popular', {
      params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'User-Agent': 'next-14',
      },
    });

    const subreddits = response.data.data.children;
    const nextAfter = response.data.data.after;

    return (
      <>
        <h1 className="py-5 text-2xl font-extrabold">Popular Subreddits</h1>
        <ul className="grid grid-cols-2 grid-rows-4 gap-5">
          {subreddits.map((sub: PopularSubreddit) => (
            <li key={sub.data.id}>
              <Card className="h-full min-h-[165px] w-full">
                <div className="flex h-full flex-col justify-between gap-1 p-5">
                  <span className="text-base font-bold" style={{ color: sub.data.primary_color }}>
                    {sub.data.display_name}
                  </span>
                  <CardDescription className="line-clamp-3">
                    {sub.data.public_description || 'No Description'}
                  </CardDescription>
                  <div className="flex justify-end">
                    <Link
                      className="text-sm text-sky-600"
                      href={`/my-reddit/details/${sub.data.display_name}`}
                    >
                      View more
                    </Link>
                  </div>
                </div>
              </Card>
            </li>
          ))}
          {nextAfter && <InfinitePopularSubreddits after={nextAfter} accessToken={accessToken} />}
        </ul>
      </>
    );
  } catch (error) {
    console.error('Error fetching subreddits:', error);
    return <p>Failed to load subreddits.</p>;
  }
}
