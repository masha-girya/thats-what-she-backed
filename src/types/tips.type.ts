export interface ITips {
  slug: string;
  mainImage?: string;
  title: string;
  description: string[];
  tips: ITip[];
}

export interface ITip {
  title: string;
  text: string[];
  conclusion: string[];
  image?: string[];
}
