import NextAuth from 'next-auth';
import { authOptions } from '../../../../lib/auth';

const handler = NextAuth(authOptions);
const { signOut } = handler;

export { handler as GET, handler as POST, signOut };
