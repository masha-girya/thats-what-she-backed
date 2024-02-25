'use client';

import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from '@/hooks';
import { Search, LoadingPage, ServerErrorPlug } from '@/components';
import { BlogCard } from './blog-card';
import { PaginationWrapper } from './pagination-blog';
import { getArticles } from '@/lib';
import { IArticle } from '@/types';
import { ERROR_TEXT, PLACEHOLDERS_TEXT } from '@/constants';
import styles from './blog-list.module.scss';

export const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOnLoad, setIsOnLoad] = useState(true);
  const { debouncedValue } = useDebounce(searchQuery, 500);
  const [blogArticles, setBlogArticles] = useState<
    Omit<IArticle, 'body'>[] | null
  >(null);
  const [totalArticleItems, setTotalArticleItems] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const loadArticlesByQuery = useCallback(
    async (searchParam: string, currentPage: number) => {
      try {
        const data = await getArticles(currentPage, searchParam);
        console.log(data);

        if (data) {
          setBlogArticles(data.blog.articles);
          setTotalArticleItems(data.blog.articlesAmount);
          setCurrentPage(currentPage);
        }
      } catch (error) {
        console.error({ error });
      } finally {
        setIsOnLoad(false);
      }
    },
    [],
  );

  const handleChangePage = useCallback(
    (page: number) => {
      setCurrentPage(page);
      loadArticlesByQuery(debouncedValue, page);
    },
    [debouncedValue],
  );

  useEffect(() => {
    setIsOnLoad(true);

    loadArticlesByQuery(debouncedValue, currentPage);
  }, [debouncedValue, currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <section className={styles.blogList}>
      <div className={styles.blogList__filters}>
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          placeholder={PLACEHOLDERS_TEXT.searchArticle}
        />
      </div>

      {!isOnLoad && !blogArticles && (
        <ServerErrorPlug text={ERROR_TEXT.articles} />
      )}

      {isOnLoad && <LoadingPage isInBlock />}

      {!isOnLoad && blogArticles?.length !== 0 && (
        <>
          <div className={styles.blogList__cards}>
            {blogArticles?.map((card, index) => (
              <BlogCard key={index} card={card} />
            ))}
          </div>

          <PaginationWrapper
            currentPage={currentPage}
            totalArticleItems={totalArticleItems}
            handleChangePage={handleChangePage}
          />
        </>
      )}

      {!isOnLoad && blogArticles?.length === 0 && searchQuery.length > 0 && (
        <p className={styles.noArticlesPlug}>{ERROR_TEXT.articlesByQuery}</p>
      )}
    </section>
  );
};
