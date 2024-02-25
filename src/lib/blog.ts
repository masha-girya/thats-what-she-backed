import { DATA_KEYS, ROUTES } from '@/constants';
import { endpoint } from '@/utils';
import axios from 'axios';

export const getArticles = async (page: number, searchQuery = '') => {
  let apiEndpoint = `${endpoint}/${ROUTES.blog}?page=${page}`;

  if (searchQuery.length > 0) {
    apiEndpoint += `&search=${searchQuery.trim()}`;
  }

  try {
    const { data } = await axios.get(apiEndpoint);

    return data ? data : { [DATA_KEYS.blog]: null };
  } catch (error) {
    console.error(error);
    return { [DATA_KEYS.blog]: null };
  }
};

export const getArticleBySlug = async (slug: string) => {
  try {
    const { data } = await axios.get(`${endpoint}/${ROUTES.blog}/${slug}`);

    return data ? data : { [DATA_KEYS.article]: null };
  } catch (error) {
    console.error(error);
    return { [DATA_KEYS.article]: null };
  }
};
