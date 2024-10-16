'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { Toaster } from 'react-hot-toast';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <>
      <div className="z-[99999]">
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </>
  );
}
