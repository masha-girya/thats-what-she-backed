"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { HeartIcon } from "../icons";
import { LINKS_TITLE, LOCAL_STORAGE, ROUTES } from "@/constants";
import styles from "./index.module.scss";

export const FavsRecipesHeader = () => {
  const [favRecipes, setFavRecipes] = useState<string[]>([]);

  useEffect(() => {
    setFavRecipes(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE.favRecipes) || "[]")
    );
  }, []);

  return (
    <Link
      href={`/${ROUTES.favRecipes}`}
      title={LINKS_TITLE.favRecipes}
      className={classNames(styles.favsHeader)}
    >
      {favRecipes.length > 0 && (
        <div className={styles.favsHeader__amount}>{favRecipes.length}</div>
      )}
      <HeartIcon
        className={classNames(styles.favsHeader__icon, {
          [styles.favsHeader__icon_full]: favRecipes.length > 0,
        })}
      />
    </Link>
  );
};
