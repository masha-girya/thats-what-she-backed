import { getData } from '@/utils';
import { DATA_KEYS } from '@/constants';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase.config';

export const dynamic = 'force-dynamic';
export const revalidate = 1;

export async function GET(req: Request, { params }: any) {
  try {
    const dataCollection = collection(db, DATA_KEYS.blog);

    const q = query(dataCollection, where('slug', '==', params.slug));
    const dataSnapshot = await getDocs(q);

    if (dataSnapshot.empty) {
      return getData(null, DATA_KEYS.blog);
    }

    const data = dataSnapshot.docs[0].data();

    return getData(data, DATA_KEYS.article);
  } catch (err) {
    console.error(err);
    return getData(null, DATA_KEYS.article);
  }
}
