'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { FavsRecipes } from '../favs-recipes';
import { Logo } from '../logo';
import {
  Nav,
  OvenIcon,
  OvenBakedIcon,
  Socials,
} from '@/components';
import { BUTTONS_TEXT } from '@/constants';
import styles from './header-mobile.module.scss';

export const HeaderMobile = () => {
  const [isMenuOnShow, setIsMenuOnShow] = useState(false);

  const handleClickMenu = () => {
    setIsMenuOnShow(!isMenuOnShow);
  };

  useEffect(() => {
    const body = document.body;

    if (isMenuOnShow) {
      body.style.height = '100vh';
      body.style.overflowY = 'hidden';
      body.style.position = 'fixed';
    } else {
      body.style.height = '100vh';
      body.style.overflowY = 'visible';
      body.style.position = 'static';
    }
  }, [isMenuOnShow]);

  return (
    <div className={styles.headerMobile}>
      <div className={styles.headerMobile__header}>
        <Logo setIsMenuOnShow={setIsMenuOnShow} />

        <div className={styles.headerMobile__buttons}>
          <FavsRecipes />
          <button
            type="button"
            aria-label={BUTTONS_TEXT.mobileMenu}
            className={styles.headerMobile__menuBtn}
            onClick={handleClickMenu}
          >
            {isMenuOnShow ? (
              <OvenBakedIcon className={styles.headerMobile__menuBtn__icon} />
            ) : (
              <OvenIcon className={styles.headerMobile__menuBtn__icon} />
            )}
          </button>
        </div>
      </div>
      <div
        className={classNames(styles.headerMobile__menu, {
          [styles.headerMobile__menu_onShow]: isMenuOnShow,
        })}
      >
        <Nav isMobMenu setIsMenuOnShow={setIsMenuOnShow} />
        <Socials isMobMenu />
      </div>
    </div>
  );
};
