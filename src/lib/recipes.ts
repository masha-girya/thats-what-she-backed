import axios, { AxiosResponse } from 'axios';
import { DATA_KEYS, ROUTES } from '@/constants';
import { IRecipe } from '@/types';
import { endpoint } from '@/utils';

export async function getAllRecipes(slugs?: string[]) {
  const endpointFormat = slugs
    ? `${endpoint}/${ROUTES.recipes}?slugs=${slugs.join(',')}`
    : `${endpoint}/${ROUTES.recipes}`;

  try {
    const { data }: AxiosResponse<{ [DATA_KEYS.recipes]: IRecipe[] | null }> =
      await axios.get(endpointFormat);

    if (data && data.recipes) {
      return {
        [DATA_KEYS.recipes]: data.recipes.map((item: IRecipe) => ({
          mainImage: item.mainImage,
          title: item.title,
          slug: item.slug,
        })),
      };
    }

    return { [DATA_KEYS.recipes]: null };
  } catch (error) {
    console.error(error);
    return { [DATA_KEYS.recipes]: null };
  }
}

export async function getRecipeBySlug(slug: string) {
  try {
    const { data }: AxiosResponse<{ [DATA_KEYS.recipe]: IRecipe | null }> =
      await axios.get(`${endpoint}/${ROUTES.recipes}/${slug}`);

    if (data && data[DATA_KEYS.recipe]) {
      return data;
    }

    return { [DATA_KEYS.recipe]: null };
  } catch (error) {
    console.error(error);
    return { [DATA_KEYS.recipe]: null };
  }
}

export async function getLastRecipe() {
  try {
    const { data }: AxiosResponse<{ [DATA_KEYS.recipe]: IRecipe | null }> =
      await axios(`${endpoint}/${ROUTES.recipes}/${ROUTES.lastRecipe}`);

    if (data && data.recipe) {
      return data;
    }

    return { [DATA_KEYS.recipe]: null };
  } catch (error) {
    console.error(error);
    return { [DATA_KEYS.recipe]: null };
  }
}

export async function addRecipeToFavs(slug: string, totalFavs: number) {
  const link = `${endpoint}/${ROUTES.recipes}/${slug}`;

  try {
    const data = await axios.patch(link, { totalFavs });

    return data;
  } catch (error) {
    console.error(error);
  }
}
