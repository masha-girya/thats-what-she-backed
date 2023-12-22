import { IRecipe } from "@/types/recipe.type";
import { endpoint } from "@/utils/endpoint";

export async function getAllRecipes() {
  try {
    const data = await fetch(`${endpoint}/recipes`);
    const parsedData: { recipes: IRecipe[] } = await data.json();

    return parsedData.recipes.map((item) => ({
      mainImage: item.mainImage,
      title: item.title,
      slug: item.slug,
    }));
  } catch (error) {
    console.error(error);
    return "Failed to fetch data";
  }
}

export async function getRecipeBySlug(slug: string) {
  try {
    const data = await fetch(`${endpoint}/recipes/${slug}`);

    return data.json();
  } catch (error) {
    console.error(error);
    return "Failed to fetch data";
  }
}

export async function getRecipeMainInfo(slug: string) {
  try {
    const data = await fetch(`${endpoint}/recipes/${slug}/main-info`);

    return data.json();
  } catch (error) {
    console.error(error);
    return "Failed to fetch data";
  }
}

export async function getLastRecipe() {
  try {
    const data = await fetch(`${endpoint}/recipes/last-recipe`);

    return data.json();
  } catch (error) {
    console.error(error);
    return "Failed to fetch data";
  }
}
