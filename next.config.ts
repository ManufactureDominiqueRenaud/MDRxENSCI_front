import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bold-star-72369aa539.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
