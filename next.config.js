/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig
