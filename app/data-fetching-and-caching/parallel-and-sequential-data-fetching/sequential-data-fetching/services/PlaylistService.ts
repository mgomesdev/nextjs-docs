import PlaylistSchema from "../schemas/PlaylistSchema";

const PlaylistService = {
   getArtistPlaylists: async (artistID: number): Promise<PlaylistSchema[]> => {
      const mockPlaylists: PlaylistSchema[] = [
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
            id: 3,
            artist_id: 2,
            name: "playlist2.name1",
         },
      ];

      const playlists = new Promise<PlaylistSchema[]>((resolve) => {
         const result = mockPlaylists.filter((playlist) => playlist.artist_id === artistID);

         setTimeout(() => {
            resolve(result);
         }, 2000);
      });

      return playlists;
   },
};

export default PlaylistService;
