import { render, screen, waitFor } from "@testing-library/react";
import { getFixturePostByIndex } from "__tests__/fixtures/posts";
import Page, {
   generateStaticParams,
} from "app/data-fetching-and-caching/reusing-data-across-multiple-functions/[id]/page";
import { notFound } from "next/navigation";

global.fetch = jest.fn();

jest.mock("next/navigation", () => ({ notFound: jest.fn() }));

global.fetch = jest.fn();

describe("Page: [id]", () => {
   afterEach(() => jest.clearAllMocks());

   const params = Promise.resolve({ id: "123" });
   const searchParams = Promise.resolve({ undefined });
   const mockPost = getFixturePostByIndex(0);

   it("Deve renderizar as informações do post", async () => {
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

   it("Deve testar o generateStaticParams corretamente", async () => {
      (fetch as jest.Mock).mockResolvedValue({
         json: jest.fn().mockResolvedValue([mockPost]),
      });

      const params = await generateStaticParams();

      expect(params).toEqual([{ id: String(mockPost.id) }]);
      expect(fetch).toHaveBeenCalledWith("http://localhost:3000/data-fetching-and-caching/api", {
         cache: "force-cache",
      });
   });

   it.todo("Deve testar o generateMetadata");
});
