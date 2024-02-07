import { BannerRecipe, RecipesList, LinkButton } from '@/components';
import { ANCHORS, BANNER_TEXT, BUTTONS_TEXT } from '@/constants';
import styles from './home.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.home}>
          <h1 className={styles.home__title}>{BANNER_TEXT.title}</h1>
          <h2 className={styles.home__subtitle}>
            {BANNER_TEXT.userGoal}
            <br />
            {BANNER_TEXT.myGoal}
          </h2>
          <LinkButton
            linkStyles={styles.home__linkButtonWrapper}
            link={`#${ANCHORS.recipes}`}
            text={BUTTONS_TEXT.toRecipes}
            isMain
          />
        </div>
        <BannerRecipe />
      </div>
      <RecipesList isBlock />
    </main>
  );
}
