import { ServerErrorPlug } from '@/components';
import { ERROR_TEXT } from '@/constants';
import styles from './about-me.module.scss';

const AboutMe = () => {
  return (
    <main className={styles.about}>
      <ServerErrorPlug text={ERROR_TEXT.about} />
    </main>
  );
};

export default AboutMe;
