import Image from 'next/image';
import { BlogList } from '@/components';
import { BLOG_PAGE_TEXT, IMAGE_ALT_TEXT } from '@/constants';
import BackgroundImage from './assets/IMG_4151.jpg';
import styles from './blog.module.scss';

const Blog = () => {
  return (
    <main className={styles.blog}>
      <Image
        alt={IMAGE_ALT_TEXT.blogBackground}
        width={100}
        height={400}
        src={BackgroundImage.src}
        className={styles.blog__image}
      />
      <div className={styles.blog__banner}>
        <div className={styles.blog__banner__textBox}>
          <div className={styles.blog__banner__textBox__title}>
            {BLOG_PAGE_TEXT.title}
          </div>
          <h2 className={styles.blog__banner__textBox__subTitle}>
            {BLOG_PAGE_TEXT.subTitle}
          </h2>
        </div>
      </div>
      <BlogList />
    </main>
  );
};

export default Blog;
