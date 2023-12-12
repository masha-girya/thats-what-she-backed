import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";
import { getLastRecipe } from "@/lib/recipes";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { RecipesList } from "@/components/recipes-list";

async function getRecipe() {
  try {
    const recipe = await getLastRecipe();
    return { res: recipe.recipe };
  } catch (error) {
    console.log("Error in fetching data");
    return { res: error };
  }
}

const Home = async() => {
  const { res } = await getRecipe();
  const { title, mainImage, slug } = res;

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
        <Link href={`/recipes/${slug}`} className={styles.recipe}>
          <Image
            src={mainImage || ""}
            alt={title || ""}
            width={600}
            height={1000}
            layout="responsive"
            loading="lazy"
          />
          <div className={styles.recipe__link}>
            <h1>Нещодавній рецепт</h1>
            <p>{title}</p>
          </div>
        </Link>
      </div>
      <RecipesList />
    </main>
  );
};

export default Home;
