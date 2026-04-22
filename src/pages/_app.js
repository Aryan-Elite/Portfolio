import Theme from '../styles/theme';
import Head from 'next/head'
import '../styles/space-grotesk.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aryan Gupta - Software Developer</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
