# Timo Marketing website

Static Next.js site (rebuilt from the Anything export — no Anything/Mocha dependencies).

- `npm install` then `npm run dev` to work locally
- `npm run build` outputs a fully static site to `out/`
- Deploys on Vercel (auto-detected) or Netlify (`netlify.toml` included)

Pages live in `src/views/`, routes + SEO titles in `src/app/<route>/page.tsx`.
