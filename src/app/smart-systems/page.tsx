import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Business Systems',
  description: 'Automations, portals and custom tools that save South African businesses hours of admin every week.',
  alternates: { canonical: '/smart-systems/' },
};

import View from '@/views/SmartSystems';

export default function Page() {
  return <View />;
}
