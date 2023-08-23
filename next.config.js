/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "roar.media",
      },
    ],
  },
  distDir: "build",
  headers: [
    {
      key: "X-Frame-Options",
      value: "DENY",
    },
  ],
};

module.exports = nextConfig;
