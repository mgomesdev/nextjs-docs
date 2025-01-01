import { render, screen, waitFor } from "@testing-library/react";
import Page from "../../app/data-fetching-and-caching/page-client";
import fixture_post from "../fixtures/posts";

global.fetch = jest.fn();

describe("Page Client Components", () => {
   afterEach(() => jest.clearAllMocks());

   it("Deve renderizar a mensagem de loading inicial", async () => {
      (fetch as jest.Mock).mockResolvedValue({
         json: async () => [],
      });

      render(<Page />);

      waitFor(() => {
         expect(screen.getByText(/loading.../i)).toBeInTheDocument();
      });
   });

   it("Deve renderizar a lista de posts após buscar os dados", async () => {
      (fetch as jest.Mock).mockResolvedValue({
         json: async () => fixture_post,
      });

      render(<Page />);

      waitFor(() => {
         const item = screen.getAllByTestId("post-item");
         expect(item.length).toBeGreaterThanOrEqual(1);
      });
   });
});
