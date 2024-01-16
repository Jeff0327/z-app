/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Enable filesystem caching for the client build
      config.cache = {
        type: "filesystem",
      };
    }

    return config;
  },
};

module.exports = nextConfig;
