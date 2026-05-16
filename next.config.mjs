/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/project/:path*",
        destination: "https://mta-ada-alerts.vercel.app/project/:path*", // Proxy to blog app
      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;
