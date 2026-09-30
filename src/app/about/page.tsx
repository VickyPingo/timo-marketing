import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Vicky and the Philotimo approach behind Timo Marketing — honest, data-driven digital marketing for South African businesses.',
  alternates: { canonical: '/about/' },
};

import View from '@/views/About';

export default function Page() {
  return <View />;
}
