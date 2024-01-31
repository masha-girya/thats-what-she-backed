
import { RecipesList } from '@/components';
import styles from './recipes.module.scss';

const Recipes = () => {
  return (
    <main className={styles.recipes}>
      <RecipesList />
    </main>
  );
};

export default Recipes;
