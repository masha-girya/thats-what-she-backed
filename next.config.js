/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // співставлення всіх API-маршрутів
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  images: {
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/res.cloudinary.com/**",
      },
    ],
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  }
};

module.exports = nextConfig;
