import { render, screen } from "@testing-library/react";
import PageSVActionsClientComponent from "app/data-fetching-and-caching/server-actions-and-mutations/client-components/page";

describe("SVActions e Mutations -> Client-Components: page", () => {
   it("Deve renderizar o button", () => {
      render(<PageSVActionsClientComponent />);

      const button = screen.getByText(/Button Server Action/);

      expect(button).toBeInTheDocument();
   });
});
