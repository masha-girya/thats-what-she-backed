import { getAllRecipes } from "@/lib";

export const getFavRecipes = async (slugs: string[]) => {
  try {
    const recipes = await getAllRecipes(slugs);

    return { res: recipes };
  } catch (error) {
    console.error(error);
    return { res: null };
  }
}