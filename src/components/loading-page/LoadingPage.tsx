import { LoadingDoughnutIcon } from '../icons';
import styles from './LoadingPage.module.scss';

export const LoadingPage = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__circle}>
        <LoadingDoughnutIcon />
      </div>
    </div>
  );
};
