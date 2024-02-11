'use client';

import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from '@/hooks';
import { Search, LoadingPage, ServerErrorPlug } from '@/components';
import { BlogCard } from './blog-card';
import { PaginationWrapper } from './pagination-blog';
import { getArticles } from '@/lib';
import { IArticle } from '@/types';
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

        if (data) {
          setBlogArticles(data.blog.articles);
          setTotalArticleItems(data.blog.articlesAmount);
          setCurrentPage(currentPage);
        }
      } catch (error) {
        console.error({ error });
      } finally {
        setIsOnLoad(false);
        window.scrollTo(0, 0);
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

  return (
    <section className={styles.blogList}>
      <div className={styles.blogList__filters}>
        <div className={styles.blogList__filters__search}>
          <Search
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            // placeholder={}
          />
        </div>
      </div>

      {!isOnLoad && !blogArticles && (
        <ServerErrorPlug text="Не можу зараз завантажити статті" />
      )}

      {isOnLoad && <LoadingPage isInBlock />}

      {!isOnLoad && blogArticles?.length !== 0 && (
        <>
          <div className={styles.blogList__cardsWrapper}>
            <div className={styles.blogList__cards}>
              {blogArticles?.map((card, index) => (
                <BlogCard key={index} card={card} />
              ))}
            </div>
          </div>

          <PaginationWrapper
            currentPage={currentPage}
            totalArticleItems={totalArticleItems}
            handleChangePage={handleChangePage}
          />
        </>
      )}

      {!isOnLoad && blogArticles?.length === 0 && searchQuery.length > 0 && (
        <p className={styles.noArticlesPlug}>За даним запитом немає статей</p>
      )}
    </section>
  );
};
