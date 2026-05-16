/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [

      {
        source: "projects/:path*",
        destination: "https://watch-later-topaz.vercel.app/project/:path*", // Proxy to blog app
      }
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;
