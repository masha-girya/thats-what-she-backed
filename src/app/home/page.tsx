import Link from "next/link";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { RecipesList } from "@/components/recipes-list";
import { BannerRecipe } from "@/components/banner-recipe";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.home}>
          <h1 className={styles.home__title}>
            Так вона спекла — рецепти з повагою та любов'ю до їжі
          </h1>
          <h2 className={styles.home__subtitle}>
            Ви тут, щоб надихнутись випічкою, щоб приготувати її разом з моїми
            рецептами, перевіреними часом, друзями та людьми, які з довірою
            замовляли у мене торти.
            <br />Я тут, щоб надихнути вас.
          </h2>
          {/* <h2 className={styles.home__subtitle}>Кожен рецепт написаний детально, розкриваючи кожне питання, яке може стати у вас на шляху його приготування</h2> */}
          <Link href="/recipes" className={styles.button}>
            <ArrowIcon />
            <p className={styles.button__text}>До рецептів</p>
          </Link>
        </div>
        <BannerRecipe />
      </div>
      <RecipesList />
    </main>
  );
};

export default Home;
