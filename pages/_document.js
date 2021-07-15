import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ro-RO'>
        <Head>
          <meta
            name='description'
            content='Pe elefant.ro gasesti cele mai bune oferte pentru o gama variata de categorii de produse • Avem peste 500.000 de produse in stoc la cele mai mici preturi online • Extra reduceri disponibile in fiecare zi • Livrare rapida in Bucuresti si in tara • Intra pe site!'
          />
          <meta name='robots' content='index, follow' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
