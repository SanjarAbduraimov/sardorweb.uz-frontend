import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Sora:wght@200;300;400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
