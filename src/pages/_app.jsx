import Layout from "../components/layout/Layout";
import Head from "next/head";
import "../styles/globals.css";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";

import * as ga from "../components/lib/google-analytics";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    // C1: Declare function which passes clicked page url to GA4 "event" config function
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    // C2: Subscribe to the change event when component mounts
    router.events.on("routeChangeComplete", handleRouteChange);
    // C3: Unsubscribe from change event on unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
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
