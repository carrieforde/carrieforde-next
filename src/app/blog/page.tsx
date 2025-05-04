import { Box } from "@/components/box/box";
import { Page } from "@/components/page/page";
import { BlogPostList } from "@/features/blog-post-list/blog-post-list";
import client from "@tina/__generated__/client";

async function getBlogPage() {
  const pageResponse = await client.queries.page({
    relativePath: "blog.mdx",
  });
  return pageResponse.data.page;
}

export default async function BlogPage() {
  const page = await getBlogPage();

  return (
    <Page>
      <Page.Title>{page.title}</Page.Title>
      <Page.Description description={page.description} />
      <Box as="section">
        <BlogPostList />
      </Box>
    </Page>
  );
}
