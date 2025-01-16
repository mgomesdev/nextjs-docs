import { render, screen } from "@testing-library/react";
import PageInvoices from "app/server-actions-and-mutations/examples/forms/Invoices/page";
import { useFormStatus } from "react-dom";

jest.mock("../../../../../app/server-actions-and-mutations/examples/forms/Invoices/actions", () => ({
   createInvoice: jest.fn(),
}));

jest.mock("react-dom", () => {
   return {
      ...jest.requireActual("react-dom"),
      useFormStatus: jest.fn().mockResolvedValue({
         pending: jest.fn(),
      }),
   };
});

describe("Examples -> Form -> Invoices", () => {
   beforeAll(() => {
      jest.spyOn(console, "error").mockImplementation((message, ...args) => {
         if (typeof message === "string" && message.includes("Invalid value for prop `action`")) {
            return;
         }
      });
   });

   it("Deve renderizar e executar o formulario com uma server action corretamente", () => {
      render(<PageInvoices />);

      const form = screen.getByTestId("form");
      const submitButton = screen.getByRole("button");

      expect(submitButton).toBeInTheDocument();
      expect(form).toBeInTheDocument();
   });
});
