/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    turbo: false, // disable Turbopack
  },
  reactCompiler: true,
};

export default nextConfig;
