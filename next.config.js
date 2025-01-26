/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add optimization configurations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Optimize images
  images: {
    domains: ['your-domain.com'], // Add your image domains here
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

module.exports = nextConfig 