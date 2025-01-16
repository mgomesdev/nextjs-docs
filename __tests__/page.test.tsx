import { render, screen } from "@testing-library/react";
import Page from "app/page";

describe("Deve renderizar o Page corretamente", () => {
   it("Deve renderizar os links corretamente", () => {
      render(<Page />);

      const links = screen.getAllByRole("link");

      expect(links[0]).toHaveAttribute("href", "/data-fetching-and-caching/fetching-data-on-the-client");
      expect(links[0]).toHaveTextContent("Fetching Data on the client");
      expect(links[1]).toHaveAttribute("href", "/data-fetching-and-caching/fetching-data-on-the-server");
      expect(links[1]).toHaveTextContent("Fetching Data on the server");
      expect(links[2]).toHaveAttribute("href", "/data-fetching-and-caching/reusing-data-across-multiple-functions");
      expect(links[2]).toHaveTextContent("Reusing Data across multiple function");
      expect(links[3]).toHaveAttribute(
         "href",
         "/data-fetching-and-caching/parallel-and-sequential-data-fetching/sequential-data-fetching"
      );
      expect(links[3]).toHaveTextContent("Sequential data fetching");
      expect(links[4]).toHaveAttribute("href", "/server-actions-and-mutations/examples/forms/invoices");
      expect(links[4]).toHaveTextContent("Form -> Invoices");
      expect(links[5]).toHaveAttribute(
         "href",
         "/server-actions-and-mutations/examples/forms/programmatic-form-submission"
      );
      expect(links[5]).toHaveTextContent("Programmatic Form Submission");
   });
});
