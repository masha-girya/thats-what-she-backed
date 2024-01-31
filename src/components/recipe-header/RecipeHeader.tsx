import Image from 'next/image';
import { IngredientsList, RecipeSticker } from '@/components';
import { TitleBox } from './title-box';
import { IRecipe } from '@/types';
import { RECIPES_PAGE_TEXT } from '@/constants';
import styles from './RecipeHeader.module.scss';

interface IProps {
  recipe: IRecipe;
}

export const RecipeHeader = ({ recipe }: IProps) => {
  const { title, description, mainImage, allIngredients, totalFavs } =
    recipe;

  return (
    <div className={styles.recipeHeader}>
      <div className={styles.recipeHeader__intro}>
        <TitleBox recipe={recipe} />

        <p className={styles.recipeHeader__favsInfo}>
          {`В збережених у ${totalFavs ?? 0} користувачів`}
        </p>

        <p className={styles.recipeHeader__descFirst}>{description[0]}</p>

        <Image
          src={mainImage || ''}
          alt={title || ''}
          width={100}
          height={600}
          priority={true}
          layout="responsive"
          className={styles.recipeHeader__mainImage}
        />

        <div className={styles.recipeHeader__rightCol}>
          {description.slice(1).map((item: any) => (
            <p key={item.slice(0, 10)}>{item}</p>
          ))}
        </div>
      </div>

      <div className={styles.recipeHeader__ingredientsBox}>
        <RecipeSticker>
          <h2 className={styles.recipeHeader__ingredientsBox__title}>
            {RECIPES_PAGE_TEXT.allIngredientsBox}
          </h2>
          <div>
            <IngredientsList ingredients={allIngredients} />
          </div>
        </RecipeSticker>
      </div>
    </div>
  );
};
