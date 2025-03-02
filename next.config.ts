import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tekpzijxcpujrulsvtci.supabase.co",
      },
    ],
  },
};

export default nextConfig;
