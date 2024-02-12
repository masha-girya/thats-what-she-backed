'use client';

import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { ContentConstructor, ImageLoader } from '@/components';
import { IArticle } from '@/types';
import { IMAGE_ALT_TEXT, SHARE_ICONS } from '@/constants';
import styles from './blog-article.module.scss';

interface IProps {
  article: IArticle;
}

export const BlogArticle = ({ article }: IProps) => {
  const { title, mainImage, body, date } = article;
  const pathname = usePathname();

  return (
    <div className={styles.article}>
      <h1 className={styles.article__title}>{title}</h1>

      <div className={styles.article__shareBlock}>
        <p>Поділитись</p>
        {SHARE_ICONS.map((icon) => (
          <a
            key={icon.title}
            href={`${icon.link}${process.env.NEXT_PUBLIC_API_ENDPOINT_CANONICAL}${pathname}`}
            title={icon.title}
            target="_blank"
            className={classNames(
              styles.article__shareBlock__icon,
              styles[`article__shareBlock__icon--${icon.title}`],
            )}
          >
            <icon.icon />
          </a>
        ))}
      </div>

      <p className={styles.article__date}>{date}</p>

      <div className={styles.article__mainImage}>
        <ImageLoader
          width={500}
          height={600}
          image={mainImage}
          alt={`${IMAGE_ALT_TEXT.articleImage} ${title}`}
        />
      </div>

      <ContentConstructor body={body} />
    </div>
  );
};
