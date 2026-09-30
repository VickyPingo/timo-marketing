import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Selected websites and marketing work by Timo Marketing.',
  alternates: { canonical: '/portfolio/' },
};

import View from '@/views/Portfolio';

export default function Page() {
  return <View />;
}
