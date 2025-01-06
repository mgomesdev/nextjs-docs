import { getFixturePostByIndex } from "__tests__/fixtures/posts";
import { getPost } from "app/data-fetching-and-caching/reusing-data-across-multiple-functions/[id]/getPost";

jest.mock("../../../../app/data-fetching-and-caching/reusing-data-across-multiple-functions/[id]/getPost");

describe("getPost", () => {
   it("Deve retornar os posts", async () => {
      const mockPost = getFixturePostByIndex(0);

      (getPost as jest.Mock).mockResolvedValue(mockPost);

      const post = await getPost("7");

      expect(post).toEqual(mockPost);
   });

   it.todo("Deve verificar se está configurado para forçar o cache");
});
