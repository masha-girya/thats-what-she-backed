import { LoadingDoughnutIcon } from '@/components';
import styles from './loading-page.module.scss';

export const LoadingPage = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__circle}>
        <LoadingDoughnutIcon />
      </div>
    </div>
  );
};
