import recipes from "@/data/recipes.json";
import { NextApiResponse, NextApiRequest } from 'next';

export default function getRecipes(
  _req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return res.status(200).json(recipes.data[recipes.data.length - 1])
}