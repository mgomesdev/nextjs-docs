"use client";

import { useEffect, useState } from "react";

interface Posts {
   id: number;
   title: string;
   content: string;
   author: string;
   date: string;
   category: string;
}

function PageClient() {
   const [posts, setPosts] = useState<Posts[] | null>(null);

   useEffect(() => {
      const fetchPosts = async () => {
         const res = await fetch("/data-fetching-and-caching/api");
         const { data } = await res.json();

         setPosts(data);
      };

      fetchPosts();
   }, []);

   if (!posts) return <div>Loading...</div>;

   return (
      <div data-testid="page-client">
         <ul>
            {posts.map((post) => (
               <li data-testid="post-item" key={post.id}>
                  {post.title}
               </li>
            ))}
         </ul>
      </div>
   );
}

export default PageClient;
