import Image from 'next/image';
import { IngredientsList, RecipeSticker } from '@/components';
import { TitleBox } from './title-box';
import { RECIPES_PAGE_TEXT } from '@/constants';
import styles from './index.module.scss';

interface IProps {
  title: string;
  description: string[];
  mainImage: string;
  allIngredients: string[];
  slug: string;
  totalFavs: number;
}

export const RecipeHeader = (props: IProps) => {
  const { title, description, mainImage, allIngredients, slug, totalFavs } =
    props;

  return (
    <div className={styles.recipeHeader}>
      <div className={styles.recipeHeader__intro}>
        <TitleBox title={title} slug={slug} totalFavs={totalFavs} />

        <p className={styles.recipeHeader__favsInfo}>
          {`В збережених у ${totalFavs ?? 0} користувачів`}
        </p>

        <p className={styles.recipeHeader__descFirst}>{description[0]}</p>

        <Image
          src={mainImage || ''}
          alt={title || ''}
          width={100}
          height={600}
          className={styles.recipeHeader__mainImage}
          priority={true}
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
