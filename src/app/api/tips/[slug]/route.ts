import { DATA_KEYS } from '@/constants';
import { getData } from '@/utils';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase.config';

export async function GET(req: any, { params }: any) {
  const dataCollection = collection(db, 'tips');

  const q = query(dataCollection, where('slug', '==', params.slug));
  const dataSnapshot = await getDocs(q);

  if(dataSnapshot.empty) {
    return getData(null, DATA_KEYS.tip);
  }

  const tip = dataSnapshot.docs[0].data();

  return getData(tip, DATA_KEYS.tip);
}
