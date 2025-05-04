"use client";

import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import { Page } from "@/components/page/page";
import { TINA_COMPONENTS } from "@/lib/tina/tina-components";
import { PageQuery } from "@tina/__generated__/types";

interface SinglePageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: PageQuery;
}

export function SinglePage(props: SinglePageProps) {
  const { data } = useTina(props);

  return (
    <Page>
      <Page.Title>{data.page.title}</Page.Title>
      <Page.Description description={data.page.description} />
      <TinaMarkdown components={TINA_COMPONENTS} content={data.page.body} />
    </Page>
  );
}
