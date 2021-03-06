import Head from 'next/head';

import '../styles/globals.css';
import Layout from '../components/layout/layout';
import { ContextProvider } from '../store/context';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Head>
          <title>Copie elefant.ro NextJS</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='description'
            content='Website realizat de Manea Lucian George în scop demonstrativ care urmărește crearea unui layout complex în Next.js. Design original și imagini preluate de pe website-ul elefant.ro.'
          />
          <meta name='robots' content='index, follow' />
          <meta property='og:title' content='Copie elefant.ro NextJS' />
          <meta
            property='og:description'
            content='Website realizat de Manea Lucian George în scop demonstrativ care urmărește crearea unui layout complex în Next.js. Design original și imagini preluate de pe website-ul elefant.ro.'
          />
          <meta property='og:site_name' content='Copie elefant.ro NextJS' />
          <meta property='og:type' content='website' />
          <meta property='og:locale' content='ro_RO' />
          <meta property='og:url' content='https://copie-elefant-ro-next-js.vercel.app/' />
          <meta property='og:image' content='/og-image.png' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <meta property='og:image:alt' content='Imagine cu logo-ul elefant.' />
          <meta property='article:publisher' content='https://www.facebook.com/lucianm05/' />
          <meta property='article:section' content='Copie elefant.ro NextJS' />
          <meta property='article:published_time' content='2021-07-19T12:30:51.508Z' />
          <meta property='article:publisher' content='2021-07-19T12:35:51.508Z' />
          <meta name='twitter:site' content='@lucianmg05' />
          <meta name='twitter:creator' content='@lucianmg05' />
          <meta name='twitter:card' content='summary_large_image' />

          <meta name='application-name' content='Copie elefant.ro NextJS' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='apple-mobile-web-app-title' content='Copie elefant.ro NextJS' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-styles' content='default' />
          <meta name='apple-touch-fullscreen' content='yes' />
          <meta name='theme-color' content='#7ed321' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/x-icon' href='/favicon.ico' />
          <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
          <link rel='mask-icon' href='/maskable-favicon.png' color='#7ed321' />
          <link rel='icon' type='image/svg+xml' href='/safari-pinned-tab.svg' />
          <link rel='manifest' href='/manifest.json' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
