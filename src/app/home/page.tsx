"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
import { IRecipe } from "@/types/recipe.type";
import { getLastRecipe } from "@/lib/recipes";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { CakeIcon } from "@/components/icons/CakeIcon";

const Home = () => {
  const [recipe, setRecipe] = useState<null | IRecipe>(null);
  const router = useRouter();

  const handleRouteToRecipes = useCallback(() => {
    router.push("/recipes");
  }, []);

  const loadRecipe = useCallback(async() => {
    const res = await getLastRecipe()
    if(res) {
      setRecipe(res.recipe)
    }
  }, [])

  useEffect(() => {
    loadRecipe()
  }, [])

  return (
    <main className={styles.container}>
      <div className={styles.home}>
        <h1 className={styles.home__title}>
          Так вона спекла — рецепти з повагою та любов'ю до їжі
        </h1>
        <h2 className={styles.home__subtitle}>
          Ви тут, щоб надихнутись випічкою, щоб приготувати її разом з моїми рецептами, перевіреними часом, друзями та людьми, які з довірою замовляли у мене торти.<br/>
          Я тут, щоб надихнути вас.
        </h2>
        {/* <h2 className={styles.home__subtitle}>Кожен рецепт написаний детально, розкриваючи кожне питання, яке може стати у вас на шляху його приготування</h2> */}
        <button
          className={styles.button}
          onClick={handleRouteToRecipes}
          type="button"
        >
            <ArrowIcon />
            <h1>До рецептів</h1>
        </button>
      </div>
      <div className={styles.recipe}>
        <Image
            src={recipe?.mainImage || ''}
            alt={recipe?.title || ''}
            width={600}
            height={1000}
            layout="responsive"
            loading="lazy"
        />
        {/* <img src={recipe?.mainImage}/> */}
        <Link href={`/recipes/${recipe?.slug}`} className={styles.recipe__link}>
            <h1>Нещодавній рецепт</h1>
           <p>{recipe?.title}</p>
        </Link>
      </div>
    </main>
  );
};

export default Home;
