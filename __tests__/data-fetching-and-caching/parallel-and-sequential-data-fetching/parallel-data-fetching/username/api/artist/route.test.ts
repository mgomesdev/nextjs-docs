/**
 * @jest-environment node
 *
 */

import { GET } from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/parallel-data-fetching/[username]/api/artist/route";
import { url } from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/parallel-data-fetching/[username]/config";

jest.mock(
   "../../../../../../../app/data-fetching-and-caching/parallel-and-sequential-data-fetching/parallel-data-fetching/[username]/api/artist/route"
);

describe("ArtistRoute", () => {
   const mockArtist = [
      {
         id: 1,
         name: "chorao",
      },
      {
         id: 2,
         name: "Renato Russo",
      },
   ];

   it("Deve retornar a promise resolvida do artist", async () => {
      const mockParams = Promise.resolve({ username: "chorao" });
      const mockUrl = `${url}/${(await mockParams).username}`;
      const mockRequest = new Request(mockUrl);

      (GET as jest.Mock).mockResolvedValue({
         data: mockArtist,
      });

      const getArtist = await GET(mockRequest, { params: mockParams });

      expect(getArtist).toEqual({ data: mockArtist });
      expect(GET).toHaveBeenCalled();
   });
});
