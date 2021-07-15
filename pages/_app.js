import Head from 'next/head';

import '../styles/globals.css';
import Layout from '../components/layout/layout';
import { ContextProvider } from '../store/context';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Head>
          <title>elefant.ro NextJS</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
