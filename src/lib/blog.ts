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
  }
};

// export const getArticleBySlug = async (slug: string) => {
//   let apiEndpoint = `${API_ENDPOINT_BLOG}/pages?type=news.NewsSinglePage&slug=${slug}&fields=*`;

//   const response = await axios.get(apiEndpoint);

//   return response.data.items[0];
// };
