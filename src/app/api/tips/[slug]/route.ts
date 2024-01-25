import { DATA_KEYS } from '@/constants';
import { getData } from '@/utils';
import tips from '@/data/tips.json';

export async function GET(req: any, { params }: any) {
  const tip = tips.data.find((item) => item.slug === params.slug);

  return getData(tip, DATA_KEYS.tip);
}
