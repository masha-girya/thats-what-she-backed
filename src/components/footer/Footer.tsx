import { Socials } from '@/components';
import { RIGHTS_TEXT } from '@/constants';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__bottom}>
        <p>{RIGHTS_TEXT}</p>
      </div>
      <div className={styles.footer__top}>
        <Socials />
      </div>
    </footer>
  );
};
