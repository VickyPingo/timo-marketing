import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './global.css';

const LOGO = 'https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/803dc0f7-c4b6-45cf-aa46-2e2aa3e1d0f8.png';
const DESC = 'Professional web design, monthly website plans, website care, and digital marketing services for South African businesses. Built to perform. Managed to last.';

export const metadata: Metadata = {
  metadataBase: new URL('https://timomarketingedge.com'),
  title: { default: 'Timo Marketing — Digital Growth Partner', template: '%s | Timo Marketing' },
  description: DESC,
  icons: { icon: '/favicon.png', apple: LOGO },
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
