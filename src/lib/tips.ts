
import { ROUTES } from "@/constants";
import { ITips } from "@/types/tips.type";
import { endpoint } from "@/utils/endpoint";

export async function getAllTips() {
  try {
    const data = await fetch(`${endpoint}/${ROUTES.tips}`);
    const parsedData: { tips: ITips[] } = await data.json();

    return parsedData.tips.map((tip) => ({
      slug: tip.slug,
      title: tip.title,
      mainImage: tip.mainImage,
    }));
  } catch (error) {
    console.error(error);
  }
}

export async function getTipBySlug(slug: string) {
  try {
    const data = await fetch(`${endpoint}/${ROUTES.tips}/${slug}`);

    return data.json();
  } catch (error) {
    console.error(error);
  }
}