// "use client";

// import { useRouter } from "next/navigation";
import Link from 'next/link';
import { BannerRecipe, RecipesList, ArrowIcon } from '@/components';
import { ANCHORS, BANNER_TEXT, BUTTONS_TEXT } from '@/constants';
import styles from './page.module.scss';

export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   router.push("/home");
  // }, []);

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
          <Link href={`#${ANCHORS.recipes}`} className={styles.button}>
            <ArrowIcon />
            <p className={styles.button__text}>{BUTTONS_TEXT.toRecipes}</p>
          </Link>
        </div>
        <BannerRecipe />
      </div>
      <RecipesList isBlock />
    </main>
  );
}
