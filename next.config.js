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
};

module.exports = nextConfig;
