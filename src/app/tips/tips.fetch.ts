import { getAllTips } from "@/lib";
import { ITipShort } from "@/types";

export const getTips = async() => {
  try {
    const tips = (await getAllTips()) as ITipShort[];

    return { res: tips };
  } catch (error) {
    console.error(error);
    return { res: null };
  }
}