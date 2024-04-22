export { default } from './FavRecipes';

import { Metadata } from 'next';
import { SEO, META_GLOBAL } from '@/constants';
import Favicon from '../../../public/favicon.ico';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...META_GLOBAL,
    metadataBase: new URL('https://thats-what-she-baked.vercel.app/'),
    alternates: {
      canonical: 'https://thats-what-she-baked.vercel.app/',
    },
    title: 'Thats What She Baked | Ось, що вона спекла',
    description: SEO.recipes.desc,
    icons: [{ rel: 'icon', url: Favicon.src }],
    keywords: SEO.recipes.keywords,
    twitter: {
      description: SEO.recipes.desc,
      title: 'Thats What She Baked | Ось, що вона спекла',
      images:
        'https://res.cloudinary.com/dqkoxlze0/image/upload/v1690967129/bakery/cheesecake%20Friends/photo_2023-07-01_20-33-56_t1oko7.jpg',
    },
    openGraph: {
      description: SEO.recipes.desc,
      title: 'Thats What She Baked | Ось, що вона спекла',
      images:
        'https://res.cloudinary.com/dqkoxlze0/image/upload/v1690967129/bakery/cheesecake%20Friends/photo_2023-07-01_20-33-56_t1oko7.jpg',
    },
  };
}