import { config } from "app/data-fetching-and-caching/parallel-and-sequential-data-fetching/parallel-data-fetching/[username]/config";

describe("Config", () => {
   it("Deve configurar a url de endpoint corretamente", () => {
      const mockUrl =
         "http://localhost:3000/data-fetching-and-caching/parallel-and-sequential-data-fetching/parallel-data-fetching";

      expect(config.url).toBe(mockUrl);
   });
});
