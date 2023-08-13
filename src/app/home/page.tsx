import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";
import { getLastRecipe } from "@/lib/recipes";
import { ArrowIcon } from "@/components/icons/ArrowIcon";

async function getRecipe() {
  try {
    const recipe = await getLastRecipe();
    return { recipe };
  } catch (error) {
    console.log("Error in fetching data");
    return { res: { error } };
  }
}

const Home = async() => {
//   const { recipe } = await getRecipe();
//   const { title, mainImage, slug } = recipe.recipe;

  return (
    <main className={styles.container}>
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
          <h1>До рецептів</h1>
        </Link>
      </div>
      {/* <div className={styles.recipe}>
        <Image
          src={mainImage || ""}
          alt={title || ""}
          width={600}
          height={1000}
          layout="responsive"
          loading="lazy"
        />
        <Link href={`/recipes/${slug}`} className={styles.recipe__link}>
          <h1>Нещодавній рецепт</h1>
          <p>{title}</p>
        </Link>
      </div> */}
    </main>
  );
};

export default Home;
