import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import Router from "next/router";
import "../styles/nprogress.css";
import nprogress from "nprogress";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";

//trigger loading bar on router events
Router.events.on("routeChangeStart", () => nprogress.start());
Router.events.on("routeChangeError", () => nprogress.done());
Router.events.on("routeChangeComplete", () => nprogress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const path = router.pathname.replace("/", "");

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Head>
        <title>
          Michael Kochendorfer | {path.charAt(0).toUpperCase() + path.slice(1)}
        </title>
        <meta name="author" content="Michael Kochendorfer" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content={`Michael Kochendorfer | ${
            path.charAt(0).toUpperCase() + path.slice(1)
          }`}
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
