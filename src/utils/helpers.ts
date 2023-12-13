import { IRecipeCard } from "@/types/recipe.type";

export const getFavRecipes = (favRecipes: IRecipeCard[], item: IRecipeCard) => {
  let itemToSet = "";

  if (favRecipes.find((recipe) => recipe.title === item.title)) {
    itemToSet = JSON.stringify(
      favRecipes.filter((recipe) => recipe.title !== item.title)
    );
  } else {
    itemToSet = JSON.stringify([...favRecipes, item]);
  }

  return itemToSet;
};
