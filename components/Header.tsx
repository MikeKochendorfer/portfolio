import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <nav>
      <Link href="/" passHref>
        <a>Home</a>
      </Link>
      <Link href="/about" passHref>
        <a>About Me</a>
      </Link>
      <Link href="/projects" passHref>
        <a>Projects</a>
      </Link>
      <Link href="/contact" passHref>
        <a>Contact</a>
      </Link>
    </nav>
  );
}
