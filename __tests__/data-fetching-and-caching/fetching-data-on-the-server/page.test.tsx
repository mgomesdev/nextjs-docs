import { render, screen } from "@testing-library/react";
import fixture_post from "../../fixtures/posts";
import Page from "app/data-fetching-and-caching/fetching-data-on-the-server/page";

describe("Page Server Components", () => {
   beforeAll(() => {
      global.fetch = jest.fn();

      (global.fetch as jest.Mock).mockResolvedValue({
         json: jest.fn().mockReturnValue(fixture_post),
      });
   });

   afterAll(() => jest.resetAllMocks());

   it("Deve configurar o endpoint correto da api de posts e configurar o DataCache corretamente", async () => {
      render(await Page());

      expect(global.fetch).toHaveBeenCalledWith("https://api.vercel.app/blog", {
         cache: "force-cache",
         next: {
            revalidate: 30,
            tags: ["posts"],
         },
      });
   });

   it("Deve renderizar os posts", async () => {
      render(await Page());
      const posts = screen.getAllByTestId("post-item");
      expect(posts.length).toBeGreaterThanOrEqual(0);
   });
});
