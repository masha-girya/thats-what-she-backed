import Link from 'next/link';
import Image from 'next/image';
import { IArticle } from '@/types';
import { ROUTES } from '@/constants';
import MockImg from './assets/IMG_5068.jpg';
import styles from './blog-card.module.scss';

interface IProps {
  card: Omit<IArticle, 'body'>;
}

export const BlogCard = (props: IProps) => {
  const { card } = props;
  const { title, capture, slug, date } = card;

  return (
    <div className={styles.blogCardWrapper}>
      <Link href={`/${ROUTES.blog}/${slug}`} className={styles.blogCard}>
        <div className={styles.blogCard__imageBox}>
          <Image
            width={380}
            height={224}
            alt={title}
            src={MockImg.src}
            className={styles.blogCard__image}
          />
        </div>
        <p className={styles.blogCard__title}>{title}</p>
        <p className={styles.blogCard__caption}>{capture}</p>
        <p className={styles.blogCard__date}>{date}</p>
      </Link>
    </div>
  );
};
