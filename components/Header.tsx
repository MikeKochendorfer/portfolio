import Link from "next/link";
import { useEffect, useRef } from "react";
import useWindowSize from "../lib/useWindowSize";
import styles from "../styles/HeaderStyles.module.css";

export default function Header(): JSX.Element {
  const { screenWidth, screenHeight } = useWindowSize();
  const navRef = useRef<HTMLElement>(null);

  console.log(screenWidth, screenHeight);

  useEffect(() => {
    if (navRef.current && screenWidth <= 550) {
      navRef.current.style.display = "none";
    } else if (navRef.current && screenWidth > 550) {
      navRef.current.style.display = "flex";
    }
  }, [screenWidth]);

  function handleToggleMenu() {
    if (navRef.current && screenWidth <= 550) {
      navRef.current.style.display === "none"
        ? (navRef.current.style.display = "flex")
        : (navRef.current.style.display = "none");
    }
  }

  return (
    <div className={styles.container}>
      <nav ref={navRef} className={styles.nav}>
        <Link href="/" passHref>
          <a className={styles.navLink} onClick={handleToggleMenu}>
            Home
          </a>
        </Link>
        <Link href="/about" passHref>
          <a className={styles.navLink} onClick={handleToggleMenu}>
            About Me
          </a>
        </Link>
        <Link href="/projects" passHref>
          <a className={styles.navLink} onClick={handleToggleMenu}>
            Projects
          </a>
        </Link>
        <Link href="/contact" passHref>
          <a className={styles.navLink} onClick={handleToggleMenu}>
            Contact
          </a>
        </Link>
        <button className={styles.closeButton} onClick={handleToggleMenu}>
          X
        </button>
      </nav>

      <div className={styles.hamburger} onClick={handleToggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}
