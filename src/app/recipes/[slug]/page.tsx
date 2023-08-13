import Image from "next/image";
import styles from "./index.module.scss";
import { getRecipeBySlug } from "@/lib/recipes";

async function getRecipe(slug: string) {
  try {
    const recipe = await getRecipeBySlug(slug);
    return { res: { recipe } };
  } catch (error) {
    console.log("Error in fetching data");
    return { res: { error } };
  }
}

const RecipePage = async ({ params }: any) => {
//   const { res } = await getRecipe(params.slug);
//   const {
//     title,
//     description,
//     mainImage,
//     ingredients,
//     steps,
//     bakingTime,
//     formSize,
//     amount,
//   } = res.recipe.recipe;

  return (
    <div className={styles.recipe}>
      <div className={styles.recipe__header}>
        {/* <h1 className={styles.recipe__header__title}>{title}</h1> */}
        {/* <p className={styles.recipe__header__descFirst}>{description[0]}</p> */}
        {/* <Image
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
        </div> */}
      </div>
      <div className={styles.recipe__prep}>
        <h3>
          <span className={styles.recipe__prep__title}>Час приготування: </span>
          {/* {bakingTime} */}
        </h3>
        <h3>
          <span className={styles.recipe__prep__title}>Кількість порцій: </span>
          {/* {amount} */}
        </h3>
        <h3>
          <span className={styles.recipe__prep__title}>Розмір форми: </span>
          {/* {formSize} */}
        </h3>
      </div>
      <div className={styles.recipe__steps}>
        {/* {Object.keys(steps).map((step) => (
          <div key={step}>
            <h2 className={styles.recipe__steps__title}>{step}</h2>
            <ul className={styles.recipe__steps__ingredients}>
              {ingredients[step].map((li: any) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
            <div>
              {steps[step].map((item: any, i: number) => {
                if (item.text) {
                  return (
                    <p key={i} className={styles.recipe__steps__text}>
                        {item.text}
                    </p>
                  );
                }

                if (item.image && Array.isArray(item.image)) {
                  return (
                    <div key={i} className={styles.recipe__steps__imageBox}>
                        {item.image.map((img: any) => (
                            <div key={img} className={styles.recipe__steps__arrImage}>
                                <img className={styles.recipe__steps__arrImage} src={img} />
                            </div>
                        ))}
                    </div>
                  );
                } else {
                  return (
                    <div key={i} className={styles.recipe__steps__imageBox}>
                        <div className={styles.recipe__steps__image}>
                            <img src={item.image} className={styles.recipe__steps__image}/>
                        </div>
                    </div>
                  );
              }})}
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default RecipePage;