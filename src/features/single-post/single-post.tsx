"use client";

import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import { Page } from "@/components/page/page";
import { TINA_COMPONENTS } from "@/lib/tina/tina-components";
import { PostQuery } from "@tina/__generated__/types";

interface SinglePostProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: PostQuery;
}

export function SinglePost(props: SinglePostProps) {
  const { data } = useTina(props);

  return (
    <Page>
      <Page.Title>{data.post.title}</Page.Title>
      {/* <Page.Description description={data.post.description} /> */}
      <TinaMarkdown components={TINA_COMPONENTS} content={data.post.body} />
    </Page>
  );
}
