/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/project/:path*",
        destination:[ "https://mta-ada-alerts.vercel.app/project/:path*", "watch-later-topaz.vercel.app"] 
        // Proxy to blog app
      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;
