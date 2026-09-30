import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Monthly Website Plans',
  description: 'Get a professional website on an affordable monthly plan, including hosting, updates and support.',
  alternates: { canonical: '/monthly-plans/' },
};

import View from '@/views/MonthlyPlans';

export default function Page() {
  return <View />;
}
