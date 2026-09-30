/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',          // fully static site: works on Netlify, Vercel or any host
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
};
