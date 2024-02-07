import { InnerLink } from '@/components';
import { ERROR_TEXT } from '@/constants';
import { IRecipe } from '@/types';
import { NextResponse } from 'next/server';

export const getData = async (
  data: any,
  keyword: string,
  customReturnData?: any,
) => {
  try {
    if (!data) {
      return new NextResponse(ERROR_TEXT.notFound, { status: 404 });
    }

    return NextResponse.json(customReturnData ?? { [keyword]: data });
  } catch {
    return new NextResponse(ERROR_TEXT.serverError, { status: 500 });
  }
};

export const getFavRecipes = (favRecipes: IRecipe[], recipe: IRecipe) => {
  let itemToSet = '';

  if (favRecipes.find((favRecipe) => favRecipe.slug === recipe.slug)) {
    itemToSet = JSON.stringify(
      favRecipes.filter((favRecipe) => favRecipe.slug !== recipe.slug),
    );
  } else {
    itemToSet = JSON.stringify([...favRecipes, recipe]);
  }

  return itemToSet;
};

export const linkCutter = (
  text: string,
  classNames: string[],
  isAnchor?: boolean,
) => {
  const splittedText = text.split('*LINK*');
  const result: JSX.Element[] = [];

  splittedText.forEach((part) => {
    if (part[0] === '[') {
      const linkTextIndexFirst = part.indexOf('[');
      const linkTextIndexLast = part.indexOf(']');

      const href = part.slice(linkTextIndexLast + 2, part.length - 1);

      result.push(
        <InnerLink
          key={href}
          href={href}
          content={part.slice(linkTextIndexFirst + 1, linkTextIndexLast)}
          style={classNames[1]}
          isAnchor={isAnchor}
        />,
      );
    } else {
      result.push(
        <p key={part} className={classNames[0]}>
          {part}
        </p>,
      );
    }
  });

  return result;
};

export const getLastImages = (stepArr: any[]) =>
  stepArr
    .map((ar) => Object.keys(ar))
    .flat()
    .lastIndexOf('image');
