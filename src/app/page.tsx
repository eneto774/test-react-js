'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { signIn, signOut, useSession } from 'next-auth/react';
import Lottie from 'react-lottie';
import reditAnimation from '../assets/lotties/redit-robot-logo.json';
import { RedditIcon } from '../components/reddit-icon';

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <div>
        <p className="text-cyan-400">Welcome {session.user?.name}. Signed In As</p>
        <p>{session.user?.email}</p>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  }

  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: reditAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="h-[420px] w-[350px]">
        <CardHeader>
          <Lottie options={defaultLottieOptions} height={200} width={200} />
        </CardHeader>
        <CardContent>
          <CardTitle>Welcome to Reddigit application.</CardTitle>
          <CardDescription>For access is necessary sign in using Reddit.</CardDescription>
        </CardContent>
        <CardFooter>
          <Button onClick={() => signIn('reddit')} className="flex w-full gap-3 font-medium">
            <RedditIcon size={20} />
            Sign in with Reddit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
