import { DATA_KEYS, ERROR_TEXT } from '@/constants';
import { getData } from '@/utils';
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

export const dynamic = 'force-dynamic';
export const revalidate = 1;

export async function GET(req: Request, { params }: any) {
  try {
    const dataCollection = collection(db, DATA_KEYS.recipes);

    const q = query(dataCollection, where('slug', '==', params.slug));
    const dataSnapshot = await getDocs(q);

    if (dataSnapshot.empty) {
      return getData(null, DATA_KEYS.recipe);
    }

    const data = dataSnapshot.docs[0].data();

    return getData(data, DATA_KEYS.recipe);
  } catch (err) {
    console.error(err);
    return getData(null, DATA_KEYS.recipe);
  }
}

export async function PATCH(req: Request, { params }: any) {
  try {
    const reqBody: { totalFavs: number } = await req.json();

    const recipesCollection = collection(db, DATA_KEYS.recipes);
    const q = query(recipesCollection, where('slug', '==', params.slug));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error('Recipe not found');
    }

    const recipeDoc = querySnapshot.docs[0];
    const recipeId = recipeDoc.id;

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
