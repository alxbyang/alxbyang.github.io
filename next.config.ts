import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static export
  assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '', // Set asset prefix
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '', // Set base path
};

export default nextConfig;