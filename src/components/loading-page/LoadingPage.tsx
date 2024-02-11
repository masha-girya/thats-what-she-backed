import { LoadingDoughnutIcon } from '@/components';
import styles from './loading-page.module.scss';
import classNames from 'classnames';

interface IProps {
  isInBlock?: boolean;
}

export const LoadingPage = ({ isInBlock }: IProps) => {
  return (
    <div
      className={classNames(styles.loading, {
        [styles.loading_inBlock]: isInBlock,
      })}
    >
      <div className={styles.loading__circle}>
        <LoadingDoughnutIcon />
      </div>
    </div>
  );
};
