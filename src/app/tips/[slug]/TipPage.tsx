import { Suspense } from 'react';
import {
  RecipeSticker,
  Tip,
  ServerErrorPlug,
  BackButton,
  LoadingPage,
  ShareSocials,
} from '@/components';
import { ERROR_TEXT } from '@/constants';
import { getTipBySlug } from '@/lib';
import styles from './tip-page.module.scss';

const TipPage = async ({ params }: any) => {
  const { tip } = await getTipBySlug(params.slug);

  if (!tip) {
    return <ServerErrorPlug text={ERROR_TEXT.tipInner} />;
  }

  const { title, mainImage, tips, conclusion } = tip;

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className={styles.tipPage}>
        <BackButton />
        <div className={styles.tipPage__container}>
          <h1 className={styles.tipPage__title}>{title}</h1>
          <ShareSocials />
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
