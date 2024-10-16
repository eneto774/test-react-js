/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.redditmedia.com' },
      { protocol: 'https', hostname: '*.redd.it' },
    ],
  },
  env: {
    REDDIT_API_URL: process.env.REDDIT_API_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    REDDIT_CLIENT_ID: process.env.REDDIT_CLIENT_ID,
    REDDIT_CLIENT_SECRET: process.env.REDDIT_CLIENT_SECRET,
    REDDIT_REDIRECT_URI: process.env.REDDIT_REDIRECT_URI,
  },
};

export default nextConfig;
