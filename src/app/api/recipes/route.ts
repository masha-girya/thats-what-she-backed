import recipes from "@/data/recipes.json";
import { getData } from "@/utils/helpers";

export async function GET() {
  const recipesData = recipes.data;

  return getData(recipesData, "recipes");
}