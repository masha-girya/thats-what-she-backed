"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { SearchIcon } from "../icons/SearchIcon";
import { Nav } from "../nav";
import LogoImg from "./assets/1.png";
import styles from "./index.module.scss";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__grid}>
          <Link href="/">
            <img alt="logo" src={LogoImg.src} className={styles.header__logo} />
          </Link>
          <Nav />
          <div className={styles.search}>
            <div className={styles.search__icon}>
              <SearchIcon />
            </div>
            <input
              type="text"
              className={styles.search__input}
              //   placeholder="Search recipe"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
