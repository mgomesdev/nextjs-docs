import { render, screen } from "@testing-library/react";
import ArtistService from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/parallel-data-fetching/[username]/services/ArtistService";
import Page from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/parallel-data-fetching/[username]/page";

global.fetch = jest.fn();

describe("PageParallelDataFetching", () => {
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
         "Criar testes do ArtistServie -> getArtist",
         "Criar testes do AlbumService -> getAlbums",
         "Inciar Server actions e mutations",
         "Preparar proximos passos e subir o código",
         "Fazer intervalo 30 min",
      ];
   });
});
