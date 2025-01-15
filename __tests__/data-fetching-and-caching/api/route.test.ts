/**
 * @jest-environment node
 */

import { GET } from "app/data-fetching-and-caching/api/route";
import { getFixturePosts } from "../../../__fixtures__/posts";

global.fetch = jest.fn();

describe("data-fetching-and-caching route handler posts", () => {
   afterEach(() => jest.clearAllMocks());

   it("Deve retornar os posts", async () => {
      const mockPosts = getFixturePosts();
      (fetch as jest.Mock).mockResolvedValue({
         ok: true,
         json: jest.fn().mockResolvedValue(mockPosts),
      });

      const posts = await GET();
      const result = await posts.json();

      expect(result).toEqual({
         data: mockPosts,
      });
   });
});
