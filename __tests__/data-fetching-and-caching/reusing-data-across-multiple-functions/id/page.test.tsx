import { render, screen } from "@testing-library/react";
import { getFixturePostByIndex } from "__tests__/fixtures/posts";
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
      const mockPost = Object.assign({}, getFixturePostByIndex(0));

      (getPost as jest.Mock).mockResolvedValue(mockPost);

      const params = Promise.resolve({ id: "123" });

      render(await Page({ params }));

      expect(await screen.findByText(mockPost.title)).toBeInTheDocument();
      expect(await screen.findByText(mockPost.content)).toBeInTheDocument();
   });

   it("Deve chamar a função notFound caso nao tenha posts", () => {
      throw "Simular chamada do notfound()";
   });

   it.todo("Deve testar o generateStaticParams");

   it.todo("Deve testar o generateMetadata");
});
