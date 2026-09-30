import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Care Plans',
  description: 'Website maintenance, security, backups and updates so you never have to worry about your site again.',
  alternates: { canonical: '/peace-of-mind/' },
};

import View from '@/views/PeaceOfMind';

export default function Page() {
  return <View />;
}
