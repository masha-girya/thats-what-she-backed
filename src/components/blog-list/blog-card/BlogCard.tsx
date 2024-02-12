import Link from 'next/link';
import { IArticle } from '@/types';
import { ROUTES } from '@/constants';
import styles from './blog-card.module.scss';
import { ImageLoader } from '@/components/image-loader';

interface IProps {
  card: Omit<IArticle, 'body'>;
}

export const BlogCard = (props: IProps) => {
  const { card } = props;
  const { title, capture, slug, date, mainImage } = card;

  return (
    <div className={styles.blogCardWrapper}>
      <Link href={`/${ROUTES.blog}/${slug}`} className={styles.blogCard}>
        <div className={styles.blogCard__imageBox}>
          <ImageLoader
            width={380}
            height={224}
            alt={title}
            image={mainImage}
            styles={styles.blogCard__image}
          />
        </div>
        <p className={styles.blogCard__title}>{title}</p>
        <p className={styles.blogCard__caption}>{capture}</p>
        <p className={styles.blogCard__date}>{date}</p>
      </Link>
    </div>
  );
};
