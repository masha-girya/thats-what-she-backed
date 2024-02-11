import Link from 'next/link';
import { IArticle } from '@/types';
import { ROUTES } from '@/constants';
import MockImg from './assets/IMG_5068.jpg';
import styles from './blog-card.module.scss';
import Image from 'next/image';

interface IProps {
  card: Omit<IArticle, 'body'>;
}

export const BlogCard = (props: IProps) => {
  const { card } = props;
  const { title, capture, slug, date } = card;
  // const [currentImage, setCurrentImage] = useState('');
  // const [loading, setLoading] = useState(true);

  // const fetchImage = () => {
  //   const loadingImage = new Image();
  //   loadingImage.src = `${API_ENDPOINT_BLOG_MEDIA}/${thumbnail_image.meta.download_url}`;

  //   loadingImage.onload = () => {
  //     setCurrentImage(loadingImage.src);
  //     setLoading(false);
  //   };
  // };

  // useEffect(() => {
  //   fetchImage();
  // }, [card]);

  return (
    <div className={styles.blogCardWrapper}>
      <Link href={`/${ROUTES.blog}/${slug}`} className={styles.blogCard}>
        {/* <SkeletonWrapper value={!loading} height={224} borderRadius={20}> */}
        <div className={styles.blogCard__imageBox}>
          <Image
            width={100}
            height={224}
            layout="responsive"
            alt={title}
            src={MockImg.src}
            className={styles.blogCard__image}
          />
        </div>
        {/* </SkeletonWrapper> */}
        <p className={styles.blogCard__title}>{title}</p>
        <p className={styles.blogCard__caption}>{capture}</p>
        <p className={styles.blogCard__date}>{date}</p>
      </Link>
    </div>
  );
};
