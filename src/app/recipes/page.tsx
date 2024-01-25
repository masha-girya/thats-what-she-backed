import { RecipesList } from '@/components/recipes-list';
import styles from './index.module.scss';

const Recipes = () => {
  return (
    <main className={styles.recipes}>
      <RecipesList />
    </main>
  );
};

export default Recipes;
