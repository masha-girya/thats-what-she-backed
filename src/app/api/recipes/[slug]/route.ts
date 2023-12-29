import recipes from "@/data/recipes.json";
import { getData } from "@/utils/helpers";

export async function GET(req: any, { params }: any) {
  const recipe = recipes.data.find((item) => item.slug === params.slug);

  return getData(recipe, "recipe");
}
