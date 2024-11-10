/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  
  webpack: (config) => {
    // Add @ alias to point to the src directory
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  
  // Other configurations remain the same
  swcMinify: true,
  output: 'standalone',
};

module.exports = nextConfig;
