"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";
import { NAV } from "@/constants";
import styles from "./index.module.scss";

interface INav {
  isFooter?: boolean;
  isMobMenu?: boolean;
}

export const Nav = (props: INav) => {
  const pathname = usePathname();
  const { isFooter, isMobMenu } = props;

  return (
    <nav
      className={classNames(styles.nav, {
        [styles.nav_mobMenu]: isMobMenu,
      })}
    >
      <ul
        className={classNames(styles.nav__list, {
          [styles.nav__list_mobMenu]: isMobMenu,
        })}
      >
        {Object.values(NAV).map((item) => (
          <li
            key={item[1]}
            className={classNames(styles.nav__link, {
              [styles.nav__link_footer]: isFooter,
              [styles.nav__link_mobMenu]: isMobMenu,
              [styles.nav__link_active]:
                item[1] === pathname?.slice(1) && !isFooter,
            })}
          >
            <Link href={`/${item[1]}`}>{item[0]}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
