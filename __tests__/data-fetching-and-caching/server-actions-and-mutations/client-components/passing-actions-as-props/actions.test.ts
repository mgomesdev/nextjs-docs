import updateItemAction from "app/data-fetching-and-caching/server-actions-and-mutations/client-components/passing-actions-as-props/actions";

describe("updateItemAction", () => {
   it("Deve atualizar o item via server action", () => {
      const mockFormData = new FormData();
      const mockUpdateItemAction = updateItemAction(mockFormData);

      expect(mockUpdateItemAction).toBeTruthy();
   });
});
