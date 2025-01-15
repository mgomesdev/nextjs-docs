import { config } from "./config";
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
   // const albumsData = getAlbums(username);

   const [artist] = await Promise.all([artistData]);

   return (
      <>
         <h1>{artist.data.name}</h1>
      </>
   );
}
interface AlbumsProps {
   list: [];
}

const Albums: React.FC<AlbumsProps> = ({ list }) => {
   return <></>;
};

export default Page;
