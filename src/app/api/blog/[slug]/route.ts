import { DATA_KEYS } from '@/constants';
import blog from '@/data/blog.json';
import { getData } from '@/utils';

export async function GET(req: Request, { params }: any) {
  const recipe = blog.data.find((item) => item.slug === params.slug);

  return getData(recipe, DATA_KEYS.article);
}