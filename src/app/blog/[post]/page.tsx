/* eslint-disable check-file/folder-naming-convention */
/* eslint-disable check-file/filename-naming-convention */
import { notFound } from "next/navigation";

import { SinglePost } from "@/features/single-post/single-post";
import client from "@tina/__generated__/client";

type PostTemplateProps = {
  params: Promise<{
    post: string;
  }>;
  searchParams: Record<string, string>;
};

export async function generateStaticParams() {
  const postsResponse = await client.queries.postConnection();
  const posts = postsResponse.data.postConnection.edges?.map((post) => ({
    post: post?.node?._sys.filename,
  }));

  return posts || [];
}

async function getPostData(post: string) {
  let data;

  try {
    data = await client.queries.post({ relativePath: `${post}.mdx` });
  } catch {
    // Check if the post exists. If not, return a 404.
    notFound();
  }

  return data;
}

export async function generateMetadata({ params }: PostTemplateProps) {
  const { post } = await params;
  const { data } = await getPostData(post);

  return {
    title: data.post.title,
    // description: data.post.description,
  };
}

export default async function PostTemplate({ params }: PostTemplateProps) {
  const { post } = await params;
  const props = await getPostData(post);

  return <SinglePost {...props} />;
}
