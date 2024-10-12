'use client';
import { Loading } from '@/components/loading';
import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';
import { redirect, RedirectType } from 'next/navigation';

export default function MyReddit() {
  const { data: session, status } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  };

  switch (status) {
    case 'unauthenticated':
      redirect('/', RedirectType.replace);
    case 'loading':
      return <Loading />;
    default:
      break;
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <p className="text-cyan-400">Welcome {session?.user?.name}. Signed In As</p>
        <p>{session?.user?.email}</p>
        <Button type="button" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
    </div>
  );
}
