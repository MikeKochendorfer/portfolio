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
          Hi, I&apos;m Mike 👋. I provide custom web development with a focus on
          modern technologies like React, Next.js, and GraphQL. I like to keep
          up with the latest trends in technology and consider myself a
          life-long learner. I find value in helping others accomplish their
          goals. I am a listener and an achiever; I would love to hear what you
          are trying to accomplish. If you need a website or your company is
          hiring developers, please don&apos;t hesitate to{" "}
          <Link href={"/contact"} passHref>
            <a>get in touch.</a>
          </Link>{" "}
          If you would like to get to know me a bit more first, keep
          reading...👀
        </p>
        <br />
        <p>
          I grew up in the suburbs of Chicago, moved to Los Angeles to pursue a
          Master&apos;s degree, got married, and have spent the last few years
          in Chihuahua, Mexico with my wife who was born here. I value diversity
          and believe that difference in unity can bring about beautiful,
          useful, and equitable things in our world. I love to have new
          experiences whether it be trying a new restaurant, visiting a new
          city, getting a great music recommendation, or reading/watching an
          exciting, new mind-bending series.
        </p>
        <br />
        <p>
          I&apos;m a bit of a nerd 🖖. I tend to be introspective and
          introverted, but I can also talk for hours about the things I enjoy.
          In my free time, you can find me playing guitar, walking out in
          nature, or playing board games with some good friends.
        </p>
        <br />
        <p>Enough about me...Let&apos;s build something great together 🚀</p>
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
