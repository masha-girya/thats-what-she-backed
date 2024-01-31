import { ServerErrorPlug } from '@/components';
import { ERROR_TEXT } from '@/constants';
import styles from './Blog.module.scss';

const Blog = () => {
  return (
    <main className={styles.blog}>
      <ServerErrorPlug text={ERROR_TEXT.blog} />
    </main>
  );
};

export default Blog;
