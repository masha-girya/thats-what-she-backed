import { DATA_KEYS } from '@/constants';
import { getData } from '@/utils';
import tips from '@/data/tips.json';

export async function GET() {
  const tipsData = tips.data;

  return getData(tipsData, DATA_KEYS.tips);
}
