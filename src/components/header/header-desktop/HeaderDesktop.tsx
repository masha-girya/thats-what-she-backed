import { Nav } from '@/components';
import { Logo } from '../logo';
import { FavsRecipes } from '../favs-recipes';
import styles from './header-desktop.module.scss';

export const HeaderDesktop = () => {
  return (
    <div className={styles.headerDesktop}>
      <div className={styles.headerDesktop__grid}>
        <Logo />
        <Nav />
        <FavsRecipes />
      </div>
    </div>
  );
};
