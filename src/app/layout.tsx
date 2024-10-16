import AuthGuard from '@/components/auth-guard';
import SessionWrapper from '@/components/session-wraper';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import '../styles/globals.css';

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
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="md:container md:mx-auto">
              <AuthGuard>{children}</AuthGuard>
            </main>
          </ThemeProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
