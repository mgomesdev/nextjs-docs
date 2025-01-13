import { NextResponse } from "next/server";
import { PageProps } from "../page";

export async function GET(req: Request, { params }: PageProps) {
   const { id } = await params;
   const response = await fetch(`https://api.vercel.app/blog/${id}`);
   const data = await response.json();

   return NextResponse.json({ data });
}
