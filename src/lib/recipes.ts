import { ROUTES } from "@/constants";
import { IRecipe } from "@/types/recipe.type";
import { endpoint } from "@/utils/endpoint";

export async function getAllRecipes() {
  try {
    const data = await fetch(`${endpoint}/${ROUTES.recipes}`);
    const parsedData: { recipes: IRecipe[] } = await data.json();

    return parsedData.recipes.map((item) => ({
      mainImage: item.mainImage,
      title: item.title,
      slug: item.slug,
    }));
  } catch (error) {
    console.error(error);
  }
}

export async function getRecipeBySlug(slug: string) {
  try {
    const data = await fetch(`${endpoint}/${ROUTES.recipes}/${slug}`);

    return data.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getRecipeMainInfo(slug: string) {
  try {
    const data = await fetch(`${endpoint}/${ROUTES.recipes}/${slug}/${ROUTES.mainInfo}`);

    return data.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getLastRecipe() {
  try {
    const data = await fetch(`${endpoint}/${ROUTES.recipes}/${ROUTES.lastRecipe}`);

    return data.json();
  } catch (error) {
    console.error(error);
  }
}
