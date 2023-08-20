import Image from "next/image";
import styles from "./index.module.scss";
import { getRecipeBySlug } from "@/lib/recipes";
import RecipeStep from "@/components/recipe-step";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { IRecipe } from "@/types/recipe.type";

const RecipePage = ({ recipe }: any) => {
  const {
    title,
    description,
    mainImage,
    ingredients,
    steps,
    bakingTime,
    formSize,
    amount,
    tips,
  } = recipe;

  const tipsNames = Object.keys(tips);

  return (
    <div className={styles.recipe}>
      <article className={styles.recipe__header}>
        <h1 className={styles.recipe__header__title}>
          {title}
        </h1>
        <div className={styles.recipe__tipBox}>
          <div className={styles.recipe__tipList}>
            <h5>Нотатки до рецепту:</h5>
            {tipsNames.map((tip) => (
              <a
                href={`#${tip}`}
                key={tip}
                className={styles.recipe__tipList__tip}
              >
                {tip}
              </a>
            ))}
          </div>
          <div className={styles.recipe__tipList}>
            <h5>Основні процеси:</h5>
            {Object.keys(steps).map((tip) => (
              <a
                href={`#${tip}`}
                key={tip}
                className={styles.recipe__tipList__tip}
              >
                {tip}
              </a>
            ))}
          </div>
        </div>
        <p className={styles.recipe__header__descFirst}>
          {description[0]}
        </p>
        <Image
          src={mainImage || ""}
          alt={title || ""}
          width={600}
          height={600}
          layout="responsive"
          loading="lazy"
        />
        <div className={styles.recipe__header__rightCol}>
          {description.slice(1).map((item: any) => (
            <p key={item.slice(0, 10)}>{item}</p>
          ))}
        </div>
      </article>
      <div className={styles.recipe__prep}>
        <h3>
          <span className={styles.recipe__prep__title}>⏳ час приготування: </span>
          {bakingTime}
        </h3>
        <h3>
          <span className={styles.recipe__prep__title}>🍽️ кількість порцій: </span>
          {amount}
        </h3>
        <h3>
          <span className={styles.recipe__prep__title}>🥧 розмір форми: </span>
          {formSize}
        </h3>
      </div>
      <RecipeStep ingredients={ingredients} steps={steps} />
      {tipsNames.map((tip) => (
        <div key={tip} className={styles.tipText}>
          <h1 id={tip}>{tip}</h1>
          <p>{tips[tip]}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipePage;

export const getServerSideProps: GetServerSideProps<{
  recipe: IRecipe;
}> = async (context: GetServerSidePropsContext) => {
  const { params } = context;
  const recipe = await getRecipeBySlug(params?.slug as string);

  return {
    props: { recipe },
  };
};
