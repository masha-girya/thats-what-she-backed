'use client';

import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { HeartIcon } from '@/components';
import { IRecipeCard } from '@/types';
import { getFavRecipes } from '@/utils';
import { LOCAL_STORAGE } from '@/constants';
import styles from './index.module.scss';
import { addRecipeToFavs } from '@/lib';

interface IProps {
  title: string;
  slug: string;
  totalFavs: number;
}

export const TitleBox = (props: IProps) => {
  const { title, slug, totalFavs } = props;
  const [isInFavs, setIsInFavs] = useState(false);

  useEffect(() => {
    const favRecipes: string[] = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE.favRecipes) || '[]',
    );

    setIsInFavs(favRecipes.find((fav) => fav === slug) !== undefined);
  }, [slug]);

  const setRecipeToFavs = useCallback(() => {
    const existedFavRecipes = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE.favRecipes) || '[]',
    );

    const newFavs = getFavRecipes(existedFavRecipes, slug);

    setIsInFavs(
      JSON.parse(newFavs).find(
        (recipe: IRecipeCard) => recipe.title === title,
      ) !== undefined,
    );

    console.log(slug);

    if (isInFavs) {
      addRecipeToFavs(slug, totalFavs - 1 || 0);
    } else {
      addRecipeToFavs(slug, totalFavs + 1 || 0);
    }

    localStorage.setItem(LOCAL_STORAGE.favRecipes, newFavs);
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
