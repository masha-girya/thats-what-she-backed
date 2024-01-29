import { getRecipeBySlug } from "@/lib";
import { IRecipe } from "@/types";

export const getRecipe = async (slug: string) => {
  try {
    const recipe: { recipe: IRecipe } = await getRecipeBySlug(slug);

    return { res: recipe.recipe };
  } catch (error) {
    console.error(error);
    return { res: null };
  }
}