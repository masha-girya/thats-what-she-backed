import tips from "@/data/tips.json";
import { getData } from "@/utils/helpers";

export async function GET() {
  const tipsData = tips.data;

  return getData(tipsData, "tips");
}