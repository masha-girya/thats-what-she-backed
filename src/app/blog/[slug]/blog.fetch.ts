import { getArticleBySlug } from '@/lib';
import { IArticle } from '@/types';

export const getArticle = async (slug: string) => {
  try {
    const article: { article: IArticle } = await getArticleBySlug(slug);

    return { article: article.article };
  } catch (error) {
    console.error(error);
    return { article: null };
  }
};
