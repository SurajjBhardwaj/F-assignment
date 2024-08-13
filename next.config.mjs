/** @type {import('next').NextConfig} */
// const nextConfig = {};


const nextConfig = {
  webpack(config) {
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
  images: {
    domains: [
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "https://static.vecteezy.com",
    ],
  },
};

export default nextConfig;
