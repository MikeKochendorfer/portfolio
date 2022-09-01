import Avatar from "./Avatar";
import Button from "./Button";
import styles from "../styles/IntroCardStyles.module.css";

export default function IntroCard(): JSX.Element {
  return (
    <div className={styles.container}>
      <Avatar
        hasAnimatedBorder
        imageSrc="/portfolio-picture.jpg"
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
            buttonText={"I need a website"}
            onClick={() => console.log("client wants a website")}
          />
          <Button
            variant={"primary"}
            buttonText={"I'm looking to hire"}
            onClick={() => console.log("client is hiring")}
          />
        </div>
      </div>
    </div>
  );
}
