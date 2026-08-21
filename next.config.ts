import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@sanity/sdk-react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
