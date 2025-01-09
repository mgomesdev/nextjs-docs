import ArtistService from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/sequential-data-fetching/services/ArtistService";

describe("ArtistService", () => {
   it("Deve retornar os dados do artista pelo nome", async () => {
      jest.spyOn(ArtistService, "getArtist").mockResolvedValue({
         id: 1,
         name: "artist.name1",
      });

      const artist = await ArtistService.getArtist("artist.name1");

      expect(artist).toEqual({ id: 1, name: "artist.name1" });
   });
});
