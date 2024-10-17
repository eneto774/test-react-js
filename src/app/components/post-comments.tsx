import { PageBreadcrub } from '@/components/breadcrumb';
import { Card } from '@/components/ui/card';
import { api } from '@/lib/api';
import { CommentPost } from '@/types/comment-post';
import Image from 'next/image';

export default async function PostComments({ accessToken, id, post_id }: any) {
  try {
    const response = await api.get(`/r/${id}/comments/${post_id}/`, {
      params: { sort: 'new' },
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'User-Agent': 'next-14',
      },
    });

    const post = response?.data[0]?.data?.children[0].data;
    const comments = response?.data[1]?.data?.children;

    return (
      <>
        <PageBreadcrub
          items={[
            { name: '' },
            { name: 'Popular Subreddits', url: '/' },
            { name: `r/${id}`, url: `/my-reddit/details/${id}` },
            { name: `Post and Comments` },
          ]}
        />
        <h1 className="py-5 text-2xl font-extrabold">{post.title}</h1>
        <div className="flex w-full justify-center">
          <Image src={post.url} width={700} height={1} alt={post.title} />
        </div>
        <h1 className="py-5 text-2xl font-extrabold">🔥 Hot Comments</h1>
        {!comments.length ? (
          <p>No Comments</p>
        ) : (
          comments?.map((comment: CommentPost) => {
            return comment.data.body ? (
              <Card key={comment.data.id} className="my-2 w-full p-2">
                <div>
                  <span className="text-sm">Author: {comment.data.author}</span>
                  <p>{comment.data.body}</p>
                </div>
              </Card>
            ) : null;
          })
        )}
      </>
    );
  } catch (error) {
    console.error('Error fetching subreddits:', error);
    return <p>Failed to load subreddits.</p>;
  }
}
