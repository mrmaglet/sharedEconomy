/** @type {import('next').NextConfig} */

/**
 * Config only needed for GitHub Pages deployment.
 * Will not work with local development `npm run dev`.
 */
const buildGitHubPagesConfig = () => {
  const isBuilding = env.NODE_ENV === "production"

  if (!isBuilding) return {}

  return {
    distDir: "docs",
    assetPrefix: "/sharedEconomy/",
    basePath: "/sharedEconomy",
    output: "export",
  }
}

const nextConfig = {
  images: { unoptimized: true },
  ...buildGitHubPagesConfig,
}

export default nextConfig
