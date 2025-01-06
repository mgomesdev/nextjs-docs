import { getFixturePostByIndex } from "__tests__/fixtures/posts";
import { getPost } from "app/data-fetching-and-caching/reusing-data-across-multiple-functions/[id]/getPost";

jest.mock("../../../../app/data-fetching-and-caching/reusing-data-across-multiple-functions/[id]/getPost");

describe("getPost", () => {
   it("Deve retornar os posts", async () => {
      const mockPost = Object.assign({}, Object.assign({}, getFixturePostByIndex(0)));

      (getPost as jest.Mock).mockResolvedValue(mockPost);

      const post = await getPost("7");

      expect(post).toEqual(mockPost);
   });
});
