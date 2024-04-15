export { default } from './BlogInner';

import { Metadata } from 'next';
import axios from 'axios';
import { endpoint } from '@/utils';

export const dynamic = 'force-dynamic';

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const referer = `${endpoint}/blog/${params.slug}`;
  console.log({referer})

  const { data } = await axios.get(referer);

  return {
    metadataBase: new URL(referer),
    title: data.title,
    description: data.capture,
    keywords: data.capture,
    openGraph: {
      images: [data.mainImage],
      title: data.title,
      description: data.capture,
    },
    twitter: {
      images: [data.mainImage],
      title: data.title,
      description: data.capture,
    },
  };
}
