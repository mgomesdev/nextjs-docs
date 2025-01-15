/**
 * @jest-environment node
 *
 */

import { GET } from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/parallel-data-fetching/[username]/api/albums/route";
import { config } from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/parallel-data-fetching/[username]/config";

jest.mock(
   "../../../../../../../app/data-fetching-and-caching/parallel-and-sequential-data-fetching/parallel-data-fetching/[username]/api/albums/route"
);

describe("AlbumsRoute", () => {
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

   it("Deve retornar a promise resolvida do artist", async () => {
      const mockParams = Promise.resolve({ username: "chorao" });
      const mockUrl = `${config.url}/${(await mockParams).username}`;
      const mockRequest = new Request(mockUrl);

      (GET as jest.Mock).mockResolvedValue({
         data: mockAlbums,
      });

      const getAlbums = await GET(mockRequest, { params: mockParams });

      expect(getAlbums).toEqual({ data: mockAlbums });
      expect(GET).toHaveBeenCalled();
   });
});
