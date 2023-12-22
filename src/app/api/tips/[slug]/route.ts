import tips from "@/data/tips.json";
import { NextResponse } from "next/server";

export async function GET(req: any, { params }: any) {
  try {
    const tip = tips.data.find((item) => item.slug === params.slug);

    if (!tip) {
      return new NextResponse("not found", { status: 404 });
    }

    return NextResponse.json({ tip });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
