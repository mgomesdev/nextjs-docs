import { Suspense } from "react";
import { Playlists } from "./components/Playlists";

function PageSequentialDataFetching() {
   const artist = {
      id: 1,
      name: "artist.name",
   };

   return (
      <>
         <h1>{artist.name}</h1>

         <Suspense fallback={<div>Loading...</div>}>
            <Playlists id={artist.id} />
         </Suspense>
      </>
   );
}

export default PageSequentialDataFetching;
