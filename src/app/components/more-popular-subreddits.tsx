'use client';
import { Card, CardDescription } from '@/components/ui/card';
import { api } from '@/lib/api';
import { PopularSubreddit } from '@/types/popular-subreddits';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

type LoadMorePopularSubreddits = {
  after: string;
};

export default function LoadMorePopularSubreddits({
  initialSubreddits = [],
  after,
  accessToken,
}: any) {
  const [subreddits, setSubreddits] = useState(initialSubreddits);
  const [nextAfter, setNextAfter] = useState(() => after);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef();

  const loadMore = useCallback(async () => {
    if (!nextAfter || isLoading) return;

    setIsLoading(true);
    try {
      const params = new URLSearchParams([
        ['limit', '8'],
        ['after', nextAfter],
      ]);

      const response = await api.get('/subreddits/popular', {
        params,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'User-Agent': 'next-14',
        },
      });

      setSubreddits((prev: any) => [...prev, ...response.data.data.children]);
      setNextAfter(response.data.data.after);
    } finally {
      setIsLoading(false);
    }
  }, [nextAfter, isLoading, accessToken]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log(`Render: ${Math.random()} - ${nextAfter}`);
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
      {subreddits.map((sub: PopularSubreddit) => (
        <li key={sub.data.id} style={{ color: sub.data.primary_color }}>
          <Card className="h-full min-h-[165px] w-full">
            <div className="flex h-full flex-col justify-between gap-1 p-5">
              <span className="text-base font-bold">
                {sub.data.display_name} - {sub.data.name}
              </span>
              <CardDescription className="line-clamp-3">
                {sub.data.public_description}
              </CardDescription>
              <div className="flex justify-end">
                <Link className="text-sm text-sky-600" href="#">
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
