const isProd = process.env.NODE_ENV === "production";
const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  // we want webpack to handle source maps instead.
  productionBrowserSourceMaps: false,
  // 5 minutes
  staticPageGenerationTimeout: 1000 * 60 * 5,
  poweredByHeader: false,
  generateBuildId: async () => {
    return "local16";
  },
  deploymentId: "local16",
  experimental: {
    instrumentationHook: true,
    forceSwcTransforms: true, // seems to provide some speedups in next as well, will revert back to SB only if causing issues
    esmExternals: false,
    externalDir: true,
    // this makes sure we include all files from the monorepo
    outputFileTracingRoot: path.join(__dirname),
    // disables prerender cache spam in logs since we no longer regen to disk
    isrFlushToDisk: false,
  },
  eslint: {
    /**
     *
     * We rely on a dedicated CI step for linting of staged files so we disable
     * the default additional linting of the NextJS build step over the entire
     * `web-next` codebase
     *
     * @see https://nextjs.org/docs/app/api-reference/next-config-js/eslint
     *
     */
    ignoreDuringBuilds: true,
  },
  images: {
    disableStaticImages: true,
    // we're not taking advantage of next/image just yet
    unoptimized: true,
  },
  optimizeFonts: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none';",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    return config;
  },
  output: "standalone",
};

module.exports = nextConfig;
/*
 * comment above and uncomment below whenever you want to analyze bundle size
 * reverse whenever you want to disable
 */
// module.exports = withBundleAnalyzer(nextConfig);
