'use client';
import { ExitIcon } from '@radix-ui/react-icons';
import { signOut } from 'next-auth/react';
import { Button } from './ui/button';

export default function LogoutButton() {
  return (
    <Button onClick={() => signOut()} variant="outline">
      <ExitIcon className="h-4 w-4 text-red-500" />
    </Button>
  );
}
