import Image from "next/image";
import Link from "next/link";
import { getLastRecipe } from "@/lib/recipes";
import styles from "./index.module.scss";

async function getRecipe() {
  try {
    const recipe = await getLastRecipe();
    return { res: recipe.recipe };
  } catch (error) {
    console.error(error);
    return { res: "Error in fetching data" };
  }
}

export const BannerRecipe = async () => {
  const { res } = await getRecipe();

  if (typeof res === "string") {
    return <></>;
  }

  const { title, mainImage, slug } = res;

  return (
    <Link href={`/recipes/${slug}`} className={styles.bannerRecipe}>
      <Image
        src={mainImage || ""}
        alt={title || ""}
        width={600}
        height={1000}
        layout="responsive"
        loading="lazy"
      />
      <div className={styles.bannerRecipe__link}>
        <h2>Нещодавній рецепт</h2>
        <p>{title}</p>
      </div>
    </Link>
  );
};
