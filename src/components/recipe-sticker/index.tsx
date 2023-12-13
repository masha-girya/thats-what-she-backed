import styles from "./index.module.scss";

interface IProps {
  children: React.ReactNode
}

export const RecipeSticker = ({ children }: IProps) => {
  return (
    <div className={styles.recipeSticker}>
      <div className={styles.recipeSticker__clip}>📌</div>
      {children}
    </div>
  );
};
