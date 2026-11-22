/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
  env: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID:
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-KYHKWWE8TQ',
  },
}

module.exports = nextConfig
