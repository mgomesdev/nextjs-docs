import { render, screen } from "@testing-library/react";
import ArtistService from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/parallel-data-fetching/[username]/services/ArtistService";
import Page from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/parallel-data-fetching/[username]/page";
import AlbumService from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/parallel-data-fetching/[username]/services/AlbumService";

global.fetch = jest.fn();

jest.mock(
   "../../../../../app/data-fetching-and-caching/parallel-and-sequential-data-fetching/parallel-data-fetching/[username]/services/AlbumService"
);

describe("PageParallelDataFetching", () => {
   const mockAlbums = [
      {
         id: 1,
         name: "Album1",
         artist: "chorao",
      },
      {
         id: 2,
         name: "Album2",
         artist: "chorao",
      },
   ];

   (AlbumService.getAlbums as jest.Mock).mockResolvedValue({ data: mockAlbums });

   beforeEach(() => {
      jest.clearAllMocks();
   });

   it("Deve renderizar o nome do artista", async () => {
      jest.spyOn(ArtistService, "getArtist").mockResolvedValue({
         data: {
            id: 1,
            name: "chorao",
         },
      });

      const params = Promise.resolve({ username: "chorao" });

      render(await Page({ params }));

      expect(screen.getByText("chorao")).toBeInTheDocument();
   });

   it.todo("Deve renderizar os albums do artista");

   it.skip("Proximos passos", () => {
      throw [
         "Criar os testes de page -> o page não está conseguindo renderizar os dados na tela -> erro no nextjs",
         "Inciar Server actions e mutations",
         "Preparar proximos passos e subir o código",
         "Fazer intervalo 30 min",
      ];
   });
});
