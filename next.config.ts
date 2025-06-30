// next.config.ts
import type { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // your Next.js config options here
   experimental: {
    allowedDevOrigins: ['http://192.168.31.208:3000'], // or whatever port you're using
  },

};

export default withBundleAnalyzer(nextConfig);

