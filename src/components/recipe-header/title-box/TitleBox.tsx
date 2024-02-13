'use client';

import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { HeartIcon } from '@/components';
import { useAppDispatch, useAppSelector } from '@/store';
import { favoritesAction } from '@/store/slices/favorites.slice';
import { addRecipeToFavs } from '@/lib';
import { BUTTONS_TEXT } from '@/constants';
import styles from './title-box.module.scss';

interface IProps {
  slug: string;
  totalFavs: number;
}

export const TitleBox = (props: IProps) => {
  const { slug, totalFavs } = props;
  const [isInFavs, setIsInFavs] = useState(false);
  const { favoritesSlugs } = useAppSelector((state) => state.favoritesReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsInFavs(
      favoritesSlugs.find((favSlug) => favSlug === slug) !== undefined,
    );
  }, [slug, favoritesSlugs]);

  const setRecipeToFavs = useCallback(() => {
    if (isInFavs) {
      dispatch(favoritesAction.removeFromFavorites(slug));
      addRecipeToFavs(slug, totalFavs - 1 || 0);
    } else {
      dispatch(favoritesAction.addToFavorites(slug));
      addRecipeToFavs(slug, totalFavs + 1 || 0);
    }
  }, [slug, totalFavs, isInFavs]);

  return (
    <div className={styles.favsBox}>
      <button
        type="button"
        name={BUTTONS_TEXT.favsRecipes}
        className={classNames(styles.favsBox__button, {
          [styles.favsBox__button_active]: isInFavs,
        })}
        onClick={setRecipeToFavs}
        aria-label={BUTTONS_TEXT.favsRecipes}
      >
        <HeartIcon />
      </button>

      <p className={styles.favsBox__info}>
        {`В збережених у ${totalFavs ?? 0} користувачів`}
      </p>
    </div>
  );
};
