import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Broker Claims Portal — Automate Your Insurance Claims' },
  description: 'Automate your insurance claims process with the Broker Claims Portal. Designed for independent brokers to eliminate admin work, streamline client communication, and process claims instantly.',
  alternates: { canonical: '/broker-claims-portal/' },
  openGraph: { title: 'Broker Claims Portal — Automate Your Insurance Claims', description: 'Automate your insurance claims process with the Broker Claims Portal. Designed for independent brokers to eliminate admin work, streamline client communication, and process claims instantly.', url: '/broker-claims-portal/', images: [{ url: 'https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/198bf8fc-4c11-44c6-9068-8b2350f09d53.png', width: 1344, height: 768 }] },
  twitter: { card: 'summary_large_image', title: 'Broker Claims Portal — Automate Your Insurance Claims', description: 'Automate your insurance claims process with the Broker Claims Portal. Designed for independent brokers to eliminate admin work, streamline client communication, and process claims instantly.', images: ['https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/d1d6cea7-ab4e-4e33-b245-890a383c16c1/198bf8fc-4c11-44c6-9068-8b2350f09d53.png'] },
};

import View from '@/views/BrokersBrain';

export default function Page() {
  return <View />;
}
