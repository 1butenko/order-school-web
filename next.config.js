/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedOrigins: [
      { protocol: 'http', hostname: 'localhost', port: '3000' },
      { protocol: 'http', hostname: '192.168.56.1', port: '3000' },
    ],
  },
}

module.exports = nextConfig