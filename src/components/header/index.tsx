import Link from "next/link";
import { Nav } from "../nav";
import { FavsRecipesHeader } from "../favs-recipes-header";
import LogoImg from "./assets/1.png";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__grid}>
          <Link href="/">
            <img alt="logo" src={LogoImg.src} className={styles.header__logo} />
          </Link>
          <Nav />
          <FavsRecipesHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
