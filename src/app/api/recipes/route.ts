import { DATA_KEYS } from '@/constants';
import recipes from '@/data/recipes.json';
import { getData } from '@/utils';

export async function GET(req: Request) {
  let recipesData = recipes.data;

  const urlWithParams = new URL(req.url, 'http://localhost').searchParams.get(
    'slugs',
  );

  if (urlWithParams) {
    recipesData = recipesData.filter((recipe) =>
      urlWithParams.split(',').includes(recipe.slug),
    );
  }

  return getData(recipesData, DATA_KEYS.recipes);
}
