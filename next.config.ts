import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/parsons-homework',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/parsons-homework',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
