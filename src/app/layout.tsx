import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './global.css';

const LOGO = '/images/timo-marketing-logo.png';
const DESC = 'Professional web design, monthly website plans, website care, and digital marketing services for South African businesses. Built to perform. Managed to last.';

export const metadata: Metadata = {
  metadataBase: new URL('https://timomarketingedge.com'),
  title: { default: 'Timo Marketing — Digital Growth Partner', template: '%s | Timo Marketing' },
  description: DESC,
  icons: { icon: '/favicon.png', apple: '/images/timo-marketing-logo.png' },
  openGraph: {
    title: 'Timo Marketing — Digital Growth Partner',
    description: DESC,
    images: [{ url: LOGO, width: 1200, height: 630, alt: 'Timo Marketing' }],
    type: 'website',
    siteName: 'Timo Marketing',
    locale: 'en_ZA',
  },
  twitter: { card: 'summary_large_image', title: 'Timo Marketing — Digital Growth Partner', description: DESC, images: [LOGO] },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-ZA">
      <body>{children}</body>
    </html>
  );
}
