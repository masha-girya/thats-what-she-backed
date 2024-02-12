import { Suspense } from 'react';
import {
  RecipeStep,
  RecipeSticker,
  RecipeHeader,
  RecipeTips,
  ServerErrorPlug,
  BackButton,
  LoadingPage,
  RecipesList,
} from '@/components';
import { getRecipe } from './recipe.fetch';
import { ERROR_TEXT } from '@/constants';
import styles from './recipe-page.module.scss';

const RecipePage = async ({ params }: any) => {
  const { recipe } = await getRecipe(params.slug);

  if (!recipe) {
    return <ServerErrorPlug text={ERROR_TEXT.recipeInner} />;
  }

  const { ingredients, steps, bakingTime, formSize, amount, tips, lastImage } =
    recipe;

  const stickerInfo = [
    {
      title: 'Час приготування: ',
      info: bakingTime,
    },
    {
      title: 'Кількість порцій: ',
      info: amount,
    },
    {
      title: 'Розмір форми: ',
      info: formSize,
    },
  ];

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className={styles.recipe}>
        <div className={styles.recipe__recipeBox}>
          <BackButton />

          <RecipeHeader recipe={recipe} />

          <RecipeTips tips={tips} />

          <RecipeSticker>
            {stickerInfo.map((info) => (
              <p key={info.title} className={styles.recipe__stickerInfo}>
                <span className={styles.recipe__stickerInfo__title}>
                  {info.title}
                </span>
                {info.info}
              </p>
            ))}
          </RecipeSticker>

          <RecipeStep
            ingredients={ingredients}
            steps={steps}
            lastImage={lastImage}
          />
        </div>

        <RecipesList isBlock isSlider />
      </div>
    </Suspense>
  );
};

export default RecipePage;
