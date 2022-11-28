import Head from "next/head";
import About from "../components/About";

export default function AboutPage(): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hi, I'm Mike. I provide custom web development with a focus on modern technologies like React, Next.js, and GraphQL."
        />

        <meta
          property="og:description"
          content="Hi, I'm Mike. I provide custom web development with a focus on modern technologies like React, Next.js, and GraphQL."
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfkgccmba/image/upload/v1669327564/portfolio/portfolio-thumbnail_zw8fcc.png"
        />
      </Head>
      <About />
    </>
  );
}
