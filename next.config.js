/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cafe.cafes-pfaff.com", "localhost"],
  },
};

module.exports = nextConfig;
