"use client";

import updateItemAction from "./actions";
import ClientComponent from "./components/ClientComponent";

function PagePassingActionsAsProps() {
   return (
      <>
         <ClientComponent updateItemAction={updateItemAction} />
      </>
   );
}

export default PagePassingActionsAsProps;
