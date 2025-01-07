import { notFound } from "next/navigation";
import PostSchema from "../schemas/PostSchema";
import { Metadata, ResolvingMetadata } from "next";
import { Author } from "next/dist/lib/metadata/types/metadata-types";

export const dynamicParams = false;

export async function generateStaticParams() {
   const posts = await fetch("http://localhost:3000/data-fetching-and-caching/api", {
      cache: "force-cache",
   }).then((resolve) => resolve.json() as Promise<{ data: PostSchema[] }>);

   return posts.data.slice(0, 10).map((post: PostSchema) => ({
      id: String(post.id),
   }));
}

interface GenerateMetadataProps {
   params: Promise<{ id: string }>;
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata(
   { params, searchParams }: GenerateMetadataProps,
   parent?: ResolvingMetadata
): Promise<Metadata> {
   const { id } = await params;
   const post = await getPost(id);

   return {
      title: post.data.title,
      description: post.data.content,
      authors: post.data.author as Author,
   };
}

async function getPost(id: string) {
   const res = await fetch(
      `http://localhost:3000/data-fetching-and-caching/reusing-data-across-multiple-functions/${id}/api`,
      {
         cache: "force-cache",
      }
   );

   const post = (await res.json()) as {
      data: PostSchema;
   };

   return post;
}
interface PageProps extends GenerateMetadataProps {}

async function Page({ params }: PageProps) {
   const { id } = await params;

   const { data: post } = await getPost(id);

   if (!post.id) notFound();

   return (
      <article>
         <h1>{post.title}</h1>
         <p>{post.content}</p>
      </article>
   );
}

export default Page;
