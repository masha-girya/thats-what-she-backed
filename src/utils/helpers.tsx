import { IRecipeCard } from "@/types/recipe.type";

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

      result.push(
        <a
          href={part.slice(linkTextIndexLast + 2, part.length - 1)}
          target="_blank"
          className={classNames[0]}
        >
          {part.slice(linkTextIndexFirst + 1, linkTextIndexLast)}
        </a>
      );
    } else {
      result.push(<p className={classNames[1]}>{part}</p>);
    }
  });

  return result;
};
