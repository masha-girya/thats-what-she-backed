import { TipCard, ServerErrorPlug } from '@/components';
import { ERROR_TEXT, TIPS_PAGE_TEXT } from '@/constants';
import { getAllTips } from '@/lib';
import styles from './tips.module.scss';

const Tips = async () => {
  const { tips } = await getAllTips();

  if (!tips) {
    return <ServerErrorPlug text={ERROR_TEXT.tips} />;
  }

  return (
    <main className={styles.tips}>
      <h1 className={styles.tips__title}>{TIPS_PAGE_TEXT.title}</h1>
      <div className={styles.tips__list}>
        {tips.map((tip) => (
          <TipCard key={tip.slug} tip={tip} />
        ))}
      </div>
    </main>
  );
};

export default Tips;
