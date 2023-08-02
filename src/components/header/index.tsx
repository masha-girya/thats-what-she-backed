"use client";

import { SearchIcon } from "../icons/SearchIcon";
import styles from "./index.module.scss";
import LogoImg from "./assets/1.png";
import Link from "next/link";
import { useMemo } from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const nav = useMemo(() => {
    return {
      home: ["Головна", "home"],
      recipes: ["Рецепти", "recipes"],
      blog: ["Блог", "blog"],
      "about-me": ["Про мене", "about-me"],
    };
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__grid}>
          <img alt="logo" src={LogoImg.src} className={styles.header__logo} />
          <nav className={styles.header__nav}>
            <ul>
              {Object.values(nav).map((item) => (
                <li
                  key={item[1]}
                  className={classNames(styles.header__navLink, {
                    [styles.header__navLink_active]:
                      item[1] === pathname?.slice(1),
                  })}
                >
                  <Link href={`/${item[1]}`}>{item[0]}</Link>
                </li>
              ))}
            </ul>
          </nav>
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
    </div>
  );
};

export default Header;
