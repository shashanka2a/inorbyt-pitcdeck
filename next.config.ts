import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Allow production builds to complete even if TypeScript errors exist
    ignoreBuildErrors: false,
  },
  // Optimize images
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
};

export default nextConfig;
