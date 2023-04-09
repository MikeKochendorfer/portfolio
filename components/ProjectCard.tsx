/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../styles/ProjectCardStyles.module.css";

interface Props {
  title: string;
  description: string;
  imgURL: string;
  repo?: string;
  url?: string;
  keyTech: string;
}

export default function ProjectCard({
  title,
  description,
  imgURL,
  keyTech,
  repo,
  url,
}: Props): JSX.Element {
  return (
    <div className={styles.cardWrapper}>
      <img src={imgURL} alt={title} />
      <div className={styles.details}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          <span>Key technologies: </span>
          {keyTech}
        </p>
        <div className={styles.buttonWrapper}>
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer">
              View the live site
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer">
              View the code on GitHub
            </a>
          )}

          {!url && (
            <>
              <Link href="/contact" passHref>
                <a>Contact me for a demo</a>
              </Link>
              <p className={styles.notOnline}>
                *This site is not online, but I would be happy to show a demo
                upon request.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
