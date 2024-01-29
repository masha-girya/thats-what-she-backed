'use client';

import { useRouter } from 'next/navigation';
import { ArrowIcon } from '../icons';
import { BUTTONS_TEXT } from '@/constants';
import styles from './BackButton.module.scss';

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      name={BUTTONS_TEXT.goBack}
      className={styles.backBtn}
      onClick={() => router.back()}
    >
      <ArrowIcon className={styles.backBtn__arrow} />
      {BUTTONS_TEXT.goBack}
    </button>
  );
};
