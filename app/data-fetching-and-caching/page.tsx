import Link from "next/link";

function Page() {
   return (
      <ul>
         <li>
            <Link href={"/fetching-data-on-the-client"}>Fetching Data on the client</Link>
         </li>
         <li>
            <Link href="/fetching-data-on-the-server">Fetching Data on the server</Link>
         </li>
         <li>
            <Link href="/reusing-data-across-multiple-functions">Reusing Data across multiple function</Link>
         </li>
      </ul>
   );
}

export default Page;
