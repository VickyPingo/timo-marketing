import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
const paths = ['', 'about', 'services', 'web-services', 'monthly-plans', 'peace-of-mind', 'media-marketing', 'portfolio', 'contact', 'special'];
export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `https://timomarketing.co.za/${p ? p + '/' : ''}`, changeFrequency: 'monthly', priority: p ? 0.7 : 1 }));
}
