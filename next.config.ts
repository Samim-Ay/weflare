import type { NextConfig } from "next";

const repoName = "Weflare";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: isProd ? `${basePath}/` : "",
  // Exposed so raw <img>/<video> tags can prefix /public asset paths themselves —
  // basePath only rewrites next/image and <Link>, not plain HTML src attributes.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
