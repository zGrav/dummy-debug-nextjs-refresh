/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    return "local38";
  },
  deploymentId: "local38",
  output: "standalone",
};

module.exports = nextConfig;
