import Head from "next/head";
import Contact from "../components/Contact";

export default function ContactPage(): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Need a custom website for your business or personal project? Hiring developers? Let's talk."
        />

        <meta
          property="og:description"
          content="Need a custom website for your business or personal project? Hiring developers? Let's talk."
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfkgccmba/image/upload/v1669669690/portfolio/www.mikek.io_contact_ym8fjk.png"
        />
      </Head>
      <Contact />
    </>
  );
}
