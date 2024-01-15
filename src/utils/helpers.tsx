import { ERROR_TEXT } from "@/constants";
import { IRecipeCard } from "@/types";
import { NextResponse } from "next/server";

export async function getData(data: any, keyword: string, customReturnData?: any) {
  try {
    if(!data) {
      return new NextResponse(ERROR_TEXT.notFound, { status: 404 });
    }

    return NextResponse.json(customReturnData ?? { [keyword]: data });
  } catch {
    return new NextResponse(ERROR_TEXT.serverError, { status: 500 });
  }
}

export const getFavRecipes = (favRecipes: IRecipeCard[], item: IRecipeCard) => {
  let itemToSet = "";

  if (favRecipes.find((recipe) => recipe.title === item.title)) {
    itemToSet = JSON.stringify(
      favRecipes.filter((recipe) => recipe.title !== item.title)
    );
  } else {
    itemToSet = JSON.stringify([...favRecipes, item]);
  }

  return itemToSet;
};

export const linkCutter = (text: string, classNames: string[]) => {
  const splittedText = text.split("*LINK*");
  const result: JSX.Element[] = [];

  splittedText.forEach((part, i) => {
    if (part[0] === "[") {
      const linkTextIndexFirst = part.indexOf("[");
      const linkTextIndexLast = part.indexOf("]");

      const href = part.slice(linkTextIndexLast + 2, part.length - 1);

      result.push(
        <a
          key={href}
          href={href}
          target="_blank"
          className={classNames[0]}
        >
          {part.slice(linkTextIndexFirst + 1, linkTextIndexLast)}
        </a>
      );
    } else {
      result.push(<p key={part} className={classNames[1]}>{part}</p>);
    }
  });

  return result;
};

export const getLastImages = (stepArr: any[]) =>
stepArr
  .map((ar) => Object.keys(ar))
  .flat()
  .lastIndexOf("image");
