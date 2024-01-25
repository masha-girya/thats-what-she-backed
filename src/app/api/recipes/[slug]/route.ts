import path from 'path';
import fs from 'fs/promises';
import { DATA_KEYS, ERROR_TEXT } from '@/constants';
import { getData } from '@/utils';
import { IRecipe } from '@/types';
import recipes from '@/data/recipes.json';

export async function GET(req: Request, { params }: any) {
  const recipe = recipes.data.find((item) => item.slug === params.slug);

  return getData(recipe, DATA_KEYS.recipe);
}

export async function POST(req: Request, { params }: any) {
  try {
    const reqBody: { totalFavs: number } = await req.json();

    const recipe = recipes.data.find((item) => item.slug === params.slug);

    if (!recipe) {
      return new Response(ERROR_TEXT.notFound);
    }

    const dataFilePath = path.resolve('src/data/recipes.json');
    const rawData = await fs.readFile(dataFilePath, 'utf-8');
    const existingData = JSON.parse(rawData);

    const updatedData = existingData.data.map((recipe: IRecipe) =>
      recipe.slug === params.slug
        ? { ...recipe, totalFavs: reqBody.totalFavs }
        : recipe,
    );

    await fs.writeFile(
      dataFilePath,
      JSON.stringify({ data: updatedData }, null, 2),
    );

    return new Response(
      updatedData.find((recipe: IRecipe) => recipe.slug === params.slug),
    );
  } catch (error) {
    console.error('Error updating data:', error);
  }
}
