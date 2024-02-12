'use client';

import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { SHARE_ICONS } from '@/constants';
import styles from './share-socials.module.scss';

export const ShareSocials = () => {
  const pathname = usePathname();

  return (
    <div className={styles.shareSocials}>
      <p>Поділитись:</p>
      {SHARE_ICONS.map((icon) => (
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
      ))}
    </div>
  );
};
