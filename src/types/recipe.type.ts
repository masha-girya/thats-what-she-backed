import { Category } from './category.type';
import { IIngredients } from './ingredients.type';

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
  allIngredients: string[];
  steps: ISteps;
  tips: ITipsRecipe;
  totalFavs: number;
}

export interface IRecipeCard
  extends Pick<IRecipe, 'title' | 'slug' | 'mainImage'> {}

export interface ITipsRecipe {
  [key: string]: string;
}

export interface ISteps {
  [key: keyof IIngredients]: any[];
}
