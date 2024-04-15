import StoreProvider from '@/components/store-provider';
import { Header, Footer, Container } from '@/components';
import '@/styles/globals.scss';
import Template from './templates';
import Favicon from '../../public/favicon.ico';

import Head from 'next/head';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { ROUTES } from '@/constants';
import { getReplacement } from '@/utils';

// export const metadata: Metadata = {
//   metadataBase: new URL('https://thats-what-she-baked.vercel.app/'),
//   alternates: {
//     canonical: 'https://thats-what-she-baked.vercel.app/',
//   },
//   title: 'Thats What She Baked | Ось, що вона спекла',
//   description: 'Детальні рецепти, щоб надихнутись своїм творінням!',
//   icons: [{ rel: 'icon', url: Favicon.src }],
//   keywords: [
//     'рецепти',
//     'рецепт',
//     'рецепт чізкейку',
//     'чізкейк рецепт',
//     'випічка рецепти',
//     'кекс рецепти',
//   ],
//   twitter: {
//     description: 'Детальні рецепти, щоб надихнутись своїм творінням!',
//     title: 'Thats What She Baked | Ось, що вона спекла',
//     images:
//       'https://res.cloudinary.com/dqkoxlze0/image/upload/v1690967129/bakery/cheesecake%20Friends/photo_2023-07-01_20-33-56_t1oko7.jpg',
//   },
//   openGraph: {
//     description: 'Детальні рецепти, щоб надихнутись своїм творінням!',
//     title: 'Thats What She Baked | Ось, що вона спекла',
//     images:
//       'https://res.cloudinary.com/dqkoxlze0/image/upload/v1690967129/bakery/cheesecake%20Friends/photo_2023-07-01_20-33-56_t1oko7.jpg',
//   },
// };

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({}: // params,
Props): Promise<Metadata> {
  const headersList = headers();
  const referer = headersList.get('referer');

  if (
    !referer ||
    referer.lastIndexOf(ROUTES.recipes) ===
      referer.length - ROUTES.recipes.length ||
    referer.includes(ROUTES.about) ||
    new URL(referer).pathname === ('/' || '')
  ) {
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

  if (
    referer.lastIndexOf(ROUTES.tips) ===
    referer.length - ROUTES.tips.length
  ) {
    console.log('tips');
    return {
      metadataBase: new URL('https://thats-what-she-baked.vercel.app/'),
      alternates: {
        canonical: 'https://thats-what-she-baked.vercel.app/',
      },
      title: 'Thats What She Baked | Ось, що вона спекла',
      description: 'Замітки про випічку, щоб зазирнути ще глибше',
      icons: [{ rel: 'icon', url: Favicon.src }],
      keywords: [
        'рецепти',
        'рецепт',
        'рецепт чізкейку',
        'чізкейк рецепт',
        'випічка рецепти',
        'кекс рецепти',
        'що таке мафіни',
        'мафіни',
        'мафіни рецепт',
        'рецепти українською',
      ],
      twitter: {
        description: 'Замітки про випічку, щоб зазирнути ще глибше',
        title: 'Thats What She Baked | Ось, що вона спекла',
        images:
          'https://res.cloudinary.com/dqkoxlze0/image/upload/v1690967129/bakery/cheesecake%20Friends/photo_2023-07-01_20-33-56_t1oko7.jpg',
      },
      openGraph: {
        description: 'Замітки про випічку, щоб зазирнути ще глибше',
        title: 'Thats What She Baked | Ось, що вона спекла',
        images:
          'https://res.cloudinary.com/dqkoxlze0/image/upload/v1690967129/bakery/cheesecake%20Friends/photo_2023-07-01_20-33-56_t1oko7.jpg',
      },
    };
  }

  if (
    referer.lastIndexOf(ROUTES.blog) ===
    referer.length - ROUTES.blog.length
  ) {
    console.log('blog');
    return {
      metadataBase: new URL('https://thats-what-she-baked.vercel.app/'),
      alternates: {
        canonical: 'https://thats-what-she-baked.vercel.app/',
      },
      title: 'Thats What She Baked | Ось, що вона спекла',
      description: 'Блог про їжу, щоб надихнутись досвідом',
      icons: [{ rel: 'icon', url: Favicon.src }],
      keywords: [
        'рецепти',
        'рецепт',
        'рецепт чізкейку',
        'чізкейк рецепт',
        'випічка рецепти',
        'кекс рецепти',
        'блог про їжу',
        'про рецепти',
        'рецепти українською',
      ],
      twitter: {
        description: 'Блог про їжу, щоб надихнутись досвідом',
        title: 'Thats What She Baked | Ось, що вона спекла',
        images:
          'https://res.cloudinary.com/dqkoxlze0/image/upload/v1690967129/bakery/cheesecake%20Friends/photo_2023-07-01_20-33-56_t1oko7.jpg',
      },
      openGraph: {
        description: 'Блог про їжу, щоб надихнутись досвідом',
        title: 'Thats What She Baked | Ось, що вона спекла',
        images:
          'https://res.cloudinary.com/dqkoxlze0/image/upload/v1690967129/bakery/cheesecake%20Friends/photo_2023-07-01_20-33-56_t1oko7.jpg',
      },
    };
  }

  const replacement = getReplacement(referer);

  const link = referer.replace(`/${replacement}`, `/api/${replacement}`);

  const data = await fetch(link).then((res) => {
    return res.json();
  });

  return {
    metadataBase: new URL(link),
    title: data[replacement.replace('s', '')].title,
    description: data[replacement.replace('s', '')].description[0],
    keywords: data[replacement.replace('s', '')].category,
    openGraph: {
      images: [data[replacement.replace('s', '')].mainImage],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang="uk">
      <Head>
        <meta
          name="google-site-verification"
          content="Xbh0pnQv-Wm0HLWOOYyPLpctSR9KD-GJtM_26yxyCN0"
        />
      </Head>
      <body>
        <StoreProvider>
          <Header />
          <Template>
            <Container>{children}</Container>
          </Template>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
