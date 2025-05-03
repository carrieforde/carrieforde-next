/* eslint-disable check-file/folder-naming-convention */
import { notFound } from "next/navigation";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import { Page } from "@/components/page/page";
import { TINA_COMPONENTS } from "@/lib/tina/tina-components";
import client from "@tina/__generated__/client";

type PageTemplateProps = {
  params: Promise<{
    page: string;
  }>;
  searchParams: Record<string, string>;
};

export async function generateStaticParams() {
  const pagesResponse = await client.queries.pageConnection();
  const pages = pagesResponse.data.pageConnection.edges?.map((page) => ({
    page: page?.node?._sys.filename,
  }));

  return pages || [];
}

async function getPageData(page: string) {
  let data;

  try {
    data = await client.queries.page({ relativePath: `${page}.mdx` });
  } catch {
    // Check if the page exists. If not, return a 404.
    notFound();
  }

  return data;
}

export async function generateMetadata({ params }: PageTemplateProps) {
  const { page } = await params;
  const { data } = await getPageData(page);

  return {
    title: data.page.title,
    description: data.page.description,
  };
}

export default async function PageTemplate({ params }: PageTemplateProps) {
  const { page } = await params;
  const { data } = await getPageData(page);

  return (
    <Page>
      <Page.Title>{data.page.title}</Page.Title>
      <Page.Description description={data.page.description} />
      <TinaMarkdown components={TINA_COMPONENTS} content={data.page.body} />
    </Page>
  );
}
