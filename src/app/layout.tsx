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
