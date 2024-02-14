/** @type {import('next').NextConfig} */
const nextConfig = {
  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: `/${process.env.CONTENTFUL_SPACE_ID}/**`,
      },
      {
        protocol: "https",
        hostname: "downloads.ctfassets.net",
        port: "",
        pathname: `/${process.env.CONTENTFUL_SPACE_ID}/**`,
      },
      {
        protocol: "https",
        hostname: "s3-us01.didiglobal.com",
        port: "",
        pathname: `**`,
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
