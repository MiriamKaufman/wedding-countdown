/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/countdown.svg',
        destination: '/api/countdown',
      },
    ];
  },
};

export default nextConfig;
