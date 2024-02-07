import classNames from 'classnames';
import styles from './inner-link.module.scss';

interface IProps {
  href: string,
  isAnchor?: boolean,
  style: string;
  content: string;
}

export const InnerLink = (props: IProps) => {
  const { href, isAnchor, style, content } = props;
  return (
    <a
      key={href}
      href={href}
      target={isAnchor ? '_self' : '_blank'}
      className={classNames(styles.link, style)}
    >
      {content}
    </a>
  );
};
