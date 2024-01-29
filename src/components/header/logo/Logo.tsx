'use client';

import Link from 'next/link';
import { useCallback } from 'react';
import { IMAGE_ALT_TEXT } from '@/constants';
import LogoImg from '../assets/Logo.png';
import styles from './Logo.module.scss';

interface IProps {
  setIsMenuOnShow?: (isMenuOnShow: boolean) => void;
}

export const Logo = ({ setIsMenuOnShow }: IProps) => {
  const handleCloseMenu = useCallback(() => {
    if (setIsMenuOnShow) {
      setIsMenuOnShow(false);
    }
  }, []);

  return (
    <Link href="/" className={styles.link} onClick={handleCloseMenu}>
      <img
        alt={IMAGE_ALT_TEXT.logo}
        src={LogoImg.src}
        className={styles.logo}
      />
    </Link>
  );
};
