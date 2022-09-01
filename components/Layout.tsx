import { ReactNode } from "react";
import Header from "./Header";
import styles from "../styles/LayoutStyles.module.css";

interface LayoutProps {
  children: ReactNode;
}

// This is a higher order component to wrap around the App() component providing the header & footer for each page on the site
export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <Header />
        {children}
      </div>
    </>
  );
}
