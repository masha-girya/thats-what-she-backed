// import { DATA_KEYS } from '@/constants';
// import { getData } from '@/utils';

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

// export async function GET(req: Request) {
//   let recipesData = recipes.data;

//   const urlWithParams = new URL(req.url, 'http://localhost').searchParams.get(
//     'slugs',
//   );

//   if (urlWithParams) {
//     recipesData = recipesData.filter((recipe) =>
//       urlWithParams.split(',').includes(recipe.slug),
//     );
//   }

//   return getData(recipesData, DATA_KEYS.recipes);
// }

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

// export async function POST() {
//   const newData = recipes.data[3];
//   const recipesCollection = collection(db, 'recipes');

//   addDoc(recipesCollection, { ...newData })
//     .then((docRef) => {
//       console.log('Document written with ID: ', docRef.id);
//     })
//     .catch((error) => {
//       console.error('Error adding document: ', error);
//     });
// }
