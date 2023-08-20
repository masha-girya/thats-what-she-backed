import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";
import { getLastRecipe } from "@/lib/recipes";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { useCallback, useEffect, useState } from "react";
import { IRecipe } from "@/types/recipe.type";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

const Home = ({
    recipe,
  }: InferGetStaticPropsType<typeof getStaticProps>) => {

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
        <a href="/recipes" className={styles.button}>
          <ArrowIcon />
          <h1>До рецептів</h1>
        </a>
      </div>
      <div className={styles.recipe}>
        <img src={recipe?.mainImage} alt={recipe?.title || ""} />
        <a href={`/recipes/${recipe?.slug}`} className={styles.recipe__link}>
          <h1>Нещодавній рецепт</h1>
          <p>{recipe?.title}</p>
        </a>
      </div>
    </main>
  );
};

export default Home;


// export const getServerSideProps: GetServerSideProps<{
//   recipe: IRecipe
// }> = async () => {
//   const recipe = await getLastRecipe();

//   return { props: { recipe } };
// }

export const getStaticProps: GetStaticProps<{
  recipe: IRecipe
}> = async () => {
  const recipe = await getLastRecipe();

  return {
    props: { recipe },
  };
};