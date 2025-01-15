import AlbumService from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/parallel-data-fetching/[username]/services/AlbumService";

describe("AlbumService", () => {
   it("Deve retornar os albums do artista pelo nome", async () => {
      const mockAlbums = [
         {
            id: 1,
            name: "Album1",
            artist: "chorao",
         },
         {
            id: 2,
            name: "Album2",
            artist: "chorao",
         },
      ];

      jest.spyOn(AlbumService, "getAlbums").mockResolvedValue({ data: mockAlbums });

      const albums = await AlbumService.getAlbums("chorao");

      expect(albums.data).toEqual(mockAlbums);
   });
});
