import { getTipBySlug } from "@/lib";
import { ITips } from "@/types";

export const getTip = async (slug: string) => {
  try {
    const tips: { tip: ITips } = await getTipBySlug(slug);

    return { res: tips.tip };
  } catch (error) {
    console.error(error);
    return { res: null };
  }
};
