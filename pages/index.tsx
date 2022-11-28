import type { NextPage } from "next";
import Head from "next/head";
import IntroCard from "../components/IntroCard";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Michael Kochendorfer | Portfolio</title>
        <meta
          name="description"
          content="Let's build something great together. I offer modern web development for your business or personal needs. I specialize in React and Next.js"
        />

        <meta
          property="og:description"
          content="Let's build something great together. I offer modern web development for your business or personal needs. I specialize in React and Next.js"
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfkgccmba/image/upload/v1669327564/portfolio/portfolio-thumbnail_zw8fcc.png"
        />
      </Head>
      <main className={styles.main}>
        <IntroCard />
      </main>
    </>
  );
};

export default Home;
