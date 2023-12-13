import { RecipeStep } from "@/components/recipe-step";
import { RecipeSticker } from "@/components/recipe-sticker";
import { RecipeHeader } from "@/components/recipe-header";
import { RecipeTips } from "@/components/recipe-tips";
import { getRecipeBySlug } from "@/lib/recipes";
import { IRecipe } from "@/types/recipe.type";
import styles from "./index.module.scss";

async function getRecipe(slug: string) {
  try {
    const recipe: { recipe: IRecipe } = await getRecipeBySlug(slug);

    return { res: recipe.recipe };
  } catch (error) {
    console.error(error);
    return { res: "Error in fetching data" };
  }
}

const RecipePage = async ({ params }: any) => {
  const { res } = await getRecipe(params.slug);

  if (typeof res === "string") {
    return <p>Recipe not found</p>;
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
    <div className={styles.recipe}>
      <div className={styles.recipe__recipeBox}>
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
  );
};

export default RecipePage;
