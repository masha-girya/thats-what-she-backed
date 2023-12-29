import recipes from "@/data/recipes.json";
import { getData } from "@/utils/helpers";

export async function GET() {
  const lastRecipe = recipes.data[0];

  return getData(lastRecipe, "recipe");
}
