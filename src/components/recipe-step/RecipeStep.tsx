import { IngredientsList } from '@/components';
import { ImageContent } from './image-content';
import { IIngredients, ISteps } from '@/types';
import { getLastImages } from '@/utils';
import styles from './recipe-step.module.scss';

interface IRecipeStep {
  steps: ISteps;
  ingredients: IIngredients;
}

export const RecipeStep = (props: IRecipeStep) => {
  const { steps, ingredients } = props;

  const stepsKeysArr = Object.keys(steps);

  const getContent = (item: any, index: number, step: any) => {
    switch (true) {
      case 'text' in item:
        return (
          <p key={index} className={styles.steps__text}>
            {item.text}
          </p>
        );
      case 'image' in item:
        const isLastImage =
          step === stepsKeysArr[stepsKeysArr.length - 1] &&
          index === getLastImages(steps[step]);

        return (
          <ImageContent
            key={index}
            isLastImage={isLastImage}
            imageContent={item.image}
            stepName={step}
          />
        );
    }
  };

  return (
    <div className={styles.steps}>
      {stepsKeysArr.map((step) => (
        <div key={step}>
          <h2 className={styles.steps__title}>{step}</h2>
          <IngredientsList ingredients={ingredients[step]} />
          <div>
            {steps[step].map((item: any, i: number) =>
              getContent(item, i, step),
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
