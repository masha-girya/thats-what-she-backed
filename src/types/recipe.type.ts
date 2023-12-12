import { Category } from "./category.type";
import { IIngredients } from "./ingredients.type";

export interface IRecipe {
  slug: string;
  mainImage: string;
  title: string;
  description: string[];
  optionalDesc?: string;
  category: Category;
  bakingTime: string;
  formSize: string;
  amount: string;
  ingredients: IIngredients;
  steps: ISteps;
  tips: ITips;
}

export interface IRecipeCard extends Pick<
  IRecipe, "title" | "slug" | "mainImage"
> {}

export interface ITips {
    [key: string]: string;
  }

export interface ISteps {
  [key: keyof IIngredients]: any[];
}