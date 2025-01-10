import { render, screen } from "@testing-library/react";
import PageSequentialDataFetching from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/sequential-data-fetching/page";
import React from "react";

jest.mock("react", () => ({
   ...jest.requireActual("react"),
   Suspense: ({ children }: { children: React.ReactNode }) => <div data-testid="mock-suspense">{children}</div>,
}));

jest.mock(
   "../../../../app/data-fetching-and-caching/parallel-and-sequential-data-fetching/sequential-data-fetching/components/Playlists",
   () => jest.fn(({ artistID }: { artistID: number }) => <div data-testid="mock-playlists">mock playlists</div>)
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
});
