'use client';
import { Card } from '@/components/ui/card';
import { api } from '@/lib/api';
import { PostSubreddit } from '@/types/posts-subreddit';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function InfiniteViewMoreSubreddit({ after, accessToken, id }: any) {
  const [posts, setPosts] = useState([] as any);
  const [nextAfter, setNextAfter] = useState(after);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef();

  const loadMore = useCallback(async () => {
    if (!nextAfter || isLoading) return;

    setIsLoading(true);
    try {
      const params = new URLSearchParams([
        ['limit', '9'],
        ['after', nextAfter],
      ]);
      const response = await api.get(`/r/${id}/new`, {
        params,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'User-Agent': 'next-14',
        },
      });

      setPosts((prev: any) => [...prev, ...response.data.data.children]);
      setNextAfter(response.data.data.after);
    } finally {
      setIsLoading(false);
    }
  }, [nextAfter, isLoading, accessToken]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1.0 },
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [loadMore, nextAfter, isLoading]);

  return (
    <>
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
      <div ref={observerRef as any}>
        {isLoading ? <p>Loading...</p> : <p>Scroll to load more...</p>}
      </div>
    </>
  );
}
