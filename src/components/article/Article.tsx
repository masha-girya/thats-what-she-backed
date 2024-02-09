import classNames from 'classnames';
import styles from './article.module.scss';

interface IProps {
  title: string;
  dataSet: string;
  children: React.ReactNode;
  isShadowBox?: boolean;
}

export const Article = (props: IProps) => {
  const { title, dataSet, children, isShadowBox } = props;

  return (
    <article
      data-set={dataSet}
      className={classNames(styles.article, {
        [styles.article_shadowBox]: isShadowBox,
      })}
    >
      <h5 className={styles.article__title}>{title}</h5>
      {children}
    </article>
  );
};
