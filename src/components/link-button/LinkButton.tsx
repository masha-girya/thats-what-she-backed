import Link from 'next/link';
import { ArrowIcon } from '@/components';
import styles from './link-button.module.scss';
import classNames from 'classnames';

interface IProps {
  text: string;
  link: string;
  children?: React.ReactNode;
  isMain?: boolean;
  linkStyles?: string;
}

export const LinkButton = (props: IProps) => {
  const { text, link, children, isMain, linkStyles } = props;

  return (
    <Link href={link} className={classNames(linkStyles, styles.linkBox)}>
      {children}

      <div
        className={classNames(styles.button, {
          [styles.button_main]: isMain,
        })}
      >
        <ArrowIcon />
        <p
          className={classNames(styles.button__text, {
            [styles.button__text_main]: isMain,
          })}
        >
          {text}
        </p>
      </div>
    </Link>
  );
};
