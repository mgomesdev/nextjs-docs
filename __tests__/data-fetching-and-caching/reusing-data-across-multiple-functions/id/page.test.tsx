import { render, screen } from "@testing-library/react";
import { getFixturePostByIndex } from "__tests__/fixtures/posts";
import Page, {
   dynamicParams,
   generateMetadata,
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

      const { id } = await params;

      expect(fetch).toHaveBeenCalledWith(
         `http://localhost:3000/data-fetching-and-caching/reusing-data-across-multiple-functions/${id}/api`,
         {
            cache: "force-cache",
         }
      );
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
         json: jest.fn().mockResolvedValue({ data: [mockPost] }),
      });

      const params = await generateStaticParams();

      expect(params).toEqual([{ id: String(mockPost.id) }]);
      expect(fetch).toHaveBeenCalledWith("http://localhost:3000/data-fetching-and-caching/api", {
         cache: "force-cache",
      });
   });

   it("Deve testar o generateMetadata", async () => {
      (fetch as jest.Mock).mockResolvedValue({
         json: jest.fn().mockResolvedValue({ data: mockPost }),
      });

      const metadata = await generateMetadata({ params, searchParams });

      expect(metadata).toEqual({
         title: mockPost.title,
         description: mockPost.content,
         authors: mockPost.author,
      });
   });

   it("Deve configurar o dynamicParams para nao gerar paginas estaticas sob demanda", () => {
      /*
       * dynamicParams: boolean
       * - true(default) = neste cenario, o nextjs irá gerar slice(0,10) = 10 paginas estaticas
       *  - E todas as outras serão geradas sob demanda conforme o usuario solicita.
       *  - Isso é bom para performance, já pensou o next gerar 10000 paginas de uma vez?
       *  - Utiliza Streaming Server Rendering (suspense)
       *
       * - false = neste cenario, o nextjs irá gerar slice(0,10) = 10 paginas estaticas
       *  - E caso o usuario tente acessar uma pagina nao gerada ex: 11,
       *  - O nextjs retornará a pagina 404 not found.
       *
       */

      throw [
         "Proximos passos",
         "Terminar de ler a referencia de generateStaticParams (favoritos)",
         "Criar os testes da pagina NotFound() -> está como TODO no CLI",
         "Continuar codigos da referencia de reusing-data-across-multiple-functions",
      ];
      expect(dynamicParams).toBeFalsy();
   });
});
