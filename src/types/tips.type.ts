export interface ITips {
  slug: string;
  mainImage?: string;
  title: string;
  description: string[];
  tips: ITip[];
  conclusion: string[];
}

export interface ITip {
  title: string;
  text: string[];
  conclusion: string[];
  image?: string[];
}

export interface ITipShort
  extends Pick<ITips, 'slug' | 'title' | 'mainImage'> {}
