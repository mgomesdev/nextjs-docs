"use client";

interface ClientComponentProps {
   updateItemAction: (formData: FormData) => void;
}

function ClientComponent({ updateItemAction }: ClientComponentProps) {
   return (
      <form data-testid="form-client-component" action={updateItemAction}>
         <input type="text" name="name" id="name" />
         <button type="submit">Enviar</button>
      </form>
   );
}

export default ClientComponent;
