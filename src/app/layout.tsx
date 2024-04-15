import Head from 'next/head';
import Template from './templates';
import StoreProvider from '@/components/store-provider';
import { Header, Footer, Container } from '@/components';
import '@/styles/globals.scss';

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
