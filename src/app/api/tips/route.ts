import { DATA_KEYS } from '@/constants';
import { getData } from '@/utils';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase.config';

export async function GET() {
  try {
    const dataCollection = collection(db, 'tips');
    const dataSnapshot = await getDocs(dataCollection);
    const tipsData = dataSnapshot.docs.map((doc) => doc.data());

    return getData(tipsData, DATA_KEYS.tips);
  } catch (err) {
    console.error(err);
    return getData(null, DATA_KEYS.tips);
  }
}

// export async function POST() {
//   const newData = tips.data[0];
//   const recipesCollection = collection(db, 'tips');

//   addDoc(recipesCollection, { ...newData })
//     .then((docRef) => {
//       console.log('Document written with ID: ', docRef.id);
//     })
//     .catch((error) => {
//       console.error('Error adding document: ', error);
//     });
// }
