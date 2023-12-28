"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { Logo } from "../logo";
import { FavsRecipesHeader, Nav, Socials } from "@/components";
import styles from "./index.module.scss";

export const HeaderMobile = () => {
  const pathname = usePathname();
  const [isMenuOnShow, setIsMenuOnShow] = useState(false);

  const handleClickMenu = () => {
    setIsMenuOnShow(!isMenuOnShow);
  };

  useEffect(() => {
    setIsMenuOnShow(false);
  }, [pathname]);

  return (
    <div className={styles.headerMobile}>
      <div className={styles.headerMobile__header}>
        <Logo />
        <div className={styles.headerMobile__buttons}>
          <FavsRecipesHeader />
          <button
            type="button"
            className={styles.headerMobile__menuBtn}
            onClick={handleClickMenu}
          >
            SHOW
          </button>
        </div>
      </div>
      <div
        className={classNames(styles.headerMobile__menu, {
          [styles.headerMobile__menu_onShow]: isMenuOnShow,
        })}
      >
        <Nav isMobMenu />
        <Socials isMobMenu />
      </div>
    </div>
  );
};
