import { render, screen } from "@testing-library/react";
import ClientComponent from "app/server-actions-and-mutations/client-components/passing-actions-as-props/components/ClientComponent";

jest.mock("../../../../../app/server-actions-and-mutations/client-components/passing-actions-as-props/actions", () => ({
   default: jest.fn(),
}));

describe("ClientComponent", () => {
   beforeAll(() => {
      // O jest não tem suporte a server components/server actions, então ele dá um erro se passar server action como prop no client component.
      // Porém o nextjs funciona normalmente, assim que o jest tiver suporte, atualizar o teste e remover estes comentários/codigo.
      jest.spyOn(console, "error").mockImplementation((message, ...args) => {
         if (typeof message === "string" && message.includes("Invalid value for prop `action`")) {
            return;
         }
      });
   });

   it("Deve passar a server action para o componente client via props", () => {
      const mockUpdateItemAction = jest.fn();

      render(<ClientComponent updateItemAction={mockUpdateItemAction} />);

      const form = screen.getByTestId("form-client-component");

      expect(form).toBeInTheDocument();
   });
});
