import blog from '@/data/blog.json';
import { ARTICLES_LIMIT, DATA_KEYS } from '@/constants';
import { getData } from '@/utils';
import { IArticle } from '@/types';

const getBlogWithPage = (blogData: IArticle[], currentPage: number) => {
  const offsetPage = (currentPage - 1) * ARTICLES_LIMIT;

  return blogData.slice(offsetPage, offsetPage + ARTICLES_LIMIT);
};

const getBlogWithQuery = (blogData: IArticle[], query: string) => {
  const lowerQuery = query.toLocaleLowerCase();

  return blogData.filter(
    (blog) =>
      blog.title.toLocaleLowerCase().includes(lowerQuery) ||
      blog.capture.toLocaleLowerCase().includes(lowerQuery),
  );
};

export async function GET(req: Request) {
  let blogData: IArticle[] | any[] = blog.data;
  const initialLength = blogData.length;

  if (blogData.length === 0) {
    return getData([], DATA_KEYS.blog);
  }

  const URL_DATA = new URL(req.url, 'http://localhost');
  const searchQuery = URL_DATA.searchParams.get('search');
  const currentPage = URL_DATA.searchParams.get('page');

  if (currentPage && !searchQuery) {
    blogData = getBlogWithPage(blogData, Number(currentPage));
  }

  if (searchQuery) {
    blogData = getBlogWithQuery(blogData, searchQuery);
  }

  return getData(
    { articles: blogData, articlesAmount: initialLength },
    DATA_KEYS.blog,
  );
}
