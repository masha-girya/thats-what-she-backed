'use client';

import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { BUY_ME_A_COFFEE, SHARE_ICONS } from '@/constants';
import styles from './share-socials.module.scss';

interface IProps {
  isInSticker?: boolean;
}

export const ShareSocials = ({ isInSticker }: IProps) => {
  const pathname = usePathname();

  return (
    <div className={styles.shareSocialsBox}>
      <div
        className={classNames(styles.shareSocials, {
          [styles.shareSocials_inSticker]: isInSticker,
        })}
      >
        <p>Поділитись:</p>

      {/* CHANGE TO SOCIALS COMPONENT */}
        <ul className={styles.shareSocials__list}>
          {SHARE_ICONS.map((icon) => (
            <li key={icon.title}>
              <a
                href={`${icon.link}${process.env.NEXT_PUBLIC_API_ENDPOINT_CANONICAL}${pathname}`}
                title={icon.title}
                target="_blank"
                className={classNames(
                  styles.shareSocials__icon,
                  styles[`shareSocials__icon--${icon.title}`],
                )}
              >
                <icon.icon />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.shareSocials}>
        <p>Підримати через Buy Me A Coffee:</p>
        <a
          href={BUY_ME_A_COFFEE.link}
          title={'Bye me '}
          target="_blank"
          className={classNames(
            styles.shareSocials__icon,
            styles[`shareSocials__icon--${BUY_ME_A_COFFEE.title}`],
          )}
        >
          <BUY_ME_A_COFFEE.icon />
        </a>
      </div>
    </div>
  );
};
