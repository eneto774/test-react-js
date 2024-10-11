import type { Metadata } from 'next';
import localFont from 'next/font/local';
import SessionWrapper from '../components/session-wraper';
import './globals.css';

const geistSans = localFont({
  src: '../assets/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../assets/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Reddigit',
  description: 'Welcome to Redigit.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950`}
        >
          <main className="md:container md:mx-auto">{children}</main>
        </body>
      </html>
    </SessionWrapper>
  );
}
