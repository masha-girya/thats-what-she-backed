export { default } from './TipPage';

import { Metadata } from 'next';
import axios from 'axios';
import { endpoint } from '@/utils';

export const dynamic = 'force-dynamic';

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const referer = `${endpoint}/tips/${params.slug}`;

  const { data } = await axios.get(referer);

  return {
    metadataBase: new URL(referer),
    title: data.tip.title,
    description: data.tip.description[0],
    keywords: data.tip.category,
    openGraph: {
      images: [data.tip.mainImage],
      title: data.tip.title,
      description: data.tip.description[0],
    },
    twitter: {
      images: [data.tip.mainImage],
      title: data.tip.title,
      description: data.tip.description[0],
    },
  };
}