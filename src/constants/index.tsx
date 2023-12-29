import {
  InstagramIcon,
  LinkedInIcon,
  PinterestIcon,
  TikTokIcon,
} from "@/components/icons";

export const ANCHORS = {
  recipes: "recipes",
};

export const LOCAL_STORAGE = {
  favRecipes: "fav-recipes",
};

export const ROUTES = {
  home: "/",
  favRecipes: "fav-recipes",
  tips: "tips",
  recipes: "recipes",
  lastRecipe: "last-recipe",
  blog: "blog",
  about: "about-me",
};

export const NAV = {
  home: ["Головна", ROUTES.home],
  recipes: ["Рецепти", ROUTES.recipes],
  tips: ["Тіпси", ROUTES.tips],
  // blog: ["Блог", ROUTES.blog],
  // about: ["Про мене", ROUTES.about],
};

export const SOCIALS = [
  {
    name: "Instagram",
    icon: InstagramIcon,
    link: "https://www.instagram.com/thats_what_she_baked",
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    link: "https://www.tiktok.com/@thats_what_she_baked?_t=8ian9tfWHor",
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/maria-girya",
  },
  {
    name: "Pinterest",
    icon: PinterestIcon,
    link: "https://www.pinterest.com/mashagiv/",
  },
];

export const ERROR_TEXT = {
  recipeInner: "Упс! Такого рецепту немає...",
  recipes: "Упс! Кудись поділись всі рецепти... Вже шукаємо!",
  tips: "Упс! Такої замітки не існує...",
  tipInner: "Упс! Хтось з'їв всі замітки!",
  about: "Уявляєте, написання контенту для цього блоку зайняло в мене більше часу ніж придумати сайт!",
  blog: "Перша стаття блогу буде зовсім-зовсім скоро!",
}