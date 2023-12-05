import { getAllRecipes } from "@/lib/recipes";

async function getRecipes() {
  try {
    const recipes = await getAllRecipes();
    return { res: recipes };
  } catch (error) {
    console.log("Error in fetching data");
    return { res: error };
  }
}

export const RecipesList = async () => {
  const { res } = await getRecipes();
  console.log(res)

  return (
    <div>

    </div>
  )
}