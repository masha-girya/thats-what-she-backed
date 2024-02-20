import { ContentConstructor, ImageLoader, ShareSocials } from '@/components';
import { IArticle } from '@/types';
import { IMAGE_ALT_TEXT } from '@/constants';
import styles from './blog-article.module.scss';

interface IProps {
  article: IArticle;
}

export const BlogArticle = ({ article }: IProps) => {
  const { title, mainImage, body, date } = article;
  return (
    <div className={styles.article}>
      <h1 className={styles.article__title}>{title}</h1>

      <ShareSocials />

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
