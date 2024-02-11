import { useMemo } from 'react';
// import { useDevice } from '@/hooks';
import { Pagination } from '@/components';
import { ARTICLES_LIMIT } from '@/constants';
import styles from './pagination-blog.module.scss';

interface IProps {
  currentPage: number;
  totalArticleItems: number;
  handleChangePage: (page: number) => void;
}

export const PaginationWrapper = (props: IProps) => {
  const { currentPage, totalArticleItems, handleChangePage } = props;
  // const { isMobile } = useDevice();

  const amountOfPages = useMemo(
    () =>
      Array(totalArticleItems)
        .slice(0, Math.ceil(totalArticleItems / ARTICLES_LIMIT))
        .fill(0),
    [totalArticleItems],
  );

  // const getPageBreakpoint = useCallback(() => {
  //   switch (isMobile) {
  //     case true:
  //       return amountOfPages.length > 2 ? 2 : 3;
  //     case false:
  //       return amountOfPages.length > 4 ? 3 : 4;
  //     default:
  //       return 1;
  //   }
  // }, [isMobile, amountOfPages]);

  const pageBreakpoint = useMemo(() => 3, []);

  const isCurrentPageMoreThanBreakpoint =
    currentPage > pageBreakpoint && currentPage !== amountOfPages.length;

  return (
    <div className={styles.paginationWrapper}>
      <Pagination
        type="prev"
        handleChangePage={() => handleChangePage(currentPage - 1)}
        isNonClickable={currentPage === 1}
      />

      {amountOfPages
        .slice(
          0,
          isCurrentPageMoreThanBreakpoint ? pageBreakpoint - 1 : pageBreakpoint,
        )
        .map((page, i) => (
          <Pagination
            key={i}
            type="number"
            isActive={currentPage === i + 1}
            pageNumber={i + 1}
            handleChangePage={() => handleChangePage(i + 1)}
            isNonClickable={currentPage === i + 1}
          />
        ))}

      {isCurrentPageMoreThanBreakpoint && (
        <Pagination
          type="number"
          isActive
          pageNumber={currentPage}
          handleChangePage={() => {}}
          isNonClickable
        />
      )}

      {amountOfPages.length > pageBreakpoint && (
        <Pagination type="empty" handleChangePage={() => {}} />
      )}

      {amountOfPages.length > pageBreakpoint && (
        <Pagination
          type="number"
          pageNumber={amountOfPages.length}
          isActive={currentPage === amountOfPages.length}
          handleChangePage={() => handleChangePage(amountOfPages.length)}
        />
      )}

      <Pagination
        type="next"
        handleChangePage={() => handleChangePage(currentPage + 1)}
        isNonClickable={currentPage === amountOfPages.length}
      />
    </div>
  );
};
