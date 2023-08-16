import Image from "next/image";
import styles from "./index.module.scss";
import { getRecipeBySlug } from "@/lib/recipes";
import RecipeStep from "@/components/recipe-step";

async function getRecipe(slug: string) {
  try {
    const recipe = await getRecipeBySlug(slug);
    return { res: recipe.recipe };
  } catch (error) {
    console.log("Error in fetching data");
    return { res: error };
  }
}

const RecipePage = async ({ params }: any) => {
  const { res } = await getRecipe(params.slug);
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
  } = res;

  const tipsNames = Object.keys(tips)

  return (
    <div className={styles.recipe}>
      <article className={styles.recipe__header}>
        <h1 className={styles.recipe__header__title}>
          {title}
        </h1>
        <div className={styles.recipe__tipBox}>
          <div className={styles.recipe__tipList}>
            <h5>Нотатки до рецепту:</h5>
            {tipsNames.map(tip => (
              <a href={`#${tip}`} key={tip} className={styles.recipe__tipList__tip}>
                {tip}
              </a>
            ))}
          </div>
          <div className={styles.recipe__tipList}>
            <h5>Основні процеси:</h5>
            {Object.keys(steps).map(tip => (
              <a href={`#${tip}`} key={tip} className={styles.recipe__tipList__tip}>
                {tip}
              </a>
            ))}
          </div>
        </div>
        <p className={styles.recipe__header__descFirst}>{description[0]}</p>
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
          <span className={styles.recipe__prep__title}>Час приготування: </span>
          {bakingTime}
        </h3>
        <h3>
          <span className={styles.recipe__prep__title}>Кількість порцій: </span>
          {amount}
        </h3>
        <h3>
          <span className={styles.recipe__prep__title}>Розмір форми: </span>
          {formSize}
        </h3>
      </div>
      <RecipeStep ingredients={ingredients} steps={steps}/>
      {tipsNames.map(tip => (
        <div key={tip} className={styles.tipText}>
          <h1 id={tip}>{tip}</h1>
          <p>{tips[tip]}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipePage;
