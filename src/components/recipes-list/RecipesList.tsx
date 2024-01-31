import classNames from 'classnames';
import { RecipesListClient } from './recipe-list-client';
import { ServerErrorPlug } from '@/components';
import { getAllRecipes } from '@/lib';
import { ANCHORS, ERROR_TEXT } from '@/constants';
import styles from './recipes-list.module.scss';

interface IProps {
  isBlock?: boolean;
  isSlider?: boolean;
}

async function getRecipes() {
  try {
    const recipes = await getAllRecipes();

    return { res: recipes };
  } catch (error) {
    console.error(error);
    return { res: null };
  }
}

export const RecipesList = async ({ isBlock, isSlider }: IProps) => {
  const { res } = await getRecipes();

  if (!res) {
    return <ServerErrorPlug text={ERROR_TEXT.recipeInner} />;
  }

  return (
    <div
      id={ANCHORS.recipes}
      className={classNames(styles.recipesList, {
        [styles.recipesList_isBlock]: isBlock,
      })}
    >
      {isSlider && <p className={styles.recipesList__text}>Інші рецепти:</p>}
      {Array.isArray(res) && (
        <RecipesListClient isSlider={isSlider} recipes={res} />
      )}
    </div>
  );
};
