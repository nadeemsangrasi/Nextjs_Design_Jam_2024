/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/shipengine/:path*",
        destination: "https://api.shipengine.com/v1/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/api/shipengine/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "API-Key",
            value: process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY || "",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "next-ecommerce-template-4.vercel.app",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
