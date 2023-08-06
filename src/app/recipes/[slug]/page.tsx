"use client";

import { getRecipeBySlug } from "@/lib/recipes";
import Image from "next/image";
import { IRecipe } from "@/types/recipe.type";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import styles from "./index.module.scss";

const RecipePage = () => {
  const pathname = usePathname();
  const slug = pathname.slice(9)

  const [recipe, setRecipe] = useState<null | IRecipe>(null);

  const loadRecipe = useCallback(async(slug: string) => {
    const res = await getRecipeBySlug(slug)
    setRecipe(res.recipe)
  }, [])

  useEffect(() => {
    loadRecipe(slug)
  }, [slug])

  return (
    <div className={styles.recipe}>
        <div className={styles.recipe__header}>
            <h1 className={styles.recipe__header__title}>
                {recipe?.title}
            </h1>
            <p className={styles.recipe__header__descFirst}>
                {recipe?.description[0]}
            </p>
            <Image
                src={recipe?.mainImage || ''}
                alt={recipe?.title || ''}
                width={600}
                height={600}
                layout="responsive"
                loading="lazy"
            />
            <div className={styles.recipe__header__rightCol}>
                {recipe?.description.slice(1).map(item => (
                    <p>{item}</p>
                ))}
            </div>
        </div>
        <div className={styles.recipe__prep}>
            <h3>
                <span className={styles.recipe__prep__title}>Час приготування: </span>
                {recipe?.bakingTime}
            </h3>
            <h3>
                <span className={styles.recipe__prep__title}>Кількість порцій: </span>
                {recipe?.amount}
            </h3>
            <h3>
                <span className={styles.recipe__prep__title}>Розмір форми: </span>
                {recipe?.formSize}
            </h3>
        </div>
        <div className={styles.recipe__steps}>
            {recipe && (
                Object.keys(recipe.steps).map(step => (
                    <div>
                        <ul>
                            {recipe.ingredients[step].map(li => (
                                <li>{li}</li>
                            ))}
                        </ul>
                        <div>
                            {recipe.steps[step].map(item => {
                                if(item.text) {
                                    return <p>{item.text}</p>
                                } else {
                                    return <img src={item.image}/>
                                }
                            })}
                        </div>
                    </div>
                ))
            )}
        </div>
    </div>
);
};

export default RecipePage;
