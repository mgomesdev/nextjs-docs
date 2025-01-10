import PlaylistService from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/sequential-data-fetching/services/PlaylistService";

describe("PlaylistService", () => {
   it("Deve retornar as playlists do artista pelo ID", async () => {
      jest.spyOn(PlaylistService, "getArtistPlaylists").mockResolvedValue([
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
      ]);

      const artistPlaylist = await PlaylistService.getArtistPlaylists(1);

      expect(artistPlaylist).toEqual([
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
      ]);
   });
});
