export interface IBlog {
  articles: IArticle[];
  articlesAmount: number;
}

export interface IArticle {
  slug: string;
  title: string;
  capture: string;
  mainImage: string;
  date: string;
  body: IArticleBody[];
}

export interface IArticleBody {
  text: string[],
  images: string[],
}