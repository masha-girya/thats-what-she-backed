import { Socials } from "src/components";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__bottom}>
        <p>© Thats What She Baked. All rights reserved</p>
      </div>
      <div className={styles.footer__top}>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
