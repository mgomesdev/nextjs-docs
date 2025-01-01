/**
 * @jest-environment node
 */

import { GET } from "app/data-fetching-and-caching/api/route";
import fixture_post from "../../fixtures/posts";

global.fetch = jest.fn();

describe("data-fetching-and-caching route handler posts", () => {
   afterEach(() => jest.clearAllMocks());

   it("Deve retornar os posts", async () => {
      (fetch as jest.Mock).mockResolvedValue({
         ok: true,
         json: jest.fn().mockResolvedValue([fixture_post]),
      });

      const posts = await GET();
      const result = await posts.json();

      expect(result).toEqual({
         data: [fixture_post],
      });
   });
});
