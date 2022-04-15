import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import script from "next/script";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <script
          id="lazyOnload_smartlook"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.replainSettings = { id: 'e41b20c6-31f4-45a0-a584-6d4200e39287' };
          (function(u)
           {var s=document.createElement('script');
           s.async=true;s.src=u;
             var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
           })
            ('https://widget.replain.cc/dist/client.js');`,
          }}
        ></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
