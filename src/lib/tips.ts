import { DATA_KEYS, ROUTES } from '@/constants';
import { ITips } from '@/types';
import { endpoint } from '@/utils';
import axios, { AxiosResponse } from 'axios';

export async function getAllTips() {
  try {
    const { data }: AxiosResponse<{ [DATA_KEYS.tips]: ITips[] | null }> =
      await axios.get(`${endpoint}/${ROUTES.tips}`);

    if (data && data.tips) {
      return {
        [DATA_KEYS.tips]: data.tips.map((tip) => ({
          slug: tip.slug,
          title: tip.title,
          mainImage: tip.mainImage,
        })),
      };
    }

    return { [DATA_KEYS.tips]: null };
  } catch (error) {
    console.error(error);
    return { [DATA_KEYS.tips]: null };
  }
}

export async function getTipBySlug(slug: string) {
  try {
    const { data }: AxiosResponse<{ [DATA_KEYS.tip]: ITips | null }> =
      await axios.get(`${endpoint}/${ROUTES.tips}/${slug}`);

    return data ? data : { [DATA_KEYS.tip]: null };
  } catch (error) {
    console.error(error);
    return { [DATA_KEYS.tip]: null };
  }
}
