import Image from 'next/image';
import { ContentConstructor, IngredientsList } from '@/components';
import { IRecipeStep } from '@/types';
import { IMAGE_ALT_TEXT } from '@/constants';
import styles from './recipe-step.module.scss';

interface IProps {
  recipeSteps: IRecipeStep[];
  lastImage: string;
}

export const RecipeStep = (props: IProps) => {
  const { recipeSteps, lastImage } = props;

  return (
    <div className={styles.steps}>
      {recipeSteps.map((step) => (
        <div key={step.title} id={step.title} className={styles.steps__step}>
          <h2 className={styles.steps__title}>{step.title}</h2>
          <IngredientsList ingredients={step.ingredients} />
          <ContentConstructor body={step.steps} stepName={step.title} />
        </div>
      ))}
      {lastImage && (
        <Image
          src={lastImage}
          alt={IMAGE_ALT_TEXT.lastRecipeImage}
          width={500}
          height={500}
          className={styles.steps__lastImage}
        />
      )}
    </div>
  );
};
