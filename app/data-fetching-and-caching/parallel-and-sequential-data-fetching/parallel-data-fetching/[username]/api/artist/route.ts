import { NextResponse } from "next/server";
import { PageProps } from "../../page";
import ArtistSchema from "../../schema/ArtistSchema";

export async function GET(req: Request, { params }: PageProps) {
   const { username } = await params;

   const mockArtist: ArtistSchema[] = [
      {
         id: 1,
         name: "chorao",
      },
      {
         id: 2,
         name: "Renato Russo",
      },
   ];

   const response = new Promise((resolve) => {
      const result = mockArtist.filter((artist) => artist.name.toLowerCase() === username.toLowerCase());

      return resolve(result ? result[0] : undefined);
   });

   const data = await response;

   return NextResponse.json({ data });
}
