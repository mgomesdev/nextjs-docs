import { act, render, screen } from "@testing-library/react";
import Page from "app/data-fetching-and-caching/page";

describe("Deve renderizar o Page corretamente", () => {
   it("Deve renderizar os links corretamente", () => {
      render(<Page />);

      const links = screen.getAllByRole("link");

      expect(links[0]).toHaveAttribute("href", "/fetching-data-on-the-client");
      expect(links[1]).toHaveAttribute("href", "/fetching-data-on-the-server");
      expect(links[2]).toHaveAttribute("href", "/reusing-data-across-multiple-functions");
   });
});
