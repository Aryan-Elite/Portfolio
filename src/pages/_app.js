import Theme from '../styles/theme';
import Head from 'next/head'
import '../styles/space-grotesk.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aryan Gupta - Software Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
