import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/toggle-button';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import SessionWrapper from '../components/session-wraper';
import '../styles/globals.css';

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
        <head>
          <link
            href="https://www.redditstatic.com/shreddit/assets/favicon/64x64.png"
            rel="icon shortcut"
            sizes="64x64"
          />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="md:container md:mx-auto">
              <ModeToggle />
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
