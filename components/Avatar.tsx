/* eslint-disable @next/next/no-img-element */
import styles from "../styles/AvatarStyles.module.css";

interface Props {
  imageSrc: string;
  hasAnimatedBorder: Boolean;
  altText: string;
}

export default function Avatar({
  imageSrc,
  hasAnimatedBorder,
  altText,
}: Props): JSX.Element {
  return (
    <>
      {hasAnimatedBorder && (
        <div className={styles.imageBackground}>
          <img className={styles.image} src={imageSrc} alt={altText} />
        </div>
      )}
      {!hasAnimatedBorder && (
        <img className={styles.image} src={imageSrc} alt={altText} />
      )}
    </>
  );
}
