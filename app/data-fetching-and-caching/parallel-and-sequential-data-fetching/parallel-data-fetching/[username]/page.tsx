import AlbumSchema from "./schema/AlbumSchema";
import AlbumService from "./services/AlbumService";
import ArtistService from "./services/ArtistService";

export interface PageProps {
   params: Promise<{ username: string }>;
}
async function Page({ params }: PageProps) {
   const { username } = await params;

   const artistData = ArtistService.getArtist(username);
   const albumsData = AlbumService.getAlbums(username);

   const [artist, albums] = await Promise.all([artistData, albumsData]);

   console.log(artist);
   console.log(albums);

   return (
      <>
         <h1>{artist.data?.name}</h1>
         <Albums albums={albums.data} />
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
