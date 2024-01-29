'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Search, RecipeCard, RecipesSwiper } from '@/components';
import { IRecipeCard } from '@/types';
import styles from './RecipesListClient.module.scss';

interface IProps {
  recipes: IRecipeCard[];
  isFavRecipes?: boolean;
  isSlider?: boolean;
}

export const RecipesListClient = (props: IProps) => {
  const { recipes, isFavRecipes, isSlider } = props;

  const [searchQuery, setSearchQuery] = useState('');
  const [recipesOnShow, setRecipesOnShow] = useState(recipes);

  useEffect(() => {
    const newRecipes = recipes.filter((recipe) =>
      recipe.title
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase()),
    );

    setRecipesOnShow(newRecipes);
  }, [searchQuery]);

  return (
    <>
      {!isSlider && (
        <div
          className={classNames(styles.recipeListClient__search, {
            [styles.recipeListClient__search_favs]: isFavRecipes,
          })}
        >
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      )}

      <div
        className={classNames(styles.recipeListClient__box, {
          [styles.recipeListClient__box_slider]: isSlider,
        })}
      >
        {!isSlider &&
          recipesOnShow.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}

        {isSlider && (
          <RecipesSwiper recipes={recipes} />
        )}
      </div>
    </>
  );
};
