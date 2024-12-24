import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.imgur.com'],
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/3HZ2EzAKfG',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;