/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "ada/:path*",
        destination: "https://mta-ada-alerts.vercel.app/project/:path*", // Proxy to blog app
      },
      {
        source: "watch/:path*",
        destination: "https://watch-later-topaz.vercel.app/project/:path*", // Proxy to blog app
      }
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;
