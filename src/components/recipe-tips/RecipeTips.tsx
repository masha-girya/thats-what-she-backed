import { RecipeSticker } from '../recipe-sticker';
import { ITipsRecipe } from '@/types';
import { linkCutter } from '@/utils';
import { RECIPES_PAGE_TEXT } from '@/constants';
import styles from './recipe-tips.module.scss';

interface IProps {
  tips: ITipsRecipe[];
}

export const RecipeTips = (props: IProps) => {
  const { tips } = props;

  return (
    <div className={styles.recipeTips}>
      <RecipeSticker>
        <h2 className={styles.recipeTips__title}>{RECIPES_PAGE_TEXT.tips}</h2>

        {tips.map((tip: ITipsRecipe, i) => (
          <div key={i} className={styles.recipeTips__info}>
            <h3 className={styles.recipeTips__info__title}>{tip.title}</h3>
            {linkCutter(tip.text, [styles.recipeTips__info__text], true)}
          </div>
        ))}
      </RecipeSticker>
    </div>
  );
};
