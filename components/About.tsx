import Avatar from "./Avatar";
import Link from "next/link";
import styles from "../styles/AboutStyles.module.css";
import Button from "./Button";
import Router from "next/router";

export default function About(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1>About Me</h1>
      <Avatar
        imageSrc="https://res.cloudinary.com/dfkgccmba/image/upload/v1669317766/portfolio/about-me_q2drhb.jpg"
        hasAnimatedBorder={false}
        altText="Picture of Michael Kochendorfer"
      />
      <div className={styles.textContent}>
        <p>
          Hi, I&apos;m Mike 👋, a front-end developer with a passion for modern
          technologies like React, Next.js, and GraphQL. I&apos;m dedicated to
          creating custom websites that meet the unique needs of businesses and
          individuals. With over three years of coding experience and a passion
          for web development, I&apos;m eager to apply my skills and knowledge
          to create websites that exceed client expectations.
        </p>
        <br />
        <p>
          As a life-long learner, I'm committed to staying up-to-date with the
          latest trends and tools in web development. I pride myself on my
          ability to listen to clients&apos; needs, understand their goals, and
          create customized solutions that deliver results.
        </p>
        <br />
        <p>
          If you&apos;re looking for a developer who is passionate, dedicated, and
          willing to work closely with you to bring your vision to life, I'm
          here to help. Let&apos;s discuss your project and see how I can support you
          in achieving your objectives.
        </p>
        <br />
        <Button
          variant={"primary"}
          buttonText={"Contact Me"}
          onClick={() => Router.push("/contact")}
        />
      </div>
    </main>
  );
}
