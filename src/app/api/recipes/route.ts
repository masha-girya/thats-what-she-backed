import { DATA_KEYS } from '@/constants';
import { db } from '@/firebase.config';
import { getData } from '@/utils';
import {
  DocumentData,
  Query,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';

export const dynamic = 'force-dynamic';
export const revalidate = 1;

export async function GET(req: Request) {
  try {
    const urlWithParams = new URL(
      req.url,
      process.env.URL_PARAMS,
    ).searchParams.get('slugs');

    const dataCollection = collection(db, DATA_KEYS.recipes);
    let dataQuery: Query<DocumentData> = query(
      dataCollection,
      orderBy('timestamp', 'desc'),
      where('slug', '==', 'blueberry-muffins'),
    );

    if (urlWithParams) {
      dataQuery = query(
        dataCollection,
        orderBy('timestamp', 'desc'),
        where('slug', 'in', urlWithParams.split(',')),
      );
    }

    const dataSnapshot = await getDocs(dataQuery);

    const data = dataSnapshot.docs.map((doc) => doc.data());

    return getData(data, DATA_KEYS.recipes);
  } catch (err) {
    console.error(err);
    return getData(null, DATA_KEYS.recipes);
  }
}