import Avatar from "./Avatar";
import Button from "./Button";
import styles from "../styles/IntroCardStyles.module.css";
import Router from "next/router";

export default function IntroCard(): JSX.Element {
  return (
    <div className={styles.container}>
      <Avatar
        hasAnimatedBorder
        imageSrc="https://res.cloudinary.com/dfkgccmba/image/upload/v1669317757/portfolio/portfolio-picture_srzyus.jpg"
        altText="Michael Kochendorfer"
      />

      <div className={styles.content}>
        <h1>Hello, World.</h1>
        <p>
          I&apos;m Mike: a Frontend <strong>JavaScript Developer</strong> here
          to help you achieve your goals. Do you need a{" "}
          <strong>custom website</strong> for your business or personal project?
          Are you or your company <strong>hiring developers?</strong> Let&apos;s
          talk.
        </p>
        <div className={styles.callToAction}>
          <Button
            variant={"primary"}
            buttonText={"Contact Me"}
            onClick={() => Router.push('/contact')}
          />
          <Button
            variant={"primary"}
            buttonText={"View Projects"}
            onClick={() => Router.push('/projects')}
          />
        </div>
      </div>
    </div>
  );
}
