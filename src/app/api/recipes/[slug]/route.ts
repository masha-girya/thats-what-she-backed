import { DATA_KEYS } from '@/constants';
import { getData } from '@/utils';
import {
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from '@/firebase.config';

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
