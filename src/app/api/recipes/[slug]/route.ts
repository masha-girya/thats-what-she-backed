import { DATA_KEYS } from "@/constants";
import { getData } from "@/utils";
import recipes from "@/data/recipes.json";

export async function GET(req: any, { params }: any) {
  const recipe = recipes.data.find((item) => item.slug === params.slug);

  return getData(recipe, DATA_KEYS.recipe);
}
