import Layout from "../components/layout/Layout";
import Head from "next/head";
import styles from "../styles/globals.css";
import Script from "next/script";
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TNL87P415Y"
        strategy="afterInteractive"
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TNL87P415Y')`}
      </Script>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
