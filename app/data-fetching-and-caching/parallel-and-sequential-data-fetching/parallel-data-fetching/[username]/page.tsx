import { config } from "./config";
import AlbumSchema from "./schema/AlbumSchema";
import ArtistService from "./services/ArtistService";

export async function getAlbums(username: string) {
   const res = await fetch(`${config.url}/${username}/api/albums`);
   return res.json();
}

export interface PageProps {
   params: Promise<{ username: string }>;
}
async function Page({ params }: PageProps) {
   const { username } = await params;
   const artistData = ArtistService.getArtist(username);
   const albumsData = getAlbums(username);

   const [artist, albums] = await Promise.all([artistData, albumsData]);

   return (
      <>
         <h1>{artist.data.name}</h1>
         <Albums albums={albums} />
      </>
   );
}
interface AlbumsProps {
   albums: AlbumSchema[];
}

const Albums: React.FC<AlbumsProps> = ({ albums }) => {
   return (
      <>
         {albums.map((album) => {
            <h1 key={album.id}>{album.name}</h1>;
         })}
      </>
   );
};

export default Page;
