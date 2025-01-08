import PlaylistSchema from "../schemas/PlaylistSchema";

const PlaylistService = {
   getArtistPlaylists: async (artistID: number) => {
      const playlists = new Promise<PlaylistSchema[] | []>((resolve) => {
         setTimeout(() => {
            const playlists: PlaylistSchema[] = [
               {
                  id: 1,
                  artist_id: 1,
                  name: "playlist1.name1",
               },
               {
                  id: 2,
                  artist_id: 1,
                  name: "playlist1.name2",
               },
               {
                  id: 2,
                  artist_id: 2,
                  name: "playlist2.name1",
               },
            ];

            const result = playlists.filter((playlist) => playlist.artist_id === artistID);

            resolve(result);
         }, 2000);
      });

      return playlists;
   },
};

export default PlaylistService;
