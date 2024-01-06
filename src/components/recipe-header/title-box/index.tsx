"use client";

import { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { HeartIcon } from "@/components";
import { IRecipeCard } from "@/types/recipe.type";
import { getFavRecipes } from "@/utils";
import { LOCAL_STORAGE } from "@/constants";
import styles from "./index.module.scss";

interface IProps {
  title: string;
  slug: string;
  mainImage: string;
}

export const TitleBox = (props: IProps) => {
  const { title, slug, mainImage } = props;
  const [isInFavs, setIsInFavs] = useState(false);
  useEffect(() => {
    const favRecipes: IRecipeCard[] = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE.favRecipes) || "[]"
    );

    setIsInFavs(favRecipes.find((fav) => fav.title === title) !== undefined);
  }, []);

  const setRecipeToFavs = useCallback(() => {
    const existedFavRecipes = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE.favRecipes) || "[]"
    );

    const newFavs = getFavRecipes(existedFavRecipes, {
      title,
      slug,
      mainImage,
    });

    setIsInFavs(
      JSON.parse(newFavs).find(
        (recipe: IRecipeCard) => recipe.title === title
      ) !== undefined
    );

    localStorage.setItem(LOCAL_STORAGE.favRecipes, newFavs);

    window.location.reload();
  }, []);

  return (
    <div className={styles.titleBox}>
      <h1 className={styles.titleBox__title}>{title}</h1>
      <div
        className={classNames(styles.titleBox__favs, {
          [styles.titleBox__favs_active]: isInFavs,
        })}
        onClick={setRecipeToFavs}
      >
        <HeartIcon />
      </div>
    </div>
  );
};
