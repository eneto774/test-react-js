import { api } from '@/lib/api';

export default async function PostComments({ accessToken, id, post_id }: any) {
  try {
    const response = await api.get(`/r/${id}/comments/${post_id}/`, {
      params: { limit: 20, sort: 'new' },
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'User-Agent': 'next-14',
      },
    });

    const comments = response?.data[1]?.data?.children;
    // const nextAfter = response.data.data.after;

    return (
      <>
        <h1 className="py-5 text-2xl font-extrabold">Comments</h1>
        {comments?.map((comment: any) => {
          return (
            <div key={comment.data.id}>
              <p>{comment.data.body}</p>
            </div>
          );
        })}
        {/* <ul className="grid grid-cols-2 grid-rows-4 gap-5">
          {subreddits.map((sub: PopularSubreddit) => (
            <li key={sub.data.id} style={{ color: sub.data.primary_color }}>
              <Card className="h-full min-h-[165px] w-full">
                <div className="flex h-full flex-col justify-between gap-1 p-5">
                  <span className="text-base font-bold">
                    {sub.data.display_name} - {sub.data.name} - {sub.data.display_name_prefixed} -{' '}
                    {sub.data.id}
                  </span>
                  <CardDescription className="line-clamp-3">
                    {sub.data.public_description}
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
          {nextAfter && (
            <LoadMorePopularSubreddits
              initialSubreddits={[]}
              after={nextAfter}
              accessToken={accessToken}
            />
          )}
        </ul> */}
      </>
    );
  } catch (error) {
    console.error('Error fetching subreddits:', error);
    return <p>Failed to load subreddits.</p>;
  }
}
