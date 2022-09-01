import Image from "next/image";
import Link from "next/link";
import styles from "../styles/FooterStyles.module.css";

export default function Footer(): JSX.Element {
  return (
    <div className={styles.container}>
      <p>Find me @</p>
      <Link href={"https://github.com/MikeKochendorfer"} passHref>
        <a className={styles.socialIcon}>
          <Image
            layout={"responsive"}
            src={"/GitHub-Mark-64px.png"}
            alt={"Michael Kochendorfer's GitHub profile"}
            width={64}
            height={64}
          />
        </a>
      </Link>

      <Link
        href={"https://www.linkedin.com/in/michael-kochendorfer-59a72a71"}
        passHref
      >
        <a className={styles.socialIcon}>
          <Image
            layout={"responsive"}
            src={"/LinkedInLogo.png"}
            alt={"Michael Kochendorfer's LinkedIn profile"}
            width={635}
            height={540}
          />
        </a>
      </Link>
    </div>
  );
}
