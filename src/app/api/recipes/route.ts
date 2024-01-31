import { DATA_KEYS } from '@/constants';
import recipes from '@/data/recipes.json';
import { getData } from '@/utils';

export async function GET() {
  const recipesData = recipes.data;

  return getData(recipesData, DATA_KEYS.recipes);
}
