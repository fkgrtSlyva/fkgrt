import type { NextConfig } from 'next'

const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const basePath = configuredBasePath
  ? `/${configuredBasePath.replace(/^\/+|\/+$/g, '')}`
  : ''

const nextConfig: NextConfig = {
  // Preview builds live below /test-new; the eventual production build can
  // return to the domain root by leaving NEXT_PUBLIC_BASE_PATH empty.
  basePath,
  assetPrefix: basePath || '',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.tina.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'fkgrt.knu.ua',
        port: '',
      },
    ],
  },
}

export default nextConfig
