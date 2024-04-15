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

  const { data } = await axios.get(referer);

  return {
    metadataBase: new URL(referer),
    title: data.article.title,
    description: data.article.capture,
    keywords: data.article.capture,
    openGraph: {
      images: [data.article.mainImage],
      title: data.article.title,
      description: data.article.capture,
    },
    twitter: {
      images: [data.article.mainImage],
      title: data.article.title,
      description: data.article.capture,
    },
  };
}
