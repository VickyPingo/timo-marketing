import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media & Digital Marketing',
  description: 'Social media management, Meta ads and Google Ads that bring real enquiries, not vanity metrics.',
  alternates: { canonical: '/media-marketing/' },
};

import View from '@/views/MediaMarketing';

export default function Page() {
  return <View />;
}
