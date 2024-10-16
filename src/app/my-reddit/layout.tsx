import { UserInfo } from '@/app/components/user-info';
import { LottieRedditIcon } from '@/components/lottie-reddit-icon';
import { ModeToggle } from '@/components/toggle-button';
import { Separator } from '@/components/ui/separator';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function MyRedditLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }

  return (
    <section className="h-screen">
      <header className="flex items-center justify-center px-5">
        <LottieRedditIcon width={50} height={50} />
        <ModeToggle classNamesContainer="relative" />
      </header>
      <Separator />
      <div>
        <UserInfo accessToken={session.accessToken as string} />
      </div>
      {children}
    </section>
  );
}
