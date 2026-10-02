import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for deployment on static hosts (Cloudflare Pages).
  // NOTE: the boilerplate /api hello route was removed to allow static export.
  output: "export",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
