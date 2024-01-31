'use client';

import { useEffect, useState } from 'react';
import { RecipesListClient } from '@/components/recipes-list/recipe-list-client';
import { FAVS_PAGE_TEXT, LOCAL_STORAGE } from '@/constants';
import { IRecipeCard } from '@/types';
import { getFavRecipes } from './fav-recipes.fetch';
import styles from './FavRecipes.module.scss';

const FavRecipes = () => {
  const [favRecipes, setFavRecipes] = useState<IRecipeCard[]>([]);

  useEffect(() => {
    const favRecipesData = localStorage.getItem(LOCAL_STORAGE.favRecipes);

    const getFavRecipesData = async (favRecipesIds: string[]) => {
      try {
        const data = await getFavRecipes(favRecipesIds);

        if (data.res) {
          setFavRecipes(data.res);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (favRecipesData) {
      getFavRecipesData(JSON.parse(favRecipesData));
    }
  }, []);

  return (
    <div className={styles.favRecipes}>
      <h1 className={styles.favRecipes__title}>{FAVS_PAGE_TEXT.title}</h1>
      {favRecipes.length > 0 && (
        <RecipesListClient recipes={favRecipes} isFavRecipes />
      )}
    </div>
  );
};

export default FavRecipes;
