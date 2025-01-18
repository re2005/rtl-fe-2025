import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'redactie.rtl.nl',
      },
    ],
  },
};

export default nextConfig;
