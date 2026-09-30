import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Timo Marketing for web design, website care and digital marketing.',
  alternates: { canonical: '/contact/' },
};

import View from '@/views/Contact';

export default function Page() {
  return <View />;
}
