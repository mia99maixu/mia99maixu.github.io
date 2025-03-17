/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Remove basePath and assetPrefix for local testing
  images: {
    unoptimized: true,
  },
};

export default nextConfig;