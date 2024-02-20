import Image from 'next/image';
import { useMemo } from 'react';
import { ContentConstructor, IngredientsList } from '@/components';
import { IIngredients, ISteps } from '@/types';
import { IMAGE_ALT_TEXT } from '@/constants';
import styles from './recipe-step.module.scss';

interface IRecipeStep {
  steps: ISteps;
  ingredients: IIngredients;
  lastImage: string;
}

export const RecipeStep = (props: IRecipeStep) => {
  const { steps, ingredients, lastImage } = props;

  const stepsKeysArr = useMemo(() => Object.keys(steps), [steps]);

  return (
    <div className={styles.steps}>
      {stepsKeysArr.map((step) => (
        <div key={step} id={step} className={styles.steps__step}>
          <h2 className={styles.steps__title}>{step}</h2>
          <IngredientsList ingredients={ingredients[step]} />
          <ContentConstructor body={steps[step]} stepName={step} />
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
