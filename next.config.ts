/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bankers.chandigarhsacs.org.in",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },

  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
