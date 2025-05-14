/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
