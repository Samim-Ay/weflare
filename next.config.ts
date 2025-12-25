import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    async headers() {
    return [
      {
        source: "/assets/:all*",
        headers: [
          { key: "Cache-Control", value: "no-store" }
        ]
      }
    ];
  },
};

export default nextConfig;
