import { TipCard, ServerErrorPlug } from '@/components';
import { ERROR_TEXT, TIPS_PAGE_TEXT } from '@/constants';
import { getTips } from './tips.fetch';
import styles from './Tips.module.scss';

const Tips = async () => {
  const { res } = await getTips();

  if (!res) {
    return <ServerErrorPlug text={ERROR_TEXT.tips} />;
  }

  return (
    <main className={styles.tips}>
      <h1 className={styles.tips__title}>{TIPS_PAGE_TEXT.title}</h1>
      <div className={styles.tips__list}>
        {res.map((tip) => (
          <TipCard key={tip.slug} tip={tip} />
        ))}
      </div>
    </main>
  );
};

export default Tips;
