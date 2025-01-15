import { config } from "../config";
import AlbumSchema from "../schema/AlbumSchema";

const AlbumService = {
   getAlbums: async (
      username: string
   ): Promise<{
      data: AlbumSchema[];
   }> => {
      const res = await fetch(`${config.url}/${username}/api/albums`);
      return res.json();
   },
};

export default AlbumService;
