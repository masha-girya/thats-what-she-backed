import { Suspense } from "react";
import {
  RecipeStep,
  RecipeSticker,
  RecipeHeader,
  RecipeTips,
  ServerErrorPlug,
  BackButton,
  LoadingPage,
} from "@/components";
import { getRecipeBySlug } from "@/lib";
import { IRecipe } from "@/types";
import { ERROR_TEXT } from "@/constants";
import styles from "./index.module.scss";

async function getRecipe(slug: string) {
  try {
    const recipe: { recipe: IRecipe } = await getRecipeBySlug(slug);

    return { res: recipe.recipe };
  } catch (error) {
    console.error(error);
    return { res: null };
  }
}

const RecipePage = async ({ params }: any) => {
  const { res } = await getRecipe(params.slug);

  if (!res) {
    return <ServerErrorPlug text={ERROR_TEXT.recipeInner} />;
  }

  const {
    title,
    slug,
    description,
    mainImage,
    ingredients,
    allIngredients,
    steps,
    bakingTime,
    formSize,
    amount,
    tips,
  } = res;

  const stickerInfo = [
    {
      title: "Час приготування: ",
      info: bakingTime,
    },
    {
      title: "Кількість порцій: ",
      info: amount,
    },
    {
      title: "Розмір форми: ",
      info: formSize,
    },
  ];

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className={styles.recipe}>
        <div className={styles.recipe__recipeBox}>
          <BackButton />
          <RecipeHeader
            slug={slug}
            title={title}
            mainImage={mainImage}
            description={description}
            allIngredients={allIngredients}
          />
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
          <RecipeStep ingredients={ingredients} steps={steps} />
        </div>
      </div>
    </Suspense>
  );
};

export default RecipePage;
