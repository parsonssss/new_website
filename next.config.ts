/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 构建时忽略TypeScript错误
    ignoreBuildErrors: true,
  },
};

export default nextConfig; 
