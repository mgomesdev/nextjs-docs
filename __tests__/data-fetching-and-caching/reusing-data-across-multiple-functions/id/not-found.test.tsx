import { render, screen } from "@testing-library/react";
import NotFound from "app/data-fetching-and-caching/reusing-data-across-multiple-functions/[id]/not-found";

describe("NotFound", () => {
   describe("Deve renderizar a pagina NotFound corretamente", () => {
      beforeEach(() => {
         render(<NotFound />);
      });

      it("Deve mostrar o titulo com o texto correto", () => {
         expect(screen.getByRole("heading")).toHaveTextContent("Not Found");
      });

      it("Deve mostrar o parafrafo com o texto correto", () => {
         expect(screen.getByRole("paragraph")).toHaveTextContent("Could not find requested resource");
      });

      it("Deve mostrar o link configurado corretamente", () => {
         expect(screen.getByRole("link")).toHaveAttribute("href", "/");
         expect(screen.getByRole("link")).toHaveTextContent("Return Home");
      });
   });
});
