/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Rewrites are removed because we use full API URL in fetch
};

export default nextConfig;
