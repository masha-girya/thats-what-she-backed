'use client';

import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { HeartIcon } from '@/components';
import { IRecipe } from '@/types';
import { useAppDispatch, useAppSelector } from '@/store';
import { favoritesAction } from '@/store/slices/favorites.slice';
import { addRecipeToFavs } from '@/lib';
import styles from './TitleBox.module.scss';

interface IProps {
  recipe: IRecipe;
}

export const TitleBox = ({ recipe }: IProps) => {
  const { title, slug, totalFavs } = recipe;
  const [isInFavs, setIsInFavs] = useState(false);
  const { favoritesSlugs } = useAppSelector(state => state.favoritesReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsInFavs(favoritesSlugs.find((favSlug) => favSlug === slug) !== undefined);
  }, [slug, favoritesSlugs]);

  const setRecipeToFavs = useCallback(() => {
    if(isInFavs) {
      dispatch(favoritesAction.removeFromFavorites(slug));
      addRecipeToFavs(slug, totalFavs - 1 || 0);
    } else {
      dispatch(favoritesAction.addToFavorites(slug));
      addRecipeToFavs(slug, totalFavs + 1 || 0);
    }
  }, [slug, totalFavs, isInFavs]);

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
