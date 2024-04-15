export { default } from './AboutMe';

import { Metadata } from 'next';
import { SEO } from '@/constants';
import Favicon from '../../../public/favicon.ico';
import seoImage from './assets/IMG_5264.jpg';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://thats-what-she-baked.vercel.app/'),
    alternates: {
      canonical: 'https://thats-what-she-baked.vercel.app/',
    },
    title: 'Thats What She Baked | Ось, що вона спекла',
    description: SEO.blog.desc,
    icons: [{ rel: 'icon', url: Favicon.src }],
    keywords: SEO.recipes.keywords,
    twitter: {
      description: SEO.recipes.desc,
      title: 'Thats What She Baked | Ось, що вона спекла',
      images: [seoImage.src],
    },
    openGraph: {
      description: SEO.recipes.desc,
      title: 'Thats What She Baked | Ось, що вона спекла',
      images: [seoImage.src],
    },
  };
}
