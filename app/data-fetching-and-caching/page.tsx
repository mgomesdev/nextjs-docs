interface Posts {
   id: number;
   title: string;
   content: string;
   author: string;
   date: string;
   category: string;
}

export default async function Page() {
   const data = await fetch("https://api.vercel.app/blog");
   const posts: Posts[] = await data.json();

   return (
      <ul>
         {posts.map((post) => (
            <li data-testid="post-item" key={post.id}>
               {post.title}
            </li>
         ))}
      </ul>
   );
}
