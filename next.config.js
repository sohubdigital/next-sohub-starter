/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  transpilePackages: ["geist"],
  experimental: {},
};

module.exports = nextConfig;
