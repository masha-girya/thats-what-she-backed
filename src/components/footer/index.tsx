import { SOCIALS } from "@/constants";
import { Nav } from "../nav";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <Nav isFooter />
        <ul className={styles.socials}>
          {SOCIALS.map(item => (
            <li>
              <a href={item.link} title={item.name} target="_blanc">
                {<item.icon/>}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footer__bottom}>
        <p>
          © Thats What She Baked. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer;