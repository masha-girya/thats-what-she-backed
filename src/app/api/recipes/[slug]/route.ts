import recipes from "@/data/recipes.json";
import { NextRequest, NextResponse } from "next/server";
// import type from 'next-connect';
import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

// export const corsHeaders = {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//     "Access-Control-Allow-Headers": "Content-Type, Authorization",
//   };

//   export async function OPTIONS() {
//     return NextResponse.json({}, { headers: corsHeaders });
//   }

//   export async function GET() {
//     return NextResponse.json({ foo: "bar" }, { headers: corsHeaders });

//   }

export async function GET(req: any, { params }: any) {
  const recipe = recipes.data.find((item) => item.slug === params.slug);

  try {
    if (!recipe) {
      return new NextResponse("not found", { status: 404 });
    }

    return NextResponse.json({recipe});
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
