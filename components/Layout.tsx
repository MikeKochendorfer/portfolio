import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

// This is a higher order component to wrap around the App() component providing the header & footer for each page on the site
export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
