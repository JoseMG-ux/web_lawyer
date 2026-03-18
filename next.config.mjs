/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/web_lawyer',
  assetPrefix: '/web_lawyer/',
  images: {
    unoptimized: true, // requerido para export estático
  },
};

export default nextConfig;
