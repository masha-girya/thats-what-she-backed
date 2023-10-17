"use client";

import classNames from "classnames";
import { ISteps } from "@/types/recipe.type";
import { IIngredients } from "@/types/ingredients.type";
import styles from "./index.module.scss";

interface IRecipeStep {
  steps: ISteps;
  ingredients: IIngredients;
}

const RecipeStep = (props: IRecipeStep) => {
  const { steps, ingredients } = props;

  const stepsKeysArr = Object.keys(steps);

  const getLastImages = (stepArr: any[]) =>
    stepArr
      .map((ar) => Object.keys(ar))
      .flat()
      .lastIndexOf("image");

  return (
    <div className={styles.steps}>
      {stepsKeysArr.map((step) => (
        <div key={step}>
          <h2 className={styles.steps__title}>{step}</h2>
          <ul className={styles.steps__ingredients}>
            {ingredients[step].map((li: any) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
          <div>
            {steps[step].map((item: any, i: number) => {
              if (item.text) {
                return (
                  <p key={i} className={styles.steps__text}>
                    {item.text}
                  </p>
                );
              }

              if (item.image) {
                return (
                  <div
                    key={i}
                    className={classNames(styles.steps__imageBox, {
                      [styles.steps__imageBox_last]:
                        step === stepsKeysArr[stepsKeysArr.length - 1] &&
                        i === getLastImages(steps[step]),
                    })}
                  >
                    {item.image.map((img: any) => (
                      <div key={img}>
                        <img
                          className={classNames(styles.steps__image, {
                            [styles.steps__image_last]:
                              step === stepsKeysArr[stepsKeysArr.length - 1] &&
                              i === getLastImages(steps[step]),
                          })}
                          src={img}
                        />
                      </div>
                    ))}
                  </div>
                );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeStep;
