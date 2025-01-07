import { render, screen } from "@testing-library/react";
import { getFixturePostByIndex } from "__tests__/fixtures/posts";
import Page from "app/data-fetching-and-caching/reusing-data-across-multiple-functions/[id]/page";
import { notFound } from "next/navigation";

global.fetch = jest.fn();

jest.mock("next/navigation", () => ({ notFound: jest.fn() }));

global.fetch = jest.fn();

describe("Page: [id]", () => {
   afterEach(() => jest.clearAllMocks());

   const params = Promise.resolve({ id: "123" });
   const searchParams = Promise.resolve({ undefined });

   it("Deve renderizar as informações do post", async () => {
      const mockPost = getFixturePostByIndex(0);

      (fetch as jest.Mock).mockResolvedValue({ json: jest.fn().mockResolvedValue({ data: mockPost }) });

      render(await Page({ params, searchParams }));

      expect(await screen.findByText(mockPost.title)).toBeInTheDocument();
      expect(await screen.findByText(mockPost.content)).toBeInTheDocument();
   });

   it("Deve chamar a função notFound caso nao tenha posts", async () => {
      (fetch as jest.Mock).mockResolvedValue({
         json: jest.fn().mockResolvedValue({
            data: {
               error: "Blog post not found.",
            },
         }),
      });

      render(await Page({ params, searchParams }));

      expect(notFound).toHaveBeenCalledTimes(1);
   });

   it.todo("Deve testar o generateStaticParams");

   it.todo("Deve testar o generateMetadata");
});
