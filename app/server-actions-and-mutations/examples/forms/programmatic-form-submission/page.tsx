import Entry from "./components/Entry";

function PageProgrammaticFormSubmission() {
   async function handleSubmit(formData: FormData) {
      "use server";

      console.log(formData.get("entry"));
   }

   return (
      <form action={handleSubmit} data-testid="form">
         <Entry />
      </form>
   );
}

export default PageProgrammaticFormSubmission;
