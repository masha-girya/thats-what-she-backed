import { ROUTES } from '@/constants';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import Favicon from '../../../../public/favicon.ico';

export { default } from './RecipePage';

export const dynamic = 'force-dynamic';

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({}: // params,
Props): Promise<Metadata> {
  const headersList = headers();
  const referer = headersList.get('referer');

  if (!referer) {
    console.log('recipes');
    return {
      metadataBase: new URL('https://thats-what-she-baked.vercel.app/'),
      alternates: {
        canonical: 'https://thats-what-she-baked.vercel.app/',
      },
      title: 'Thats What She Baked | Ось, що вона спекла',
      description: 'Детальні рецепти, щоб надихнутись своїм творінням!',
      icons: [{ rel: 'icon', url: Favicon.src }],
      keywords: [
        'рецепти',
        'рецепт',
        'рецепт чізкейку',
        'чізкейк рецепт',
        'випічка рецепти',
        'кекс рецепти',
        'рецепти українською',
      ],
      twitter: {
        description: 'Детальні рецепти, щоб надихнутись своїм творінням!',
        title: 'Thats What She Baked | Ось, що вона спекла',
        images:
          'https://res.cloudinary.com/dqkoxlze0/image/upload/v1690967129/bakery/cheesecake%20Friends/photo_2023-07-01_20-33-56_t1oko7.jpg',
      },
      openGraph: {
        description: 'Детальні рецепти, щоб надихнутись своїм творінням!',
        title: 'Thats What She Baked | Ось, що вона спекла',
        images:
          'https://res.cloudinary.com/dqkoxlze0/image/upload/v1690967129/bakery/cheesecake%20Friends/photo_2023-07-01_20-33-56_t1oko7.jpg',
      },
    };
  }

  const link = referer.replace(
    `/${ROUTES.recipes}/`,
    `/api/${ROUTES.recipes}/`,
  );
  console.log({ link });

  const data = await fetch(link).then((res) => {
    return res.json();
  });

  return {
    metadataBase: new URL(link),
    title: data[ROUTES.recipes.replace('s', '')].title,
    description: data[ROUTES.recipes.replace('s', '')].description[0],
    keywords: data[ROUTES.recipes.replace('s', '')].category,
    openGraph: {
      images: [data[ROUTES.recipes.replace('s', '')].mainImage],
      title: data[ROUTES.recipes.replace('s', '')].title,
      description: data[ROUTES.recipes.replace('s', '')].description[0],
    },
    twitter: {
      images: [data[ROUTES.recipes.replace('s', '')].mainImage],
      title: data[ROUTES.recipes.replace('s', '')].title,
      description: data[ROUTES.recipes.replace('s', '')].description[0],
    },
  };
}
