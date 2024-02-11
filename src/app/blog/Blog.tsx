import { BlogList } from '@/components';
import styles from './blog.module.scss';

const Blog = () => {
  return (
    <main className={styles.blog}>
      <div className={styles.blog__banner}>
        <div className={styles.blog__banner__textBox}>
          <div className={styles.blog__banner__textBox__title}>
            Тут зібрані мої думки та досвід на тему їжі
          </div>
          <h2 className={styles.blog__banner__textBox__subTitle}>
            З подорожей по Україні та світу, про улюблені місця, куди я із
            задоволенням повертаюсь знову і знову, про місця, які хочу
            відвідати. Про чесність з клієнтами та творчість, через яку
            передається любов до людей і їжі.
          </h2>
        </div>
      </div>
      <BlogList />
    </main>
  );
};

export default Blog;
