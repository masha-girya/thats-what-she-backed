import classNames from "classnames";
import { RecipesListClient } from "./recipe-list-client";
import { ServerErrorPlug } from "../server-error-plug";
import { getAllRecipes } from "@/lib/recipes";
import { ANCHORS, ERROR_TEXT } from "@/constants";
import styles from "./index.module.scss";

interface IProps {
  isBlock?: boolean;
}

async function getRecipes() {
  try {
    const recipes = await getAllRecipes();
    return { res: recipes };
  } catch (error) {
    console.error(error);
    return { res: null };
  }
}

export const RecipesList = async ({ isBlock }: IProps) => {
  const { res } = await getRecipes();

  if (!res) {
    return <ServerErrorPlug text={ERROR_TEXT.recipeInner} />;
  }

  return (
    <div
      id={ANCHORS.recipes}
      className={classNames(styles.recipesList, {
        [styles.recipesList_isBlock]: isBlock,
      })}
    >
      {Array.isArray(res) && <RecipesListClient recipes={res} />}
    </div>
  );
};
