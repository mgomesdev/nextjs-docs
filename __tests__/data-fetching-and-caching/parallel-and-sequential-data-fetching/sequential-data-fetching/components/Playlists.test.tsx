import { render, screen } from "@testing-library/react";
import Playlists from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/sequential-data-fetching/components/Playlists";
import PlaylistService from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/sequential-data-fetching/services/PlaylistService";

describe("Playlists: deve renderizar as informações da playlist corretamente", () => {
   it("Deve mostrar a lista de playlists com as informações corretas.", async () => {
      const playlistServiceSpy = jest.spyOn(PlaylistService, "getArtistPlaylists");

      render(await Playlists({ artistID: 1 }));

      expect(screen.getAllByRole("listitem").length).toBeGreaterThanOrEqual(0);
      expect(playlistServiceSpy).toHaveBeenCalledWith(1);

      jest.clearAllMocks();
   });
});
