import { getRecipeBySlug } from "@/lib";

export const getRecipe = async (slugs: string[]) => {
  try {
    const [ recipes ] = await Promise.all(slugs.map(slug => (
      getRecipeBySlug(slug)
    )))

    return { res: recipes.recipe };
  } catch (error) {
    console.error(error);
    return { res: null };
  }
}