/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /* If trying out the experimental appDir, comment the i18n config out
   * @see https://github.com/vercel/next.js/issues/41980 */
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = config
