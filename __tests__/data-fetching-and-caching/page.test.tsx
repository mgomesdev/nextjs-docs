import { act, render, screen } from "@testing-library/react";
import Page from "app/data-fetching-and-caching/page";

global.fetch = jest.fn();

describe("Deve renderizar o Page corretamente", () => {
   afterEach(() => jest.clearAllMocks());

   it("Deve renderizar o PageClient", async () => {
      (fetch as jest.Mock).mockResolvedValue({
         json: async () => {
            return {
               data: [],
            };
         },
      });

      await act(async () => render(await Page()));

      expect(screen.getByTestId("page-client")).toBeInTheDocument();
   });
});
