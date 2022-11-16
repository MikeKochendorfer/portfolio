import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const path = router.pathname.replace("/", "");

  return (
    <Layout>
      <Head>
        <title>Michael Kochendorfer | {path.charAt(0).toUpperCase() + path.slice(1)}</title>
        <meta name="author" content="Michael Kochendorfer" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
