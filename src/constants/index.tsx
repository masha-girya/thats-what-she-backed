import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { PinterestIcon } from "@/components/icons/PinterestIcon";
import { TikTokIcon } from "@/components/icons/TikTokIcon";

export const NAV = {
  home: ["Головна", "home"],
  recipes: ["Рецепти", "recipes"],
  tips: ["Тіпси", "tips"],
  blog: ["Блог", "blog"],
  "about-me": ["Про мене", "about-me"],
};

export const SOCIALS = [
  {
    name: "Instagram",
    icon: InstagramIcon,
    link: "https://www.instagram.com/myseventhapril",
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    link: "https://www.tiktok.com/thats_what_she_baked",
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

export const ROUTES = {
  favRecipes: "fav-recipes",
}

export const LOCAL_STORAGE = {
  favRecipes: "fav-recipes",
}