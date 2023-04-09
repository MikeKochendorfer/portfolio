import Head from "next/head";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/ProjectsPage.module.css";

export default function ProjectsPage(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Head>
        <meta
          name="description"
          content="Sample work and client projects built by Michael Kochendorfer."
        />

        <meta
          property="og:description"
          content="Sample work and client projects built by Michael Kochendorfer."
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfkgccmba/image/upload/v1669327564/portfolio/portfolio-thumbnail_zw8fcc.png"
        />
      </Head>
      <h1>Projects</h1>
      <div className={styles.grid}>
        <ProjectCard
          title={"Lucky Shrub"}
          description={
            "A responsive landing page for a fictional landscaping company."
          }
          imgURL={
            "https://res.cloudinary.com/dfkgccmba/image/upload/v1669317789/portfolio/lucky-shrub_ddwaev.png"
          }
          keyTech={"HTML, CSS"}
          repo={"https://github.com/MikeKochendorfer/lucky-shrub"}
          url={"https://mikekochendorfer.github.io/lucky-shrub/"}
        />
        <ProjectCard
          title={"QR Code Generator"}
          description={
            "A simple tool for generating a QR code which can be downloaded and used."
          }
          imgURL={
            "https://res.cloudinary.com/dfkgccmba/image/upload/v1671057014/portfolio/qr-code-generator_wm4ve2.png"
          }
          keyTech={"TypeScript, Next.js"}
          repo={"https://github.com/MikeKochendorfer/qr-code-generator"}
          url={"qr-code-generator-mike-k.vercel.app"}
        />
        <ProjectCard
          title={"Wine Pairing App"}
          description={
            "A single page application for finding a good style of wine to pair with the food of your choosing."
          }
          imgURL={
            "https://res.cloudinary.com/dfkgccmba/image/upload/v1669317853/portfolio/wine-pairing_fyfbq2.png"
          }
          keyTech={"Next.js, Serverless functions, Third-Party API"}
          repo={"https://github.com/MikeKochendorfer/wine-pairing-app"}
          url={"https://wine-pairing-app-qga9.vercel.app/"}
        />
        <ProjectCard
          title={"Ver.De.Amor"}
          description={
            "A full-stack Ecommerce site with an administrative CMS for product and shipping management."
          }
          imgURL={
            "https://res.cloudinary.com/dfkgccmba/image/upload/v1669317802/portfolio/verdeamor_cmgwhd.png"
          }
          keyTech={"Next.js, GraphQL, Keystone.js, Stripe, PostgreSQL"}
        />
        <ProjectCard
          title={"SICK FITS"}
          description={
            "A fully featured Ecommerce site with user authentication, product management, pagination, and much more."
          }
          imgURL={
            "https://res.cloudinary.com/dfkgccmba/image/upload/v1669317813/portfolio/sickfits_p4zdah.png"
          }
          keyTech={
            "Next.js, Apollo GraphQL, Styled Components, Jest, Node.js, TypeScript, MongoDB"
          }
        />
      </div>
    </div>
  );
}
