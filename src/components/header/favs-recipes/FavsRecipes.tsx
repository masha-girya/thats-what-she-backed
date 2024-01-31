'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { HeartIcon } from '@/components';
import { useAppSelector } from '@/store';
import { LINKS_TITLE, ROUTES } from '@/constants';
import styles from './favs-recipes.module.scss';

export const FavsRecipes = () => {
  const { favoritesSlugs } = useAppSelector((state) => state.favoritesReducer);

  return (
    <Link
      href={`/${ROUTES.favRecipes}`}
      title={LINKS_TITLE.favRecipes}
      className={styles.favsHeader}
    >
      {favoritesSlugs.length > 0 && (
        <div className={styles.favsHeader__amount}>{favoritesSlugs.length}</div>
      )}
      <HeartIcon
        className={classNames(styles.favsHeader__icon, {
          [styles.favsHeader__icon_full]: favoritesSlugs.length > 0,
        })}
      />
    </Link>
  );
};
