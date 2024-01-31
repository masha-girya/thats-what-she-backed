import { ServerErrorPlug } from '@/components';
import { ERROR_TEXT } from '@/constants';
import styles from './index.module.scss';

const AboutMe = () => {
  return (
    <main className={styles.about}>
      <ServerErrorPlug text={ERROR_TEXT.about} />
    </main>
  );
};

export default AboutMe;
