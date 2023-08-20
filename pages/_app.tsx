import NextApp, { AppContext, AppProps } from "next/app";
import './globals.scss';
import RootLayout from "./layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;