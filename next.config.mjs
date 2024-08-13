/** @type {import('next').NextConfig} */
// const nextConfig = {};


const nextConfig = {
  webpack(config) {
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};

export default nextConfig;
