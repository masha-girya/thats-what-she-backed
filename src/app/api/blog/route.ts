import { ARTICLES_LIMIT, DATA_KEYS } from '@/constants';
import { getData } from '@/utils';
import { db } from '@/firebase.config';
import {
  CollectionReference,
  DocumentData,
  Query,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';

export const dynamic = 'force-dynamic';

const getBlogWithPage = (blogData: DocumentData[], currentPage: string) => {
  const offsetPage = (Number(currentPage) - 1) * ARTICLES_LIMIT;

  return blogData.slice(offsetPage, offsetPage + ARTICLES_LIMIT);
};

export async function GET(req: Request) {
  try {
    const URL_DATA = new URL(req.url, process.env.URL_PARAMS);
    const searchQuery = URL_DATA.searchParams.get('search');
    const currentPage = URL_DATA.searchParams.get('page') || '1';

    const dataCollection = collection(db, DATA_KEYS.blog);

    let queryData:
      | CollectionReference<DocumentData, DocumentData>
      | Query<DocumentData, DocumentData> = dataCollection;

    if (searchQuery) {
      queryData = query(
        dataCollection,
        where('title', '>=', searchQuery),
        orderBy('title', 'desc'),
      );
    }

    const orderedData = query(queryData, orderBy('timestamp', 'desc'));
    const dataSnapshot = await getDocs(orderedData);
    const totalCountSnapshot = dataSnapshot.size;

    const data = dataSnapshot.docs.map((doc) => doc.data());

    const pageDataSnapshot = getBlogWithPage(data, currentPage);

    return getData(
      { articles: pageDataSnapshot, articlesAmount: totalCountSnapshot },
      DATA_KEYS.blog,
    );
  } catch (err) {
    console.error(err);
    return getData(
      {
        articles: null,
        articlesAmount: 0,
      },
      DATA_KEYS.blog,
    );
  }
}
