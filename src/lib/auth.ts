import { NextAuthOptions } from 'next-auth';
import RedditProvider from 'next-auth/providers/reddit';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  callbacks: {},
  providers: [
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
      authorization: {
        params: {
          duration: 'permanent',
          scope:
            'identity, edit, flair, history, modconfig, modflair, modlog, modposts, modwiki, mysubreddits, privatemessages, read, report, save, submit, subscribe, vote, wikiedit, wikiread',
        },
      },
    }),
  ],
};
