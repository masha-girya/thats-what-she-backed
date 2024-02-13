'use client';

import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { BUY_ME_A_COFFEE, SHARE_ICONS } from '@/constants';
import styles from './share-socials.module.scss';

export const ShareSocials = () => {
  const pathname = usePathname();

  return (
    <div className={styles.shareSocialsBox}>
      <div className={styles.shareSocials}>
        <p>Поділитись:</p>
        <ul className={styles.shareSocials__list}>
          {SHARE_ICONS.map((icon) => (
            <li>
              <a
                key={icon.title}
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
        <p className={styles.shareSocials__byMeACoffee}>
          Підримати через Buy Me A Coffee:
        </p>
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
