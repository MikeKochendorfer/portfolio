import ProjectCard from "../components/ProjectCard";
import styles from "../styles/ProjectsPage.module.css";

export default function ProjectsPage(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h1>Projects</h1>
      <ProjectCard
        title={"Lucky Shrub"}
        description={
          "A responsive landing page for a fictional landscaping company."
        }
        imgURL={"./lucky-shrub/lucky-shrub.png"}
        keyTech={"HTML, CSS"}
        repo={"https://github.com/MikeKochendorfer/lucky-shrub"}
        url={"https://mikekochendorfer.github.io/lucky-shrub/"}
      />
      <ProjectCard
        title={"Ver.De.Amor"}
        description={
          "A full-stack Ecommerce site with an administrative CMS for product and shipping management."
        }
        imgURL={"./verdeamor/verdeamor.png"}
        keyTech={"Next.js, GraphQL, Keystone.js, Stripe, PostgreSQL"}
      />
      <ProjectCard
        title={"Wine Pairing App"}
        description={
          "A single page application for finding a good style of wine to pair with the food of your choosing."
        }
        imgURL={"wine-pairing.png"}
        keyTech={"Next.js, Serverless functions, Third-Party API"}
        repo={"https://github.com/MikeKochendorfer/wine-pairing-app"}
      />
      <ProjectCard
        title={"SICK FITS"}
        description={
          "A fully featured Ecommerce site with user authentication, product management, pagination, and much more."
        }
        imgURL={"./sick-fits/sickfits.png"}
        keyTech={
          "Next.js, Apollo GraphQL, Styled Components, Jest, Node.js, TypeScript"
        }
      />
    </div>
  );
}
