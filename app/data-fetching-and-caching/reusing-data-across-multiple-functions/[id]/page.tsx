import { notFound } from "next/navigation";
import { getPost } from "./getPost";

export type PageParams = Promise<{ id: string }>;

interface PageProps {
   params: PageParams;
}

async function Page({ params }: PageProps) {
   const { id } = await params;

   const post = await getPost(id);

   if (!post) notFound();

   return (
      <article>
         <h1>{post.title}</h1>
         <p>{post.content}</p>
      </article>
   );
}

export default Page;