import { RecipesList } from "@/components/recipes-list";
import styles from "./index.module.scss";

const Recipes = () => {
  return (
    <main className={styles.recipes}>
      <div className={styles.recipes__list}>
        <RecipesList />
      </div>
    </main>
  );
};

export default Recipes;
