import { RecipesListClient } from "./recipe-list-client";
import { getAllRecipes } from "@/lib/recipes";
import styles from "./index.module.scss";

async function getRecipes() {
  try {
    const recipes = await getAllRecipes();
    return { res: recipes };
  } catch (error) {
    console.error(error);
    return { res: "Error in fetching data" };
  }
}

export const RecipesList = async () => {
  const { res } = await getRecipes();

  return (
    <div className={styles.recipesList}>
      {Array.isArray(res) && <RecipesListClient recipes={res} />}
    </div>
  );
};
