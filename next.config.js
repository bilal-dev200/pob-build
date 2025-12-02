// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['pob.datainovate.com'], // yaha apna remote domain add karo
//   },
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, 
  images: {
    domains: ['pob.datainovate.com'], // your remote domain
  },
  productionBrowserSourceMaps: false, // disable source maps in production
};

module.exports = nextConfig;
