import { render, screen } from "@testing-library/react";
import fixture_post from "__tests__/fixtures/posts";
import { getPost } from "app/data-fetching-and-caching/reusing-data-across-multiple-functions/[id]/getPost";
import Page from "app/data-fetching-and-caching/reusing-data-across-multiple-functions/[id]/page";

global.fetch = jest.fn();

jest.mock("../../../../app/data-fetching-and-caching/reusing-data-across-multiple-functions/[id]/getPost", () => {
   return {
      getPost: jest.fn(),
   };
});

describe("Page: [id]", () => {
   it("Deve renderizar as informações do post", async () => {
      (getPost as jest.Mock).mockResolvedValue(fixture_post[0]);

      const params = Promise.resolve({ id: "123" });

      render(await Page({ params }));

      expect(await screen.findByText(fixture_post[0].title)).toBeInTheDocument();
      expect(await screen.findByText(fixture_post[0].content)).toBeInTheDocument();
   });
});
