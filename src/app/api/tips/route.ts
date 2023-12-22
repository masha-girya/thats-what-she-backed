import tips from "@/data/tips.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ tips: tips.data });
}