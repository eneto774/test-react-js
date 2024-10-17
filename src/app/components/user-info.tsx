import LogoutButton from '@/components/logout-button';
import { api } from '@/lib/api';

type UserInfoProps = { accessToken: string };

export async function UserInfo({ accessToken }: UserInfoProps) {
  const { data: user } = await api.get('/api/v1/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'User-Agent': 'next-14',
    },
  });

  return (
    <div className="flex items-center justify-end gap-5 px-5 py-2">
      <p>{user.name}</p>
      <LogoutButton />
    </div>
  );
}
