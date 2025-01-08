const PlaylistService = {
   getArtistPlaylists: async (id: number) => {
      const playlists = await Promise.resolve([
         {
            id: "playlist.id",
            name: "playlist.name",
         },
      ]);

      return playlists;
   },
};

export default PlaylistService;
