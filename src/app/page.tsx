'use client';
import { Loading } from '@/components/loading';
import { LottieRedditIcon } from '@/components/lottie-reddit-icon';
import { RedditIcon } from '@/components/reddit-icon';
import { ModeToggle } from '@/components/toggle-button';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { signIn, useSession } from 'next-auth/react';
import { redirect, RedirectType } from 'next/navigation';
import { useCallback } from 'react';

export default function Home() {
  const { status } = useSession();
  const handleSignIn = useCallback(() => {
    signIn('reddit', { callbackUrl: '/my-reddit' });
  }, []);

  switch (status) {
    case 'authenticated':
      redirect('/my-reddit', RedirectType.replace);
    case 'loading':
      return <Loading />;
    default:
      break;
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <ModeToggle />
      <Card className="h-[380px] w-[350px]">
        <CardHeader>
          <LottieRedditIcon />
        </CardHeader>
        <CardContent>
          <CardTitle>Welcome to Reddigit application.</CardTitle>
          <CardDescription>For access is necessary sign in using Reddit.</CardDescription>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSignIn} className="flex w-full gap-3 font-medium">
            <RedditIcon size={26} />
            Sign in with Reddit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
