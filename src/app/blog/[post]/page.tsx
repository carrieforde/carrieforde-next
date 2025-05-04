/* eslint-disable check-file/folder-naming-convention */
/* eslint-disable check-file/filename-naming-convention */
import { notFound } from "next/navigation";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import { Page } from "@/components/page/page";
import { TINA_COMPONENTS } from "@/lib/tina/tina-components";
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
  const { data } = await getPostData(post);

  return (
    <Page>
      <Page.Title>{data.post.title}</Page.Title>
      {/* <Page.Description description={data.post.description} /> */}
      <TinaMarkdown components={TINA_COMPONENTS} content={data.post.body} />
    </Page>
  );
}
