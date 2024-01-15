import { ITipsRecipe } from "@/types/recipe.type";
import { RecipeSticker } from "../recipe-sticker";
import { RECIPES_PAGE_TEXT } from "@/constants";
import styles from "./index.module.scss";

interface IProps {
  tips: ITipsRecipe;
}

export const RecipeTips = (props: IProps) => {
  const { tips } = props;

  return (
    <div className={styles.recipeTips}>
      <RecipeSticker>
        <h2 className={styles.recipeTips__title}>{RECIPES_PAGE_TEXT.tips}</h2>
        {Object.keys(tips).map((tip, i) => (
          <div key={i} className={styles.recipeTips__info}>
            <h3 className={styles.recipeTips__info__title}>{tip}</h3>
            <p className={styles.recipeTips__info__text}>{tips[tip]}</p>
          </div>
        ))}
      </RecipeSticker>
    </div>
  );
};
