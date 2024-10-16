'use client';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Loading } from './loading';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const guestRoutes: string[] = ['/'];
    const isGuestRoute = !!guestRoutes.find((route) => route === pathname);
    setLoading(true);

    if (status === 'loading') {
      return;
    } else if (status === 'authenticated' && isGuestRoute) {
      router.push('/my-reddit');
    } else if (status === 'unauthenticated' && !isGuestRoute) {
      router.push('/');
    } else {
      setLoading(false);
    }
  }, [pathname, status, router]);

  return loading ? <Loading /> : children;
}
