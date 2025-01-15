import { config } from "../config";
import ArtistSchema from "../schema/ArtistSchema";

const ArtistService = {
   getArtist: async (
      username: string
   ): Promise<{
      data: ArtistSchema;
   }> => {
      const res = await fetch(`${config.url}/${username}/api/artist`);

      return res.json();
   },
};

export default ArtistService;
