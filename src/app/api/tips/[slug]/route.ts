import tips from "@/data/tips.json";
import { getData } from "@/utils/helpers";

export async function GET(req: any, { params }: any) {
  const tip = tips.data.find((item) => item.slug === params.slug);

  return getData(tip, "tip");
}
