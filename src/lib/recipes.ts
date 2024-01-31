import { ROUTES } from '@/constants';
import { IRecipe } from '@/types';
import { endpoint } from '@/utils';
import axios from 'axios';

export async function getAllRecipes(slugs?: string[]) {
  const endpointFormat = slugs
    ? `${endpoint}/${ROUTES.recipes}?slugs=${slugs.join(',')}`
    : `${endpoint}/${ROUTES.recipes}`;

  try {
    const data = await fetch(endpointFormat);
    const parsedData: { recipes: IRecipe[] } = await data.json();

    return parsedData.recipes.map((item) => ({
      mainImage: item.mainImage,
      title: item.title,
      slug: item.slug,
    }));
  } catch (error) {
    console.error(error);
  }
}

export async function getRecipeBySlug(slug: string) {
  try {
    const data = await fetch(`${endpoint}/${ROUTES.recipes}/${slug}`);

    return data.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getLastRecipe() {
  try {
    const data = await fetch(
      `${endpoint}/${ROUTES.recipes}/${ROUTES.lastRecipe}`,
    );

    return data.json();
  } catch (error) {
    console.error(error);
  }
}

export async function addRecipeToFavs(slug: string, totalFavs: number) {
  const link = `${endpoint}/${ROUTES.recipes}/${slug}`;

  try {
    const data = await axios.post(link, { totalFavs });

    return data;
  } catch (error) {
    console.error(error);
  }
}
