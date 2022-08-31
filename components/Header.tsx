import Link from "next/link";
import styles from "../styles/HeaderStyles.module.css";

export default function Header(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <Link href="/" passHref>
        <a className={styles.navLink}>Home</a>
      </Link>
      <Link href="/about" passHref>
        <a className={styles.navLink}>About Me</a>
      </Link>
      <Link href="/projects" passHref>
        <a className={styles.navLink}>Projects</a>
      </Link>
      <Link href="/contact" passHref>
        <a className={styles.navLink}>Contact</a>
      </Link>
    </nav>
  );
}
