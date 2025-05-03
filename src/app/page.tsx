/* eslint-disable check-file/filename-naming-convention */
import { notFound } from "next/navigation";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import { Page } from "@/components/page/page";
import { TINA_COMPONENTS } from "@/lib/tina/tina-components";
import client from "@tina/__generated__/client";

async function getPageData() {
  let data;

  try {
    data = await client.queries.page({ relativePath: "home.mdx" });
  } catch {
    // Check if the page exists. If not, return a 404.
    notFound();
  }

  return data;
}

export async function generateMetadata() {
  const { data } = await getPageData();

  return {
    title: data.page.title,
    description: data.page.description,
  };
}

export default async function Home() {
  const { data } = await getPageData();

  return (
    <Page>
      <Page.Title>{data.page.title}</Page.Title>
      <Page.Description description={data.page.description} />
      <TinaMarkdown components={TINA_COMPONENTS} content={data.page.body} />
    </Page>
  );
}
