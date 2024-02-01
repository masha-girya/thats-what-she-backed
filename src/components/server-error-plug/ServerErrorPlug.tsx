import { GlassIcon } from '@/components';
import styles from './server-error-plug.module.scss';

interface IProps {
  text: string;
}

export const ServerErrorPlug = ({ text }: IProps) => {
  return (
    <div className={styles.errorPlug}>
      <div className={styles.errorPlug__box}>
        <p className={styles.errorPlug__text}>{text}</p>
        <GlassIcon className={styles.errorPlug__icon} />
      </div>
    </div>
  );
};
