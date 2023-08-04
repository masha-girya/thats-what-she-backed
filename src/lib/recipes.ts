import { endpoint } from "@/utils/endpoint";

export async function getAllRecipes() {
  const data = await fetch(`${endpoint}/recipes`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

export async function getRecipeById(id: string) {
  const data = await fetch(`${endpoint}/recipes/${id}`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

export async function getRecipeMainInfo(id: number) {
  const data = await fetch(`${endpoint}/recipes/${id}/main-info`);

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
