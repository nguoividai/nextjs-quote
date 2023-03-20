/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_HOST: "http://127.0.0.1:8000",
  },
};

module.exports = nextConfig;
