import { FavsRecipesHeader, Nav } from "@/components";
import { Logo } from "../logo";
import styles from "./index.module.scss";

export const HeaderDesktop = () => {
  return (
    <div className={styles.headerDesktop}>
      <div className={styles.headerDesktop__grid}>
        <Logo />
        <Nav />
        <FavsRecipesHeader />
      </div>
    </div>
  );
};
