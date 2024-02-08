import { DATA_KEYS } from '@/constants';
import { getData } from '@/utils';
import recipes from '@/data/recipes.json';

export async function GET() {
  const lastRecipe = recipes.data[0];

  return getData(lastRecipe, DATA_KEYS.recipe);
}
