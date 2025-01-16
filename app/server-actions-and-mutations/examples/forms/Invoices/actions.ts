// TODO: o jest não tem suporte para testar server function, quando tiver suporte criar os testes.
export async function createInvoice(extraInputs: { customerID: number }, formData: FormData) {
   "use server";

   const rawFormData = {
      amount: formData.get("amount"),
      status: formData.get("status"),
   };

   console.log(rawFormData, extraInputs);

   // mutate data, revalidade cache etc...
}
