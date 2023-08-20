import recipes from "@/data/recipes.json";
import { NextApiRequest, NextApiResponse } from "next";

export default function getRecipes(
  _req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const slug = _req.query.slug
  const recipe = recipes.data.find((item) => item.slug === slug);

  try {
    if (!recipe) {
      return new Error("Not found, 400");
    }

    return res.status(200).json(recipe);
  } catch (error) {
    return new Error("Internal Server Error, 500");
  }
}