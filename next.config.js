/** @type {import('next').NextConfig} */
const shared = {
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
};

// On Vercel: normal Next.js build (pages are still pre-rendered as static HTML).
// The Vercel project's Output Directory is set to "out", so build into it.
// Everywhere else (Netlify, local): plain static export into out/.
module.exports = process.env.VERCEL
  ? { ...shared, distDir: 'out' }
  : { ...shared, output: 'export' };
