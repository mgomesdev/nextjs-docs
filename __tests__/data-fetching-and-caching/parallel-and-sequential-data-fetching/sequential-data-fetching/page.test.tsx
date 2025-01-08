import { render, screen, waitFor } from "@testing-library/react";
import PageSequentialDataFetching from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/sequential-data-fetching/page";

jest.mock(
   "../../../../app/data-fetching-and-caching/parallel-and-sequential-data-fetching/sequential-data-fetching/components/Playlists"
);

describe("Sequential Data Fetching: Page", () => {
   it("Deve renderizar o nome do artista", async () => {
      render(<PageSequentialDataFetching />);
      expect(screen.getByRole("heading")).toHaveTextContent("artist.name");
   });

   it("Deve mostrar o texto de fallback de Loading... do suspense enquanto os dados do artista são buscados", () => {
      render(<PageSequentialDataFetching />);

      waitFor(() => {
         expect(screen.getByText("Loading...")).toBeInTheDocument();
      });
   });

   it.todo("Deve mostrar as playlists do artista após os dados forem buscados e carregados");

   describe("Playlists: deve renderizar as informações da playlist corretamente", () => {
      it.todo("Deve mostrar a lista de playlists com as informações corretas.");
   });
});
