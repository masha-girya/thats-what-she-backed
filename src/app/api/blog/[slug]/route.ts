import blog from '@/data/blog.json';
import { getData } from '@/utils';
import { DATA_KEYS } from '@/constants';

export const dynamic = 'force-dynamic';

export async function GET(req: Request, { params }: any) {
  const article = blog.data.find((item) => item.slug === params.slug);

  return getData(article, DATA_KEYS.article);
}