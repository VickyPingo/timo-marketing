import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design & Development',
  description: 'Professional, fast, mobile-first websites for South African businesses — built to perform and managed to last.',
  alternates: { canonical: '/web-services/' },
};

import View from '@/views/WebServices';

export default function Page() {
  return <View />;
}
