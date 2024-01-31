
import { RecipesList } from '@/components';
import styles from './Recipes.module.scss';

const Recipes = () => {
  return (
    <main className={styles.recipes}>
      <RecipesList />
    </main>
  );
};

export default Recipes;
