import Layout from "../components/layout/Layout";
import Head from "next/head";
import styles from "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <link rel="shortcut icon" href="/images/favicon.ico.svg" />
      </Head> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
