interface Post {
   id: string;
   title: string;
   content: string;
   author: string;
   date: string;
   category: string;
}

export async function getPost(id: string) {
   const res = await fetch(
      `http://localhost:3000/data-fetching-and-caching/reusing-data-across-multiple-functions/${id}/api`,
      {
         cache: "force-cache",
      }
   );

   const post: Post = await res.json();

   return post;
}
