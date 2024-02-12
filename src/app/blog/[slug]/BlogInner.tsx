import { Suspense } from 'react';
import {
  BackButton,
  BlogArticle,
  LoadingPage,
  ServerErrorPlug,
} from '@/components';
import { getArticle } from './blog.fetch';
import { ERROR_TEXT } from '@/constants';
import styles from './blog-inner.module.scss';

const BlogInner = async ({ params }: any) => {
  const { article } = await getArticle(params.slug);

  if (!article) {
    return <ServerErrorPlug text={ERROR_TEXT.articleInner} />;
  }

  return (
    <main className={styles.blogInner}>
      <div className={styles.blogInner__backBtn}>
        <BackButton />
      </div>

      <section className={styles.blogInner__container}>
        <Suspense fallback={<LoadingPage />}>
          <BlogArticle article={article} />
        </Suspense>
      </section>
    </main>
  );
};

export default BlogInner;
