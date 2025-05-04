import { Card } from "@/components/card/card";
import { Link } from "@/components/link/link";
import { List } from "@/components/list/list";
import { Text } from "@/components/text/text";
import styles from "@/features/blog-post-list/blog-post-list.module.css";
import client from "@tina/__generated__/client";

async function getPosts() {
  const postsResponse = await client.queries.postConnection({
    sort: "date",
    last: 5,
  });
  const posts = postsResponse.data.postConnection.edges?.map((post) => ({
    ...post?.node,
    date: post?.node?.date
      ? new Date(post?.node?.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "",
    pathname: `/blog/${post?.node?._sys.filename}`,
    excerpt: post?.node?.description,
  }));

  return posts || [];
}

export async function BlogPostList() {
  const posts = await getPosts();

  return (
    <List className={styles.blogPostList}>
      {posts.map((post) => (
        <List.Item key={post.pathname} className={styles.blogPostListItem}>
          <Card>
            <Card.Header>
              <Link href="/javascript" variant="overline">
                {post.category}
              </Link>
              <Card.Title href={post.pathname}>{post.title}</Card.Title>

              <Card.Meta date={post.date} timeToRead={9} />
            </Card.Header>
            <Text key="content">{post.excerpt}</Text>
          </Card>
        </List.Item>
      ))}
    </List>
  );
}
