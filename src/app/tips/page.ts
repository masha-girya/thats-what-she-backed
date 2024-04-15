export { default } from './Tips';

import { Metadata } from 'next';
import { SEO } from '@/constants';
import Favicon from '../../../public/favicon.ico';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://thats-what-she-baked.vercel.app/'),
    alternates: {
      canonical: 'https://thats-what-she-baked.vercel.app/',
    },
    title: 'Thats What She Baked | Ось, що вона спекла',
    description: SEO.tips.desc,
    icons: [{ rel: 'icon', url: Favicon.src }],
    keywords: SEO.tips.keywords,
    twitter: {
      description: SEO.tips.desc,
      title: 'Thats What She Baked | Ось, що вона спекла',
      images:
        'https://res.cloudinary.com/dqkoxlze0/image/upload/v1691335156/bakery/blueberry%20muffins/photo_2023-08-06_18-17-25_meuqfl.jpg',
    },
    openGraph: {
      description: SEO.tips.desc,
      title: 'Thats What She Baked | Ось, що вона спекла',
      images:
        'https://res.cloudinary.com/dqkoxlze0/image/upload/v1691335156/bakery/blueberry%20muffins/photo_2023-08-06_18-17-25_meuqfl.jpg',
    },
  };
}