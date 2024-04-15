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
        'https://res.cloudinary.com/dqkoxlze0/image/upload/v1690967129/bakery/cheesecake%20Friends/photo_2023-07-01_20-33-56_t1oko7.jpg',
    },
    openGraph: {
      description: SEO.tips.desc,
      title: 'Thats What She Baked | Ось, що вона спекла',
      images:
        'https://res.cloudinary.com/dqkoxlze0/image/upload/v1690967129/bakery/cheesecake%20Friends/photo_2023-07-01_20-33-56_t1oko7.jpg',
    },
  };
}