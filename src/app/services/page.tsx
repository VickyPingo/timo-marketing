import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Web design, website care, social media, Google Ads and smart business systems from Timo Marketing.',
  alternates: { canonical: '/services/' },
};

import View from '@/views/Services';

export default function Page() {
  return <View />;
}
