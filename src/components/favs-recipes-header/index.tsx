"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { HeartIcon } from "../icons/HeartIcon";
import { LOCAL_STORAGE, ROUTES } from "@/constants";
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
      className={classNames(styles.favsHeader, {
        [styles.favsHeader_active]: favRecipes.length > 0,
      })}
    >
      {favRecipes.length > 0 && (
        <div className={styles.favsHeader__amount}>{favRecipes.length}</div>
      )}
      <HeartIcon />
    </Link>
  );
};
