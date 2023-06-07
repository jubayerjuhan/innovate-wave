/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "wp.devignedge.com",
      "avatars.githubusercontent.com",
      "cdn.sanity.io",
      "upload.wikimedia.org",
    ],
  },
};
