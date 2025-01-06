import { render, screen } from "@testing-library/react";
import { getFixturePostByIndex } from "__tests__/fixtures/posts";
import { getPost } from "app/data-fetching-and-caching/reusing-data-across-multiple-functions/[id]/getPost";
import Page from "app/data-fetching-and-caching/reusing-data-across-multiple-functions/[id]/page";
import { notFound } from "next/navigation";

global.fetch = jest.fn();

jest.mock("../../../../app/data-fetching-and-caching/reusing-data-across-multiple-functions/[id]/getPost", () => ({
   getPost: jest.fn(),
}));

jest.mock("next/navigation", () => ({ notFound: jest.fn() }));

describe("Page: [id]", () => {
   afterEach(() => jest.clearAllMocks());

   it("Deve renderizar as informações do post", async () => {
      const mockPost = getFixturePostByIndex(0);

      (getPost as jest.Mock).mockResolvedValue({ data: mockPost });

      const params = Promise.resolve({ id: "123" });

      render(await Page({ params }));

      expect(await screen.findByText(mockPost.title)).toBeInTheDocument();
      expect(await screen.findByText(mockPost.content)).toBeInTheDocument();
   });

   it("Deve chamar a função notFound caso nao tenha posts", async () => {
      (getPost as jest.Mock).mockResolvedValue({
         data: {
            error: "Blog post not found.",
         },
      });

      const params = Promise.resolve({ id: "123" });

      render(await Page({ params }));

      expect(notFound).toHaveBeenCalledTimes(1);
   });

   it.todo("Deve testar o generateStaticParams");

   it.todo("Deve testar o generateMetadata");
});
