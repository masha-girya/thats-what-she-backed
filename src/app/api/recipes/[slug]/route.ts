// import path from 'path';
// import fs from 'fs/promises';
import { DATA_KEYS, ERROR_TEXT } from '@/constants';
import { getData } from '@/utils';
// import recipes from '@/data/recipes.json';
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '@/firebase.config';
import { NextResponse } from 'next/server';

// export async function GET(req: Request, { params }: any) {
//   const recipe = recipes.data.find((item) => item.slug === params.slug);

//   return getData(recipe, DATA_KEYS.recipe);
// }

export async function GET(req: Request, { params }: any) {
  const dataCollection = collection(db, 'recipes');

  const q = query(dataCollection, where('slug', '==', params.slug));
  const dataSnapshot = await getDocs(q);
  console.log('HERE');

  if (dataSnapshot.empty) {
    return getData(null, DATA_KEYS.recipe);
  }

  const data = dataSnapshot.docs[0].data();

  return getData(data, DATA_KEYS.recipe);
}

export async function PATCH(req: Request, { params }: any) {
  try {
    // Create a query to find the recipe by slug
    const reqBody: { totalFavs: number } = await req.json();

    const recipesCollection = collection(db, 'recipes');
    const q = query(recipesCollection, where('slug', '==', params.slug));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error('Recipe not found');
    }

    const recipeDoc = querySnapshot.docs[0];
    const recipeId = recipeDoc.id;

    // Update the totalFavs field
    const recipeRef = doc(recipesCollection, recipeId);
    await updateDoc(recipeRef, {
      totalFavs: reqBody.totalFavs,
    });

    return new NextResponse('success', { status: 200 });
  } catch (error) {
    console.error('Error updating recipe totalFavs:', error);
    return new NextResponse(ERROR_TEXT.notFound, { status: 404 });
  }
}

// export async function POST(req: Request, { params }: any) {
//   try {
//     const reqBody: { totalFavs: number } = await req.json();

//     const recipe = recipes.data.find((item) => item.slug === params.slug);

//     if (!recipe) {
//       return new Response(ERROR_TEXT.notFound);
//     }

//     const dataFilePath = path.resolve('src/data/recipes.json');
//     const rawData = await fs.readFile(dataFilePath, 'utf-8');
//     const existingData = JSON.parse(rawData);

//     const updatedData = existingData.data.map((recipe: IRecipe) =>
//       recipe.slug === params.slug
//         ? { ...recipe, totalFavs: reqBody.totalFavs }
//         : recipe,
//     );

//     await fs.writeFile(
//       dataFilePath,
//       JSON.stringify({ data: updatedData }, null, 2),
//     );

//     return new Response(
//       updatedData.find((recipe: IRecipe) => recipe.slug === params.slug),
//     );
//   } catch (error) {
//     console.error('Error updating data:', error);
//   }
// }
