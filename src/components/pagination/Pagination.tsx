
import classNames from 'classnames';
import { NextIcon, PrevIcon } from '../icons';
import styles from './pagination.module.scss';

interface IProps {
  type?: 'number' | 'prev' | 'next' | 'empty';
  pageNumber?: number;
  isActive?: boolean;
  isNonClickable?: boolean;
  handleChangePage: () => void;
}

export const Pagination = (props: IProps) => {
  const {
    pageNumber,
    type = 'number',
    isNonClickable,
    isActive,
    handleChangePage,
  } = props;

  const getPageNumber = () => {
    switch (type) {
      case 'prev':
        return <PrevIcon />;
      case 'next':
        return <NextIcon />;
      case 'number':
        return pageNumber;
      case 'empty':
        return '...';
      default:
        return '';
    }
  };

  return (
    <div
      onClick={
        type !== 'empty' && !isNonClickable
          ? () => handleChangePage()
          : () => {}
      }
      className={classNames(styles.pagination, styles[`pagination--${type}`], {
        [styles.pagination_active]: isActive,
        [styles[`pagination--${type}_nonClickable`]]: isNonClickable,
      })}
    >
      <p
        className={classNames(styles.pagination__pageNumber, {
          [styles.pagination__pageNumber_active]: isActive,
        })}
      >
        {getPageNumber()}
      </p>
    </div>
  );
};
