import { IRecipe } from "@/types/recipe.type";
import { endpoint } from "@/utils/endpoint";

export async function getAllRecipes() {
  const data = await fetch(`${endpoint}/recipes`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  const parsedData: { recipes: IRecipe[] } = await data.json();

  return parsedData.recipes.map(item => (
    {
      mainImage: item.mainImage,
      title: item.title,
      slug: item.slug,
    }
  ));
}

export async function getRecipeBySlug(slug: string) {
  const data = await fetch(`${endpoint}/recipes/${slug}`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

export async function getRecipeMainInfo(slug: string) {
  const data = await fetch(`${endpoint}/recipes/${slug}/main-info`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

export async function getLastRecipe() {
  const data = await fetch(`${endpoint}/recipes/last-recipe`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}
