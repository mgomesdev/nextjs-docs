import { render, screen } from "@testing-library/react";
import Page from "../../app/data-fetching-and-caching/page";

describe("Page", () => {
   beforeAll(() => {
      global.fetch = jest.fn();
   });

   afterAll(() => jest.resetAllMocks());

   it("Deve renderizar os posts", async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
         json: jest.fn().mockReturnValue([
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
         ]),
      });

      const page = await Page();

      render(page);

      const posts = screen.getAllByTestId("post-item");

      expect(posts.length).toBeGreaterThanOrEqual(0);
   });
});
