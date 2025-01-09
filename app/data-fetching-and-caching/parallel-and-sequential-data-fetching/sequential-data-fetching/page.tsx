import { Suspense } from "react";
import Playlists from "./components/Playlists";
import ArtistService from "./services/ArtistService";

async function PageSequentialDataFetching() {
   const artist = await ArtistService.getArtist("artist.name1");

   return (
      <>
         <h1>{artist?.name}</h1>

         <Suspense fallback={<div>Loading...</div>}>
            <Playlists artistID={Number(artist?.id)} />
         </Suspense>
      </>
   );
}

export default PageSequentialDataFetching;
