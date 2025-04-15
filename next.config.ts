import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // For GitHub Pages, set the base path to your repository name:
  basePath: '/breakhaus',
  images: {
    unoptimized: true,
  },
};


export default nextConfig;
