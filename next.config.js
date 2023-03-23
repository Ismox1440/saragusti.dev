/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "cdn.discordapp.com",
      "i.scdn.co",
      "media.discordapp.net",
    ],
  },
};

module.exports = nextConfig;
