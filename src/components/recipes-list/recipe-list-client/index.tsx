"use client";

import { useEffect, useState } from "react";
import { Search } from "@/components/search";
import { RecipeCard } from "@/components/recipe-card";
import styles from "./index.module.scss";

interface IProps {
  recipes: {
    mainImage: string;
    title: string;
    slug: string;
  }[];
}

export const RecipesListClient = (props: IProps) => {
  const { recipes } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const [recipesOnShow, setRecipesOnShow] = useState(recipes);

  useEffect(() => {
    const newRecipes = recipes.filter((recipe) =>
      recipe.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
    setRecipesOnShow(newRecipes);
  }, [searchQuery]);

  return (
    <>
      <div className={styles.recipeListClient__search}>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className={styles.recipeListClient__box}>
        {recipesOnShow.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>
    </>
  );
};
