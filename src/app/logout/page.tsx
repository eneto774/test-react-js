import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Logout() {
  const session = await getServerSession(authOptions);

  if (session) {
    await fetch(process.env.NEXTAUTH_URL + '/api/auth/signout', { method: 'POST' });

    redirect('/');
  }

  return <p>Você está sendo desconectado...</p>;
}
