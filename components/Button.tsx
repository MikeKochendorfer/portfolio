import { MouseEventHandler } from "react";
import styles from "../styles/ButtonStyles.module.css";

interface Props {
  buttonText: String;
  onClick: MouseEventHandler;
  variant: String;
}

export default function Button({
  buttonText,
  onClick,
  variant,
}: Props): JSX.Element {
  return (
    <>
      {variant === "primary" && (
        <button className={styles.primary} onClick={onClick}>
          {buttonText}
        </button>
      )}
      {variant === "secondary" && (
        <button className={styles.secondary} onClick={onClick}>
          {buttonText}
        </button>
      )}
    </>
  );
}
