import { ERROR_TEXT } from "@/constants";
import recipes from "@/data/recipes.json";
import { NextResponse } from "next/server";

export async function GET(req: any, { params }: any) {
  try {
    const recipe = recipes.data.find((item) => item.slug === params.slug);

    if (!recipe) {
      return new NextResponse(ERROR_TEXT.notFound, { status: 404 });
    }

    return NextResponse.json({
      title: recipe.title,
      image: recipe.mainImage,
      optionalDesc: "optionalDesc" in recipe ? recipe.optionalDesc : "",
    });
  } catch (error) {
    return new NextResponse(ERROR_TEXT.serverError, { status: 500 });
  }
}
