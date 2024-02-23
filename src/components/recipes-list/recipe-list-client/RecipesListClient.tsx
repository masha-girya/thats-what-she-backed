'use client';

import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import classNames from 'classnames';
import { Search, RecipeCard, RecipesSwiper } from '@/components';
import { IRecipeCard } from '@/types';
import { useDebounce } from '@/hooks';
import { PLACEHOLDERS_TEXT } from '@/constants';
import styles from './recipe-list-client.module.scss';

interface IProps {
  recipes: IRecipeCard[];
  isFavRecipes?: boolean;
  isSlider?: boolean;
}

export const RecipesListClient = (props: IProps) => {
  const { recipes, isFavRecipes, isSlider } = props;
  const { slug } = useParams();

  const [searchQuery, setSearchQuery] = useState('');
  const [recipesOnShow, setRecipesOnShow] = useState(recipes);

  const { debouncedValue } = useDebounce(searchQuery, 500);

  const handleSubmit = useCallback(() => {
    const newRecipes = recipes.filter((recipe) =>
      recipe.title
        .toLocaleLowerCase()
        .includes(debouncedValue.toLocaleLowerCase()),
    );

    setRecipesOnShow(newRecipes);
  }, [debouncedValue, recipes]);

  useEffect(() => {
    if (debouncedValue.length === 0) {
      setRecipesOnShow(recipes);
    } else {
      handleSubmit();
    }
  }, [debouncedValue, recipes]);

  return (
    <>
      {!isSlider && (
        <div
          className={classNames(styles.recipeListClient__search, {
            [styles.recipeListClient__search_favs]: isFavRecipes,
          })}
        >
          <Search
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSubmit={handleSubmit}
            placeholder={PLACEHOLDERS_TEXT.searchRecipe}
          />
        </div>
      )}

      <div
        className={classNames(styles.recipeListClient__box, {
          [styles.recipeListClient__box_slider]: isSlider,
        })}
      >
        {isSlider ? (
          <RecipesSwiper
            recipes={recipes.filter((recipe) => recipe.slug !== slug)}
          />
        ) : (
          recipesOnShow.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))
        )}
      </div>
    </>
  );
};
