"use client";

import { useCallback } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
import { CakeIcon } from "@/components/icons/CakeIcon";

const Home = () => {
  const router = useRouter();
  const handleRouteToRecipes = useCallback(() => {
    router.push("/recipes");
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.home}>
        <h1 className={styles.home__title}>
          Так вона спекла — з повагою та любов'ю до їжі
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
          До рецептів
        </button>
      </div>
    </main>
  );
};

export default Home;
