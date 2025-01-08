import { render, screen } from "@testing-library/react";
import NotFound from "app/data-fetching-and-caching/reusing-data-across-multiple-functions/[id]/not-found";

describe("NotFound", () => {
   it("Deve renderizar a pagina NotFound corretamente", () => {
      render(<NotFound />);

      expect(screen.getByRole("heading")).toHaveTextContent("Not Found");
      expect(screen.getByRole("paragraph")).toHaveTextContent("Could not find requested resource");
      expect(screen.getByRole("link")).toHaveAttribute("href", "/");
      expect(screen.getByRole("link")).toHaveTextContent("Return Home");
   });
});
