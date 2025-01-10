import { render, screen } from "@testing-library/react";
import Loading from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/sequential-data-fetching/loading";

describe("Loading", () => {
   it("Deve renderizar a mensagem de loading... enquanto o servidor resolve os dados", () => {
      render(<Loading />);

      expect(screen.getByText("Loading - loading.tsx")).toBeInTheDocument();
   });
});
