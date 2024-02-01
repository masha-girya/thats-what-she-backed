import { HeaderDesktop } from './header-desktop';
import { HeaderMobile } from './header-mobile';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__desktop}>
          <HeaderDesktop />
        </div>
        <div className={styles.header__mobile}>
          <HeaderMobile />
        </div>
      </div>
    </header>
  );
};
