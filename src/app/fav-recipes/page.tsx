"use client";

import { useEffect, useState } from "react";
import { RecipesListClient } from "@/components/recipes-list/recipe-list-client";
import { LOCAL_STORAGE } from "@/constants";
import { IRecipeCard } from "@/types/recipe.type";
import styles from "./index.module.scss";

const FavRecipes = () => {
  const [favRecipes, setFavRecipes] = useState<IRecipeCard[]>([]);

  useEffect(() => {
    const favRecipesData = localStorage.getItem(LOCAL_STORAGE.favRecipes);

    if (favRecipesData) {
      setFavRecipes(JSON.parse(favRecipesData));
    }
  }, []);

  return (
    <div className={styles.favRecipes}>
      <h1 className={styles.favRecipes__title}>
        Улюблені рецепти
      </h1>
      {favRecipes.length > 0 && (
        <RecipesListClient recipes={favRecipes} isFavRecipes />
      )}
    </div>
  );
};

export default FavRecipes;
