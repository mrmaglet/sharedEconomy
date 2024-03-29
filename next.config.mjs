/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  distDir: "docs",
  output: "export",
  assetPrefix: "/sharedEconomy/",
  basePath: "/sharedEconomy",
}

export default nextConfig
