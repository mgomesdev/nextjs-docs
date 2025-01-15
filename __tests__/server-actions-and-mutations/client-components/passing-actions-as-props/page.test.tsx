import { render, screen } from "@testing-library/react";
import PagePassingActionsAsProps from "app/server-actions-and-mutations/client-components/passing-actions-as-props/page";

describe("Passing-actions-as-props: page", () => {
   it("Deve renderizar o ClientComponent", () => {
      render(<PagePassingActionsAsProps />);

      expect(screen.getByTestId("form-client-component")).toBeInTheDocument;
   });
});
