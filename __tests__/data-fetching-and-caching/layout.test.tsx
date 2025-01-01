import { render, screen } from "@testing-library/react";

import RootLayout from "app/data-fetching-and-caching/layout";

describe("Layout", () => {
   beforeEach(() => {
      /*
       * O testing library não suporta html, body dentro de div, isso ocorre porque por padrão, o testing library
       * envolve os testes em um <div> element, tornando inviavel testar o layout.tsx que possui <html><body>
       * por isso desativei este erro neste teste por default.
       */
      jest.spyOn(console, "error").mockImplementation((message) => {
         if (typeof message === "string" && message.includes("cannot appear as a child of")) {
            return;
         }
         console.error(message);
      });
   });

   afterEach(() => {
      jest.restoreAllMocks();
   });

   it("Deve renderizar o children", () => {
      render(
         <RootLayout>
            <div>child</div>
         </RootLayout>
      );

      expect(screen.getByText("child")).toBeInTheDocument();
   });

   it("O HTML deve ter o lang=pt configurado", () => {
      render(
         <RootLayout>
            <div>child</div>
         </RootLayout>
      );

      expect(document.body.querySelector("html")!.getAttribute("lang")).toBe("pt");
   });
});
