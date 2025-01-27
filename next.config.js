const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  staticPageGenerationTimeout: 1000 * 60 * 5,
  poweredByHeader: false,
  generateBuildId: async () => {
    return "local31";
  },
  deploymentId: "local31",
  experimental: {
    instrumentationHook: true,
    forceSwcTransforms: true,
    esmExternals: false,
    externalDir: true,
    outputFileTracingRoot: path.join(__dirname),
    isrFlushToDisk: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    disableStaticImages: true,
    unoptimized: true,
  },
  optimizeFonts: true,
  output: "standalone",
};

module.exports = nextConfig;
