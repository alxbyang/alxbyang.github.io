import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static export
  assetPrefix: process.env.NODE_ENV === 'production' ? '/alxbyang.github.io/' : '', // Set asset prefix
  basePath: process.env.NODE_ENV === 'production' ? '/alxbyang.github.io' : '', // Set base path
};

export default nextConfig;