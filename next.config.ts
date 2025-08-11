import type { NextConfig } from "next";

module.exports = {
  optimizeFonts: false,
};

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lightingcss"],
  },
};

export default nextConfig;
