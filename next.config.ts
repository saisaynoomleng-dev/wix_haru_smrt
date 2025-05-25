import type { NextConfig } from 'next';

module.exports = {
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
};

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },
};

export default nextConfig;
