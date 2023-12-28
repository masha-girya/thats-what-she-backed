import { RecipesListClient } from "./recipe-list-client";
import { ServerErrorPlug } from "../server-error-plug";
import { getAllRecipes } from "@/lib/recipes";
import styles from "./index.module.scss";
import { ANCHORS } from "@/constants";

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

  if(typeof res === "string" || !res) {
    return <ServerErrorPlug text="Упс! Кудись поділись всі рецепти... Вже шукаємо!" />
  }

  return (
    <div id={ANCHORS.recipes} className={styles.recipesList}>
      {Array.isArray(res) && <RecipesListClient recipes={res} />}
    </div>
  );
};
