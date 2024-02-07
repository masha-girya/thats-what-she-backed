import type { Metadata } from 'next';
import StoreProvider from '@/components/store-provider';
import { Header, Footer, Container } from '@/components';
import Favicon from '/public/favicon.ico';
import '@/styles/globals.scss';

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <StoreProvider>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
