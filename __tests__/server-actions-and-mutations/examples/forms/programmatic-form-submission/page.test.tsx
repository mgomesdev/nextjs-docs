import { render, screen } from "@testing-library/react";
import PageProgrammaticFormSubmission from "app/server-actions-and-mutations/examples/forms/programmatic-form-submission/page";

describe("Programmatic Form Submission", () => {
   beforeAll(() => {
      jest.spyOn(console, "error").mockImplementation((message, ...args) => {
         if (typeof message === "string" && message.includes("Invalid value for prop `action`")) {
            return;
         }
      });
   });

   it("Deve renderizar o form", () => {
      render(<PageProgrammaticFormSubmission />);

      expect(screen.getByTestId("form")).toBeInTheDocument();
      expect(screen.getByTestId("entry")).toBeInTheDocument();
   });
});
