import { render, screen } from "@testing-library/react";
import Page from "../../app/data-fetching-and-caching/page-ssr";

const fixture_post = [
   {
      id: 1,
      title: "Lorem Ipsum - What Is It and How to Use It?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      author: "John Doe",
      date: "2023-08-01",
      category: "Technology",
   },
   {
      id: 2,
      title: "The Benefits of Regular Exercise",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      author: "Jane Smith",
      date: "2023-07-25",
      category: "Health & Fitness",
   },
];

describe("Page Server Components", () => {
   beforeAll(() => {
      global.fetch = jest.fn();
   });

   afterAll(() => jest.resetAllMocks());

   it("Deve apontar para o endpoint correto da api de posts e configurar o DataCache corretamente", async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
         json: jest.fn().mockReturnValue(fixture_post),
      });

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
      (global.fetch as jest.Mock).mockResolvedValue({
         json: jest.fn().mockReturnValue(fixture_post),
      });

      render(await Page());

      const posts = screen.getAllByTestId("post-item");

      expect(posts.length).toBeGreaterThanOrEqual(0);
   });
});
