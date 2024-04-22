export { default } from './Blog';

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
    description: SEO.blog.desc,
    icons: [{ rel: 'icon', url: Favicon.src }],
    keywords: SEO.blog.keywords,
    twitter: {
      description: SEO.blog.desc,
      title: 'Thats What She Baked | Ось, що вона спекла',
      images:
        'https://res.cloudinary.com/dqkoxlze0/image/upload/v1708877365/blog/Bali-food/t1jo9maxge5yfmps5sfk.jpg',
    },
    openGraph: {
      description: SEO.blog.desc,
      title: 'Thats What She Baked | Ось, що вона спекла',
      images:
        'https://res.cloudinary.com/dqkoxlze0/image/upload/v1708877365/blog/Bali-food/t1jo9maxge5yfmps5sfk.jpg',
    },
  };
}
