"use client";

import Link from "next/link";

function Page() {
   return (
      <ul>
         <li>
            <Link href={"/data-fetching-and-caching/fetching-data-on-the-client"}>Fetching Data on the client</Link>
         </li>
         <li>
            <Link href="/data-fetching-and-caching/fetching-data-on-the-server">Fetching Data on the server</Link>
         </li>
         <li>
            <Link href="/data-fetching-and-caching/reusing-data-across-multiple-functions">
               Reusing Data across multiple function
            </Link>
         </li>
         <li>
            <Link href="/data-fetching-and-caching/reusing-data-across-multiple-functions">
               Parallel and sequential data fetching
            </Link>
            <li>
               <Link href="/data-fetching-and-caching/reusing-data-across-multiple-functions">
                  Sequential data fetching
               </Link>
            </li>
         </li>
      </ul>
   );
}

export default Page;
