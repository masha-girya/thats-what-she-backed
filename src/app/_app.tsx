import NextApp, { AppContext, AppProps } from 'next/app';
import { Head } from 'next/document';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="Xbh0pnQv-Wm0HLWOOYyPLpctSR9KD-GJtM_26yxyCN0"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
