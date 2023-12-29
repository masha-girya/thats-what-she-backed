// "use client";

// import { useRouter } from "next/navigation";
import Link from "next/link";
import { BannerRecipe, RecipesList, ArrowIcon } from "@/components";
import { ANCHORS } from "@/constants";
import styles from "./page.module.scss";

export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   router.push("/home");
  // }, []);

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
          <Link href={`#${ANCHORS.recipes}`} className={styles.button}>
            <ArrowIcon />
            <p className={styles.button__text}>До рецептів</p>
          </Link>
        </div>
        <BannerRecipe />
      </div>
      <RecipesList isBlock />
    </main>
  );
}
