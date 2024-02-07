import { ITip } from '@/types';
import { linkCutter } from '@/utils';
import styles from './tip.module.scss';

interface IProps {
  tip: ITip;
}

export const Tip = (props: IProps) => {
  const { tip } = props;

  return (
    <div className={styles.tip}>
      <h3 className={styles.tip__title}>{tip.title}</h3>

      {Array.isArray(tip.text) &&
        tip.text.map((tipText) => (
          <div key={tipText} className={styles.tip__textBox}>
            {linkCutter(tipText, [styles.tip__text])}
          </div>
        ))}

      {tip.image && (
        <div className={styles.tip__imageBox}>
          {tip.image.map((tipImage, i) => (
            <img
              key={tipImage}
              className={styles.tip__image}
              src={tipImage}
              alt={`${tip.title} #${i}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
