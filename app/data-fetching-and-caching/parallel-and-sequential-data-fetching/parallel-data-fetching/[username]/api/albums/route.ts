import { NextResponse } from "next/server";
import { PageProps } from "../../page";
import ArtistSchema from "../../schema/ArtistSchema";
import AlbumSchema from "../../schema/AlbumSchema";

export async function GET(req: Request, { params }: PageProps) {
   const { username } = await params;

   const mockAlbums: AlbumSchema[] = [
      {
         id: 1,
         name: "Album1",
         artist: "chorao",
      },
      {
         id: 2,
         name: "Album2",
         artist: "chorao",
      },
   ];

   const response = new Promise((resolve) => {
      const result = mockAlbums.filter((album) => album.artist.toLowerCase() === username.toLowerCase());

      return resolve(result ?? undefined);
   });

   const data = await response;

   return NextResponse.json({ data });
}
