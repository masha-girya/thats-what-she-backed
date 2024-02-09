import { SOCIALS } from '@/constants';
import classNames from 'classnames';
import styles from './socials.module.scss';

interface IProps {
  isMobMenu?: boolean;
  isInSection?: boolean;
}

export const Socials = (props: IProps) => {
  const { isMobMenu, isInSection } = props;

  return (
    <ul
      className={classNames(styles.socials, {
        [styles.socials_mobMenu]: isMobMenu,
        [styles.socials_inSection]: isInSection,
      })}
    >
      {SOCIALS.map((item) => (
        <li key={item.name}>
          <a
            href={item.link}
            title={item.name}
            target="_blank"
            className={classNames(styles.socials__link, {
              [styles.socials__link_mobMenu]: isMobMenu,
              [styles.socials__link_inSection]: isInSection,
            })}
          >
            {isInSection && (
              <p className={styles.socials__title}>{item.name}</p>
            )}
            {
              <item.icon
                className={classNames(styles.socials__icon, {
                  [styles.socials__icon_mobMenu]: isMobMenu,
                  [styles.socials__icon_inSection]: isInSection,
                  [styles.socials__icon_mobMenu_tiktok]:
                    (isMobMenu || isInSection) && item.name === 'TikTok',
                })}
              />
            }
          </a>
        </li>
      ))}
    </ul>
  );
};
