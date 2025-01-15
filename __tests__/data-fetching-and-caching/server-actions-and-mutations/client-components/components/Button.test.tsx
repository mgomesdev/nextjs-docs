import { fireEvent, render, screen } from "@testing-library/react";
import create from "app/data-fetching-and-caching/server-actions-and-mutations/client-components/actions";
import Button from "app/data-fetching-and-caching/server-actions-and-mutations/client-components/components/Button";

jest.mock("../../../../../app/data-fetching-and-caching/server-actions-and-mutations/client-components/actions");

describe("ServerActions and Mutations -> client-components: Button", () => {
   it("Deve executar a server action ao clicar no botão", () => {
      render(<Button />);

      const button = screen.getByRole("button");

      fireEvent.click(button);

      expect(button).toBeInTheDocument();
      expect(create).toHaveBeenCalledTimes(1);
   });
});
