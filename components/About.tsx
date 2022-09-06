import Avatar from "./Avatar";
import Link from "next/link";

export default function About(): JSX.Element {
  return (
    <main>
      <h1>About Me</h1>
      <Avatar
        imageSrc="/portfolio-picture.jpg"
        hasAnimatedBorder={false}
        altText="Picture of Michael Kochendorfer"
      />
      <p>
        I was born and raised in the southwestern suburbs of Chicago; the windy
        city, with the best pizza and hotdogs you can find. In my adulthood, I
        moved to Los Angeles to pursue my Master&apos;s Degree and it was there
        that I encountered the love of my life and married.
      </p>
      <br />
      <p>
        My entry into the world of programming was somewhat of a happy mistake.
        My studies were primarily concerned with theoretical, historical,
        philosophical, and abstract ideas; things which I certainly enjoy, but
        which also left me yearning for engagement with more objective,
        practical, or perhaps even mechanical experiences. At that time, to try
        and provide some balance in my life, I started searching for a hobby
        that tended towards a more concrete, either it works or it doesn&apos;t,
        manner of thinking; something that would still be intellectually
        stimulating and enjoyable, but in an entirely different way. So, in 2019
        I picked up coding as a hobby. I had always enjoyed technology and
        coding just seemed...well, cool.
      </p>
      <br />
      <p>
        What was initially just a hobby quickly turned into a career interest.
        Coding fulfills my deep sense of curiosity and desire to always be
        learning. At times, it almost feels like magic, or a having a
        superpower; in others, (when tracking down an elusive bug, for example)
        it is incredibly frustrating and yet, even still, so rewarding; always
        providing me with a challenge to overcome, a problem to be solved.
      </p>
      <br />
      <p>
        I am currently freelancing and finding value in providing quality,
        custom websites for my clients. If you are in need of a website or your
        company is hiring developers, please don&apos;t hesitate to{" "}
        <Link href={"/contact"} passHref>
          <a>get in touch.</a>
        </Link>
      </p>
    </main>
  );
}
