import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Year-End Website Special',
  description: 'Only 5 spots. A professional website, your own .co.za domain and a full year of hosting for R1,500. Bookings close 20 October.',
  alternates: { canonical: '/special/' },
};

import View from '@/views/YearEndSpecial';

export default function Page() {
  return <View />;
}
