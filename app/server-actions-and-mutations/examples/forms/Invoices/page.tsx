import { createInvoice } from "./actions";
import SubmitButton from "../components/SubmitButton";

function PageInvoices() {
   const handleCreateInvoice = createInvoice.bind(null, { customerID: 1 });

   return (
      /*
       * Passando uma Função de Servidor para <form action>permitir que usuários enviem formulários sem JavaScript habilitado ou antes que o código tenha sido carregado.
       * Isso é benéfico para usuários que têm uma conexão lenta, dispositivo ou têm JavaScript desabilitado e é similar à maneira como os formulários funcionam quando
       * uma URL é passada para o action prop.
       */
      <form data-testid="form" action={handleCreateInvoice}>
         <input type="text" name="amount" />
         <input type="text" name="status" />
         <SubmitButton />
      </form>
   );
}

export default PageInvoices;
