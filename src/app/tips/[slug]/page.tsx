import { Suspense } from 'react';
import {
  RecipeSticker,
  Tip,
  ServerErrorPlug,
  BackButton,
  LoadingPage,
} from '@/components';
import { getTipBySlug } from '@/lib';
import { ITips } from '@/types';
import { ERROR_TEXT } from '@/constants';
import styles from './index.module.scss';

async function getTip(slug: string) {
  try {
    const tips: { tip: ITips } = await getTipBySlug(slug);

    return { res: tips.tip };
  } catch (error) {
    console.error(error);
    return { res: null };
  }
}

const TipPage = async ({ params }: any) => {
  const { res } = await getTip(params.slug);

  if (!res) {
    return <ServerErrorPlug text={ERROR_TEXT.tipInner} />;
  }

  const { title, mainImage, tips, conclusion } = res as ITips;

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className={styles.tipPage}>
        <BackButton />
        <div className={styles.tipPage__container}>
          <h1 className={styles.tipPage__title}>{res.title}</h1>
          <img
            className={styles.tipPage__mainImage}
            src={mainImage}
            alt={`Фото ${title}`}
          />

          {tips.map((tip, i) => (
            <RecipeSticker key={i}>
              <Tip tip={tip} />
            </RecipeSticker>
          ))}

          <div className={styles.tipPage__conclusion}>
            {conclusion.map((text, i) => (
              <p key={i} className={styles.tipPage__conclusion__text}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default TipPage;
