import { render, screen, waitFor } from "@testing-library/react";
import { getFixturePosts } from "../../../__fixtures__/posts";
import Page from "app/data-fetching-and-caching/fetching-data-on-the-client/page";

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
         json: async () => getFixturePosts(),
      });

      render(<Page />);

      waitFor(() => {
         const item = screen.getAllByTestId("post-item");
         expect(item.length).toBeGreaterThanOrEqual(1);
      });
   });
});
