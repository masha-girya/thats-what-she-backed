import { ROUTES } from '@/constants';
import { endpoint } from '@/utils';
import axios from 'axios';

export const getArticles = async (currentPage: number, searchQuery = '') => {
  let apiEndpoint = `${endpoint}/${ROUTES.blog}?page=${currentPage}`;

  if (searchQuery.length > 0) {
    apiEndpoint += `&search=${searchQuery.trim()}`;
  }

  try {
    const response = await axios.get(apiEndpoint);

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getArticleBySlug = async (slug: string) => {
  try {
    const response = await axios.get(`${endpoint}/${ROUTES.blog}/${slug}`);

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
