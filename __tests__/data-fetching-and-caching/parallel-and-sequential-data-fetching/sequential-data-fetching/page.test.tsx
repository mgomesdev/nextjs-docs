import { render, screen } from "@testing-library/react";
import PageSequentialDataFetching from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/sequential-data-fetching/page";
import React from "react";

jest.mock("react", () => ({
   ...jest.requireActual("react"),
   Suspense: ({ children }: { children: React.ReactNode }) => <div data-testid="mock-suspense">{children}</div>,
}));

jest.mock(
   "../../../../app/data-fetching-and-caching/parallel-and-sequential-data-fetching/sequential-data-fetching/components/Playlists",
   () => ({
      Playlists: ({ id }: { id: number }) => <div data-testid="mock-playlists">mock playlists</div>,
   })
);

describe("Sequential Data Fetching: Page", () => {
   it("Deve renderizar o nome do artista", async () => {
      render(await PageSequentialDataFetching());

      expect(screen.getByRole("heading")).toHaveTextContent("artist.name");
   });

   it("Deve mostrar o suspense na tela", async () => {
      render(await PageSequentialDataFetching());
      expect(screen.getByTestId("mock-suspense")).toBeInTheDocument();
   });

   it("Deve mostrar as playlists do artista na tela", async () => {
      render(await PageSequentialDataFetching());
      const playlists = screen.getByTestId("mock-playlists");
      expect(playlists).toBeInTheDocument();
   });

   it.skip("Proximos passos", () => {
      throw [
         "Criar os testes do component Playlists",
         "Criar os testes do PlaylistService",
         "Iniciar o cap. busca de dados paralela",
         "Preparar proximos passos e subir o código",
         "Atualizar os links da pagina principal",
         "Atualizar os links do readme",
         "Fazer intervalo 30 min",
      ];
   });
});
