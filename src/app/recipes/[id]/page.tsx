"use client";

import { getRecipeById } from "@/lib/recipes";
import { IRecipe } from "@/types/recipe.type";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const RecipePage = () => {
  const pathname = usePathname();
  const id = pathname.slice(9)

  const [recipe, setRecipe] = useState<null | IRecipe>(null);

  const loadRecipe = useCallback(async(id: string) => {
    const res = await getRecipeById(id)
    setRecipe(res.recipe)
  }, [])

  useEffect(() => {
    loadRecipe(id)
  }, [id])

  return (
    <div>
        {recipe?.title}
    </div>
);
};

export default RecipePage;
