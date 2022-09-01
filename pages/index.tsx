import type { NextPage } from "next";
import Head from "next/head";
import IntroCard from "../components/IntroCard";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Michael Kochendorfer | Portfolio</title>
      </Head>
      <main className={styles.main}>
        <IntroCard />
      </main>
    </>
  );
};

export default Home;
