// mark as client component
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
// importing necessary functions
import { signIn, signOut, useSession } from 'next-auth/react';
import Lottie from 'react-lottie';
import reditAnimation from '../assets/lotties/redit-robot-logo.json';
import { RedditIcon } from '../components/reddit-icon';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="bg-zinc-950 dark:bg-white">
        <p>Welcome {session.user?.name}. Signed In As</p>
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

  // rendering components for not logged in users
  return (
    <div className="bg-zinc-950 h-screen flex items-center justify-center">
      <Card className="bg-zinc-950 w-[350px] h-[420px] text-foreground">
        <CardHeader>
          <Lottie options={defaultLottieOptions} height={200} width={200} />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-zinc-300">
            Welcome to application.
          </CardTitle>
          <CardDescription>
            For access is necessary sign in using Reddit.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => signIn('reddit')}
            className="flex gap-3 font-medium w-full"
          >
            <RedditIcon size={20} />
            Sign in with Reddit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
