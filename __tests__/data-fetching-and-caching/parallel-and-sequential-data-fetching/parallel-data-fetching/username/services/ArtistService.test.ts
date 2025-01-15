import ArtistSchema from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/parallel-data-fetching/[username]/schema/ArtistSchema";
import ArtistService from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/parallel-data-fetching/[username]/services/ArtistService";

jest.mock(
   "../../../../../../app/data-fetching-and-caching/parallel-and-sequential-data-fetching/parallel-data-fetching/[username]/services/ArtistService"
);

describe("ArtistService", () => {
   const mockArtist: ArtistSchema = {
      id: 1,
      name: "chorao",
   };

   it("Deve renderizar os dados do artista corretamente", async () => {
      (ArtistService.getArtist as jest.Mock).mockResolvedValue({
         data: mockArtist,
      });

      const getArtit = await ArtistService.getArtist("chorao");

      expect(getArtit).toEqual({ data: mockArtist });
      expect(ArtistService.getArtist).toHaveBeenCalledTimes(1);
      expect(ArtistService.getArtist).toHaveBeenCalledWith("chorao");
   });
});
