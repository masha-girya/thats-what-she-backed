import Link from "next/link";
import LogoImg from "../assets/Logo.png";
import styles from "./index.module.scss";

export const Logo = () => {
  return (
    <Link href="/">
      <img
        alt="logo"
        src={LogoImg.src}
        className={styles.logo}
      />
    </Link>
  );
};
