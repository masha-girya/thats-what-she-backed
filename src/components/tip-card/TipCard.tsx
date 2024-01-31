import Link from 'next/link';
import { ITipShort } from '@/types';
import { ROUTES } from '@/constants';
import styles from './tip-card.module.scss';

interface IProps {
  tip: ITipShort;
}

export const TipCard = ({ tip }: IProps) => {
  const { mainImage, title, slug } = tip;

  return (
    <Link href={`${ROUTES.tips}/${slug}`} className={styles.tipCard}>
      <div className={styles.tipCard__image}>
        <img src={mainImage} alt={`Фото ${title}`} />
      </div>
      <h3 className={styles.tipCard__title}>{title}</h3>
    </Link>
  );
};
