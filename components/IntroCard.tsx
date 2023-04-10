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
        <h1>Custom Websites for Businesses and Individuals</h1>
        <p>Need a high-performance <strong>custom website</strong> for your business or personal project? As an experienced frontend <strong>JavaScript</strong> and <strong>React</strong> developer, I can create responsive and user-friendly websites that drive results. Let&apos;s turn your ideas into reality.</p>
        <div className={styles.callToAction}>
          <Button
            variant={"primary"}
            buttonText={"Contact Me"}
            onClick={() => Router.push('/contact')}
          />
          <Button
            variant={"primary"}
            buttonText={"View My Projects"}
            onClick={() => Router.push('/projects')}
          />
        </div>
      </div>
    </div>
  );
}
